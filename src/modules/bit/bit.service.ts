import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom, map } from 'rxjs';
import { Transaction } from './transaction.entity';
import { IsNull, Not, Repository } from 'typeorm';

@Injectable()
export class BitService {
  constructor(
    private http: HttpService,
    private config: ConfigService,
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  async generateBitcoinAddress(address) {
    try {
      const responseData = await lastValueFrom(
        this.http
          .post(this.config.get('baseUrl') + 'addresses/generate', address, {
            headers: { Authorization: this.config.get('bearer') },
          })
          .pipe(
            map((response) => {
              return response.data;
            }),
          ),
      );
      const transact = new Transaction();
      transact.nobGeneratedAddress = responseData.data.address;
      return await this.transactionRepository.save(transact);
    } catch (e) {
      console.log(e);
    }
  }

  async sendBitcoin(sendParam) {
    try {
      const responseData = await lastValueFrom(
        this.http
          .post(
            this.config.get('baseUrl') + 'wallets/send_bitcoin',
            sendParam,
            {
              headers: { Authorization: this.config.get('bearer') },
            },
          )
          .pipe(
            map((response) => {
              return response.data;
            }),
          ),
      );
      // return responseData;
      const transact = new Transaction();
      transact.nobSendData = responseData.data;
      return await this.transactionRepository.save(transact);
    } catch (e) {
      console.log(e);
    }
  }

  async viewTransactions() {
    const allSendTransactions = await this.transactionRepository.find({
      nobSendData: Not(IsNull()),
    });
    const finalRes = [];
    allSendTransactions.forEach((e) => {
      finalRes.push(e.nobSendData);
    });

    return finalRes;
  }
}

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class BitService {
  constructor(private http: HttpService, private config: ConfigService) {}

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
      return responseData;
    } catch (e) {
      console.log(e);
    }
  }

  async sendBitcoin(sendParam) {
    try {
      const responseData = await lastValueFrom(
        this.http
          .post(this.config.get('baseUrl') + 'addresses/generate', sendParam, {
            headers: { Authorization: this.config.get('bearer') },
          })
          .pipe(
            map((response) => {
              return response.data;
            }),
          ),
      );
      return responseData;
    } catch (e) {
      console.log(e);
    }
  }
}

import { Repository, EntityRepository } from 'typeorm';
import { Transaction } from './transaction.entity';

@EntityRepository(Transaction)
export class TransactionRespository extends Repository<Transaction> {}

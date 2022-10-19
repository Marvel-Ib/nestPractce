import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Transaction } from '../modules/bit/transaction.entity';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'bit',
  entities: [Transaction, __dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transactions')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('simple-json', { nullable: true })
  nobSendData;

  @Column({ nullable: true })
  nobGeneratedAddress: string;
}

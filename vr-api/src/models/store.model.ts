import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { IsString, MaxLength, Min, IsNotEmpty, IsNumber } from 'class-validator';

@Entity()
export class StoreModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60 })
  descricao: string;

}

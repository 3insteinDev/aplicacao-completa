import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { IsString, MaxLength, Min, IsNotEmpty, IsNumber } from 'class-validator';

@Entity()
export class ProductModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60 })
  descricao: string;

  @Column('numeric', { precision: 13, scale: 3 })
  custo: number;

  @Column('bytea', { nullable: true })
  imagem: Buffer;

}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProductModel } from './product.model';
import { StoreModel } from './store.model';

@Entity()
export class ProductStoreModel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductModel, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductModel;

  @ManyToOne(() => StoreModel, { nullable: false })
  @JoinColumn({ name: 'store_id' })
  store: StoreModel;

  @Column('numeric', { precision: 13, scale: 3 })
  precoVenda: number;
}

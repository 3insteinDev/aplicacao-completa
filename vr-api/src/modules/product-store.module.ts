import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product.module';
import { StoreModule } from './store.module';
import { ProductStoreController } from '../controllers/product-store.controller'; 
import { ProductStoreModel } from '../models/product-store.model'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductStoreModel]),
    ProductModule,
    StoreModule,
  ],
  controllers: [ProductStoreController],
})
export class ProductStoreModule {}

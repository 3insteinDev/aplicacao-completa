import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from '../controllers/product.controller'; // Corrigindo o caminho de importação
import { ProductModel } from '../models/product.model'; // Corrigindo o caminho de importação

@Module({
  imports: [TypeOrmModule.forFeature([ProductModel])],
  controllers: [ProductController],
})
export class ProductModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreController } from '../controllers/store.controller';
import { StoreModel } from '../models/store.model';

@Module({
  imports: [TypeOrmModule.forFeature([StoreModel])],
  controllers: [StoreController],
})
export class StoreModule {}
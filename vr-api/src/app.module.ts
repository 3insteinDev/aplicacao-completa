import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './modules/product.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StoreModule } from './modules/store.module';
import { ProductStoreModule } from './modules/product-store.module';

@Module({
  imports: [
	StoreModule,
    ProductModule,
	ProductStoreModule, 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DB_CONNECTION_STRING'),
        entities: ["dist/**/*.model.js"],
        synchronize: true,
      })
    })
  ]
})
export class AppModule {}

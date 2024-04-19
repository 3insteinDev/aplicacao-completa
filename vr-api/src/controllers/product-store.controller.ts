import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductStoreModel } from 'src/models/product-store.model';
import { ProductStoreSchema } from 'src/schemas/product-store.schema';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('exemplo-product-store')
@Controller('/product-store')
export class ProductStoreController {
  constructor(
    @InjectRepository(ProductStoreModel) private model: Repository<ProductStoreModel>,
  ) {}

  @Post()
  public async create(@Body() body: ProductStoreSchema): Promise<ProductStoreModel> {
    return this.model.save(body);
  }

  @Get(':id')
  public async getOne(@Param('id', ParseIntPipe) id: number): Promise<ProductStoreModel> {
    const productStore = await this.model.findOne({ where: { id } });

    if (!productStore) {
      throw new NotFoundException(`Não foi possível encontrar o registro de associação com o id ${id}`);
    }

    return productStore;
  }

  @Get()
  public async getAll(): Promise<ProductStoreModel[]> {
    return this.model.find();
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<ProductStoreSchema>,
  ): Promise<ProductStoreModel> {
    const productStore = await this.model.findOne({ where: { id } });

    if (!productStore) {
      throw new NotFoundException(`Não foi possível encontrar o registro de associação com o id ${id}`);
    }

    await this.model.update({ id }, body);

    return this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const productStore = await this.model.findOne({ where: { id } });

    if (!productStore) {
      throw new NotFoundException(`Não foi possível encontrar o registro de associação com o id ${id}`);
    }

    await this.model.delete(id);

    return `O registro de associação com id ${id} foi deletado com sucesso`;
  }
}

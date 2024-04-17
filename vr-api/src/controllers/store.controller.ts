import {	Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductModel } from 'src/models/product.model';
import { ProductSchema } from 'src/schemas/product.schema';
import { StoreModel } from 'src/models/store.model';
import { StoreSchema } from 'src/schemas/store.schema';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('exemplo-store')
@Controller('/store')
export class StoreController {
  constructor(
	@InjectRepository(StoreModel) private model: Repository<StoreModel>,
  ) {}

  @Post()
  public async create(@Body() body:StoreSchema): Promise<StoreModel> {
	return this.model.save(body);
  }

  @Get(':id')
  public async getOne(
	@Param('id', ParseIntPipe) id: number,
  ): Promise<StoreModel> {
	const store = await this.model.findOne({ where: { id } });

	if (!store) {
	  throw new NotFoundException(`Não achei a loja com o id ${id}`);
	}

	return store;
  }

  @Get()
  public async getAll(): Promise<StoreModel[]> {
	return this.model.find();
  }

  @Put(':id')
  public async update(
	@Param('id', ParseIntPipe) id: number,
	@Body() body: Partial<StoreSchema>,
  ): Promise<StoreModel> {
	const store = await this.model.findOne({ where: { id } });

	if (!store) {
	  throw new NotFoundException(`Não achei uma loja com o id ${id}`);
	}

	await this.model.update({ id }, body);

	return this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
	const store = await this.model.findOne({ where: { id } });

	if (!store) {
	  throw new NotFoundException(`Não achei uma loja com o id ${id}`);
	}

	await this.model.delete(id);

	return `A loja com id ${id} foi deletada com sucesso`;
  }
}
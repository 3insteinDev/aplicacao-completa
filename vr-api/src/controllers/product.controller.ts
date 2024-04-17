import {	Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductModel } from 'src/models/product.model';
import { ProductSchema } from 'src/schemas/product.schema';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('exemplo-produto')
@Controller('/product')
export class ProductController {
  constructor(
	@InjectRepository(ProductModel) private model: Repository<ProductModel>,
  ) {}

  @Post()
  public async create(@Body() body: ProductSchema): Promise<ProductModel> {
	return this.model.save(body);
  }

  @Get(':id')
  public async getOne(
	@Param('id', ParseIntPipe) id: number,
  ): Promise<ProductModel> {
	const product = await this.model.findOne({ where: { id } });

	if (!product) {
	  throw new NotFoundException(`Não achei um produto com o id ${id}`);
	}

	return product;
  }

  @Get()
  public async getAll(): Promise<ProductModel[]> {
	return this.model.find();
  }

  @Put(':id')
  public async update(
	@Param('id', ParseIntPipe) id: number,
	@Body() body: Partial<ProductSchema>,
  ): Promise<ProductModel> {
	const product = await this.model.findOne({ where: { id } });

	if (!product) {
	  throw new NotFoundException(`Não achei um produto com o id ${id}`);
	}

	await this.model.update({ id }, body);

	return this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
	const product = await this.model.findOne({ where: { id } });

	if (!product) {
	  throw new NotFoundException(`Não achei um produto com o id ${id}`);
	}

	await this.model.delete(id);

	return `O produto com id ${id} foi deletado com sucesso`;
  }
}
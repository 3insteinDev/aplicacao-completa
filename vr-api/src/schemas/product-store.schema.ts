import { IsString, MaxLength, IsNotEmpty, IsNumber, Min } from "class-validator";

export class ProductStoreSchema {

  @IsString()
  @MaxLength(60)
  descricao: string;

  @IsNumber()
  @Min(0.01, { message: 'O custo deve ser um número positivo.' }) 
  custo: number;

  @IsNumber()
  @Min(0.01, { message: 'O preço de venda deve ser um número positivo.' }) 
  precoVenda: number;

}

import { IsString, MaxLength, IsNotEmpty, IsNumber, Min } from "class-validator";

export class ProductSchema {
	
  @IsString()
  @MaxLength(60)
  descricao: string;

  @IsNumber()
  @Min(0.01, { message: 'O custo deve ser um número positivo.' }) 
  custo: number;

}

import { IsString, MaxLength, IsNotEmpty, IsNumber, Min } from "class-validator";

export class StoreSchema {
	
  @IsString()
  @MaxLength(60)
  descricao: string;

}

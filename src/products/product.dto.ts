import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class ProductDto{

    
    @IsString()
    @ApiProperty()
    readonly name?: string;

    @IsNumber()
    @ApiProperty()
    readonly price: Number;

    @IsString()
    @ApiProperty()
    readonly category?: string;
}
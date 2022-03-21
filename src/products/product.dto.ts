import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class ProductDto{

    
    @IsString()
    @ApiProperty()
    readonly name?: string;

    @IsNumber()
    @ApiProperty()
    readonly price: Number;

    @ApiProperty({type: String})
    @IsString()
    @IsNotEmpty()
    public category: string;
}
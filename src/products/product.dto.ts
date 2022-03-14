import { ApiProperty } from "@nestjs/swagger";

export class ProductDto{

    @ApiProperty()
    readonly name?: String;

    @ApiProperty()
    readonly price?: Number;

    @ApiProperty()
    readonly category?: String;
}
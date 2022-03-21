import { Body, Controller, Delete, Get, Param, Post, Put,HttpException,HttpStatus, UseFilters, ForbiddenException } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductDto } from "./product.dto";
import { Product } from "./product.entity";
import { DeleteResult, UpdateResult } from "typeorm";
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger";
import { GlobalExceptionFilter } from "src/exceptions/typeorm/global-exceptions-filter";



@Controller('products')
export class ProductsController{
    constructor(private readonly ProductService: ProductService) {}

    //await issue see
    //return types of functions. How to handle different return types
    //naming conventions

    @Get()
    @ApiOperation({
        summary: 'Request to get all the products present in the table',
        description: 'A successful request returns a list of all products.'
      })
    async Get(): Promise<Product[]>{
            return this.ProductService.getProducts()
    }


    @Get(':id')
    @ApiParam({ name: "id", required: true, description: 'The integer ID associated with a created product'})
    async GetById(
            @Param('id') id: number
    ): Promise<Product>{
            return this.ProductService.getProductById(id)
    }


    //@UseFilters(new GlobalExceptionFilter())
    @Post()
    @ApiResponse({type: ProductDto})
    public async Create(@Body() body: ProductDto): Promise<ProductDto & Product>{
            return this.ProductService.createProduct(body)
    }



    @Delete(':id')
    @UseFilters(new GlobalExceptionFilter())
    @ApiParam({ name: "id", required: true, description: 'The integer ID associated with a created product'})
    async Delete(
        @Param('id') id:number
    ):Promise<DeleteResult>{
            return this.ProductService.deleteProduct(id)
       
    }

    @Put(':id')
    @ApiBody({
            description: 'update values',
            type: ProductDto
    })
    async Update(
        @Param('id') id:number,
        @Body() product: ProductDto
    ):Promise<UpdateResult>{
            const updateResult = await this.ProductService.updateProduct(id,product)
            if(updateResult.affected < 1){
                throw new HttpException('Product Not Found',HttpStatus.NOT_FOUND)
            }
            else{
                    return updateResult
            }
    }
}
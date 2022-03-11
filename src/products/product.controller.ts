import { Body, Controller, Delete, Get, Param, Post, Put,HttpException,HttpStatus, UseFilters, ForbiddenException } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductDto } from "./product.dto";
import { Product } from "./product.entity";
import { DeleteResult, UpdateResult } from "typeorm";



@Controller('products')
export class ProductsController{
    constructor(private readonly ProductService: ProductService) {}

    //await issue see
    //return types of functions. How to handle different return types
    //naming conventions

    @Get()
    async Get(): Promise<Product[]>{
            return this.ProductService.getProducts()
    }

    @Post()
    async Create(@Body() product: ProductDto): Promise<ProductDto & Product>{
            return this.ProductService.createProduct(product) 
    }



    @Delete(':id')
    async Delete(
        @Param('id') id:number
    ):Promise<DeleteResult>{
            return this.ProductService.deleteProduct(id)
    }

    @Put(':id')
    async Update(
        @Param('id') id:number,
        @Body() product: ProductDto
    ):Promise<UpdateResult>{
            return this.ProductService.updateProduct(id,product)
    }
}
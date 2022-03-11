import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Product } from "./product.entity";
import { ProductDto } from "./product.dto";

//exception handling
//Raw empty ?
//how to get Deleted or updated object return
@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ){}
    //This function will actually return all the products available
    async getProducts(): Promise<Product[] | any>{
        try{
            return this.productRepository.find()
        }catch(e){
            return e
        }
        
    }

    // create, save
    async createProduct(productData: ProductDto): Promise<ProductDto & Product | any>{
        try{
            return this.productRepository.save(productData)
        }catch(e){
            return e
        }
            
    }

    async deleteProduct(id: number): Promise<DeleteResult>  {
        try{
            return this.productRepository.delete(id)
        }catch(e){
            return e
        }
        
    }

    async updateProduct(id:number, productData: ProductDto): Promise<UpdateResult>{
        try{
            return this.productRepository.update(id, productData)
        }catch(e){
            return e
        }
        
    }



}
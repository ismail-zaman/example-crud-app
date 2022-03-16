import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, TreeRepository, UpdateResult } from "typeorm";
import { Product } from "./product.entity";
import { ProductDto } from "./product.dto";
import { ObjectNotFoundException } from "src/exceptions/object-not-found-exception";
import { ObjectNotCreatedException } from "src/exceptions/object-not-created";

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
            return await this.productRepository.save(productData)
            
    }

    async deleteProduct(id: number): Promise<DeleteResult>  {
            return this.productRepository.delete(id)
    }

    async updateProduct(id:number, productData: ProductDto): Promise<UpdateResult>{
        try{
            return this.productRepository.update(id, productData)
        }catch(e){
            return e
        }
        
    }

    async getProductById(id:number): Promise<Product>{
        try{
            
            const product = await this.productRepository.findOne({
                where:{id}
            })
            
            if(!product){
                throw new ObjectNotFoundException("Product", id);
            }
            return product
        }catch(e){
            return e
        }
    }



}
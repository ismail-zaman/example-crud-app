import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: String;
    

    @Column()
    category: String;
    nullable: false;

    @Column()
    price: Number;

}
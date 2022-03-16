import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: string;
    

    @Column()
    category: string;
    nullable: false;

    @Column()
    price: Number;

}
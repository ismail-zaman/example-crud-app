import { Entity, Column, PrimaryGeneratedColumn, DataTypeNotSupportedError } from 'typeorm';


@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: string;
    

    @Column({type: 'varchar',length: 120})
    public category: string;
    //nullable: faxlse;

    @Column()
    price: Number;

}
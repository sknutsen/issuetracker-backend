import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Group extends BaseEntity {
    @PrimaryGeneratedColumn()
    public Id: number;

    @Column("text")
    public Name: string;
}
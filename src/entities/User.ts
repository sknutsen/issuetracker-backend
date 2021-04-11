import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./Group";
import { Issue } from "./Issue";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    public Id: number;

    @Column("text")
    public Name: string;

    @OneToMany(type => Issue, issue => issue.User, {
        eager: true
    })
    public Issues: Issue[];

    @ManyToMany(type => Group, group => group.Users)
    @JoinTable()
    public Groups: Group[];
}
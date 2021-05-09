import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Issue } from "./Issue";
import { User } from "./User";

@Entity()
export class Group extends BaseEntity {
    @PrimaryGeneratedColumn()
    public Id: number;

    @Column("text")
    public Name: string;

    @OneToMany(type => Issue, issue => issue.Group)
    public Issues: Issue[];

    @ManyToMany(type => User, user => user.Groups, {
        eager: true
    })
    @JoinTable()
    public Users: User[];
}
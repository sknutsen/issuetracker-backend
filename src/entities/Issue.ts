import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./Group";
import { User } from "./User";

@Entity()
export class Issue extends BaseEntity {
    @PrimaryGeneratedColumn()
    public Id: number;

    @ManyToOne(type => Group)
    @JoinColumn()
    public Group: number;

    @ManyToOne(type => User)
    @JoinColumn()
    public User: number;

    @Column("text")
    public Title: string;

    @Column("text")
    public Description: string;

    @Column("text")
    public Severity: string;
}
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./Group";
import { User } from "./User";

@Entity()
export class Issue extends BaseEntity {
    @PrimaryGeneratedColumn()
    public Id: number;

    @ManyToOne(type => Group, group => group.Issues)
    @JoinColumn()
    public Group: Group;

    @ManyToOne(type => User, user => user.Issues)
    @JoinColumn()
    public User: User;

    @Column("text")
    public Title: string;

    @Column("text")
    public Description: string;

    @Column("text")
    public Severity: string;

    @Column("datetime", {default: Date.now()})
    public PostedAt: Date;

    @Column("datetime", {default: Date.now()})
    public UpdatedAt: Date;
}
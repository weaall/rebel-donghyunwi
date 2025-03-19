import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
import { IsEmail, Length, Matches } from "class-validator";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    @Length(2, 50, { message: "Name must be between 2 and 50 characters" })
    name: string;

    @Column({ unique: true })
    @IsEmail({}, { message: "Invalid email format" })
    email: string;

    @Column()
    @Length(8, 100, { message: "Password must be at least 8 characters long" })
    @Matches(/^(?=.*[a-zA-Z])(?=.*\d).+$/, { message: "Password must contain letters and numbers" })
    password: string;

    @CreateDateColumn()
    createdAt: Date;
}

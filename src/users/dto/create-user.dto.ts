import { IsEmail, Length, Matches, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: "Name is required" })
    @Length(2, 50, { message: "Name must be between 2 and 50 characters" })
    name: string;

    @IsNotEmpty({ message: "Email is required" })
    @IsEmail({}, { message: "Invalid email format" })
    email: string;

    @IsNotEmpty({ message: "Password is required" })
    @Length(8, 100, { message: "Password must be at least 8 characters long" })
    @Matches(/^(?=.*[a-zA-Z])(?=.*\d).+$/, {
        message: "Password must contain letters and numbers",
    })
    password: string;
}

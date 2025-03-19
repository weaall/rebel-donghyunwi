import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggerModule } from "nestjs-pino";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.module";
import { User } from "./users/entities/user.entity";

@Module({
    imports: [
        LoggerModule.forRoot(),
        UsersModule,
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "mysql",
            port: 3306,
            username: "mysql",
            password: "mysql",
            database: "mysql",
            entities: [User],
            synchronize: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

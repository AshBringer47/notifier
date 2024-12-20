import { Module } from "@nestjs/common";
import { ConfigModule } from "./config/config.module";
import { LoggerModule } from "~common/logger/logger.module";
import { MongooseDatabaseModule } from "~src/database/database.module";
import { CommonModule } from "~src/modules/common/common.module";
import { MessageModule } from "~src/modules/messages/message.module";

@Module({
  imports: [
    ConfigModule,
    MongooseDatabaseModule,
    LoggerModule,
    MessageModule,
    CommonModule,
  ],
})
export class AppModule {}

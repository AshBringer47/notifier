import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Message, MessageSchema } from "./schemas/message.schema";
import { MessageCollectionRepository } from "~src/modules/messages/repositories/message-collection.repository";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  providers: [MessageCollectionRepository],
  controllers: [],
  exports: [MessageCollectionRepository],
})
export class MessageModule {}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { MessageStatus } from "~src/modules/messages/types/message-status.enum";

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Prop()
  correlation_id: string;
  @Prop()
  message: string;
  @Prop()
  receiver: string;
  @Prop()
  subject: string;
  @Prop()
  status: MessageStatus;
  @Prop({ default: Date.now })
  created_at: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);

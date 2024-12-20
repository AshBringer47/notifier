import { MessageDocument, Message } from "../schemas/message.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";

@Injectable()
export class MessageCollectionRepository {
  constructor(
    @InjectModel(Message.name)
    private messageModel: Model<MessageDocument>,
  ) {}

  async create(body: any): Promise<Message> {
    const response = new this.messageModel(body);
    return await response.save();
  }

  async findByCorrelationId(correlationId: string): Promise<Message> {
    return this.messageModel
      .findOne({
        correlation_id: correlationId,
      })
      .exec();
  }
}

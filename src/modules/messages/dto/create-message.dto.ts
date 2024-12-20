import { MessageStatus } from "~src/modules/messages/types/message-status.enum";

export class createMessageDto {
  message: string;
  receiver: string;
  status: MessageStatus;
  correlation_id: string;
  error?: string;
}

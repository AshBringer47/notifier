import { createTransport, Transporter } from "nodemailer";
import { Injectable } from "@nestjs/common";
import { ApplicationLogger } from "~common/logger/logger.service";
import { sendMailDto } from "~src/modules/messages/dto/send-mail.dto";
import { MessageStatus } from "~src/modules/messages/types/message-status.enum";
import { MessageCollectionRepository } from "~src/modules/messages/repositories/message-collection.repository";
import _CONFIG from "~src/config";

@Injectable()
export class MailerService {
  private transporter: Transporter;
  constructor(
    private readonly logger: ApplicationLogger,
    private readonly messageRepository: MessageCollectionRepository,
  ) {
    this.logger.setContext(MailerService.name);
    this.transporter = createTransport({
      service: "gmail",
      auth: _CONFIG.mailer,
    });
  }

  async sendMail(dto: sendMailDto, correlation_id: string) {
    const { to, subject, text } = dto;
    const mailOptions = {
      from: _CONFIG.mailer.user,
      to,
      subject,
      text,
    };
    try {
      const info = await this.transporter.sendMail(mailOptions);
      this.logger.log(`Email sent: ${info.response}`);
      await this.messageRepository.create({
        message: text,
        receiver: to,
        status: MessageStatus.SENT,
        correlation_id,
      });
    } catch (error) {
      this.logger.error(`Failed to send email: ${error}`);
      await this.messageRepository.create({
        message: text,
        receiver: to,
        status: MessageStatus.FAILED,
        error: JSON.stringify(error),
        correlation_id,
      });
    }
  }
}

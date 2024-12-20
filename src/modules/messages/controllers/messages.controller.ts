import {Controller, Get, Query} from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiTags,
} from "@nestjs/swagger";
import { ExceptionErrorDto } from "~common/dto/exception.error.dto";
import {MessageCollectionRepository} from "~src/modules/messages/repositories/message-collection.repository";

@ApiTags("messages")
@Controller("messages")
export class MessagesController {
  constructor(private readonly messageCollectionRepository: MessageCollectionRepository) {}
  @Get("/")
  @ApiBadRequestResponse({ type: ExceptionErrorDto })
  @ApiNotFoundResponse({ type: ExceptionErrorDto })
  public async getByCorrelationId(@Query() querystring: any): Promise<any> {
    return await this.messageCollectionRepository.findByCorrelationId(querystring.correlation_id);
  }
}

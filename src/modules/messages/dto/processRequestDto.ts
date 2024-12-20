export class ProcessRequestDto {
  group: string;
  clientServiceId: string;
  method: string;
  request: unknown;
  correlationId?: string;
}

import { Controller, Get } from "npm:@nestjs/common";

@Controller("status")
export class HealthController {
  @Get()
  getHealth(): string {
    return "Health status: OK";
  }
}

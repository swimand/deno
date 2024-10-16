import { Controller, Get } from "npm:@nestjs/common";

@Controller("app")
export class AppController {
  @Get()
  getHello(): string {
    return "Hello World!";
  }
}

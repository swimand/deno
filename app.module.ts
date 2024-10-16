import { Module } from "npm:@nestjs/common";
import { AppController } from "./app.controller.ts";
import { HealthController } from "./health.controller.ts";

@Module({
  imports: [],
  controllers: [AppController, HealthController],
})
export class AppModule {}

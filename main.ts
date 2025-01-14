import { NestFactory } from "npm:@nestjs/core";
import { AppModule } from "./app.module.ts";
import { HealthController } from "./health.controller.ts";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

if (import.meta.main) {
  bootstrap();
}

export function add(a: number, b: number): number {
  return a + b;
}

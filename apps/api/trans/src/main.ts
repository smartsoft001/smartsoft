import * as bodyParser from "body-parser";
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";

import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.port || 3334;
  app.use(bodyParser.urlencoded({ extended: true }));

  app.enableCors();

  if (process.env.URL_PREFIX) {
    app.setGlobalPrefix(process.env.URL_PREFIX)
  }

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, () => {
    console.log("Listening at http://localhost:" + port);
  });
}

bootstrap();

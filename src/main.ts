import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
import { ConfigModule } from '@nestjs/config';
import {GlobalExceptionFilter} from './exceptions/typeorm/global-exceptions-filter'
ConfigModule.forRoot();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalExceptionFilter())

  const config = new DocumentBuilder()
    .setTitle('Products CRUD')
    .setDescription('The products API description')
    .setVersion('1.0')
    .addTag('Products')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  


  await app.listen(process.env.PORT || 3000);
}
bootstrap();

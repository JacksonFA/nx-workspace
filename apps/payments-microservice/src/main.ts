import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['moving-man-11816-us1-kafka.upstash.io:9092'],
          sasl: {
            mechanism: 'scram-sha-256',
            username: 'bW92aW5nLW1hbi0xMTgxNiRozmi5A4DfrsU-ILcOvDQQeCtLvYsoxVb6ZlA37U0',
            password: '2ecmz9QRDdowBNWjtuOsn3TiQ5zXTcvXi94zqOP35E9HzfD625CmwPfLb53ENa9AW7ih0A=='
          },
          ssl: true
        },
        consumer: {
          groupId: 'payment-consumer',
        },
      },
    }
  );
  await app.listen();
  Logger.log(
    `🚀 Payments-Microservice is running on: https://test1-4lba.onrender.com`,
    'PAYMENTS-MICROSERVICE'
  );
}

bootstrap();

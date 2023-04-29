import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            brokers: ['moving-man-11816-us1-kafka.upstash.io:9092'],
            sasl: {
              mechanism: 'scram-sha-256',
              username: 'bW92aW5nLW1hbi0xMTgxNiRozmi5A4DfrsU-ILcOvDQQeCtLvYsoxVb6ZlA37U0',
              password: '2ecmz9QRDdowBNWjtuOsn3TiQ5zXTcvXi94zqOP35E9HzfD625CmwPfLb53ENa9AW7ih0A=='
            },
            ssl: true
          },
          consumer: {
            groupId: 'auth-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

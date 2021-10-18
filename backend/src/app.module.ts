import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './configs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongodbConfig } from './configs/config.interface';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),

    // Mongoose
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const configMongodbUsers =
          configService.get<MongodbConfig>('mongodbUsers');
        return {
          uri: `mongodb://${configMongodbUsers.username}:${configMongodbUsers.password}@${configMongodbUsers.host}:${configMongodbUsers.port}/${configMongodbUsers.database}`,
          connectionName: 'users',
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

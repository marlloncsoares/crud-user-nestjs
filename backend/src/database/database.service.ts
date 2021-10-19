import { Injectable } from '@nestjs/common';
import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { MongodbConfig } from 'src/configs/config.interface';

@Injectable()
export class DatabaseService implements MongooseOptionsFactory {
  // Class attributes
  private readonly host: string;
  private readonly database: string;
  private readonly username: string;
  private readonly password: string;
  private readonly port: number;

  // Constructor
  constructor(private readonly configService: ConfigService) {
    this.host = this.configService.get<MongodbConfig>('mongodb').host;
    this.database = this.configService.get<MongodbConfig>('mongodb').database;
    this.username = this.configService.get<MongodbConfig>('mongodb').username;
    this.password = this.configService.get<MongodbConfig>('mongodb').password;
    this.port = this.configService.get<MongodbConfig>('mongodb').port;
  }

  /**
   * Method Defines options for
   * mongoose configuration.
   *
   * @returns MongooseModuleOptions
   */
  createMongooseOptions(): MongooseModuleOptions {
    let uri = `mongodb://`;

    if (this.username && this.password) {
      uri = `${uri}${this.username}:${this.password}@`;
    }

    uri = `${uri}${this.host}:${this.port}/${this.database}`;

    const mongooseOptions: MongooseModuleOptions = {
      uri,
    };

    return mongooseOptions;
  }
}

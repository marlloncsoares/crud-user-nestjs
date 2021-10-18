export interface Config {
  mongodb: MongodbConfig;
}

export interface MongodbConfig {
  username: string;
  password: string;
  host: string;
  port: number;
  database: string;
}

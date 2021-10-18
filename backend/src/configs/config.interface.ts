export interface Config {
  mongodbUsers: MongodbConfig;
  mongodbConnections?: MongodbConnection;
}

export interface MongodbConfig {
  username: string;
  password: string;
  host: string;
  port: number;
  database: string;
  uri?: string;
}

export interface MongodbConnection {
  uriUsers: string;
}

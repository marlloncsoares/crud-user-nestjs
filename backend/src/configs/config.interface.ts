export interface Config {
  mongodb: MongodbConfig;
  graphql: GraphqlConfig;
}

export interface MongodbConfig {
  username: string;
  password: string;
  host: string;
  port: number;
  database: string;
  uri?: string;
}

export interface GraphqlConfig {
  playgroundEnabled: boolean;
  debug: boolean;
  sortSchema: boolean;
}

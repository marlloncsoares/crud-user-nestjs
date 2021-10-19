import { Config } from './config.interface';

export default (): Config => {
  return {
    mongodb: {
      username: process.env.MONGODB_USERNAME,
      password: process.env.MONGODB_PASSWORD,
      host: process.env.MONGODB_HOST,
      port: parseInt(process.env.MONGODB_PORT, 10) || 27027,
      database: process.env.MONGODB_DATABASE,
    },
  };
};

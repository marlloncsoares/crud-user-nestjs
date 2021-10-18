import { Config } from './config.interface';

export default (): Config => {
  return {
    mongodbUsers: {
      username: process.env.CONNECTION_USERS_MONGODB_USERNAME,
      password: process.env.CONNECTION_USERS_MONGODB_PASSWORD,
      host: process.env.CONNECTION_USERS_MONGODB_HOST,
      port: parseInt(process.env.CONNECTION_USERS_MONGODB_PORT, 10) || 27027,
      database: process.env.CONNECTION_USERS_MONGODB_DATABASE,
    },
  };
};

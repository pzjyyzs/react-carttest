import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import userConfig from './config';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_\]';

  // add your egg config in here
  config.middleware = [];

  config.cors = {
    origin: () => '*',
    allowMethods: 'GET,POST,PUT,DELETE,HEAD,PATCH',
    credentials: true
  }

  config.security = {
    csrf: {
      enable: false
    }
  }
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    ...userConfig
  };
};

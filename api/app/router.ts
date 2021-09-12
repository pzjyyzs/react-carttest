import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.post('/api/query', controller.api.getQueries);
};

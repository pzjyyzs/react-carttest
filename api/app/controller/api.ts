import { Controller } from 'egg';
import { IHttpPostData } from '../../typings';

export default class ApiController extends Controller {
  public async getQueries() {
    const { ctx } = this;
    
    const { subject, model }: IHttpPostData = ctx.request.body;
    ctx.body = await ctx.service.api.getQueries({ subject, model });
  }
}

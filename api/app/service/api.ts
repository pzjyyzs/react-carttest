import { Service } from 'egg';
import { IHttpGetParams, IHttpPostData, MODELS, SUBJECT, TEST_TYPES } from '../../typings';

/**
 * Test Service
 */
export default class Api extends Service {

  public async getQueries ({ subject, model }: IHttpPostData): Promise<any> {
    const { ctx }  = this;
    const _subject: SUBJECT = subject || SUBJECT.s1;
    const _model: MODELS = model || MODELS.c1;
    const _testType: TEST_TYPES = TEST_TYPES.rand;

    return ctx.httpGet(<IHttpGetParams>{
      url: '/query',
      data: {
        subject: _subject,
        model: _model,
        testType: _testType
      },
      success (data) {
        return data;
      },
      fail (err) {
        throw new Error('Request failed' + err)
      }
    })
  }
}

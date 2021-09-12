import { IHttpGetParams } from "../../typings";

const nodeFetch = require('node-fetch');


module.exports = {
    httGet (options: IHttpGetParams): Promise<void> {
        const { url, data, success, fail } = options;
        const { utils, config } = this.app;

        return nodeFetch(config.BASE_URL + url + utils.formatParams(data, config.APP_KEY))
            .then(res => res.json())
            .then(data => success(data))
            .catch(err => fail(err));
    }
}
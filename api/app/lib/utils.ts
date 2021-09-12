function typeOf (value: any): string {
    if (value === null) {
        return 'null';
    }

    if (typeof (value) !== 'object') {
        return typeof(value);
    }

    const toStr = Object.prototype.toString;
    const types = {
        '[object Object]': 'Object',
        '[object Array]': 'Array'
    }
    return types[toStr.call(value)];
}

function formatParams(data: any, appkey: string): string {
    if (typeOf(data) !== 'Object') {
        throw new Error('Param "data" must be a value of type Object');
    }

    let paramStr: string = '?';
    for(let key in data) {
        paramStr += `${key}=${data[key]}&`;
    }

    return appkey ? paramStr + 'key=' + 'appkey' : paramStr.slice(0, -1);
} 

export default {
    formatParams
}
import 'egg';

interface IHttpGetParams {
    url: string;
    data: any;
    success: (data: any) => void;
    fail: (err: any) => void;
}

interface IHttpPostData {
    subject: SUBJECT,
    model: MODELS
}

const enum SUBJECT {
    s1 = 1,
    s4 = 4
}

const enum MODELS {
    c1 = 'c1',
    c2 = 'c2',
    a1 = 'a1',
    a2 = 'a2',
    b1 = 'b1',
    b2 = 'b2'
}

const enum TEST_TYPES {
    rand = 'rand',
    order = 'order'
}

declare module 'egg' {
    IHttpGetParams,
    IHttpPostData,
    TEST_TYPES,
    SUBJECT,
    MODELS
}
import { parseString, Builder } from 'xml2js';


export class Convert {
    
    static xmlToJson(xml: string, options?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            parseString(xml, options, (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    static jsonToXml(json: any): Promise<string> {
        return new Promise((resolve, reject) => {
            const builder = new Builder();
            const xml = builder.buildObject(json);
            if (xml) {
                resolve(xml);
            } else {
                reject('Unable to convert JSON to XML');
            }
        });
    }
}

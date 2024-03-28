import { JsonRequest, Method } from '../requestBuilder'
import { validateJsonSchema } from '../../src/scripts/jsonValidator'
import { TransformObj } from '../../src/scripts/transformObj'
// import { components, paths } from '../../schemas/*.ts'
import * as dotenv from 'dotenv'
import * as dotenvExpand from 'dotenv-expand'
import { responseStatusCodes } from '../constants/responseStatusCodes.const'

const myEnv = dotenv.config()
dotenvExpand.expand(myEnv)

const transformObj = new TransformObj()
const URL = process.env.URL_MASTER

export class baseController {
    async postSmth(
        firstProp: string, // или типизируем в виде paths[]
        secondProp?: number[],
        optionalBodyParam: object = {},
        headers: Record<string, string | undefined> = {},
        method: Method = 'POST'
      ) {
        const errorSchema = {
          'type': 'object',
          'required': ['code', 'message'],
          'properties': {
            'code': { 'type': 'string' },
            'message': { 'type': 'string' },
          },
        }
    
        const requiredBody: object = {
          'firstProp': firstProp
        }
        const reqBody = transformObj.mergeObjects(requiredBody, optionalBodyParam)
    
        const response = await new JsonRequest()
          .url(URL + `/smth`)
          .method(method)
          .headers(headers)
          .body(reqBody)
          .throwHttpErrors(false)
          .send()
        if (response.statusCode === responseStatusCodes.BAD_REQUEST) validateJsonSchema(errorSchema, response.body)
    
        return response
      }
    

}
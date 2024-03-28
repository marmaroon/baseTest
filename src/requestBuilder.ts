import type { Options, Response } from 'got'
import { got, HTTPError } from 'got'
import type { CookieJar } from 'tough-cookie'
import { FormDataBuilder } from '../src/scripts/createFormData'

export type Method =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'HEAD'
  | 'DELETE'
  | 'OPTIONS'
  | 'TRACE'
  | 'FETCH'
  | 'get'
  | 'post'
  | 'put'
  | 'patch'
  | 'head'
  | 'delete'
  | 'options'
  | 'trace'
  | 'fetch'

export abstract class BaseHttpRequest {
  protected options: any = {
    timeout: {
      request: 100000,
    },
    // Раскомментировать, если падает ошибка верификации сертификата unable to verify the first certificate
    // https: {
    //   rejectUnauthorized: false,
    // },
  }

  public prefixUrl(url: string | URL): this {
    this.options.prefixUrl = url
    return this
  }

  public url(url: string | URL): this {
    this.options.url = url
    return this
  }

  public cookieJar(cookiesJar: CookieJar): this {
    this.options.cookieJar = cookiesJar
    return this
  }

  public method(method: Method): this {
    this.options.method = method
    return this
  }

  public headers(headers: Record<string, string | undefined>): this {
    this.options.headers = this.options.headers ?? {}
    this.options.headers = {
      ...this.options.headers,
      ...headers,
    }
    return this
  }

  public bearerToken(bearerToken?: string): this {
    return this.headers({
      'Authorization': bearerToken,
    })
  }

  public basicAuth(username: string, password: string): this {
    return this.headers({
      Authorization: 'Basic ' + Buffer.from(username + ':' + password).toString('base64'),
    })
  }

  public searchParams(searchParams: Options['searchParams']): this {
    this.options.searchParams = searchParams
    return this
  }

  public methodRewriting(methodRewriting: boolean) {
    this.options.methodRewriting = methodRewriting
    return this
  }

  public throwHttpErrors(throwHttpErrors: boolean) {
    this.options.throwHttpErrors = throwHttpErrors
    return this
  }

  public abstract body(body: any): this

  public async send<T = any>(): Promise<Response<T>> {
    const stack = new Error().stack
    try {
      return await got<T>(this.options as any)
    } catch (err: any) {
      if (err instanceof HTTPError) {
        console.log(HTTPError)
        err.message = `
          [${err?.options?.method}]: ${err?.options?.url} => ${err?.response?.statusCode} 
          ${err.message} 
          ${err?.response?.rawBody?.toString()}
          `
      }
      err.stack = `${err.message} \n${stack}`
      throw err
    }
  }
}

export class JsonRequest extends BaseHttpRequest {
  constructor() {
    super()
    this.options = {
      ...this.options,
      responseType: 'json',
    }
  }

  public body(body: any): this {
    this.options.json = body
    return this
  }
}

export class BufferRequest extends BaseHttpRequest {
  constructor() {
    super()
    this.options = {
      ...this.options,
      responseType: 'buffer',
    }
  }

  public body(body: any): this {
    this.options.json = body
    return this
  }
}

export class XMLRequest extends BaseHttpRequest {
  constructor() {
    super()
    this.options = {
      ...this.options,
      responseType: 'text',
    }
  }

  public body(body: any): this {
    this.options.body = body
    return this
  }
}

export class FormRequest extends BaseHttpRequest {
  constructor() {
    super()
    this.options = {
      ...this.options,
      responseType: 'text',
    }
  }

  public body(body: Record<string, unknown>[]) {
    this.options.body = FormDataBuilder.createFromArray(body)
    return this
  }
}

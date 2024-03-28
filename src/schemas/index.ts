/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/": {
    /** List API versions */
    get: operations["listVersionsv2"];
  };
  "/v2": {
    /** Show API version details */
    get: operations["getVersionDetailsv2"];
  };
}

export type webhooks = Record<string, never>;

export type components = Record<string, never>;

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** List API versions */
  listVersionsv2: {
    responses: {
      /** @description 200 response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description 300 response */
      300: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  /** Show API version details */
  getVersionDetailsv2: {
    responses: {
      /** @description 200 response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description 203 response */
      203: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
}

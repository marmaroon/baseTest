import _Ajv from "ajv";

const Ajv = _Ajv as unknown as typeof _Ajv.default;

export function validateJsonSchema(schema: any, body: any){
    const ajv = new Ajv({
        strict: false,
        allErrors:true,
        verbose:true,
    })

    const validate  = ajv.compile(schema)
    const valid     = validate(body)

    if (!valid){
        throw new Error(`Schema validation error: ${JSON.stringify({
            validationErrors: validate.errors
        }, null, 2)}`)
    }
}
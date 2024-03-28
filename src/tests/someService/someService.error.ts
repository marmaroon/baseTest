export class SomeServiceErrors {

    static ServicesNotFoundError(serviceId: number) {
        const respBody: object = {
            "code": "DATA_NOT_FOUND",
            "message": `Не найдены services с идентификаторами: ${serviceId}`
        }
        return respBody;
    }


    static MissingServiceIdsError() {
        const respBody: object =
        {
            "code": "VALIDATION_ERROR_PARAM_NOT_SET",
            "message": "Необходимо указать одно из следующих значений: serviceIds"
        }
        return respBody;
    }


    static InvalidTypeServiceIdError() {
        const respBody: object =
        {
            "code": "VALIDATION_ERROR_INVALID_TYPE",
            "message": "В параметре serviceIds указано значение, которое не соответствует требуемому типу"
        }
        return respBody;
    }
}


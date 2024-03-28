import { strict as assert } from 'assert'
import { baseController } from '../../controllers/base.controller'
import { responseStatusCodes } from "../../constants/responseStatusCodes.const"
import { SomeServiceErrors } from "./someService.error"
import { AssertMessage } from "../../scripts/assertMessage"
import { getCustomDate } from "../../scripts/getData"
import { fixedIds } from '../../constants/Ids.const'
import { RandomGenerator } from '../../scripts/randomGenerator'

const reqSomeService = new baseController()
const customDate = new getCustomDate()

const firstId: number = fixedIds.Id1
const referenceId: string = '123456789'

const dateTodayMinus1: string = customDate.getDate(-1)
const dateToday: string = customDate.getDate(0)
const dateTodayPlus1: string = customDate.getDate(1)

const invalidServiceId = 'invalidID';
const nonExistentServiceId: number = RandomGenerator.generateRandomNumber(12)

describe('SOME_SERVICE_positive_cases', function () {
    it('SOME_SERVICE_positive_case_1', async function () {

        const response = await reqSomeService.postSmth('smth');

        assert.deepEqual(
            response.body,
            SomeServiceErrors.ServicesNotFoundError(firstId),
            AssertMessage.bugMessage(
                `Проверка ошибки: ${SomeServiceErrors.ServicesNotFoundError(
                    firstId
                )}`,
                response.request.options.body,
                `Тело ответа = ${SomeServiceErrors.ServicesNotFoundError(
                    firstId
                )}`,
                `Тело ответа = ${response.body}`
            )
        );


        assert.equal(
            response.statusCode,
            responseStatusCodes.OK,
            AssertMessage.bugMessage(
                'Проверка успешной отправки чего-то',
                response.request.options.body,
                `Status code is ${responseStatusCodes.OK}`,
                `Status code is ${response.statusCode}`
            )
        );
    });
});
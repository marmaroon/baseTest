export class AssertMessage {
    /**
     * name
     */
    public static bugMessage(caseDescription: any, payload: any, expectedResult: any, actualResult: any, respBody: any = 'Не передали в тесте') {
      let payloadReq
  
      if (typeof payload === 'string') {
        payloadReq = JSON.stringify(JSON.parse(payload), null, 2)
      } else if (typeof payload === 'object') {
        payloadReq = JSON.stringify(payload, null, 2)
      }
  
      const assertsMessage = `
      
      Кейс: ${caseDescription}
      Полезная нагрузка: \n\n ${payloadReq}\n
      ОР: ${expectedResult}
      ФР: ${actualResult} 
      Дополнительно: В response.body: \n ${JSON.stringify(respBody, null, 2)}\n`
  
      return assertsMessage
    }
  }
  
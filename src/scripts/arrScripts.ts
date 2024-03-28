type Obj = Record<string, unknown>

export class ArrScripts {
  /**
   * @description
   * Метод проверяет есть ли в массиве объект по ключам и значениям которые переданы вторым параметром в объекте
   */
  public static checkObjects(arr: object[], obj: { [key: string]: unknown }): boolean {
    for (const item of arr) {
      let match = true
      for (const key in obj) {
        if ((item as { [key: string]: unknown })[key] !== obj[key]) {
          match = false
          break
        }
      }
      if (match) {
        return true
      }
    }
    return false
  }

  public static getObjByKeysValue(arr: Obj[], searchCriteria: Obj): Obj | undefined {
    const result = arr.find((obj) => Object.keys(searchCriteria).every((key) => obj[key] === searchCriteria[key]))
    return result
  }
}

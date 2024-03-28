import { FormData } from 'formdata-node'

export class FormDataBuilder {
  /**
   * @description Метод создает объект FormData из массива с объектами
   * @param arr - массив объектов, пример: [{'name': 'test'}, {'age': 12}]
   * @returns FormData объект
   */
  public static createFromArray(arr: Record<string, unknown>[]): FormData {
    const formData = new FormData()

    for (let i = 0; i <= arr.length; i++) {
      const obj: Record<string, unknown> = arr[i]

      for (let key in obj) {
        formData.append(key, obj[key])
      }
    }

    return formData
  }
}

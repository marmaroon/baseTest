import moment, { Moment } from 'moment-timezone'

type DateFormat =
  | 'DD-MM-YYYY HH:mm:ss Z'
  | 'YYYY-MM-DD HH:mm:ss'
  | 'YYYY-MM-DDTHH:mm:ssZ'
  | 'YYYY-MM-DD'
  | 'DD/MM/YY'
  | 'YYYY.MM.DD'
  | 'YYYY'
  | 'YY'
  | 'MM'
  | 'DD'
/* 
    По умолчанию установлен формат YYYY-MM-DD

    Для больших возможностей смотри momentjs -> format

    Для кодирования символа "+" в URL encoded: 

    const newDate = new DateWithTimeZone() 
    newDate.getDate(0, 'DD-MM-YYYY HH:mm:ss Z').replace("+", "%2B")
*/

export class getCustomDate {
  protected date: Moment

  constructor() {
    this.date = moment()
  }

  public getDate(daysFromToday: number, format: DateFormat = 'YYYY-MM-DD', timeZone: number = 5, minutesOffset: number = 0): string {
    const finalDate = moment().utcOffset(timeZone).add(daysFromToday, 'd').add(minutesOffset, 'm')
    return finalDate.format(format)
  }

  public getFormattedDate(date: string, format: string = 'YYYY-MM-DD', timeZone: number = 5, minutesOffset: number = 0) {
    return moment(date).utcOffset(timeZone).add(date, 'd').add(minutesOffset, 'm').format(format)
  }

  public getMillisecFromDate(stringDate: string): number {
    return moment(stringDate).valueOf()
  }

  public getDateWithCustomTime(
    daysFromToday: number,
    hours: number,
    minutes: number,
    seconds: number,
    format: DateFormat = 'YYYY-MM-DDTHH:mm:ssZ',
    timeZone: number = 5,
    minutesOffset: number = 0
  ): string {
    const finalDate = moment()
      .utcOffset(timeZone)
      .add(daysFromToday, 'd')
      .add(minutesOffset, 'm')
      .set({ hour: hours, minute: minutes, second: seconds })
    return finalDate.format(format)
  }

  /**
   * @description
   * Метод получает две даты в формате строки и сравнивает их
   * Метод возвращает разницу в секундах
   */

  public compareDate(date_1: string, date_2: string): number {
    const date1 = moment(date_1)
    const date2 = moment(date_2)

    return Math.abs(date2.diff(date1, 'seconds'))
  }
}

/*

  Данные для передачи в timeZone
    +0 Atlantic/Azores
    +2 Europe/Kaliningrad
    +3 Europe/Moscow
    +3 Europe/Volgograd
    +4 Europe/Samara
    +4 Europe/Saratov
    +4 Europe/Ulyanovsk
    +5 Asia/Yekaterinburg
    +6 Asia/Omsk
    +7 Asia/Novosibirsk
    +7 Asia/Krasnoyarsk
    +7 Asia/Tomsk
    +8 Asia/Irkutsk
    +9 Asia/Khandyga
    +9 Asia/Yakutsk
    +9 Asia/Chita
    +10 Asia/Vladivostok
    +10 Asia/Ust-Nera
    +11 Asia/Magadan
    +11 Asia/Sakhalin
    +12 Asia/Kamchatka
*/

type Timezone =
  | 'Europe/Kaliningrad'
  | 'Europe/Moscow'
  | 'Europe/Volgograd'
  | 'Europe/Samara'
  | 'Europe/Saratov'
  | 'Europe/Ulyanovsk'
  | 'Asia/Yekaterinburg'
  | 'Asia/Omsk'
  | 'Asia/Novosibirsk'
  | 'Asia/Krasnoyarsk'
  | 'Asia/Tomsk'
  | 'Asia/Irkutsk'
  | 'Asia/Khandyga'
  | 'Asia/Yakutsk'
  | 'Asia/Chita'
  | 'Asia/Vladivostok'
  | 'Asia/Ust-Nera'
  | 'Asia/Magadan'
  | 'Asia/Sakhalin'
  | 'Asia/Kamchatka'

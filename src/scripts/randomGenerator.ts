type AllowedValues = 'ru' | 'ruUpper' | 'ruLower' | 'en' | 'enUpper' | 'enLower' | 'number' | 'specialChars';
type CharType = Array<AllowedValues>;
export class RandomGenerator {
  public static generateRandomNumber(numLengthBeforePoint: number, numLengthAfterPoint: number = 0): number {
    const randNumBeforePoint = Math.floor(Math.random() * (Math.pow(10, numLengthBeforePoint) - 1))
    const randNumAfterPoint = Math.floor(Math.random() * (Math.pow(10, numLengthAfterPoint) - 1))

    const randomNumber = Number(randNumBeforePoint + '.' + randNumAfterPoint)

    return randomNumber
  }

    public static generateRandomText(length: number, charType: CharType): string {
        let result = '';
        let chars = '';
    
        if (charType.includes('en')) {
          chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        }
        if (charType.includes('enUpper')) {
          chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (charType.includes('enLower')) {
          chars += 'abcdefghijklmnopqrstuvwxyz';
        }
        
        if (charType.includes('ru')) {
          chars += 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
        }
        if (charType.includes('ruUpper')) {
          chars += 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
        }
        if (charType.includes('ruLower')) {
          chars += 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
        }
        
        if (charType.includes('number')) {
          chars += '0123456789';
        }
        if (charType.includes('specialChars')) {
          chars += '!@#$%^&*()_+{}:"<>?[];,./\'\\`~|-=';
        }
      
        for (let i = 0; i < length; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
      }
    
}


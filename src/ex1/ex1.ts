/* https://www.codewars.com/kata/583203e6eb35d7980400002a */
export class FaceDetector {
  countSmiles (arr: string[]): number {
    const regexp = /(:|;)(-|~)?(\)|D)/
    return arr.filter(smile => regexp.test(smile)).length
  }
}

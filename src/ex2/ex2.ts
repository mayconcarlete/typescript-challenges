export class VowelsCount {
  getCount (str: string): number {
    const regexp = /[aeiou]/i
    const vowel = str.split('')
    const numberOfVowels = vowel.filter((vowel: string) => regexp.test(vowel))
    return numberOfVowels.length
  }
}

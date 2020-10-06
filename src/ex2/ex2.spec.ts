import { VowelsCount } from './ex2'
type sutTypes = {
  sut: VowelsCount
}

const makeSut = (): sutTypes => {
  const sut = new VowelsCount()
  return {
    sut
  }
}

describe('VowelsCount class', () => {
  test('Should call getCount with correct params', () => {
    const { sut } = makeSut()
    const getCountSpy = jest.spyOn(sut, 'getCount')
    sut.getCount('any_value')
    expect(getCountSpy).toHaveBeenCalledWith('any_value')
  })
  test('Ensure getCount return a number', () => {
    const { sut } = makeSut()
    expect(sut.getCount('abcde')).toBe(2)
    expect(sut.getCount('aeioA')).toBe(5)
  })
})

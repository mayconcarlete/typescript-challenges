import { FaceDetector } from './ex1'

type SutTypes = {
  sut: FaceDetector
}

const makeSut = (): SutTypes => {
  const sut = new FaceDetector()
  return { sut }
}

describe('Face Detector class', () => {
  test('Ensure countSmiles to have been called with correct params', () => {
    const { sut } = makeSut()
    const countSmilesSpy = jest.spyOn(sut, 'countSmiles')
    sut.countSmiles([':)', ';(', ';}', ':-D'])
    expect(countSmilesSpy).toHaveBeenCalledWith([':)', ';(', ';}', ':-D'])
  })
  test('Ensure countSmiles return the number of smiles that was detected', () => {
    const { sut } = makeSut()
    expect(sut.countSmiles([':)', ';(', ';}', ':-D'])).toBe(2)
    expect(sut.countSmiles([';D', ':-(', ':-)', ';~)'])).toBe(3)
    expect(sut.countSmiles([';]', ':[', ';*', ':$', ';-D'])).toBe(1)
  })
})

import 'module-alias/register'
import { FaceDetector } from '@src/ex1/ex1'

const faceDetector = new FaceDetector()
const countSmiles = faceDetector.countSmiles([';D', ':-(', ':-)', ';~)'])
console.log(`Result exercise1: ${countSmiles}`)

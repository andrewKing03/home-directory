// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {execute} from '../../functions/exec';
export default async function handler(req, res) {
  try {
    let result = await execute('goal node status')
    // let result = await execute('pwd')
    let indexer = await fetch('http://home.lan/idx/health')
  console.log(result)
  res.status(200).json({node: result, indexer})
  } catch (error) {
    console.log(error)
    res.status(200).send()
  }
}

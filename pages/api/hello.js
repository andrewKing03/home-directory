// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {execute} from '../../functions/exec';
export default async function handler(req, res) {
  try {
    let result = ''//await execute('goal node status')
    // let result = await execute('pwd')
    let response = await fetch('http://home.lan/idx/health')
    response = await response.json()
  res.status(200).json({node: result, indexer: response})
  } catch (error) {
    console.log(error)
    res.status(200).send()
  }
}

import { ethers } from 'ethers'
import { TokenPair } from './types'

const data1155ParamType = `tuple(address token, uint256 tokenId, uint256 amount)[]`
const data721ParamType = `tuple(address token, uint256 tokenId)[]`

export function encodeItemData(data: TokenPair[]): string {
  if (data[0]?.tokenStandard === 'erc1155') {
    return ethers.utils.defaultAbiCoder.encode([data1155ParamType], [data])
  } else {
    return ethers.utils.defaultAbiCoder.encode([data721ParamType], [data])
  }
}

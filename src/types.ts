import { BigNumberish } from 'ethers'

export type TokenStandard = 'erc721' | 'erc1155'

export type TokenPair = {
  token: string
  tokenId: BigNumberish
  amount: BigNumberish
  tokenStandard: TokenStandard
}

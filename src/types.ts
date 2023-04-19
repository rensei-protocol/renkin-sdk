import { BigNumberish, Bytes } from 'ethers'

export type TokenStandard = 'erc721' | 'erc1155'

export type TokenPair = {
  token: string
  tokenId: BigNumberish
  amount: BigNumberish
  tokenStandard: TokenStandard
}

// struct Offer {
//     uint256 principal;
//     uint256 repayment;
//     address collection;
//     uint32 duration;
//     uint256 blockNum;
//     address currency;
//     uint256 timestamp;
//     bytes extra;
// }
export type Offer = {
  principal: BigNumberish
  repayment: BigNumberish
  collection: string
  duration: number
  blockNum: BigNumberish
  currency: string
  timestamp: BigNumberish
  extra: string
}

export type Signature = {
  signer: string
  nonce: BigNumberish
  expiry: BigNumberish
  signature: string
}

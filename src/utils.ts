import { BigNumberish, ethers } from 'ethers'
import { TokenPair, Offer, Signature } from './types'

const data1155ParamType = `tuple(address token, uint256 tokenId, uint256 amount)[]`
const data721ParamType = `tuple(address token, uint256 tokenId)[]`

const signatureParamType = [`address`, `uint256`, `uint256`]
const offerParamType = [
  `address`,
  `uint256`,
  `uint256`,
  `address`,
  `uint32`,
  `uint256`,
  `uint256`,
  `bytes`,
]
const encodeOfferParamType = [`bytes`, `bytes`, `address`, `uint256`]

export function encodeItemData(data: TokenPair[]): string {
  if (data[0]?.tokenStandard === 'erc1155') {
    return ethers.utils.defaultAbiCoder.encode([data1155ParamType], [data])
  } else {
    return ethers.utils.defaultAbiCoder.encode([data721ParamType], [data])
  }
}

async function signOffer(
  signer: ethers.Signer,
  offer: Offer,
  signature: Signature,
  renkin: string,
  chainId: BigNumberish
): Promise<void> {
  const encodedOffer: string = ethers.utils.solidityPack(offerParamType, [
    offer.currency,
    offer.principal,
    offer.repayment,
    offer.collection,
    offer.duration,
    offer.blockNum,
    offer.timestamp,
    offer.extra,
  ])
  const encodedSignature: string = ethers.utils.solidityPack(
    signatureParamType,
    [signature.signer, signature.nonce, signature.expiry]
  )
  const encodedData = ethers.utils.solidityPack(encodeOfferParamType, [
    encodedOffer,
    encodedSignature,
    renkin,
    chainId,
  ])
  const message = ethers.utils.keccak256(encodedData)
  signature.signature = await signer.signMessage(ethers.utils.arrayify(message))
}

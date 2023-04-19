import { Offer, Signature } from './types'
import { signOffer } from './utils'
import { ethers } from 'ethers'

export type OfferType = {
  offer: Offer
  signature: Signature
}

export async function SignOffer(
  signer: ethers.Signer,
  offer: OfferType,
  renkin: string,
  chainId: number
) {
  return await signOffer(signer, offer.offer, offer.signature, renkin, chainId)
}

export enum Network {
  Mainnet = 'mainnet',
  Goerli = 'goerli',
}

export type NetworkMeta = {
  id: number
  rpcUrl: string
  RenkinContract: string
  wethContract: string
  apiBaseURL: string
}

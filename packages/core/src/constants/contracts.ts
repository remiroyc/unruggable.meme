import { constants, json } from 'starknet'

import EkuboPositions from '../abis/EkuboPositions.json'
import JediswapPair from '../abis/JediswapPair.json'
import Multicall from '../abis/Multicall.json'

export const TOKEN_CLASS_HASH = {
  [constants.StarknetChainId.SN_SEPOLIA]: '0x04d0390b777b424e43839cd1e744799f3de6c176c7e32c1812a41dbd9c19db6a',
  [constants.StarknetChainId.SN_MAIN]: '0x063ee878d3559583ceae80372c6088140e1180d9893aa65fbefc81f45ddaaa17',
}

export const FACTORY_ADDRESSES = {
  [constants.StarknetChainId.SN_SEPOLIA]: '0x04d0390b777b424e43839cd1e744799f3de6c176c7e32c1812a41dbd9c19db6a',
  [constants.StarknetChainId.SN_MAIN]: '0x01a46467a9246f45c8c340f1f155266a26a71c07bd55d36e8d1c7d0d438a2dbc',
}

export const EKUBO_POSITIONS_ADDRESSES = {
  [constants.StarknetChainId.SN_SEPOLIA]: '0x04d0390b777b424e43839cd1e744799f3de6c176c7e32c1812a41dbd9c19db6a',
  [constants.StarknetChainId.SN_MAIN]: '0x02e0af29598b407c8716b17f6d2795eca1b471413fa03fb145a5e33722184067',
}

export const ETH_ADDRESSES = {
  [constants.StarknetChainId.SN_SEPOLIA]: '0x04d0390b777b424e43839cd1e744799f3de6c176c7e32c1812a41dbd9c19db6a',
  [constants.StarknetChainId.SN_MAIN]: '0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
}
export const STRK_ADDRESSES = {
  [constants.StarknetChainId.SN_SEPOLIA]: '0x04d0390b777b424e43839cd1e744799f3de6c176c7e32c1812a41dbd9c19db6a',
  [constants.StarknetChainId.SN_MAIN]: '0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d',
}

export const USDC_ADDRESSES = {
  [constants.StarknetChainId.SN_SEPOLIA]: '0x04d0390b777b424e43839cd1e744799f3de6c176c7e32c1812a41dbd9c19db6a',
  [constants.StarknetChainId.SN_MAIN]: '0x53c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8',
}

export const MULTICALL_ADDRESSES = {
  [constants.StarknetChainId.SN_SEPOLIA]: '0x04d0390b777b424e43839cd1e744799f3de6c176c7e32c1812a41dbd9c19db6a',
  [constants.StarknetChainId.SN_MAIN]: '0x01a33330996310a1e3fa1df5b16c1e07f0491fdd20c441126e02613b948f0225',
}

export const JEDISWAP_ETH_USDC = {
  [constants.StarknetChainId.SN_SEPOLIA]: '0x04d0390b777b424e43839cd1e744799f3de6c176c7e32c1812a41dbd9c19db6a',
  [constants.StarknetChainId.SN_MAIN]: '0x04d0390b777b424e43839cd1e744799f3de6c176c7e32c1812a41dbd9c19db6a',
}

export const JEDISWAP_STRK_USDC = {
  [constants.StarknetChainId.SN_SEPOLIA]: '0x04d0390b777b424e43839cd1e744799f3de6c176c7e32c1812a41dbd9c19db6a',
  [constants.StarknetChainId.SN_MAIN]: '0x5726725e9507c3586cc0516449e2c74d9b201ab2747752bb0251aaa263c9a26',
}

export const compiledMulticall = json.parse(JSON.stringify(Multicall))
export const compiledJediswapPair = json.parse(JSON.stringify(JediswapPair))
export const compiledEkuboPositions = json.parse(JSON.stringify(EkuboPositions))

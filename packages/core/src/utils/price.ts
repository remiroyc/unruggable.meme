import { Fraction } from '@uniswap/sdk-core'
import { BlockNumber, BlockTag, ProviderInterface, uint256 } from 'starknet'

import { Entrypoint } from '../constants'
import { USDCPair } from '../types/tokens'
import { decimalsScale } from './helpers'

export async function getPairPrice(
  provider: ProviderInterface,
  pair?: USDCPair,
  blockNumber: BlockNumber = BlockTag.LATEST,
) {
  if (!pair) return new Fraction(1, 1)

  const result = await provider.callContract(
    {
      contractAddress: pair.address,
      entrypoint: Entrypoint.GET_RESERVES,
    },
    blockNumber,
  )

  const [reserve0Low, reserve0High, reserve1Low, reserve1High] = result

  const pairPrice = new Fraction(
    uint256.uint256ToBN({ low: reserve1Low, high: reserve1High }).toString(),
    uint256.uint256ToBN({ low: reserve0Low, high: reserve0High }).toString(),
  )

  // token0 and token1 are switched on some pairs
  return (pair.reversed ? pairPrice.invert() : pairPrice).multiply(decimalsScale(12))
}

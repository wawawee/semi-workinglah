import { erc20ABI } from 'wagmi';
import { CONFIG } from '@/lib/config';

export const FTSEB_TOKEN = {
  address: CONFIG.TOKEN_ADDRESS as `0x${string}`,
  abi: erc20ABI,
  name: CONFIG.TOKEN_NAME,
  symbol: CONFIG.TOKEN_SYMBOL,
} as const;

export const USDC_TOKEN = {
  address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' as `0x${string}`,
  abi: erc20ABI,
  symbol: CONFIG.STABLE_COIN,
} as const;
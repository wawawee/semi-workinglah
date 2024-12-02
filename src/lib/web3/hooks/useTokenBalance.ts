import { useAccount, useBalance } from 'wagmi';
import { CONFIG } from '@/lib/config';

export function useTokenBalance() {
  const { address } = useAccount();

  const { data: tokenBalance } = useBalance({
    address,
    token: CONFIG.TOKEN_ADDRESS as `0x${string}`,
  });

  const { data: stablecoinBalance } = useBalance({
    address,
    // Replace with actual USDC contract address
    token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' as `0x${string}`,
  });

  return {
    tokenBalance,
    stablecoinBalance,
  };
}
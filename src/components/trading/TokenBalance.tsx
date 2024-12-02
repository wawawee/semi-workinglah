import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTokenBalance } from '@/lib/web3/hooks/useTokenBalance';
import { CONFIG } from '@/lib/config';

export function TokenBalance() {
  const { tokenBalance, stablecoinBalance } = useTokenBalance();

  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            {CONFIG.TOKEN_SYMBOL} Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {tokenBalance?.formatted ?? '0.00'} {tokenBalance?.symbol}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            {CONFIG.STABLE_COIN} Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {stablecoinBalance?.formatted ?? '0.00'} {stablecoinBalance?.symbol}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CONFIG } from '@/lib/config';

export function TradeForm() {
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trade {CONFIG.TOKEN_SYMBOL}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="buy" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
          </TabsList>
          <TabsContent value="buy">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ({CONFIG.STABLE_COIN})</Label>
                <Input
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount ({CONFIG.TOKEN_SYMBOL})</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <Button className="w-full">Place Buy Order</Button>
            </div>
          </TabsContent>
          <TabsContent value="sell">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ({CONFIG.STABLE_COIN})</Label>
                <Input
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount ({CONFIG.TOKEN_SYMBOL})</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <Button variant="destructive" className="w-full">
                Place Sell Order
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
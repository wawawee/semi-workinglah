import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CONFIG } from '@/lib/config';

interface Order {
  price: number;
  amount: number;
  total: number;
}

export function OrderBook() {
  const [buyOrders, setBuyOrders] = useState<Order[]>([]);
  const [sellOrders, setSellOrders] = useState<Order[]>([]);

  return (
    <Card className="h-[600px]">
      <CardHeader>
        <CardTitle>Order Book</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="buys">Buys</TabsTrigger>
            <TabsTrigger value="sells">Sells</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-3 text-sm font-medium text-muted-foreground">
              <div>Price ({CONFIG.STABLE_COIN})</div>
              <div>Amount ({CONFIG.TOKEN_SYMBOL})</div>
              <div>Total</div>
            </div>
            <div className="space-y-1">
              {sellOrders.map((order, i) => (
                <div key={i} className="grid grid-cols-3 text-sm text-red-500">
                  <div>{order.price}</div>
                  <div>{order.amount}</div>
                  <div>{order.total}</div>
                </div>
              ))}
              <div className="my-2 border-t border-border" />
              {buyOrders.map((order, i) => (
                <div key={i} className="grid grid-cols-3 text-sm text-green-500">
                  <div>{order.price}</div>
                  <div>{order.amount}</div>
                  <div>{order.total}</div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
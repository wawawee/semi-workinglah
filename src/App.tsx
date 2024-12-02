import { ThemeProvider } from '@/providers/theme-provider';
import { Web3Provider } from '@/lib/web3/providers';
import { Header } from '@/components/layout/header';
import { TradingChart } from '@/components/trading/TradingChart';
import { OrderBook } from '@/components/trading/OrderBook';
import { TradeForm } from '@/components/trading/TradeForm';
import { TokenBalance } from '@/components/trading/TokenBalance';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Web3Provider>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="container py-6">
            <TokenBalance />
            <div className="mt-6 grid grid-cols-3 gap-6">
              <TradingChart />
              <OrderBook />
            </div>
            <div className="mt-6">
              <TradeForm />
            </div>
          </main>
        </div>
      </Web3Provider>
    </ThemeProvider>
  );
}

export default App;
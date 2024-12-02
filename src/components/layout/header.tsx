import { ModeToggle } from '@/components/mode-toggle';
import { MainNav } from '@/components/layout/main-nav';
import { WalletButton } from '@/components/web3/WalletButton';

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <MainNav />
        <div className="flex items-center gap-4">
          <ModeToggle />
          <WalletButton />
        </div>
      </div>
    </header>
  );
}
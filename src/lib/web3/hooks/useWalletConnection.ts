import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useCallback } from 'react';

export function useWalletConnection() {
  const { address, isConnected } = useAccount();
  const { connectAsync, connectors } = useConnect();
  const { disconnectAsync } = useDisconnect();

  const connect = useCallback(async () => {
    try {
      await connectAsync({ connector: connectors[0] });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  }, [connectAsync, connectors]);

  const disconnect = useCallback(async () => {
    try {
      await disconnectAsync();
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  }, [disconnectAsync]);

  return {
    address,
    isConnected,
    connect,
    disconnect,
  };
}
import './App.css';
import {  clusterApiUrl } from '@solana/web3.js';
import { getPhantomWallet } from '@solana/wallet-adapter-wallets';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import Album from './components/album'

const wallets = [ getPhantomWallet() ]
const network = clusterApiUrl('devnet');

function App(){
  return (
  <div><Album></Album>
  </div>
  )
}

const AppWithProvider = () => (
  
  <ConnectionProvider endpoint={network}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
)

export default AppWithProvider;  
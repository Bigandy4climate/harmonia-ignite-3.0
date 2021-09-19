import "./App.css";
import Album from "./components/album";
import { PublicKey, clusterApiUrl } from "@solana/web3.js";
import { web3 } from "@project-serum/anchor";
import idl from "./idl.json";
import { getPhantomWallet } from "@solana/wallet-adapter-wallets";
import {
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

const wallets = [getPhantomWallet()];
const network = clusterApiUrl("devnet");
const Keypair = web3;
const baseAccount = Keypair.generate();
const opts = {
  preflightCommitment: "processed",
};
const programID = new PublicKey(idl.metadata.address);
function App() {
  return (
    <div className="App">
      <Album></Album>
    </div>
  );
}

const AppWithProvider = () => (
  <ConnectionProvider endpoint={network}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
);

export default AppWithProvider;

// // src/pages/usersPages/phantom.jsx
// import React from 'react';
// import {
//   ConnectionProvider,
//   WalletProvider,
//   useWallet
// } from '@solana/wallet-adapter-react';
// import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
// import { clusterApiUrl, Transaction, SystemProgram, PublicKey } from '@solana/web3.js';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import '@solana/wallet-adapter-react-ui/styles.css';

// const network = WalletAdapterNetwork.Mainnet;
// const endpoint = clusterApiUrl(network);
// const wallets = [new PhantomWalletAdapter()];

// const Phantom = () => {
//   return (
//     <ConnectionProvider endpoint={endpoint}>
//       <WalletProvider wallets={wallets} autoConnect>
//         <WalletModalProvider>
//           <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//             <h1 className="text-4xl font-bold mb-8">Solana Phantom Wallet Integration</h1>
//             <WalletMultiButton className="mb-4" />
//             <SendMoneyButton />
//           </div>
//         </WalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   );
// };

// const SendMoneyButton = () => {
//   const { publicKey, sendTransaction, connection } = useWallet();

//   const handleClick = async () => {
//     if (!publicKey) {
//       console.error('No public key available. Ensure wallet is connected.');
//       return;
//     }

//     try {
//       const transaction = new Transaction().add(
//         SystemProgram.transfer({
//           fromPubkey: publicKey,
//           toPubkey: new PublicKey('7VptF6nFww7SYLAX1pACNxnx9AhWRDSMGns9p6KUMv6H'),
//           lamports: 10, // Adjust the amount as needed
//         })
//       );

//       const signature = await sendTransaction(transaction, connection);
//       console.log('Transaction sent:', signature);
//     } catch (error) {
//       console.error('Transaction failed:', error);
//     }
//   };

//   return (
//     <button
//       onClick={handleClick}
//       disabled={!publicKey}
//       className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 disabled:bg-gray-400"
//     >
//       Send 0.00001 SOL to 7VptF6nFww7SYLAX1pACNxnx9AhWRDSMGns9p6KUMv6H
//     </button>
//   );
// };

// export default Phantom;

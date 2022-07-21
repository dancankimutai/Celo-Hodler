import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    ContractKitProvider,
    Alfajores,
    NetworkNames,
} from '@celo-tools/use-contractkit';
import App from './App';
import "@celo-tools/use-contractkit/lib/styles.css";
import './index.css';
// import "react-toastify/dist/ReactToastify.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ContractKitProvider
            networks={[Alfajores]}
            network={{
                name: NetworkNames.Alfajores,
                rpcUrl: 'https://alfajores-forno.celo-testnet.org',
                graphQl: 'https://alfajores-blockscout.celo-testnet.org/graphiql',
                explorer: 'https://alfajores-blockscout.celo-testnet.org',
                chainId: 44787,
            }}
            dapp={{
                name: 'celo-hodler',
                description: 'An NFT marketplace for your favorite NFTs and track your favorite cryptocurrencies.',
                url: '',
            }}
        >
            <App />
        </ContractKitProvider>
    </React.StrictMode>,
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
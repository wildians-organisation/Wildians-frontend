import React from "react";
import ConnectedButton from "./ConnectedButton";
import { TezosToolkit, MichelsonMap } from "@taquito/taquito";
import { char2Bytes } from '@taquito/tzip16';
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";
import * as config from '../../config/config.js'

export default function ConnexionWallet() {
  const network = { type: NetworkType.ITHACANET };
  const Tezos = new TezosToolkit(config.RPC_URL); // TODO: url env variable

  const wallet = new BeaconWallet({
    name: config.NAME,
    preferredNetwork: config.NETWORK,
  });

  Tezos.setWalletProvider(wallet);

  const [myAddress, setMyAddress] = React.useState(null);

  /*** Function to connect to the wallet ***/
  const connectToWallet = async () => {
    const activeAccount = await wallet.client.getActiveAccount();
    if (activeAccount) {
      setMyAddress(activeAccount.address);
    } else {
      await wallet.requestPermissions({
        network: network,
      });
      let tmp = await wallet.getPKH();
      setMyAddress(tmp);
    }
  };

  /*** Function to get the smart contract ***/
  const getSmartContract = async () => {
    const contract = await Tezos.wallet.at(config.CONTRACT_ADDRESS);
    return contract;
  }

  /*** Function to mint the nft ***/
  const mintNFT = async (address, url, token_id) => {
    await disconnect();
    await connectToWallet();
    const amount = 1;
    const contract = await getSmartContract();
    url = char2Bytes(url);
    const op = await contract.methods.mint(address, amount, MichelsonMap.fromLiteral({ '': url }), token_id).send({ amount: 1000 });
    return await op.confirmation(3);
  };

  const getTezos = async () => {
    await disconnect();
    await connectToWallet();
    const amount = 1;
    const contract = await getSmartContract();
    const op = await contract.methods.transfer_mutez(1000, "tz1fm7T5D5EyEa5aJWMzAvSwZcwAdwUfDx5C").send()
    return await op.confirmation(3);
  }

  /*** Function to connect to the wallet ***/
  const disconnect = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await wallet.clearActiveAccount();
    await wallet.disconnect();
    setMyAddress(null);
  };

  /*** Render ***/
  return (
    <div>
      <button
        onClick={() => mintNFT("tz1QQTyMYNP33e8bgkmHgnP7DUUgsyi6G63k", "ipfs://bafkreihf6wzky7hxrky4efde3tdxxu6xdarwyoagddvsraoxfmskz2pzr4", 2)}
        className="bg-white text-lightBlue-600  active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3  ease-linear transition-all duration-150"
        type="button"
      >
        mintNFT
      </button>
      <button
        onClick={() => getTezos()}
        className="bg-white text-lightBlue-600  active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3  ease-linear transition-all duration-150"
        type="button"
      >
        getTezos
      </button>
      <button
        onClick={() => connectToWallet()}
        className="bg-white text-lightBlue-600  active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3  ease-linear transition-all duration-150"
        type="button"
      >
        {!myAddress ? (
          "Connect Wallet"
        ) : (
          <ConnectedButton walletAdress={myAddress} disconnect={disconnect} />
        )}
      </button>
    </div>
  );
}

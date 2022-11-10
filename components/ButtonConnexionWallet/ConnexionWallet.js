import React from "react";
import ConnectedButton from "./ConnectedButton";
import { TezosToolkit, MichelsonMap } from "@taquito/taquito";
import { char2Bytes } from "@taquito/tzip16";
import { NetworkType } from "@airgap/beacon-sdk";
import { BeaconWallet } from "@taquito/beacon-wallet";
import * as config from "../../config/config.js";
import axios from "axios";
import Link from "next/link";

var token_id = 0;
const nftToMint = 1;
const network = { type: NetworkType.GHOSTNET };

/*** Function to connect to wallet, with useState to avoid creating multiple instances ***/
export default function ConnexionWallet() {
  const [wallet, setWallet] = React.useState({});
  const [Tezos, setTezos] = React.useState(new TezosToolkit(config.RPC_URL));
  const [myAddress, setMyAddress] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const _wallet = new BeaconWallet({ name: "Demo" });
      setWallet(_wallet);
      Tezos.setWalletProvider(_wallet);
    })();
  }, []);

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
    },
    /*** Function to mint the nft ***/
    mintNFT = async (url) => {
      await disconnect();
      await connectToWallet();
      const contract = await getSmartContract();
      url = char2Bytes(url);
      const activeAccount = await wallet.client.getActiveAccount();
      console.log(activeAccount.address);
      //const op = await contract.methods.mint(config.WALLET_ADRESS, nftToMint, MichelsonMap.fromLiteral({ '': url }), token_id).send();
      const op = await contract.methods
        .big_boi_mint(
          activeAccount.address,
          nftToMint,
          1000 * 1000000,
          MichelsonMap.fromLiteral({ "": url }),
          token_id
        )
        .send({ amount: 1000 });
      token_id += 1;
      return await op.confirmation(3);
    };

  /*** Function to disconnect to the wallet ***/
  const disconnect = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await wallet.clearActiveAccount();
    await wallet.disconnect();
    setMyAddress(null);
  };

  /*** Render ***/
  return (
    <div className="md:flex items-center md:w-min">
      <button
        onClick={() => mintNFT(config.SMART_CONTRACT)}
        className="text-gray-900 group flex rounded-md items-center w-full px-2 py-2 md:h-min md:text-sm md:bg-white md:text-lightBlue-600  md:active:bg-blueGray-600 md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150 "
        type="button"
      >
        Mint NFT
      </button>
      <button
        onClick={() => connectToWallet()}
        className="text-gray-900 group flex rounded-md items-center w-full px-2 py-2 md:h-min md:text-sm md:bg-white md:text-lightBlue-600  md:active:bg-blueGray-600 md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150"
        type="button"
      >
        {!myAddress ? (
          "Connect Wallet"
        ) : (
          <ConnectedButton walletAdress={myAddress} disconnect={disconnect} />)}
      </button>
      <Link 
        className="text-gray-900 group flex rounded-md items-center w-full px-2 py-2 md:h-min md:text-sm md:bg-white md:text-lightBlue-600  md:active:bg-blueGray-600 md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150"
        href={{ 
            pathname: "/my-nfts/",
            query: { address: myAddress },
          }}
          as={`/my-nfts/${myAddress}`}
          >Hello</Link>
    </div>
  );
}

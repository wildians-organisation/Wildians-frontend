import React from "react";
import ConnectedButton from "./ConnectedButton";
import { TezosToolkit, MichelsonMap } from "@taquito/taquito";
import { char2Bytes } from "@taquito/tzip16";
import { NetworkType } from "@airgap/beacon-sdk";
import { BeaconWallet } from "@taquito/beacon-wallet";
import * as config from "../../config/config.js";
import Link from "next/link";
import axios from "axios";

const nftToMint = 1;
const network = { type: NetworkType.GHOSTNET };

/*** Function to connect to wallet, with useState to avoid creating multiple instances ***/
export default function ConnexionWallet() {
  const [wallet, setWallet] = React.useState({});
  const [Tezos, setTezos] = React.useState(new TezosToolkit(config.RPC_URL));
  const [userAddress, setUserAddress] = React.useState(null);
  const [token_id, setToken_id] = React.useState(-1);

  React.useEffect(() => {
    (async () => {
      const _wallet = new BeaconWallet({ name: "Demo" });
      setWallet(_wallet);
      Tezos.setWalletProvider(_wallet);
    })();
    if (typeof window !== "undefined")
      if (window.localStorage.getItem("beacon:accounts")) {
        setUserAddress(
          JSON.parse(localStorage.getItem("beacon:accounts"))[0].address
        );
      }
    setToken_id(getTokenID());
  }, []);

  const getTokenID = async () => {
    try {
      const response = await axios.get(
        `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/`
      );
      const tokenID = Number(response.data.all_tokens);
      setToken_id(tokenID);
    } catch (e) {
      console.error(e);
    }
  };
  /*** Function to connect to the wallet ***/
  const connectToWallet = async () => {
    const activeAccount = await wallet.client.getActiveAccount();
    if (activeAccount) {
      setUserAddress(activeAccount.address);
    } else {
      await wallet.requestPermissions({
        network: network,
      });
      let tmp = await wallet.getPKH();
      setUserAddress(tmp);
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
          1000 * config.TEZOS_CONVERTER,
          MichelsonMap.fromLiteral({ "": url }),
          token_id
        )
        .send({ amount: 1000 });
      return await op.confirmation(3);
    };

  /*** Function to disconnect to the wallet ***/
  const disconnect = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await wallet.clearActiveAccount();
    await wallet.disconnect();
    setUserAddress(null);
  };

  /*** Render ***/
  return (
    <div className="md:flex items-center md:w-min">
      <button
        onClick={() => mintNFT(config.SMART_CONTRACT)}
        className="mintNFT text-gray-900 group flex rounded-md items-center w-full px-2 py-2 md:h-min md:text-sm md:bg-white md:text-lightBlue-600  md:active:bg-blueGray-600 md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150 "
        type="button"
      >
        Mint NFT
      </button>
      <div
        onClick={() => connectToWallet()}
        className="connexionWallet text-gray-900 group flex rounded-md items-center w-full px-2 py-2 md:h-min md:text-sm md:bg-white md:text-lightBlue-600  md:active:bg-blueGray-600 md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150"
        type="button"
      >
        {!userAddress ? (
          "Connect Wallet"
        ) : (
          <ConnectedButton walletAdress={userAddress} disconnect={disconnect} />
        )}
      </div>

      {userAddress && (
        <Link className="text-white" href="nft-collection">
          <div className="text-gray-900 group flex rounded-md cursor-pointer items-center w-full px-2 py-2 md:whitespace-nowrap md:h-min md:text-sm md:bg-white md:text-lightBlue-600  md:active:bg-blueGray-600 md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150">
            My collection
          </div>
        </Link>
      )}
      {
        <Link className="text-white" href="admin">
          <div className="admin text-gray-900 group flex rounded-md cursor-pointer items-center w-full px-2 py-2 md:whitespace-nowrap md:h-min md:text-sm md:bg-white md:text-lightBlue-600  md:active:bg-blueGray-600 md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150">
            Admin
          </div>
        </Link>
      }
    </div>
  );
}

import React from "react";
import ConnectedButton from "./ConnectedButton";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";

export default function ConnexionWallet() {
  const network = { type: NetworkType.MAINNET };
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io"); // TODO: url env variable

  const wallet = new BeaconWallet({
    name: "Beacon Docs",
    preferredNetwork: network.type,
  });

  Tezos.setWalletProvider(wallet);

  const [myAddress, setMyAddress] = React.useState(null);

  /*** Function to connect to the wallet ***/
  const connectToWallet = async () => {
    console.log("je penerte êtasse")
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

  /*** Function to connect to the wallet ***/
  const disconnect = async () => {
    console.log("me dis pas que ?")
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await wallet.clearActiveAccount();
    await wallet.disconnect();
    setMyAddress(null);
  };

  /*** Render ***/
  return (
    <div>
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

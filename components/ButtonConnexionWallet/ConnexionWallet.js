import React from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import {
  NetworkType,
} from "@airgap/beacon-sdk";
import ConnectedButton from "./ConnectedButton";
import { useState } from "react/cjs/react.production.min";

function ConnexionWallet() {
  const network = { type: NetworkType.MAINNET };

  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({
    name: "Beacon Docs",
    preferredNetwork: network.type,
  }); // Takes the same arguments as the DAppClient constructor

  Tezos.setWalletProvider(wallet);

  const [myAddress, setMyAddress] = React.useState(null);

  const disconnect = async () => {
    setMyAddress(null);
    await wallet.clearActiveAccount();
    await disconnect()
  };

  const getConnexionToTemple = async () => {
    const activeAccount = await wallet.client.getActiveAccount();
    if (activeAccount) {
      // If defined, the user is connected to a wallet.
      // You can now do an operation request, sign request, or send another permission request to switch wallet
      console.log("Already connected:", activeAccount.address);

      // You probably want to show the address in your UI somewhere.
      setMyAddress(activeAccount.address);
    } else {
      // The user is NOT connected to a wallet.

      // The following permission request should not be called on pageload,
      // it should be triggered when the user clicks on a "connect" button on your page.
      // This will trigger the pairing alert UI where the user can select which wallet to pair.
      wallet.requestPermissions({
        network: network,
      });
      let tmp = await wallet.getPKH();
      setMyAddress(tmp);
      console.log("New connection: ", myAddress);
    }
  }

  return (
    <div>
      <button
        onClick={getConnexionToTemple}
        className="bg-white text-lightBlue-600  active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3  ease-linear transition-all duration-150"
        type="button"
      >
        {!myAddress ? (
          "Connect Wallet"
        ) : (
          <ConnectedButton walletAdress={myAddress} />
        )}
      </button>
    </div>
  );
}
export default ConnexionWallet;

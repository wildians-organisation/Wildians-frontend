import React from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";
import constate from "constate";

export const [DAppProvider, getMyAddress, useConnectToWallet, useDisconnect] =
  constate(
    useDApp,
    (v) => v.myAddress,
    (v) => v.connectToWallet,
    (v) => v.disconnect
  );

function useDApp({ appName }) {
  const network = { type: NetworkType.MAINNET };
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({
    name: "Beacon Docs",
    preferredNetwork: network.type,
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

  /*** Function to connect to the wallet ***/
  const disconnect = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await wallet.clearActiveAccount();
    await wallet.disconnect();

    setMyAddress(null);
  };

  return {
    myAddress,
    connectToWallet,
    disconnect,
  };
}

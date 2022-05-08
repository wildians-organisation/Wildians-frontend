import React from "react";
import { NetworkType } from "@airgap/beacon-sdk";
import constate from "constate";
import { TezosToolkit, MichelsonMap } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { bytes2Char, char2Bytes } from "@taquito/utils";
import axios from "axios";

export const [
  DAppProvider,
  getMyAddress,
  useConnectToWallet,
  useDisconnect,
  useMint,
] = constate(
  useDApp,
  (v) => v.myAddress,
  (v) => v.connectToWallet,
  (v) => v.disconnect,
  (v) => v.mintNFT
);

function useDApp({ appName }) {
  const network = { type: NetworkType.ITHACANET };
  // const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const Tezos = new TezosToolkit("https://rpc.ithacanet.teztnets.xyz");
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
  const getContract = async () => {
    const contract = await Tezos.wallet.at(
      "KT1AfpwqcTJEG6e4rtU9WfdqiMMNa9k9c89e"
    );
    return contract;
  };
  const mintNFT = async (address, url, token_id) => {
    //await disconnectWallet();
    //await connectWallet();
    const amount = 1;
    const contract = await getContract();
    const urlBytes = char2Bytes(
      "ipfs://bafkreibnrkfp3byylib5nii7aphpomudcdsbwn252xc4l6yykymaem7tfy"
    );
    console.log("bef mint : ", address, url, token_id);

    const op = await contract.methods
      .mint(
        "tz1fm7T5D5EyEa5aJWMzAvSwZcwAdwUfDx5C",
        1,
        MichelsonMap.fromLiteral({ "": urlBytes }),
        4
      )
      .send();
    console.log("after mint : ", op);
    return await op.confirmation(3);
  };

  return {
    myAddress,
    connectToWallet,
    disconnect,
    mintNFT,
  };
}

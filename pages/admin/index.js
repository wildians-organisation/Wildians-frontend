import React from "react";
import axios from "axios";
import * as config from "../../config/config.js";
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
  apiKey: `${config.GCPAPIKEY}`,
  authDomain: `${config.GCPAUTHDOMAIN}`,
  databaseURL: `${config.GCPDATABASEURL}`,
  projectId: `${config.GCPPROJECTID}`,
  storageBucket: `${config.GCPSTORAGEBUCKET}`,
  messagingSenderId: `${config.GCPMESSAGINGSENDERID}`,
  appId: `${config.GCPAPPID}`,
};

export default function Admin() {
  // Display items in a list with add button on each items
  const [nbrToken, setNbrToken] = React.useState();
  const [nbNFTConnectedAdress, setNbNFTConnectedAdress] = React.useState();
  const [clientsAddress, setClientsAddress] = React.useState([]);
  const [userAddress, setUserAddress] = React.useState("");
  const [userNFTs, setUserNFTs] = React.useState([]);
  const [tezosAmount, setTezosAmount] = React.useState(0);
  const [numberWallets, setNumberWallets] = React.useState(0);
  const app = initializeApp(firebaseConfig);
  const functions = getFunctions(app);
  functions.region = "europe-west1";
  const countWallets = httpsCallable(functions, "countWallets");
  /*** Function to add wallet adress to firebase ***/
  const getWallets = async () => {
    try {
      const response = await countWallets();
      setNumberWallets(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  // Get informations about the smartcontract with the tzkt api
  const getContractInformations = async () => {
    const response = await axios.get(
      `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/history`
    );
    const nbrNftMinted = response.data.length;
    setNbrToken(nbrNftMinted - 1);
    let tmp = [];
    let tmpAmount = 0;
    var wallets = new Map();
    response.data.forEach((element) => {
      if (element.operation.type != "origination") {
        let data_value = element.operation.parameter.value;

        tmpAmount += data_value.cost / config.TEZOS_CONVERTER;
        tmp.push(data_value.address);
        if (wallets.has(data_value.address)) {
          wallets.set(data_value.address, wallets.get(data_value.address) + 1);
        } else {
          wallets.set(data_value.address, 1);
        }
      }
    });
    setClientsAddress(tmp);
    setUserNFTs(wallets);
    setTezosAmount(tmpAmount);
  };

  // Get the number of NFTs of the wallet connected
  const getNFTMintByUser = async (userAdress) => {
    const response = await axios.get(
      `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/history`
    );
    var nb = 0;
    response.data.forEach((element) => {
      if (
        element.operation.type !== "origination" &&
        element.operation.parameter.value.address === userAdress
      ) {
        nb = nb + 1;
      }
    });
    setNbNFTConnectedAdress(nb);
  };

  React.useEffect(async () => {
    if (
      typeof window !== "undefined" &&
      window.localStorage.getItem("beacon:accounts")
    ) {
      setUserAddress(
        JSON.parse(localStorage.getItem("beacon:accounts"))[0].address
      );
      getContractInformations();
      getNFTMintByUser(
        JSON.parse(localStorage.getItem("beacon:accounts"))[0].address
      );
      getWallets();
    }
  }, []);

  const listItems2 = Array.from(userNFTs).map((addr, id) => (
    <li key={id}>
      {addr[0]} : {addr[1]}
    </li>
  ));

  return (
    <>
      <main className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div className="flex">
          <div style={{ marginTop: 290 }}>
            <center>
              <p>Number of token: {nbrToken}</p>
              <ul>{listItems2}</ul>
            </center>
          </div>
          <div style={{ marginTop: 290, marginLeft: 100 }}>
            <center>
              <p>Adress connected: {userAddress}</p>
              <p>
                Number of tokens of connected address: {nbNFTConnectedAdress}
              </p>
              <p>Number of unique wallets connected: {numberWallets}</p>
            </center>
          </div>
          <div style={{ marginTop: 290, marginLeft: 100 }}>
            <center>
              <p>Tezos Generated: {tezosAmount}</p>
              <p>
                Tezos donated to association:{" "}
                {tezosAmount * config.ASSOCIATION_PART}
              </p>
              <p>Tezos for us: {tezosAmount * config.WILDIANS_PART}</p>
            </center>
          </div>
        </div>
      </main>
    </>
  );
}

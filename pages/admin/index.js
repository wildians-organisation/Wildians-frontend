import React from "react";
import axios from "axios";
import * as config from "../../config/config.js";

export default function Admin() {
  // Display items in a list with add button on each items
  const [nbrToken, setNbrToken] = React.useState();
  const [nbNFTConnectedAdress, setNbNFTConnectedAdress] = React.useState();
  const [clientsAddress, setClientsAddress] = React.useState([]);
  const [userAddress, setUserAddress] = React.useState("");
  const [userNFTs, setUserNFTs] = React.useState([]);

  React.useEffect(() => {
    if (typeof window !== "undefined")
      setUserAddress(
        JSON.parse(localStorage.getItem("beacon:accounts"))[0].address
      );
  }
  );


  const getContractInformations = async () => {
    const response = await axios.get(
      `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/history`
    );
    console.log("response len = " + response.data.length);
    const nbrNftMinted = response.data.length;
    setNbrToken(nbrNftMinted - 1);
    let tmp = [];

    var wallets = new Map();
    response.data.forEach((element) => {
      if (element.operation.type != "origination") {
        tmp.push(element.operation.parameter.value.address);
        if (wallets.has(element.operation.parameter.value.address)) {
          wallets.set(
            element.operation.parameter.value.address,
            wallets.get(element.operation.parameter.value.address) + 1
          );
        }
        else {
          wallets.set(element.operation.parameter.value.address, 1);
        }
      }
    });
    setClientsAddress(tmp);
    setUserNFTs(wallets);
  };

  const getNFTMintByUser = async () => {
    const response = await axios.get(
      `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/history`
    );
    console.log("response len = " + response.data.length);
    var nb = 0;
    response.data.forEach((element) => {
      if (element.operation.type != "origination" && element.operation.parameter.value.address == userAddress) {
        nb = nb + 1;
      }
    });
    console.log("nb = " + nb);
    setNbNFTConnectedAdress(nb);
  };

  React.useEffect(() => {
    getContractInformations();
    getNFTMintByUser();
  }, []);

  const listItems2 = Array.from(userNFTs).map((addr) => <li>{addr[0]} : {addr[1]}</li>);

  return (
    <>
      <main className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div style={{ marginTop: 290 }}>
          <center>
            <p>Number of token: {nbrToken}</p>
            <ul>{listItems2}</ul>
          </center>
        </div>
        <div style={{ marginTop: 290, marginLeft: 100 }}>
          <center>
            <p>Adress connected: {userAddress}</p>
            <p>Number of tokens of connected address: {nbNFTConnectedAdress}</p>
          </center>
        </div>
      </main>
    </>
  );
}

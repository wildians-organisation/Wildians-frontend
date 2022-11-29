import React from "react";
import axios from "axios";
import * as config from "../../config/config.js";

export default function Admin() {
  // Display items in a list with add button on each items
  const [nbrToken, setNbrToken] = React.useState();
  const [clientsAddress, setClientsAddress] = React.useState([]);

  const getContractInformations = async () => {
    const response = await axios.get(
      `https://api.ghostnet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/storage/history`
    );
    console.log("response len = " + response.data.length);
    const nbrNftMinted = response.data.length;
    setNbrToken(nbrNftMinted - 1);
    let tmp = [];
    response.data.forEach((element) => {
      if (element.operation.type != "origination") {
        tmp.push(element.operation.parameter.value.address);
      }
    });
    setClientsAddress(tmp);
  };

  React.useEffect(() => {
    getContractInformations();
  }, []);

  const listItems = clientsAddress.map((addr) => <li>{addr}</li>);
  return (
    <>
      <main className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div style={{ marginTop: 290 }}>
          <center>
            <p>Number of token: {nbrToken}</p>
            <ul>{listItems}</ul>
          </center>
        </div>
      </main>
    </>
  );
}

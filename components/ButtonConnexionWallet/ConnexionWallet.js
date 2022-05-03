import React from "react";
import ConnectedButton from "./ConnectedButton";
import { getMyAddress, useConnectToWallet, useDisconnect } from "dapp/dapp";

export default function ConnexionWallet() {
  /*** Initializing the wallet ***/

  const myAddress = getMyAddress();
  const connectToWallet = useConnectToWallet();
  const disconnect = useDisconnect();

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

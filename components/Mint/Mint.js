import React from "react";
export const NAME = "NFPETS"; // the name of the app
export const CONTRACT_ADDRESS = "KT1AfpwqcTJEG6e4rtU9WfdqiMMNa9k9c89e";
export const RPC_URL = "https://rpc.ithacanet.teztnets.xyz"; // network rpc url
export const NETWORK = "ithacanet";
import {
  getMyAddress,
  useConnectToWallet,
  useDisconnect,
  useMint,
} from "dapp/dapp";

function Mint() {
  const address = getMyAddress();
  const mint = useMint(
    "tz1fm7T5D5EyEa5aJWMzAvSwZcwAdwUfDx5C",
    "ipfs://bafkreibnrkfp3byylib5nii7aphpomudcdsbwn252xc4l6yykymaem7tfy",
    6
  );

  return (
    <div>
      <button
        onClick={() => {
          mint();
        }}
      >
        mint
      </button>
    </div>
  );
}

export default Mint;

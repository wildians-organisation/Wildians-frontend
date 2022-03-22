import React from "react";
import { useConnect } from "../../dapp/dapp";
import { NETWORK } from "../../dapp/default";
function ConnexionWallet() {
  const connect = useConnect();
  const handleConnect = React.useCallback(async () => {
    try {
      await connect("mainnet", { forcePermission: true });
    } catch (err) {
      console.log("error in connect");
      console.error(err.message);
    }
  }, [connect]);
  return (
    <button
      onClick={() => {
        console.log("clicking on connect to wallet");
        handleConnect();
      }}
    >
      Connect account
    </button>
  );
}
export default ConnexionWallet;

import React from "react";
import { useConnect } from "../../dapp/dapp";

function ConnexionWallet() {
  const connect = useConnect();
  const handleConnect = React.useCallback(async () => {
    try {
      await connect(NETWORK, { forcePermission: true });
    } catch (err) {
      console.error(err.message);
    }
  }, [connect]);
  return <button onClick={handleConnect}>Connect account</button>;
}
export default ConnexionWallet;

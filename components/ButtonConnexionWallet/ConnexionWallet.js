import React from "react";
import {
  useConnect,
  useAccountPkh,
  useOnBlock,
  useTezos,
} from "../../dapp/dapp";
import { DEV_NETWORK } from "../../dapp/default";
import ConnectedButton from "./ConnectedButton";

function ConnexionWallet() {
  const connect = useConnect();
  const accountPkh = useAccountPkh();
  const tezos = useTezos();

  const [balance, setBalance] = React.useState(null);
  const handleConnect = React.useCallback(async () => {
    try {
      await connect(DEV_NETWORK, { forcePermission: true });
    } catch (err) {
      console.error(err.message);
    }
  }, [connect]);

  

  const loadBalance = React.useCallback(async () => {
    if (tezos) {
      const tezosOk = tezos;
      const bal = await tezosOk.tz.getBalance(accountPkh);
      setBalance(tezosOk.format("mutez", "tz", bal).toString());
    }
  }, [tezos, accountPkh, setBalance]);

  React.useEffect(() => {
    loadBalance();
  }, [loadBalance]);

  useOnBlock(tezos, loadBalance);

  return (
    <div className="flex items-center">
      {!accountPkh ? 
      <button
        onClick={() => {
            handleConnect()
            console.log("yo")
        }}
        className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
        type="button"
      >
        Connect Wallet
      </button> :  <ConnectedButton/>}
    </div>
  );
}
export default ConnexionWallet;

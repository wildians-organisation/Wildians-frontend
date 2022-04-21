import React from "react";
import Loading from "components/Loading/Loading";
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
  const [connecting, setConnecting] = React.useState(false);
  const handleConnect = async () => {
    console.log("in connexion wallet");
    try {
      setConnecting(true);
      await connect(DEV_NETWORK, { forcePermission: true });
      setConnecting(false);
    } catch (err) {
      setConnecting(false);
      console.error(err.message);
    }
  };

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
    <div>
      <button
        onClick={handleConnect}
        className="bg-white text-lightBlue-600  active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3  ease-linear transition-all duration-150"
        type="button"
      >
        {!accountPkh ? (
          connecting ? (
            <Loading />
          ) : (
            "Connect Wallet"
          )
        ) : (
          <ConnectedButton handleConnect={handleConnect} />
        )}
      </button>
    </div>
  );
}
export default ConnexionWallet;

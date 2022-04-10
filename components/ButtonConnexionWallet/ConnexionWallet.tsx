import React from "react";
import Loading from "components/Loading/Loading";
import {
  useConnect,
  useAccountPkh,
  useOnBlock,
  useTezos,
} from "../../dapp/dapp";
import { DEV_NETWORK } from "../../dapp/default";
function ConnexionWallet() {
  const connect = useConnect();
  const accountPkh = useAccountPkh();
  const tezos = useTezos();

  const [balance, setBalance] = React.useState(null);
  const [connecting, setConnecting] = React.useState(false)
  const handleConnect = React.useCallback(async () => {
    try {
      setConnecting(true)
      await connect(DEV_NETWORK, { forcePermission: true });
      setConnecting(false)
    } catch (err) {
      setConnecting(false)
      console.error(err.message);
    }
  }, [connect]);

  const accountPkhPreview = React.useMemo(() => {
    if (!accountPkh) return undefined;
    else {
      const accPkh = accountPkh as unknown as string;
      const ln = accPkh.length;
      return `${accPkh.slice(0, 7)}...${accPkh.slice(ln - 4, ln)}`;
    }
  }, [accountPkh]);

  const loadBalance = React.useCallback(async () => {
    if (tezos) {
      const tezosOk = tezos as any;
      const bal = await tezosOk.tz.getBalance(accountPkh);
      setBalance(tezosOk.format("mutez", "tz", bal).toString());
    }
  }, [tezos, accountPkh, setBalance]);

  React.useEffect(() => {
    loadBalance();
  }, [loadBalance]);

  useOnBlock(tezos, loadBalance);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        margin: "0 auto",
        width: "80px",
      }}
    >
      <button
        onClick={handleConnect}
        className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
        type="button"
      >
        {!accountPkh ? connecting ? <Loading/> : "Connect Wallet" : accountPkhPreview}
      </button>
    </div>
  );
}
export default ConnexionWallet;

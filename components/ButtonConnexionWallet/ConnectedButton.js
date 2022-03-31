import { useAccountPkh } from "dapp/dapp";
import React from "react";

function ConnectedButton() {
    const accountPkh = useAccountPkh();
    const accountPkhPreview = React.useMemo(() => {
        if (!accountPkh) return undefined;
        else {
            const accPkh = accountPkh;
            const ln = accPkh.length;
            return `${accPkh.slice(0, 7)}...${accPkh.slice(ln - 4, ln)}`;
        }
    }, [accountPkh]);
    const [dropDown, setDropdown] = React.useState(false)

    return (

        <div>
            <button onClick={() => setDropdown(!dropDown)} >{accountPkhPreview}</button>
            {dropDown && <div>
                caca
            </div>}
        </div>

    );
}
export default ConnectedButton;

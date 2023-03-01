const { TezosToolkit } = require("@taquito/taquito");
const { NetworkType } = require("@airgap/beacon-sdk");
const { BeaconWallet } = require("@taquito/beacon-wallet");

const network = { type: NetworkType.GHOSTNET };
const wallet = new BeaconWallet({ name: "Test" });
const Tezos = new TezosToolkit("https://ghostnet.smartpy.io");

/* TESTS TO CHECK THAT API IS ALIVE AND SMART CONTRACT ACCESSIBLE */

test("Check API connectivity", async () => {
    const cli = wallet.client;
    expect(cli).not.toBe(null);
});

test("Check Smart Contract", async () => {
    const adrr =
        process.env.contract_adress == undefined || !process.env.contract_adress
            ? process.env.CONTRACT_ADDRESS
            : process.env.contract_adress;
    const contract = await Tezos.wallet.at(adrr);
    expect(contract).not.toBe(null);
});

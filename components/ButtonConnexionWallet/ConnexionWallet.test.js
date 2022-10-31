//const ConnexionWallet = require('./ConnexionWallet.js');

const { TezosToolkit } = require("@taquito/taquito");
const { NetworkType } = require("@airgap/beacon-sdk");
const { BeaconWallet } = require("@taquito/beacon-wallet");

const network = { type: NetworkType.GHOSTNET };
const wallet = new BeaconWallet({ name: "Test" });
const Tezos = new TezosToolkit('https://ghostnet.smartpy.io');

/* TESTS TO CHECK THAT API IS ALIVE AND SMART CONTRACT ACCESSIBLE */

test('Check API connectivity', async () => {
    const cli = wallet.client;
    expect(cli).not.toBe(null);
});

test('Check Smart Contract', async () => {
    const contract = await Tezos.wallet.at('KT1LSrvFWU9DKwSP1zqyDSEUw4b6qLWuaii8');
    expect(contract).not.toBe(null);
});
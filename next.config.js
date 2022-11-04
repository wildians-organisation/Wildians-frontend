module.exports = {
    reactStrictMode: true,
    env: {
        name: process.env.NAME,
        contract_adress: process.env.CONTRACT_ADDRESS,
        rpc_url: process.env.RPC_URL,
        network: process.env.NETWORK,
        smart_contract: process.env.SMART_CONTRACT,
    }
}
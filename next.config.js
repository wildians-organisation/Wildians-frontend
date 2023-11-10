module.exports = {
    reactStrictMode: true,
    env: {
        name: process.env.NAME,
        contract_adress: process.env.CONTRACT_ADDRESS,
        rpc_url: process.env.RPC_URL,
        network: process.env.NETWORK,
        wolf_nft: process.env.WOLF_NFT,
        deer_nft: process.env.DEER_NFT,
        bull_nft: process.env.BULL_NFT,
        tezos_converter: process.env.TEZOS_CONVERTER,
        association_part: process.env.ASSOCIATION_PART,
        wildians_part: process.env.WILDIANS_PART,
        bucket_region: process.env.BUCKET_REGION,
        gcp_api_key: process.env.GCPAPIKEY,
        gcp_auth_domain: process.env.GCPAUTHDOMAIN,
        gcp_database_url: process.env.GCPDATABASEURL,
        gcp_project_id: process.env.GCPPROJECTID,
        gcp_storage_bucket: process.env.GCPSTORAGEBUCKET,
        gcp_messaging_sender_id: process.env.GCPMESSAGINGSENDERID,
        gcp_app_id: process.env.GCPAPPID,
        measurement_id: process.env.MEASUREMENTID,
        clarity_appid: process.env.CLARITY_APPID
    },
    trailingSlash: true,
    images: {
        unoptimized: true
    }
};

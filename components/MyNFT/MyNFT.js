import React, { useEffect } from "react";
import axios from "axios";

export default function MyNFTs() {

    const [myNFTs, setMyNFTs] = React.useState({});

    const fetchData = async () => {
        let tmp_nft = []
        try {
          const response = await axios.get(
            `https://api.ghostnet.tzkt.io/v1/tokens/balances?account=${myAddress}`
          );
          for (let i = 0; i < response['data'].length; i++) {
            let tmp_obj = {
              name: response['data'][i]['token']['metadata']['name'],
              creators: response['data'][i]['token']['metadata']['creators'][0],
              displayUri: response['data'][i]['token']['metadata']['displayUri'],
              description: response['data'][i]['token']['metadata']['description'],
            }
            tmp_nft.push(tmp_obj)
          }
          setMyNFTs(tmp_nft);
        } catch (e) {
          console.log(e);
        }
      };

    useEffect(() => {
        console.log("Sup")
        const { data } = getQueryParams(window.location.search);
        console.log(data)
    }
    , [myAddress]);
};
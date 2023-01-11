import React, { useEffect } from "react";
import axios from "axios";
import NFTCard from "../../components/NFTCard/NFTCard";
import Header from "../../components/Header/Header";
export default function UserNFTs(props) {
  const [userNFTs, setUserNFTs] = React.useState([]);

  const [userAddress, setUserAddress] = React.useState("");

  const fetchData = async (userAddressToFetch) => {
    let tmp_nft = [];
    try {
      const response = await axios.get(
        `https://api.ghostnet.tzkt.io/v1/tokens/balances?account=${userAddressToFetch}`
      );
      for (let i = 0; i < response["data"].length; i++) {
        if (response["data"][i]["token"]["metadata"] == null) continue;
        let tmp_obj = {
          name: response["data"][i]["token"]["metadata"]["name"],
          creators: response["data"][i]["token"]["metadata"]["creators"][0],
          displayUri: response["data"][i]["token"]["metadata"]["displayUri"],
          description: response["data"][i]["token"]["metadata"]["description"],
        };
        tmp_nft.push(tmp_obj);
      }
      setUserNFTs(tmp_nft);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined")
      setUserAddress(
        JSON.parse(localStorage.getItem("beacon:accounts"))[0].address
      );
    fetchData(userAddress);
  }, [userAddress]);

  return (
    <div className="bg-attributegreen">
      {/* <Header /> */}
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="text-black text-6vw  font-goghbold text-white">
          My Collection
        </div>

        {/* <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> * */}
        {userNFTs.map((nft, key) => (
          <div key={key} className="m-8">
            <div className="aspect-w-1 aspect-h-1 w-11/12 m-auto overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              {/* <img
                  src={nft.displayUri.replace(
                    "ipfs://",
                    "https://ipfs.io/ipfs/"
                  )}
                  alt={nft.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{nft.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {nft.creators}
              </p> */}
              <NFTCard metadata={nft} />
            </div>
          </div>
        ))}
        {/* <NFTCard meta/>
        {/* </div> */}
      </div>
    </div>
  );
}

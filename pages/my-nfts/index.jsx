import React from "react";
import Router from "next/router";
import MyNFTs from "components/ListNFTs/MyNFTs";

export default function MyNFTsPage() {

  // Display items in a list with add button on each items
  return (
    <>
      <MyNFTs/>
    </>);
};

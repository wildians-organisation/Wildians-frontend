import React from "react";
import { render, fireEvent, getByText, getByAltText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ModalONG from "./ModalONG";

describe("ModalONG Component", () => {
  const WildiansMock = {
    ong_list: ["ONG1", "ONG2", "ONG3"],
    nft_adress: "tz1ip6QZpQU2UTALMAAfyDhWLY87hFiCfeCN",
  };

  const setONG = () => {
    return "ONG Set";
  };

  const onMint = () => {
    return "Minted";
  };

  const onClose = () => {
    return "Closed";
  };


  it("should display ONG options correctly", () => {
    const { getByText } = render(
      <ModalONG Wildians={WildiansMock}  onMint={onMint} onClose={onClose} isOpen={true} setONG={setONG} />
    );
    // Check if all ONG options are rendered
    WildiansMock.ong_list.forEach((item) => {
        const ongOption = getByText(item);
      expect(ongOption).toBeInTheDocument(item);
    });
  });


  it("should show the mint button", () => {
    const { getByText } = render(
      <ModalONG Wildians={WildiansMock}  onMint={onMint} onClose={onClose} isOpen={true} setONG={setONG} />
    );

    const mintButton = getByText("Mint");

    // Check if the mint button is visible
    expect(mintButton).toBeInTheDocument();
  });
});

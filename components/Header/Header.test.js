import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
    it("Check simple data", () => {
        render(<Header />);

        expect(screen.getByTestId("the-project").textContent).toBe(
            "THE PROJECT"
        );
        expect(screen.getByTestId("association").textContent).toBe(
            "ASSOCIATION"
        );
        expect(screen.getByTestId("nft-customization").textContent).toBe(
            "NFT CUSTOMIZATION"
        );
    });
});

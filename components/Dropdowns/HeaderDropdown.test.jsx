import { render, screen } from "@testing-library/react";
import HeaderDropdown from "./HeaderDropdown";

describe("HeaderDropdown", () => {
    it("Check simple data", () => {
        render(<HeaderDropdown />);

        expect(screen.getByTestId("twitter").textContent).toBe("Twitter");
        expect(screen.getByTestId("discord").textContent).toBe("Discord");
    });
});

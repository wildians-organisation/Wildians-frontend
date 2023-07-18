import { render, screen } from "@testing-library/react";
import CustomOption from "./CustomizationOption";

describe("CustomOption", () => {
    it("Check simple data", () => {
        const label = "wood"
        const options = {
            color: "",
            ears: "",
            face: "",
            roof: "",
            horn: "",
            nose: "",
            paws: "",
            wood: "",
        }
        const optionName = "wood"
        const handleOptionSelect = () => {};
        const optionList = ["blue"]
        render(
            <CustomOption
                label={label}
                options={options}
                optionName={optionName}
                handleOptionSelect={handleOptionSelect}
                optionList={optionList}
            />
        );

        expect(screen.getByTestId("label").textContent).toBe(
            label.toString("wood") + ":"
        );
        expect(screen.getByTestId("optionValue").textContent).toBe(
            "blue"
        );
    });
});
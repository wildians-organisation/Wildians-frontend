beforeEach(() => {
  cy.visit("http://localhost:3000");
});

describe("check different component", () => {
  context("check display default resolution", () => {
    it("Check if text coming soon is present", () => {
      cy.contains("COMING SOON").should("exist");
    });

    it("Check if text join us is present", () => {
      cy.contains("JOIN US").should("exist");
    });

    it("Check if text join us is present in bottom page", () => {
      cy.scrollTo("bottom");
      cy.contains("JOIN US").should("exist");
    });

    it("Scroll to footer and check differents elements", () => {
      cy.scrollTo("bottom");
      cy.contains("WILDIANS COMMUNITY").should("exist");
      cy.contains("White-Paper").should("exist");
    });

    it("Scroll a bit to next section", () => {
      cy.scrollTo(0, 700);
      cy.contains("TEZOS BLOCKCHAIN").should("exist");
    });

    it("Scroll to footer and check differents elements", () => {
      cy.scrollTo("bottom");
      cy.contains("WILDIANS COMMUNITY").should("exist");
      cy.contains("White-Paper").should("exist");
    });

    //Check dropdown is not visible
    it("Check if dropdown is not visible", () => {
      cy.get(".dropdown").should("not.be.visible");
    });

    //check background is visible
    it("Check if background is visible", () => {
      cy.get(".headerBackground").should("be.visible");
    });

    //check if logo is visible
    it("Check if logo is visible", () => {
      cy.get(".headerLogo").should("be.visible");
    });

    //check if discord logo is visible
    it("Check if discord logo is visible", () => {
      cy.get(".headerDiscord").should("be.visible");
    });

    //check if twitter logo is visible
    it("Check if twitter logo is visible", () => {
      cy.get(".headerTwitter").should("be.visible");
    });

    //check if connexion wallet is visible
    it("Check if connexion wallet is visible", () => {
      cy.get(".connexionWallet").should("be.visible");
    });

    //check if mint button is visible
    it("Check if mint button is visible", () => {
      cy.get(".mintNFT").should("be.visible");
    });

    //check if tree is visible
    it("Check if tree is visible", () => {
      cy.get(".tree").should("be.visible");
    });

    //check if logoFooter is visible
    it("Check if logoFooter is visible", () => {
      cy.get(".logoFooter").should("be.visible");
    });
  });
});
context("iphone-X resolution", () => {
  beforeEach(() => {
    // run these tests as if in a mobile browser
    // and ensure our responsive UI is correct
    cy.viewport("iphone-x");
  });

  it("Check if dropdown is present", () => {
    cy.get(".dropdown").should("be.visible");
  });

  //check if dropdown have 4 elements
  it("Check if dropdown have 4 elements", () => {
    cy.get(".dropdown").click();
    cy.contains("Twitter").should("be.visible");
    cy.contains("Mint NFT").should("be.visible");
    cy.contains("Discord").should("be.visible");
    cy.contains("Connect Wallet").should("be.visible");
  });

  //check if discord logo is visible
  it("Check if discord logo is visible", () => {
    cy.get(".headerDiscord").should("not.be.visible");
  });

  //check if twitter logo is visible
  it("Check if twitter logo is visible", () => {
    cy.get(".headerTwitter").should("not.be.visible");
  });

  it("Check if text title third part is present", () => {
    cy.contains("HOW DOES THIS WORK").should("be.visible");
  });

  it("Check if explanationPart is visible", () => {
    cy.get(".explanationPart").should("be.visible");
  });
});

describe("check different component", () => {
  before(function () {
    cy.visit('http://localhost:3000');
    cy.on('fail', (error) => {
      if (error.message.includes('CORS')) {
        return false;
      }
    });
    cy.wait(15000);
  });

  context("check display default resolution", () => {
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
    cy.contains("Connect Your Wallet").should("be.visible");
  });
});
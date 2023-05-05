import React from "react";

function ONGWindow({ Wildians, onMint, onClose}) {
  // Define the options state variables here
  const [selectedONG, setSelectedONG] = React.useState("");

  const handleOptionChange = (event) => {
    setSelectedONG(event.target.value);
  };

  const handleMint = () => {
    if (selectedONG) {
      onClose();
      onMint(Wildians.nft_adress)
    }
  };

  return (
    <div className="options-window">
      <div className="option">
        {Wildians.ong_list.map((item, idx) => (
          <div key={idx}>
            <input
            type="radio"
            value={item}
            onChange={handleOptionChange}
            checked={selectedONG == item}
          />
          <label> {item}</label>
          </div>
        ))}
      </div>
      <br></br>
      <div className="mint-button">
      <button onClick={handleMint}
                      className="mintNFT text-gray-900 group flex rounded-full items-center px-2 py-2 md:h-min md:text-sm md:text-greenkaki md:bg-greeny md:hover:bg-greenkaki md:hover:text-greeny  md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded-full md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150 md:whitespace-nowrap "
                      type="button">Mint</button>
                      </div>
    </div>
  );
}
export default ONGWindow;
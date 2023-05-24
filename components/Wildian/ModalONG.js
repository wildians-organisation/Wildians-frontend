import React from "react";
import ReactModal from "react-modal";

function ModalONG({ Wildians, onMint, onClose, isOpen }) {
    // Define the options state variables here
    const [selectedONG, setSelectedONG] = React.useState("");

    const handleOptionChange = (event) => {
        setSelectedONG(event.target.value);
    };

    const handleMint = () => {
        if (selectedONG) {
            onClose();
            onMint(Wildians.nft_adress, selectedONG);
        }
    };

    const modalStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "30%",
            maxHeight: "70%",
            overflow: "auto"
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)"
        }
    };
    return (
        <div className="options-window">
            <ReactModal
                isOpen={isOpen}
                onRequestClose={onClose}
                contentLabel="Options ONG"
                style={modalStyles}
                ariaHideApp={false}
            >
                <h2>Select an ONG:</h2> <br></br>
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
                    <button
                        onClick={handleMint}
                        className="mintNFT text-gray-900 group flex rounded-full items-center px-2 py-2 md:h-min md:text-sm md:text-greenkaki md:bg-greeny md:hover:bg-greenkaki md:hover:text-greeny  md:text-xs md:font-bold md:uppercase md:px-4 md:py-2 md:rounded-full md:shadow md:hover:shadow-lg md:outline-none md:focus:outline-none md:mr-1 md:mb-0 md:ml-3  md:ease-linear md:transition-all md:duration-150 md:whitespace-nowrap "
                        type="button"
                    >
                        Mint
                    </button>
                </div>
            </ReactModal>
        </div>
    );
}
export default ModalONG;

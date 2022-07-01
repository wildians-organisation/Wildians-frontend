import React from "react";

export var address = "";

const sendData = () => {
  address = document.querySelector('#address').value;
}

export default function Transactions() {

  return (
    <>
      <main className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <form action="/send-data-here" method="post">
          <label for="address">Recipient:</label>
          <input type="text" id="address" name="address" />
          <button
            onClick={() => sendData()}
            className="bg-white text-lightBlue-600  active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3  ease-linear transition-all duration-150"
            type="button"
          >
            send Data
          </button>
        </form>
      </main>

    </>);
};
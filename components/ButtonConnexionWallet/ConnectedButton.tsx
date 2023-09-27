import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Router from "next/router";

/**
 * fonction permettant de naviguer parmis les différentes pages du footer
 * @param {*} pageName
 */
const goToIndicatedPage = (pageName) => {
    Router.push(pageName);
};

function ConnectedButton({ walletAdress, disconnect }) {
    const truncate = (input) =>
        `${input.substring(0, 5)}...${input.substring(
            input.length - 5,
            input.length
        )}`;
    return (
        <Menu
            as="div"
            className="inline-block text-left flex flex-row items-center "
        >
            <div>
                <Menu.Button className="text-xs text-greenkaki bg-greeny font-bold uppercase px-1 rounded-full outline-none focus:outline-none lg:mr-1 lg:mb-0 ease-linear transition-all duration-150 md:hover:bg-greenkaki md:hover:text-greeny ">
                    {truncate(walletAdress)}
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute w-56 mt-16 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${
                                        active
                                            ? "bg-violet-500 text-white"
                                            : "text-gray-900"
                                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    onClick={disconnect}
                                >
                                    Logout
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
export default ConnectedButton;

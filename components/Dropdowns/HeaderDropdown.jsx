import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import ConnexionWallet from "components/ButtonConnexionWallet/ConnexionWallet";

function HeaderDropdown() {
    return (
        <div className="flex flex-row items-center dropdown">
            <Menu
                as="div"
                className="relative inline-block text-left "
                alt="Dropdown Menu"
                id="menu-id"
            >
                <div id="div_menu">
                    <Menu.Button
                        id="header_dropdown_btn"
                        name="header_dropdown_btn"
                        value="Button Name"
                        aria-label=""
                        className="text-xs font-bold uppercase px-1  rounded outline-none focus:outline-none lg:mr-1 lg:mb-0 ease-linear transition-all duration-150 "
                        alt="Dropdown Button"
                    >
                        <IconContext.Provider
                            id="icon_context"
                            value={{
                                color: "white",
                                className: "global-class-name",
                                size: "2em"
                            }}
                        >
                            {" "}
                            <FaBars
                                id="fabars"
                                aria-label="3_bar"
                                className="white"
                            />
                        </IconContext.Provider>
                    </Menu.Button>
                </div>
                <Transition
                    id="transition"
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        id="menu_transaction"
                        className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <div className="px-1 py-1 ">
                            <Menu.Item id="item_transaction">
                                {({ active }) => (
                                    <button
                                        id="btn_transaction_to"
                                        className={`${
                                            active
                                                ? "bg-violet-500 text-white"
                                                : "text-gray-900"
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                        data-testid="twitter"
                                    >
                                        Twitter
                                    </button>
                                )}
                            </Menu.Item>

                            <Menu.Item id="item_settings">
                                {({ active }) => (
                                    <button
                                        id="btn_settings_to"
                                        className={`${
                                            active
                                                ? "bg-violet-500 text-white"
                                                : "text-gray-900"
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                        data-testid="discord"
                                    >
                                        Discord
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item id="connexion_item">
                                {({ active }) => <ConnexionWallet />}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}

export default HeaderDropdown;

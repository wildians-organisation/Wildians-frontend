import { useAccountPkh } from "dapp/dapp";
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Router from "next/router";

/**
 * fonction permettant de naviguer parmis les différentes pages du footer
 * @param {*} pageName
 */
const goToIndicatedPage = (pageName) => {
  Router.push(pageName);
};

function ConnectedButton() {
  const accountPkh = useAccountPkh();
  const accountPkhPreview = React.useMemo(() => {
    if (!accountPkh) return undefined;
    else {
      const accPkh = accountPkh;
      const ln = accPkh.length;
      return `${accPkh.slice(0, 7)}...${accPkh.slice(ln - 4, ln)}`;
    }
  }, [accountPkh]);
  const [dropDown, setDropdown] = React.useState(false);

  return (
    <Menu as="div" className="inline-block text-left ">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {accountPkhPreview}
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
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  onClick={() => goToIndicatedPage("/transaction")}
                >
                  Transaction
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  onClick={() => goToIndicatedPage("/settings")}
                >
                  Settings
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  onClick={() => goToIndicatedPage("/logout")}
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

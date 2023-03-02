import { Fragment } from "react";
import {
    Bars3CenterLeftIcon,
    PencilIcon,
    ChevronDownIcon,
    CreditCardIcon,
    Cog8ToothIcon
} from "@heroicons/react/24/solid";

import { BellIcon, CheckIcon } from "@heroicons/react/24/outline";

import { Menu, Transition, Popover } from "@headlessui/react";

import Link from "next/link";

export default function TopBar({ showNav, setShowNav }) {
    return (
        //w for width and h for hedge
        //when side bar close the icon move to the topbar
        <div
            className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
                showNav ? "pl-56" : ""
            }`}
        >
            <div className="pl-4 md:pl-15">
                <Bars3CenterLeftIcon
                    className="h-8 w-8 text-gray-700 cursor-pointer"
                    onClick={() => setShowNav(!showNav)}
                />
            </div>
            <div className="flex items-center pr-4 md:pr-16">
                <Popover className="relative">
                    <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-700">
                        <BellIcon className="h-6 w-6" />
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform scale-95"
                        enterTo="transform scale-100"
                        leave="transition ease-in duration=75"
                        leaveFrom="transform scale-100"
                        leaveTo="transform scale-95"
                    >
                        <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
                            <div className="relative p-3">
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-gray-700 font-medium">
                                        Notifications
                                    </p>
                                    <a
                                        className="text-sm text-orange-500"
                                        href="#"
                                    >
                                        Marquer comme tous lus
                                    </a>
                                </div>
                                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                                    <div className="flex">
                                        <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                                            <CheckIcon className="h-4 w-4 text-green-600" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-medium text-gray-700">
                                                Nouveau wallet dans la whitelist
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                Le wallet @778879 vient d'être
                                                rajouté
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                                            <CheckIcon className="h-4 w-4 text-green-600" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-medium text-gray-700">
                                                Nouvel achat wallet
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                Le wallet @623223 a completé une
                                                transaction
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                                            <CheckIcon className="h-4 w-4 text-green-600" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-medium text-gray-700">
                                                Création d'une nouvelle
                                                whitelist
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                La whitelist Hello vient d'être
                                                créé
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center items-center">
                            <picture>
                                <img
                                    src="/img/maxime.jpg"
                                    className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                                    alt="profile picture"
                                />
                            </picture>
                            <span className="hidden md:block font-medium text-gray-700">
                                Maxime
                            </span>
                        </Menu.Button>
                    </div>
                </Menu>
            </div>
        </div>
    );
}
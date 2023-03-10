import { forwardRef } from "react";
import Link from "next/link";
import {
    HomeIcon,
    BanknotesIcon,
    ComputerDesktopIcon,
    QueueListIcon
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
    const router = useRouter();

    return (
        // the width of the sidebar is link to the padding of the layout
        <div ref={ref} className="fixed w-56 h-full bg-emerald-800 shadow-sm">
            <div className="flex justify-center mt-6 mb-14">
                <picture>
                    <img
                        className="w-32 h-auto"
                        src="/img/logo_header.png"
                        alt="company logo"
                    />
                </picture>
            </div>

            <div className="flex flex-col">
                <Link href="/admin">
                    <div
                        className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                            router.pathname == "/admin"
                                ? "bg-greeny text-greenkaki"
                                : "text-beige md:hover:bg-greenkaki md:hover:text-greeny"
                        }`}
                    >
                        <div className="mr-2">
                            <ComputerDesktopIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p>Wallet info</p>
                        </div>
                    </div>
                </Link>
                <Link href="/finance">
                    <div
                        className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                            router.pathname == "/finance"
                                ? "bg-greeny text-greenkaki"
                                : "text-beige md:hover:bg-greenkaki md:hover:text-greeny"
                        }`}
                    >
                        <div className="mr-2">
                            <BanknotesIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p>Finance</p>
                        </div>
                    </div>
                </Link>
                <Link href="/whitelisting">
                    <div
                        className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                            router.pathname == "/whitelisting"
                                ? "bg-greeny text-greenkaki"
                                : "text-beige md:hover:bg-greenkaki md:hover:text-greeny"
                        }`}
                    >
                        <div className="mr-2">
                            <QueueListIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p>Whitelisting</p>
                        </div>
                    </div>
                </Link>
                <Link href="/">
                    <div
                        className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                            router.pathname == "/"
                                ? "bg-greeny text-greenkaki"
                                : "text-beige md:hover:bg-greenkaki md:hover:text-greeny"
                        }`}
                    >
                        <div className="mr-2">
                            <HomeIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p>Page d'accueil</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
});

SideBar.displayName = "SideBar";

export default SideBar;

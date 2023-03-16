import {
    IoWalletOutline,
    IoAccessibilityOutline,
    IoRocketSharp
} from "react-icons/io5";

export default function FinanceStatsGrid() {
    return (
        <div className="grid lg:grid-cols-3 gap-5 mb-16">
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-200">
                    <IoWalletOutline className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                        Tezos Generated
                    </span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            4567890
                        </strong>
                        <span className="text-sm text-green-500 pl-2">
                            +10000
                        </span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-200">
                    <IoRocketSharp className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                        Tezos for us
                    </span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            2556789
                        </strong>
                        <span className="text-sm text-green-500 pl-2">+3</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-200">
                    <IoAccessibilityOutline className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                        Tezos donated to association
                    </span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            2000
                        </strong>
                        <span className="text-sm text-red-500 pl-2">-600</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    );
}

function BoxWrapper({ children }) {
    return (
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
            {children}
        </div>
    );
}

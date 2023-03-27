import {
    IoWalletOutline,
    IoPersonAdd,
    IoRecordingOutline,
    IoGlobeOutline,
    IoSwapHorizontalOutline,
    IoTrendingUpOutline
} from "react-icons/io5";

export default function DashboardStatsGrid() {
    return (
        <div className="grid lg:grid-cols-3 gap-5 mb-16">
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-200">
                    <IoWalletOutline className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                        Total wallet client
                    </span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            23
                        </strong>
                        <span className="text-sm text-green-500 pl-2">+3</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-200">
                    <IoPersonAdd className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                        Last 2 weeks Connexion
                    </span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            2
                        </strong>
                        <span className="text-sm text-red-500 pl-2">-6</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-200">
                    <IoGlobeOutline className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                        Total Month Connexion
                    </span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            16
                        </strong>
                        <span className="text-sm text-red-500 pl-2">-43</span>
                    </div>
                </div>
            </BoxWrapper>
 
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-200">
                    <IoSwapHorizontalOutline className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                        Total Transaction
                    </span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            25
                        </strong>
                        <span className="text-sm text-green-500 pl-2">+3</span>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-200">
                    <IoTrendingUpOutline className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                        Last Transaction
                    </span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            03/14/2023
                        </strong>
                        <span className="text-xl text-gray-700 p-3">21:51</span>
                    </div>
                </div>
            </BoxWrapper>
            
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-purple-200">
                    <IoRecordingOutline className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">
                        Total Month Transaction
                    </span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">
                            16
                        </strong>
                        <span className="text-sm text-red-500 pl-2">-43</span>
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

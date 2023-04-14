import React from "react";

export default function RecentOrders({ recentTransacData }) {
    return (
        <div>
            <strong className="text-gray-700 font-medium">
                Wallet history
            </strong>
            <div className="bg-white h-auto shadow-sm overflow-x-auto">
                <table className="text-gray-700 w-full">
                    <thead>
                        <tr>
                            <th className="py-2">Wallet Adress</th>
                            <th className="py-2">Amount</th>
                            <th className="py-2 text-left">Last Transaction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentTransacData.map((wallet, id) => (
                            <tr key={id}>
                                <td className="border-t border-gray-200 py-2 text-center text-xs">
                                    {wallet.adress}
                                </td>
                                <td className="border-t border-gray-200 py-2 text-center text-xs">
                                    {wallet.transac}
                                </td>
                                <td className="border-t border-gray-200 py-2 text-justify text-xs">
                                    {wallet.last}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

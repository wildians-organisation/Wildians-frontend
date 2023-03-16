import React from "react";

export default function RecentOrders({ recentTransacData }) {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th>Wallet Adress</th>
                            <th>Amount of Transaction</th>
                            <th>Last Transaction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentTransacData.map((wallet, id) => (
                            <tr key={id}>
                                <td className="border-t border-gray-200 py-2 .justify-content-center">
                                    {wallet.adress}
                                </td>
                                <td className="border-t border-gray-200 py-2 .justify-content-center">
                                    {wallet.transac}
                                </td>
                                <td className="border-t border-gray-200 py-2 .justify-content-center">
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

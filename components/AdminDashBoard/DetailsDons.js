import React from "react";

export default function DetailsDons({ details }) {
    return (
        <div>
            <strong className="text-gray-700 font-medium">
                Repartition donations
            </strong>
            <div className="bg-white h-auto shadow-sm overflow-x-auto">
                <table className="text-gray-700 w-full">
                    <thead>
                        <tr>
                            <th className="py-2">Wallet Address</th>
                            <th className="py-2 text-left">
                                Distribution of donations
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(details).map(([address, donations]) => (
                            <tr key={address}>
                                <td className="border-t border-gray-200 py-2 text-center text-xs">
                                    {address}
                                </td>
                                <td className="border-t border-gray-200 py-2 text-center text-xs">
                                    {Object.entries(donations).map(
                                        ([charity, amount]) => (
                                            <div key={charity}>
                                                {charity}: {amount}
                                            </div>
                                        )
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

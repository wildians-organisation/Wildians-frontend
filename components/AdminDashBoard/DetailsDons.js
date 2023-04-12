import React from "react";

export default function DetailsDons({ details }) {
  // Create a copy of the details array
  const sortedDetails = [...details];

  // Sort the copied array by date in descending order
  sortedDetails.sort((a, b) => new Date(b.date) - new Date(a.date));

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
              <th className="py-2 text-left">Distribution of donations</th>
              <th className="py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {sortedDetails.map((dons) => (
              <tr key={dons.date}>
                <td className="border-t border-gray-200 py-2 text-center text-xs">
                  {dons.address}
                </td>
                <td className="border-t border-gray-200 py-2 text-justify text-xs">
                  {dons.ong}
                </td>
                <td className="border-t border-gray-200 py-2 text-justify text-xs">
                  {dons.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

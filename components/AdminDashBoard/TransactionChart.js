import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

export default function TransactionChart({ eachMonthTransaction }) {
    return (
        <div>
            <strong className="text-gray-700 font-medium">
                Connexion /Transaction
            </strong>
            <div className="bg-white h-96 shadow-sm">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={eachMonthTransaction}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3 0 0"
                            vertical={false}
                        />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Connexion" fill="#61876E" />
                        <Bar dataKey="Transaction" fill="#A6BB8D" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

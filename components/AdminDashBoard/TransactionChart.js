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

const data = [
    {
        name: "Jan",
        Connexion: 40,
        Transaction: 2
    },
    {
        name: "Feb",
        Connexion: 30,
        Transaction: 1
    },
    {
        name: "Mar",
        Connexion: 20,
        Transaction: 9
    },
    {
        name: "Apr",
        Connexion: 27,
        Transaction: 3
    },
    {
        name: "May",
        Connexion: 18,
        Transaction: 4
    },
    {
        name: "Jun",
        Connexion: 23,
        Transaction: 3
    },
    {
        name: "July",
        Connexion: 34,
        Transaction: 4
    },
    {
        name: "Aug",
        Connexion: 20,
        Transaction: 9
    },
    {
        name: "Sep",
        Connexion: 27,
        Transaction: 3
    },
    {
        name: "Oct",
        Connexion: 18,
        Transaction: 4
    },
    {
        name: "Nov",
        Connexion: 23,
        Transaction: 3
    },
    {
        name: "Dec",
        Connexion: 34,
        Transaction: 4
    }
];

export default function TransactionChart() {
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
                        data={data}
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

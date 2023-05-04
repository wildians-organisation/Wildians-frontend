import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const RADIAN = Math.PI / 180;
const COLORS = ["#609966", "#9DC08B", "#40513B"];

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function OrganisationRepartition({ data }) {
    return (
        <div
            className="bg-white h-auto shadow-sm"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}
        >
            <strong className="text-gray-700 font-medium">
                ONG Repartition
            </strong>
            <div style={{ flex: "1" }}>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="45%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={105}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((_, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div style={{ flex: "1", marginRight: "20px" }}>
                <div>
                    <h1 className="font-weight-bold mb-4 mt-20">
                        Select dates
                    </h1>
                    <input type="date" className="mb-10 mr-2" />
                    <input type="date" className="mb-10 mr-2" />
                    <div className="bg-white h-auto shadow-sm overflow-x-auto">
                        <table className="text-gray-700 w-full">
                            <thead></thead>
                            <tbody>
                                <tr className="border-t border-gray-200 py-2 text-justify text-xs">
                                    <td>GREENPEACE</td>
                                    <td>40 Tezos</td>
                                    <td>(15 dons)</td>
                                </tr>
                                <tr className="border-t border-gray-200 py-2 text-justify text-xs">
                                    <td>WWF</td>
                                    <td>40 Tezos</td>
                                    <td>(15 dons)</td>
                                </tr>
                                <tr className="border-t border-gray-200 py-2 text-justify text-xs">
                                    <td>UNICEF</td>
                                    <td>40 Tezos</td>
                                    <td>(15 dons)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

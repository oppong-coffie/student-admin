import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Transfer", value: 35 },
  { name: "Payment", value: 25 },
  { name: "Withdrawal", value: 22 },
  { name: "Deposit", value: 18 },
];

const COLORS = ["#f97316", "#fbbf24", "#10b981", "#3b82f6"];

export default function TransactionType() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-border">
      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <div className="w-1 h-6 bg-primary rounded"></div>
        Transaction Type
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

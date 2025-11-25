import React from "react";
import Profile from "../../assets/profile2.png"

// Top Performing Student Accounts
const topAccounts = [
  { name: "Lydia Mckinney", amount: "20% off on laptop" },
  { name: "Aryanis Black", amount: "20% off on phone" },
  { name: "Bowen Fox", amount: "10% off on tablet" },
  { name: "Jenny Wisen", amount: "5% off on laptop" },
  { name: "Cody Fisher", amount: "10% off on phone" },
  { name: "Devan Lara", amount: "5% off on tablet" },
];

// Recent Transactions
const transactions = [
  { id: "15% off laptop", name: "Lydia Mckinney", amount: "$88,132.0", status: "Failed", time: "12:30" },
  { id: "20% off phone", name: "Aryanis Black", amount: "$188,660.0", status: "Pending", time: "12:30" },
  { id: "10% off tablet", name: "Bowen Fox", amount: "$53,226.0", status: "Success", time: "12:30" },
  { id: "5% off laptop", name: "Jenny Wisen", amount: "$18,623.5", status: "Failed", time: "12:30" },
];

export default function DashboardTables() {
  return (
    <div className="mt-20">
      
      {/* Flex container for top accounts and transactions */}
      <div className="grid grid-cols-9 gap-20">
     
        {/* Recent Transactions */}
        <div className="col-span-5">
          <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <div style={{ width: "6px", height: "22px", background: "gray", borderRadius: "0px 8px 8px 0px", marginRight: "8px" }}></div>
            <h3 style={{ margin: 0, fontWeight: "bold" }}>Recent Discount Redemption</h3>
          </div>
          <table style={{ width: "100%"}}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "8px",}}>Offer Redeemed</th>
                <th style={{ textAlign: "left", padding: "8px",}}>Student Name</th>
                <th style={{ textAlign: "left", padding: "8px",}}>Amount</th>
                <th style={{ textAlign: "center", padding: "8px" }}>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, idx) => (
                <tr key={idx} className="text-slate-400">
                  <td style={{ padding: "8px" }}>{txn.id}</td>
                  <td style={{ padding: "8px" }}>{txn.name}</td>
                  <td style={{ padding: "8px", textAlign: "left" }}>{txn.amount}</td>
                  <td style={{ padding: "8px", textAlign: "center" }}>{txn.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

           {/* Top Accounts */}
           <div className="col-span-4">
          <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <div style={{ width: "6px", height: "22px", background: "gray", borderRadius: "0px 8px 8px 0px", marginRight: "8px" }}></div>
            <h3 style={{ margin: 0, fontWeight: "bold" }}>Top Offer Engagement Students</h3>
          </div>
          <table style={{ width: "75%"}}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "8px" }}>Student Name</th>
                <th style={{ textAlign: "left", padding: "8px" }}>Offer</th>
              </tr>
            </thead>
            <tbody>
              {topAccounts.map((account, idx) => (
                <tr key={idx} className="text-slate-400">
                  <td className="flex gap-2" style={{ padding: "8px" }}><img className="w-6 h-6 rounded-full" src={Profile}/> <h1> {account.name}</h1></td>
                  <td style={{ padding: "8px", textAlign: "right" }}>{account.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

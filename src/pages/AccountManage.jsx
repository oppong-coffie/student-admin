import React from "react";
import StatCards from "../components/AccountManage/Statcards.jsx"
import StudentTable from "../components/AccountManage/Transaction-table.jsx"

export default function Home() {



  return (
    <main className="">
      <div className="max-w-7xl mx-auto">
     {/* StatCards */}
     <StatCards />

        {/* Student Table */}
        <StudentTable />
      </div>
    </main>
  );
}

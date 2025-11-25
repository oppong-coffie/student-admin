import React from 'react'
import StatCards from "../components/dashboard/StatCards.jsx"
import AnalyticsCharts from "../components/dashboard/AnalyticsCharts.jsx"
import DashboardTables from "../components/dashboard/DashboardTables.jsx"


export const Home = () => {
  return (
    <div>
        <StatCards />
         <AnalyticsCharts />
         <DashboardTables />
    </div>
  )
}

export default Home
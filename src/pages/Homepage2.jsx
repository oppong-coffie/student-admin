import React from 'react'
import StatCards from "../components/dashboard2/StatCards.jsx"
import AnalyticsCharts from "../components/dashboard2/AnalyticsCharts.jsx"
import DashboardTables from "../components/dashboard2/DashboardTables.jsx"


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
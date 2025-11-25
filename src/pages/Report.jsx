import React from 'react'
import Growth from '.././components/report/Growth.jsx'
import Trend from '.././components/report/Trends.jsx'
import Analytics from '.././components/report/Analytics.jsx'

export const Report = () => {
  return (
    <div>
      <Growth />
      <Trend />
      <Analytics />
    </div>
  )
}

export default Report
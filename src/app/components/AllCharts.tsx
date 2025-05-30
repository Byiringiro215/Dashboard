import React from 'react'
import Progresslist from './Progresslist'
import DonutChart from './Doghnutchart'
const AllCharts = () => {
    const data = [
        { label: 'Strongly Agree', value: 80 },
        { label: 'Agree', value: 33 },
        { label: 'Neutral', value: 61 },
        { label: 'Disagree', value: 17 },
        { label: 'Strongly Disagree', value: 8 },
      ];
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-5 items-center shadow-md  px-5 py-4 rounded-lg bg-white '>
        <DonutChart/>
            <Progresslist items={data} />
    </div>
  )
}

export default AllCharts

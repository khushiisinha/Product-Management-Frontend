import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Year 2019',
    uv: 500,
    pv: 200,
    amt: 500,
  },
  {
    name: 'Year 2020',
    uv: 200,
    pv: 500,
    amt: 200,
  },
  {
    name: 'Year 2021',
    uv: 200,
    pv: 280,
    amt: 229,
  },
  {
    name: 'Year 2022',
    uv: 200,
    pv: 390,
    amt: 200,
  },
  {
    name: 'Year 2023',
    uv: 480,
    pv: 112,
    amt: 200,
  }
];

const getIntroOfPage = (label) => {
  if (label === 'Year 2023') {
    return "Total order in year 2023";
  }
  if (label === 'Year 2022') {
    return "Total order in year 2022";
  }
  if (label === 'Year 2021') {
    return "Total order in year 2021";
  }
  if (label === 'Year 2020') {
    return 'Total order in year 2020';
  }
  if (label === 'Year 2019') {
    return 'Total order in year 2019';
  }
  
  return '';
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-slate-400 px-2 rounded-lg">
        <p className="label ">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc"></p>
      </div>
    );
  }

  return null;
};

export default class ToolTip extends PureComponent {
  
  render() {
    return (
      <ResponsiveContainer width="100%" height="20%" >
         
        <BarChart
        
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }} className='text-white'
        >
           
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" axisLine={{ stroke: 'white' }} tick={{ fill: 'white' }} scale="point" padding={{ left: 50, right: 50 }}/>
<YAxis axisLine={{ stroke: 'white' }} tick={{ fill: 'white' }} />

          <YAxis />
          <Tooltip content={<CustomTooltip />} className='text-white' />
          
          <Bar dataKey="pv" barSize={20} fill="#82ca9d" />
        </BarChart >
        
      </ResponsiveContainer>
    );
  }
}



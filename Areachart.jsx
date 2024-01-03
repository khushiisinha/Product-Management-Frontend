import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'IR Sensor',
    Total: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Remote Sensor',
    Total: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Digital Counter Tatalizer',
    Total: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Inductive Sensor',
    Total: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Slot Sensor',
    Total: 1890,
    pv: 4800,
    amt: 2181,
  }
];

export default class Areachart extends PureComponent {
  

  render() {
    return (
      <ResponsiveContainer width="100%" height="20%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" axisLine={{ stroke: 'white' }} tick={{ fill: 'white' }}/>
          <YAxis axisLine={{ stroke: 'white' }} tick={{ fill: 'white' }}/>
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

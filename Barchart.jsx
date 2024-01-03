import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'IR Sensor',
      uv: 500,
      total: 200,
      amt: 50,
    },
    {
      name: 'Digital Counter Tatalizer',
      uv: 200,
      total: 500,
      amt: 20,
    },
    {
      name: 'Slot Sensor',
      uv: 200,
      total: 280,
      amt: 22,
    },
    {
      name: 'Remote Sensor',
      uv: 200,
      total: 390,
      amt: 20,
    },
    {
      name: 'Inductive Sensor',
      uv: 480,
      total: 110,
      amt: 20,
    }
  ];

export default class Barchart extends PureComponent {
 
  render() {
    return (
      <ResponsiveContainer width="100%" height="20%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 50 }} axisLine={{ stroke: 'white' }} tick={{ fill: 'white' }}/>
          <YAxis axisLine={{ stroke: 'white' }} tick={{ fill: 'white' }}/>
          <Tooltip />
         
           <Bar dataKey="total" fill="#82ca9d" activeBar={<Rectangle fill="pink" stroke="blue" />} barSize={20}/>  {/*  #8884d8 */}
          {/* <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

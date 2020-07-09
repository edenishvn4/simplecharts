import React, { PureComponent } from 'react';
import './App.css'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const data = [
  {
    name: '食費', 大都市: 62315, 町村: 58161
  },
  {
    name: '住居費', 大都市: 22540, 町村: 13664
  },
  {
    name: '交通．通信費', 大都市: 30265, 町村: 39510
  },
  {
    name: '教養娯楽費', 大都市: 29651, 町村: 25858
  },
];

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <div>
      {
        payload.map((entry, index) => {/*(
          <li key={`item-${index}`}>{entry.value}</li>
        )*/
          let style={}
          if(index===0){
            entry.value='大都市-世帯人員 : 2.23人'
            style={color:'#8884d8'}
          }else{
            entry.value='町村-世帯人員 : 2.86人'
            style={color:'#82ca9d'}
          }
          return(
              <p id="font" key={`item-${index}`} style={style}>{entry.value}</p>
          );
        })
      }
    </div>
  );
}

export default class Example extends PureComponent {
  
  render() {
    return (
      <BarChart
        width={600}
        height={800}
        data={data}
        margin={{
          top: 100, right: 30, left: 20, bottom: 15,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis stroke="#8884d8" />
        <Tooltip formatter={(value) => new Intl.NumberFormat('jp').format(value) + "円"}/>
        <Legend width={170} wrapperStyle={{ top: 100, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3 }}
     content={renderLegend} layout="horizontal"/>
        <Bar dataKey="大都市" fill="#8884d8" />
        <Bar dataKey="町村" fill="#82ca9d" />
      </BarChart>
    );
  }
}

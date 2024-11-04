import {LineChart as LChart, Line , XAxis ,YAxis } from 'recharts';
const LineChart = () => {

    const MarksData = [
        { name: "Student 1", math: 78 ,physics:96 },
        { name: "Student 2", math: 85 ,physics:90 },
        { name: "Student 3", math: 92 ,physics:9},
        { name: "Student 4", math: 74 ,physics:56 },
        { name: "Student 5", math: 88 ,physics:86 },
        { name: "Student 6", math: 90 ,physics:45 },
        { name: "Student 7", math: 67 ,physics:64 },
        { name: "Student 8", math: 81 ,physics:34 },
        { name: "Student 9", math: 76 ,physics:28 },
        { name: "Student 10", math: 94 ,physics:90},
      ];
      
    return (
        <div>
           <LChart width={500} height={400} data={MarksData}> 
            <XAxis dataKey="name"></XAxis>
            <Line dataKey="math" stroke='red'>
            </Line>
            <Line dataKey="physics"stroke='blue'></Line>
           </LChart>
        </div>
    );
};

export default LineChart;

/**
 * import { LineChart, Line } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];

const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);
 */

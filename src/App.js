import logo from './logo.svg';
import './App.scss';
import 'antd/dist/antd.css';
import { Card } from "./card/card";
import { SimpleChart } from "./simple-chart/simpleChart";
import { LineChart } from "./line-chart/lineChart";

function App() {
  return (
    <div >
      <LineChart></LineChart>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.scss';
import 'antd/dist/antd.css';
import { Card } from "./card/card";
import { SimpleChart } from "./simple-chart/simpleChart";

function App() {
  return (
    <div >
      <SimpleChart></SimpleChart>
    </div>
  );
}

export default App;

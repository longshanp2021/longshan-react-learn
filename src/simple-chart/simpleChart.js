import * as react from "react";
import "./simpleChart.scss";
import * as icons from '@ant-design/icons';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';

// // 数据源
// const data = [
//     { genre: 'Sports', sold: 275, income: 2300 },
//     { genre: 'Strategy', sold: 115, income: 667 },
//     { genre: 'Action', sold: 120, income: 982 },
//     { genre: 'Shooter', sold: 350, income: 5271 },
//     { genre: 'Other', sold: 150, income: 3710 }
// ];

// // 定义度量
// const cols = {
//     sold: { alias: '销售量' },
//     genre: { alias: '游戏种类' }
// };

export class SimpleChart extends react.Component {

    // // 数据源
    // data = [
    //     { genre: 'Sports', sold: 275, income: 2300 },
    //     { genre: 'Strategy', sold: 115, income: 667 },
    //     { genre: 'Action', sold: 120, income: 982 },
    //     { genre: 'Shooter', sold: 350, income: 5271 },
    //     { genre: 'Other', sold: 150, income: 3710 }
    // ];

    // // 定义度量
    // cols = {
    //     sold: { alias: '销售量' },
    //     genre: { alias: '游戏种类' }
    // };
    data = [
        { name: '小明', age: 18 },
        { name: '毛毛', age: 12 },
        { name: '乐乐', age: 11 }
    ];
    cols = {
        name: { alias: '姓名' },
        age: { alias: '年龄' },
    };
    render() {
        return (
            // <Chart width={600} height={400} data={this.data} scale={this.cols}>
            //     <Axis name="genre" title />
            //     <Axis name="sold" title />
            //     <Legend position="top" dy={-20} />
            //     <Tooltip />
            //     <Geom type="interval" position="genre*sold" color="genre" />
            // </Chart>

            <Chart width={600} height={400} data={this.data} scale={this.cols}>
                <Axis name="name" title />
                <Axis name="age" title />
                <Legend position="top" dy={-20} />
                <Tooltip />
                <Geom type="interval" position="name*age" color="name" />
            </Chart>
        );
    };
}
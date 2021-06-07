import * as react from "react";
import "./lineChart.scss";
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';

export class LineChart extends react.Component {

    data = [
        { month: '1月', money: 2000 },
        { month: '2月', money: 1800 },
        { month: '3月', money: 5000 }
    ];
    cols = {
        money: {
            min: 0,
            range: [0, 0.93],
            alias: '元'
        },
        month: {
            range: [0, 0.9],
            alias: '月份'
        }
    };
    render() {
        return (
            <Chart width={1000} height={500} data={this.data} scale={this.cols} forceFit>
                <Axis name="month" title={{
                    position: 'end',
                    offset: 15,
                    textStyle: {
                        fontSize: '12',
                        textAlign: 'center',
                        fill: '#999',
                        fontWeight: 'bold',
                        rotate: 0,
                        autoRotate: true
                    }
                }} />
                <Axis name="money" title={{
                    position: 'end',
                    offset: 5.5,
                    textStyle: {
                        fontSize: '12',
                        textAlign: 'right',
                        fill: '#999',
                        fontWeight: 'bold',
                        rotate: 0
                    }
                }} />
                <Tooltip
                    crosshairs={{
                        type: "y"
                    }}
                />
                <Geom type="line" position="month*money" size={2}
                    tooltip={['month*money', (month, money) => {
                        return {
                            name: '数值', // 要显示的名字
                            value: money,
                            title: month
                        }
                    }]} />
                <Geom
                    type="point"
                    position="month*money"
                    size={4}
                    shape={"circle"}
                    style={{
                        stroke: "#fff",
                        lineWidth: 1
                    }}
                    tooltip={['month*money', (month, money) => {
                        return {
                            name: '数值', // 要显示的名字
                            value: money,
                            title: month
                        }
                    }]}
                />
            </Chart>
        );
    }
}
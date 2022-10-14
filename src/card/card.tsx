import * as React from "react";
import { Button } from "antd";
import "./card.scss";

type CardProps = { name: string; age: number; gender: string; save: any };
type CardState = { isHot: boolean; obj: any };

export class Card extends React.Component<CardProps, CardState> {
  constructor(props: any) {
    super(props);
    this.state = { isHot: false, obj: { name: "哈哈哈" } };
  }
  render() {
    console.log(this);
    this.props.save(this.state.obj);
    return (
      <div>
        <Button type="primary" onClick={() => this.test()}>
          切换
        </Button>
        <h1 onClick={this.weather}>
          今天天气很{this.state.isHot ? "炎热" : "寒冷"}
        </h1>
        <ul>
          <li>姓名:{this.props.name}</li>
          <li>姓名:{this.props.age}</li>
          <li>姓名:{this.props.gender}</li>
        </ul>
      </div>
    );
  }

  test = () => {
    this.setState({ isHot: !this.state.isHot });
  };

  weather() {}
}

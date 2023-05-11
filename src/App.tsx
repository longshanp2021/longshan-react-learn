import "./App.scss";
import "antd/dist/antd.css";
import { Card } from "./card/card";
import { Teacher } from "./teacher/teacher";

const save = (e: any) => {};

function App(props: any) {
  if (props.name) {
    return <Card/>;
  } else {
    return <Teacher />;
  }
}

export default App;

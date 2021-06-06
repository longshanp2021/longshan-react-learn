import * as react from "react";
import "./card.scss";
import * as icons from '@ant-design/icons';

export class Card extends react.Component {

    hideHeader = false;
    render() {
        return (
            <div className='card'>
                <div className='header'>
                    <span>我是标题</span>
                    <icons.CaretUpOutlined className='toggle' />
                </div>
                <div className='content'>
                    我是内容 
                </div>
            </div>
        );
    }
}
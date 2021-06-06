import * as react from "react";
import "./card.scss";
import * as icons from '@ant-design/icons';

export class Card extends react.Component {

    hideHeader = false;

    toggleHeader = () => {
        this.hideHeader = !this.hideHeader;
        this.setState({ hideHeader: this.hideHeader });
    };
    render() {
        return (
            <div className='card'>
                <div className='header' >
                    <span className='title'>我是标题</span>
                    <icons.CaretUpOutlined className={this.hideHeader ? 'toggle fold' : 'toggle'} onClick={this.toggleHeader} />
                </div>
                <div className={this.hideHeader ? 'content hide' : 'content'}>
                    我是内容
                </div>
            </div>
        );
    }
}
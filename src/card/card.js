import * as react from "react";
import "./card.scss";
import * as icons from '@ant-design/icons';
import { List } from "../list/list";
import * as antd from 'antd';


export class Card extends react.Component {

    username = '乐乐';
    users = [{ name: '小明' }, { name: '毛毛' }];
    hideHeader = false;
    constructor(props) {
        super(props);
        this.toggleHeader = this.toggleHeader.bind(this);
        this.addUser = this.addUser.bind(this);
        this.handlerUsernameChange = this.handlerUsernameChange.bind(this);
    }
    toggleHeader() {
        this.hideHeader = !this.hideHeader;
        this.setState({ hideHeader: this.hideHeader });
    };

    addUser() {
        this.users.push({ name: this.username });
        this.setState({ users: this.users });
    };

    handlerUsernameChange(event) {
        this.username = event.target.value;
        this.setState({ username: this.username });
    }
    render() {
        return (
            <div className='card'>
                <div className='header' >
                    <span className='title'>我是标题</span>
                    <icons.CaretUpOutlined className={this.hideHeader ? 'toggle fold' : 'toggle'} onClick={this.toggleHeader} />
                </div>
                <div className={this.hideHeader ? 'content hide' : 'content'}>
                    <div className='add-user'>
                        <label>姓名:</label>
                        <antd.Input className='ipt-username' value={this.username} onChange={this.handlerUsernameChange}></antd.Input >
                        <antd.Button className='btn-add' onClick={this.addUser}>添加一个用户</antd.Button>
                    </div>

                    <List users={this.users}></List>
                </div>
            </div>
        );
    }
}
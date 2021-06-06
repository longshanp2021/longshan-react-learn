import { Component } from "react";
import "./card.scss";

export class Card extends Component {

    render() {
        return (
            <div className='card'>
                <div className='header'>
                    <span>我是标题</span>
                    <span></span>
                </div>
                <div className='content'></div>
            </div>
        );
    }
}
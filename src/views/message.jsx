import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import MessageDetail from "./message-detail";
import MyNavLink from "../component/myNavLink";

export default class Message extends Component {

    state = {
        messages : []
    }

    componentDidMount() {
        // 模擬發送AJAX請求非同步取得數據
        setTimeout(()=>{
            const messages = [
                {id : 1, title : 'message001'},
                {id : 3, title : 'message003'},
                {id : 5, title : 'message005'}
            ]
            this.setState({messages});
        }, 1000)
    }

    showDetail = (id) =>{
        this.props.history.push(`/home/message/messagedetail/${id}`)
    }

    showDetail2 = (id) =>{
        this.props.history.replace(`/home/message/messagedetail/${id}`)
    }

    back = ()=>{
        this.props.history.goBack();
    }

    forward = () =>{
        this.props.history.goForward();
    }

    reqPage = () =>{
        // 通過js進行頁面跳轉
        window.location='https://www.google.com/'
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((message, index) => (
                            <li key={index}>
                                <MyNavLink to={`/home/message/messagedetail/${message.id}`}>{message.title}</MyNavLink>
                                &nbsp;&nbsp;
                                <button onClick={() => this.showDetail(message.id)}>push查看</button>
                                <button onClick={() => this.showDetail2(message.id)}>replace查看</button>
                            </li>
                        ))
                    }
                </ul>
                <p>
                    <button onClick={this.back}>回退</button>
                    <button onClick={this.forward}>前進</button>
                </p>

                <p>
                    <button onClick={this.reqPage}>google</button>

                </p>
                <Route path='/home/message/messagedetail/:id' component={MessageDetail} />
            </div>
        )
    }
}
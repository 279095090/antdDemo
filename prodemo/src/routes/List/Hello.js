import React, { Component } from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import { connect } from 'dva';
import { Input } from 'antd';

@connect()
export default class Hello extends Component {
    render(){
        return(
            <div>Hello!</div>
        );
    }
}
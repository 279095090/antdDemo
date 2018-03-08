import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Card, Icon, Form } from 'antd';
import { Table, Button, Input, message, Popconfirm, Divider } from 'antd';
import Login from '../../components/Login';
import styles from './Profile.less';

const FormItem = Form.Item;

@connect(({ user, loading }) => ({
    userInfo: user.currentUserInfo,
    loading: loading.effects['user/fetchCurrentInfo']
}))
export default class UserProfile extends PureComponent {
    state = {
        //userInfo: this.props.userInfo        
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'user/fetchCurrentInfo',
        });
    }

    handChangeAvatar = (e) => {
        e.preventDefault();
    }

    render() {
        const { userInfo } = this.props;
        const leftside = {
            xs: { span: 6 }
        };
        const rightside = {
            xs: { span: 18 }
        };
        return (
            <div className={styles.main}>
                <Row gutter={16}>
                    <Col {...leftside}>
                        <div className={styles.mycard} style={{marginRight:'-24px',paddingTop:'48px'}}>
                            <Row type="flex" justify="end" >
                                <img className={styles.avatar} src={userInfo.avatar} />
                            </Row>
                            <Row type="flex" justify="end">
                                <a style={{ float: 'clear' }} onClick={this.handChangeAvatar}>Change Image</a>
                            </Row>
                        </div>
                    </Col>
                    <Col {...rightside}>
                        <div className={styles.mycard}>
                            <Form>
                                <FormItem label="Field A">
                                    <Input placeholder="input placeholder" />
                                </FormItem>
                                <FormItem label="Field B">
                                    
                                    <Input placeholder="input placeholder" />
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" size="large">Submit</Button>
                                </FormItem>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

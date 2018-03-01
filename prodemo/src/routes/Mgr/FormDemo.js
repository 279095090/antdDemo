import React, { PureComponent, Fragment } from 'react';
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message, Badge, Divider } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './FormDemo.less';

const FormItem = Form.Item;
const { Option } = Select;

export default class FormDemo extends PureComponent {

    render() {
        const formItemLayout = {
            labelCol: {
               span:6
            },
            wrapperCol: {
               span:16
            },
        };

        return (
            <div className={styles.userListForm}>
                <Form layout='inline'>
                    <Row>
                        <Col md={8} sm={12} xs={24}>
                            <FormItem label="用户编号" {...formItemLayout}>
                                <Input style={{ width: '100%' }} />
                            </FormItem>
                        </Col>
                        <Col md={8} sm={12} xs={24}>
                            <FormItem label="用户名" {...formItemLayout}>
                                <Input style={{ width: '100%' }} />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col  md={8} sm={12} xs={24}>
                            <FormItem label="电话号码（中国）" {...formItemLayout}>
                                <InputNumber style={{ width: '100%' }} />
                            </FormItem>
                        </Col>
                        <Col  md={8} sm={12} xs={24}>
                            <FormItem label="电话号码（中国）" {...formItemLayout}>
                                <InputNumber style={{ width: '100%' }} />
                            </FormItem>
                        </Col>
                        <Col md={8} sm={12} xs={24}>
                            <FormItem label="状态" {...formItemLayout}>
                                <Select placeholder="请选择" style={{ width: '100%' }}>
                                    <Option value='normal'>正常</Option>
                                    <Option value='disable'>冻结</Option>
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}
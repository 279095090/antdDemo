import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message, Badge, Divider } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import FooterToolbar from '../../components/FooterToolbar';

import styles from './NewUser.less';

const FormItem = Form.Item;

@connect(({ loading }) => ({
    submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
export default class NewUser extends PureComponent {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.dispatch({
                    type: 'form/submitRegularForm',
                    payload: values,
                });
            }
        });
    }

    render() {

        const { submitting } = this.props;

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };

        const submitFormLayout = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 24, offset: 0 },
            },
        };

        return (
            <PageHeaderLayout
                title="新建用户"
                content="用于用户收集信息后，帮助用户做数据初始化"
                wrapperClassName={styles.advancedForm}
            >
                <Card bordered={false}>
                    <Form onSubmit={this.handleSubmit}
                        hideRequiredMark
                        style={{ marginTop: 8 }}
                    >
                        <FormItem label="用户名" {...formItemLayout}>
                            {getFieldDecorator('userName', {
                                rules: [{
                                    required: true, message: '请输入用户名',
                                }],
                            })(
                                <Input placeholder="用户名" />
                            )}
                        </FormItem>
                        <FormItem label="手机号"  {...formItemLayout}>
                            {getFieldDecorator('phone', {
                                rules: [{
                                    required: true, message: '请输入手机号',
                                }],
                            })(
                                <Input placeholder="" type="phone" />
                            )}
                        </FormItem>                    
                    </Form>
                </Card>
                <FooterToolbar >                    
                    <Button type="primary" htmlType="submit" loading={submitting}>
                        提交
                    </Button>
                    <Button style={{ marginLeft: 8 }}>取消</Button>
                </FooterToolbar>
            </PageHeaderLayout>
        );
    }
}
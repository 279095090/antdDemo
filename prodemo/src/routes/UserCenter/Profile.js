import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Card, Icon, Form, Table, Button, Input, message, Popconfirm, Divider, Upload } from 'antd';
import Login from '../../components/Login';
import styles from './Profile.less';
import { URL } from 'url';
import { window } from '_rxjs@5.5.6@rxjs/operator/window';

const FormItem = Form.Item;

@connect(({ user, loading }) => ({
    userInfo: user.currentUserInfo,
    loading: loading.effects['user/fetchCurrentInfo']
}))
@Form.create()
export default class UserProfile extends PureComponent {
    constructor(props) {
        super(props);
    }

    state={
        avatar:null,
    }
    componentWillReceiveProps(nextProps){
        this.setState({avatar:nextProps.userInfo.avatar});
    }
    componentDidMount() {
        const { dispatch } = this.props;        
        dispatch({
            type: 'user/fetchCurrentInfo',
        });
    }

    handChangeAvatar = (e) => {        
        const reader = new FileReader();
        const img = reader.readAsDataURL(e.file);
    }

    handlePreview =(file)=>{                
        const reader = new FileReader();    
        reader.onloadend=()=>{
            this.setState({avatar:reader.result,});
        }
        reader.readAsDataURL(file);        
    }

    render() {        
        const { userInfo, form } = this.props;        
        const { getFieldDecorator, validateFields } = form;
        const leftside = {
            xs: { span: 8 }
        };
        const rightside = {
            xs: { span: 10 }
        };
        return (
            <div className={styles.main}>

                <Row gutter={16}>
                    <Col {...leftside}>
                        <div className={styles.mycard} style={{ marginRight: '-24px', paddingTop: '48px' }}>
                            <Row type="flex" justify="end" >
                                <img className={styles.avatar} src={this.state.avatar} />
                            </Row>
                            <Row type="flex" justify="end">
                                <Upload name="logo" action="/upload.do" listType="picture" 
                                showUploadList={false   } 
                                //onPreview ={this.handlePreview}    
                                beforeUpload={this.handlePreview}     
                                //onChange={this.handChangeAvatar}                       
                                >
                                    <a style={{ float: 'clear' }}>Change Image</a>
                                </Upload>
                            </Row>
                        </div>
                    </Col>
                    <Col {...rightside}>
                        <div className={styles.mycard}>
                            <Form>
                                <FormItem label="用户名">
                                    {getFieldDecorator('name',
                                        {
                                            initialValue: userInfo.name,
                                            rules: [{ required: true, message: '请输入用户名' }],
                                        })(
                                            <Input />
                                        )}
                                </FormItem>
                                <FormItem label="Email">
                                    {getFieldDecorator('email',
                                        {
                                            initialValue: userInfo.email,
                                            rules: [
                                                { required: true, message: '邮箱' },
                                                { type: 'email', message: '请输入正确的邮箱地址' }
                                            ],
                                        })(
                                            <Input />
                                        )}
                                </FormItem>
                                <FormItem label="公司名称">
                                    {getFieldDecorator('companyName',
                                        {
                                            initialValue: userInfo.companyName,
                                        })(
                                            <Input />
                                        )}
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" size="large">保存</Button>
                                </FormItem>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
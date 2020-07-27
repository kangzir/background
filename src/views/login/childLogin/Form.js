import React,{Component} from 'react'
  import { Form, Input, Button } from 'antd';
  


  // 布局
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 20,
    },
  };
  

  class Demo extends Component {
    constructor(props){
      super(props);
      this.state = {
        username:''
      }
    }
    formRef = React.createRef();
  
    onReset = () => {
      this.formRef.current.resetFields();
    };
  
    render() {
      return (
        <Form {...layout} 
        ref={this.formRef} 
        name="control-ref" 
        onFinish={(data)=>{this.props.GetData(data)}}>
        {/* 子向父传递数据 */}
        {/* 用户名 */}
          <Form.Item
            name="username"
            label="用户名"
            rules={[
              {required: true,
                whitespace:true,
                message: '请输入用户名!',},
              {min:4 ,message:'最少4位'},
              {max:10 ,message:'最多10位'}
            ]}
          >
            <Input />
          </Form.Item>
          {/* 密码 */}
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                whitespace:true,
                message: '请输入密码!',
              },
              {min:4 ,message:'最少4位'},
              {max:10 ,message:'最多10位'}
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>

            <Button htmlType="button" onClick={this.onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  export default Demo;
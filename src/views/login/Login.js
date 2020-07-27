// eslint-disable-next-line

import React,{Component} from 'react'
import { message, Button, Space } from 'antd';
import Demo from './childLogin/Form'
import AddUseu from './childLogin/addUser'
import './login.css'

import {getaddFrom,getaddUser} from '../../network/login';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name:'',
      isShow:false,
      fangfa:undefined
     };
     console.log(222);
  }
  render() {
    return (
      <div className="login-box">
        <header>
          <h1>React后台管理项目</h1>
        </header>

        <div className={"form-box"}>
          <div className={(this.state.isShow ? 'show' : '')}>
            <h2>用户登录</h2>
            <Demo ref={this.rescd}  GetData={this.DataForm}/>
          </div>
          <div className={this.state.isShow?'':'show'}>
            <h2>用户注册</h2>
            <AddUseu ref={this.rescd} GetaddUser={this.GetaddUser}></AddUseu>
          </div>
          <button type="primary" className="tabbtn" onClick={this.isformshow}>{this.state.isShow?'去登录':'去注册'}</button>
        </div>
      </div>
    );
  }
  // 获取子组件的重置方法
  rescd=(i)=>{
    if(i){
      this.setState({
        fangfa:i.formRef.current.resetFields
      })
    }
  }

  // 提交登录数据
  DataForm=(data)=>{
    
      getaddFrom(data.username,data.password).then( res =>{
        console.log(res);
        if(res.data.status === 0){
          message.success('登录成功')
          this.props.history.push('/admin')
          localStorage.setItem('id',res.data.data._id)
        }else{
          message.error(res.data.msg)
        }
      })
  }
  // 提交注册数据
  GetaddUser=(data)=>{
      getaddUser(data.username,data.password).then( res =>{
        console.log(res);
        if(res.data.status === 0){
          message.success('注册成功请登录')
          // 注册成功跳转到登录页面
          this.setState({
            isShow:false
          })
          // 注册成功重置文本内容
          this.state.fangfa()
        }else{
          message.error(res.data.msg)
        }
      })
    console.log(data);
  }
  // 切换登录注册显示隐藏
  isformshow=() =>{
    this.setState({
      isShow: !this.state.isShow
    })
  }
}

export default Login;

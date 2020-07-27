import $axios from './axios';
// 登录
export function getaddFrom(username,password){
  return $axios({
    url:'/login',
    method:'post',
    data:{
      username,
      password
    }
  })
}
// 添加用户
export function getaddUser (username,password){
 return $axios({
   url:'/manage/user/add',
   method:'post',
   data:{
    username,
    password
   }
 })
}
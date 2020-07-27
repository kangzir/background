import React,{Component} from 'react'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
  }
  render() {
    return (
      <div>
        {/* 面包屑导航 */}
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb> */}

        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <h1>首页主体</h1>
        </div>
      </div>
    );
  }
}

export default Home;
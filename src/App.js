import React from 'react'
import { 
  Col,
  Row,
  Layout, 
  Space, 
  Input, 
  Typography,
} from 'antd'

import { CheckCircleOutlined } from '@ant-design/icons'

const  { Content } = Layout
const contentStyle = {
  color: '#fff',
  height: '100vh'
}


const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%'
    }}
    size= {[0, 48]}
  >
    <Layout>
      <Content style={contentStyle}>
        <Row>
          <Col span={12} offset={6}>
            <Typography.Title
              level={3}
              style={{
                marginBottom: 10,
              }}
            >
              Todo App
            </Typography.Title>
            <Input size="large" addonBefore={ <CheckCircleOutlined style={{color: '#DF2060'}} />} placeholder="create todo" />
          </Col>
        </Row>
      </Content>
    </Layout>
  </Space>
)


export default App;

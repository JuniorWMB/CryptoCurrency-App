import React from 'react'
import{} from 'react-chartjs-2'
import {Col,Row,Typography} from 'antd'

const {Title}=Typography

const LineChart = ({coinHistory,currentPrice,coinName}) => {
    return (
        <>
         <Row className="chart-header">
             <Title level={2} className="chart-title">
                 {coinName} Price Chart
              <Col>
              <Title level={5} className="price-change">
                  {coinHistory?.data?.change}%
              </Title>
              <Title level={5} className="current-price">
                  Current {coinName} Price: $ {currentPrice}
              </Title>
              </Col>   
             </Title>
             </Row>   
        </>
    )
}

export default LineChart

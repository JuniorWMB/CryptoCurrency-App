import React from 'react'
import {Button, Menu, Typography,Avatar} from 'antd'
import {Link} from 'react-route-dom'
import {HomeOutlined,MoneyCollectOutlined, BulbOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar/>
               <Typography.Title level={2} className="logo">
                <Link to='/'>CryptoLook</Link>
               </Typography.Title>
               <Button>
                   
               </Button>
            </div>
        </div>
    )
}

export default Navbar

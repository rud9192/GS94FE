import React from 'react';
import { theme } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const Footer = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div style={{ padding: 24, margin: 0, minHeight: 10, background: colorBgContainer, textAlign: 'center' }}>
            <a href="https://github.com/rud9192/GS94FE">
                <GithubOutlined style={{ fontSize: '32px' }} />
            </a>
        </div>
    );
};

export default Footer;

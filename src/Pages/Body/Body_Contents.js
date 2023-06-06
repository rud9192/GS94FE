import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

const Body_Contents = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Content style={{ padding: 24, margin: 0, minHeight: 280, height: '100vh', background: colorBgContainer }}>
            Content
        </Content>
    );
};

export default Body_Contents;

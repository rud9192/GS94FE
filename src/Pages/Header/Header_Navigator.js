import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const Header_Navigator = () => {
    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
        </Header>
    );
};

export default Header_Navigator;

import React, {
    useCallback,
} from 'react';

import {
    Layout,
    Menu,
    Breadcrumb
} from 'antd';
import { Link } from 'react-router-dom';

import { logout } from '@/utils/auth';

import styles from './index.module.less';

const {
    Header,
    Content,
    Footer
} = Layout;

const BasicLayout = ({
    children
}) => {
    const onLogout = useCallback(() => {
        logout();
    }, []);

    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.logo} />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="home">
                        <Link to="/home">
                            Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="dashboard">
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                    </Menu.Item>
                </Menu>
                <div className={styles.spacer} />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="logout" onClick={onLogout}>Log out</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, minHeight: 'calc(100vh - 64px - 53px - 69px)' }}>
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>©React App</Footer>
        </Layout>
    );
};

export default BasicLayout;

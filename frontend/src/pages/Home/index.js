import React from 'react';
import {
    withRouter
} from 'react-router-dom';

import Layout from '@/layouts/BasicLayout';

class Home extends React.Component {
    render() {
        return (
            <Layout>
                <h1>
                    Welcome to React App
                </h1>
            </Layout>
        );
    }
}

export default withRouter((props) => <Home {...props} />);

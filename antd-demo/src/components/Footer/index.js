import React from 'react';
import { Row,Col } from 'antd'; 
import '../Footer/index.less';
class Footer extends React.Component {
    

    render() {
        return (
            <Row className="copyright">
                <Col span={24}>
                    版权所有
                </Col>
            </Row>
        )
    }
}

export default Footer;
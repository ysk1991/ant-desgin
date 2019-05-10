import React from 'react';
import { Row,Col } from 'antd';
import './index.less';
import Utils from '../../utils/utils.js';
import fetchJsonp from 'fetch-jsonp';
import { connect } from 'react-redux';
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: 'lily'
        }
    }

    componentWillMount(){
        setInterval(() => {
            let sysTime = Utils.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000);
        this.getWeatherAPIData();
    }

    getWeatherAPIData(){
        let url = 'https://api.map.baidu.com/geocoder/v2/?ak=4TiDvkx2SnDg7rT2506gDXeeEzoCiZr6&callback=renderReverse&location=30.242469787597656,120.2591552734375&output=json&pois=0&s=1';
        fetchJsonp(url)
            .then( (response) => {
                return response.json();
            }).then( (json) => {
                console.log('success:', json); // 在此处进行接收数据之后的操作
                this.setState({
                    address:json.result.formatted_address
                })
            }).catch(function (ex) {
                console.log('err:', ex) // 此处是数据请求失败后的处理
            }) 
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24} >
                        <span>欢迎 { this.state.userName } </span>
                        <span className="quit">退出</span>
                    </Col>
                </Row>
                <Row className="breadCrumb">   
                    <Col span={4} className="breadcrumb-title">
                        { this.props.menuName }
                    </Col>
                    <Col span={20} className="weather">
                        <span className="data">{ this.state.sysTime }</span>
                        <span className="weather-detail">{ this.state.address }</span>
                    </Col>
                </Row>
            </div>
        )  
    }
}
const mapStateToProps = state => {
    return {
        menuName: state.menuName 
    }
}
export default connect(mapStateToProps)(Header);
import React from 'react';
import { Row, Menu } from 'antd';
import './index.less';
import menuConfig from '../../config/menuConfig';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchMenu } from '../../redux/action';

const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {
     state={
         currentKey:''
     }

    componentWillMount(){
        const menuTree = this.renderMenu(menuConfig);
        let currentKey = window.location.hash.replace(/#|\?.*$/g,'');
        this.setState({
            currentKey,
            menuTree
        })
    }

    renderMenu = (data)=> {
        return data.map( (item)=>{
            // 如果有子菜单
            if(item.children){
                return (
                    // 第一层惨菜单
                    <SubMenu title={item.title} key={item.key}>   
                        {/*  递归遍历子菜单  */}
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                        <NavLink to={item.key}>{item.title}</NavLink>
                   </Menu.Item>
        } )
    }

    handleClick = ({ item })=>{
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title));
        this.setState({
            currentKey:item.key
        })

 
    }
 
    render() {
        return (
            <Row className="">
                <div className="menuFonts">
                    memu
                </div>
                <Menu 
                    onClick={this.handleClick}  
                    mode="vertical" 
                    theme="dark"
                    selectedKeys={[this.state.currentKey]}
                >
                    {this.state.menuTree }
                </Menu>
            </Row>
        )
    }
}

export default connect()(NavLeft);
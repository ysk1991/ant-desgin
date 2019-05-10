import React from 'react';
import { HashRouter, Route, Switch, Redirect  } from 'react-router-dom';
import App from './App.js';
import Login from './pages/Login';
import Admin from './admin';
import Button from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Home from './pages/Home/Home';
import Loadings from './pages/ui/loadings';
import Gallery from './pages/ui/gallery';
import Notice from './pages/ui/notice';
import Carousel from './pages/ui/carousel';
import Messages from './pages/ui/messages';
import Tabs from './pages/ui/tabs';
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable';
import HighTable from './pages/table/highTable';
import City from './pages/city/index';
import Order from './pages/order/index';
import Detail from './pages/order/detail';
import User from './pages/user/index';
import BikeMap from './pages/map/bikeMap';
import Hooks from './pages/Hooks/Hook1';
import HookRedux from './pages/Hooks/HookRedux';
import Rich from './pages/rich';
import Bar from './pages/echarts/bar/index'
import Pie from './pages/echarts/pie/index'
import Line from './pages/echarts/line/index'
import Permission from './pages/permission'
import Renderprop1 from './pages/renderProp/demo1';

import Common from './common';
import Nomatch from './pages/nomatch/404';
class IRouter extends React.Component {

    // 登陆页面   详情页面   主页面  都是平级的
    // 所以根组件不能加载主页面
    // 需要一个更大的组件包裹
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/Login" component={Login}></Route>
                        <Route path="/common" render={() =>
                            <Common>
                                    <Route path="/common/order/detail/:orderid"  component={Detail}></Route>
                            </Common>
                        }></Route>
                        <Route path="/" render={ ()=> 
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Home}></Route>
                                    <Route path="/ui/buttons" component={Button}></Route>
                                    <Route path="/ui/modals" component={Modals}></Route>
                                    <Route path="/ui/loadings" component={Loadings}></Route>
                                    <Route path="/ui/messages" component={Messages}></Route> 
                                    <Route path="/ui/tabs" component={Tabs}></Route>
                                    <Route path="/ui/notification" component={Notice}></Route>
                                    <Route path="/ui/carousel" component={Carousel}></Route>
                                    <Route path="/ui/gallery" component={Gallery}></Route>
                                    <Route path="/form/login" component={FormLogin}></Route>
                                    <Route path="/form/reg" component={FormRegister}></Route>
                                    <Route path="/table/basic" component={BasicTable}></Route>
                                    <Route path="/table/high" component={HighTable}></Route> 
                                    <Route path="/charts/bar" component={Bar} />
                                    <Route path="/charts/pie" component={Pie} />
                                    <Route path="/charts/line" component={Line} />
                                    <Route path="/city" component={City}></Route>
                                    <Route path="/reactHooks/hooks" component={Hooks}></Route>
                                    <Route path="/reactHooks/redux" component={HookRedux}></Route>
                                    <Route path="/order" component={Order}></Route>
                                    <Route path="/user" component={User}></Route>
                                    <Route path='/bikeMap' component={BikeMap} />
                                    <Route path='/rich' component={Rich} />
                                    <Route path="/permission" component={Permission} />
                                    <Route path="/renderprop/renderprop1" component={Renderprop1} />

                                    
                                    
                                    <Redirect to="/home" />
                                    <Route component={Nomatch}></Route>
                                </Switch>
                            </Admin>
                        }></Route>
                        
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}

export default IRouter;
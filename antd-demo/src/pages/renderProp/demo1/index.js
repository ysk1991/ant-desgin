import React from 'react'


// 公共组件
class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        const { render } = this.props;
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                {/*
                    讲自己的state暴露出去 
                */}
                {render(this.state)}


                {/* 也可以这么写 上面就不解构了 */}
                {/* { this.props.render(this.state) } */}
            </div>
        );
    }
}


// 具体业务组件
class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <div style={{ height:'100vh'}}>
                <img src="/gallery/1.png" style={{ width:'50px', position: 'absolute', left: mouse.x, top: mouse.y }} />
            </div>
        );
    }
}




// 业务组件
class MouseTracker extends React.Component {
    render() {
        return (
            //  接受mouse的state控制cat的移动
            //  mouse相当与复用的HOC组件
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />
            </div>
        );
    }
}
export default MouseTracker;
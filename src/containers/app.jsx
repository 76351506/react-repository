import React from "react";
import Header from "comp/header";

//无状态组件（函数定义组件）
// react 组件
// react 元素
// 有没有内部状态需要在组件中定义
const ProductList = (props) => {
    const { lists } = props;
    return <ol>
        {
           lists.length&&lists.map(item=>{
                return <li key={item.id}>
                    {
                        item.name
                    }
                </li>
           })
        }
    </ol>
}

class App extends React.Component {
    //构造函数,如果没有添加constructor，根据es6创建类的规则，会自动添加一个空的constructor
    constructor(props) {
        super(props)
        this.state = {
            lists: [{
                id: 1,
                name: "大西瓜"
            }, {
                id: 2,
                name: "大香蕉"
            }]
        }
    }
    render() {
        const { lists } = this.state;
        return <div className="wraper">
               <Header />
                <section className="content">
                    <ProductList lists={lists}></ProductList>
                </section>
            </div>
    }
}
export default App;
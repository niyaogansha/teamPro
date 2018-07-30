import React from 'react'
import img_li_1 from '../images/img_li_1.jpeg'
import img_li_2 from '../images/img_li_2.jpeg'
import img_li_3 from '../images/img_li_3.jpeg'
import img_li_4 from '../images/img_li_4.jpeg'
import img_li_5 from '../images/img_li_5.jpeg'
import img_li_6 from '../images/img_li_6.jpeg'
import img_li_7 from '../images/img_li_7.jpeg'
import img_li_8 from '../images/img_li_8.jpeg'
import img_li_9 from '../images/img_li_9.jpeg'
import img_li_10 from '../images/img_li_10.jpeg'

class App_li extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="app_div">
                <div>
                    <img src={img_li_1} alt=""/>
                    <p>美食</p>
                </div>
                <div>
                    <img src={img_li_2} alt=""/>
                    <p>晚餐</p>
                </div>
                <div>
                    <img src={img_li_3} alt=""/>
                    <p>商超便利</p>
                </div>
                <div>
                    <img src={img_li_4} alt=""/>
                    <p>果蔬生鲜</p>
                </div>
                <div>
                    <img src={img_li_5} alt=""/>
                    <p>新店特惠</p>
                </div>
                <div>
                    <img src={img_li_6} alt=""/>
                    <p>医药健康</p>
                </div>
                <div>
                    <img src={img_li_7} alt=""/>
                    <p>大牌5折</p>
                </div>
                <div>
                    <img src={img_li_8} alt=""/>
                    <p>浪漫鲜花</p>
                </div>
                <div>
                    <img src={img_li_9} alt=""/>
                    <p>麻辣烫</p>
                </div>
                <div>
                    <img src={img_li_10} alt=""/>
                    <p>地方菜系</p>
                </div>
            </div>
        )
    }
}
export default App_li;
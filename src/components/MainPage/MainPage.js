import React, { Component } from 'react'
import { ShopConsumer } from '../../Context'
import './mainpage.css';
import ProductIntro from './productIntro'
import GoogleMap from './GoogleMap'
import { Link }  from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class MainPage extends Component {
    render() {
        return (
            <ShopConsumer>
                {value=>{
                    const products = ["Embroidery","Knitting","Cloth","Wooden"]
                    const { toggleHandler, TextOpen, FormSubmit, formOnChange } = value
                    return(
                        <div className="home">

                            <div id="section-a">
                                <div className="wrapper">
                                    <ScrollAnimation animateIn='fadeInUp' initiallyVisible={true}>
                                        <img src="./img/jumbotron/shop.jpg" alt=""/>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn='fadeInUp' initiallyVisible={true}>
                                        <img src="./img/jumbotron/Q.png" alt=""/>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn='fadeInUp' initiallyVisible={true}>
                                        <img className="arched" src="./img/jumbotron/curved.png" alt=""/>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn='fadeInUp' className="bluredBackground">
                                        <h2>幸福小窩</h2> 
                                    </ScrollAnimation>
                                    <div className="time">
                                        <h1>營業時間</h1>
                                        <p>週二至週五<br/>10:00AM-3:00PM</p>
                                    </div>
                                    <div className="tel">
                                        <h1>聯絡我們</h1>
                                        <p>(02)2504-1461<br/>0935213721</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="section-b">
                                <div className="wrapper" style={{overflow: TextOpen?"visible":"hidden",
                                                                 height: TextOpen? "auto":"55vh",
                                                                 transition: "0.6s"}}>
                                                                     
                                    <h1>Our Story</h1>
                                    <p>
                                        小小巷弄裡的幸福小窩，有我們對生活的努力與堅持，<br />
                                        喜歡用手創造喜悅、喜歡用手實現創意，<br />
                                        小窩裡將會有先生的木手作、我的布手作、<br />
                                        過陣子還會加入手作達人的創作，<br />
                                        手作之外，我也從日本帶回一些材料包及素材，<br />
                                        還有一些生活雜貨及擺飾{TextOpen?",":"..."}<br />
                                        <button onClick={()=>toggleHandler("TextOpen")}
                                                style={{position:TextOpen?"absolute":"static",visibility: TextOpen?"hidden":"visible" }}
                                            ><i className="fas fa-dog"></i>More
                                        </button>
                                        <span style={{visibility: TextOpen?"visible":"hidden"}}>
                                            歡迎你來小窩，讓我有機會為你奉上一杯咖啡、一焙花茶，<br />
                                            我們一同說生活、話理想，一起玩手作！<br />
                                            雖說中年之後才來圓年輕時候的夢想，似乎有一點兒慢，<br />
                                            卻與我這「慢慢」個性不謀而合，<br />
                                            總是慢慢來的我<br />
                                            結婚比別人慢、生孩子比別人慢、連圓夢都比別人慢，<br />
                                            沒關係，慢工出細活，<br />
                                            慢中自有一份安靜自在，慢中也體會出生活中的「要」與「不要」，<br />
                                            這是年輕時候的我缺少的悠閒，<br />
                                            雖然眼花了、手不巧了，<br />
                                            心卻自有清明恬適，正適合作手作！<br />
                                            陸陸續續擺上我們的手作物，<br />
                                            另一個角落有精緻的生活雜貨。<br />
                                            很感恩身邊總有許多貴人的支持，<br />
                                            讓我總是有「繼續努力」的動力，<br />
                                            想起那句話，<br />
                                            當你努力想完成一個夢想時，<br />
                                            全世界都會湧來幫助你！<br />
                                        </span> 
                                        <button onClick={()=>toggleHandler("TextOpen")}><i className="fas fa-dog"></i>Close</button>
                                    </p>
                                </div>
                            </div>

                            <div id="section-c">
                                <div className="wrapper">
                                    <h1 className="productTitle">Our Products</h1>
                                    {products.map((product, index)=>{
                                        return(
                                            <ProductIntro key={index} index={index} product={product} />
                                    )})}
                                </div>
                            </div>
                            
                            <div id="section-d">
                                <div className="wrapper">
                                    <h1>Kitty & Doggie</h1>
                                </div>
                            </div>

                            <div id="section-e">
                                <div className="wrapper">
                                    <div className="leftContact">
                                        <h1>Contact Us</h1>
                                        <ul>
                                            <li><i className="far fa-clock"></i><span>週二至週五<br/>10:00AM-3:00PM</span></li>
                                            <li><i className="fas fa-phone"></i><span>(02)2504-1461<br/>0935213721</span></li>
                                            <li><i className="fas fa-envelope"></i><span>aa087159@gmail.com<br/>charity.li@msa.hinet.net</span></li>
                                            <li><i className="fas fa-map-marker-alt"></i><span>台北市中山區建國北路二段186巷12號</span></li>
                                        </ul>
                                    </div>
                                    <div className="rightContact">
                                        <form id="contactForm" onSubmit={FormSubmit} method="POST">
                                            <div className="form-group">
                                                <label>姓名</label>
                                                <input onChange={formOnChange} type="text" id="name" className="form-control" placeholder="輸入您的全名" required/>
                                            </div>
                                            <div className="form-group">
                                                <label>電子信箱</label>
                                                <input onChange={formOnChange} type="email" id="email" className="form-control" placeholder="name@example.com" />
                                            </div>
                                            <div className="form-group">
                                                <label>留言給我們</label>
                                                <textarea onChange={formOnChange} className="form-control" id="message" rows="3" required></textarea>
                                            </div>
                                            <button type="submit"  className="btn btn-default submitButton">傳送訊息</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div id="section-f">
                                <div className="wrapper">
                                    <div className="map">
                                        <GoogleMap />
                                    </div>
                                </div>
                            </div>

                            <div id="footer">
                                <div className="wrapper">
                                    <img className="arched" src="./img/jumbotron/curved.png" alt=""/>
                                    <img src="./img/jumbotron/Q.png" alt=""/>
                                    <h1>幸福小窩</h1>
                                    <div className="contact">
                                    </div>
                                    <Link activeClass="activer" className="upArrow" to="section-a" spy={true} smooth="easeInQuad" offset={0} duration={1000}>
                                        <i className="far fa-arrow-alt-circle-up fa-2x"></i>
                                        <p className="up">Go Up</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                )}}
            </ShopConsumer>
    )
  }
}

export default MainPage



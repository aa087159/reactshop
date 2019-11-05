import React, { Component } from 'react'
import styled from 'styled-components'
export class AboutUs extends Component {
    render() {
        return (
            <AboutUsWrapper id="toAboutUs">
                <div className="clothTexture">
                    <img src="./img/jumbotron/paint.png" alt=""/>
                    <img src="./img/jumbotron/paint2.png" alt=""/>
                    <img src="./img/jumbotron/paint3.png" alt=""/>
                    <img src="./img/jumbotron/paint4.png" alt=""/>
                </div>
                <div className="title">
                    <h1>About</h1>
                    <p>01</p>
                    
                    <p>
                    <div className="overlay"></div>
                    小小巷弄裡的幸福小窩，有我們對生活的努力與堅持，
                    喜歡用手創造喜悅、喜歡用手實現創意，
                    小窩裡將會有先生的木手作、我的布手作、
                    過陣子還會加入手作達人的創作，
                    手作之外，我也從日本帶回一些材料包及素材，
                    還有一些生活雜貨及擺飾，
                    歡迎你來小窩，讓我有機會為你奉上一杯咖啡、一焙花茶，
                    我們一同說生活、話理想，一起玩手作！
                    <br/><br/>
                    雖說中年之後才來圓年輕時候的夢想，似乎有一點兒慢，
                    卻與我這「慢慢」個性不謀而合，
                    總是慢慢來的我，
                    結婚比別人慢、生孩子比別人慢、連圓夢都比別人慢，
                    沒關係，慢工出細活，
                    慢中自有一份安靜自在，慢中也體會出生活中的「要」與「不要」，
                    這是年輕時候的我缺少的悠閒，
                    雖然眼花了、手不巧了，
                    心卻自有清明恬適，正適合作手作！
                    <br/><br/>

                    陸陸續續擺上我們的手作物，
                    另一個角落有精緻的生活雜貨。
                    <br/><br/>

                    很感恩身邊總有許多貴人的支持，
                    讓我總是有「繼續努力」的動力，
                    想起那句話，
                    當你努力想完成一個夢想時，
                    全世界都會湧來幫助你！
                    </p>
                </div>
                

                
            </AboutUsWrapper>
        )
    }
}

const AboutUsWrapper = styled.div`
    position: relative;
    height: 100vh;
    .clothTexture{
            & img{
                position: absolute;
                height: 100px;
            }
            & img:nth-child(1){
                top: 15%;
                left: -3%;
                width: 800px;
                z-index:8;
            }
            & img:nth-child(2){
                top: 35%;
                left: -6%;
                width: 750px;
            }
            & img:nth-child(3){
                top: 55%;
                left: -4%;
                width: 600px;
            }
            & img:nth-child(4){
                top: 75%;
                left: -3%;
                width: 450px;
            }
        }
    .title h1, .title p:nth-child(2){
        font-family: Rouge Script;
        position: absolute;
        color: #fff;
        top: 20%;
        left: 15%;
    }
    .title h1{
        top: 25%;
        font-size: 150px;
        z-index:10;
    }
    .title p:nth-child(2){
        font-size: 200px;
        top: -5%;
        z-index:11;
    }
    .title p:nth-child(3){
        position: absolute;
        writing-mode: vertical-rl;
        font-family: 'Noto Sans TC', sans-serif;
        top: 23%;
        right: 5%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        height:480px;
        width: 60%;
        padding: 20px;
        line-height: 2.5;
        z-index: 9;
    }
    .overlay{
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("./img/jumbotron/middle.jpg");
        background-position: right;  
        opacity: 0.3;
    }
`

export default AboutUs

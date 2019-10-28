import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export class AboutUs extends Component {
    render() {
        return (
            <AboutUsWrapper id="toAboutUs">
                <div className="over over1 container" >
                    <img src="./img/Embroidery/about.webp" alt=""/>
                    <p>
                    這是先生為我設計的logo，看得出來就是可愛的QQ吧!

                    小小巷弄裡的幸福小窩，有我們對生活的努力與堅持，
                    喜歡用手創造喜悅、喜歡用手實現創意，
                    小窩裡將會有先生的木手作、我的布手作、
                    過陣子還會加入手作達人的創作，
                    手作之外，我也從日本帶回一些材料包及素材，
                    還有一些生活雑貨及擺飾，

                    歡迎你來小窩，讓我有機會為你奉上一杯咖啡、一焙花茶，
                    我們一同說生活、話理想，一起玩手作！

                    雖說中年之後才來圓年輕時候的夢想，似乎有一點兒慢，
                    卻與我這「慢慢」個性不謀而合，
                    總是慢慢來的我，
                    結婚比別人慢、生孩子比別人慢、連圓夢都比別人慢，
                    沒關係，慢工出細活，
                    慢中自有一份安靜自在，慢中也體會出生活中的「要」與「不要」，
                    這是年輕時候的我缺少的悠閒，
                    雖然眼花了、手不巧了，
                    心卻自有清明恬適，正適合作手作！


                    陸陸續續擺上我們的手作物，
                    另一個角落有精緻的生活雑貨。


                    很感恩身邊總有許多貴人的支持，
                    讓我總是有「繼續努力」的動力，
                    想起那句話，
                    當你努力想完成一個夢想時，
                    全世界都會湧來幫助你！
                    </p>
                </div>

                <div className="fix fix1"></div>

                <div className="over over2 row">
                    <div className="card" >
                        <img src="./img/Embroidery/1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{backgroundColor:"#B3B8C1"}}>
                            <h5 className="card-title">Embroidery</h5>
                            <Link to="/EmbroideryList">More</Link>
                        </div>
                    </div>

                    <div className="card" >
                        <img src="./img/Embroidery/2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{backgroundColor:"#C0CFBF"}}>
                            <h5 className="card-title">Cloth</h5>
                            <Link to="/Cloth">More</Link>
                        </div>
                    </div>
                    
                    <div className="card" >
                        <img src="./img/Embroidery/3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{backgroundColor:"#F2CCBE"}}>
                            <h5 className="card-title">Knitting</h5>
                            <Link to="/Knitting">More</Link>
                        </div>
                    </div>

                    <div className="card" >
                        <img src="./img/Embroidery/3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{backgroundColor:"#FFEECC"}}>
                            <h5 className="card-title">Wooden</h5>
                            <Link to="/Wooden">More</Link>
                        </div>
                    </div>
                </div>

                <div className="fix fix2"></div>

                <div className="over"></div>

                <div className="fix fix3"></div>
            </AboutUsWrapper>
        )
    }
}

const AboutUsWrapper = styled.div`
    .fix{
        height: 400px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .fix1{
        background-image: url("./img/Embroidery/1.jpg");
    }
    .fix2{
        background-image: url("./img/Embroidery/3.jpg");
    }
    .fix3{
        background-image: url("./img/Embroidery/1.jpg");
    }
    .over{
        height: 500px;
        margin-top: 60px;
        margin-bottom: 60px;
        
        margin-right: 0;
    }
    .over1{
        background-color: #FBF8F8;
        & img{
            border: 5px solid #fff;
            width: 500px;
            margin-left: 100px;
            margin-top: 50px;

        }
    }
    .over2{
        margin-left: 15%;
    }
    .card{
        width: 16%;
        margin-left: 4%;
        height: 400px;
    }
    .card-img-top{
        height: 300px;
    }
    .card-body{
        height: 0px;
        background-color: #FBF8F8;
    }
`

export default AboutUs

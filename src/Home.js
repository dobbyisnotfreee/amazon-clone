import React from 'react';
import './Home.css'
import Product from "./Product";


function Home() {
    return (
        <div className="home">

            <div className="home_container">
                <img className="home_image"
                     src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg" alt=""/>

                <div className="home_row">
                    <Product id="2323"
                             title="제품1"
                             price={3000}
                             image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
                             rating={5}/>
                    <Product
                        id="2320" title="제품2"
                        price={200}
                        image="https://www.motorgraph.com/news/photo/201910/24006_75909_4825.jpg"
                        rating={3}/>


                </div>
                <div className="home_row">

                    <Product
                        id="2321" title="제품3"
                        price={5000}
                        image="https://www.autodaily.co.kr/news/photo/201704/335790_17345_2048.jpg"
                        rating={3}/>
                    <Product
                        id="2322" title="제품4"
                        price={2423115515}
                        image="https://post-phinf.pstatic.net/MjAxNzExMTVfOTcg/MDAxNTEwNzMxMjAxNzMw.55ihPnB6d-Y-MuT3cCIgqAiwNlLR5GOIUfUDHwsw68Eg.S-bPeRceHEq_rjEnOiS1RvjphGgnCjuWp6FQFdcL10cg.JPEG/McLaren-720S-2018-1024-03.jpg?type=w1200"
                        rating={3}/>
                </div>
                <div className="home_row">
                    <Product
                        id="2324" title="제품5"
                        price={2425}
                        image="http://img.danawa.com/cp_images/service/103/4109708/97ee2ca2.jpg"
                        rating={3}/>
                </div>

            </div>
        </div>
    );
}

export default Home;
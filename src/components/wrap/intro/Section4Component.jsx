import React from 'react';
import $ from 'jquery';
import './scss/section4.scss';

export default function Section4Component(){

    React.useEffect(()=>{

        const $slideWrap = $('#section4 .slide-wrap');
        let cnt=0;
        let setId=0;

        function mainSlide(){
            $slideWrap.stop().animate({left: `${-100*cnt}%`}, 0, function(){
                if(cnt>2) cnt=0;
                if(cnt<0) cnt=2;
                $slideWrap.stop().animate({left: `${-100*cnt}%`},0);
            });
        }

        function prevCount(){
            cnt--;
            mainSlide();
        }

        function nextCount(){
            cnt++;
            mainSlide();
        }

        function autoTimer(){
            clearInterval(setId);
            setId=setInterval(nextCount, 3000);
        }
        autoTimer();

    },[]);


    return (
        <section id="section4">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className="slide slide3"><a href="!#"><img src="./img/bn_main1_3.jpg" alt="" /></a></li>
                                        <li className="slide slide1"><a href="!#"><img src="./img/bn_main1_1.jpg" alt="" /></a></li>
                                        <li className="slide slide2"><a href="!#"><img src="./img/bn_main1_2.jpg" alt="" /></a></li>
                                        <li className="slide slide3"><a href="!#"><img src="./img/bn_main1_3.jpg" alt="" /></a></li>
                                        <li className="slide slide1"><a href="!#"><img src="./img/bn_main1_1.jpg" alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="page-btn-box">
                                <a className='page-btn blind on' href="!#">page1</a>
                                <a className='page-btn blind' href="!#">page2</a>
                                <a className='page-btn blind' href="!#">page3</a>
                            </div>
                        </div>
                        <div className="right">
                            <ul>
                                <li><a className='right-top' href="!#"><img src="./img/bn_main1_4.jpg" alt="" /></a></li>
                                <li><a className='right-bottom' href="!#"><img src="./img/bn_main1_5.jpg" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
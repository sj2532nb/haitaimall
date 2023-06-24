import React from 'react';
import './scss/section3.scss';
import $ from 'jquery';

export default function Section3Component(){

    React.useEffect(()=>{

        const $slideWrap = $('#section3 .slide-wrap');
        const $prevBtn = $('#section3 .prev-btn');
        const $nextBtn = $('#section3 .next-btn');
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

        $prevBtn.on({
            click(e){
                clearInterval(setId);
                e.preventDefault();
                prevCount();
            }
        })

        $nextBtn.on({
            click(e){
                clearInterval(setId);
                e.preventDefault();
                nextCount();
            }
        })

    },[]);


    return (
        <section id="section3">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide3">
                                        <a href="!#">
                                            <span>해태몰 베스트 모음전</span>
                                            누구랑 먹어도 언제먹어도 최고의 제품!
                                            <img src="./img/bn_mainAdd1_3.png" alt="" />
                                        </a>
                                    </li>
                                    <li className="slide slide1">
                                        <a href="!#">
                                            <span>해태 얼리어먹터</span>
                                            누구보다 빠르게 신상과자를 만나보세요!
                                            <img src="./img/bn_mainAdd1_1.png" alt="" />
                                        </a>
                                    </li>
                                    <li className="slide slide2">
                                        <a href="!#">
                                            <span>우리아이 최애픽</span>
                                            어린이 입맛도 취향존중 해주세요!
                                            <img src="./img/bn_mainAdd1_2.png" alt="" />
                                        </a>
                                    </li>
                                    <li className="slide slide3">
                                        <a href="!#">
                                            <span>해태몰 베스트 모음전</span>
                                            누구랑 먹어도 언제먹어도 최고의 제품!
                                            <img src="./img/bn_mainAdd1_3.png" alt="" />
                                        </a>
                                    </li>
                                    <li className="slide slide1">
                                        <a href="!#">
                                            <span>해태 얼리어먹터</span>
                                            누구보다 빠르게 신상과자를 만나보세요!
                                            <img src="./img/bn_mainAdd1_1.png" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a className='prev-btn' href="!#"><img src="./img/icon-arrow.svg" alt="" /></a>
                        <a className='next-btn' href="!#"><img src="./img/icon-arrow.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};
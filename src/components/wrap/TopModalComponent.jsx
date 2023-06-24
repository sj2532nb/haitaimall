import React from 'react';
import $ from 'jquery';
import './scss/top_modal.scss';

export default function TopModalComponent(){

    const [isFix, setIsFix] = React.useState(false);
    
    React.useEffect(()=>{

        window.addEventListener('scroll', function(){
            if(this.window.scrollY>150){
                setIsFix(true);
            }
            else{
                setIsFix(false);
            }
        });

    },[]);


    return (
        <div id="topModal" className={`${isFix?'on':''}`}>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide1"><a href="!#"><img src="./img/top_banner_agree.jpg" alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className='top-modal-close-btn' href="!#"><img src="./img/icon-close.svg" alt="" /></a>
        </div>
    );
};
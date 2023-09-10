import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './scss/sub2.scss';

export default function Sub2Component(){

<<<<<<< HEAD
    const [allCate, setAllCate] = React.useState(false);
    const [sortBy, setSortBy] = React.useState(false);
    const [state, setState] = React.useState({
        pickUp: [],
        n:0
    });

    React.useEffect(()=>{

        axios({
            url: './data/sub/sub2.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    pickUp: res.data.pick_up,
                    n: res.data.pick_up.length
                });
            }
        })
        .catch((err)=>{
            console.log(`err` + err);
        });

    },[]);


    const onMouseEnterAllCate=(e)=>{
        setAllCate(true);
    }

    const onMouseLeaveAllCate=(e)=>{
        setAllCate(false);
    }

    const onMouseEnterSortBy=(e)=>{
        setSortBy(true);
    }

    const onMouseLeaveSortBy=(e)=>{
        setSortBy(false);
    }

    const onClickAllCate=(e)=>{
        e.preventDefault();
=======
    const [isSubCate, setIsSubCate] = React.useState(false);
    const [isSortBy, setIsSortBy] = React.useState(false);

    const onClickSubCategory=(e)=>{
        e.preventDefault();
        if(isSubCate===true){
            setIsSubCate(false);
        }
        else{
            setIsSubCate(true);
        }
>>>>>>> 54712888cf7a00992f05cdb907dbd35a47a545e4
    }

    const onClickSortBy=(e)=>{
        e.preventDefault();
<<<<<<< HEAD
=======
        if(isSortBy===true){
            setIsSortBy(false);
        }
        else{
            setIsSortBy(true);
        }
>>>>>>> 54712888cf7a00992f05cdb907dbd35a47a545e4
    }


    return (
        <div id='sub2'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>골라담기</h2>
                    </div>
                    <div className="main-category">
                        <ul>
                            <li><a href="!#">비스켓</a></li>
                            <i>/</i>
                            <li><a href="!#">스낵</a></li>
                            <i>/</i>
                            <li><a href="!#">초코</a></li>
                            <i>/</i>
                            <li><a href="!#">껌</a></li>
                            <i>/</i>
                            <li><a href="!#">캔디&젤리</a></li>
                            <i>/</i>
                            <li><a href="!#">묶음상품</a></li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="content-title">
                            <div className="category-box">
                                <p><Link to="/sub2" target='_top'>골라담기</Link></p>
                                <i>/</i>
<<<<<<< HEAD
                                <div  onMouseLeave={onMouseLeaveAllCate} className="sub-category">
                                    <a className={allCate && 'on'} onMouseEnter={onMouseEnterAllCate} onClick={onClickAllCate} href="!#"><span>모두보기</span></a>
                                    {
                                        allCate && (
                                            <div>
                                                <ul>
                                                    <li><Link to="/sub2" target='_top'>모두보기</Link></li>
                                                    <li><a href="!#">비스켓</a></li>
                                                    <li><a href="!#">스낵</a></li>
                                                    <li><a href="!#">초코</a></li>
                                                    <li><a href="!#">껌</a></li>
                                                    <li><a href="!#">캔디&젤리</a></li>
                                                    <li><a href="!#">묶음상품</a></li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <p><strong>{state.n}</strong>개</p>
                            <div onMouseLeave={onMouseLeaveSortBy} className="sort-by">
                                <a className={sortBy && 'on'} onMouseEnter={onMouseEnterSortBy} onClick={onClickSortBy} href="!#"><span>정렬 기준</span></a>
                                {
                                    sortBy && (
                                        <div>
                                            <ul>
                                                <li><a href="!#">신상품</a></li>
                                                <li><a href="!#">상품명</a></li>
                                                <li><a href="!#">낮은가격</a></li>
                                                <li><a href="!#">높은가격</a></li>
                                                <li><a href="!#">인기상품</a></li>
                                                <li><a href="!#">사용후기</a></li>
                                                <li><a href="!#">좋아요</a></li>
                                            </ul>
                                        </div>
                                    )
=======
                                <div className="sub-category">
                                    <a onClick={onClickSubCategory} href="!#"><span>모두보기</span></a>
                                    {
                                        isSubCate &&
                                        <div>
                                            <ul>
                                                <li><a href="!#">모두보기</a></li>
                                                <li><a href="!#">비스켓</a></li>
                                                <li><a href="!#">스낵</a></li>
                                                <li><a href="!#">초코</a></li>
                                                <li><a href="!#">껌</a></li>
                                                <li><a href="!#">캔디&젤리</a></li>
                                                <li><a href="!#">묶음상품</a></li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </div>
                            <p><strong>98</strong>개</p>
                            <div className="sort-by">
                                <a onClick={onClickSortBy} href="!#"><span>정렬 기준</span></a>
                                {
                                    isSortBy &&
                                    <div>
                                        <ul>
                                            <li><a href="!#">신상품</a></li>
                                            <li><a href="!#">상품명</a></li>
                                            <li><a href="!#">낮은가격</a></li>
                                            <li><a href="!#">높은가격</a></li>
                                            <li><a href="!#">인기상품</a></li>
                                            <li><a href="!#">사용후기</a></li>
                                            <li><a href="!#">좋아요</a></li>
                                        </ul>
                                    </div>
>>>>>>> 54712888cf7a00992f05cdb907dbd35a47a545e4
                                }
                            </div>
                        </div>
                        <div className="content-list">
                            <ul>
                                {
                                    state.pickUp.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#">
                                                    <figure><img src={item.src} alt="" /></figure>
                                                    <span className='new-img'>{item.new===""?``:<img src="./img/image_custom_316252116938702.png" alt="" />}</span>
                                                    <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                                </a>
                                                <div>
                                                    <h3><a href="!#">{item.title}</a></h3>
                                                    <span className='rate-price'>{item.discount_rate}<em>% </em></span><span className='sale-price'>{item.cost_price}<em>원</em></span><span className='price'>{item.product_price}<em>원</em></span>
                                                    {item.discount_price===""?``:<strong>쿠폰 적용시 <em>{item.discount_price}원</em></strong>}
                                                    {item.sold_out===""?
                                                        <div className="box">
                                                            <b>{item.comment}</b>
                                                            <em>{item.tag1}</em><em>{item.tag2}</em>
                                                        </div>
                                                        :
                                                        <span className='soldout-txt'>{item.sold_out}</span>}
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="pagenation">
                        <a href="!#"><img className='prev-btn' src="./img/bg_select_arrow.png" alt="" /></a>
                        <a href="!#">1</a>
                        <a href="!#"><img className='next-btn' src="./img/bg_select_arrow.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};
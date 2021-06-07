import React from 'react';
import Header from './Header';
import Products from './Products';
import Footer from './Footer';
import HomeImage from './HomeImage'

export default function Home() {
    React.useEffect(()=>{
        window.addEventListener('scroll',function(){
            var header=document.getElementsByClassName("header1");
            header[0].classList.toggle('sticky',window.scrollY>0);
            var header1=document.getElementsByClassName("header2");
            header1[0].classList.toggle('stickyup',window.scrollY>0);
            var header2=document.getElementsByClassName("search-input");
            header2[0].classList.toggle('sticky-search',window.scrollY>0);
            var sign_up_btn=document.getElementsByClassName("sign-in-btn");
            sign_up_btn[0].classList.toggle('sticky',window.scrollY>0);
        });
    })
    return (
        <div>
            <Header/>
            <HomeImage/>
            <Products/>
            <Footer/>
        </div>
    )
}

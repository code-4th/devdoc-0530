import React, {useEffect, useState} from "react";
import logo from "../../assets/main-logo.png";
import kakaoLogin from "../../assets/kakao_login_large.png";
import axios from "axios";
import "./index.css";

export default function LandingPage() {
    const [hello, setHello] = useState('');
    useEffect(() => {
        axios.get('/api/test')
            .then((res) => {
                setHello(res.data);
            })
    }, []);
    return (
        <div className="container">
            <div className="left-panel">
            </div>
            <div className="right-panel">
                <img src={logo} style={{width: 300, height: 300}} alt="logo"/>
                {/*<p style={{fontSize: 15}}>백엔드 데이터 : {hello}</p>*/}
                <p style={{marginTop:'20px',fontSize: '17px', fontWeight: 'bold'}}>이력서를 작성하시겠어요?</p>
                <span>{hello}</span>
                <img src={kakaoLogin} style={{width: 90, marginTop:'25px'}} alt="login"/>
            </div>
        </div>
    );
}
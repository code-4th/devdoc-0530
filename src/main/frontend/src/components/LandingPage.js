import React, {useEffect, useState} from 'react';
import logo from "./main-logo.png";
import kakaoLogin from "./kakao_login_large.png";
import axios from "axios";

function LandingPage() {

    /*const [hello, setHello] = useState('');
    useEffect(() => {
        axios.get('/api/test')
            .then((res) => {
                setHello(res.data);
            })
    }, []);*/

    return (
        <div style={{width:'80%', height:'85%', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width:'40%', height:'100%', backgroundColor:'rgba(0, 30, 89, 1)'}}>
            </div>
            <div style={{width: '60%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 1)', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                <img src={logo} style={{width: 300, height: 300}} alt="logo"/>
                {/*<p style={{fontSize: 15}}>백엔드 데이터 : {hello}</p>*/}
                <p style={{marginTop:'20px',fontSize: '17px', fontWeight: 'bold'}}>이력서를 작성하시겠어요?</p>
                <img src={kakaoLogin} style={{width: 90, marginTop:'25px'}} alt="login"/>
            </div>
        </div>
    );
}

export default LandingPage;
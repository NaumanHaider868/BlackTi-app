import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] =useState();
    const [password, setPassword] =useState();

    const handleChangeEmail =  (e) => {
        setEmail(e.target.value);

    }
    const handleChangePassword =  (e) => {
        setPassword(e.target.value);

    }

    const handlleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        let payload = {
            email: email,
            password: password
        }
        console.log(payload);
        axios.post("https://staging.blacktieskis.com/api/auth/login",  payload)
        .then(result => {
            navigate('DashBoard');
            const token = result.data.data.access_token;
            console.log(token);
          })
    }
  return (
    <div>
    <div className="login-one">
      <div className="main-1">
          <header className="header">
              <p className="p">11:43</p>
              <i className="fa fa-folder"></i>
              <i className="fa fa-buysellads"></i>
          </header>

          <section className="sec-one">
              {/* <img src="./asset/img/bt-img.png" class="img-1"/> */}
              <p className="p-1">WELCOME TO</p>
              <h4 className="head">BTMOBILE</h4>


              <form className="container-aws" >
                  <div className="fill">
                      <img src="./asset/img/email_icon.png" alt=""/>
                      <input type="email" placeholder="Email" name="email" onChange={handleChangeEmail} />
                  </div>
                  <div className="password">
                      <img src="./asset/img/password_icon.png" alt=""/>
                      <input type="password" placeholder="password" name="password" onChange={handleChangePassword}/>
                  </div>
                  <button type="submit" className="btn btn-pink" onClick={handlleSubmit}>Sign In</button>
              </form>

              <h3 className="eno"><span>Environment:</span>Staging<br/>Version 4.66</h3>
          </section>

      </div>
  </div>
</div>
  )
}

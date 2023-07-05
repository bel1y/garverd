import React, { useState } from "react";
import "./login.css";


export default function Login() {
  const [ state, setState ] = useState(0)
  return (
    <div>
      
      <div><div className="tepalogin">
            <div className="ont" onClick={() => {
                  setState(0);
                }}>
              <h2
                
              >
                Войти
              </h2>
            </div>
            <div className="chapt" onClick={() => {
                  setState(1);
                }}>
              <h2
                
              >
                создать  
              </h2>
            </div>
          </div>
        {state === 0 ? (<div>
        
          <div className="login">
            <div class="form">
              <div class="title">Добро пожаловать</div>
              <div class="subtitle">Давайте войдём ваш аккаунт !</div>
              <div class="input-container ic2">
                <input id="email" class="input" type="text" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email " class="placeholder">
                  Email
                </label>
              </div>
              <div class="input-container ic2">
                <input
                  id="Password"
                  class="input"
                  type="text"
                  placeholder=" "
                />
                <div class="cut" id="passw"></div>
                <label type="" for="password " class="placeholder">
                Пароль
                </label>
              </div>

              <div class="input-container ic2">
                <input
                  id="Password"
                  class="input"
                  type="text"
                  placeholder=" "
                />
                <div class="cut" id="return"></div>
                <label type="" for="password " class="placeholder">
                Повторите пароль
                </label>
              </div>
              <button type="text" class="submit">
                Войти
              </button>
            </div>
          </div>
        </div>) : (<div>
          
            <div className="login">
            <div class="form">
              <div class="title">Добро пожаловать</div>
              <div class="subtitle">Давайте создадим ваш аккаунт !</div>
              <div class="input-container ic1">
                <input id="Name" class="input" type="text" placeholder=" " />
                <div class="cut" id="cut"></div>
                <label for="firstname" class="placeholder">
                  Name
                </label>
              </div>
              <div class="input-container ic2">
                <input id="email" class="input" type="text" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email " class="placeholder">
                  Email
                </label>
              </div>
              <div class="input-container ic2">
                <input
                  id="Password"
                  class="input"
                  type="text"
                  placeholder=" "
                />
                <div class="cut"></div>
                <label type="" for="password " class="placeholder">
                  Password
                </label>
              </div>

              <button type="password" class="submit">
                Создать
              </button>
            </div>
          </div>
         
        </div>) }
        
        
      </div>
    </div>
  )
}
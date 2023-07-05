import React from 'react';
import './glaspage.css';
import  {BsCamera, BsActivity, BsThreeDots} from 'react-icons/bs'
import {AiFillBell} from 'react-icons/ai'
import iconrac from "../img/icons-rac.svg";
import iconbrain from "../img/react-brain.svg";
import iconmedal from "../img/icpn-medal.svg";

export default function Glaspage() {
  return (
    <div>
        <div>
        <div className="kottauser">
            <div className="imageuser">
            <div className="imguser">
               <input type="file" />
               <img src={imging} alt="" />
               <div className="divpasus">
                    <h1><BsCamera/></h1>
               </div>
            </div>
            <div className="ismuser">
                <div className="ismh1user">
                    <h1>Иван Иванович</h1>
                <button className="butuser">Обычный пользователь</button>
                </div>
                <div className="iconsuser">
                    <h1>Мои персонажи:</h1>
                    <div className="icons1202">
                        <div className="kruguser">
                            <div className="krug2">
                                <img src={iconrac} alt="" />
                            </div>
                        </div>
                        <div className="kruguser">
                            <div className="krug21"><img src={iconbrain} alt="" /></div>
                        </div>
                        <div className="kruguser">
                            <div className="krug22"><img src={iconmedal} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="summauser">
                <div className="kotaodeluser">
                <div className="publ">
                    <h4>Текущий баланс</h4>
                    <h1>1 399 000 <span>₽</span></h1>
                </div>
                <div className="activity">
                    <div className="accdaf"><BsActivity/></div>
                    <button>Пополнить баланса</button>
                </div></div>
                <div className="otdeluser">
                    <div className="kolokoluser"><AiFillBell/></div>
                    <div className="dotuser"><BsThreeDots/></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

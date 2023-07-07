import React from 'react';
import './glaspage.css';
import imging from '../img/Ellipse.svg';
import  {BsCamera, BsActivity, BsThreeDots} from 'react-icons/bs'
import {AiFillBell} from 'react-icons/ai'
import {LuEdit, LuCast,LuLifeBuoy} from 'react-icons/lu'
import { RxExit } from "react-icons/rx";
import imgpodpis3 from "../img/Ellipse 2.7.svg"
import imgpodpis2 from "../img/Ellipse 2.6.svg"
import imgpodpis1 from "../img/Ellipse 3.2.svg"
import iconrac from "../img/icons-rac.svg";
import iconbrain from "../img/react-brain.svg";
import iconmedal from "../img/icpn-medal.svg";

export default function Glaspage() {
    function onmouseenter() {
        document.querySelector(".onmouseenter_user").style="display:block"
        document.querySelector(".onmouseenter_user2").style="display:none"

    }
    function onmouseenter2() {
        document.querySelector(".onmouseenter_user2").style="display:block"
        document.querySelector(".onmouseenter_user").style="display:none"

    }
    function onmouseleave() {
        document.querySelector(".onmouseenter_user").style="display:none"
        document.querySelector(".onmouseenter_user2").style="display:none"
    }
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
                    <h1>Иван Иванов</h1>
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
                <div  className="otdeluser">
                    <div className="kolokoluser" onMouseEnter={()=>onmouseenter2()}><AiFillBell/></div>
                    <div className="dotuser" onMouseEnter={()=>onmouseenter()}><BsThreeDots/></div>
                    <div   className="onmouseenter_user" onMouseLeave={()=>onmouseleave()}>
                        <div className="profil112_user">
                            <LuEdit/> <h1>Редактировать профиль</h1>
                        </div>
                        <div className="profil112_user">
                            <LuCast/> <h1>Уведомления</h1>
                        </div>
                        <div className="profil112_user">
                            <LuLifeBuoy/> <h1>Помощь</h1>
                        </div>
                        <div className="line_user_w100"></div>
                        <div className="profil112_user">
                            <RxExit/> <h1>Выход</h1>
                        </div>
                    </div>
                    <div   className="onmouseenter_user2" onMouseLeave={()=>onmouseleave()}>
                        <div className="bugun_user">
                            <h3>Сегодня</h3>
                        </div>
                        <div className="profil112_user2">
                            <div className="img_user_uvedom"><img src={imgpodpis3} alt="" /></div>
                       <div className="bilmiman_logik_komadi">
                        <h1>Александр Петров</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur ar. . . </p>
                       </div>
                       </div>
                        <div className="profil112_user2">
                        <div className="img_user_uvedom"><img src={imgpodpis2} alt="" /></div>
                       <div className="bilmiman_logik_komadi">
                        <h1>Василий Антонов</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur ar. . . </p>
                       </div>
                        </div>
                        <div className="chislo_user_gg">
                            <h3>06.08.2019</h3>
                        </div>

                        <div className="profil112_user2">
                        <div className="img_user_uvedom"><img src={imgpodpis1} alt="" /></div>
                       <div className="bilmiman_logik_komadi">
                        <h1>Сафия Иванова</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur ar. . . </p>
                       </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

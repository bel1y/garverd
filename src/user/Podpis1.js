import React from 'react'
import './podpis1.css'
import imgpodpis from "../img/Ellipse 2.4.svg"
import imgpodpis2 from "../img/Ellipse 2.6.svg"
import imgpodpis3 from "../img/Ellipse 2.7.svg"
import imgpodpis4 from "../img/Ellipse 2.8.svg"
import imgpodpis5 from "../img/Ellipse 2.9.svg"

export default function Podpis1() {
  return (
    <div className='Podpis_user'>
        <div className="block_user_podpis">
            <div className="flex_user_podpis">
                <div className="krug_img_user_podpis">
                    <img src={imgpodpis} alt="" />
                </div>
                <div className="deshar">
                  <div className="user_hhh">
                    <h1>Dianne Henry</h1>
                  <p>Java, Python developer</p></div>
                  
                  <div className="user_button">
                  <button className='podpis__but'>Отменить подписку</button>
                  <button className='podpis_but'>Подписаться</button>
                </div>
                
                </div>
                
            </div>
            <div className="flex_user_podpis">
                <div className="krug_img_user_podpis">
                    <img src={imgpodpis2} alt="" />
                </div>
                <div className="deshar">
                  <div className="user_hhh">
                    <h1>Василий Антонов</h1>
                  <p>Head designer</p></div>
                  
                  <div className="user_button">
                  <button className="podpis__but">Отменить подписку</button>
                  <button className='podpis_but'>Подписаться</button>
                </div>
                </div>
                
            </div>
            <div className="flex_user_podpis">
                <div className="krug_img_user_podpis">
                    <img src={imgpodpis3} alt="" />
                </div>
                <div className="deshar">
                  <div className="user_hhh">
                    <h1>Александр Петров</h1>
                  <p>C# mentor, Project manager</p></div>
                  
                  <div className="user_button">
                  <button className="podpis__but">Отменить подписку</button>
                  <button className='podpis_but'>Подписаться</button>
                </div>
                </div>
                
            </div>
            <div className="flex_user_podpis">
                <div className="krug_img_user_podpis">
                    <img src={imgpodpis4} alt="" />
                </div>
                <div className="deshar">
                  <div className="user_hhh">
                    <h1>Angel Mccoy</h1>
                  <p>Biznez analitik</p></div>
                  
                  <div className="user_button">
                  <button className="podpis__but">Отменить подписку</button>
                  <button className='podpis_but'>Подписаться</button>
                </div>
                </div>
                
            </div>
            <div className="flex_user_podpis">
                <div className="krug_img_user_podpis">
                    <img src={imgpodpis5} alt="" />
                </div>
                <div className="deshar">
                  <div className="user_hhh">
                    <h1>Ralph Edwards</h1>
                  <p>Bosh buxgalter</p></div>
                  
                  <div className="user_button">
                  <button className="podpis__but">Отменить подписку</button>
                  <button className='podpis_but'>Подписаться</button>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

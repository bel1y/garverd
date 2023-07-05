import React from 'react'
import ffdf from '../img/bootstrap-logo.svg'
import ffdf1 from '../img/git-logo.svg'
import ffdf2 from '../img/html-logo.svg'
import ffdf3 from '../img/oracle-logo.svg'
import ffdf4 from '../img/sass-logo.svg'
import ffdf5 from '../img/spring-logo.svg'
import './dell1.css'

export default function Dell1() {
  return (
    <div>
        <div className="blockuser">
            <div className="flexuser">
                <div className="ichidauser">
                    <img src={ffdf2} alt="" />
                    <h1></h1>
                    <p></p>
                </div>
                <div className="ichidauser">
                    <img src={ffdf1} alt="" />
                    <h1></h1>
                    <p></p>
                </div>
                <div className="ichidauser">
                    <img src={ffdf} alt="" />
                    <h1></h1>
                    <p></p>
                </div>
                <div className="ichidauser">
                    <img src={ffdf3} alt="" />
                    <h1></h1>
                    <p></p>
                </div>
            </div>
            <div className="flexuser1">
                <div className="ichidauser">
                    <img src={ffdf4} alt="" />
                    <h1></h1>
                    <p></p>
                </div>
                <div className="ichidauser">
                    <img src={ffdf5} alt="" />
                    <h1></h1>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

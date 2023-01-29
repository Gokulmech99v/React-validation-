import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

function Exc() {
    let myerror = {
        border: "2px red solid"
    }
    let ok = {
        border: "2px green solid"

    }
    const [fname, setFname] = useState('')
    const [style, setstyle] = useState({ border: '2px solid yellow' })

    const [frerror, frseterror] = useState("")
    // const [error, seterror] = useState("")

    const [email, setemail] = useState('')
    const [style1, setstyle1] = useState({ border: '2px solid yellow' })
    const [ererror, erseterror] = useState("")

    const [style2, setstyle2] = useState({ border: '2px solid yellow' })
    const [pass1, setpass1] = useState('')
    const [erperror1, erpseterror1] = useState("")

    const [style3, setstyle3] = useState({ border: '2px solid yellow' })
    const [pass2, setpass2] = useState('')
    const [erperror2, erpseterror2] = useState("")

    const [style4, setstyle4] = useState({ border: '2px solid yellow' })
    const [num, setnum] = useState('')
    const [nmerror, nmseterror] = useState("")



    function fchange(e) {
        setFname(e.target.value)
    }
    function echange(e) {
        setemail(e.target.value)
    }
    function p1change(e) {
        setpass1(e.target.value)
    }

    function p2change(e) {
        setpass2(e.target.value)
    }
    function numchange(e) {
        setnum(e.target.value)
    }

    function final(f) {

        f.preventDefault()
        // let namerule = /^[a-z]+$/i;
        let emailrule = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+\@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]*$/;
        let prule = /^[A-Za-z]\w{7,14}$/;
        let c1 = false, c2 = false, c3 = false, c4 = false, c5 = false;
        
        //name
        
        if (fname == "") {
            setstyle(myerror)
            frseterror("pls enter name")
            c1 = false

        }
        else {
            frseterror("")
            setstyle(ok)
            c1 = true

        }

        
        //email
        
        if (email == "") {
            setstyle1(myerror)
            erseterror('Please enter a valid email')
            c2 = false
        }
        else if (email.match(emailrule)) {
            erseterror('')
            setstyle1(ok)
            c2 = true
        }

        //pass

        if (pass1 == "" && pass2 == "") {
            setstyle2(myerror);
            setstyle3(myerror);
            erpseterror1("Enter your password");
            erpseterror2("Enter your password");
            c3 = false;
            c4 = false
        }

        else if (pass1.match(prule) && pass2.match(prule)) {
            setstyle2(myerror)
            setstyle3(myerror)
            erpseterror1('pass must 7 nums')
            erpseterror2('pass must 7 nums')

            c3 = false;
            c4 = false
        }
        else if (pass1.length != pass2.length) {
            setstyle2(myerror)
            setstyle3(myerror)
            erpseterror1('pass must match')
            erpseterror2('pass must match')
            c3 = false;
            c4 = false
        }
        else {
            setstyle2(ok)
            setstyle3(ok)
            erpseterror1('')
            erpseterror2('')
            c3 = true;
            c4 = true;
        }
        
    //phone

        if (num == "") {
            nmseterror('enter your mobile num')
            setstyle4(myerror)
            c5 = false

        }
        else if (num.length != 10) {
            nmseterror('mobile num must 10 characters')
            setstyle4(myerror)
            c5 = false
        }
        else {
            nmseterror('')
            setstyle4(ok)
            c5 = true
        }

        //all
        
        if ((c1 == true) && (c2 == true) && (c3 == true) && (c4 == true) && (c5 == true)) {
            alert("your response has been submitted");

        }
    }
    return (
        <Container fluid>
            <div className='asd '>
                <form onSubmit={final}>
                    <h2>registration form</h2>
                    <label>NAME</label>
                    <input placeholder='eg:gokul' class="place" type="text" value={fname} style={style} onChange={fchange}></input><br></br>

                    <span>{frerror}</span>
                    <label>Email</label>
                    <input placeholder='eg:asfddf@gmail.com' class="place" type="mail" value={email} style={style1} onChange={echange}></input><br></br>
                    <span>{ererror}</span>

                    <label>password</label>
                    <input placeholder='eg:Love$dh99' class="place" type="password" value={pass1} style={style2} onChange={p1change}></input><br></br>
                    <span>{erperror1}</span>

                    <label>Confirmpassword</label>
                    <input placeholder='eg:Love$dh99' class="place" type="password" value={pass2} style={style3} onChange={p2change}></input><br></br>
                    <span>{erperror2}</span>

                    <label>Mobilenumber</label>
                    <input placeholder='eg:9087654321' class="place" type="number" value={num} style={style4} onChange={numchange}></input><br></br>
                    <span>{nmerror}</span>

                    <button >submit</button>

                </form>
            </div>
        </Container>
    )
}

export default Exc;

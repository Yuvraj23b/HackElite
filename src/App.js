import "./App.css";
import React, { useState, useEffect } from 'react';
import { setupAnimation } from './style';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import Logo from './Logo';
// //console.log("jay shree ram");
// const express = require('express');
// const bodyparser = require('body-parser')
// const path = require('path');
// let port= 8000;
// const logindb = require('./model/model')
// require('./db/db')

// const app = express();

// app.use(bodyparser.urlencoded(
//     {
//         extended:true
//      })
// )

// let mainfolder = path.join(__dirname,"../registration form");


// app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send('home page');
//     console.log(__dirname)
//     console.log(mainfolder)
// })

// app.get('/form1',(req,res)=>{
//     res.sendFile(mainfolder+"/form1.html")
// })

// app.post("/form1",(req,res)=>{
//     // console.log(req.body);
//      let req_model = new triumphtrendzuser1(req.body);
//      // console.log(req_model);
//      req_model.save();
//      //res.send("Your order has been successfully placed. Your product will be delivered to the specified address within 7 to 8 working days. It is cash on delivery.")
//      res.sendFile(mainfolder+"/endform.html")
//  })

// //EXPERIMENT END FORM
const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    useEffect(() => {
        setupAnimation();
    }, []);

    if (!browserSupportsSpeechRecognition) {
        return null
    }


    return (

        <>
            <div>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="css/style.css" />
                <title>Sign in &amp; Sign up</title>
                <div className="wrapper">
                    <div className="form-container sign-up">
                        <form action="#">
                            <h2>sign up</h2>
                            <div className="form-group">
                                <input type="text" required />
                                <label htmlFor>username</label>
                                <i className="fas fa-user" />
                            </div>
                            <div className="form-group">
                                <input type="email" required />
                                <label htmlFor>email</label>
                                <i className="fas fa-at" />
                            </div>
                          
                            <button className="btn" onClick={startListening}>Record</button> <br /> <br />
                            <button className="btn" onClick={SpeechRecognition.stopListening}>Recorded</button> <br /> <br />
                            <button className="btn" onClick={() => {
                                setTextToCopy(transcript);
                                setCopied();
                            }}>
                                {isCopied ? 'Successful!' : 'Submit'}
                            </button>
                            <div className="link">
                                <p>You already have an account?<a href="#" className="signin-link"> sign in</a></p>
                            </div>
                        </form>
                    </div>

                    <div className="form-container sign-in">
                        <form action="#">
                            <h2>login</h2>
                            <div className="form-group">
                                <input type="text" required />
                                <i className="fas fa-user" />
                                <label htmlFor>username</label>
                            </div>
                           
                            <div className="forgot-pass">
                                <a href="#">forgot password?</a>
                            </div>
                            <button onClick={startListening} className="btn">Record</button> <br /><br />
                            <button onClick={SpeechRecognition.stopListening} className="btn">Recorded</button><br /> <br />
                            <button className="btn" onClick={() => {
                                setTextToCopy(transcript);
                                setCopied();
                            }}>
                                {isCopied ? 'Successful' : 'Login'}
                            </button>
                            <div className="link">
                                <p>Don't have an account?<a href="#" className="signup-link"> sign up</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            );

        </>
    );
};

export default App;
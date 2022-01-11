import './App.css';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <Hero />
      <About />
    </div>
  );
}
export default App;

// .c {
//   height: 100vh;
//   position: relative;
// }

// .c-bg {
//   width: 20px;
//   height: 100%;
//   background-color: #59b256;
//   position: absolute;
// }

// .c-wrapper {
//   padding: 50px;
//   display: flex;
// }

// .c-left {
//   flex: 1;
// }

// .c-right {
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }

// .c-title {
//   font-size: 60px;
//   width: 80%;
// }

// .c-info-item {
//   display: flex;
//   align-items: center;
//   margin: 50px 0px;
//   font-weight: 300;
//   width: 70%;
// }

// .c-icon {
//   width: 30px;
//   height: 30px;
//   margin-right: 20px;
// }

// .c-desc {
//   font-weight: 200;
// }

// form {
//   margin-top: 20px;
// }

// input {
//   width: 50%;
//   height: 50px;
//   border: none;
//   border-bottom: 1px solid black;
//   margin: 10px 0px;
//   font-size: 14px;
//   padding-left: 10px;
// }

// textarea {
//   width: 100%;
//   margin: 10px 0px;
//   font-size: 14px;
//   padding-left: 10px;
// }

// button {
//   border: none;
//   padding: 15px;
//   background-color: #59b256;
//   color: white;
//   font-weight: 500;
//   cursor: pointer;
// }

// @media screen and (max-width: 480px) {
//   .c-wrapper {
//     flex-direction: column;
//     padding: 0px 50px;
//   }

//   .c-title {
//     font-size: 30px;
//   }

//   .c-info-item {
//     margin: 20px 0px;
//     width: 100%;
//   }

//   .c-desc {
//     display: none;
//   }

//   form {
//     margin-top: 0px;
//     display: flex;
//     flex-wrap: wrap;
//   }

//   input {
//     width: 35%;
//     height: 40px;
//     margin: 10px;
//     margin-left: 0;
//   }

//   button {
//     margin-top: 10px;
//   }
// }

// import "./contact.css";
// import Phone from "../../img/phone.png";
// import Email from "../../img/email.png";
// import Address from "../../img/address.png";
// import { useContext, useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

// const Contact = () => {
//   const formRef = useRef();
//   const [done, setDone] = useState(false)
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_rrvnzco",
//         "template_3v5nih4",
//         formRef.current,
//         "user_DrriDPTGKO2Zj4RDXCA6W"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true)
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="c">
//       <div className="c-bg"></div>
//       <div className="c-wrapper">
//         <div className="c-left">
//           <h1 className="c-title">Let's discuss your project</h1>
//           <div className="c-info">
//             <div className="c-info-item">
//               <img src={Phone} alt="" className="c-icon" />
//               +1 1234 556 75
//             </div>
//             <div className="c-info-item">
//               <img className="c-icon" src={Email} alt="" />
//               contact@lama.dev
//             </div>
//             <div className="c-info-item">
//               <img className="c-icon" src={Address} alt="" />
//               245 King Street, Touterie Victoria 8520 Australia
//             </div>
//           </div>
//         </div>
//         <div className="c-right">
//           <p className="c-desc">
//             <b>What’s your story?</b> Get in touch. Always available for
//             freelancing if the right project comes along. me.
//           </p>
//           <form ref={formRef} onSubmit={handleSubmit}>
//             <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
//             <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
//             <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
//             <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
//             <button>Submit</button>
//             {done && "Thank you..."}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import "./toggle.css";
// import Sun from "../../img/sun.png";
// import Moon from "../../img/moon.png";
// import { useContext } from "react";
// import { ThemeContext } from "../../context";

// const Toggle = () => {
//   const theme = useContext(ThemeContext);

//   const handleClick = () => {
//     theme.dispatch({ type: "TOGGLE" });
//   };
//   return (
//     <div className="t">
//       <img src={Sun} alt="" className="t-icon" />
//       <img src={Moon} alt="" className="t-icon" />
//       <div
//         className="t-button"
//         onClick={handleClick}
//         style={{ left: theme.state.darkMode ? 0 : 25 }}
//       ></div>
//     </div>
//   );
// };

// export default Toggle;

// .t{
//     width: 50px;
//     height: 25px;
//     border-radius: 20px;
//     border: 1pz solid #999;
//     background-color: white;
//     position: fixed;
//     top: 10px;
//     right: 10px;
//     z-index: 999;
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
// }

// .t-icon{
//     width: 15px;
//     height: 15px;
// }

// .t-button{
//     width: 25px;
//     height: 25px;
//     border-radius: 50%;
//     background-color: #999;
//     position: absolute;
//     cursor: pointer;
// }

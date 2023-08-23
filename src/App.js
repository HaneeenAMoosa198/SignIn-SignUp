import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

/*************From FireBase ******************/
const firebaseConfig = {
  apiKey: "AIzaSyCwhRcQrnMPFXQQGtiqCOrlQOcaFN1K9eU",
  authDomain: "test-auth-671b3.firebaseapp.com",
  projectId: "test-auth-671b3",
  storageBucket: "test-auth-671b3.appspot.com",
  messagingSenderId: "658098273372",
  appId: "1:658098273372:web:c6fb0933ec28354a593a99"
};


/*******Logic SignIn From All Project*******************/

/**************Read The Lines From FireBase**********Initialize Firebase***********/
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");


  /**********Logic SignIn***************/
  const SigninHandeler = (e) => {

    /*******No Doing Refech the All Page */
    e.preventDefult();


    //SigninWhithEmailAndPassward بستخدمها بس لازمها مكتبات

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
       alert("THE USER LOG IN ",user);
      })

      /**************Try And Catch OR Test**************/
      .catch((error) => {
        alert(error)
      })
  };

  /*********************************************************************/
  /*********************Logic SignUp ***********************************/
  const SignUpHandeler = (e) => {
    e.preventDefult()
    /*****Logic Create UserName And Password */
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      alert("THE USER SIGN UP",user);

      alert(`THE USER HAS BEEN REGISTERED,${user.email}`)
      /* عشان انادي فاريابل جوات سترنج بكتب حرف الذال */
    })
    .catch((error) => {
      alert(error)
    })
  };

  return (
    <center>
      <div className="App">
        <form onSubmit={SigninHandeler}>
          <label>Enter your user name</label>
          <br />
          <br />

          <input onChange={(e/*element*/) => { SetEmail(e.target.value) }}  value={email}  type="text" />
          <br />
          <br />
          <br />
          <br />

          <label>Enter your Password</label>
          <br />
          <br />

          <input onChange={(e/*element*/) => { SetPassword(e.target.value) }}  value={password}  type="password"/>
          <br/>
          <br/>

          <button>LogIn</button>
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <form onSubmit={SignUpHandeler}>
          <label>Enter your user name</label>
          <br />
          <br />

          <input onChange={(e/*element*/) => { SetEmail(e.target.value) }} value={email} type="text" />
          <br />
          <br />
          <br />
          <br />

          <label>Enter your Password</label>
          <br />
          <br />

          <input onChange={(e/*element*/) => { SetPassword(e.target.value) }} value={password}  type="password" />
          <br />
          <br />

          <button>SignUp</button>
        </form>
      </div>

    </center>
  );
}
export default App;

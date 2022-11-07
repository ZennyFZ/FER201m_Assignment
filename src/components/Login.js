import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getAuth, deleteUser } from "firebase/auth";

export default function Login() {
  const {googleSignIn, user} = UserAuth();
  const auth = getAuth();
  const cuser = auth.currentUser;
  const navigate = useNavigate()
  const handleGoogleSignIn = async()=>{
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    console.log(user)
    if(user!=null && user.email == "nhandinhdo291@gmail.com"){
      navigate('/dashboard')
    }else{
        if(user!=null && user.email != "nhandinhdo291@gmail.com"){
            document.getElementById('Warning').innerHTML = "You are not admin";
            deleteUser(cuser);
        }
    }
  },[user])

  return (
    <div>
      <h1 style={{color: 'white'}}>Login to AnimeZ</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
        <GoogleButton onClick={handleGoogleSignIn}/>
      </div>
      <div style={{color: 'red'}} id="Warning">

      </div>
    </div>
  )
}

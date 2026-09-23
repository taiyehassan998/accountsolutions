"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  return (
    <div style={{minHeight:'100vh',background:'#fff',display:'flex',justifyContent:'center',padding:'20px'}}>
      <div style={{width:'100%',maxWidth:'380px',marginTop:'60px',position:'relative'}}>
        {/* Logo */}
        <div style={{textAlign:'center',marginBottom:'18px'}}>
          <div style={{fontSize:'42px'}}>🌐</div>
        </div>
        <h1 style={{textAlign:'center',fontSize:'32px',fontWeight:'800',color:'#0f2a2e',margin:'0'}}>Welcome back</h1>
        <p style={{textAlign:'center',color:'#6b7c7e',margin:'8px 0 24px',fontSize:'15px'}}>Sign in to access your wallet & orders.</p>

        {/* Toggle */}
        <div style={{display:'flex',background:'#eef6f6',borderRadius:'999px',padding:'4px',marginBottom:'22px'}}>
          <Link href="/login" style={{flex:1,textAlign:'center',padding:'10px',borderRadius:'999px',background:'#fff',fontWeight:'700',color:'#0f2a2e',textDecoration:'none',boxShadow:'0 1px 4px rgba(0,0,0,0.08)'}}>Login</Link>
          <Link href="/signup" style={{flex:1,textAlign:'center',padding:'10px',borderRadius:'999px',color:'#5a6f72',textDecoration:'none',fontWeight:'500'}}>Sign up</Link>
        </div>

        <label style={{fontWeight:'600',fontSize:'14px'}}>Email</label>
        <input placeholder="you@example.com" style={{width:'100%',padding:'14px 16px',borderRadius:'999px',border:'1.5px solid #d6e8e6',outline:'none',margin:'6px 0 16px',fontSize:'15px',boxSizing:'border-box'}}/>

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <label style={{fontWeight:'600',fontSize:'14px'}}>Password</label>
          <Link href="#" style={{fontSize:'13px',color:'#0b8a7a',textDecoration:'none',fontWeight:'600'}}>Forgot password?</Link>
        </div>
        <div style={{position:'relative',marginTop:'6px'}}>
          <input type={show?'text':'password'} placeholder="••••••••" defaultValue="12345678" style={{width:'100%',padding:'14px 16px',borderRadius:'999px',border:'1.5px solid #d6e8e6',outline:'none',fontSize:'15px',boxSizing:'border-box'}}/>
        </div>

        <button style={{width:'100%',marginTop:'18px',padding:'15px',borderRadius:'999px',border:'none',background:'linear-gradient(90deg,#0f8a7a,#1a8ed0)',color:'#fff',fontWeight:'700',fontSize:'16px',cursor:'pointer'}}>Sign in</button>

        <p style={{textAlign:'center',fontSize:'12px',color:'#7a8f92',marginTop:'16px'}}>By continuing you agree to our Terms & Privacy Policy.</p>

        <div style={{position:'fixed',bottom:'20px',right:'20px',width:'52px',height:'52px',borderRadius:'50%',background:'#19c37d',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:'24px',boxShadow:'0 4px 12px rgba(0,0,0,0.2)'}}>🎧</div>
      </div>
    </div>
  );
}

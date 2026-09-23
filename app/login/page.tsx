'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#f9f9f9',padding:'20px'}}>
      <div style={{background:'white',padding:'40px',borderRadius:'16px',width:'100%',maxWidth:'400px',boxShadow:'0 4px 20px rgba(0,0,0,0.08)'}}>
        <h1 style={{fontSize:'28px',fontWeight:'800',marginBottom:'8px'}}>Welcome back</h1>
        <p style={{color:'#666',marginBottom:'32px'}}>Login to AccountSolutions</p>
        <input 
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{width:'100%',padding:'12px',border:'1px solid #ddd',borderRadius:'8px',marginBottom:'16px'}}
        />
        <input 
          type="password"
          placeholder="Password"
          style={{width:'100%',padding:'12px',border:'1px solid #ddd',borderRadius:'8px',marginBottom:'24px'}}
        />
        <button style={{width:'100%',padding:'14px',background:'black',color:'white',borderRadius:'8px',fontWeight:'700',border:'none'}}>
          Log In
        </button>
        <p style={{textAlign:'center',marginTop:'20px',fontSize:'14px'}}>
          <a href="/" style={{color:'#999'}}>← Back to Home</a>
        </p>
      </div>
    </div>
  )
}

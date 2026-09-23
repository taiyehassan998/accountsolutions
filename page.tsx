"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AuthPage(){
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("taiyehassan998@gmail.com");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAuth(){
    if(isSignup && password !== confirm){
      alert("Passwords don't match!"); return;
    }
    setLoading(true);
    try{
      if(isSignup){
        const { data, error } = await supabase.auth.signUp({
          email, password,
          options: { data: { full_name: name } }
        });
        if(error) throw error;
        alert("Account created! Check email or click Login now.");
        setIsSignup(false);
      }else{
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if(error) throw error;
        window.location.href = "/dashboard";
      }
    }catch(e:any){
      alert(e.message);
    }finally{ setLoading(false); }
  }

  return(
    <div style={{maxWidth:'400px',margin:'20px auto',padding:'20px',fontFamily:'sans-serif'}}>
      <p style={{textAlign:'center',color:'#666'}}>Start buying digital products in seconds.</p>
      <div style={{display:'flex',background:'#f1f5f9',borderRadius:'999px',padding:'4px',marginBottom:'20px'}}>
        <button onClick={()=>setIsSignup(false)} style={{flex:1,padding:'10px',borderRadius:'999px',border:'none',background:!isSignup?'#fff':'transparent',fontWeight:'600'}}>Login</button>
        <button onClick={()=>setIsSignup(true)} style={{flex:1,padding:'10px',borderRadius:'999px',border:'none',background:isSignup?'#fff':'transparent',fontWeight:'700'}}>Sign up</button>
      </div>
      {isSignup && (
        <>
          <label style={{fontWeight:'700'}}>Name</label>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Taiye hassan" style={{width:'100%',padding:'14px',borderRadius:'999px',border:'1px solid #ddd',margin:'6px 0 14px'}}/>
        </>
      )}
      <label style={{fontWeight:'700'}}>Email</label>
      <input value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%',padding:'14px',borderRadius:'999px',border:'1px solid #ddd',margin:'6px 0 14px'}}/>
      <label style={{fontWeight:'700'}}>Password</label>
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%',padding:'14px',borderRadius:'999px',border:'1px solid #ddd',margin:'6px 0 14px'}}/>
      {isSignup && (
        <>
          <label style={{fontWeight:'700'}}>Confirm password</label>
          <input type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} style={{width:'100%',padding:'14px',borderRadius:'999px',border:'1px solid #ddd',margin:'6px 0 14px'}}/>
          <div style={{display:'flex',gap:'8px',margin:'10px 0'}}>
            <input type="checkbox" defaultChecked/> <span style={{fontSize:'13px'}}>I agree to the <a href="#" style={{color:'#0b8a7a'}}>Terms & Privacy Policy</a></span>
          </div>
        </>
      )}
      <button onClick={handleAuth} disabled={loading} style={{width:'100%',padding:'16px',borderRadius:'999px',border:'none',background:'linear-gradient(90deg,#0b8a7a,#2196F3)',color:'#fff',fontWeight:'700',fontSize:'16px',marginTop:'10px'}}>
        {loading ? 'Please wait...' : (isSignup ? 'Create account' : 'Login')}
      </button>
    </div>
  )
}

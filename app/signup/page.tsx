"use client";
import Link from "next/link";
export default function SignupPage(){
  return(
    <div style={{minHeight:'100vh',background:'#fff',display:'flex',justifyContent:'center',padding:'20px'}}>
      <div style={{width:'100%',maxWidth:'380px',marginTop:'60px',position:'relative'}}>
        <div style={{textAlign:'center',marginBottom:'18px'}}><div style={{fontSize:'42px'}}>🌐</div></div>
        <h1 style={{textAlign:'center',fontSize:'30px',fontWeight:'800',color:'#0f2a2e',margin:'0'}}>Create your account</h1>
        <p style={{textAlign:'center',color:'#6b7c7e',margin:'8px 0 24px',fontSize:'15px'}}>Start buying digital products in seconds.</p>

        <div style={{display:'flex',background:'#eef6f6',borderRadius:'999px',padding:'4px',marginBottom:'22px'}}>
          <Link href="/login" style={{flex:1,textAlign:'center',padding:'10px',borderRadius:'999px',color:'#5a6f72',textDecoration:'none',fontWeight:'500'}}>Login</Link>
          <Link href="/signup" style={{flex:1,textAlign:'center',padding:'10px',borderRadius:'999px',background:'#fff',fontWeight:'700',color:'#0f2a2e',textDecoration:'none',boxShadow:'0 1px 4px rgba(0,0,0,0.08)'}}>Sign up</Link>
        </div>

        <label style={{fontWeight:'600',fontSize:'14px'}}>Name</label>
        <input placeholder="Chinedu Okafor" style={{width:'100%',padding:'14px 16px',borderRadius:'999px',border:'1.5px solid #d6e8e6',outline:'none',margin:'6px 0 16px',fontSize:'15px',boxSizing:'border-box'}}/>
        <label style={{fontWeight:'600',fontSize:'14px'}}>Email</label>
        <input placeholder="you@example.com" style={{width:'100%',padding:'14px 16px',borderRadius:'999px',border:'1.5px solid #d6e8e6',outline:'none',margin:'6px 0 16px',fontSize:'15px',boxSizing:'border-box'}}/>
        <label style={{fontWeight:'600',fontSize:'14px'}}>Password</label>
        <input type="password" placeholder="At least 6 characters" style={{width:'100%',padding:'14px 16px',borderRadius:'999px',border:'1.5px solid #d6e8e6',outline:'none',margin:'6px 0 16px',fontSize:'15px',boxSizing:'border-box'}}/>
        <label style={{fontWeight:'600',fontSize:'14px'}}>Confirm password</label>
        <input type="password" placeholder="Re-enter password" style={{width:'100%',padding:'14px 16px',borderRadius:'999px',border:'1.5px solid #d6e8e6',outline:'none',margin:'6px 0 14px',fontSize:'15px',boxSizing:'border-box'}}/>

        <label style={{display:'flex',gap:'8px',alignItems:'center',fontSize:'13px',color:'#4b6265',marginBottom:'16px'}}>
          <input type="checkbox" style={{width:'16px',height:'16px'}}/> I agree to the <a style={{color:'#0b8a7a',textDecoration:'underline'}}>Terms & Privacy Policy</a>
        </label>

        <button style={{width:'100%',padding:'15px',borderRadius:'999px',border:'none',background:'linear-gradient(90deg,#0f8a7a,#1a8ed0)',color:'#fff',fontWeight:'700',fontSize:'16px',cursor:'pointer'}}>Create account</button>
        <p style={{textAlign:'center',fontSize:'12px',color:'#7a8f92',marginTop:'16px'}}>By continuing you agree to our Terms & Privacy Policy.</p>
        <div style={{position:'fixed',bottom:'20px',right:'20px',width:'52px',height:'52px',borderRadius:'50%',background:'#19c37d',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:'24px',boxShadow:'0 4px 12px rgba(0,0,0,0.2)'}}>🎧</div>
      </div>
    </div>
  );
}

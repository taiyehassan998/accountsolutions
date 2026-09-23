export default function Page(){
return(
<div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#f8fffe',fontFamily:'system-ui'}}>
<div style={{background:'white',border:'1px solid #e6f0ef',padding:'28px',borderRadius:'20px',width:'90%',maxWidth:'360px'}}>
<h2 style={{fontSize:'24px',fontWeight:900}}>Create Account</h2>
<p style={{color:'#6b7f7d',fontSize:'13px',marginBottom:'16px'}}>Join Nigeria's trusted marketplace</p>
<input placeholder="Full Name" style={{width:'100%',padding:'12px',margin:'6px 0',border:'1px solid #dde9e7',borderRadius:'10px'}}/>
<input placeholder="Email" style={{width:'100%',padding:'12px',margin:'6px 0',border:'1px solid #dde9e7',borderRadius:'10px'}}/>
<input type="password" placeholder="Password" style={{width:'100%',padding:'12px',margin:'6px 0',border:'1px solid #dde9e7',borderRadius:'10px'}}/>
<button style={{width:'100%',padding:'12px',background:'linear-gradient(90deg, #0e8a7a, #0a7ad1)',color:'white',borderRadius:'999px',border:'none',marginTop:'12px',fontWeight:700}}>Create Account</button>
<p style={{textAlign:'center',marginTop:'14px',fontSize:'13px'}}>Have account? <a href="/login" style={{color:'#0a7ad1',fontWeight:700}}>Login</a></p>
<a href="/" style={{display:'block',textAlign:'center',marginTop:'8px',fontSize:'13px',color:'#6b7f7d'}}>← Home</a>
</div>
</div>
)}

export default function Page() {
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#f9f9f9',padding:'20px'}}>
      <div style={{background:'white',padding:'40px',borderRadius:'16px',maxWidth:'400px',width:'100%'}}>
        <h1 style={{fontSize:'28px',fontWeight:'800'}}>Welcome back</h1>
        <p style={{color:'#666',marginBottom:'20px'}}>Login to AccountSolutions</p>
        <input placeholder="Email" style={{width:'100%',padding:'12px',border:'1px solid #ddd',borderRadius:'8px',marginBottom:'12px',fontSize:'16px'}} />
        <input type="password" placeholder="Password" style={{width:'100%',padding:'12px',border:'1px solid #ddd',borderRadius:'8px',marginBottom:'20px',fontSize:'16px'}} />
        <button style={{width:'100%',padding:'14px',background:'black',color:'white',borderRadius:'8px',fontWeight:'700',border:'none'}}>Log In</button>
        <p style={{textAlign:'center',marginTop:'16px'}}><a href="/" style={{color:'#999',fontSize:'14px'}}>← Back to Home</a></p>
      </div>
    </div>
  )
}

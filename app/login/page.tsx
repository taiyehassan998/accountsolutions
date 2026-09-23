export default function Page() {
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{border:'1px solid #ddd',padding:'24px',borderRadius:'12px',width:'320px'}}>
        <h2>Login</h2>
        <input placeholder="Email" style={{width:'100%',padding:'10px',margin:'8px 0',border:'1px solid #ccc',borderRadius:'6px'}} />
        <input type="password" placeholder="Password" style={{width:'100%',padding:'10px',margin:'8px 0',border:'1px solid #ccc',borderRadius:'6px'}} />
        <button style={{width:'100%',padding:'10px',background:'black',color:'white',borderRadius:'6px',marginTop:'10px'}}>Login</button>
        <p style={{textAlign:'center',marginTop:'12px'}}><a href="/">Back to Home</a></p>
      </div>
    </div>
  )
}

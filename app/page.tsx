export default function Home() {
  return (
    <div style={{fontFamily:'system-ui',background:'white',color:'black',minHeight:'100vh'}}>
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 40px',borderBottom:'1px solid #eee'}}>
        <b style={{fontSize:'22px'}}>AccountSolutions</b>
        <div style={{display:'flex',gap:'16px',alignItems:'center'}}>
          <a href="/" style={{textDecoration:'none',color:'black',fontSize:'14px'}}>Home</a>
          <a href="/login" style={{padding:'8px 18px',background:'black',color:'white',borderRadius:'20px',textDecoration:'none',fontWeight:'700',fontSize:'14px'}}>Login</a>
        </div>
      </nav>
      <div style={{maxWidth:'900px',margin:'0 auto',padding:'80px 20px',textAlign:'center'}}>
        <h1 style={{fontSize:'48px',fontWeight:'900',lineHeight:'1.1',marginBottom:'20px'}}>Accounting Solutions for Modern Business</h1>
        <p style={{color:'#666',fontSize:'18px',marginBottom:'30px'}}>Professional bookkeeping, tax filing and financial reports. Contact us: acctsolutionhub@gmail.com</p>
        <div style={{display:'flex',gap:'12px',justifyContent:'center'}}>
          <a href="mailto:acctsolutionhub@gmail.com" style={{padding:'14px 28px',background:'black',color:'white',borderRadius:'8px',textDecoration:'none',fontWeight:'700'}}>Email Us</a>
          <a href="/login" style={{padding:'14px 28px',border:'1px solid #ddd',borderRadius:'8px',textDecoration:'none',color:'black',fontWeight:'700'}}>Login</a>
        </div>
      </div>
      <div style={{background:'#f9f9f9',padding:'40px 20px',textAlign:'center',marginTop:'60px'}}>
        <p style={{color:'#999',fontSize:'14px'}}>© 2026 AccountSolutions</p>
      </div>
    </div>
  )
}

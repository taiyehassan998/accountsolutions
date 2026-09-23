export default function Home() {
  return (
    <div style={{fontFamily:'sans-serif'}}>
      <nav style={{display:'flex',justifyContent:'space-between',padding:'16px 24px',borderBottom:'1px solid #eee',alignItems:'center'}}>
        <b style={{fontSize:'20px'}}>AccountSolutions</b>
        <div style={{display:'flex',gap:'8px'}}>
          <a href="#" style={{padding:'8px 16px',background:'#f3f3f3',borderRadius:'20px',textDecoration:'none',color:'black',fontSize:'14px'}}>Log in</a>
          <a href="#" style={{padding:'8px 16px',background:'black',color:'white',borderRadius:'20px',textDecoration:'none',fontSize:'14px'}}>Sign up</a>
        </div>
      </nav>
      
      <div style={{padding:'60px 24px',maxWidth:'800px',margin:'0 auto',textAlign:'center'}}>
        <h1 style={{fontSize:'48px',fontWeight:'800',lineHeight:'1.1',marginBottom:'16px'}}>Simplify Your Accounting</h1>
        <p style={{color:'#666',fontSize:'18px',marginBottom:'32px'}}>Automate bookkeeping, invoicing, and tax reporting. Perfect for small businesses and freelancers.</p>
        <a href="#" style={{padding:'16px 32px',background:'black',color:'white',borderRadius:'30px',textDecoration:'none',fontWeight:'bold',display:'inline-block'}}>Get Started Free</a>
        
        <div style={{marginTop:'60px',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'16px'}}>
          <div style={{background:'#f9f9f9',padding:'20px',borderRadius:'16px'}}>
            <h3>📊 Invoicing</h3>
            <p style={{color:'#666',fontSize:'14px'}}>Create & send in seconds</p>
          </div>
          <div style={{background:'#f9f9f9',padding:'20px',borderRadius:'16px'}}>
            <h3>💰 Expenses</h3>
            <p style={{color:'#666',fontSize:'14px'}}>Track automatically</p>
          </div>
          <div style={{background:'#f9f9f9',padding:'20px',borderRadius:'16px'}}>
            <h3>📈 Reports</h3>
            <p style={{color:'#666',fontSize:'14px'}}>Tax ready reports</p>
          </div>
        </div>
      </div>
    </div>
  )
}

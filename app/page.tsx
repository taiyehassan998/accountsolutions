export default function Home() {
  return (
    <div style={{fontFamily:'-apple-system, BlinkMacSystemFont, sans-serif', color:'#111'}}>
      {/* NAV */}
      <nav style={{display:'flex',justifyContent:'space-between',padding:'18px 32px',alignItems:'center',borderBottom:'1px solid #f0f0f0',position:'sticky',top:0,background:'white',zIndex:10}}>
        <b style={{fontSize:'20px',letterSpacing:'-0.5px'}}>AccountSolutions</b>
        <div style={{display:'flex',gap:'24px',alignItems:'center',fontSize:'14px'}}>
          <a href="#features" style={{textDecoration:'none',color:'#666'}}>Features</a>
          <a href="#pricing" style={{textDecoration:'none',color:'#666'}}>Pricing</a>
          <a href="#" style={{padding:'10px 18px',background:'#f5f5f5',borderRadius:'24px',textDecoration:'none',color:'black'}}>Log in</a>
          <a href="#" style={{padding:'10px 18px',background:'black',color:'white',borderRadius:'24px',textDecoration:'none',fontWeight:'600'}}>Sign up Free</a>
        </div>
      </nav>

      {/* HERO */}
      <div style={{textAlign:'center',padding:'90px 24px 60px',maxWidth:'900px',margin:'0 auto'}}>
        <div style={{display:'inline-block',background:'#f0f0f0',padding:'6px 14px',borderRadius:'20px',fontSize:'12px',fontWeight:'600',marginBottom:'20px'}}>✨ NEW: Tax reports automated for 2025</div>
        <h1 style={{fontSize:'64px',fontWeight:'800',lineHeight:'0.95',letterSpacing:'-2px',marginBottom:'20px'}}>Accounting<br/>made simple</h1>
        <p style={{color:'#666',fontSize:'20px',maxWidth:'540px',margin:'0 auto 32px',lineHeight:'1.5'}}>The all-in-one platform for invoices, expenses and tax. Trusted by 10,000+ small businesses.</p>
        <div style={{display:'flex',gap:'12px',justifyContent:'center'}}>
          <a href="#" style={{padding:'16px 32px',background:'black',color:'white',borderRadius:'32px',textDecoration:'none',fontWeight:'700',fontSize:'16px'}}>Start free trial →</a>
          <a href="#" style={{padding:'16px 32px',background:'white',color:'black',border:'1px solid #ddd',borderRadius:'32px',textDecoration:'none',fontWeight:'600'}}>See demo</a>
        </div>
        <p style={{fontSize:'12px',color:'#999',marginTop:'16px'}}>No credit card required • Cancel anytime</p>
      </div>

      {/* FEATURES */}
      <div id="features" style={{background:'#fafafa',padding:'60px 24px',borderTop:'1px solid #eee',borderBottom:'1px solid #eee'}}>
        <div style={{maxWidth:'1000px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:'20px'}}>
          <div style={{background:'white',padding:'28px',borderRadius:'20px',border:'1px solid #eee'}}>
            <div style={{fontSize:'28px',marginBottom:'12px'}}>🧾</div>
            <h3 style={{margin:'0 0 8px'}}>Smart Invoicing</h3>
            <p style={{color:'#666',fontSize:'14px',lineHeight:'1.5',margin:0}}>Create branded invoices, get paid 2x faster with auto-reminders.</p>
          </div>
          <div style={{background:'white',padding:'28px',borderRadius:'20px',border:'1px solid #eee'}}>
            <div style={{fontSize:'28px',marginBottom:'12px'}}>📸</div>
            <h3 style={{margin:'0 0 8px'}}>Receipt Scanner</h3>
            <p style={{color:'#666',fontSize:'14px',lineHeight:'1.5',margin:0}}>Snap receipts, we extract data and categorize expenses automatically.</p>
          </div>
          <div style={{background:'white',padding:'28px',borderRadius:'20px',border:'1px solid #eee'}}>
            <div style={{fontSize:'28px',marginBottom:'12px'}}>📊</div>
            <h3 style={{margin:'0 0 8px'}}>Tax Ready</h3>
            <p style={{color:'#666',fontSize:'14px',lineHeight:'1.5',margin:0}}>One-click Profit & Loss, VAT and Self-Assessment reports.</p>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" style={{padding:'80px 24px',maxWidth:'900px',margin:'0 auto',textAlign:'center'}}>
        <h2 style={{fontSize:'36px',fontWeight:'800',letterSpacing:'-1px'}}>Simple pricing</h2>
        <p style={{color:'#666',marginBottom:'40px'}}>Start free, upgrade when you need.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px',textAlign:'left'}}>
          <div style={{border:'1px solid #eee',borderRadius:'24px',padding:'32px'}}>
            <h3>Starter</h3>
            <div style={{fontSize:'32px',fontWeight:'800',margin:'12px 0'}}>$0 <span style={{fontSize:'14px',fontWeight:'400',color:'#666'}}>/month</span></div>
            <ul style={{color:'#666',fontSize:'14px',lineHeight:'2',paddingLeft:'18px'}}><li>5 invoices / month</li><li>Expense tracking</li><li>Basic reports</li></ul>
            <a href="#" style={{display:'block',textAlign:'center',marginTop:'24px',padding:'14px',background:'#f5f5f5',borderRadius:'24px',textDecoration:'none',color:'black',fontWeight:'600'}}>Start free</a>
          </div>
          <div style={{border:'2px solid black',borderRadius:'24px',padding:'32px',background:'black',color:'white'}}>
            <h3>Pro - Most popular</h3>
            <div style={{fontSize:'32px',fontWeight:'800',margin:'12px 0'}}>$19 <span style={{fontSize:'14px',fontWeight:'400',color:'#aaa'}}>/month</span></div>
            <ul style={{color:'#bbb',fontSize:'14px',lineHeight:'2',paddingLeft:'18px'}}><li>Unlimited invoices</li><li>Auto bank sync</li><li>Tax reports + VAT</li><li>Priority support</li></ul>
            <a href="#" style={{display:'block',textAlign:'center',marginTop:'24px',padding:'14px',background:'white',borderRadius:'24px',textDecoration:'none',color:'black',fontWeight:'700'}}>Start 14-day trial</a>
          </div>
        </div>
      </div>

      <footer style={{textAlign:'center',padding:'40px',color:'#999',borderTop:'1px solid #eee'}}>
<div>
<p>© 2026 AccountSolutions</p>
<p>Contact: <a href="mailto:acctsolutionhub@gmail.com" style={{color:'black',fontWeight:'bold'}}>acctsolutionhub@gmail.com</a></p>
</div>
</footer>
}

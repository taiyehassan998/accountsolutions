export default function Home() {
  return (
    <div style={{fontFamily:'system-ui', background:'#f8fffe', minHeight:'100vh', color:'#0f2d2a'}}>
      {/* HEADER */}
      <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 20px', background:'white', position:'sticky', top:0, zIndex:10, borderBottom:'1px solid #eef5f4'}}>
        <div style={{display:'flex', alignItems:'center', gap:'8px', fontWeight:800, fontSize:'14px'}}>🌀 Account Solutions Hub</div>
        <div style={{fontSize:'24px'}}>☰</div>
      </header>

      {/* HERO */}
      <section style={{padding:'20px', textAlign:'center', background:'linear-gradient(180deg, #b9f0f5 0%, #f8fffe 100%)'}}>
        <div style={{background:'#0a7ad1', color:'white', display:'inline-block', padding:'10px 24px', borderRadius:'999px', fontSize:'11px', letterSpacing:'1.5px', fontWeight:700, marginBottom:'20px'}}>NIGERIA'S TRUSTED DIGITAL MARKETPLACE</div>
        <h1 style={{fontSize:'34px', fontWeight:900, lineHeight:'1.1', color:'#0e8a7a', margin:'0 0 16px'}}>Verified Digital Accounts in Naira|</h1>
        <p style={{color:'#5a6d6b', fontSize:'16px', lineHeight:'1.5', maxWidth:'500px', margin:'0 auto 28px'}}>Buy verified digital accounts, VPNs, proxies, and more — all priced in Naira and delivered instantly. No foreign cards, no complications.</p>
        <div style={{display:'flex', flexDirection:'column', gap:'12px', alignItems:'center'}}>
          <a href="/login" style={{background:'linear-gradient(90deg, #0e8a7a, #0a7ad1)', color:'white', padding:'16px 32px', borderRadius:'999px', fontWeight:700, textDecoration:'none', display:'flex', alignItems:'center', gap:'8px'}}>Browse Accounts →</a>
          <a href="/login" style={{background:'white', color:'#0f2d2a', padding:'14px 32px', borderRadius:'999px', fontWeight:700, textDecoration:'none', border:'1px solid #dde9e7', boxShadow:'0 2px 10px rgba(0,0,0,0.05)'}}>Create Account</a>
        </div>

        {/* 4 small features */}
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px', textAlign:'left', marginTop:'36px', background:'white', padding:'16px', borderRadius:'16px'}}>
          <div style={{display:'flex', gap:'10px'}}><div style={{background:'#e6f7f5', minWidth:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>🛡️</div><div><b style={{fontSize:'13px', display:'block'}}>Account Solutions Hub Verified</b><span style={{fontSize:'11px', color:'#6b7f7d'}}>Hand-checked quality</span></div></div>
          <div style={{display:'flex', gap:'10px'}}><div style={{background:'#e6f7f5', minWidth:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>⚡</div><div><b style={{fontSize:'13px', display:'block'}}>Instant Delivery</b><span style={{fontSize:'11px', color:'#6b7f7d'}}>Seconds after payment</span></div></div>
          <div style={{display:'flex', gap:'10px'}}><div style={{background:'#e6f7f5', minWidth:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>🎧</div><div><b style={{fontSize:'13px', display:'block'}}>24/7 Support</b><span style={{fontSize:'11px', color:'#6b7f7d'}}>Real humans, real fast</span></div></div>
          <div style={{display:'flex', gap:'10px'}}><div style={{background:'#e6f7f5', minWidth:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>🔄</div><div><b style={{fontSize:'13px', display:'block'}}>Replacement Policy</b><span style={{fontSize:'11px', color:'#6b7f7d'}}>Covered on failure</span></div></div>
        </div>
      </section>

      {/* ONE WALLET */}
      <section style={{padding:'40px 20px', background:'#eefbf9'}}>
        <div style={{textAlign:'center', marginBottom:'24px'}}>
          <div style={{background:'#d6efec', color:'#0e8a7a', display:'inline-block', padding:'6px 16px', borderRadius:'999px', fontSize:'11px', letterSpacing:'2px', fontWeight:700}}>SHOP • FUND • GROW</div>
          <h2 style={{fontSize:'30px', fontWeight:900, lineHeight:'1.1', margin:'16px 0'}}><span style={{color:'#0a8fa8'}}>One Wallet.</span> Everything You Need.</h2>
          <p style={{color:'#5a6d6b'}}>Verified accounts, SMS numbers, VPNs, and instant wallet funding — all delivered in minutes, not hours.</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px'}}>
          {[
            ['🌐','Social Accounts'],
            ['📱','SMS Numbers'],
            ['🛡️','VPNs & Proxies'],
            ['💳','Wallet Funding'],
            ['📈','Growth Tools'],
            ['🎧','24/7 Support'],
          ].map(([icon,title])=>(
            <div key={title} style={{background:'white', padding:'18px', borderRadius:'18px', border:'1px solid #e6f0ef'}}>
              <div style={{background:'#eef8ff', width:'42px', height:'42px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px', fontSize:'20px'}}>{icon}</div>
              <b style={{fontSize:'14px'}}>{title}</b>
            </div>
          ))}
        </div>
        <div style={{overflow:'hidden', whiteSpace:'nowrap', marginTop:'20px', fontSize:'11px', letterSpacing:'2px', color:'#0e8a7a', fontWeight:700}}>• INSTAGRAM • TIKTOK • HOTMAIL • SMS NUMBERS • VPN • GMAIL •</div>
      </section>

      {/* FEATURES */}
      <section style={{padding:'20px', display:'grid', gap:'16px'}}>
        {[
          ['Authenticity','Account Solutions Hub ensures quality and accuracy by thoroughly reviewing all records before making them live.'],
          ['Accountability','Always secure your accounts shortly after logging in to ensure their safety.'],
          ['Verified Quality','Every account in our store is carefully checked'],
          ['Replacement Policy','We provide replacements for faulty accounts, but only if the issue is on our end'],
          ['Support Service','Our technical support team is available 24/7'],
          ['Secure Transactions','Shop confidently. Your payments are protected'],
        ].map(([t,d])=>(
          <div key={t} style={{background:'white', border:'1px solid #e6f0ef', padding:'20px', borderRadius:'20px'}}>
            <div style={{background:'linear-gradient(90deg, #0e8a7a, #0a7ad1)', width:'42px', height:'42px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'white', marginBottom:'16px'}}>✓</div>
            <b style={{fontSize:'16px', display:'block', marginBottom:'8px'}}>{t}</b>
            <p style={{fontSize:'13px', color:'#5a6d6b', lineHeight:'1.5'}}>{d}</p>
          </div>
        ))}
      </section>

      {/* REVIEWS */}
      <section style={{padding:'40px 20px', background:'#eefbf9'}}>
        <div style={{textAlign:'center'}}><span>⭐⭐⭐⭐⭐</span><span style={{fontWeight:700, marginLeft:'8px', fontSize:'14px'}}>4.9 / 5 from 8,200+ reviews</span></div>
        <h2 style={{textAlign:'center', fontSize:'24px', fontWeight:900, margin:'12px 0 24px'}}>Buyers don't just like us. They tell their friends.</h2>
        <div style={{display:'grid', gap:'16px'}}>
          {[
            ['C','Chinedu O.','Lagos','Bought a Netflix sub at 11pm, got it before I could finish brushing my teeth. Account Solutions Hub is the real deal.'],
            ['A','Amaka B.','Abuja','I\'ve spent over ₦200k here this year. Never had a single dead account. Support replies in minutes.'],
            ['T','Tunde A.','Ibadan','The wallet system is genius. Top up once, buy 10 things without re-entering card details. Smooth.'],
          ].map(([l,name,city,text])=>(
            <div key={name} style={{background:'white', padding:'20px', borderRadius:'20px', border:'1px solid #e6f0ef'}}>
              <div>⭐⭐⭐⭐⭐</div>
              <p style={{fontSize:'14px', lineHeight:'1.6', margin:'12px 0'}}>"{text}"</p>
              <div style={{display:'flex', alignItems:'center', gap:'10px'}}><div style={{width:'36px', height:'36px', borderRadius:'50%', background:'#0a8fa8', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700}}>{l}</div><div><b style={{fontSize:'14px'}}>{name}</b><div style={{fontSize:'12px', color:'#6b7f7d'}}>Verified Buyer · {city}</div></div></div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:'40px 20px'}}>
        <div style={{color:'#0e8a7a', fontWeight:700, fontSize:'12px'}}>FAQ</div>
        <h2 style={{fontSize:'24px', fontWeight:900, margin:'8px 0'}}>Questions? We've got answers.</h2>
        <p style={{color:'#5a6d6b', fontSize:'14px', marginBottom:'20px'}}>Still stuck? Our support team replies within minutes, 24/7.</p>
        {['How fast is delivery?','What payment methods do you accept?','What if a product doesn\'t work?','Is my account information safe?'].map(q=>(
          <div key={q} style={{border:'1px solid #dde9e7', borderRadius:'999px', padding:'14px 18px', marginBottom:'10px', display:'flex', justifyContent:'space-between', fontSize:'14px', fontWeight:600}}>{q} <span>⌄</span></div>
        ))}
      </section>

      {/* CTA */}
      <section style={{margin:'20px', background:'linear-gradient(135deg, #0e8a7a, #0a7ad1)', borderRadius:'28px', padding:'32px 24px', textAlign:'center', color:'white'}}>
        <h2 style={{fontSize:'24px', fontWeight:900, marginBottom:'12px'}}>Ready to Start your Journey</h2>
        <p style={{fontSize:'14px', opacity:0.9, lineHeight:'1.5', marginBottom:'24px'}}>Explore our marketplace now and unlock a world of genuine accounts. Join Account Solutions Hub today and experience a new way to buy and connect.</p>
        <a href="/login" style={{background:'white', color:'#0f2d2a', padding:'14px 28px', borderRadius:'999px', fontWeight:800, textDecoration:'none', display:'inline-block'}}>Explore Logs →</a>
      </section>

      <div style={{height:'40px'}}></div>
    </div>
  )
}

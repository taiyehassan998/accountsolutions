"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#f6fbfb' }}>
      {/* HEADER */}
      <div style={{ background: '#fff', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e6f0ef' }}>
        <button onClick={() => setMenuOpen(true)} style={{ fontSize: '26px', background: 'none', border: 'none' }}>☰</button>
        <div style={{ fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ fontSize: '26px' }}>🌐</span> ACCOUNT SOLUTIONS HUB</div>
        <button onClick={()=>setIsAdmin(!isAdmin)} style={{fontSize:'11px',padding:'6px 10px',borderRadius:'999px',border:'1px solid #0b8a7a',background:isAdmin?'#0b8a7a':'#fff',color:isAdmin?'#fff':'#0b8a7a'}}>{isAdmin ? 'ADMIN' : 'USER'}</button>
      </div>

      {/* CONTENT */}
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1>Welcome</h1>
        <p>Click ☰ top left to see menu. Click USER/ADMIN top right to switch menu.</p>
      </div>

      {/* SIDEBAR DRAWER */}
      {menuOpen && (
        <>
          <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999 }}></div>
          <div style={{ width: '280px', height: '100vh', background: '#fff', position: 'fixed', left: 0, top: 0, zIndex: 1000, display: 'flex', flexDirection: 'column', padding: '20px', overflowY: 'auto' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', fontWeight: '800' }}><span style={{ fontSize: '32px' }}>🌐</span>{isAdmin ? <span style={{color:'#0b8a7a'}}>ADMIN</span> : <>ACCOUNT<br/>SOLUTIONS HUB</>}</div>

            {!isAdmin ? (
              <>
                <div style={{ background: '#e0f2f1', borderRadius: '12px', padding: '10px 14px', color: '#0b8a7a', fontWeight: '600', marginBottom: '8px' }}>🏠 Home</div>
                <M href="/categories" icon="⊞" label="Categories" close={()=>setMenuOpen(false)}/>
                <M href="/admin" icon="🛡️" label="Admin Dashboard" close={()=>setMenuOpen(false)}/>
                <M href="/wallet" icon="💳" label="Fund Wallet" close={()=>setMenuOpen(false)}/>
                <M href="/sms" icon="💬" label="SMS Verification" close={()=>setMenuOpen(false)}/>
                <M href="/orders" icon="📦" label="Orders" close={()=>setMenuOpen(false)}/>
                <M href="/transactions" icon="🕒" label="Transaction History" close={()=>setMenuOpen(false)}/>
                <M href="/profile" icon="👤" label="Profile" close={()=>setMenuOpen(false)}/>
                <M href="/rules" icon="📜" label="Rules & Regulations" close={()=>setMenuOpen(false)}/>
                <div style={{flex:1}}></div>
                <Link href="/logout" style={{color:'#e53935',textDecoration:'none',padding:'12px 0',borderTop:'1px solid #eee'}}>↪ Logout</Link>
              </>
            ) : (
              <>
                <p style={{fontSize:'12px',fontWeight:'700',color:'#666'}}>Management</p>
                <M href="/admin" icon="⊞" label="Dashboard" close={()=>setMenuOpen(false)}/>
                <M href="/admin/sms" icon="💬" label="SMS" close={()=>setMenuOpen(false)}/>
                <M href="/admin/funding" icon="💳" label="Funding" close={()=>setMenuOpen(false)}/>
                <M href="/admin/users" icon="👥" label="Users" close={()=>setMenuOpen(false)}/>
                <M href="/admin/products" icon="📦" label="Products" close={()=>setMenuOpen(false)}/>
                <M href="/admin/orders" icon="🛒" label="Product Orders" close={()=>setMenuOpen(false)}/>
                <M href="/admin/ban" icon="🚫" label="Ban" close={()=>setMenuOpen(false)}/>
                <M href="/admin/revenue" icon="📈" label="Revenue" close={()=>setMenuOpen(false)}/>
                <div style={{flex:1}}></div>
                <Link href="/" onClick={()=>setMenuOpen(false)} style={{color:'#333',textDecoration:'none',padding:'10px 0'}}>← Back to app</Link>
                <Link href="/logout" style={{color:'#e53935',textDecoration:'none',padding:'10px 0'}}>↪ Sign out</Link>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
function M({href,icon,label,close}:any){
  return <Link href={href} onClick={close} style={{display:'flex',gap:'12px',padding:'11px 4px',textDecoration:'none',color:'#222',fontSize:'14px'}}><span>{icon}</span>{label}</Link>
}

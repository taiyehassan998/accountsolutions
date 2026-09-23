"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#f6fbfb' }}>
      <div style={{ background: '#fff', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => setMenuOpen(true)} style={{ fontSize: '26px', background: 'none', border: 'none' }}>☰</button>
        <div style={{ fontWeight: '800', display: 'flex', gap: '8px' }}>🌐 ACCOUNT SOLUTIONS HUB</div>
        <button onClick={()=>setIsAdmin(!isAdmin)} style={{fontSize:'11px',padding:'6px 10px',borderRadius:'999px',border:'1px solid #0b8a7a',background:isAdmin?'#0b8a7a':'#fff',color:isAdmin?'#fff':'#0b8a7a'}}>{isAdmin ? 'ADMIN' : 'USER'}</button>
      </div>

      <div style={{ padding: '30px', textAlign: 'center' }}>
        <h2>Click ☰ to open drawer</h2>
        <p>Top right button switches between USER menu and ADMIN menu</p>
        <p>USER = Screenshot 1 | ADMIN = Screenshot 2</p>
      </div>

      {menuOpen && (
        <>
          <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999 }}></div>
          <div style={{ width: '280px', height: '100vh', background: '#fff', position: 'fixed', left: 0, top: 0, zIndex: 1000, padding: '20px', overflowY: 'auto', display:'flex', flexDirection:'column' }}>
            <div style={{ fontWeight: '800', marginBottom: '24px' }}>🌐 {isAdmin ? <span style={{color:'#0b8a7a'}}>ADMIN</span> : 'ACCOUNT SOLUTIONS HUB'}</div>
            {!isAdmin ? (
              <>
                <div style={{ background: '#e0f2f1', borderRadius: '12px', padding: '10px', color: '#0b8a7a', fontWeight: '600' }}>🏠 Home</div>
                <Item href="/categories" icon="⊞" label="Categories" close={()=>setMenuOpen(false)}/>
                <Item href="/admin" icon="🛡️" label="Admin Dashboard" close={()=>setMenuOpen(false)}/>
                <Item href="/wallet" icon="💳" label="Fund Wallet" close={()=>setMenuOpen(false)}/>
                <Item href="/sms" icon="💬" label="SMS Verification" close={()=>setMenuOpen(false)}/>
                <Item href="/orders" icon="📦" label="Orders" close={()=>setMenuOpen(false)}/>
                <Item href="/transactions" icon="🕒" label="Transaction History" close={()=>setMenuOpen(false)}/>
                <Item href="/profile" icon="👤" label="Profile" close={()=>setMenuOpen(false)}/>
                <Item href="/rules" icon="📜" label="Rules & Regulations" close={()=>setMenuOpen(false)}/>
                <div style={{flex:1}}></div>
                <Link href="/logout" style={{color:'#e53935',textDecoration:'none',padding:'12px 0',borderTop:'1px solid #eee'}}>↪ Logout</Link>
              </>
            ) : (
              <>
                <p style={{fontSize:'12px',fontWeight:'700',color:'#666'}}>Management</p>
                <Item href="/admin" icon="⊞" label="Dashboard" close={()=>setMenuOpen(false)}/>
                <Item href="/admin/sms" icon="💬" label="SMS" close={()=>setMenuOpen(false)}/>
                <Item href="/admin/users" icon="👥" label="Users" close={()=>setMenuOpen(false)}/>
                <Item href="/admin/products" icon="📦" label="Products" close={()=>setMenuOpen(false)}/>
                <Item href="/admin/orders" icon="🛒" label="Product Orders" close={()=>setMenuOpen(false)}/>
                <Item href="/admin/revenue" icon="📈" label="Revenue" close={()=>setMenuOpen(false)}/>
                <Item href="/admin/ban" icon="🚫" label="Ban" close={()=>setMenuOpen(false)}/>
                <Item href="/admin/audit" icon="📋" label="Audit Logs" close={()=>setMenuOpen(false)}/>
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
function Item({href,icon,label,close}:any){
  return <Link href={href} onClick={close} style={{display:'flex',gap:'12px',padding:'11px 4px',textDecoration:'none',color:'#222',fontSize:'14px'}}><span>{icon}</span>{label}</Link>
}

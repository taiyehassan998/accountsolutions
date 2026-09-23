"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ isAdmin=false, onClose }: {isAdmin?: boolean, onClose?: ()=>void}){
  return (
    <div style={{width:'280px',height:'100vh',background:'#fff',position:'fixed',left:0,top:0,zIndex:1000,display:'flex',flexDirection:'column',padding:'20px',boxShadow:'2px 0 10px rgba(0,0,0,0.1)',overflowY:'auto'}}>
      {/* Logo */}
      <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'24px'}}>
        <div style={{fontSize:'32px'}}>🌐</div>
        <div style={{fontWeight:'800',lineHeight:'1.1'}}>{isAdmin ? <span style={{color:'#0b8a7a'}}>ADMIN</span> : <>ACCOUNT<br/>SOLUTIONS HUB</>}</div>
      </div>

      {!isAdmin ? (
      <>
        <div style={{background:'#e0f2f1',borderRadius:'12px',padding:'10px 14px',display:'flex',alignItems:'center',gap:'8px',color:'#0b8a7a',fontWeight:'600',marginBottom:'8px'}}>
          <span>🏠</span> Home
        </div>
        <MenuItem href="/categories" icon="⊞" label="Categories" onClose={onClose}/>
        <MenuItem href="/admin" icon="🛡️" label="Admin Dashboard" onClose={onClose}/>
        <MenuItem href="/wallet" icon="💳" label="Fund Wallet" onClose={onClose}/>
        <MenuItem href="/sms" icon="💬" label="SMS Verification" onClose={onClose}/>
        <MenuItem href="/orders" icon="📦" label="Orders" onClose={onClose}/>
        <MenuItem href="/transactions" icon="🕒" label="Transaction History" onClose={onClose}/>
        <MenuItem href="/profile" icon="👤" label="Profile" onClose={onClose}/>
        <MenuItem href="/rules" icon="📜" label="Rules & Regulations" onClose={onClose}/>
        <div style={{flex:1}}></div>
        <Link href="/logout" style={{color:'#e53935',display:'flex',gap:'8px',textDecoration:'none',padding:'12px 0',borderTop:'1px solid #eee',marginTop:'20px'}}>↪ Logout</Link>
      </>
      ) : (
      <>
        <p style={{fontSize:'12px',fontWeight:'700',color:'#666',marginBottom:'12px'}}>Management</p>
        <MenuItem href="/admin" icon="⊞" label="Dashboard" onClose={onClose}/>
        <MenuItem href="/admin/sms" icon="💬" label="SMS" dropdown onClose={onClose}/>
        <MenuItem href="/admin/funding" icon="💳" label="Funding" onClose={onClose}/>
        <MenuItem href="/admin/users" icon="👥" label="Users" onClose={onClose}/>
        <MenuItem href="/admin/products" icon="📦" label="Products" onClose={onClose}/>
        <MenuItem href="/admin/orders" icon="🛒" label="Product Orders" onClose={onClose}/>
        <MenuItem href="/admin/lowstock" icon="⚠️" label="Low Stock" onClose={onClose}/>
        <MenuItem href="/admin/lookup" icon="🔍" label="Lookup" onClose={onClose}/>
        <MenuItem href="/admin/ban" icon="🚫" label="Ban" onClose={onClose}/>
        <MenuItem href="/admin/invite" icon="👤+" label="Invite" onClose={onClose}/>
        <MenuItem href="/admin/telegram" icon="✈️" label="Telegram" onClose={onClose}/>
        <MenuItem href="/admin/category" icon="🗂️" label="Category" onClose={onClose}/>
        <MenuItem href="/admin/revenue" icon="📈" label="Revenue" onClose={onClose}/>
        <MenuItem href="/admin/momo" icon="📱" label="MoMo" onClose={onClose}/>
        <MenuItem href="/admin/bank" icon="🏦" label="Bank Transfer" onClose={onClose}/>
        <MenuItem href="/admin/ercaspay" icon="💳" label="Ercaspay" onClose={onClose}/>
        <MenuItem href="/admin/audit" icon="📋" label="Audit Logs" onClose={onClose}/>
        <MenuItem href="/admin/maintenance" icon="🔧" label="Maintenance" onClose={onClose}/>
        <div style={{flex:1}}></div>
        <Link href="/" onClick={onClose} style={{display:'flex',gap:'8px',textDecoration:'none',color:'#333',padding:'10px 0'}}>← Back to app</Link>
        <Link href="/logout" style={{color:'#e53935',display:'flex',gap:'8px',textDecoration:'none',padding:'10px 0'}}>↪ Sign out</Link>
      </>
      )}
    </div>
  )
}

function MenuItem({href,icon,label,dropdown,onClose}:{href:string,icon:string,label:string,dropdown?:boolean,onClose?:()=>void}){
  return(
    <Link href={href} onClick={onClose} style={{display:'flex',alignItems:'center',gap:'12px',padding:'11px 4px',textDecoration:'none',color:'#222',fontSize:'14px',justifyContent:dropdown?'space-between':'flex-start'}}>
      <span style={{display:'flex',gap:'12px'}}><span>{icon}</span> {label}</span>
      {dropdown && <span>⌄</span>}
    </Link>
  )
}

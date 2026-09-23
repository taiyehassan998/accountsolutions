"use client";
import { useState } from "react";
export default function Page(){
  const [showLogin,setShowLogin]=useState(false);
  const [showSignup,setShowSignup]=useState(false);
  const [email,setEmail]=useState(""); const [pass,setPass]=useState("");
  const handleAuth=(t:string)=>{
    if(!email||!pass){ alert("Enter email & password"); return; }
    alert(`${t} success for ${email}!`);
    setShowLogin(false); setShowSignup(false);
  }
  return(
    <div className="min-h-screen bg-white text-black">
      <nav className="flex justify-between p-4 border-b items-center">
        <b>AccountSolutions</b>
        <div className="flex gap-2">
          <button onClick={()=>setShowLogin(true)} className="px-4 py-2 border rounded">Log in</button>
          <button onClick={()=>setShowSignup(true)} className="px-4 py-2 bg-black text-white rounded">Sign up</button>
        </div>
      </nav>
      <main className="p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Simplify Your Accounting</h1>
        <button onClick={()=>setShowSignup(true)} className="px-6 py-3 bg-black text-white rounded">Get Started</button>
      </main>
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4">Log in</h2>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border p-2 rounded mb-3"/>
            <input value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" className="w-full border p-2 rounded mb-3"/>
            <button onClick={()=>handleAuth("Login")} className="w-full bg-black text-white p-2 rounded mb-2">Log in</button>
            <button onClick={()=>setShowLogin(false)} className="w-full border p-2 rounded">Cancel</button>
          </div>
        </div>
      )}
      {showSignup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4">Sign up</h2>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border p-2 rounded mb-3"/>
            <input value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" className="w-full border p-2 rounded mb-3"/>
            <button onClick={()=>handleAuth("Signup")} className="w-full bg-black text-white p-2 rounded mb-2">Create Account</button>
            <button onClick={()=>setShowSignup(false)} className="w-full border p-2 rounded">Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

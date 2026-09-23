export default function Page(){
return(
<div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'100vh'}}>
<div style={{border:'1px solid #ddd',padding:'20px',borderRadius:'10px',width:'300px'}}>
<h2>Login</h2>
<input placeholder="Email" style={{width:'100%',padding:'8px',margin:'5px 0'}}/>
<input type="password" placeholder="Password" style={{width:'100%',padding:'8px',margin:'5px 0'}}/>
<button style={{width:'100%',padding:'8px',background:'black',color:'white',marginTop:'10px'}}>Login</button>
<a href="/" style={{display:'block',textAlign:'center',marginTop:'10px'}}>Home</a>
</div>
</div>
)}

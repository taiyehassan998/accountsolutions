export default function Home() {
  return (
    <div>
      <div style={{padding:'20px',display:'flex',justifyContent:'space-between',borderBottom:'1px solid #eee'}}>
        <b>AccountSolutions</b>
        <a href="/login" style={{background:'black',color:'white',padding:'8px 16px',borderRadius:'20px',textDecoration:'none'}}>Login</a>
      </div>
      <div style={{textAlign:'center',padding:'80px 20px'}}>
        <h1 style={{fontSize:'40px'}}>Accounting Solutions for Modern Business</h1>
        <p>Contact: acctsolutionhub@gmail.com</p>
        <a href="/login" style={{display:'inline-block',marginTop:'20px',background:'black',color:'white',padding:'12px 24px',borderRadius:'8px',textDecoration:'none'}}>Go to Login</a>
      </div>
    </div>
  )
}

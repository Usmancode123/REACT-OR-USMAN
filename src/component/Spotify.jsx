// import moon from './dark/moon.png'
function Spotify (){
    return (
        <>
        <div className="Container"> 
       
        <form action="#">
    <div className="heading"><h1>Spotify</h1></div>
    <div className="sub-heading"><p>Welcome Back</p></div>
    
        <div className="form"> 
        {/* text */}
           
            <div className="input"><input type="email" placeholder="Email address" required/>
         
            </div>
            {/* password  */}
            < div className="input"><input type="password" placeholder="Password" /></div>

            {/* btn  */}
            < div  ><button>Login</button></div>
            < div className="forget" ><a href="#">Forget password</a></div> 
            {/* bar  */}
          
        </div>
    </form>
    </div>
        
        </>
    )

} export default Spotify
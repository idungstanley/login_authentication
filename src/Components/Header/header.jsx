function Header(props){
 return (
  <div className="heading">
   <header>
    <h1>{props.account_type}</h1>
    <p>Hey, Enter your details to get sign in to your account</p>
   </header>
  </div>
 )
}

export default Header
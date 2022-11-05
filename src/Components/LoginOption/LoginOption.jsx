export default function LoginOption(props){
 return (
  <div className="btn--container">
  <button className="btn">
  <img src={props.img} alt="" />
  <p>{props.name}</p>
  </button>
  </div>
 )
}
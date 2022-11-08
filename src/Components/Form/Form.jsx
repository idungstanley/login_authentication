import LoginOption from '../LoginOption/LoginOption'
import { data } from '../LoginOption/loginData'

export default function Form() {
  const loginMap = data.map((name) => {
    return <LoginOption name={name} />
  })
  return (
    <div className='form'>
      <form action=''>
        <input
          type='email'
          name=''
          id=''
          placeholder='Enter Email /  Phone No'
        />
        <input type='password' name='' id='' placeholder='Passcode' />
        <strong>Having trouble in signing in?</strong>
        <input type='button' value='Sign in' />
      </form>
      <p>--Or Sign in with --</p>
      {loginMap}
      <p>
        Don't you have an account <span>Request Now!!</span>
      </p>
    </div>
  )
}

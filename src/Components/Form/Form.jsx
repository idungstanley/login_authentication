import LoginOption from '../LoginOption/LoginOption'

export default function Form() {
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
      <LoginOption name='Google' />
      <LoginOption name='Apple' />
      <LoginOption name='Facebook' />
      <p>Don't you have an account <span>Request Now</span></p>
    </div>
  )
}

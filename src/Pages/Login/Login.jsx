import { useContext, useState } from 'react';
// import { useEffect, useRef } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';


const Login = () => {

  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  console.log(location);


  console.log(from);


  // const captchaRef=useRef(null)
  // const[disabled, setDisabled]=useState(false)

  const { signIn, } = useContext(AuthContext)

  // useEffect(()=>{
  //         loadCaptchaEnginge(6);
  // }, [])

  // const handleVelidateCaptcha=()=>{
  //     const user_captcha_value=captchaRef.current.value;
  //     if(validateCaptcha(user_captcha_value)){
  //             setDisabled(false)
  //     }
  //     else{
  //         setDisabled(true)
  //     }


  // }

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Log in successfully')
        navigate(from, { replace: true })


      })
      .catch(err => {
        toast.error(err.message || 'Login Failed')
        return
      })


  }

  return (
    <div className="hero bg-base-200 min-h-screen md:px-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <Link to={'/'} className='btn'>Home</Link>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input required name="email" type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input required name="password" type="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>

              {/* <div>
           <label className="label">
            <LoadCanvasTemplate/>
           </label>
          <input ref={captchaRef} maxLength={6} name="captcha" type="text" className="input my-4" placeholder="Captcha" />
          <button type='button' onClick={handleVelidateCaptcha} className="btn  btn-outline btn-xs">Validate</button>
            
            </div> */}
              <div>
                New Here <Link className='text-blue-500 hover:underline' to={'/register'}>Register</Link>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">Login</button>


            </fieldset>
          </form>
              <div className='divider -mt-5'></div>
          {/* Google login */}
         <SocialLogin/>
        </div>
      </div>
    </div>
  );
};

export default Login;
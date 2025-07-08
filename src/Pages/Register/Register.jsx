import { Link, useNavigate } from "react-router";

import { useForm } from 'react-hook-form';
// import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";



const Register = () => {

  const axiosPublic = useAxiosPublic()
  const { createUser, updateUserProfile } = useContext(AuthContext)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
    createUser(data.email, data.password)

      .then(result => {
        const loggeduser = result.user;
        console.log(loggeduser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            //create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email
            }

            axiosPublic.post('/users', userInfo)
              .then(res => {
                console.log(res);
                
                if (res.data.insertedId) {

                  console.log('user added in the database');
                  toast.success('i am doneee')
                  reset()

                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')


                }
              })




          })

          .catch(err=>console.log(err))


      })
  }
  return (
    <>
      {/* <Helmet>
            <title>Bistro Boss || Register</title>
        </Helmet> */}
      <div className="hero bg-base-200 min-h-screen">

        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(handleRegister)} >
            <div className="card-body">
              <fieldset className="fieldset">

                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" {...register('name', { required: true })} />
                {errors.name && <span>Name is required</span>}

                <label className="label">PhotoURL</label>
                <input type="text" className="input" placeholder="photo url" {...register('photoURL', { required: true })} />
                {errors.photoURL && <span>photourl is required</span>}



                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" {...register('email', { required: true })} />
                {errors.email && <span>Pleaase provide your email</span>}

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" {...register('password',
                  {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/

                  })} />

                {errors.password?.type === 'required' && <span className="text-red-500">Password is required </span>}

                {errors.password?.type === 'minLength' && <span>Minimum length should be 6</span>}
                {errors.password?.type === 'maxLength' && <span>Maximum length should be 20</span>}
                {/* {errors.password?.type==='pattern' && <span className="text-red-500">Password must have at least 1 uppercase letter, 1 lowercase letter, and 1 number.</span>} */}

                <div>Already have an account? <Link to={'/login'} className="link text-blue-400 link-hover ">Log in</Link></div>
                <input type="submit" value={'Sign Up'} className="btn btn-neutral mt-4" />
              </fieldset>
            </div>
          </form>
          <SocialLogin/>
         </div>
        </div>
      </div>
    </>
  );
};

export default Register;
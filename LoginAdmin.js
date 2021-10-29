import Footer from "../Components/footer"
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

const LoginAdmin = () => {

  
  const { register, handleSubmit, } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));
    return ( 
        <>
        <section className="container">

            <div className="admin-login-container">
                <h3 className="pb-3">Sign In</h3>

            <form className="form-container"  onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email*</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
                  />
                  {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password*</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    {...register("Password", { required: true,minLength: 6, maxLength: 12 })}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>       
              </form>
              <div className="">
                  <p className=" text pt-3">
                  
                    forget your password?
                    <Link
                      to="/Auth/Forget-password"
                      className="header-text-pur pl-1"
                    >
                      Click here
                    </Link>
                  </p>
                </div>
            </div>
        </section>
        <Footer/>
        </>


     );
}
 
export default LoginAdmin;

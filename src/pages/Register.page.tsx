import { Link } from "react-router-dom";
import RegisterForm from "../features/auth/components/RegisterForm";

function RegisterPage() {
  return (
    <div className="items-cente flex flex-col justify-center p-2 animate-in slide-in-from-top">
      <h2 className="mb-2 flex items-end justify-start  space-x-1">
        {/* <img src="/favicon.ico" alt="logo" width={25} /> */}
        <span className="text-4xl font-black text-secondary-700">
          TechTitans Media
        </span>
      </h2>
      <p className="text-base text-secondary-600">Create a new account</p>
      <RegisterForm />
      <p className="text-light-4 mt-3 text-sm ">
        already have an account?{" "}
        <Link to="/login" className="text-light-3 font-bold">
          login
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;

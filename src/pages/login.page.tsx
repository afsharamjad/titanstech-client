import { Link } from "react-router-dom";
import LoginForm from "../features/auth/components/LoginForm";

function LoginPage() {
  return (
    <div className="items-cente flex flex-col justify-center p-2 animate-in slide-in-from-top">
      <h2 className="mb-2 flex items-end justify-start  space-x-1">
        {/* <img src="/favicon.ico" alt="logo" width={25} /> */}
        <span className="text-4xl font-black text-secondary-700">
          TechTitans Media
        </span>
      </h2>
      <p className="text-base text-secondary-600">Login to your account</p>

      <LoginForm />
      <p className="text-light-4 mt-3 text-sm ">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold">
          register
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;

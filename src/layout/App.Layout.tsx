import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Navbar from "../ui/Navbar";
import MainCart from "../features/user/components/MainCart";

function AppLayout() {
  const { token } = useAuth();

  return (
    <>
      {!token ? (
        <Navigate to="/login" />
      ) : (
        <section className="container max-w-screen-lg">
          <Navbar />
          <div className="grid grid-cols-12 gap-5 py-12">
            <div className="col-span-4">
              <MainCart />
            </div>
            <div className="col-span-8">
              <Outlet />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default AppLayout;

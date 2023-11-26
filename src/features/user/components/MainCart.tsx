import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import callApi from "../../../services/callApi";
import { FaUser } from "react-icons/fa";
import formatDistance from "date-fns/formatDistance";

export const getUser = async () => {
  const response = await callApi().post(`/users/user`);
  return response;
};

function MainCart() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  if (isLoading) return <p>loading</p>;
  const user = data?.data.user;
  // console.log(user);
  return (
    <div className=" w-full max-w-sm rounded-lg  bg-gray-100  shadow-sm  ">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="space-y- flex flex-col items-center pb-10">
        <div className="mb-3 h-40 w-40 overflow-hidden rounded-full shadow-lg">
          {user.profileUrl ? (
            <img
              className="h-full w-full object-cover"
              src={user.profileUrl}
              alt={user.firstName}
            />
          ) : (
            <div className="flex h-40 items-center justify-center text-8xl text-secondary-700">
              <FaUser />
            </div>
          )}
        </div>
        <h5 className="mb-1 text-xl font-bold  uppercase text-gray-900 dark:text-white">
          {user.firstName}
        </h5>
        <span className="pb-2 text-base font-semibold text-gray-500 dark:text-gray-400">
          {user.email}
        </span>
        <span className="text-sm font-semibold  text-gray-400 ">
          location:
          <span className=" ml-2  text-gray-600">
            {user.location || "not entered "}
          </span>
        </span>
        <span className="text-sm font-semibold text-gray-400 dark:text-gray-400">
          profession:
          <span className=" ml-2  text-gray-600">
            {user.profession || "not entered "}
          </span>
        </span>
        <span className=" pt-4 text-sm font-bold text-gray-500 dark:text-gray-400">
          {formatDistance(new Date(), new Date(user.createdAt), {
            addSuffix: true,
          })}{" "}
          Activity
        </span>
        <div className=" flex space-x-3 md:mt-6">
          <Link to="/add" className="btn btn-primary ">
            Add Post
          </Link>
          <Link to="/edit" className="btn btn-secondary">
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainCart;

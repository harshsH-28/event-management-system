import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    role: "user",
    id: "",
    password: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData.role, formData.id, formData.password);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-bold text-3xl font-semibold m-4 mb-24">
        Event Management System
      </h1>
      <h3 className="text-center text-semibold text-2xl font-semibold m-4 underline">
        Login
      </h3>
      <form
        onSubmit={submitForm}
        className="flex flex-col gap-10 justify-center items-center border-2 border-black w-[50vw] rounded-2xl p-10"
      >
        <div className="flex gap-10 justify-center items-center">
          <label htmlFor="userRole" className="text-2xl font-semibold">
            Select your Role:
          </label>
          <select
            name="role"
            id="userRole"
            value={formData.role}
            onChange={(e) => {
              setFormData({ ...formData, role: e.target.value });
            }}
            className="px-4 py-2 border-black border-2 rounded-lg"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="vendor">Vendor</option>
          </select>
        </div>
        <div className="flex gap-10 justify-center items-center">
          <label htmlFor="id" className="text-2xl font-semibold">
            Unique ID
          </label>
          <input
            type="text"
            placeholder="Enter your ID"
            name="id"
            value={formData.id}
            onChange={(e) => {
              setFormData({ ...formData, id: e.target.value });
            }}
            className="w-[20vw] text-lg border-2 border-black rounded-lg  px-6 py-4"
          />
        </div>
        <div className="flex gap-10 justify-center items-center">
          <label htmlFor="password" className="text-2xl font-semibold">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
            className="w-[20vw] text-lg border-2 border-black rounded-lg px-6 py-4"
          />
        </div>
        <button
          type="submit"
          className="w-48 text-center text-md font-semibold border-[1px] border-black rounded-md px-5 py-3 hover:bg-zinc-900 hover:text-white transition-all ease-in-out"
        >
          Login
        </button>
        <p className="text-lg font-semibold">
          Dont Have a Account? Register{" "}
          <Link to="/register" className="text-blue-600 underline">
            here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

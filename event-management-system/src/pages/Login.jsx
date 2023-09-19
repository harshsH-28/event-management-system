import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    role: "",
    id: "",
    password: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData.role, formData.id, formData.password);
  };

  const handleFieldChange = (e) => {
    const [name, value] = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1 className="text-center text-bold text-3xl font-semibold m-4 mb-40">
        Event Management System
      </h1>
      <form
        onSubmit={submitForm}
        className="flex flex-col gap-10 justify-center items-center"
      >
        <div className="flex gap-10 justify-center items-center">
          <label htmlFor="userRole" className="text-2xl font-semibold">
            Select your Role:
          </label>
          <select
            name="userRole"
            id="userRole"
            onChange={handleFieldChange}
            value={formData.role}
            className="px-4 py-2 border-black border-2 rounded-lg"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="vendor">Vendor</option>
          </select>
        </div>
        <div className="flex gap-10 justify-center items-center">
          <label htmlFor="id" className="text-2xl font-semibold">
            ID
          </label>
          <input
            type="text"
            placeholder="Enter your ID"
            onChange={handleFieldChange}
            value={formData.id}
            className="w-[20vw] text-lg border-2 border-black rounded-lg  px-6 py-4"
          />
        </div>
        <div className="flex gap-10 justify-center items-center">
          <label htmlFor="password" className="text-2xl font-semibold">
            Password
          </label>
          <input
            type="text"
            placeholder="Enter your Password"
            onChange={handleFieldChange}
            value={formData.password}
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
          Don't Have a Account? Register{" "}
          <a href="/register" className="text-blue-600 underline">
            here
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;

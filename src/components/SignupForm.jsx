import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

function SignupForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      username: username.trim(),
      password: password.toString(),
    };
    setUser(newUser);
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  return (
    <div className="flex items-center justify-center h-screen flex-c">
      <form
        className="bg-sky-100 p-5 py-4 rounded-2xl flex flex-col gap-5 items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter a username"
          className="bg-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="relative flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter a password"
            className="bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {showPassword ? (
            <Eye
              className="absolute right-2 cursor-pointer"
              size={18}
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <EyeClosed
              className="absolute right-2 cursor-pointer"
              size={18}
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>

        <button className="cursor-pointer px-5 py-1 bg-black text-white rounded-xl">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;

import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

function LoginForm({ user, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (username === user.username && password === user.password) {
      onLogin(true);
      localStorage.setItem("isLogged", "true");
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-sky-100 p-5 py-4 rounded-2xl flex flex-col gap-5 items-center"
      >
        <input
          type="text"
          placeholder="Username"
          className="bg-white px-2 py-1 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="relative flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-white px-2 py-1 rounded"
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
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

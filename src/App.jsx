import { useState } from "react";
import Editor from "./components/Editor";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function App() {
  const [isLogged, setIsLogged] = useState(() => {
    return localStorage.getItem("isLogged") === "true";
  });
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  function handleSignout() {
    setIsLogged(false);
    setUser(null);
  }

  if (!user) return <SignupForm setUser={setUser} />;

  if (!isLogged) return <LoginForm user={user} onLogin={setIsLogged} />;

  return (
    <div className="p-4 flex flex-col gap-5 items-center bg-stone-100 min-h-[100vh]">
      <Editor name={user.username} onSignout={handleSignout} />
    </div>
  );
}

export default App;

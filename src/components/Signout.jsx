import { LogOut } from "lucide-react";

function Signout({ onSignout }) {
  return (
    <LogOut
      className="cursor-pointer"
      onClick={onSignout}
      size={20}
      color="#9c0000"
    />
  );
}

export default Signout;

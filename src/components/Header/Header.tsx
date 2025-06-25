import { useAuth } from "@/hoooks/useAuth";

const Header = () => {
  const { user } = useAuth();
  console.log(user);
  return <div className="h-[60px] bg-casino-dark">Header</div>;
};

export default Header;

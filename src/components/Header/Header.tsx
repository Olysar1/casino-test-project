import { useAuth } from "@/hoooks/useAuth";

const Header = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="h-[60px] bg-casino-dark">
      <div className="w-full p-[10px] md:w-[700px] xl:w-[1200px] mx-auto flex justify-between">
        <span>test</span>
        <span>test</span>
      </div>
    </div>
  );
};

export default Header;

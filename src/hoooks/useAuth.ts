import { fetchUser } from "@/api/auth";
import { use } from "react";

export const useAuth = () => {
  // to mock users async authentification
  const user = use(fetchUser());

  return { user };
};

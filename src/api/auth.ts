interface IUser {
  id: string;
  name: string;
  email: string;
  balance: number;
}

export const fetchUser = (): Promise<IUser> => {
  // mock user fetch delay
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        id: "1",
        name: "Test User",
        email: "testmail@mail.com",
        balance: 500,
      });
    }, 1000)
  );
};

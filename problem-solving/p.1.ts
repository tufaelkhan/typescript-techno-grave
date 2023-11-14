{
  type User = {
    id: number;
    name: string;
  };
  const users: Array<User> = [
    {
      id: 11,
      name: "tufael khan",
    },
    {
      id: 12,
      name: "jahid khan",
    },
    {
      id: 13,
      name: "sujoy das",
    },
  ];

  // T is array of object
  const getPropertyFromArray = <T, K extends keyof T>(
    array: T[],
    key: K
  ): T[K][] => {
    return array.map((obj) => obj[key]);
  };
  console.log("array value", getPropertyFromArray(users, "name"));
}

{
  type User = {
    id: number;
    name: string;
    marrid: boolean;
  };
  const users: Array<User> = [
    {
      id: 11,
      name: "tufael khan",
      marrid: false
    },
    {
      id: 12,
      name: "jahid khan",
      marrid: true
    },
    {
      id: 13,
      name: "sujoy das",
      marrid: false
    },
    {
      id: 15,
      name: "ariful islam",
      marrid: true
    },
  ];

  // T is array of object
  const getPropertyFromArray = <T, K extends keyof T>(
    array: T[],
    key: K
  ): T[K][] => {
    return array.map((obj) => obj[key]);
  };
  console.log("array value", getPropertyFromArray(users, "marrid"));


}

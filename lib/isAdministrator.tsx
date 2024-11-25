export const isAdministrator = (userId: string | null | undefined) => {
  const administrators = [
    process.env.NEXT_PUBLIC_ADMINISTRATOR_ID, 
    process.env.NEXT_PUBLIC_ADMINISTRATOR_ID1
  ];

  return administrators.includes(userId as string);
};


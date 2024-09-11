let userDatabaseLogin = {
  users: [
    {
      fullname: "Anton Karlsson",
      username: "antkarl",
      password: "password123",
    },
    {
      fullname: "Måns Wikman",
      username: "manswikman",
      password: "gunga123",
    },
    {
      fullname: "Frida Wikman",
      username: "fridawikman",
      password: "losenord123",
    },
    {
      fullname: "Anders Karlsson",
      username: "qupex",
      password: "vetinte123",
    },
    {
      fullname: "John Doe",
      username: "9gag",
      password: "nooneknows",
    },
  ],
};

export default defineEventHandler(async (event) => {
  if (event.method === "POST") {
    const body = await readBody(event);
    if (body.fullname && body.username && body.password) {
      userDatabaseLogin.users.push({
        fullname: body.fullname,
        username: body.username,
        password: body.password,
      });
      return {
        users: userDatabaseLogin.users,
      };
    } else {
      return { error: "Invalid input" };
    }
  } else if (event.method === "GET") {
    return userDatabaseLogin;
  } else if (event.method === "DELETE") {
  }
});

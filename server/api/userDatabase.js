let userDatabaseLogin = {
  users: [
    {
      fullname: "Anton Karlsson",
      username: "antkarl",
      password: "password123",
      url: "antkarl",
      page: {
        presentation: "Hej och hå detta är anton karlsson",
        followers: 10,
        following: 25,
      },
    },
    {
      fullname: "Måns Wikman",
      username: "manswikman",
      password: "gunga123",
      url: "manswikman",
      page: {
        presentation: "Kommer inte på vad jag ska skriva. Måns Wikman",
        followers: 123,
        following: 453,
      },
    },
    {
      fullname: "Frida Wikman",
      username: "fridawikman",
      password: "losenord123",
      url: "fridawikman",
      page: {
        presentation: "Något annat Frida Wikman",
        followers: 89,
        following: 56,
      },
    },
    {
      fullname: "Anders Karlsson",
      username: "qupex",
      password: "vetinte123",
      url: "qupex",
      page: {
        presentation: "Nu skriver jag en rad. Anders Karlsson",
        followers: 987,
        following: 12,
      },
    },
    {
      fullname: "John Doe",
      username: "9gag",
      password: "nooneknows",
      url: "9gag",
      page: {
        presentation: "This is John Doe speaking",
        followers: 236432,
        following: 7657,
      },
    },
    {
      fullname: "Some name",
      username: "memezar",
      password: "meme",
      url: "memezar",
      page: {
        presentation: "Official page of memezar",
        followers: 99999,
        following: 456,
      },
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
        url: body.username,
      });
      return {
        users: userDatabaseLogin.users,
      };
    } else {
      return { error: "Invalid input or duplicate username" };
    }
  } else if (event.method === "GET") {
    return userDatabaseLogin;
  }
});

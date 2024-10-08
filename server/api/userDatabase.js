let userDatabaseLogin = {
  users: [
    {
      fullname: "Anton Karlsson",
      username: "antkarl",
      password: "password123",
      profilePic:
        "https://thumbs.dreamstime.com/b/tecknad-film-ninja-34738465.jpg",
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
      profilePic:
        "https://m.media-amazon.com/images/I/91gbfULvW0L._AC_UF894,1000_QL80_.jpg",
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
      profilePic:
        "https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D197055252W7055H10000/views/1,width=1200,height=630,appearanceId=839,backgroundColor=F2F2F2/bokstav-f-klistermaerke.jpg",
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
      profilePic:
        "https://media.istockphoto.com/id/1173257758/sv/vektor/upps%C3%A4ttning-av-olika-tattoo-flash.jpg?s=612x612&w=0&k=20&c=bGIXc5ImN4WXv4gVxiodyPyiGC3_Gla61FDycQAByMw=",
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
      profilePic:
        "https://play-lh.googleusercontent.com/AbCuaWJdYD4BaSKZ5tk5xriGE8sfLERTOrIGgUhPK9vTFpjZgjODK-2nHBIpPh3Ojw",
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
      profilePic:
        "data:image/png;base64,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",
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
        page: {
          presentation: body.presentation,
        },
      });
      return {
        users: userDatabaseLogin.users,
      };
    } else {
      return { error: "Invalid input or duplicate username" };
    }
  } else if (event.method === "GET") {
    return userDatabaseLogin;
  } else if (event.method === "PUT") {
    const body = await readBody(event);

    const userToUpdate = userDatabaseLogin.users.find(
      (user) => user.username === body.username
    );

    if (userToUpdate) {
      userToUpdate.page.presentation = body.presentation;
      console.log("Succé!!");
    }
  }
});

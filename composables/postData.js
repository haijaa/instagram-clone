import postPicture from "../assets/images/picture-post.png";

const postData = {
  posts: [
    {
      user: "antkarl",
      caption: "Just another day in paradise.",
      picture: postPicture,
      id: 1,
      likes: 1354,
    },
    {
      user: "fridawikman",
      caption: "Hihi look at this.",
      picture: postPicture,
      id: 2,
      likes: 434,
    },
    {
      user: "manswikman",
      caption: "New day new swing.",
      picture: postPicture,
      id: 3,
      likes: 6567,
    },
    {
      user: "qupex",
      caption: "A little vacation.",
      picture: postPicture,
      id: 4,
      likes: 3244,
    },
    {
      user: "livskrafter",
      caption: "Amazing view.",
      picture: postPicture,
      id: 5,
      likes: 899,
    },
    {
      user: "memezar",
      caption: "would you look at this",
      picture: postPicture,
      id: 6,
      likes: 6545,
    },
    {
      user: "9gag",
      caption: "usch!",
      picture: postPicture,
      id: 7,
      likes: 4552,
    },
  ],
};

export const usePost = () => {
  return postData;
};

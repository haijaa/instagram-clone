import postPicture from "../assets/images/picture-post.png";

const postData = {
  users: [
    {
      id: 1,
      user: "antkarl",
      posts: [
        {
          caption: "Just another day in paradise.",
          picture: postPicture,
          likes: 1354,
        },
        {
          caption: "Hey there",
          picture: postPicture,
          likes: 99,
        },
        {
          caption: "alot of sun here",
          picture: postPicture,
          likes: 2139,
        },
      ],
    },
    {
      id: 2,
      user: "fridawikman",
      posts: [
        {
          caption: "Hihi look at this.",
          picture: postPicture,
          likes: 434,
        },
      ],
    },
    {
      id: 3,
      user: "manswikman",
      posts: [
        {
          caption: "New day new swing.",
          picture: postPicture,
          likes: 6567,
        },
      ],
    },
    {
      id: 4,
      user: "qupex",
      posts: [
        {
          caption: "A little vacation.",
          picture: postPicture,
          likes: 3244,
        },
      ],
    },
    {
      id: 5,
      user: "livskrafter",
      posts: [
        {
          caption: "Amazing view.",
          picture: postPicture,
          likes: 899,
        },
      ],
    },
    {
      id: 6,
      user: "memezar",
      posts: [
        {
          caption: "would you look at this",
          picture: postPicture,
          likes: 6545,
        },
      ],
    },
    {
      id: 7,
      user: "9gag",
      posts: [
        {
          caption: "usch!",
          picture: postPicture,
          likes: 4552,
        },
      ],
    },
  ],
};

export const usePost = () => {
  return postData;
};

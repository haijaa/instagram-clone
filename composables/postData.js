import postPicture from "../assets/images/picture-post.png";
import profileImage from "../assets/images/elefant.png";

const postData = {
  users: [
    {
      id: 1,
      user: "antkarl",
      profilePic: profileImage,
      posts: [
        {
          caption: "Just another day in paradise.",
          picture: postPicture,
          likes: 1354,
        },
        {
          caption: "Same pic different day",
          picture: postPicture,
          likes: 47,
        },
      ],
    },
    {
      id: 2,
      user: "fridawikman",
      profilePic: profileImage,
      posts: [
        {
          caption: "Hihi look at this.",
          picture: postPicture,
          likes: 434,
        },
        {
          caption: "Yepp, new pic",
          picture: postPicture,
          likes: 12,
        },
      ],
    },
    {
      id: 3,
      user: "manswikman",
      profilePic: profileImage,
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
      profilePic: profileImage,
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
      profilePic: profileImage,
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
      profilePic: profileImage,
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
      profilePic: profileImage,
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

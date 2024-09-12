import { inject } from "vue";

const sharedState = inject("sharedState");

let commentsOnPosts = {
  usercomments: [
    {
      user: "manswikman",
      comment: "hej hej",
    },
    {
      user: "antkarl",
      comment: "Wow snygg bild",
    },
  ],
};

export default defineEventHandler(async (event) => {
  if (event.method === "POST") {
    const body = await readBody(event);
    if (body.user && body.comment) {
      commentsOnPosts.usercomments.push({
        user: body.user,
        comment: body.comment,
      });
      return {
        usercomments: commentsOnPosts.usercomments,
      };
    }
  } else if (event.method === "GET") {
    return commentsOnPosts;
  }
});

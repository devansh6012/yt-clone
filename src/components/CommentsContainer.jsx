import React from "react";

const commentsData = [
  {
    name: "Dev",
    text: "Lorem ipsum, dolor sit amet",
    replies: [
      {
        name: "Dev",
        text: "Lorem ipsum, dolor sit amet",
        replies: [
          {
            name: "Dev",
            text: "Lorem ipsum, dolor sit amet",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Dev",
    text: "Lorem ipsum, dolor sit amet",
    replies: [],
  },
  {
    name: "Dev",
    text: "Lorem ipsum, dolor sit amet",
    replies: [
      {
        name: "Dev",
        text: "Lorem ipsum, dolor sit amet",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="src"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JnQ9na8gQRbuCAWGniTCqlVbcKSHW8U_Zw&s"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border-l ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;

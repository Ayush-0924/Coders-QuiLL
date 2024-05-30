import { Alert, Button, Textarea } from "flowbite-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CommentSection({ postId }) {
  const { currentuser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200) {
      return;
    }
    try {
      const res = await fetch("/api/comment/create", {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentuser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment("");
        setErrorMessage(null);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div>
      {currentuser ? (
        <div className="flex items-center gap-1 my-5 text-gray-500 text-sm">
          <p>Signed in as:</p>
          <img
            className="h-5 w-5 object-cover rounded-full"
            src={currentuser.profilePicture}
            alt=""
          />
          <Link
            to={"/dashboard?tab=profile"}
            className="text-xs text-cyan-600 hover:underline"
          >
            @{currentuser.username}
          </Link>
        </div>
      ) : (
        <div className="text-sm text-teal-500 my-5 flex gap-1">
          You must be signed in to comment.
          <Link className="text-blue-500 hover:underline" to={"/sign-in"}>
            Sign In
          </Link>
        </div>
      )}
      {currentuser && (
        <form
          onSubmit={handleOnSubmit}
          className="border border-teal-500 rounded-md p-3"
        >
          <Textarea
            placeholder="Add a comment..."
            rows="3"
            maxLength="200"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <div className="flex justify-between items-center mt-5">
            <p className="text-gray-500 text-xs">
              {" "}
              {200 - comment.length} characters remaining
            </p>
            <Button
              className="bg-gradient-to-r from-indigo-600 via-purple-500 to-red-400"
              outline
              type="submit"
            >
              Submit
            </Button>
          </div>
          {errorMessage && (
            <Alert color="failure" className="mt-5">
              {errorMessage}
            </Alert>
           )} 
        </form>
      )}
    </div>
  );
}

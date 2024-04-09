import { useState } from "react";
import { COMMENTS, RETWEETS, LIKES, SHARE } from "../images";

export default function Tweet(tweet) {
  const [title, settitle] = useState(tweet.content);

  return (
    <div className="mt-3 px-3" style={{ borderBottom: "2px solid whitesmoke" }}>
      <p className="mx-5" style={{ fontSize: 14, fontWeight: "600px" }}>
        You might like! <span style={{ color: "blue" }}>See more!</span>
      </p>
      <div className="d-flex">
        <img
          src={tweet.img}
          alt="user_photo"
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
        <div className="mx-3">
          <p className="" style={{ fontWeight: 600 }}>
            {tweet.authorName}{" "}
            <span style={{ color: "gray" }}>{tweet.authorUsername}</span>
          </p>
          <p>
            {tweet.content.length > 200
              ? tweet.content.slice(0, 200) + "..."
              : tweet.content}
          </p>
        </div>
      </div>

      <div
        className="d-flex m-auto justify-content-between"
        style={{ width: "80%" }}
      >
        {/*  */}
        <div className="d-flex">
          <div className="" style={{ width: 20, height: 20 }}>
            {COMMENTS}
          </div>
          <p className="px-1">{tweet.replies}</p>
        </div>
        <div className="d-flex  ">
          <div className="" style={{ width: 20, height: 20 }}>
            {RETWEETS}
          </div>
          <p className="px-1">{tweet.retweets}</p>
        </div>
        <div className="d-flex  ">
          <div className="" style={{ width: 20, height: 20 }}>
            {LIKES}
          </div>
          <p className="px-1">{tweet.likes}</p>
        </div>
        <div className="d-flex  ">
          <div className="" style={{ width: 20, height: 20 }}>
            {SHARE}
          </div>
        </div>
      </div>
    </div>
  );
}

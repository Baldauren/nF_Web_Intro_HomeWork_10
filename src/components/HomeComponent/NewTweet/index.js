import { PROFILE_IMG_PATH } from "../images";

export default function NewTweet() {
  return (
    <div className="p-3" style={{ borderBottom: "2px solid whitesmoke" }}>
      <img
        src={PROFILE_IMG_PATH}
        style={{ width: "50px", height: "50", borderRadius: "50px" }}
        alt="img"
      />
      <input
        type="text"
        placeholder="Whats happening?"
        style={{ border: "none", fontSize: "18px", outline: "none" }}
        className="mx-3"
      />
    </div>
  );
}

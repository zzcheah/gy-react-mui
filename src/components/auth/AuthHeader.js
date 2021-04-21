import { Link } from "react-router-dom";

const AuthHeader = () => {
  return (
    <header>
      <div
        style={{
          position: "absolute",
          padding: "32px 40px",
          right: "0px",
        }}
      >
        <Link to="/">
          <img src={"logo.png"} alt="logo" height="64px" />
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;

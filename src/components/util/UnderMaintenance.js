import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const UnderMaintenance = () => {
  const [counter, setCounter] = useState(6);

  useEffect(() => {
    const interval = setInterval(
      () => setCounter((counter) => counter - 1),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (counter < 1) return <Redirect to="/dashboard" />;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        minHeight: "720px",
      }}
    >
      <Typography variant="h5" align="center" color="textSecondary">
        This site is under maintanance. <br />
        You will be redirected in {counter} seconds.
      </Typography>
      <img
        src="images/maintenance.png"
        alt="maintenance"
        style={{ maxWidth: "80%", width: "500px", paddingTop: "60px" }}
      />
    </div>
  );
};

export default UnderMaintenance;

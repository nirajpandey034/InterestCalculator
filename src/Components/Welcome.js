import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  let navigate = useNavigate();
  return (
    <div>
      <div>Welcome To our Calculator world.</div>
      {/* <button style={{cursor:'pointer'}} onClick={() => navigate("interest-calculator")}>
        Let's Calculate Interests
      </button> */}
    </div>
  );
}

export default Welcome;

import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  let navigate = useNavigate();
  return (
    <div>
      <div>Welcome to our tool world.</div>
    </div>
  );
}

export default Welcome;

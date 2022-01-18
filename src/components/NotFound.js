import React from "react";
import { Link, Navigate } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>
        Nothing is here click here to go to <Link to="/">Dashboard</Link>
      </h2>
    </div>
  );
}

export default NotFound;

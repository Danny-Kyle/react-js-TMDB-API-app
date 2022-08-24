import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const [time, setTime] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
      if (time === 0) {
        navigate("/", { replace: true });
      }
    }, 1000);
  });
  return (
    <div className="bg-gray-700 h-screen flex flex-col items-center justify-center text-8xl font-bold">
      <div className="text-red-600 ">404</div>
      <div className="text-4xl">Page Not Found</div>
      <div className="text-4xl">Redirecting to home page in {time} seconds</div>
    </div>
  );
};

export default ErrorPage;

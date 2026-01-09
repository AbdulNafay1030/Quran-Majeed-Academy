import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Card = ({ img, className = "", description, id, title }) => {
  return (
    <Link to={`/courses/${id}`}>
      <div
        className={`bg-white max-w-sm w-full rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300 h-[400px] ${className}`}
      >
        <img src={img} alt={title} className="w-full h-48 object-cover" />

        <div className="p-4 flex flex-col h-[calc(400px-192px)]">
          <h1 className="text-lg font-semibold mb-2">{title}</h1>

          <p className="text-gray-700 text-sm sm:text-base flex-grow">
            {description}
          </p>

          <Button className="mt-4 bg-transparent border border-[#15803D] hover:bg-[#15803D]/10 text-black px-8 py-3 rounded-lg">
            Enroll Now
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default Card;

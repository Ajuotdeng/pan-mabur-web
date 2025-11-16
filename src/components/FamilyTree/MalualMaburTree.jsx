import React from "react";
import { Link } from "react-router-dom";

export default function MalualMaburTree() {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-10 bg-gray-50">
      <h1 className="mb-6 text-3xl font-bold text-green-700 md:text-4xl">
        Descendants of Malual Mabur
      </h1>

      <div className="flex flex-col space-y-3 text-center">
        <Link to="/malual/mabur-malual" className="text-green-700 hover:underline">
          Mabur Malual
        </Link>
        <Link to="/malual/mathiang-malual" className="text-green-700 hover:underline">
          Mathiang Malual
        </Link>
        <Link to="/malual/mawut-malual" className="text-green-700 hover:underline">
          Mawut Malual
        </Link>
        <Link to="/malual/adau-malual" className="text-green-700 hover:underline">
          Adau Malual
        </Link>
        <Link to="/malual/chol-malual" className="text-green-700 hover:underline">
          Chol Malual
        </Link>
        <Link to="/malual/deng-malual" className="text-green-700 hover:underline">
          Deng Malual
        </Link>
        <Link to="/malual/magot-malual" className="text-green-700 hover:underline">
          Magot Malual
        </Link>
        <Link to="/malual/akoi-malual" className="text-green-700 hover:underline">
          Akoi Malual
        </Link>
      </div>
    </div>
  );
}

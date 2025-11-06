import React from "react";
import { Link } from "react-router-dom";

export default function MalualMaburMain() {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-10 bg-gray-50">
      <h1 className="mb-6 text-3xl font-bold text-green-700 md:text-4xl">
        Descendants of Malual Mabur
      </h1>

      <div className="flex flex-col space-y-3 text-center">
        <Link to="/familytree/malual-mabur/mabur-malual" className="text-green-700 hover:underline">
          Mabur Malual
        </Link>
        <Link to="/familytree/malual-mabur/mathiang-malual" className="text-green-700 hover:underline">
          Mathiang Malual
        </Link>
        <Link to="/familytree/malual-mabur/mawut-malual" className="text-green-700 hover:underline">
          Mawut Malual
        </Link>
        <Link to="/familytree/malual-mabur/chol-malual" className="text-green-700 hover:underline">
          Chol Malual
        </Link>
        <Link to="/familytree/malual-mabur/deng-malual" className="text-green-700 hover:underline">
          Deng Malual
        </Link>
        <Link to="/familytree/malual-mabur/magot-malual" className="text-green-700 hover:underline">
          Magot Malual
        </Link>
        <Link to="/familytree/malual-mabur/akoi-malual" className="text-green-700 hover:underline">
          Akoi Malual
        </Link>
      </div>

      <div className="mt-6">
        <Link to="/familytree" className="text-green-700 hover:underline">
          ← Back to Mabur Ajuot
        </Link>
      </div>
    </div>
  );
}

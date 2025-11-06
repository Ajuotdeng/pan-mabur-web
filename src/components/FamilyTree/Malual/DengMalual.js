import React, { useState, useRef, useEffect } from "react";
import Tree from "react-d3-tree";
import { Link } from "react-router-dom";

const data = {
  name: "Deng Malual",
  attributes: { title: "Grandson" },
  children: [
    {
      name: "Martha Nyabiel Kak",
      attributes: { title: "Wife of Deng Malual" },
      children: [
        { name: "Awak Deng", attributes: { title: "Great Granddaughter" } },
        { name: "Adhieu Deng", attributes: { title: "Great Granddaughter" } },
        { name: "Mathiang Deng", attributes: { title: "Great Grandson" } },
        { name: "Bior Deng", attributes: { title: "Great Grandson" } },
        { name: "Nyanman Deng", attributes: { title: "Great Granddaughter" } },
        { name: "Kak Deng", attributes: { title: "Great Grandson" } },
        {
          name: "Nyandhier Deng",
          attributes: { title: "Great Granddaughter" },
        },
        { name: "Malual Deng", attributes: { title: "Great Grandson" } },
      ],
    },
    {
      name: "Nyanwut Chol Awuol",
      attributes: { title: "Wife of Deng Malual" },
      children: [
        { name: "Nyantet Deng", attributes: { title: "Great Granddaughter" } },
        { name: "Mabur Deng", attributes: { title: "Great Grandson" } },
        { name: "Akol Deng", attributes: { title: "Great Grandson" } },
        { name: "Nyibol Deng", attributes: { title: "Great Granddaughter" } },
        { name: "Angony Deng", attributes: { title: "Great Grandson" } },
        { name: "Akon Deng", attributes: { title: "Great Granddaughter" } },
        { name: "Awak Deng", attributes: { title: "Great Granddaughter" } },
      ],
    },

    {
      name: "Amac wuor",
      attributes: { title: "Wife of Deng Malual" },
      children: [
        { name: "Ajuot Deng", attributes: { title: "Great Grandson" } },
        { name: "Akech Deng", attributes: { title: "Great Granddaughter" } },
      ],
    },
  ],
};

export default function DengMalual() {
  const treeRef = useRef(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const updateLayout = () => {
      if (treeRef.current) {
        const { width } = treeRef.current.getBoundingClientRect();
        setTranslate({ x: width / 2, y: 80 });
        setZoom(window.innerWidth < 768 ? 0.6 : 0.9);
      }
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-10 bg-gray-50">
      <h1 className="mb-6 text-3xl font-bold text-green-700">
        Descendants of Deng Malual
      </h1>

      <div
        ref={treeRef}
        className="w-full h-[600px] bg-white border rounded-lg shadow-md overflow-hidden"
      >
        {translate.x > 0 && (
          <Tree
            data={data}
            translate={translate}
            orientation="vertical"
            zoomable
            collapsible
            zoom={zoom}
            nodeSize={{ x: 220, y: 100 }}
          />
        )}
      </div>

      <div className="mt-6">
        <Link
          to="/familytree/malual-mabur"
          className="text-blue-600 hover:underline"
        >
          Back to Malual Mabur
        </Link>
      </div>
    </div>
  );
}

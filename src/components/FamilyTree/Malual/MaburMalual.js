import React, { useState, useRef, useEffect } from "react";
import Tree from "react-d3-tree";
import { Link } from "react-router-dom";

const data = {
  name: "Mabur Malual",
  attributes: { title: "Grandson" },
  children: [
    {
      name: "Aluk Chol Atem",
      attributes: { title: "Wife of Mabur Malual" },
      children: [
        { name: "Deng Mabur", attributes: { title: "Great Grandson" } },
        { name: "Magai Mabur", attributes: { title: "Great Grandson" } },
        { name: "Awak Mabur", attributes: { title: "Great Grandson" } },
        { name: "Nyantet Mabur", attributes: { title: "Great Granddaughter" } },
      ],
    },
    {
      name: "Amou Kuir Duot",
      attributes: { title: "Wife of Mabur Malual" },
      children: [
        { name: "Chol Mabur", attributes: { title: "Great Grandson" } },
        { name: "Lual Mabur", attributes: { title: "Great Grandson" } },
        { name: "Nyabel Mabur", attributes: { title: "Great Granddaughter" } },
        { name: "Deng Mabur", attributes: { title: "Great Grandson" } },
        { name: "Kuir Mabur", attributes: { title: "Great Granddaughter" } },
      ],
    },
  ],
};

export default function MaburMalual() {
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
        Descendants of Mabur Malual
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

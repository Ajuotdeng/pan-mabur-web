import React, { useState, useRef, useEffect } from "react";
import Tree from "react-d3-tree";
import { Link } from "react-router-dom";

const data = {
  name: "Chol Malual",
  attributes: { title: "Grandson" },
  children: [
    {
      name: "Nyanyath Bol",
      attributes: { title: "Wife of Chol Malual" },
      children: [
        { name: "Awak Chol", attributes: { title: "Great Granddaughter" } },
        { name: "Malual Chol", attributes: { title: "Great Grandson" } },
        { name: "Ajok Chol", attributes: { title: "Great Granddaughter" } },
        { name: "Akol Chol", attributes: { title: "Great Grandson" } },
        { name: "Nyantet Chol", attributes: { title: "Great Granddaughter" } },
        { name: "Nyabel Chol", attributes: { title: "Great Granddaughter" } },
        { name: "Mabur Chol", attributes: { title: "Great Grandson" } },
        { name: "Athiei Chol", attributes: { title: "Great Granddaughter" } },
        { name: "Sarah Chol", attributes: { title: "Great Granddaughter" } },
        { name: "Adau Chol", attributes: { title: "Great Granddaughter" } },
        { name: "Deng Chol", attributes: { title: "Great Grandson" } },
      ],
    },
    {
      name: "Atong Alak Kuot",
      attributes: { title: "Wife of Chol Malual" },
      children: [
        { name: "Athiei Chol", attributes: { title: "Great Grandson" } },
        { name: "Mabur Chol", attributes: { title: "Great Grandson" } },
      ],
    },
  ],
};

export default function CholMalual() {
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
        Descendants of Chol Malual
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

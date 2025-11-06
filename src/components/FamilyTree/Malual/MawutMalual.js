import React, { useState, useRef, useEffect } from "react";
import Tree from "react-d3-tree";
import { Link } from "react-router-dom";

const data = {
  name: "Mawut Malual",
  attributes: { title: "Grandson" },
  children: [
    {
      name: "Agot Athor Jok",
      attributes: { title: "Wife of Mawut Malual" },
      children: [
        { name: "Nyabel Mawut", attributes: { title: "Great Granddaughter" } },
        { name: "Ajok Mawut", attributes: { title: "Great Granddaughter" } },
        { name: "Malual Mawut", attributes: { title: "Great Grandson" } },
        { name: "Akol Mawut", attributes: { title: "Great Grandson" } },
      ],
    },
    {
      name: "Nyamou Malek Piok",
      attributes: { title: "Wife of Mawut Malual" },
      children: [
        { name: "Awak Mawut", attributes: { title: "Great Granddaughter" } },
        { name: "Deng Mawut", attributes: { title: "Great Grandson" } },
        { name: "Akol Mawut", attributes: { title: "Great Grandson" } },
        { name: "Tong Mawut", attributes: { title: "Great Granddaughter" } },
        { name: "Malek Mawut", attributes: { title: "Great Grandson" } },
        { name: "Nyalou Mawut", attributes: { title: "Great Granddaughter" } },
        { name: "Ngor Mawut", attributes: { title: "Great Grandson" } },
        {
          name: "Nyandiit Mawut",
          attributes: { title: "Great Granddaughter" },
        },
        { name: "Nyabel Mawut", attributes: { title: "Great Granddaughter" } },
      ],
    },
    {
      name: "Ayak Yony Magany",
      attributes: { title: "Wife of Mawut Malual" },
      children: [
        { name: "Achol Mawut", attributes: { title: "Great Granddaughter" } },
        { name: "Awak Mawut", attributes: { title: "Great Granddaughter" } },
        { name: "Chokur Mawut", attributes: { title: "Great Granddaughter" } },
        { name: "Kuir Mawut", attributes: { title: "Great Granddaughter" } },
      ],
    },
    {
      name: "Nyanliet Aguek Mabior",
      attributes: { title: "Wife of Mawut Malual" },
      children: [
        { name: "Apat Mawut", attributes: { title: "Great Granddaughter" } },
        { name: "Mabur Mawut", attributes: { title: "Great Grandson" } },
        { name: "Mabior Mawut", attributes: { title: "Great Grandson" } },
        { name: "Dut Mawut", attributes: { title: "Great Grandson" } },
        { name: "Nyabel Mawut", attributes: { title: "Great Granddaughter" } },
      ],
    },
  ],
};

export default function MawutMalual() {
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
        Descendants of Mawut Malual
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

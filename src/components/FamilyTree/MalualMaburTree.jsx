import React, { useState, useRef, useEffect } from "react";
import Tree from "react-d3-tree";
import { Link } from "react-router-dom";

export default function MalualMaburTree() {
  const treeRef = useRef(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const data = {
    name: "Malual Mabur",
    attributes: { title: "Son of Mabur Ajuot" },
    children: [
      {
        name: "Mathiang Malual",
        attributes: { title: "Grandson" },
        children: [
          { name: "Mabur Mathiang", attributes: { title: "Great Grandson" } },
          { name: "Malual Mathiang", attributes: { title: "Great Grandson" } },
          { name: "Adwai Mathiang", attributes: { title: "Great Grandson" } },
          { name: "Nyantet Mathiang", attributes: { title: "Great Granddaughter" } },
          { name: "Deng Mathiang", attributes: { title: "Great Grandson" } },
        ],
      },
      {
        name: "Mabur Malual",
        attributes: { title: "Grandson" },
        children: [
          { name: "Deng Mabur", attributes: { title: "Great Grandson" } },
          { name: "Magai Mabur", attributes: { title: "Great Grandson" } },
          { name: "Awak Mabur", attributes: { title: "Great Grandson" } },
          { name: "Nyantet Mabur", attributes: { title: "Great Granddaughter" } },
          { name: "Chol Mabur", attributes: { title: "Great Grandson" } },
          { name: "Lual Mabur", attributes: { title: "Great Grandson" } },
          { name: "Nyabel Mabur", attributes: { title: "Great Granddaughter" } },
          { name: "Dengthii Mabur", attributes: { title: "Great Grandson" } },
          { name: "Kuir Mabur", attributes: { title: "Great Granddaughter" } },
        ],
      },
      {
        name: "Mawut Malual",
        attributes: { title: "Grandson" },
        children: [
          {
            name: "Nyaluak Mawut",
            attributes: { title: "Wife of Mawut Malual" },
            children: [
              { name: "Nyabel Mawut", attributes: { title: "Great Granddaughter" } },
              { name: "Akol Mawut", attributes: { title: "Great Grandson" } },
              { name: "Malual Mawut", attributes: { title: "Great Grandson" } },
              { name: "Awak Mawut", attributes: { title: "Great Granddaughter" } },
              { name: "Deng Mawut", attributes: { title: "Great Grandson" } },
              { name: "Tong Mawut", attributes: { title: "Great Grandson" } },
              { name: "Nyanlou Mawut", attributes: { title: "Great Granddaughter" } },
              { name: "Nyandiit Mawut", attributes: { title: "Great Granddaughter" } },
              { name: "Mabior Mawut", attributes: { title: "Great Grandson" } },
              { name: "Mabur Mawut", attributes: { title: "Great Grandson" } },
            ],
          },
        ],
      },
      {
        name: "Chol Malual",
        attributes: { title: "Grandson" },
        children: [
          {
            name: "Atong Alak",
            attributes: { title: "Wife of Chol Malual" },
            children: [
              { name: "Athiei Chol", attributes: { title: "Great Grandson" } },
              { name: "Mabur Chol", attributes: { title: "Great Grandson" } },
            ],
          },
          // Optional: other children not by Atong, if any
          { name: "Awak Chol", attributes: { title: "Great Granddaughter" } },
          { name: "Malual Chol", attributes: { title: "Great Grandson" } },
          { name: "Ajok Chol", attributes: { title: "Great Grandson" } },
          { name: "Nyantet Chol", attributes: { title: "Great Granddaughter" } },
          { name: "Nyabel Chol", attributes: { title: "Great Granddaughter" } },
          { name: "Sarah Chol", attributes: { title: "Great Granddaughter" } },
          { name: "Adau Chol", attributes: { title: "Great Granddaughter" } },
          { name: "Deng Chol", attributes: { title: "Great Grandson" } },
        ],
      },
    ],
  };

  useEffect(() => {
    const updateLayout = () => {
      if (treeRef.current) {
        const { width } = treeRef.current.getBoundingClientRect();
        const isMobile = window.innerWidth < 768;
        setTranslate({ x: width / 2, y: isMobile ? 60 : 100 });
        setZoom(isMobile ? 0.6 : 0.9);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-10 bg-gray-50">
      {/* Breadcrumb */}
      <div className="w-full max-w-5xl mb-4 text-sm text-gray-600">
        <Link to="/" className="text-green-700 hover:underline">
          Home
        </Link>{" "}
        › Malual Mabur Lineage
      </div>

      {/* Title */}
      <div className="max-w-5xl mx-auto mb-6 text-center">
        <h1 className="text-3xl font-bold text-green-700 md:text-4xl">
          Descendants of Malual Mabur
        </h1>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          Visual representation of Malual Mabur’s lineage.
        </p>
      </div>

      {/* Tree Container */}
      <div
        ref={treeRef}
        className="w-full h-[550px] md:h-[650px] bg-white border rounded-lg shadow-md overflow-hidden"
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
            styles={{
              links: { stroke: "#4CAF50", strokeWidth: 2 },
              nodes: {
                node: {
                  circle: { fill: "#4CAF50", stroke: "#2e7d32", strokeWidth: 2 },
                  name: { fill: "#333", fontWeight: 600 },
                  attributes: { fill: "#666" },
                },
                leafNode: {
                  circle: { fill: "#81C784", stroke: "#388E3C", strokeWidth: 2 },
                  name: { fill: "#333" },
                  attributes: { fill: "#666" },
                },
              },
            }}
          />
        )}
      </div>

      {/* Back Button */}
      <div className="mt-6">
        <Link
          to="/"
          className="inline-block px-5 py-2 text-white bg-green-700 rounded-md hover:bg-green-800 transition"
        >
          ← Back to Main Lineage
        </Link>
      </div>
    </div>
  );
}

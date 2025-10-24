import React, { useState, useRef, useEffect } from "react";
import Tree from "react-d3-tree";

export default function FamilyTree() {
  const treeContainer = useRef(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  // Corrected and structured family data
  const familyData = {
    name: "Mabur Ajuot",
    attributes: { title: "Ancestral Root" },
    children: [
      {
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
            attributes: { title: "Son of Malual Mabur" },
            children: [
              {
                name: "Deng Mabur",
                attributes: { title: "Grandson" },
                children: [
                  { name: "Ajuot Deng", attributes: { title: "Great Grandson" } },
                  { name: "Malual Deng", attributes: { title: "Great Grandson" } },
                  { name: "Nyantet Deng", attributes: { title: "Great Granddaughter" } },
                  { name: "Marial Deng", attributes: { title: "Great Grandson" } },
                  { name: "Mabur Deng", attributes: { title: "Great Grandson" } },
                  { name: "Nyabel Deng", attributes: { title: "Great Granddaughter" } },
                  { name: "Akol Deng", attributes: { title: "Great Grandson" } },
                  { name: "Bior Deng", attributes: { title: "Great Grandson" } },
                  { name: "Ayak Deng", attributes: { title: "Great Granddaughter" } },
                  { name: "Aluk Deng", attributes: { title: "Great Granddaughter" } },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Mathiang Mabur",
        attributes: { title: "Son of Mabur Ajuot" },
        children: [
          { name: "Deng Mathiang", attributes: { title: "Grandson" } },
          { name: "Dau Mathiang", attributes: { title: "Grandson" } },
          { name: "Kong Mathiang", attributes: { title: "Grandson" } },
          { name: "Tong Mathiang", attributes: { title: "Grandson" } },
        ],
      },
      {
        name: "Bayak Mabur",
        attributes: { title: "Son of Mabur Ajuot" },
        children: [
          {
            name: "Chol Bayak",
            attributes: { title: "Grandson" },
            children: [
              { name: "Mawut Chol", attributes: { title: "Great Grandson" } },
              { name: "Bayak Chol", attributes: { title: "Great Grandson" } },
            ],
          },
        ],
      },
      {
        name: "Kaich Mabur",
        attributes: { title: "Son of Mabur Ajuot" },
        children: [
          { name: "Mabur Kaich", attributes: { title: "Grandson" } },
          { name: "Bayak Kaich", attributes: { title: "Grandson" } },
        ],
      },
    ],
  };

  // Center tree automatically
  useEffect(() => {
    const updatePosition = () => {
      if (!treeContainer.current) return;
      const { width } = treeContainer.current.getBoundingClientRect();
      if (width > 0) setTranslate({ x: width / 2, y: 100 });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-50">
      <div className="max-w-5xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-green-700">
          Pan Mabur Family Tree
        </h1>
        <p className="mt-2 text-gray-600">
          Explore the family lineage of Mabur Ajuot and his descendants.
        </p>
      </div>

      <div
        id="treeWrapper"
        ref={treeContainer}
        className="w-full h-[600px] md:h-[700px] bg-white border rounded-lg shadow-md overflow-hidden"
      >
        {translate.x > 0 && (
          <Tree
            data={familyData}
            translate={translate}
            orientation="vertical"
            zoomable={true}
            zoom={0.9}
            collapsible={true}
            separation={{ siblings: 1, nonSiblings: 1.5 }}
            nodeSize={{ x: 250, y: 100 }}
            styles={{
              links: { stroke: "#4CAF50", strokeWidth: 2 },
              nodes: {
                node: {
                  circle: { fill: "#4CAF50", stroke: "#2e7d32", strokeWidth: 2 },
                  name: { stroke: "none", fill: "#333", fontWeight: 600 },
                  attributes: { stroke: "none", fill: "#666" },
                },
                leafNode: {
                  circle: { fill: "#81C784", stroke: "#388E3C", strokeWidth: 2 },
                  name: { stroke: "none", fill: "#333" },
                  attributes: { stroke: "none", fill: "#666" },
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

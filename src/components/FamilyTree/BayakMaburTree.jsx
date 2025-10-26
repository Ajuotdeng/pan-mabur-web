import React, { useRef, useState, useEffect } from "react";
import Tree from "react-d3-tree";
import { Link } from "react-router-dom";

export default function BayakMaburTree() {
  const treeRef = useRef(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const data = {
    name: "Bayak Mabur",
    attributes: { title: "Son of Mabur Ajuot" },
    children: [
      {
        name: "Chol Bayak",
        children: [
          { name: "Mawut Chol" },
          { name: "Bayak Chol" },
        ],
      },
    ],
  };

  useEffect(() => {
    if (treeRef.current) {
      const width = treeRef.current.getBoundingClientRect().width;
      const yOffset = window.innerWidth < 768 ? 60 : 100;
      setTranslate({ x: width / 2, y: yOffset });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center">
      <div className="w-full max-w-5xl mb-4 text-sm text-gray-600">
        <Link to="/familytree" className="text-green-700 hover:underline">
          ← Back
        </Link>{" "}
        › Bayak Mabur Lineage
      </div>

      <div className="max-w-5xl mx-auto mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Descendants of Bayak Mabur
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Visual representation of Bayak Mabur’s lineage.
        </p>
      </div>

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
            zoom={window.innerWidth < 768 ? 0.6 : 0.9}
            nodeSize={{ x: 220, y: 100 }}
            styles={{
              links: { stroke: "#4CAF50", strokeWidth: 2 },
              nodes: {
                node: {
                  circle: { fill: "#4CAF50", stroke: "#2e7d32", strokeWidth: 2 },
                  name: { fill: "#333", fontWeight: 600 },
                },
                leafNode: {
                  circle: { fill: "#81C784", stroke: "#388E3C", strokeWidth: 2 },
                  name: { fill: "#333" },
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

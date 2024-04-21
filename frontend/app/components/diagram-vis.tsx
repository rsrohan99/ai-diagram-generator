"use client";

import Graph from "react-graph-vis";

export interface Diagram {
  nodes: {
    id: number;
    label: string;
    shape: string;
  }[];
  edges: {
    from: number;
    to: number;
    label: string;
    id: string;
  }[];
}

interface GraphProps {
  diagram: Diagram;
}

const DiagramVis: React.FC<GraphProps> = ({ diagram: graph }) => {
  const options = {
    nodes: {
      font: {
        size: 15,
      },
    },
    edges: {
      font: {
        size: 12,
      },
      arrows: {
        to: {
          enabled: true,
        },
      },
    },
    physics: {
      repulsion: {
        nodeDistance: 90,
      },
      minVelocity: 0.75,
      solver: "repulsion",
    },
  };
  return (
    <div className="w-[92vw] h-[80vh]">
      <Graph graph={graph} options={options} />;
    </div>
  );
};

export default DiagramVis;

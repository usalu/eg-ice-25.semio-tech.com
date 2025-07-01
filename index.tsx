import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React, { type FC } from "react";

import { useEffect, useRef } from "react";
import Reveal from "reveal.js";

import "./index.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import {
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Scatter,
  Line,
  ScatterChart,
} from "recharts";
import { CartesianGrid } from "recharts";

const Semio: FC = () => (
  <section title="title" data-auto-animate>
    <h1 data-id="name" className="font-sans">
      semio
    </h1>
  </section>
);

const Title: FC = () => (
  <section title="paper-title" data-auto-animate>
    <h1 data-id="name" className="opacity-20">
      semio
    </h1>
    <div data-id="title">
      <h2 className="r-fit-text">Large-Language-Model-based</h2>
      <h2 className="r-fit-text">Building-Information-Model Alignment</h2>
      <h2 className="r-fit-text">for Automatic-Compliance-Checking</h2>
    </div>
  </section>
);

const Subtitle: FC = () => (
  <section title="paper-subtitle" data-auto-animate>
    <h1 data-id="name" className="opacity-20">
      semio
    </h1>
    <h2 data-id="title" className="r-fit-text opacity-20">
      LLM-based BIM Alignment for ACC
    </h2>
    <div data-id="subtitle">
      <h2 className="r-fit-text">Towards Closing the Gap between</h2>
      <h2 className="r-fit-text">Model Authoring and Model Checking</h2>
      <h2 className="r-fit-text">for Kit-of-Parts Architecture</h2>
    </div>
  </section>
);

const Timeline: FC = () => {
  const dateFormatter = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const yAxisFormatter = (value: number) => {
    if (value >= 1000000) return `${value / 1000000}M`;
    if (value >= 1000) return `${value / 1000}K`;
    return value.toString();
  };

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: Array<{
      payload: {
        name: string;
        date?: string;
        context?: number;
        equivalent?: string;
        image?: string;
      };
    }>;
    label?: string | number;
  }) => {
    if (active && payload && payload.length) {
      const point =
        payload.length === 2 // super hacky, don't know why not just one item is returned
          ? payload[0].payload
          : payload[payload.length - 1].payload;

      // console.log(active, payload, label);
      if (point.image) {
        return (
          <div className="custom-tooltip">
            <p className="label">
              <span className="font-bold">Event:</span>
              {` ${point.name}`}
            </p>
            <img
              src={point.image}
              alt={point.name}
              className="h-[40vh] w-auto"
            />
            <p className="desc">
              <span className="font-bold">Date:</span>
              {` ${point.date ? dateFormatter(point.date) : ""}`}
            </p>
          </div>
        );
      }
      return (
        <div className="custom-tooltip">
          <p className="label">
            <span className="font-bold">Name:</span>
            {` ${point.name}`}
          </p>
          {point.context && (
            <p className="intro">
              <span className="font-bold">Context:</span>
              {` ${yAxisFormatter(point.context)} (${point.equivalent})`}
            </p>
          )}
          <p className="desc">
            <span className="font-bold">Announced:</span>
            {` ${point.date ? dateFormatter(point.date) : ""}`}
          </p>
        </div>
      );
    }
    return null;
  };

  const modelData = [
    {
      date: "2018-06-11",
      timestamp: new Date("2018-06-11").getTime(),
      name: "GPT",
      context: 512,
      equivalent: "< 1 page",
    },
    {
      date: "2019-11-05",
      timestamp: new Date("2019-11-05").getTime(),
      name: "GPT-2",
      context: 1024,
      equivalent: "~2 pages",
    },
    {
      date: "2020-05-28",
      timestamp: new Date("2020-05-28").getTime(),
      name: "GPT-3",
      context: 2048,
      equivalent: "~4 pages",
    },
    {
      date: "2022-03-15",
      timestamp: new Date("2022-03-15").getTime(),
      name: "GPT-3.5",
      context: 16384,
      equivalent: "~30 pages",
    },
    {
      date: "2023-03-14",
      timestamp: new Date("2023-03-14").getTime(),
      name: "Claude 1.5",
      context: 100000,
      equivalent: "~150 pages",
    },
    {
      date: "2024-02-15",
      timestamp: new Date("2024-02-15").getTime(),
      name: "Gemini 1.5 Pro",
      context: 1000000,
      equivalent: "~1500 pages",
    },
    {
      date: "2025-04-05",
      timestamp: new Date("2025-04-05").getTime(),
      name: "Llama 4",
      context: 10000000,
      equivalent: "~15000 pages",
    },
  ];

  const eventData = [
    {
      date: "2020-12-01",
      timestamp: new Date("2020-12-01").getTime(),
      name: "RAG",
      image: "/rag.png",
      context: 5000000,
    },
    {
      date: "2024-11-01",
      timestamp: new Date("2024-11-01").getTime(),
      name: "MCP",
      image: "/mcp.png",
      context: 5000000,
    },
    {
      date: "2024-12-05",
      timestamp: new Date("2024-12-05").getTime(),
      name: "o1 (Strawberry)",
      image: "/o1.png",
      context: 128000,
    },
    {
      date: "2025-06-01",
      timestamp: new Date("2025-06-01").getTime(),
      name: "Cursor 1.0",
      image: "/cursor.png",
      context: 5000000,
    },
  ];

  const combinedData = [...modelData, ...eventData];

  return (
    <section title="stats-about-llms" data-auto-animate>
      <div className="w-[80vw] h-[80vh] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            data={combinedData}
            margin={{
              top: 5,
              right: 40,
              left: 40,
              bottom: 30,
            }}
            syncMethod="index"
          >
            <CartesianGrid />
            <XAxis
              dataKey="timestamp"
              tickFormatter={(value) => {
                const date = new Date(value);
                return dateFormatter(date.toISOString().split("T")[0]);
              }}
              type="number"
              scale="time"
              domain={["dataMin", "dataMax"]}
              allowDuplicatedCategory={false}
            />
            <YAxis
              dataKey="context"
              tickFormatter={yAxisFormatter}
              type="number"
            />
            <Scatter data={modelData} name="Model" fill="#ff344f" line />
            <Scatter data={eventData} name="Event" fill="#00a69d" />
            <Tooltip content={CustomTooltip} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

const Frameworks: FC = () => (
  <section title="Frameworks" data-auto-animate>
    <h2 data-id="title">Frameworks</h2>
    <ul className="text-3xl">
      <li data-id="ids-ifc-step" className="fragment">
        Information Delivery Specification (IDS)
      </li>
      <li data-id="solibri" className="fragment">
        Solibri Model Checker
      </li>
      <li data-id="bimtester" className="fragment">
        BIMTester
      </li>
      <li data-id="owl-cqie-rdf" className="fragment">
        Web Ontology Language (OWL)
      </li>
      <li data-id="shacl" className="fragment">
        Shapes Constraint Language (SHACL)
      </li>
      <li data-id="sparql" className="fragment">
        SPARQL Protocol and RDF Query Language
      </li>
      <li data-id="ifcopenshell" className="fragment">
        IfcOpenShell
      </li>
      <li data-id="xbim-toolkit" className="fragment">
        Xbim Toolkit
      </li>
      <li data-id="prolog" className="fragment">
        Prolog
      </li>
      <li data-id="python" className="fragment">
        Python
      </li>
      <li data-id="framework-schema-format" className="fragment">
        …
      </li>
    </ul>
  </section>
);

const Schemas: FC = () => (
  <section title="Schemas" data-auto-animate>
    <h2 data-id="title">Schemas</h2>
    <ul>
      <li data-id="ids-ifc-step">Industry Foundation Classes (IFC)</li>
      <li data-id="rdf-cqie-owl">
        Construction Quality Inspection and Evaluation Ontology (CQIE)
      </li>
      <li data-id="comon">Compliance-Management-Ontology (CoMOn)</li>
      <li data-id="legaldocml">Legal Document Markup Language (LegalDocML)</li>
      <li data-id="rase">
        Requirement Applicability Selection Exceptions (RASE)
      </li>
      <li data-id="framework-schema-format">…</li>
    </ul>
  </section>
);

const Formats: FC = () => (
  <section title="Formats" data-auto-animate>
    <h2 data-id="title">Formats</h2>
    <ul>
      <li data-id="ids-ifc-step">
        Standard for the Exchange of Product-Model Data (STEP)
      </li>
      <li data-id="rdf-cqie-owl">Resource-Description-Framework (RDF)</li>
      <li data-id="xml-gbxml-">Extensible Markup Language (XML)</li>
      <li data-id="json-">JavaScript Object Notation (JSON)</li>
      <li data-id="framework-schema-format">…</li>
    </ul>
  </section>
);

const Alignment: FC = () => (
  <section title="Alignment" data-auto-animate>
    <h2 data-id="title">Automatic Alignment?</h2>
    <ul>
      <li data-id="ids-ifc-step">
        Standard for the Exchange of Product-Model Data (STEP)
      </li>
      <li className="text-center list-none">↕️</li>
      <li data-id="rdf-cqie-owl">Resource-Description-Framework (RDF)</li>
      <li className="text-center list-none">↕️</li>
      <li data-id="xml-gbxml-">Extensible Markup Language (XML)</li>
      <li className="text-center list-none">↕️</li>
      <li data-id="json-">JavaScript Object Notation (JSON)</li>
      <li className="text-center list-none">↕️</li>
      <li data-id="framework-schema-format">…</li>
    </ul>
  </section>
);

const Analogy: FC = () => (
  <section title="analogy">
    <img src="/sketchpad-demo.gif" data-preview-video="/coding.mp4" />
  </section>
);

const Software: FC = () => (
  <section title="software" data-auto-animate>
    <div className="text-center" style={{ margin: "0 1rem" }}>
      <img
        data-id="software-img"
        className="h-[50vh] w-auto object-cover"
        src="/sketchpad-demo.png"
      />
      <p
        data-id="software-text"
        className="text-[0.9rem]"
        style={{ margin: "0px" }}
      >
        software
      </p>
    </div>
  </section>
);

const Code: FC = () => (
  <section title="code" data-auto-animate>
    <div className="flex items-center justify-center">
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="software-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/sketchpad-demo.png"
        />
        <p
          data-id="software-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          software
        </p>
      </div>
    </div>
    <div className="text-center" style={{ margin: "0 1rem" }}>
      <img
        data-id="code-img"
        className="h-[50vh] w-auto object-cover"
        src="/code.png"
      />
      <p
        data-id="code-text"
        className="text-[0.9rem]"
        style={{ margin: "0px" }}
      >
        code
      </p>
    </div>
  </section>
);

const Docs: FC = () => (
  <section title="docs" data-auto-animate>
    <div className="flex items-center justify-center">
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="software-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/sketchpad-demo.png"
        />
        <p
          data-id="software-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          software
        </p>
      </div>
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="code-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/code.png"
        />
        <p
          data-id="code-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          code
        </p>
      </div>
    </div>
    <div className="text-center" style={{ margin: "0 1rem" }}>
      <img
        data-id="docs-img"
        className="h-[50vh] w-auto object-cover"
        src="/docs.png"
      />
      <p
        data-id="docs-text"
        className="text-[0.9rem]"
        style={{ margin: "0px" }}
      >
        docs
      </p>
    </div>
  </section>
);

const AST: FC = () => (
  <section title="ast" data-auto-animate>
    <div className="flex items-center justify-center">
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="software-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/sketchpad-demo.png"
        />
        <p
          data-id="software-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          software
        </p>
      </div>
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="code-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/code.png"
        />
        <p
          data-id="code-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          code
        </p>
      </div>
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="docs-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/docs.png"
        />
        <p
          data-id="docs-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          docs
        </p>
      </div>
    </div>
    <div
      className="text-center"
      style={{ margin: "0 1rem", marginTop: "2rem" }}
    >
      <img
        data-id="abstract-syntax-tree-format-img"
        className="h-[50vh] w-auto object-cover"
        src="/abstract-syntax-tree-format.png"
      />
      <p
        data-id="abstract-syntax-tree-format-text"
        className="text-[0.9rem]"
        style={{ margin: "0px" }}
      >
        ast
      </p>
    </div>
  </section>
);

const DevServer: FC = () => (
  <section title="compiler" data-auto-animate>
    <div className="flex items-center justify-center">
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="software-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/sketchpad-demo.png"
        />
        <p
          data-id="software-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          software
        </p>
      </div>
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="code-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/code.png"
        />
        <p
          data-id="code-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          code
        </p>
      </div>
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="docs-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/docs.png"
        />
        <p
          data-id="docs-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          docs
        </p>
      </div>
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="abstract-syntax-tree-format-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/abstract-syntax-tree-format.png"
        />
        <p
          data-id="abstract-syntax-tree-format-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          ast
        </p>
      </div>
    </div>
    <div
      className="text-center"
      style={{ margin: "0 1rem", marginTop: "2rem" }}
    >
      <img
        data-id="compiler-img"
        className="h-[50vh] w-auto object-cover"
        src="/compiler.png"
      />
      <p
        data-id="compiler-text"
        className="text-[0.9rem]"
        style={{ margin: "0px" }}
      >
        compiler
      </p>
    </div>
  </section>
);

const CodeError: FC = () => (
  <section title="code-error" data-auto-animate>
    <div className="flex items-center justify-center">
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="software-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/sketchpad-demo.png"
        />
        <p
          data-id="software-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          software
        </p>
      </div>
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="code-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/code.png"
        />
        <p
          data-id="code-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          code
        </p>
      </div>
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="docs-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/docs.png"
        />
        <p
          data-id="docs-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          docs
        </p>
      </div>
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="abstract-syntax-tree-format-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/abstract-syntax-tree-format.png"
        />
        <p
          data-id="abstract-syntax-tree-format-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          ast
        </p>
      </div>
      <div className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id="compiler-img"
          className="h-[15vh] w-[15vh] object-cover"
          style={{ margin: "0px" }}
          src="/compiler.png"
        />
        <p
          data-id="compiler-text"
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          compiler
        </p>
      </div>
    </div>
    <div
      className="text-center"
      style={{ margin: "0 1rem", marginTop: "2rem" }}
    >
      <img
        data-id="code-error-img"
        className="h-[50vh] w-auto object-cover"
        src="/code-error.png"
      />
      <p
        data-id="code-error-text"
        className="text-[0.9rem]"
        style={{ margin: "0px" }}
      >
        error
      </p>
    </div>
  </section>
);

const imagesRow1 = [
  { id: "software", src: "/sketchpad-demo.png", text: "software" },
  { id: "code", src: "/code.png", text: "code" },
  { id: "docs", src: "/docs.png", text: "docs" },
  { id: "ast", src: "/abstract-syntax-tree-format.png", text: "ast" },
  { id: "compiler", src: "/compiler.png", text: "compiler" },
  { id: "code-error", src: "/code-error.png", text: "error" },
];

const imagesRow2 = [
  { id: "building", src: "/building.png", text: "building" },
  { id: "design-format", src: "/design-format.png", text: "design-format" },
  {
    id: "compliance-code",
    src: "/compliance-code.png",
    text: "compliance-code",
  },
  {
    id: "compliance-format",
    src: "/compliance-format.png",
    text: "compliance-format",
  },
  { id: "acc-framework", src: "/acc-framework.png", text: "acc-framework" },
  { id: "violation", src: "/violation.png", text: "violation" },
];

const ImageBar: FC<{
  images: { id: string; src: string; text: string }[];
  imgClassName?: string;
}> = ({ images, imgClassName }) => (
  <div className="flex items-center justify-center">
    {images.map((img) => (
      <div key={img.id} className="text-center" style={{ margin: "0 1rem" }}>
        <img
          data-id={`${img.id}-img`}
          className={`object-cover ${imgClassName || "h-[15vh] w-[15vh]"}`}
          style={{ margin: "0px" }}
          src={img.src}
        />
        <p
          data-id={`${img.id}-text`}
          className="text-[0.9rem]"
          style={{ margin: "0px" }}
        >
          {img.text}
        </p>
      </div>
    ))}
  </div>
);

const Building: FC = () => (
  <section
    title="building"
    data-auto-animate
    className="flex flex-col justify-between"
  >
    <ImageBar images={imagesRow1} />
    <div
      className="text-center"
      style={{ margin: "0 1rem", marginTop: "2rem" }}
    >
      <img
        data-id="building-img"
        className="h-[50vh] w-auto object-cover"
        src="/building.png"
      />
      <p
        data-id="building-text"
        className="text-[0.9rem]"
        style={{ margin: "0px" }}
      >
        building
      </p>
    </div>
  </section>
);

const DesignFormat: FC = () => (
  <section
    title="design-format"
    data-auto-animate
    className="flex flex-col justify-between"
  >
    <ImageBar images={imagesRow1} />
    <div
      className="text-center"
      style={{ margin: "0 1rem", marginTop: "2rem" }}
    >
      <img
        data-id="design-format-img"
        className="h-[35vh] w-auto object-cover"
        src="/design-format.png"
      />
      <p
        data-id="design-format-text"
        className="text-[0.9rem]"
        style={{ margin: "0px" }}
      >
        design-format
      </p>
    </div>
    <ImageBar images={imagesRow2.slice(0, 1)} />
  </section>
);

const ComplianceCode: FC = () => (
  <section
    title="compliance-code"
    data-auto-animate
    className="flex flex-col justify-between"
  >
    <ImageBar images={imagesRow1} />
    <div
      className="text-center"
      style={{ margin: "0 1rem", marginTop: "2rem" }}
    >
      <img
        data-id="compliance-code-img"
        className="h-[35vh] w-auto object-cover"
        src="/compliance-code.png"
      />
      <p
        data-id="compliance-code-text"
        className="text-[0.9rem]"
        style={{ margin: "0px" }}
      >
        compliance-code
      </p>
    </div>
    <ImageBar images={imagesRow2.slice(0, 2)} />
  </section>
);

const ComplianceFormat: FC = () => (
  <section
    title="compliance-format"
    data-auto-animate
    className="flex flex-col justify-between"
  >
    <ImageBar images={imagesRow1} />
    <div
      className="text-center"
      style={{ margin: "0 1rem", marginTop: "2rem" }}
    >
      <img
        data-id="compliance-format-img"
        className="h-[35vh] w-auto object-cover"
        src="/compliance-format.png"
      />
      <p
        data-id="compliance-format-text"
        className="text-[0.9rem]"
        style={{ margin: "0px" }}
      >
        compliance-format
      </p>
    </div>
    <ImageBar images={imagesRow2.slice(0, 3)} />
  </section>
);

const ACCFramework: FC = () => (
  <section
    title="acc-framework"
    data-auto-animate
    className="flex flex-col justify-between"
  >
    <ImageBar images={imagesRow1} />
    <div
      className="text-center"
      style={{ margin: "0 1rem", marginTop: "2rem" }}
    >
      <img
        data-id="acc-framework-img"
        className="h-[35vh] w-auto object-cover"
        src="/acc-framework.png"
      />
      <p
        data-id="acc-framework-text"
        className="text-[0.9rem]"
        style={{ margin: "0px" }}
      >
        acc-framework
      </p>
    </div>
    <ImageBar images={imagesRow2.slice(0, 4)} />
  </section>
);

const Violation: FC = () => (
  <section
    title="violation"
    data-auto-animate
    className="flex flex-col justify-between"
  >
    <ImageBar images={imagesRow1} />
    <div
      className="text-center"
      style={{ margin: "0 1rem", marginTop: "2rem" }}
    >
      <img
        data-id="violation-img"
        className="h-[25vh] w-auto object-cover"
        src="/violation.png"
      />
      <p
        data-id="violation-text"
        className="text-[0.9rem]"
        style={{ margin: "0px" }}
      >
        violation
      </p>
    </div>
    <ImageBar images={imagesRow2.slice(0, 5)} />
  </section>
);

const Comparison: FC = () => (
  <section
    title="comparison"
    data-auto-animate
    className="flex flex-col justify-between"
  >
    <ImageBar images={imagesRow1} imgClassName="h-auto w-[16.6vh]" />
    <ImageBar images={imagesRow2} imgClassName="h-auto w-[16.6vh]" />
  </section>
);

const PairedSlide: FC<{
  title: string;
  topImages: { id: string; src: string; text: string }[];
  mainImageLeft: { id: string; src: string; text: string };
  mainImageRight: { id: string; src: string; text: string };
  bottomImages: { id: string; src: string; text: string }[];
}> = ({ title, topImages, mainImageLeft, mainImageRight, bottomImages }) => (
  <section title={title} data-auto-animate>
    <div className="flex flex-col items-center justify-center">
      <ImageBar images={topImages} />
      <div className="flex items-center justify-center">
        <div className="text-center" style={{ margin: "0 1rem" }}>
          <img
            data-id={`${mainImageLeft.id}-img`}
            className="h-[35vh] w-auto object-cover"
            src={mainImageLeft.src}
          />
          <p data-id={`${mainImageLeft.id}-text`}>{mainImageLeft.text}</p>
        </div>
        <h2>→</h2>
        <div className="text-center" style={{ margin: "0 1rem" }}>
          <img
            data-id={`${mainImageRight.id}-img`}
            className="h-[35vh] w-auto object-cover"
            src={mainImageRight.src}
          />
          <p data-id={`${mainImageRight.id}-text`}>{mainImageRight.text}</p>
        </div>
      </div>
      <div>
        <ImageBar images={bottomImages} />
      </div>
    </div>
  </section>
);

const SoftwareBuilding: FC = () => (
  <PairedSlide
    title="software-building"
    topImages={imagesRow1.slice(1)}
    mainImageLeft={imagesRow1[0]}
    mainImageRight={imagesRow2[0]}
    bottomImages={imagesRow2.slice(1)}
  />
);

const CodeDesignFormat: FC = () => (
  <PairedSlide
    title="code-design-format"
    topImages={[imagesRow1[0], ...imagesRow1.slice(2)]}
    mainImageLeft={imagesRow1[1]}
    mainImageRight={imagesRow2[1]}
    bottomImages={[imagesRow2[0], ...imagesRow2.slice(2)]}
  />
);

const DocsComplianceCode: FC = () => (
  <PairedSlide
    title="docs-compliance-code"
    topImages={[...imagesRow1.slice(0, 2), ...imagesRow1.slice(3)]}
    mainImageLeft={imagesRow1[2]}
    mainImageRight={imagesRow2[2]}
    bottomImages={[...imagesRow2.slice(0, 2), ...imagesRow2.slice(3)]}
  />
);

const ASTComplianceFormat: FC = () => (
  <PairedSlide
    title="ast-compliance-format"
    topImages={[...imagesRow1.slice(0, 3), ...imagesRow1.slice(4)]}
    mainImageLeft={imagesRow1[3]}
    mainImageRight={imagesRow2[3]}
    bottomImages={[...imagesRow2.slice(0, 3), ...imagesRow2.slice(4)]}
  />
);

const DevServerACCFramework: FC = () => (
  <PairedSlide
    title="compiler-acc-framework"
    topImages={[...imagesRow1.slice(0, 4), ...imagesRow1.slice(5)]}
    mainImageLeft={imagesRow1[4]}
    mainImageRight={imagesRow2[4]}
    bottomImages={[...imagesRow2.slice(0, 4), ...imagesRow2.slice(5)]}
  />
);

const ErrorViolation: FC = () => (
  <PairedSlide
    title="error-violation"
    topImages={imagesRow1.slice(0, 5)}
    mainImageLeft={imagesRow1[5]}
    mainImageRight={imagesRow2[5]}
    bottomImages={imagesRow2.slice(0, 5)}
  />
);

const DesignFormatConstraintFormat: FC = () => (
  <PairedSlide
    title="design-format-constraint-format"
    topImages={imagesRow1}
    mainImageLeft={imagesRow2[1]}
    mainImageRight={imagesRow2[3]}
    bottomImages={imagesRow2.filter((_, i) => i !== 1 && i !== 3)}
  />
);

const Regulation: FC = () => (
  <section>
    <section title="regulation" data-auto-animate>
      <div className="flex justify-around items-start">
        <div className="w-5/12">
          <h5 data-id="title">Berliner Bauordnung</h5>
          <h6 data-id="regulation-title">
            § 35 Notwendige Treppenräume, Ausgänge
          </h6>
          <div data-id="regulation-text">
            <p className="text-xl">
              (1) Jede notwendige Treppe muss zur Sicherstellung der
              Rettungswege aus den Geschossen ins Freie in einem eigenen,
              durchgehenden Treppenraum liegen (notwendiger Treppenraum).
              Notwendige Treppenräume müssen so angeordnet und ausgebildet sein,
              dass die Nutzung der notwendigen Treppen im Brandfall ausreichend
              lange möglich ist. Notwendige Treppen sind ohne eigenen
              Treppenraum zulässig
            </p>
          </div>
          <div data-id="regulation-constraints">
            <ol className="text-xl">
              <li>in Gebäuden der Gebäudeklassen 1 und 2, </li>
              <li>
                für die Verbindung von höchstens zwei Geschossen innerhalb
                derselben Nutzungseinheit von insgesamt nicht mehr als 200 m²
                Brutto-Grundfläche, wenn in jedem Geschoss ein anderer
                Rettungsweg erreicht werden kann,
              </li>
              <li>
                als Außentreppe, wenn ihre Nutzung ausreichend sicher ist und im
                Brandfall nicht gefährdet werden kann.
              </li>
            </ol>
          </div>
        </div>
        <div className="w-5/12"></div>
      </div>
    </section>
    <section title="regulation" data-auto-animate>
      <div className="flex justify-around items-start">
        <div className="w-5/12"></div>
        <div className="w-5/12">
          <h5 data-id="title">Building Code Berlin</h5>
          <h6 data-id="regulation-title">§ 35 Necessary stairwells, exits</h6>
          <div data-id="regulation-text">
            <p className="text-xl">
              (1) Each necessary staircase must be located in a separate,
              continuous stairwell to ensure escape routes from the storeys to
              the outside (necessary stairwell). Necessary stairwells must be
              arranged and designed in such a way that the use of the necessary
              stairs is possible for a sufficiently long time in the event of
              fire. Necessary staircases are permitted without a separate
              stairwell
            </p>
          </div>
          <div data-id="regulation-constraints">
            <ol className="text-xl">
              <li>in buildings of building classes 1 and 2,</li>
              <li>
                for connecting a maximum of two storeys within the same usage
                unit with a total gross floor area of no more than 200 m², if a
                different escape route can be reached on each storey,
              </li>
              <li>
                as an external staircase if its use is sufficiently safe and
                cannot be endangered in the event of fire.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section title="regulation" data-auto-animate>
      <div className="flex justify-around items-start">
        <div className="w-5/12">
          <h5 data-id="title">Ontology</h5>
          <h6 data-id="regulation-title">Web Ontology Language (OWL)</h6>
          <div data-id="regulation-text">
            <img data-id="regulation-text" src="/ontology.png" />
          </div>
          <div data-id="regulation-constraints">
            <img data-id="regulation-constraints" src="/constraints.png" />
          </div>
        </div>
        <div className="w-5/12"></div>
      </div>
    </section>
  </section>
);

const App: FC = () => {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "fade",
      // disableLayout: true,
      // other config options
      // plugins: [RevealMarkdown],
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed:", e);
      }
    };
  }, []);

  return (
    <div
      className="reveal"
      ref={deckDivRef}
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="slides">
        <section data-markdown className="text-2xl text-left">
          <p>
            <strong>Task</strong>: Instantiate the OWL ontology from{" "}
            <code>onto</code> by creating OWL NamedIndividuals based on the data
            from <code>design data</code>, following the structure defined in{" "}
            <code>design schema</code>
          </p>
          <p>
            <strong>Examples</strong>: When instantiating the ontology, use the
            following OWL NamedIndividuals as examples:{" "}
            <code>example OWL individuals</code>
          </p>
          <p>
            <strong>Input Files</strong>:
          </p>
          <ul>
            <li>
              <code>onto</code> – Defines the ontology with predefined classes,
              relationships, and properties.
            </li>
            <li>
              <code>design schema</code> – Contains the dataset to be
              instantiated.
            </li>
            <li>
              <code>design data</code> – Specifies the structure and constraints
              of the dataset.
            </li>
          </ul>
          <p>
            <strong>Requirements</strong>:
          </p>
          <ul>
            <li>
              The output must be a valid OWL ontology in Turtle (.ttl) format.
            </li>
            <li>
              Preserve the original ontology and incorporate the newly created
              individuals.
            </li>
            <li>
              Use only classes, relationships, and properties defined in{" "}
              <code>onto</code>.
            </li>
            <li>
              Include all relevant data from <code>design data</code>.
            </li>
          </ul>
          <p>
            <strong>Deliverable</strong>:
          </p>
          <ul>
            <li>
              A .ttl file containing the transformed data merged with the given
              ontology.
            </li>
          </ul>
        </section>
        <section>
          <Semio />
          <Title />
          <Subtitle />
        </section>
        <section>
          <Timeline />
          <Analogy />
        </section>
        <section>
          <Software />
          <Code />
          <Docs />
          <AST />
          <DevServer />
          <CodeError />
        </section>
        <section>
          <Building />
          <DesignFormat />
          <ComplianceCode />
          <ComplianceFormat />
          <ACCFramework />
          <Violation />
          <Comparison />
        </section>
        <section>
          <SoftwareBuilding />
          <CodeDesignFormat />
          <DocsComplianceCode />
          <ASTComplianceFormat />
          <DevServerACCFramework />
          <ErrorViolation />
          <DesignFormatConstraintFormat />
        </section>
        <section>
          <Frameworks />
          <Schemas />
          <Formats />
          <Alignment />
        </section>
        <Regulation />
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

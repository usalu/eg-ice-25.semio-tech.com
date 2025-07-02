import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React, { type FC } from "react";

import { useEffect, useRef } from "react";
import Reveal from "reveal.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "./index.css";

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
    <h1 data-id="name">semio</h1>
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

const Authors: FC = () => (
  <section title="paper-subtitle" data-auto-animate>
    <h1 data-id="name" className="opacity-20">
      semio
    </h1>
    <h2 data-id="title" className="r-fit-text opacity-20">
      LLM-based BIM Alignment for ACC
    </h2>
    <div data-id="subtitle">
      <h2 className="r-fit-text opacity-20">Towards Closing the Gap between</h2>
      <h2 className="r-fit-text opacity-20">
        Model Authoring and Model Checking
      </h2>
      <h2 className="r-fit-text opacity-20">for Kit-of-Parts Architecture</h2>
    </div>
    <div data-id="authors">
      <div className="flex flex-row">
        <h4>Ueli Saluz</h4>
        <h4>Ildar Baimuratov</h4>
        <h4>Philipp Geyer</h4>
      </div>
    </div>
  </section>
);

const Institutions: FC = () => (
  <section title="paper-subtitle" data-auto-animate>
    <h1 data-id="name" className="opacity-20">
      semio
    </h1>
    <h2 data-id="title" className="r-fit-text opacity-20">
      LLM-based BIM Alignment for ACC
    </h2>
    <div data-id="subtitle">
      <h2 className="r-fit-text opacity-20">Towards Closing the Gap between</h2>
      <h2 className="r-fit-text opacity-20">
        Model Authoring and Model Checking
      </h2>
      <h2 className="r-fit-text opacity-20">for Kit-of-Parts Architecture</h2>
    </div>
    <div data-id="authors">
      <div className="flex flex-row">
        <h4>
          <span className="opacity-20">Ueli Saluz</span>
          <sup>1,a</sup>
        </h4>
        <h4>
          <span className="opacity-20">Ildar Baimuratov</span>
          <sup>1,b</sup>
        </h4>
        <h4>
          <span className="opacity-20">Philipp Geyer</span>
          <sup>1,a</sup>
        </h4>
      </div>
    </div>
    <div data-id="institutions">
      <h5>
        <sup>1</sup>Leibniz University Hannover
        <br />
        <sup>a</sup>Faculty of Architecture
        <br />
        <sup>b</sup>Faculty of Computer Science
      </h5>
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
            <p className="label">{` ${point.name}`}</p>
            <img
              src={point.image}
              alt={point.name}
              className="h-[40vh] w-auto"
            />
            <p className="desc">
              {` ${point.date ? dateFormatter(point.date) : ""}`}
            </p>
          </div>
        );
      }
      return (
        <div className="custom-tooltip">
          <p className="label">{` ${point.name}`}</p>
          {point.context && (
            <p className="intro">
              {` ${yAxisFormatter(point.context)} Tokens (${point.equivalent})`}
            </p>
          )}
          <p className="desc">
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
      <div className="h-[40vh] w-[60vw] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            data={combinedData}
            className="size-full mr-20"
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
              className="text-2xl"
            />
            <YAxis
              dataKey="context"
              tickFormatter={yAxisFormatter}
              type="number"
              className="text-2xl"
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
      <li className="text-center list-none">↕</li>
      <li data-id="rdf-cqie-owl">Resource-Description-Framework (RDF)</li>
      <li className="text-center list-none">↕</li>
      <li data-id="xml-gbxml-">Extensible Markup Language (XML)</li>
      <li className="text-center list-none">↕</li>
      <li data-id="json-">JavaScript Object Notation (JSON)</li>
      <li className="text-center list-none">↕</li>
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
        className="h-[30vh] w-auto object-cover"
        style={{ marginBottom: "0px" }}
        src="/sketchpad-demo.png"
      />
      <p data-id="software-text" style={{ marginTop: "0px" }}>
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
          className="h-[10vh] w-[13vw] object-cover"
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
        className="h-[30vh] w-auto object-cover"
        style={{ marginBottom: "0px" }}
        src="/code.png"
      />
      <p data-id="code-text" style={{ marginTop: "0px" }}>
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
          className="h-[10vh] w-[13vw] object-cover"
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
          className="h-[10vh] w-[13vw] object-cover"
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
        className="h-[30vh] w-auto object-cover"
        style={{ marginBottom: "0px" }}
        src="/docs.png"
      />
      <p data-id="docs-text" style={{ marginTop: "0px" }}>
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
          className="h-[10vh] w-[13vw] object-cover"
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
          className="h-[10vh] w-[13vw] object-cover"
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
          className="h-[10vh] w-[13vw] object-cover"
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
        className="h-[30vh] w-auto object-cover"
        style={{ marginBottom: "0px" }}
        src="/abstract-syntax-tree-format.png"
      />
      <p
        data-id="abstract-syntax-tree-format-text"
        style={{ marginTop: "0px" }}
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
          className="h-[10vh] w-[13vw] object-cover"
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
          className="h-[10vh] w-[13vw] object-cover"
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
          className="h-[10vh] w-[13vw] object-cover"
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
          className="h-[10vh] w-[13vw] object-cover"
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
        className="h-[30vh] w-auto object-cover"
        style={{ marginBottom: "0px" }}
        src="/compiler.png"
      />
      <p data-id="compiler-text" style={{ marginTop: "0px" }}>
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
          className="h-[10vh] w-[13vw] object-cover"
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
          className="h-[10vh] w-[13vw] object-cover"
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
          className="h-[10vh] w-[13vw] object-cover"
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
          className="h-[10vh] w-[13vw] object-cover"
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
          className="h-[10vh] w-[13vw] object-cover"
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
        className="h-[30vh] w-auto object-cover"
        style={{ marginBottom: "0px" }}
        src="/code-error.png"
      />
      <p data-id="code-error-text" style={{ marginTop: "0px" }}>
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
  { id: "design", src: "/design.png", text: "design" },
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
          className={`object-cover ${imgClassName || "h-[10vh] w-[13vw]"}`}
          style={{ marginBottom: "0px" }}
          src={img.src}
        />
        <p
          data-id={`${img.id}-text`}
          className="text-[0.9rem]"
          style={{ marginTop: "0px" }}
        >
          {img.text}
        </p>
      </div>
    ))}
  </div>
);

const Design: FC = () => (
  <section
    title="design"
    data-auto-animate
    className="flex flex-col justify-between"
  >
    <ImageBar images={imagesRow1} />
    <div
      className="text-center"
      style={{ margin: "0 1rem", marginTop: "2rem" }}
    >
      <img
        data-id="design-img"
        className="h-[30vh] w-auto object-cover"
        style={{ marginBottom: "0px" }}
        src="/design.png"
      />
      <p data-id="design-text" style={{ marginTop: "0px" }}>
        design
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
        className="h-[30vh] w-auto object-cover"
        style={{ marginBottom: "0px" }}
        src="/design-format.png"
      />
      <p data-id="design-format-text" style={{ marginTop: "0px" }}>
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
        className="h-[30vh] w-auto object-cover"
        style={{ marginBottom: "0px" }}
        src="/compliance-code.png"
      />
      <p data-id="compliance-code-text" style={{ marginTop: "0px" }}>
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
        className="h-[30vh] w-auto object-cover"
        style={{ marginBottom: "0px" }}
        src="/compliance-format.png"
      />
      <p data-id="compliance-format-text" style={{ marginTop: "0px" }}>
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
        className="h-[30vh] w-auto object-cover"
        style={{ marginBottom: "0px" }}
        src="/acc-framework.png"
      />
      <p data-id="acc-framework-text" style={{ marginTop: "0px" }}>
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
        style={{ marginBottom: "0px" }}
        src="/violation.png"
      />
      <p data-id="violation-text" style={{ margin: "0px" }}>
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
        <div className="text-center" style={{ margin: "0 0" }}>
          <img
            data-id={`${mainImageLeft.id}-img`}
            className="h-[30vh] w-auto object-cover"
            style={{ marginBottom: "0px" }}
            src={mainImageLeft.src}
          />
          <p data-id={`${mainImageLeft.id}-text`} style={{ marginTop: "0px" }}>
            {mainImageLeft.text}
          </p>
        </div>
        <h2>→</h2>
        <div className="text-center" style={{ margin: "0 0" }}>
          <img
            data-id={`${mainImageRight.id}-img`}
            className="h-[30vh] w-auto object-cover"
            style={{ marginBottom: "0px" }}
            src={mainImageRight.src}
          />
          <p data-id={`${mainImageRight.id}-text`} style={{ marginTop: "0px" }}>
            {mainImageRight.text}
          </p>
        </div>
      </div>
      <div>
        <ImageBar images={bottomImages} />
      </div>
    </div>
  </section>
);

const SoftwareDesign: FC = () => (
  <PairedSlide
    title="software-design"
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

const TestCase: FC = () => (
  <>
    <section title="test-case" data-auto-animate>
      <h3 data-id="title">Test-Case</h3>
      <div className="flex justify-around items-start">
        <div className="w-5/12">
          <h6 data-id="test-case-design-title">Conceptual Design</h6>
          <p data-id="test-case-design-paragraph" className="text-2xl">
            Prefab
          </p>
          <div data-id="test-case-design">
            <img src="/typology.png" className="h-[40vh] w-full object-cover" />
          </div>
        </div>
        <div className="w-5/12">
          <h6 data-id="regulation-title">Berliner Bauordnung</h6>
          <p data-id="regulation-paragraph" className="text-2xl">
            § 35 Notwendige Treppenräume, Ausgänge
          </p>
          <div data-id="regulation-text">
            <p className="text-lg">
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
            <ol className="text-lg">
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
      </div>
    </section>
    <section title="components" data-auto-animate>
      <h3 data-id="title">Components</h3>
      <div className="flex justify-around items-start">
        <div className="w-5/12">
          <h6 data-id="test-case-design-title">Metabolistic Architecture</h6>
          <p data-id="test-case-design-paragraph" className="text-2xl">
            Kit-of-Parts
          </p>
          <div data-id="test-case-design">
            <img src="/kit.png" className="h-[40vh] w-full object-cover" />
          </div>
        </div>
        <div className="w-5/12">
          <h6 data-id="regulation-title">Building Code Berlin</h6>
          <p data-id="regulation-paragraph" className="text-2xl">
            § 35 Necessary stairwells, exits
          </p>
          <div data-id="regulation-text">
            <p className="text-lg">
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
            <ol className="text-lg">
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
    <section title="mapping" data-auto-animate>
      <h3 data-id="title">Mapping</h3>
      <div className="flex justify-around items-start">
        <div className="w-5/12">
          <h6 data-id="test-case-design-title">Design-Information-Model</h6>
          <p data-id="test-case-design-paragraph" className="text-2xl">
            Structured-Query-Language (SQL)
          </p>
          <div data-id="test-case-design">
            <img
              src="/design-schema.png"
              className="h-[40vh] w-full object-cover"
            />
          </div>
        </div>
        <div className="w-5/12">
          <h6 data-id="regulation-title">Ontology</h6>
          <p data-id="regulation-paragraph" className="text-2xl">
            Web Ontology Language (OWL)
          </p>
          <div data-id="regulation-text">
            <img
              data-id="regulation-text"
              src="/ontology.png"
              className="h-[30vh] w-full object-cover"
            />
          </div>
          <div data-id="regulation-constraints">
            <img
              data-id="regulation-constraints"
              src="/constraints.png"
              className="h-[10vh] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

const Prompt: FC = () => (
  <>
    <section data-auto-animate>
      <h3 data-id="title">Prompt Engineering</h3>
      <ul>
        <li className="fragment">
          <div data-id="task">Task</div>
        </li>
        <li className="fragment">
          <div data-id="examples">Examples</div>
        </li>
        <li className="fragment">
          <div data-id="inputs">Input Files</div>
        </li>
        <li className="fragment">
          <div data-id="requirements">Requirements</div>
        </li>
        <li className="fragment">
          <div data-id="deliverable">Deliverable</div>
        </li>
      </ul>
    </section>
    <section data-auto-animate>
      <h3 data-id="title">Prompt Engineering</h3>
      <div className="text-2xl text-left">
        <div data-id="task">
          <p>
            <strong>Task</strong>: Instantiate the OWL ontology from{" "}
            <code>onto</code> by creating OWL NamedIndividuals based on the data
            from <code>design data</code>, following the structure defined in{" "}
            <code>design schema</code>
          </p>
        </div>
        <div data-id="examples">
          <p>
            <strong>Examples</strong>: When instantiating the ontology, use the
            following OWL NamedIndividuals as examples:{" "}
            <code>example OWL individuals</code>
          </p>
        </div>
        <div data-id="inputs">
          <p>
            <strong>Input Files</strong>:
          </p>
          <ul>
            <li>
              <div data-id="ontology">
                <code>onto</code> - Defines the ontology with predefined
                classes, relationships, and properties.
              </div>
            </li>
            <li>
              <div data-id="design-schema">
                <code>design schema</code> - Contains the dataset to be
                instantiated.
              </div>
            </li>
            <li>
              <div data-id="design-format">
                <code>design data</code> - Specifies the structure and
                constraints of the dataset.
              </div>
            </li>
          </ul>
        </div>
        <div data-id="requirements">
          <p>
            <strong>Requirements</strong>:
          </p>
          <ul>
            <li>
              <div data-id="requirements-turtle">
                The output must be a valid OWL ontology in Turtle (.ttl) format.
              </div>
            </li>
            <li>
              <div data-id="requirements-named-individuals">
                Preserve the original ontology and incorporate the newly created
                individuals.
              </div>
            </li>
            <li>
              <div data-id="requirements-onto">
                Use only classes, relationships, and properties defined in{" "}
                <code>onto</code>.
              </div>
            </li>
            <li>
              <div data-id="requirements-complete">
                Include all relevant data from <code>design data</code>.
              </div>
            </li>
          </ul>
        </div>
        <div data-id="deliverable">
          <p>
            <strong>Deliverable</strong>:
          </p>
          <ul>
            <li>
              <div data-id="deliverable-ttl">
                A .ttl file containing the transformed data merged with the
                given ontology.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section data-auto-animate>
      <h3 data-id="title">Results</h3>
      <div className="flex items-center justify-center">
        <div
          data-id="ontology"
          className="text-center"
          style={{ margin: "0 1rem" }}
        >
          <img
            data-id="ontology-img"
            className={`object-cover h-[10vh] w-[13vw]`}
            style={{ marginBottom: "0px" }}
            src="/ontology.png"
          />
          <p
            data-id="ontology-text"
            className="text-[0.9rem]"
            style={{ marginTop: "0px" }}
          >
            Ontology
          </p>
        </div>
        <div
          data-id="design-schema"
          className="text-center"
          style={{ margin: "0 1rem" }}
        >
          <img
            data-id="design-schema-img"
            className={`object-cover h-[10vh] w-[13vw]`}
            style={{ marginBottom: "0px" }}
            src="/design-schema.png"
          />
          <p
            data-id="design-schema-text"
            className="text-[0.9rem]"
            style={{ marginTop: "0px" }}
          >
            Design Schema
          </p>
        </div>
        <div
          data-id="examples"
          className="text-center"
          style={{ margin: "0 1rem" }}
        >
          <img
            data-id="examples-img"
            className={`object-cover h-[10vh] w-[13vw]`}
            style={{ marginBottom: "0px" }}
            src="/examples.png"
          />
          <p
            data-id="examples-text"
            className="text-[0.9rem]"
            style={{ marginTop: "0px" }}
          >
            Examples
          </p>
        </div>
        <div
          data-id="design-format"
          className="text-center"
          style={{ margin: "0 1rem" }}
        >
          <img
            data-id="design-format-img"
            className={`object-cover h-[10vh] w-[13vw]`}
            style={{ marginBottom: "0px" }}
            src="/design-format.png"
          />
          <p
            data-id="design-format-text"
            className="text-[0.9rem]"
            style={{ marginTop: "0px" }}
          >
            Design Data
          </p>
        </div>
      </div>
      <table className="w-full text-2xl text-center">
        <thead>
          <tr>
            <th></th>
            <th className="fragment">Mistral Large</th>
            <th className="fragment">DeepSeek v3 Base</th>
            <th className="fragment">Claude 3.7 Sonnet (thinking)</th>
            <th className="fragment">Gemini 2.5 Pro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left">
              <div data-id="requirements-turtle">Valid OWL code</div>
            </td>
            <td className="fragment">❌</td>
            <td className="fragment">✅</td>
            <td className="fragment">✅</td>
            <td className="fragment">✅</td>
          </tr>
          <tr>
            <td className="text-left">
              <div data-id="requirements-named-individuals">
                Generated OWL individuals
              </div>
            </td>
            <td className="fragment">✅</td>
            <td className="fragment">✅</td>
            <td className="fragment">❌</td>
            <td className="fragment">✅</td>
          </tr>
          <tr>
            <td className="text-left">
              <div data-id="requirements-onto">Utilized the ontology</div>
            </td>
            <td className="fragment">❌</td>
            <td className="fragment">❌</td>
            <td className="fragment">❌</td>
            <td className="fragment">✅</td>
          </tr>
          <tr>
            <td className="text-left">
              <div data-id="requirements-complete">Extracted design data</div>
            </td>
            <td className="fragment">✅</td>
            <td className="fragment">✅</td>
            <td className="fragment">✅</td>
            <td className="fragment">✅</td>
          </tr>
        </tbody>
      </table>
    </section>
  </>
);

const Reasoning: FC = () => (
  <>
    <section data-auto-animate>
      <h3 data-id="title">Reasoning</h3>
      <div className="flex justify-around items-start">
        <div className="text-center">
          <img
            data-id="design-format-img"
            src="/design-format.png"
            className="h-[50vh] w-auto"
          />
          <p data-id="design-format-text" style={{ marginTop: "0px" }}>
            design-format
          </p>
        </div>
        <div className="text-center">
          <img
            data-id="design-img"
            src="/design.png"
            className="h-[50vh] w-auto"
          />
          <p data-id="design-text" style={{ marginTop: "0px" }}>
            design
          </p>
        </div>
        <div className="text-center">
          <img
            data-id="individuals-img"
            src="/individuals.png"
            className="h-[50vh] w-auto"
          />
          <p data-id="individuals-text" style={{ marginTop: "0px" }}>
            named individuals
          </p>
        </div>
      </div>
    </section>
    <section data-auto-animate>
      <h3 data-id="title">Explainability</h3>
      <div className="flex justify-around items-start">
        <div className="text-center">
          <img
            data-id="compliance-format-img"
            src="/compliance-format.png"
            className="h-[50vh] w-auto"
          />
          <p data-id="compliance-format-text" style={{ marginTop: "0px" }}>
            Compliance Format
          </p>
        </div>
        <div className="text-center h-[50vh] w-auto">
          <p
            data-id="thinking-log"
            className="text-2xl"
            style={{ marginTop: "0px" }}
          >
            … The concept of a "Storey" needs to be inferred. A set of pieces at
            the same vertical level (implied by connections like `t-0-0` to
            `t-0-1`) could constitute a `Storey`. A `Storey` likely contains
            `UsageUnit`s (Capsules) and is connected by `NecessaryStaircase`s
            (Tambours) or `ExternalStaircase`s. * The concept of a "Usage Unit"
            might be more complex than just a single capsule. Perhaps a block
            (`t-0-*` plus its connected `c-0-*`) represents a `UsageUnit`? The
            description mentions "A block is a usage unit". Let's refine: The
            group of pieces `t-0-0` to `t-0-3` and `c-0-*-*` could form one
            `UsageUnit`, and `t-1-0` to `t-1-3` and `c-1-*-*` could form
            another. * The concept of a `Storey` could be represented by the
            pieces at a certain level, e.g., `t-0-0`, `t-1-0`, `b-1` (connected
            to `t-1-0`), `c-0-0-*`, `c-1-0-*` could conceptually form `storey0`.
            ... * `totalGrossFloorArea`: This needs to be calculated for
            `UsageUnit` individuals. The JSON provides "effective floor area"
            for `Capsule` types. We need to sum these up for all capsules within
            a conceptual `UsageUnit`. For "block 0", we have 4 storeys * 6
            capsules/storey = 24 capsules. Each capsule has 8.74 m². Total area
            = 24 * 8.74 = 209.76 m². For "block 1", it's the same: 209.76 m². …
          </p>
          <p data-id="compliance-format-text" style={{ marginTop: "0px" }}>
            Thinking Log
          </p>
        </div>
      </div>
    </section>
  </>
);

const Report: FC = () => (
  <section data-auto-animate>
    <h3 data-id="title">Automated Compliance Check</h3>
    <div className="flex justify-around items-start">
      <div className="text-center">
        <img src="/report.png" className="h-[50vh] w-auto" />
        <p data-id="report-text" style={{ marginTop: "0px" }}>
          Report
        </p>
      </div>
    </div>
  </section>
);

const End: FC = () => (
  <section data-auto-animate>
    <h3 data-id="title">github.com/usalu/semio</h3>
    <div className="text-center">
      <img
        data-id="github"
        src="/github.png"
        className="h-[50vh] w-auto object-cover"
      />
      <p data-id="end-text" style={{ marginTop: "0px" }}>
        Thank you for your attention!
      </p>
    </div>
  </section>
);

const App: FC = () => {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "fade",
      // disableLayout: true,
      // other config options
      // plugins: [RevealMarkdown],
    });

    deckRef.current.initialize().then(() => {});

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
        <section>
          <Semio />
          <Title />
          <Subtitle />
          <Authors />
          <Institutions />
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
          <Design />
          <DesignFormat />
          <ComplianceCode />
          <ComplianceFormat />
          <ACCFramework />
          <Violation />
          <Comparison />
        </section>
        <section>
          <SoftwareDesign />
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
          <TestCase />
        </section>
        <section>
          <Prompt />
          <Reasoning />
          <Report />
          <End />
        </section>
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React, { type FC } from "react";

import { useEffect, useRef } from "react";
import Reveal from "reveal.js";

import "./index.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
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
      <h2 className="r-fit-text">Building-InformationModel Alignment</h2>
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
  const timelineData = [
    {
      date: "December 2020",
      title: "RAG",
      subtitle:
        "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
      url: "https://arxiv.org/abs/2005.11401",
      image: "/rag.png",
    },
    {
      date: "November 2024",
      title: "MCP",
      subtitle: "Model Context Protocol",
      url: "https://modelcontextprotocol.io/",
      image: "/mcp.png",
    },
    {
      date: "June 2025",
      title: "Cursor 1.0",
      subtitle:
        "Cursor is a code editor that uses MCP to retrieve and update model context.",
      url: "https://www.cursor.com/en/changelog/1-0",
      image: "/cursor.png",
    },
  ];

  return (
    <section title="timeline">
      <div className="w-[80vw] h-[80vh] mx-auto flex flex-col justify-center">
        {/* Timeline line with circles */}
        <div className="relative mb-8">
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-300"></div>
          <div className="flex justify-between relative">
            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-sm font-medium text-gray-600 mb-2">
                  {item.date}
                </div>
                <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-md relative z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="flex justify-between gap-4">
          {timelineData.map((item, index) => (
            <div key={index} className="flex-1 max-w-xs">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Frameworks: FC = () => (
  <section title="Frameworks" data-auto-animate>
    <h2 data-id="title">Frameworks</h2>
    <ul>
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
      <li data-id="framework-model-format" className="fragment">
        …
      </li>
    </ul>
  </section>
);

const Models: FC = () => (
  <section title="Datamodels" data-auto-animate>
    <h2 data-id="title">Datamodels</h2>
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
      <li data-id="framework-model-format">…</li>
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
      <li data-id="framework-model-format">…</li>
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
      <li data-id="framework-model-format">…</li>
    </ul>
  </section>
);

const Analogy: FC = () => (
  <section title="analogy">
    <img src="/sketchpad-demo.gif" data-preview-video="/coding.mp4" />
  </section>
);

const StatsAboutLLMs: FC = () => {
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

  const CustomTooltip: FC<{
    active?: boolean;
    payload?: any[];
    label?: string;
  }> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">
            <span className="font-bold">Model:</span>
            {` ${payload[0].payload.name}`}
          </p>
          {payload[0].payload.equivalent && (
            <p className="equivalent">
              <span className="font-bold">Equivalent:</span>
              {` ${payload[0].payload.equivalent}`}
            </p>
          )}
          <p className="intro">
            <span className="font-bold">Context:</span>
            {` ${yAxisFormatter(payload[0].value)}`}
          </p>
          <p className="desc">
            <span className="font-bold">Announced:</span>
            {` ${label ? dateFormatter(label) : ""}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section title="stats-about-llms" data-auto-animate>
      <div className="w-[80vw] h-[80vh] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            margin={{
              top: 5,
              right: 40,
              left: 40,
              bottom: 30,
            }}
            data={[
              {
                name: "GPT",
                context: 512,
                announced: "2018-06-11",
                equivalent: "< 1 page",
              },
              {
                name: "GPT-2",
                context: 1024,
                announced: "2019-11-05",
                equivalent: "~2 pages",
              },
              {
                name: "GPT-3",
                context: 2048,
                announced: "2020-05-28",
                equivalent: "~4 pages",
              },
              {
                name: "GPT-3.5",
                context: 16384,
                announced: "2022-03-15",
                equivalent: "~30 pages",
              },
              {
                name: "Claude 1.5",
                context: 100000,
                announced: "2023-03-14",
                equivalent: "~150 pages",
              },
              {
                name: "Gemini 1.5 Pro",
                context: 1000000,
                announced: "2024-02-15",
                equivalent: "~1500 pages",
              },
              {
                name: "Llama 4",
                context: 10000000,
                announced: "2025-04-05",
                equivalent: "~15000 pages",
              },
            ]}
          >
            <CartesianGrid stroke="#7b827d" strokeDasharray="5 5" />
            <XAxis
              dataKey="announced"
              tickFormatter={(value) => (value ? dateFormatter(value) : "")}
            />
            <YAxis dataKey="context" tickFormatter={yAxisFormatter} />
            <Line type="monotone" dataKey="context" stroke="#ff344f" />
            <Tooltip content={<CustomTooltip />} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

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

const Ast: FC = () => (
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

const ConstraintServer: FC = () => (
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
        className="h-[35vh] w-auto object-cover"
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
        <ImageBar images={bottomImages} imgClassName="h-[16.6vh] w-[16.6vh]" />
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

const AstComplianceFormat: FC = () => (
  <PairedSlide
    title="ast-compliance-format"
    topImages={[...imagesRow1.slice(0, 3), ...imagesRow1.slice(4)]}
    mainImageLeft={imagesRow1[3]}
    mainImageRight={imagesRow2[3]}
    bottomImages={[...imagesRow2.slice(0, 3), ...imagesRow2.slice(4)]}
  />
);

const DevServerConstraintServer: FC = () => (
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

const Regulation: FC = () => (
  <>
    <section title="regulation" data-auto-animate>
      <h3 data-id="title">Berliner Bauordnung (BauO Bln)</h3>
      <h4 data-id="regulation-title">§ 35 Notwendige Treppenräume, Ausgänge</h4>
      <p data-id="regulation-text">
        (1) Jede notwendige Treppe muss zur Sicherstellung der Rettungswege aus
        den Geschossen ins Freie in einem eigenen, durchgehenden Treppenraum
        liegen (notwendiger Treppenraum). Notwendige Treppenräume müssen so
        angeordnet und ausgebildet sein, dass die Nutzung der notwendigen
        Treppen im Brandfall ausreichend lange möglich ist. Notwendige Treppen
        sind ohne eigenen Treppenraum zulässig
      </p>
      <ul>
        <li data-id="regulation-one">
          in Gebäuden der Gebäudeklassen 1 und 2,{" "}
        </li>
        <li data-id="regulation-two">
          für die Verbindung von höchstens zwei Geschossen innerhalb derselben
          Nutzungseinheit von insgesamt nicht mehr als 200 m²
          Brutto-Grundfläche, wenn in jedem Geschoss ein anderer Rettungsweg
          erreicht werden kann,{" "}
        </li>
        <li data-id="regulation-three">
          als Außentreppe, wenn ihre Nutzung ausreichend sicher ist und im
          Brandfall nicht gefährdet werden kann.{" "}
        </li>
      </ul>
    </section>
    <section title="regulation-text" data-auto-animate>
      <h3 data-id="title">Berliner Bauordnung (BauO Bln)</h3>
      <h4 data-id="regulation-title">§ 35 Necessary stairwells, exits</h4>
      <p data-id="regulation-text">
        (1) Each necessary staircase must be located in a separate, continuous
        stairwell to ensure escape routes from the storeys to the outside
        (necessary stairwell). Necessary stairwells must be arranged and
        designed in such a way that the use of the necessary stairs is possible
        for a sufficiently long time in the event of fire. Necessary staircases
        are permitted without a separate stairwell
      </p>
      <ul>
        <li data-id="regulation-one">
          in buildings of building classes 1 and 2,
        </li>
        <li data-id="regulation-two">
          {" "}
          for connecting a maximum of two storeys within the same usage unit
          with a total gross floor area of no more than 200 m², if a different
          escape route can be reached on each storey,
        </li>
        <li data-id="regulation-three">
          as an external staircase if its use is sufficiently safe and cannot be
          endangered in the event of fire.
        </li>
      </ul>
    </section>
  </>
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
        <Regulation />
        <section>
          <Semio />
          <Title />
          <Subtitle />
        </section>
        <section>
          <StatsAboutLLMs />
          <Timeline />
        </section>
        <Analogy />
        <section>
          <Software />
          <Code />
          <Docs />
          <Ast />
          <DevServer />
          <CodeError />
        </section>
        <section>
          <Building />
          <DesignFormat />
          <ComplianceCode />
          <ComplianceFormat />
          <ConstraintServer />
          <Violation />
        </section>
        <Comparison />
        <section>
          <SoftwareBuilding />
          <CodeDesignFormat />
          <DocsComplianceCode />
          <AstComplianceFormat />
          <DevServerConstraintServer />
          <ErrorViolation />
        </section>
        <section>
          <Frameworks />
          <Models />
          <Formats />
          <Alignment />
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

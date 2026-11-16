import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Database,
  Layers3,
  BarChart3,
  Github,
  Linkedin,
  MapPin,
  Check,
  Copy,
  Plus,
  Minus,
  Award,
  GraduationCap,
  Zap,
} from "lucide-react";
import { portfolioData as data } from "../data/portfolioData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SectionHeading = ({ number, label, title, children }) => (
  <div className="section-heading">
    <div>
      <p className="eyebrow">
        <span>{number}</span> {label}
      </p>
      <h2>{title}</h2>
    </div>
    {children && <p className="section-intro">{children}</p>}
  </div>
);

function PipelineVisual() {
  return (
    <div
      className="pipeline-visual"
      aria-label="Illustrative data pipeline: cloud sources through Spark and Delta Lake to analytics"
    >
      <div className="visual-topline">
        <span>
          <i /> THE DATA ENGINEER'S CANVAS
        </span>
        <span>INGEST → INSIGHT</span>
      </div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <svg
        className="pipeline-wires"
        viewBox="0 0 540 440"
        fill="none"
        aria-hidden="true"
      >
        <path d="M95 155H190Q215 155 215 180V222H275M95 300H180Q215 300 215 270V222M320 222H385Q410 222 410 190V140H460M320 222H385Q410 222 410 255V315H460" />
        <path
          className="wire-highlight"
          d="M95 155H190Q215 155 215 180V222H320H385Q410 222 410 255V315H460"
        />
      </svg>
      <div className="pipeline-node source-node">
        <Database size={23} />
        <span>Cloud sources</span>
        <small>INGEST</small>
      </div>
      <div className="pipeline-node lake-node">
        <Layers3 size={23} />
        <span>Delta Lake</span>
        <small>STORE</small>
      </div>
      <div className="pipeline-core">
        <div className="core-symbol">
          <Zap size={38} strokeWidth={1.5} />
        </div>
        <strong>Apache Spark</strong>
        <span>TRANSFORM & OPTIMIZE</span>
      </div>
      <div className="pipeline-node serve-node">
        <Database size={22} />
        <span>Apache Pinot</span>
        <small>SERVE</small>
      </div>
      <div className="pipeline-node analytics-node">
        <BarChart3 size={23} />
        <span>Analytics</span>
        <small>ACTIVATE</small>
      </div>
      <div className="visual-caption">
        <span>
          From raw signals.
          <br />
          <strong>To real business impact.</strong>
        </span>
        <span className="visual-mark">SM</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [expanded, setExpanded] = useState(null);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.07 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2500);
    return () => clearTimeout(timer);
  }, [copied]);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(data.personal.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${data.personal.email}`;
    }
  };
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <i /> OPEN TO OPPORTUNITIES <span>•</span> BENGALURU, IN
            </div>
            <p className="hero-greeting">Hi, I'm Subhadeep.</p>
            <h1>
              I turn data
              <br />
              into <em>possibility.</em>
            </h1>
            <p className="hero-description">
              {data.personal.title} at <strong>{data.personal.company}.</strong>{" "}
              {data.personal.experience} building large-scale batch and
              low-latency pipelines across Databricks, Snowflake, AWS, and GCP.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={19} />
              </a>
              <a className="text-link" href={`mailto:${data.personal.email}`}>
                Let's talk <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="mini-rule" /> PYSPARK · DATABRICKS · SNOWFLAKE ·
              SQL
            </div>
          </div>
          <PipelineVisual />
          <div className="hero-bottom">
            <span>
              <MapPin size={14} /> {data.personal.location}
            </span>
            <a href="#impact">
              A LITTLE LESS LATENCY. A LOT MORE IMPACT. <ArrowDown size={15} />
            </a>
            <div>
              <a
                href={data.social.github}
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
              </a>
              <a
                href={data.social.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </section>
        <section className="impact-band" id="impact" aria-label="Career impact">
          <div className="wrap metrics">
            {data.keyMetrics.map((metric, i) => (
              <div className="metric" key={metric.label}>
                <span className="metric-index">0{i + 1} /</span>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <small>{metric.description}</small>
              </div>
            ))}
          </div>
        </section>
        <section className="section wrap reveal" id="projects">
          <SectionHeading
            number="01"
            label="SELECTED WORK"
            title={
              <>
                Engineered for
                <br />
                <em>real-world impact.</em>
              </>
            }
          >
            A selection of production work at MiQ Digital — from high-throughput
            pipelines to analytics that keep up with the business.
          </SectionHeading>
          <div className="projects-grid">
            {data.projects.map((project, i) => (
              <article
                className={`project project-${i} ${expanded === i ? "project-expanded" : ""}`}
                key={project.title}
              >
                <div className="project-art" aria-hidden="true">
                  <span className="art-label">{project.category}</span>
                  {i === 0 ? (
                    <div className="lakehouse-art">
                      <div className="lakehouse-scale">
                        <strong>12M+</strong>
                        <span>RECORDS IN THE ANALYTICS UI</span>
                      </div>
                      <div className="lakehouse-steps">
                        <span>CONFIG</span>
                        <ArrowRight size={16} />
                        <span>PySpark</span>
                        <ArrowRight size={16} />
                        <span>DELTA</span>
                      </div>
                      <p>45% less refresh runtime</p>
                    </div>
                  ) : i === 1 ? (
                    <div className="automation-art integration-art">
                      <div>
                        <Layers3 size={27} />
                        <span>Unity Catalog / S3</span>
                      </div>
                      <ArrowRight size={24} />
                      <div>
                        <Database size={27} />
                        <span>Snowflake</span>
                      </div>
                      <span className="automation-stamp">
                        APACHE ICEBERG · EXTERNAL VOLUMES
                      </span>
                    </div>
                  ) : i === 2 ? (
                    <div className="query-art">
                      <div>
                        <span>SELECT</span> business_impact
                      </div>
                      <div>
                        <span>FROM</span> real_time_data
                      </div>
                      <div>
                        <span>WHERE</span> latency <b>&lt; 10s</b>
                      </div>
                      <div className="query-result">
                        <i /> 100K+ rows/query <strong>10s SLA</strong>
                      </div>
                    </div>
                  ) : (
                    <div className="batch-art">
                      <Database size={31} />
                      <strong>50M+</strong>
                      <span>ROWS / RUN</span>
                      <p>Idempotent writes. Automated backfills.</p>
                    </div>
                  )}
                  <span className="art-number">0{i + 1}</span>
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span>MiQ / ENGINEERING</span>
                    <span className="impact-tag">{project.impact}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <button
                    className="project-toggle"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    aria-expanded={expanded === i}
                    aria-controls={`project-detail-${i}`}
                  >
                    {expanded === i ? "Less detail" : "Explore the approach"}
                    {expanded === i ? <Minus size={17} /> : <Plus size={17} />}
                  </button>
                  <div
                    id={`project-detail-${i}`}
                    hidden={expanded !== i}
                    className="project-detail"
                  >
                    {project.approach}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="wrap section reveal about-grid">
            <div>
              <p className="eyebrow">
                <span>02</span> THE PERSON BEHIND THE PIPELINES
              </p>
              <h2>
                Curious by nature.
                <br />
                <em>Engineer by craft.</em>
              </h2>
              <div className="about-signature">
                Subhadeep Mondal <ArrowUpRight size={24} />
              </div>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                I like solving the problems between <span>raw data</span> and{" "}
                <span>a useful answer.</span>
              </p>
              <p>{data.personal.summary}</p>
              <p>
                Based in {data.personal.location}, I work across Databricks,
                Apache Pinot, AWS, and GCP. Away from the keyboard, it's{" "}
                {data.interests.join(", ").toLowerCase()}.
              </p>
              <div className="language-line">
                LET'S TALK IN <span>{data.languages.join(" / ")}</span>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section wrap reveal education-section"
          id="education"
        >
          <SectionHeading
            number="03"
            label="ACADEMIC BACKGROUND"
            title="Education"
          />
          <div className="education-grid">
            {data.education.map((item, i) => (
              <article className="education-card" key={item.institution}>
                <div className="education-card-top">
                  <span>0{i + 1}</span>
                  <GraduationCap size={25} />
                </div>
                <p className="education-qualification">{item.qualification}</p>
                <h3>{item.institution}</h3>
                {item.period && (
                  <p className="education-period">{item.period}</p>
                )}
                <div className="education-result">
                  <strong>{item.result}</strong>
                  <span>{item.resultLabel}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="section wrap reveal" id="experience">
          <SectionHeading
            number="04"
            label="THE JOURNEY"
            title={
              <>
                Building. Learning.
                <br />
                <em>Moving things forward.</em>
              </>
            }
          >
            Growing through hands-on ownership of production data systems,
            performance, and reliability.
          </SectionHeading>
          <div className="experience-list">
            {data.experience.map((exp, i) => (
              <article className="experience-row" key={exp.role}>
                <div className="experience-date">
                  <span className={i === 0 ? "current-role" : ""}>
                    {i === 0 ? "CURRENT" : "PREVIOUSLY"}
                  </span>
                  <p>{exp.period}</p>
                  <small>{exp.location}</small>
                </div>
                <div className="experience-content">
                  <div className="role-title">
                    <h3>{exp.role}</h3>
                    <span>
                      {exp.company} <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <ul>
                    {exp.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="skills-section" id="skills">
          <div className="wrap section reveal">
            <SectionHeading
              number="05"
              label="THE TOOLKIT"
              title={
                <>
                  The right tools.
                  <br />
                  <em>The bigger picture.</em>
                </>
              }
            >
              From ingestion to insight, a practical toolkit built around
              reliable, efficient data systems.
            </SectionHeading>
            <div className="skills-list">
              {Object.entries(data.skills).map(([category, skills], i) => (
                <div className="skill-row" key={category}>
                  <span className="skill-number">0{i + 1}</span>
                  <h3>{category}</h3>
                  <div>
                    {skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="recognition">
              <p className="eyebrow">A FEW MILESTONES ALONG THE WAY</p>
              <div>
                {data.achievements.map((item) => (
                  <div key={item.title}>
                    <Award size={20} />
                    <h3>{item.title}</h3>
                    <p>
                      {item.organization} <span>· {item.period}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="wrap reveal">
            <p className="eyebrow">
              <span>06</span> WHAT'S NEXT?
            </p>
            <div className="contact-heading">
              <h2>
                Good work starts
                <br />
                with a <em>conversation.</em>
              </h2>
              <a
                className="contact-arrow"
                href={`mailto:${data.personal.email}`}
                aria-label="Email Subhadeep"
              >
                <ArrowUpRight size={48} />
              </a>
            </div>
            <p>
              Have an interesting data challenge or an opportunity in mind?
              <br />
              I'd love to hear about it.
            </p>
            <div className="contact-bottom">
              <a className="email-link" href={`mailto:${data.personal.email}`}>
                {data.personal.email}
              </a>
              <button
                className="copy-button"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                <span aria-live="polite">
                  {copied ? "Copied!" : "Copy email"}
                </span>
              </button>
              <div className="contact-social">
                <a href={data.social.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight size={15} />
                </a>
                <a href={data.social.github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

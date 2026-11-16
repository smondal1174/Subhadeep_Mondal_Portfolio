// Career content aligned with SUBHADEEP_MONDAL_NOV.pdf.
export const portfolioData = {
  personal: {
    name: "Subhadeep Mondal",
    title: "Data Engineer II",
    company: "MiQ Digital",
    experience: "4+ years",
    location: "Bengaluru, India",
    email: "subhadeep.mondal2001@gmail.com",
    summary:
      "Data Engineer with 4+ years of experience designing, developing, and optimizing large-scale batch and low-latency data pipelines and distributed processing systems. Strong expertise in Databricks, PySpark, Apache Spark, Snowflake, Delta Lake, and Unity Catalog, with hands-on experience building cloud-native ETL frameworks, optimizing complex SQL workloads, and implementing production-grade data quality and observability across AWS and GCP.",
  },
  keyMetrics: [
    {
      value: "45%",
      label: "Faster Lakehouse Refresh",
      description: "Config-driven ETL · 12M+ records",
      icon: "zap",
    },
    {
      value: "35%",
      label: "Lower Compute Costs",
      description: "Spark workload optimization",
      icon: "trending-up",
    },
    {
      value: "50M+",
      label: "Rows per Batch Run",
      description: "Idempotent, fault-tolerant writes",
      icon: "database",
    },
    {
      value: "60%",
      label: "Fewer Production Incidents",
      description: "Quality gates across 8+ pipelines",
      icon: "activity",
    },
  ],
  experience: [
    {
      company: "MiQ Digital",
      role: "Data Engineer II",
      location: "Bengaluru, India",
      period: "Apr 2025 – Present",
      achievements: [
        "Re-architected a monolithic pipeline into a config-driven ETL framework using PySpark, Delta Lake, and Unity Catalog on Databricks, reducing refresh runtime by 45% and powering a customer-facing analytics UI serving 12M+ records.",
        "Integrated Snowflake with the Unity Catalog-managed AWS S3 data lake using External Volumes and Apache Iceberg tables, eliminating daily batch ingestion and reducing data refresh latency from 24 hours to near real-time.",
        "Designed an end-to-end SQL query framework on Apache Pinot (StarTree) for complex joins, window functions, and multi-dataset aggregations; optimized storage layouts and execution plans to process 100K+ rows/query within a strict 10-second SLA under high concurrency.",
        "Built fault-tolerant pipelines using AWS S3, PySpark, Delta Lake, and PostgreSQL, processing 50M+ rows/run with idempotent, partition-scoped writes and automated backfill support.",
        "Optimized Spark workloads using AQE, broadcast joins, partition pruning, and Delta OPTIMIZE/ZORDER, resolving data skew and driver OOM errors while reducing cluster compute costs by 35%.",
        "Automated ingestion across 3+ external APIs using Databricks Asset Bundles and Jenkins CI/CD, reducing monthly refresh cycles from 1 week to less than 1 day and saving 30+ engineering hours/month.",
        "Strengthened 8+ critical pipelines with schema validation, data-quality gates, SLA dashboards, and automated alerts; achieved 70%+ pytest coverage and reduced production incidents by 60%.",
      ],
    },
    {
      company: "MiQ Digital",
      role: "Data Engineer I",
      location: "Bengaluru, India",
      period: "Jul 2022 – Apr 2025",
      achievements: [
        "Spearheaded a high-throughput batch pipeline ingesting and transforming 1 TB/day for a global TV intelligence platform, powering reporting workflows tied to $100M+ in annual revenue.",
        "Optimized legacy Databricks pipelines using Delta Lake, Z-Order indexing, and strategic repartitioning, reducing execution time by 83% (6 hours to 1 hour) and saving $12K+/year in cloud compute costs.",
        "Owned client-facing YouTube analytics pipelines on GCP (GCS, BigQuery), processing 25GB+ daily datasets across granular geo-temporal dimensions for multi-market reporting.",
        "Built and maintained scalable DSP ETL pipelines across US, UK, AU, and CA markets, incorporating automated alerting, SLA monitoring, and DataOps standards for high production availability.",
        "Architected a US campaign snapshot pipeline integrated with automated client presentation generation using Python (python-pptx), eliminating manual reporting workflows and saving 100+ analyst hours/quarter.",
      ],
    },
  ],
  skills: {
    "Programming & Query Languages": [
      "Python",
      "PySpark",
      "SQL",
      "Scala",
      "Pandas",
      "Pytest",
      "Shell Scripting",
    ],
    "Big Data & Lakehouse": [
      "Databricks",
      "Apache Spark",
      "Delta Lake",
      "Unity Catalog",
      "Databricks Workflows",
      "Apache Iceberg",
      "Apache Pinot (StarTree)",
    ],
    "Cloud & Data Warehousing": [
      "AWS S3",
      "Redshift",
      "Athena",
      "AWS Glue",
      "Snowflake",
      "GCP BigQuery",
      "Google Cloud Storage",
    ],
    "Databases & Data Modeling": [
      "PostgreSQL",
      "MySQL",
      "NoSQL",
      "GraphDB",
      "OLAP/OLTP",
      "Data Modeling",
      "Complex SQL Optimization",
    ],
    "Data Engineering & Operations": [
      "ETL/ELT",
      "Databricks Asset Bundles",
      "Jenkins",
      "Git",
      "CI/CD",
      "Data Quality",
      "Schema Validation",
      "Workflow Automation",
      "SLA Monitoring",
    ],
  },
  projects: [
    {
      title: "Modular Lakehouse ETL Framework",
      category: "LAKEHOUSE ARCHITECTURE",
      description:
        "A config-driven framework replacing a monolithic pipeline and powering a customer-facing analytics UI with 12M+ records.",
      impact: "45% faster refresh",
      tech: ["Databricks", "PySpark", "Delta Lake", "Unity Catalog"],
      approach:
        "Re-architected the monolithic pipeline into a modular, config-driven ETL framework on Databricks using PySpark, Delta Lake, and Unity Catalog. The resulting pipeline reduced refresh runtime by 45% while serving 12M+ records to the customer-facing analytics UI.",
    },
    {
      title: "Snowflake & Iceberg Integration",
      category: "CROSS-PLATFORM ANALYTICS",
      description:
        "Connected Snowflake to a Unity Catalog-managed AWS S3 lake using External Volumes and Apache Iceberg tables.",
      impact: "24h → near real-time",
      tech: ["Snowflake", "Apache Iceberg", "Unity Catalog", "AWS S3"],
      approach:
        "Integrated Snowflake with the Unity Catalog-managed AWS S3 data lake through External Volumes and Apache Iceberg tables, eliminating daily batch ingestion and reducing data refresh latency from 24 hours to near real-time.",
    },
    {
      title: "Apache Pinot Query Framework",
      category: "LOW-LATENCY OLAP",
      description:
        "An end-to-end SQL framework for complex joins, window functions, and aggregations across multiple datasets.",
      impact: "100K+ rows · 10-second SLA",
      tech: ["Apache Pinot", "StarTree", "SQL"],
      approach:
        "Designed a reusable SQL query framework on Apache Pinot (StarTree). Tuned storage layouts and execution plans to process 100K+ rows/query within a strict 10-second SLA under high concurrency.",
    },
    {
      title: "High-Throughput Batch Pipelines",
      category: "RESILIENT BATCH ENGINEERING",
      description:
        "Fault-tolerant pipelines with idempotent, partition-scoped writes and automated backfill support.",
      impact: "50M+ rows/run",
      tech: ["AWS S3", "PySpark", "Delta Lake", "PostgreSQL"],
      approach:
        "Built fault-tolerant batch pipelines spanning AWS S3, PySpark, Delta Lake, and PostgreSQL. Idempotent writes scoped to partitions and automated backfill support enabled processing of 50M+ rows per run.",
    },
  ],
  achievements: [
    {
      title: "Quarterly Individual Best Performer",
      organization: "MiQ Digital · Lakehouse & DataOps delivery",
      period: "Q4 2025",
      icon: "award",
    },
    {
      title: "Second Runner-Up",
      organization: "Hack-IQ Gen-AI Hackathon · AI-driven analytics",
      period: "MiQ Digital",
      icon: "trophy",
    },
    {
      title: "Semester Topper",
      organization: "KIIT · Academic Excellence",
      period: "9.5 SGPA",
      icon: "graduation-cap",
    },
    {
      title: "Lakehouse Fundamentals Accreditation",
      organization: "Databricks · Verified Credential",
      period: "Accredited",
      icon: "badge-check",
    },
  ],
  education: {
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    location: "Bhubaneswar, India",
    cgpa: "9.4",
    period: "2019 – 2023",
  },
  interests: ["Cricket", "Formula 1", "Movies"],
  languages: ["English", "Bengali", "Hindi"],
  social: {
    linkedin: "https://www.linkedin.com/in/subhadeep-mondal-kiit/",
    github: "https://github.com/smondal1174",
    email: "subhadeep.mondal2001@gmail.com",
  },
};

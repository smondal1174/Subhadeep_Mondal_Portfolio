// Portfolio data extracted from CV
export const portfolioData = {
  personal: {
    name: "Subhadeep Mondal",
    title: "Data Engineer",
    tagline: "Building high-performance data pipelines that drive $100M+ in revenue",
    location: "Bengaluru, India",
    email: "subhadeep.mondal2001@gmail.com",
    phone: "+91-8927149558",
    summary: "Data Engineer with 2+ years of experience building and optimizing high-volume, cloud-native data pipelines. Specialized in reducing costs, improving performance, and implementing DataOps best practices. Proven track record of delivering measurable business impact through technical excellence."
  },

  keyMetrics: [
    {
      value: "83%",
      label: "Runtime Reduction",
      description: "6 hours to 1 hour",
      icon: "zap"
    },
    {
      value: "$100M",
      label: "Revenue Support",
      description: "TV Intelligence Dashboard",
      icon: "trending-up"
    },
    {
      value: "1TB/day",
      label: "Data Processing",
      description: "High-throughput pipelines",
      icon: "database"
    },
    {
      value: "100+",
      label: "Hours Saved",
      description: "Analyst automation",
      icon: "clock"
    }
  ],

  experience: [
    {
      company: "MIQ",
      role: "Data Engineer II",
      location: "Bengaluru, India",
      period: "Apr 2025 - Present",
      achievements: [
        "Designed and implemented an end-to-end SQL query framework on Apache Pinot / StarTree for complex analytics using joins, window functions, CASE logic, and aggregations across multiple datasets",
        "Tuned query execution plans and storage layouts for efficient processing of 100K+ rows per query, meeting strict SLA targets (<10s latency) under high concurrency",
        "Led DataOps adoption across production pipelines by refactoring monolithic jobs into modular components, adding unit tests, and enforcing CI/CD quality gates using Jenkins",
        "Built a centralized Databricks data health monitoring dashboard for tracking data arrival latency, pipeline runtimes, and SLA breaches, enabling proactive alerting and faster incident response"
      ]
    },
    {
      company: "MIQ",
      role: "Data Engineer I",
      location: "Bengaluru, India",
      period: "Jul 2023 - Apr 2025",
      achievements: [
        "Led development of a high-throughput batch processing pipeline handling 1 TB/day for a global TV intelligence dashboard, supporting reporting workflows tied to $100M in revenue",
        "Optimized Databricks workloads using Delta Lake, Z-Order indexing, and strategic repartitioning, reducing end-to-end runtime from 6 hours to 1 hour and saving $1K/month in compute costs",
        "Designed a US campaign snapshot pipeline and automated client-ready presentation generation using Python (pptx), saving 100+ analyst hours",
        "Owned YouTube client-facing data pipelines, managing geo and temporal metrics, and processing 25GB+ datasets using Google Cloud Storage and BigQuery",
        "Developed and maintained global DSP ETL ingestion pipelines across US, UK, AU, and CA markets, implementing alerting, monitoring, and DataOps best practices for production stability"
      ]
    }
  ],

  skills: {
    "Languages & Frameworks": ["Python", "PySpark", "Pandas", "SQL"],
    "Data Platforms": ["Databricks", "Apache Pinot", "Mixpanel", "StarTree"],
    "Cloud & Warehousing": ["AWS", "GCS", "BigQuery", "Redshift", "Athena"],
    "Databases": ["MySQL", "Delta Lake"],
    "Practices": ["DataOps", "CI/CD", "Data Quality", "Monitoring", "ETL/ELT"]
  },

  projects: [
    {
      title: "Apache Pinot Query Framework",
      description: "End-to-end SQL query framework for complex analytics with joins, window functions, and aggregations",
      impact: "<10s latency for 100K+ rows",
      tech: ["Apache Pinot", "StarTree", "SQL"],
      icon: "database"
    },
    {
      title: "Data Health Monitoring Dashboard",
      description: "Centralized Databricks dashboard for tracking pipeline health, latency, and SLA breaches",
      impact: "Faster incident response",
      tech: ["Databricks", "Python", "Monitoring"],
      icon: "activity"
    },
    {
      title: "TV Intelligence Pipeline",
      description: "High-throughput batch processing pipeline for global TV advertising intelligence",
      impact: "$100M revenue support, 1TB/day",
      tech: ["Databricks", "PySpark", "Delta Lake"],
      icon: "tv"
    },
    {
      title: "Automated Presentation Generator",
      description: "Campaign snapshot pipeline with automated client-ready presentation generation",
      impact: "100+ analyst hours saved",
      tech: ["Python", "pptx", "Automation"],
      icon: "file-presentation"
    }
  ],

  achievements: [
    {
      title: "Quarterly Best Performer",
      organization: "MIQ",
      period: "Q4 2025",
      icon: "award"
    },
    {
      title: "Second Runner-Up",
      organization: "Gen-AI Hackathon (Hack-IQ)",
      period: "2025",
      icon: "trophy"
    },
    {
      title: "Semester Topper",
      organization: "KIIT",
      period: "9.5 CGPA",
      icon: "graduation-cap"
    },
    {
      title: "Databricks Certified",
      organization: "Databricks Lakehouse Fundamentals",
      period: "2024",
      icon: "badge-check"
    }
  ],

  education: {
    institution: "Kalinga Institute of Industrial Technology",
    degree: "B.Tech in Computer Science and Engineering",
    location: "India",
    cgpa: "9.4",
    period: "2019 - 2023"
  },

  interests: ["Cricket", "Formula 1", "Movies"],
  languages: ["English", "Bengali", "Hindi"],

  social: {
    linkedin: "https://www.linkedin.com/in/subhadeep-mondal-kiit/",
    github: "https://github.com/smondal1174",
    email: "subhadeep.mondal2001@gmail.com"
  }
};
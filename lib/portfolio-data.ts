export type ProjectLinkStatus = "private" | "request" | "coming_soon"

export type ProjectLinks = {
  github?: string
  demo?: string
  status?: ProjectLinkStatus
}

export type Project = {
  id: string
  title: string
  summary: string
  problem: string
  solution: string
  impact: string
  tags: string[]
  links: ProjectLinks
  visibility: "featured" | "more"
}

export const projects: Project[] = [
  {
    id: "ai-legal-assistant",
    title: "AI Legal Assistant",
    summary: "An assistant for legal research, retrieval, and case analysis over large legal corpora.",
    problem: "Manual legal research is slow and difficult to scale across multiple case types.",
    solution: "Built a multi-step RAG workflow with memory, semantic retrieval, and legal reasoning agents.",
    impact: "Delivered cited responses with traceable evidence for each recommendation.",
    tags: ["LLM", "RAG", "Legal AI", "Agents", "Embeddings"],
    links: {
      status: "request",
    },
    visibility: "featured",
  },
  {
    id: "insurance-success-predictor",
    title: "AI Insurance Case Success Predictor",
    summary: "A prediction assistant for insurance disputes using legal retrieval and explainable outputs.",
    problem: "Case teams needed faster risk estimation before committing legal resources.",
    solution: "Combined embeddings, retrieval tools, and agent reasoning to score case success likelihood.",
    impact: "Added explainability layers that surfaced similar prior cases behind each prediction.",
    tags: ["Agents", "Prediction", "RAG", "LLM", "Insurance AI"],
    links: {
      status: "request",
    },
    visibility: "featured",
  },
  {
    id: "chat-with-database",
    title: "Chat with Database (OLAP-LLM)",
    summary: "A conversational analytics tool that converts natural language into structured data insights.",
    problem: "Business stakeholders relied on engineers for routine analytics requests.",
    solution: "Connected PostgreSQL and MongoDB to an LLM interface for query generation and aggregation.",
    impact: "Enabled self-serve analytics for non-technical users through guided question workflows.",
    tags: ["OLAP", "LLM", "Data Engineering", "LangChain", "PostgreSQL"],
    links: {
      status: "private",
    },
    visibility: "featured",
  },
  {
    id: "bart-mnli-cnn-news",
    title: "BART-MNLI CNN News Zero-Shot Classifier",
    summary: "A zero-shot classifier fine-tuned for high-accuracy news topic classification.",
    problem: "Topic labeling at scale needed high precision without large per-class annotation effort.",
    solution: "Fine-tuned BART-Large-MNLI on CNN News for robust transfer-based classification.",
    impact: "Reached about 94% F1 and 94% accuracy on validation data.",
    tags: ["Zero-Shot", "BART", "News Classification", "NLP"],
    links: {
      demo: "https://huggingface.co/AyoubChLin/Bart-MNLI-CNN_news",
      status: "private",
    },
    visibility: "featured",
  },
  {
    id: "bert-arxiv-metadata",
    title: "BERT Fine-Tuned on arXiv Metadata",
    summary: "A BERT classifier for identifying content categories from academic metadata.",
    problem: "Research metadata required consistent topical labeling for downstream discovery tasks.",
    solution: "Fine-tuned a BERT base model on arXiv metadata classification targets.",
    impact: "Improved metadata categorization consistency for research indexing workflows.",
    tags: ["BERT", "Academic NLP", "Classification", "Research Papers"],
    links: {
      demo: "https://huggingface.co/AyoubChLin/bert-finetuned-Arxiv",
      status: "private",
    },
    visibility: "featured",
  },
  {
    id: "northwind-purchase-orders",
    title: "Northwind Purchase Orders Document Dataset",
    summary: "A labeled dataset of purchase-order documents converted for NLP training pipelines.",
    problem: "Document AI experiments needed realistic business documents in structured formats.",
    solution: "Converted around 830 purchase orders from PDF into CSV/Parquet with clean labels.",
    impact: "Reduced setup time for document classification and extraction benchmarks.",
    tags: ["Dataset", "Document Classification", "Business Data", "PDF to CSV"],
    links: {
      demo: "https://huggingface.co/datasets/AyoubChLin/northwind_PurchaseOrders",
      status: "private",
    },
    visibility: "featured",
  },
  {
    id: "northwind-stock-report",
    title: "Northwind Stock Report Dataset",
    summary: "A monthly stock and category report dataset prepared for document analytics tasks.",
    problem: "Stock report automation required labeled examples across reporting formats.",
    solution: "Generated and labeled report PDFs for classification and information extraction tasks.",
    impact: "Created reusable benchmark data for finance-oriented document AI pipelines.",
    tags: ["Dataset", "Finance", "Document Analytics", "PDF Generation"],
    links: {
      demo: "https://huggingface.co/datasets/AyoubChLin/northwind-Stock_rapport",
      status: "private",
    },
    visibility: "more",
  },
  {
    id: "distilbert-med-hana",
    title: "DistilBERT-MLM Medical and Hana Classifier",
    summary: "A DistilBERT-based model for domain-specific classification workflows.",
    problem: "Domain text classification required smaller models with practical inference speed.",
    solution: "Built a DistilBERT MLM pipeline adapted to medical and Hana label sets.",
    impact: "Expanded the model portfolio with a lightweight classifier for constrained environments.",
    tags: ["DistilBERT", "MLM", "Medical NLP", "Classification"],
    links: {
      demo: "https://huggingface.co/AyoubChLin/distilbert-mlm-med-hana-classification",
      status: "private",
    },
    visibility: "more",
  },
  {
    id: "qwen-passet-classifier",
    title: "Qwen2.5-Coder LLM Passet Classifier",
    summary: "An LLM-based classifier built from Qwen2.5-Coder-7B-Instruct for passet tasks.",
    problem: "The passet taxonomy needed robust language understanding across ambiguous records.",
    solution: "Trained and packaged a Qwen2.5-Coder classifier in a production-ready 16-bit setup.",
    impact: "Delivered a specialized instruction-tuned classifier for targeted downstream automation.",
    tags: ["LLM", "Qwen2.5", "Classification", "Instruct"],
    links: {
      demo: "https://huggingface.co/AyoubChLin/Qwen2.5-Coder-7B-Instruct_passet_classifer_1.0_16_bit",
      status: "private",
    },
    visibility: "more",
  },
]

export type Experience = {
  id: string
  role: string
  company: string
  period: string
  highlights?: string[]
  projects?: {
    name: string
    context: string
    description: string
  }[]
}

export const experiences: Experience[] = [
  {
    id: "paseetah-ai-data-engineer",
    role: "AI Engineer",
    company: "Paseetah",
    period: "10/2024 - Present",
    projects: [
      {
        name: "Paseet chatbot - Geospatial Interactions and LLM Classification Agent",
        context: "Riyadh - 4 months - Part-Time AI Engineer",
        description:
          "Implemented support for geospatial interactions, including adding and processing polygon geometry directly within the chat interface (property boundaries, zones, land selection, etc.), and fine-tuned open-source LLMs to build a custom classification agent for better intent detection and property-related query categorization.",
      },
      {
        name: "Paseetah Platform - Data Quality, GeoAI, and Automation Project",
        context: "Riyadh - 12 months - AI & Data Engineer",
        description:
          "Improved legacy datasets (parcels, transactions, roads) by cleaning data, fixing missing information, and harmonizing inconsistent attributes; designed multi-step pipelines to detect outliers in real-estate transactions and align each transaction with its correct parcel using spatial matching and rule-based validation; developed an LLM agent to extract legal rules from building codes into machine-readable formats; and performed large-scale scraping from open data sources to enrich the internal knowledge base for downstream AI models.",
      },
    ],
  },
  {
    id: "jurai-part-time-llm-engineer",
    role: "Part-Time LLM Engineer & Full-Stack Developer",
    company: "JURAI",
    period: "1/2025 - 12/2025",
    projects: [
      {
        name: "Jurai Assistant",
        context: "Denmark - 6 months - LLM Engineer & Full-Stack Developer",
        description:
          "Designed and implemented the full agentic AI architecture, including retrieval, classifier, and reasoning agents using LangChain and CrewAI; built automated large-scale scraping pipelines for Danish legal cases and laws; developed the backend ecosystem with FastAPI for AI orchestration, RAG pipelines, authentication, chat memory, and Pinecone embeddings; and deployed and maintained production workloads on AWS EC2 with Docker.",
      },
      {
        name: "Predict AI",
        context: "Denmark - 7 months - LLM Engineer & Full-Stack Developer",
        description:
          "Designed the end-to-end AI pipeline for new client case processing, structured fact extraction, API-based enrichment (flight and weather), and resilient validation/fallback handling; built the semantic retrieval and comparison engine to match cases with historical European court decisions using LLMs and embeddings; and developed the decision-prediction module to estimate likely court outcomes and improve insurers' case resolution efficiency.",
      },
    ],
  },
  {
    id: "buysell-frontend-developer",
    role: "Front-End Developer",
    company: "BuySell",
    period: "2/2024 - 12/2024",
    highlights: [
      "Developed and improved front-end features for the Admin Platform using Next.js, TypeScript, and Tailwind, including dashboards, forms, tables, and management interfaces.",
      "Integrated and tested APIs across admin workflows, ensuring reliable data flow and improving overall UI/UX performance.",
      "Built key e-commerce features on the main platform such as product pages, category listings, search, filters, cart interactions, and navigation improvements.",
      "Optimized performance and code quality through component refactoring, responsive design, and best practices to improve speed, usability, and maintainability across both platforms.",
    ],
  },
  {
    id: "sig-services-python-developer",
    role: "Python Developer",
    company: "SIG Services",
    period: "9/2023 - 12/2023",
    highlights: [
      "Designed and implemented Odoo modules to meet business requirements.",
      "Developed and tested APIs for platform integrations.",
    ],
  },
  {
    id: "icosnet-artificial-intelligence-intern",
    role: "Artificial Intelligence Intern",
    company: "Icosnet",
    period: "1/2023 - 7/2023",
    highlights: [
      "Created an intelligent system using transformers for accurate, context-based classification of company documents.",
      "Developed a context-aware classification workflow to improve internal document processing.",
    ],
  },
]

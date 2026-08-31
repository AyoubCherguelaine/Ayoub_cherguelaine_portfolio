export type ProjectLinkStatus = "private" | "request" | "coming_soon" | "available"

export type ProjectLinks = {
  github?: string
  demo?: string
  status?: ProjectLinkStatus
}

export type ProjectDetails = {
  timeline: string
  roleScope: string
  teamSetup: string
  architecture: string
  dataEvaluation: string
  productionOps: string
  lessonsLearned: string
}

export type PublicEvidencePlatform = "github" | "huggingface_model" | "huggingface_dataset"

export type PublicEvidenceVisibility = "public" | "private"

export type PublicEvidenceMetrics = {
  downloads?: number
  likes?: number
  stars?: number
}

export type PublicEvidence = {
  platform: PublicEvidencePlatform
  label: string
  url: string
  visibility: PublicEvidenceVisibility
  metrics?: PublicEvidenceMetrics
  verifiedOn: "2026-09-01"
}

export type Project = {
  id: string
  title: string
  summary: string
  problem: string
  solution: string
  impact: string
  coverImage: string
  tags: string[]
  links: ProjectLinks
  details: ProjectDetails
  publicEvidence?: PublicEvidence[]
  visibility: "featured" | "more"
  priority?: number
}

export type ProfileSnapshot = {
  verifiedOn: "2026-09-01"
  verifiedLabel: "September 1, 2026"
  github: {
    publicRepos: number
    followers: number
    following: number
  }
  huggingFace: {
    publicModels: number
    publicDatasets: number
  }
}

export const profileSnapshot: ProfileSnapshot = {
  verifiedOn: "2026-09-01",
  verifiedLabel: "September 1, 2026",
  github: {
    publicRepos: 60,
    followers: 40,
    following: 49,
  },
  huggingFace: {
    publicModels: 52,
    publicDatasets: 11,
  },
}

export const projects: Project[] = [
  {
    id: "ocr-service",
    title: "Open-Source OCR Service",
    summary:
      "A self-hosted OCR service built with FastAPI and open-source computer-vision/OCR models for document text extraction.",
    problem:
      "Existing OCR tools were either closed APIs or lacked a clean deployable backend interface for document pipelines.",
    solution:
      "Developed a FastAPI service integrating open-source OCR models with a simple API contract for uploading documents and returning extracted text.",
    impact:
      "Created a reusable internal OCR endpoint that can be embedded into larger document-processing workflows without external API dependencies.",
    coverImage: "/projects/ocr-service.svg",
    tags: ["FastAPI", "OCR", "Computer Vision", "Python", "Open Source"],
    links: {
      github: "https://github.com/AyoubCherguelaine/vision-ocr-service-",
      status: "available",
    },
    details: {
      timeline: "Developed as an open-source internal service with model selection and API hardening phases.",
      roleScope:
        "Built service endpoints, model integration, input validation, and response normalization for downstream consumers.",
      teamSetup: "Solo development with peer review on model and API design.",
      architecture:
        "FastAPI backend exposing document upload endpoints, preprocessing, OCR model inference, and structured JSON response formats.",
      dataEvaluation:
        "Benchmarked text extraction quality across scanned document types and measured latency under concurrent requests.",
      productionOps:
        "Packaged for containerized deployment with health checks and basic rate limiting.",
      lessonsLearned:
        "OCR quality in production depends as much on preprocessing and layout handling as on model choice.",
    },
    visibility: "more",
    priority: 1,
  },
  {
    id: "drive-like-document-platform",
    title: "Drive-Like Document Management Platform",
    summary:
      "A self-hosted Drive-like platform with AI-powered document classification and a full-stack interface.",
    problem:
      "Teams needed a private document workspace with semantic search and classification, without relying on public cloud storage.",
    solution:
      "Built a full-stack document management platform with upload, storage, metadata management, and AI classification integration for automatic document tagging and retrieval.",
    impact:
      "Delivered a private document workspace combining standard Drive-like workflows with downstream AI classification hooks.",
    coverImage: "/projects/drive-like-document-platform.svg",
    tags: ["Full-Stack", "Document Management", "AI Classification", "Storage", "TypeScript"],
    links: {
      status: "private",
    },
    details: {
      timeline: "Built iteratively across storage, permissioning, frontend UX, and AI classification integration.",
      roleScope:
        "Owned full-stack development: backend APIs, storage abstractions, frontend file management UI, and AI integration points.",
      teamSetup: "Individual project with focused feature iterations.",
      architecture:
        "Full-stack app with file storage backend, metadata indexing, document classification pipeline, and responsive management interface.",
      dataEvaluation:
        "Validated classification accuracy across document types and measured retrieval relevance for semantic search.",
      productionOps:
        "Deployed privately with standard web-stack production hardening and backup considerations.",
      lessonsLearned:
        "Document management UX is only as good as metadata fidelity and classification reliability.",
    },
    visibility: "more",
    priority: 2,
  },
  {
    id: "gaming-marketplace-scraping",
    title: "Gaming Marketplace Scraping and Comparison System",
    summary:
      "An automated scraping and comparison system for gaming marketplace deals, including data collection, processing, and price comparison.",
    problem:
      "Gamers needed timely price comparison across marketplaces, but manual checking was slow and inconsistent.",
    solution:
      "Developed automated scraping pipelines for gaming marketplace listings, normalized product data, and implemented comparison logic with alerting on price drops.",
    impact:
      "Created a reliable price-monitoring workflow with structured data outputs suitable for notifications or dashboards.",
    coverImage: "/projects/gaming-marketplace-scraping.svg",
    tags: ["Python", "Scraping", "Data Pipelines", "Automation", "E-commerce"],
    links: {
      status: "private",
    },
    details: {
      timeline: "Built in stages: target-site analysis, scraper development, normalization, and comparison engine.",
      roleScope:
        "Designed scraping architecture, anti-blocking handling, data normalization, and comparison/alerting logic.",
      teamSetup: "Independent automation project.",
      architecture:
        "Scraping collectors, HTML parsing and normalization, product matching, price history, and comparison/alert modules.",
      dataEvaluation:
        "Evaluated coverage across marketplaces, duplicate-detection accuracy, and freshness of extracted prices.",
      productionOps:
        "Implemented scheduling, logging, and resilience patterns for long-running scraping jobs.",
      lessonsLearned:
        "Marketplace scraping reliability depends on selector stability, polite throttling, and structured change detection.",
    },
    visibility: "more",
    priority: 3,
  },
  {
    id: "lc-management-app",
    title: "Letter of Credit Management Web Application",
    summary:
      "A private web application for managing importation and LC (Letter of Credit) workflows in Algeria.",
    problem:
      "Import and LC tracking relied on fragmented spreadsheets and manual coordination, leading to status and documentation errors.",
    solution:
      "Built a private full-stack web application to manage importation workflows, LC documentation, status tracking, and stakeholder notifications.",
    impact:
      "Centralized LC workflow tracking with role-aware access and structured document handling.",
    coverImage: "/projects/lc-management-app.svg",
    tags: ["Full-Stack", "Web Application", "Workflow Automation", "TypeScript", "API Development"],
    links: {
      status: "private",
    },
    details: {
      timeline: "Delivered as a private business-facing web application with iterative workflow and UI refinement.",
      roleScope:
        "Owned full-stack implementation: backend APIs, database modeling, frontend workflows, and access control.",
      teamSetup: "Close collaboration with business users to validate workflow stages and document requirements.",
      architecture:
        "Full-stack app with workflow state machine, document management, role-based access, and notification mechanisms.",
      dataEvaluation:
        "Validated workflow correctness, document completeness, and usability across user roles.",
      productionOps:
        "Deployed privately with standard web-stack production hardening and backup considerations.",
      lessonsLearned:
        "Document-heavy workflows benefit from explicit state modeling and clear status visibility.",
    },
    visibility: "more",
    priority: 4,
  },
  {
    id: "saudi-arabic-dialect-models",
    title: "Saudi Arabic Dialect NLP Models",
    summary:
      "A collection of Saudi Arabic dialect models for dialect-specific NLP and conversational applications.",
    problem:
      "Most Arabic NLP resources focus on MSA, leaving Saudi dialect under-served for intent detection and conversation.",
    solution:
      "Developed and fine-tuned models targeting Saudi Arabic dialect for classification and conversational tasks, with dataset and artifact preparation for reproducibility.",
    impact:
      "Expanded available Arabic NLP coverage with dialect-specific artifacts and documented training setups.",
    coverImage: "/projects/saudi-arabic-dialect-models.svg",
    tags: ["Arabic NLP", "Dialect Modeling", "Fine-tuning", "Transformers", "Dataset"],
    links: {
      demo: "https://huggingface.co/collections/AyoubChLin/saudi-dialect-fine-tuned-models",
      status: "coming_soon",
    },
    details: {
      timeline: "Developed across dataset preparation, model experiments, and packaging for reuse.",
      roleScope:
        "Led dataset curation, model training/evaluation, and artifact packaging for downstream Arabic NLP use.",
      teamSetup: "Individual research and experimentation workflow.",
      architecture:
        "Transformer-based models adapted for Saudi dialect with tokenization and vocabulary considerations for Arabic text.",
      dataEvaluation:
        "Evaluated on dialect-specific benchmarks and compared against MSA-based baselines.",
      productionOps:
        "Packaged for reproducible experimentation with dataset and model card documentation.",
      lessonsLearned:
        "Dialect-specific tokenization and data curation materially affect Arabic NLP results beyond model choice alone.",
    },
    visibility: "more",
    priority: 5,
  },
  {
    id: "lfm-coding-agent",
    title: "LFM2.5-2.6B Fable5 Coding Agent",
    summary:
      "A lightweight coding-agent model fine-tuned from LFM2.5-2.6B on an agentic coding dataset, optimized for local inference.",
    problem:
      "Local coding assistance needed a lightweight instruction-following model with agentic behavior, rather than large general models.",
    solution:
      "Full fine-tuned LFM2.5-2.6B Fable5 on an agentic coding dataset, optimizing for local inference constraints while preserving instruction-following behavior.",
    impact:
      "Created a deployable lightweight coding-agent model suitable for local and resource-constrained environments.",
    coverImage: "/projects/lfm-coding-agent.svg",
    tags: ["LLM", "Fine-tuning", "Coding Agent", "Local Inference", "LFM"],
    links: {
      demo: "https://huggingface.co/AyoubChLin/lfm2.5-2.6b-fable5-coding-agent",
      status: "coming_soon",
    },
    details: {
      timeline: "Completed fine-tuning and evaluation with local inference benchmarking.",
      roleScope:
        "Prepared agentic coding dataset, executed fine-tuning, and validated inference behavior on coding tasks.",
      teamSetup: "Individual model adaptation and evaluation workflow.",
      architecture:
        "LFM2.5-2.6B-based model fine-tuned for agentic coding behavior with instruction-following and tool-use patterns.",
      dataEvaluation:
        "Evaluated on coding-agent benchmarks and measured instruction adherence, tool-use correctness, and latency.",
      productionOps:
        "Optimized for local inference deployment with quantization and lightweight serving paths.",
      lessonsLearned:
        "Lightweight coding agents require careful balance between model size, instruction tuning, and tool-use training data.",
    },
    visibility: "more",
  },
  {
    id: "ai-legal-assistant",
    title: "AI Legal Assistant",
    summary:
      "A stream-first legal document analysis assistant that processes uploaded PDFs through extraction, note generation, precedent retrieval, comparison, and staged prediction refinement.",
    problem:
      "Batch-style legal analysis flows produced delayed final answers with little transparency into intermediate extraction, retrieval, and reasoning quality.",
    solution:
      "Implemented a FastAPI `/process_doc_stream` pipeline backed by `StreamingLegalCaseProcessor`, using SSE events, token-aware chunking (`cl100k_base`), Pinecone similarity lookup, multithreaded case comparison, and incremental prediction refinement.",
    impact:
      "Turned opaque document processing into a live, inspectable workflow with persisted step artifacts (`01_text_extraction` to `05_legal_predictions`) and end-of-run aggregated output (`00_complete_results.json`).",
    coverImage: "/projects/ai-legal-assistant.svg",
    tags: ["FastAPI", "CrewAI", "Pinecone", "SSE", "Legal AI"],
    links: {
      status: "request",
    },
    details: {
      timeline:
        "Built through 2025 as an iterative legal-tech backend, then upgraded to a streaming architecture with structured step events and artifact persistence.",
      roleScope:
        "Owned backend design and implementation across file ingestion, legal-note generation, retrieval/comparison orchestration, SSE stream contracts, and JSON artifact outputs consumed by the frontend.",
      teamSetup:
        "Worked in a small product loop with legal-domain stakeholders and frontend collaborators to tune progress events, output schema, and review usability.",
      architecture:
        "FastAPI streams `/process_doc_stream` events while `StreamingLegalCaseProcessor` executes a 5-stage flow: PDF parsing (`Pdf2MD`), key-point extraction (`PointGetter`), token-budget chunking, vector retrieval (`CasesVectors.get_facts_from_note`), threaded comparison (`LegalCaseComparisonAgent` via `ThreadPoolExecutor`), and sequential prediction/refinement (`LegalDecisionPredictorAgent`).",
      dataEvaluation:
        "Evaluated output quality through chunk coverage, key-point relevance, similarity hit usefulness, and consistency of refined predictions across comparison batches, supported by per-step logs and JSON outputs.",
      productionOps:
        "Shipped with Docker Compose (Next.js + FastAPI), strict PDF validation/cleanup, low-latency streaming headers (`text/event-stream`, disabled buffering), and session log files (`streaming_legal_case_*.log`) for debugging.",
      lessonsLearned:
        "Legal users trusted the system more when intermediate artifacts were explicit and replayable; streaming transparency was as important as final prediction quality.",
    },
    visibility: "featured",
    priority: 6,
  },
  {
    id: "insurance-success-predictor",
    title: "AI Insurance Case Success Predictor",
    summary:
      "A travel-claim litigation prediction system that enriches new cases with flight context, legal references, historical analogs, and multi-agent decision synthesis.",
    problem:
      "Insurance/legal teams needed faster go/no-go triage for EU flight-compensation disputes, but manual review across facts, laws, and precedent was slow and inconsistent.",
    solution:
      "Built a FastAPI + SQLAlchemy backend (`/chat`) where `CaseProcessor` validates/normalizes case payloads, enriches with flight/weather signals, retrieves relevant laws and Pinecone-similar history cases, then executes concurrent reasoning stages before a final `GeneralDecisionPredictorAgent` synthesis.",
    impact:
      "Enabled real-time triage with SSE progress, bounded runtime controls (expected-time + timeout multiplier), and persisted decision traces per case for audit and review.",
    coverImage: "/projects/insurance-success-predictor.svg",
    tags: ["FastAPI", "SQLAlchemy", "Postgres", "Pinecone", "Insurance AI"],
    links: {
      status: "request",
    },
    details: {
      timeline:
        "Delivered in 2025 in phases: schema + ingestion, historical-case loading, retrieval/ranking, concurrent reasoning, then stream-oriented UX hardening.",
      roleScope:
        "Led backend architecture and implementation: SQLAlchemy domain models, orchestrator pipeline, vector retrieval weighting, agent chaining, and SSE contracts consumed by the Next.js frontend.",
      teamSetup:
        "Collaborated with legal and insurance stakeholders to align output schema and confidence framing with real claim-handling workflows.",
      architecture:
        "Pipeline entrypoint `/chat` constructs `CaseProcessor`, requires core fields (`planned_departure_date`, `flight`), enriches with `FlightAPI` markdown context, generates case humanization + law checks, retrieves similar cases through weighted Pinecone class scoring (`Information`, `Argument - Defendant`, `Argument - Plaintiff`), runs concurrent per-case stages (similarity, argument comparison, reasoning, decision), then finalizes via a two-task `GeneralDecisionPredictorAgent` JSON output.",
      dataEvaluation:
        "Validated similarity ranking relevance, monitored streamed event progression, and compared intermediate agent outputs against final decision probability consistency.",
      productionOps:
        "Production stack uses Docker Compose (PostGIS + backend + frontend), DB health checks before backend startup, thread-local DB sessions for worker safety, capped similar-case counts, timeout guards, and Google Drive ingestion for historical-case PDFs.",
      lessonsLearned:
        "Decision quality improved when flight signals, legal context, and precedent analogs were fused into one orchestrated stream instead of isolated tools.",
    },
    visibility: "featured",
    priority: 7,
  },
  {
    id: "chat-with-database",
    title: "Chat with Database (OLAP-LLM)",
    summary: "A conversational analytics tool that converts natural language into structured data insights.",
    problem: "Business stakeholders relied on engineers for routine analytics requests.",
    solution: "Connected PostgreSQL and MongoDB to an LLM interface for query generation and aggregation.",
    impact: "Enabled self-serve analytics for non-technical users through guided question workflows.",
    coverImage: "/projects/chat-with-database.svg",
    tags: ["OLAP", "LLM", "Data Engineering", "LangChain", "PostgreSQL"],
    links: {
      status: "private",
    },
    details: {
      timeline: "Multi-sprint internal build delivered across schema mapping, query-safety constraints, and dashboard integration.",
      roleScope:
        "Built NL-to-query flow, retrieval-aware schema grounding, and summarization layers for business-facing analytics responses.",
      teamSetup:
        "Partnered with analytics and platform teams to validate SQL quality, KPI definitions, and acceptable latency targets.",
      architecture:
        "Hybrid OLAP assistant with intent parsing, guarded SQL generation, execution middleware, and result-to-insight summarization.",
      dataEvaluation:
        "Benchmarked query correctness, execution success rate, and answer usefulness on a representative business-question set.",
      productionOps:
        "Implemented query allowlists, observability traces, and circuit-breaker behavior for expensive or unsafe requests.",
      lessonsLearned:
        "Strong schema context and strict query constraints were essential to safe self-serve analytics in production.",
    },
    visibility: "featured",
    priority: 8,
  },
  {
    id: "bart-mnli-cnn-news",
    title: "BART-MNLI CNN News Zero-Shot Classifier",
    summary:
      "A Hugging Face zero-shot news classifier fine-tuned from `facebook/bart-large-mnli` on `AyoubChLin/CNN_News_Articles_2011-2022`.",
    problem:
      "News categorization needed broad-topic coverage without building a large fully supervised pipeline for every category variant.",
    solution:
      "Fine-tuned BART-MNLI for zero-shot-style topic assignment and published an inference-ready model artifact on Hugging Face.",
    impact:
      "Model card reports 94% F1 and 94% accuracy on the CNN test split, with an openly reproducible deployment path.",
    coverImage: "/projects/bart-mnli-cnn-news.svg",
    tags: ["Zero-Shot", "BART", "News Classification", "NLP"],
    links: {
      demo: "https://huggingface.co/AyoubChLin/Bart-MNLI-CNN_news",
    },
    details: {
      timeline: "Published to Hugging Face on July 12, 2023, after data prep, fine-tuning, and model-card documentation.",
      roleScope:
        "Handled dataset preparation, fine-tuning, packaging, and Hub publication, with explicit model-card documentation of metrics and training setup.",
      teamSetup:
        "Co-developed with Faycal Boubekri (as listed in the model card), with shared validation on category behavior and outputs.",
      architecture:
        "Built on BART-Large-MNLI (12 layers, hidden size 1024, ~406M parameters) and exported as safetensors for zero-shot classification pipelines.",
      dataEvaluation:
        "Model card records one-epoch fine-tuning (max length 256) and evaluation at max length 128 with F1 and accuracy as primary metrics.",
      productionOps:
        "Published as an endpoint-compatible Hugging Face model with Apache-2.0 license and documented `transformers` usage snippet.",
      lessonsLearned:
        "In zero-shot settings, category wording and candidate-label design materially affect performance even when base model quality is strong.",
    },
    publicEvidence: [
      {
        platform: "huggingface_model",
        label: "Bart-MNLI-CNN_news model",
        url: "https://huggingface.co/AyoubChLin/Bart-MNLI-CNN_news",
        visibility: "public",
        metrics: {
          downloads: 7,
          likes: 0,
        },
        verifiedOn: "2026-09-01",
      },
    ],
    visibility: "featured",
    priority: 9,
  },
  {
    id: "bert-arxiv-metadata",
    title: "BERT Fine-Tuned on arXiv Metadata",
    summary:
      "A text-classification checkpoint fine-tuned from `bert-base-uncased` and published as `AyoubChLin/bert-finetuned-Arxiv`.",
    problem:
      "Academic metadata classification needed a reusable baseline model that could be quickly integrated into search/indexing experiments.",
    solution:
      "Trained and published a BERT classifier through the Hugging Face Trainer workflow with full training-table metrics in the model card.",
    impact:
      "Evaluation table reports F1 up to 0.8872 and ROC AUC 0.9052 after 6 epochs, creating a concrete benchmark artifact for follow-up runs.",
    coverImage: "/projects/bert-arxiv-metadata.svg",
    tags: ["BERT", "Academic NLP", "Classification", "Research Papers"],
    links: {
      demo: "https://huggingface.co/AyoubChLin/bert-finetuned-Arxiv",
    },
    details: {
      timeline: "Published on July 16, 2024, with trainer-generated run details and metric table.",
      roleScope:
        "Implemented training/evaluation setup, handled model packaging, and exposed the checkpoint as a public Hugging Face artifact.",
      teamSetup: "Individual model-development workflow with experiment tracking and model-card export from trainer outputs.",
      architecture:
        "BERT-base-uncased fine-tuned for multi-class metadata topic classification on arXiv-derived text features.",
      dataEvaluation:
        "Model card logs include validation loss 0.2203, F1 0.8872, ROC AUC 0.9052, and accuracy 0.3438 at epoch 6.",
      productionOps:
        "Published as safetensors + transformers artifact (Apache-2.0), including framework versions and reproducibility metadata.",
      lessonsLearned:
        "Detailed run logging is critical: without clear dataset/task notes, raw metrics alone are harder to operationalize.",
    },
    publicEvidence: [
      {
        platform: "huggingface_model",
        label: "bert-finetuned-Arxiv model",
        url: "https://huggingface.co/AyoubChLin/bert-finetuned-Arxiv",
        visibility: "public",
        metrics: {
          downloads: 1,
          likes: 0,
        },
        verifiedOn: "2026-09-01",
      },
    ],
    visibility: "featured",
    priority: 10,
  },
  {
    id: "northwind-purchase-orders",
    title: "Northwind Purchase Orders Document Dataset",
    summary:
      "A document-classification dataset of Northwind purchase orders published on Hugging Face with PDF and CSV assets.",
    problem:
      "Document-AI prototyping often lacks small, business-like datasets that include both visual document format and tabular structure.",
    solution:
      "Built and published a Northwind-derived purchase-order dataset with structured fields (`order_id`, dates, customer, products, quantity, unit price).",
    impact:
      "Created a reusable public benchmark for document classification/feature extraction with 879 downloads and 6 likes at the verification snapshot.",
    coverImage: "/projects/northwind-purchase-orders.svg",
    tags: ["Dataset", "Document Classification", "Business Data", "PDF to CSV"],
    links: {
      demo: "https://huggingface.co/datasets/AyoubChLin/northwind_PurchaseOrders",
    },
    details: {
      timeline: "Published on April 7, 2023, as a compact (`n<1K`) finance-oriented document dataset.",
      roleScope:
        "Prepared the data structure, generated document assets, and packaged a public dataset card with usage context and schema notes.",
      teamSetup:
        "Co-created with Faycal Boubekri (as stated in the dataset card) with focus on practical document analytics use cases.",
      architecture:
        "Dataset includes purchase-order PDFs plus tabular CSV representation, enabling both OCR/document workflows and structured-model pipelines.",
      dataEvaluation:
        "Tagged for `text-classification` and `feature-extraction`, language `en`, modality `document`, and Apache-2.0 reuse.",
      productionOps:
        "Published as a public Hugging Face dataset with card metadata, pretty name, and reproducible hub access.",
      lessonsLearned:
        "Providing both document and tabular forms in one dataset significantly lowers experimentation overhead for downstream teams.",
    },
    publicEvidence: [
      {
        platform: "huggingface_dataset",
        label: "northwind_PurchaseOrders dataset",
        url: "https://huggingface.co/datasets/AyoubChLin/northwind_PurchaseOrders",
        visibility: "public",
        metrics: {
          downloads: 879,
          likes: 6,
        },
        verifiedOn: "2026-09-01",
      },
    ],
    visibility: "featured",
    priority: 11,
  },
  {
    id: "northwind-stock-report",
    title: "Northwind Stock Report Dataset",
    summary:
      "A Northwind-based stock-report dataset containing monthly and category-level report documents for document analytics experiments.",
    problem:
      "Stock-report pipelines needed labeled examples that reflect recurring financial report structure, not only ad-hoc text snippets.",
    solution:
      "Used SQL extraction from Northwind and PDF generation workflows to create labeled monthly and category report corpora.",
    impact:
      "Provided a public finance-document dataset with 447 downloads, supporting both classification and feature-extraction prototyping.",
    coverImage: "/projects/northwind-stock-report.svg",
    tags: ["Dataset", "Finance", "Document Analytics", "PDF Generation"],
    links: {
      demo: "https://huggingface.co/datasets/AyoubChLin/northwind-Stock_rapport",
    },
    details: {
      timeline: "Published on April 7, 2023, as a companion Northwind finance-document dataset.",
      roleScope:
        "Implemented dataset generation and publication pipeline, including report-structure design and Hugging Face dataset-card packaging.",
      teamSetup:
        "Co-created with Faycal Boubekri (per card), with a shared focus on realistic finance report templates.",
      architecture:
        "Composed of `monthly_reports` and `category_reports` PDF sets generated from Northwind SQL outputs (document modality, English metadata).",
      dataEvaluation:
        "Hub metadata marks `text-classification` and `feature-extraction` task categories with Apache-2.0 licensing for reuse.",
      productionOps:
        "Published as a public Hugging Face dataset with stable URL, tags, and region-hosted distribution for reproducible access.",
      lessonsLearned:
        "Synthetic-but-structured report datasets are useful when schema consistency and labeling discipline are treated as first-class constraints.",
    },
    publicEvidence: [
      {
        platform: "huggingface_dataset",
        label: "northwind-Stock_rapport dataset",
        url: "https://huggingface.co/datasets/AyoubChLin/northwind-Stock_rapport",
        visibility: "public",
        metrics: {
          downloads: 447,
          likes: 0,
        },
        verifiedOn: "2026-09-01",
      },
    ],
    visibility: "more",
    priority: 12,
  },

  {
    id: "noble-spending",
    title: "Noble Spending",
    summary:
      "A full-stack personal finance application built with Next.js for expense tracking, budgeting, and financial insights.",
    problem:
      "Users needed an intuitive self-hosted finance tool with modern UX, without relying on third-party services for sensitive transaction data.",
    solution:
      "Built a Next.js full-stack app with authentication, transaction management, budget tracking, and data visualization, with a responsive UI and reliable state management.",
    impact:
      "Delivered a usable private finance workspace with clean separation of concerns between frontend interfaces and backend logic.",
    coverImage: "/projects/noble-spending.svg",
    tags: ["Next.js", "Full-Stack", "Finance", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/AyoubCherguelaine/noble-spending",
      status: "available",
    },
    details: {
      timeline: "Built as a standalone full-stack project with iterative UI and data-model improvements.",
      roleScope:
        "Owned end-to-end development: frontend pages/components, backend APIs, data modeling, and deployment setup.",
      teamSetup: "Independent project with personal design and product decisions.",
      architecture:
        "Next.js app with server-side rendering, protected routes, transaction CRUD flows, dashboard analytics, and persistent storage.",
      dataEvaluation:
        "Validated correctness through manual transaction workflows, budget boundary cases, and UI responsiveness checks.",
      productionOps:
        "Deployed with standard Next.js production build; private repo with no external dependency on payment processors.",
      lessonsLearned:
        "Finance UIs benefit from tight feedback loops between data entry, categorization, and visual summaries.",
    },
    visibility: "more",
    priority: 13,
  },
  {
    id: "gemini-phi3-apps",
    title: "Lightweight LLM Applications with Gemini and Phi-3",
    summary:
      "Built lightweight LLM applications using Gemini and Phi-3 for practical AI integrations.",
    problem:
      "Teams needed quick access to capable small-model LLM applications without heavy infrastructure or closed API lock-in.",
    solution:
      "Developed lightweight applications leveraging Gemini and Phi-3 for practical AI tasks, including chat, summarization, and structured extraction.",
    impact:
      "Demonstrated practical small-model LLM integration patterns for fast prototyping and low-latency deployments.",
    coverImage: "/projects/gemini-phi3-apps.svg",
    tags: ["LLM", "Gemini", "Phi-3", "Lightweight Models", "Application Development"],
    links: {
      status: "coming_soon",
    },
    details: {
      timeline: "Built across experimentation and application packaging phases.",
      roleScope:
        "Implemented application logic, prompt engineering, and integration patterns for Gemini and Phi-3.",
      teamSetup: "Individual application development and evaluation.",
      architecture:
        "Application layer integrating Gemini/Phi-3 APIs with prompt templates, response parsing, and fallback logic.",
      dataEvaluation:
        "Evaluated output quality, latency, and cost against task requirements.",
      productionOps:
        "Packaged for deployment with environment configuration and request monitoring hooks.",
      lessonsLearned:
        "Lightweight model applications require careful prompt design and output parsing to be reliable in production.",
    },
    visibility: "more",
    priority: 14,
  },
]

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id)
}

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
        name: "Paseet Chatbot - Geospatial Interactions and LLM Classification Agent",
        context: "Riyadh - Oct 2024 - Feb 2025 - Part-Time AI Engineer",
        description:
          "Implemented support for geospatial interactions, including adding and processing polygon geometry directly within the chat interface (property boundaries, zones, land selection, etc.), and fine-tuned open-source LLMs to build a custom classification agent for better intent detection and property-related query categorization.",
      },
      {
        name: "Paseetah Platform - Data Quality, GeoAI, and Automation Project",
        context: "Riyadh - Oct 2024 - Oct 2025 - AI & Data Engineer",
        description:
          "Improved legacy datasets (parcels, transactions, roads) by cleaning data, fixing missing information, and harmonizing inconsistent attributes; designed ETL/data pipelines for large-scale real-estate and geospatial data, including scraping, cleaning, deduplication, validation, and performance optimization; applied Machine Learning, LLMs, OCR, and NLP to real-estate and Arabic data, including transaction anomaly detection, Arabic text processing, translation, and information extraction; and developed LLM agents and AI pipelines to extract legal/regulatory rules from building codes and convert unstructured documents into structured, machine-readable data for automated compliance.",
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
        context: "Denmark - Jan 2025 - Dec 2025 - LLM Engineer & Full-Stack Developer",
        description:
          "Designed and implemented production-grade agentic AI systems using LangChain and CrewAI, including retrieval, classification, reasoning, legal analysis, RAG, and decision-prediction agents. Built LLM pipelines with semantic retrieval, embeddings, and long-term contextual memory, plus automated legal-data ingestion, preprocessing, validation, and enrichment. Developed the FastAPI backend and AI orchestration layer, integrating PostgreSQL/vector databases, external APIs, authentication, and scalable async workflows. Deployed and monitored AI services on AWS EC2 with Docker, implementing production testing, logging, error handling, fallback mechanisms, and performance monitoring.",
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
      "Optimized performance and code quality through component refactoring, responsive design, and best practices to enhance speed, usability, and maintainability across both platforms.",
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

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
  verifiedOn: `${number}-${number}-${number}`
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
  screenshots?: { src: string; alt: string; caption: string; width: number; height: number }[]
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
    publicRepos: 48,
    followers: 43,
    following: 53,
  },
  huggingFace: {
    publicModels: 52,
    publicDatasets: 11,
  },
}

export const projects: Project[] = [
  {
    id: "doctool-document-ai",
    title: "DOCTool — Bilingual Document AI Workspace",
    summary:
      "An Arabic and English document workspace combining chat, semantic OCR, and 16 task-focused services. Process invoices, contracts, forms, and reports through an interactive playground or API, with model selection and optional source verification.",
    problem:
      "Teams need more than text extracted from a PDF: they need usable fields, traceable answers, and a way to check the result. Scanned pages, Arabic layouts, tables, and inconsistent model output make that difficult to automate reliably.",
    solution:
      "Built a bilingual workspace with a searchable service catalog, document chat, semantic OCR, and an extraction playground for uploaded files or direct text. Users choose a processing model, customize the prompt and JSON schema, and inspect structured output and agent steps. Optional Guardian mode checks schemas and source evidence; the same service engine powers API requests and queued jobs.",
    impact:
      "Connects document review and application integration in one workflow: extract invoice fields, review contract terms, classify documents, mask sensitive text, or translate between Arabic and English. The current local app includes 16 catalog services, model comparison, credit tracking, and developer integration guides. Outputs remain reviewable against the source.",
    coverImage: "/projects/doctool/services-workspace.png",
    tags: ["Document AI", "Arabic & English", "Semantic OCR", "Hybrid RAG", "AI Agents", "FastAPI", "Next.js", "PostgreSQL", "Redis"],
    screenshots: [
      {
        src: "/projects/doctool/services-workspace.png",
        alt: "DOCTool service catalog with task filters, model controls, Guardian verification, and credit balance",
        caption: "The current workspace: 16 document services with search, task categories, model selection, and credit visibility. Captured from the local app on November 3, 2026 using a dedicated demo account.",
        width: 1600, height: 1100,
      },
      {
        src: "/projects/doctool/invoice-playground.png",
        alt: "Invoice extraction playground with sample input, editable JSON schema, and structured output panel",
        caption: "Invoice processing with the built-in synthetic sample: configure the input, prompt, JSON schema, model, and Guardian verification, then inspect the service response. Demonstrates the workflow rather than an extraction benchmark.",
        width: 1600, height: 1100,
      },
      {
        src: "/projects/doctool/services-arabic.png",
        alt: "Arabic DOCTool service catalog with right-to-left navigation and localized document tasks",
        caption: "Arabic and English share the same product workflow. The Arabic interface uses right-to-left navigation, localized service descriptions, and task filters.",
        width: 1600, height: 1100,
      },
      {
        src: "/projects/doctool/model-matrix.png",
        alt: "Model comparison table showing configured model IDs, pricing, credit costs, and selection controls",
        caption: "Compare configured processing models and their application credit costs before selecting one. Catalog pricing and capability labels come from the project's configuration.",
        width: 1600, height: 1100,
      },
      {
        src: "/projects/doctool/advanced-ocr-current.png",
        alt: "Current Advanced OCR workspace with PDF upload, model selection, page-range controls, and language selection",
        caption: "The current OCR setup screen: upload a PDF, select a processing model and page range, and set a language hint before extracting semantic blocks.",
        width: 1600, height: 1100,
      },
      {
        src: "/projects/doctool/integration-guide.png",
        alt: "DOCTool developer integration guide for document processing APIs and application clients",
        caption: "Developer documentation connects the workspace to API-based workflows, including document ingestion, service execution, and client integration. The demo API key is redacted.",
        width: 1600, height: 1100,
      },
    ],
    links: {
      github: "https://github.com/AyoubCherguelaine/Doc-tool",
      status: "available",
    },
    details: {
      timeline: "Ongoing development; progress reviewed November 3, 2026. Expanded document chat and semantic OCR into a bilingual service workspace with a configurable playground, model controls, and shared API execution.",
      roleScope:
        "Built the document agents, OCR pipeline, hybrid retrieval, service validation and billing integration, FastAPI endpoints, and Next.js interfaces for service selection, extraction, review, and export.",
      teamSetup: "End-to-end engineering across document AI, backend services, data infrastructure, and frontend product development.",
      architecture:
        "Next.js provides the bilingual workspace; FastAPI exposes document, chat, OCR, and service APIs. Document chat fuses BM25 keyword and dense retrieval through reciprocal rank fusion. Vision-based OCR produces semantic page blocks with transcription, normalized bounding boxes, and continuation links. A shared service engine handles playground, synchronous API, and Redis worker execution, with PostgreSQL persistence and S3-compatible SeaweedFS storage.",
      dataEvaluation:
        "Guardian mode validates structured responses and locates field evidence in source pages, leaving unsupported values for review; direct mode returns output marked as unverified. Financial checks use decimal arithmetic, translation checks inspect preserved values, and configurable rules evaluate extracted fields. Repository tests cover validation failures, evidence matching, tenant access, idempotent execution, credit refunds, and queued jobs. These checks do not establish a measured extraction accuracy rate.",
      productionOps:
        "Docker Compose runs the frontend, API, worker, PostgreSQL with pgvector, Redis, and SeaweedFS. Session authentication and company API keys support workspace and integration access. Model-aware credit charging, refunds on failed service execution, idempotent requests, asynchronous job polling, signed webhooks, and expiring document sessions support repeatable processing. Integration surfaces include REST, a Python SDK, MCP tools, and function-calling schemas.",
      lessonsLearned:
        "Extraction becomes more useful when users can see both the result and how to check it. Keeping source evidence, schema validation, processing costs, and model choice visible makes document automation easier to review and integrate.",
    },
    publicEvidence: [
      {
        platform: "github",
        label: "DOCTool source code",
        url: "https://github.com/AyoubCherguelaine/Doc-tool",
        visibility: "public",
        verifiedOn: "2026-10-28",
      },
    ],
    visibility: "featured",
    priority: -1,
  },
  {
    id: "mustashar-data-platform",
    title: "Mustashar — Data Pipelines & Regulation Agents",
    summary:
      "From scheduled data jobs to cited Arabic answers: a platform that collects education regulations and salary data, then serves a FastAPI chat API through specialist agents using PostgreSQL, Neo4j, and Markdown.",
    problem:
      "Regulations, employment rules, ministry services, and salary tables arrive in different formats. Making them useful requires reliable collection jobs and agents that can retrieve the right passages, preserve conditions and exceptions, and show where an answer came from.",
    solution:
      "Built four scheduled, resumable source pipelines with Arabic OCR, Markdown extraction, PostgreSQL loading, and Neo4j indexing. Added a Next.js operations monitor and an authenticated FastAPI chat API with a scope gateway, coordinator, four source specialists, and evidence review.",
    impact:
      "Connects data operations with conversational access: operators inspect source data and resume failed jobs, while API clients ask about regulations, employment rules, ministry services, and teacher salaries and receive answers with source citations and explicit evidence gaps.",
    coverImage: "/projects/mustashar-data-platform/overview.png",
    tags: ["Python", "FastAPI", "AI Agents", "Data Pipelines", "PostgreSQL", "Neo4j", "Markdown", "Arabic OCR", "Next.js", "Docker"],
    screenshots: [
      {
        src: "/projects/mustashar-data-platform/architecture.svg",
        alt: "Architecture diagram connecting scheduled source jobs, PostgreSQL, Neo4j, and Markdown to the FastAPI chat API and four specialist agents",
        caption: "Architecture overview: scheduled jobs prepare the source data; the chat API routes questions to specialists that retrieve and review evidence from PostgreSQL, Neo4j, and Markdown.",
        width: 1600, height: 1000,
      },
      {
        src: "/projects/mustashar-data-platform/sources.png",
        alt: "Arabic source catalog showing four education data pipelines and their schedules",
        caption: "Four sources, one workspace: rules, regulations, ministry systems, and salary tables with schedules and execution status.",
        width: 1600, height: 1000,
      },
      {
        src: "/projects/mustashar-data-platform/document-library.png",
        alt: "Searchable Arabic PDF library with extraction and graph indexing status",
        caption: "A searchable document library keeps PDFs, OCR completion, and knowledge graph indexing visible together.",
        width: 1600, height: 1000,
      },
      {
        src: "/projects/mustashar-data-platform/arabic-ocr.png",
        alt: "Document workspace rendering extracted Arabic text with PDF and Markdown downloads",
        caption: "Inspect extracted Arabic Markdown alongside the original PDF, with downloads and document-level processing status.",
        width: 1600, height: 1000,
      },
      {
        src: "/projects/mustashar-data-platform/knowledge-graph.png",
        alt: "Interactive document knowledge graph with Arabic entities and evidence navigation",
        caption: "Explore document-scoped entities and their evidence through an interactive Neo4j-backed knowledge graph.",
        width: 1600, height: 1000,
      },
      {
        src: "/projects/mustashar-data-platform/run-history.png",
        alt: "Live pipeline run history with source filters, statuses, durations, and estimated costs",
        caption: "Track execution history with source and status filters, durations, and estimated model costs.",
        width: 1600, height: 1000,
      },
    ],
    links: { status: "private" },
    details: {
      timeline: "Built iteratively across source jobs, Arabic OCR, graph indexing, the admin monitor, and the regulation chat API.",
      roleScope:
        "Developed the Python data jobs, PostgreSQL and Neo4j integrations, Markdown retrieval, Arabic Next.js monitor, FastAPI session and message endpoints, and Gemini tool-calling agents.",
      teamSetup: "End-to-end implementation spanning data engineering, agent orchestration, backend APIs, and the monitoring interface.",
      architecture:
        "Scheduled jobs run preflight, scraping, OCR, graph building, loading, and validation; systems and salaries use structured extraction paths. The chat API reuses their outputs: PostgreSQL holds source records and chat history, Neo4j connects document chunks and entities, and Markdown retains extracted text. A scope gateway routes clear questions to one of four specialists; a coordinator handles mixed questions. Agents merge evidence across the three backends, expand graph context, read complete sections, and submit cited answers for review.",
      dataEvaluation:
        "Pipeline validation compares loaded records with staged data, and the monitor exposes PDFs, Markdown, chunks, and entities for inspection. Retrieval uses Arabic normalization, BM25 passage ranking, and duplicate reduction across PostgreSQL, Neo4j, and Markdown. Salary tools support exact level and grade lookups. Citation checks and evidence review constrain answers to retrieved passages; incomplete coverage or unavailable sources are reported explicitly.",
      productionOps:
        "Docker Compose connects the pipeline and chat services to shared storage. Jobs resume from checkpoints, with live logs, weekly schedules, service health, token usage, estimated costs, and administration controls. The chat API supports bearer authentication, isolated sessions, persisted history, idempotent message retries, and WhatsApp message/history endpoints. Read-only source tools, model and tool budgets, request deadlines, and quick/deep/auto effort modes bound agent work.",
      lessonsLearned:
        "Reliable answers start with inspectable data jobs. PostgreSQL records, Neo4j relationships, and Markdown passages provide complementary access to the same evidence; preserving headings, page references, and exceptions matters as much as finding a matching passage.",
    },
    visibility: "featured",
    priority: 1,
  },
  {
    id: "ocr-service",
    title: "Open-Source OCR Service",
    summary:
      "A self-hosted FastAPI service that turns images and multi-page PDFs into page-level text using Unlimited-OCR on an NVIDIA GPU.",
    problem:
      "Document pipelines needed local OCR with predictable API responses and controls for GPU memory, long outputs, and invalid uploads.",
    solution:
      "Wrapped Unlimited-OCR in two upload endpoints: a base mode for accurate extraction and a crop-based long-document mode with optional repetition control.",
    impact:
      "Provides reusable PDF and image extraction with page-level results, processing times, and local model inference.",
    coverImage: "/projects/ocr-service.svg",
    tags: ["FastAPI", "Unlimited-OCR", "PyTorch", "CUDA", "Docker", "Document AI"],
    links: {
      github: "https://github.com/AyoubCherguelaine/vision-ocr-service-",
      status: "available",
    },
    details: {
      timeline: "Developed through iterations on GPU serving, PDF support, authentication, and extraction controls.",
      roleScope:
        "Implemented upload validation, PDF rasterization, model integration, page-level responses, and container deployment.",
      teamSetup: "Open-source service maintained in a public GitHub repository.",
      architecture:
        "FastAPI loads baidu/Unlimited-OCR at startup. PyMuPDF rasterizes PDFs; base and long modes configure inference resolution and cropping. An inference lock serializes GPU work, and temporary directories isolate request files.",
      dataEvaluation:
        "Responses expose page text and elapsed time for inspection. No aggregate accuracy or latency benchmark is published; the configured Arabic workflow intentionally skips or redacts Quranic verse regions.",
      productionOps:
        "Docker targets CUDA 12.8. The API includes optional bearer authentication, upload and page limits, per-page timeouts, GPU health reporting, and request IDs for tracing errors.",
      lessonsLearned:
        "GPU memory limits, repeated generation, and PDF preprocessing need explicit handling to make OCR useful inside a larger pipeline.",
    },
    publicEvidence: [
      {
        platform: "github",
        label: "Vision OCR Service source code",
        url: "https://github.com/AyoubCherguelaine/vision-ocr-service-",
        visibility: "public",
        verifiedOn: "2026-10-18",
      },
    ],
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
  // {
  //   id: "gaming-marketplace-scraping",
  //   title: "Gaming Marketplace Scraping and Comparison System",
  //   summary:
  //     "An automated scraping and comparison system for gaming marketplace deals, including data collection, processing, and price comparison.",
  //   problem:
  //     "Gamers needed timely price comparison across marketplaces, but manual checking was slow and inconsistent.",
  //   solution:
  //     "Developed automated scraping pipelines for gaming marketplace listings, normalized product data, and implemented comparison logic with alerting on price drops.",
  //   impact:
  //     "Created a reliable price-monitoring workflow with structured data outputs suitable for notifications or dashboards.",
  //   coverImage: "/projects/gaming-marketplace-scraping.svg",
  //   tags: ["Python", "Scraping", "Data Pipelines", "Automation", "E-commerce"],
  //   links: {
  //     status: "private",
  //   },
  //   details: {
  //     timeline: "Built in stages: target-site analysis, scraper development, normalization, and comparison engine.",
  //     roleScope:
  //       "Designed scraping architecture, anti-blocking handling, data normalization, and comparison/alerting logic.",
  //     teamSetup: "Independent automation project.",
  //     architecture:
  //       "Scraping collectors, HTML parsing and normalization, product matching, price history, and comparison/alert modules.",
  //     dataEvaluation:
  //       "Evaluated coverage across marketplaces, duplicate-detection accuracy, and freshness of extracted prices.",
  //     productionOps:
  //       "Implemented scheduling, logging, and resilience patterns for long-running scraping jobs.",
  //     lessonsLearned:
  //       "Marketplace scraping reliability depends on selector stability, polite throttling, and structured change detection.",
  //   },
  //   visibility: "more",
  //   priority: 3,
  // },
  {
    id: "lc-management-app",
    title: "ATLAS Trade OS — Letter of Credit Management",
    summary:
      "A bilingual trade operations workspace for Algerian importers: manage LC dossiers, review shipping documents, track discrepancies, and prepare SWIFT drafts before bank submission.",
    problem:
      "Importers coordinate contract terms, shipping deadlines, bank requirements, and document corrections across a long LC lifecycle. Fragmented spreadsheets and document folders make discrepancies and pending actions difficult to follow.",
    solution:
      "Built a React and FastAPI application with searchable LC lists, a seven-stage Kanban pipeline, editable dossiers, PDF previews, discrepancy resolution, a UCP 600 rules desk, SWIFT MT700/MT707 views, operational tasks, and an integrated AI trade assistant. Arabic RTL and English interfaces serve the same workflows.",
    impact:
      "Brings credit terms, documents, compliance checks, and operational history into one workspace. The local demonstration includes a synthetic 44-document import dossier, three reference discrepancies, and a 15-rule matrix; these fixtures illustrate the workflow without claiming measured customer outcomes.",
    coverImage: "/projects/lc-management-app/operations.png",
    tags: ["React", "TypeScript", "FastAPI", "Python", "Trade Finance", "AI Agents", "Arabic RTL", "Docker"],
    screenshots: [
      {
        src: "/projects/lc-management-app/dossier.png",
        alt: "LC dossier with lifecycle stages, commercial parties, shipping dates, and credit terms",
        caption: "The synthetic AgroClub / ChemChina dossier brings banking details, shipping deadlines, and credit terms into one editable workspace.",
        width: 1600, height: 1000,
      },
      {
        src: "/projects/lc-management-app/documents.png",
        alt: "Archive of 44 synthetic trade documents",
        caption: "A 44-document reference archive covers the import lifecycle, with status, original/copy counts, and PDF preview actions.",
        width: 1600, height: 1000,
      },
      {
        src: "/projects/lc-management-app/discrepancies.png",
        alt: "Pre-audit discrepancy records with observed and expected values",
        caption: "Review discrepancies against expected terms and record a waiver, correction, or refusal.",
        width: 1600, height: 1000,
      },
      {
        src: "/projects/lc-management-app/swift.png",
        alt: "SWIFT MT700 message fields and MT707 amendments",
        caption: "Inspect structured SWIFT MT700 drafts and MT707 amendments alongside the LC dossier.",
        width: 1600, height: 1000,
      },
      {
        src: "/projects/lc-management-app/compliance.png",
        alt: "UCP 600 compliance matrix for the reference dossier",
        caption: "A 15-rule compliance matrix exposes the reference dossier checks and their outcomes.",
        width: 1600, height: 1000,
      },
      {
        src: "/projects/lc-management-app/arabic-kanban.png",
        alt: "Arabic right-to-left Kanban board of LC stages",
        caption: "Arabic and English interfaces support the same workflow, including an RTL Kanban board from draft through settlement.",
        width: 1600, height: 1000,
      },
      {
        src: "/projects/lc-management-app/analytics.png",
        alt: "Trade commitments dashboard with stage distribution and bank exposure",
        caption: "Reporting summarizes LC commitments, stage distribution, discrepancy indicators, and bank exposure using local demonstration data.",
        width: 1600, height: 1000,
      },
      {
        src: "/projects/lc-management-app/trade-assistant.png",
        alt: "Trade assistant with Arabic guidance and suggested dossier questions",
        caption: "An integrated assistant offers dossier inspection, document checklists, and configured Algerian trade guidance.",
        width: 1600, height: 1000,
      },
    ],
    links: { status: "private" },
    details: {
      timeline: "Ongoing implementation, reviewed against the running local application in November 2026; expanded from LC tracking into document review, bilingual workflows, SWIFT preparation, and assistant integration.",
      roleScope:
        "Implemented the frontend workspace, LC APIs, dossier persistence, document handling, workflow actions, reporting views, and tool-calling trade assistant integration.",
      teamSetup: "End-to-end implementation spanning the importer interface, backend services, and synthetic trade dossier fixtures.",
      architecture:
        "React 18, TypeScript, Vite, and Tailwind CSS frontend backed by FastAPI. The current LC workspace persists dossiers, messages, and activities to an atomic JSON store. The broader backend includes SQLAlchemy/PostgreSQL models, Redis integration, and local or S3-compatible document storage. The assistant uses an OpenAI-compatible tool-calling loop with a deterministic fallback.",
      dataEvaluation:
        "The synthetic AgroClub / ChemChina dossier supplies 44 PDFs, extraction ground truth, expected discrepancies, validation rules, and a milestone timeline. Reviewed the running list, Kanban, dossier, archive, discrepancy desk, SWIFT view, compliance matrix, analytics, and Arabic RTL interface. Screenshots document the local implementation; legal accuracy, model quality, and production readiness have not been established by this review.",
      productionOps:
        "Docker Compose packages the Nginx-served frontend, FastAPI backend, PostgreSQL, and Redis with persistent volumes and service health checks. LC state and uploaded documents use mounted local storage in the current setup; document storage also supports S3-compatible configuration.",
      lessonsLearned:
        "Trade workflows need clear separation between document evidence, discrepancy decisions, and bank lifecycle stages. Keeping original documents, corrections, waivers, and operational notes together makes each decision easier to inspect.",
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
       status: "available",
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
       status: "available",
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
    title: "Jurai Assurance — AI Flight Claim Assessment",
    summary:
      "A Danish and English flight-claim assessment app that turns journey details and supporting documents into a provisional assessment, then an optional legal review with archived source quotes.",
    problem:
      "Passengers need a clear way to assess disrupted flights, bring together tickets and airline messages, and understand which facts and legal sources support a claim.",
    solution:
      "Built a Next.js case room and FastAPI backend with a guided claim form, local PDF extraction and Tesseract OCR, bundled airport lookup, and two-stage LLM assessment. The deeper review retrieves passages from 36 bundled legal records and returns reasons with validated citation IDs and exact archived quotes.",
    impact:
      "Connected claim intake, document evidence, initial triage, and source-linked legal reasoning in one workflow. Saved facts and documents support review, while cached legal results avoid repeating successful model requests.",
    coverImage: "/projects/jurai-assurance/assessment.png",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "OCR", "Legal AI", "Docker"],
    screenshots: [
      {
        src: "/projects/jurai-assurance/journey.png",
        alt: "Jurai Assurance case room with a Copenhagen to London itinerary and guided claim form",
        caption: "Start with the journey: airport lookup, departure date, operating carrier, and passenger attendance details in an English or Danish case room.",
        width: 1600, height: 1531,
      },
      {
        src: "/projects/jurai-assurance/evidence.png",
        alt: "Flight disruption form with arrival delay, reported cause, expenses, and supporting document upload",
        caption: "Capture the disruption and supporting evidence. PDFs and images are processed locally using text extraction and OCR when the claim is submitted.",
        width: 1600, height: 2326,
      },
      {
        src: "/projects/jurai-assurance/assessment.png",
        alt: "Initial flight-claim assessment with a provisional outcome and an option to request legal reasoning",
        caption: "An initial assessment of an illustrative claim identifies the outlook and missing facts before the user chooses a deeper legal review.",
        width: 1600, height: 1523,
      },
      {
        src: "/projects/jurai-assurance/legal-reasoning.png",
        alt: "Legal assessment with expanded EU261 Article 3 quote, source attribution, and claim summary",
        caption: "The optional legal review connects each reason to an archived passage. Expand a citation to inspect the exact quote, source link, and collection date. Shown with an illustrative claim.",
        width: 1600, height: 1100,
      },
    ],
    links: {
      status: "request",
    },
    details: {
      timeline:
        "Evolved from the 2025 insurance-case predictor into Jurai Assurance Lite, with the current flight-claim workflow and portable deployment updated in October 2026.",
      roleScope:
        "Built the claim intake and assessment workflow across Next.js, FastAPI, SQLAlchemy persistence, document processing, local law retrieval, citation validation, and Docker packaging.",
      teamSetup:
        "Developed in the Jurai legal-tech context, with a guided interface for passengers and structured assessment outputs for claim review.",
      architecture:
        "Next.js proxies same-origin requests to FastAPI. PostgreSQL stores normalized claim facts, original documents, extracted text, and results. One model request produces a first impression; a second, user-triggered request analyzes locally retrieved law passages. The backend validates citation identifiers and inserts exact archive quotes. OpenAI or Anthropic supplies model inference; airports, OCR, and the legal archive run locally.",
      dataEvaluation:
        "Backend tests cover normalization, document validation and extraction, citation grounding, persistence, and deployment boundaries with mocked model calls. Frontend tests cover translations, API and stream handling, and proxy errors. Assessments expose uncertainty and missing facts; quotes establish source traceability without guaranteeing legal correctness or current validity.",
      productionOps:
        "Docker Compose packages the frontend, backend, and PostgreSQL with health checks and persistent storage. Uploads have file, byte, and page limits; inference has stage deadlines; successful legal analyses are cached. A source release bundles airports and the law snapshot while excluding credentials and uploaded documents.",
      lessonsLearned:
        "Separating provisional triage from an optional legal review makes the workflow easier to follow. Exact source quotes, explicit evidence gaps, and local document processing keep the reasoning inspectable while reducing deployment dependencies.",
    },
    visibility: "featured",
    priority: 7,
  },
  {
    id: "chat-with-database",
    title: "QueryLens — Conversational Data Analytics",
    summary:
      "A bilingual analytics workspace that turns CSV, SQLite, and PostgreSQL data into conversations, interactive charts, and written reports, with inspectable SQL and downloadable source evidence.",
    problem:
      "Exploring unfamiliar relational data takes SQL knowledge and context across tables. A fluent AI answer or polished chart alone does not show which query, rows, or assumptions support it.",
    solution:
      "Built a source-aware analyst that inspects schemas, samples selected tables, executes guarded read-only SQL with joins, and answers from observed results. The workspace now combines a dataset overview, relational schema explorer, multi-table conversations, and evidence-linked chart generation. Users can switch chart types, filter results, compare grouped or stacked series, and download chart data as CSV or JSON.",
    impact:
      "Connects data import, schema inspection, multi-table questions, visual exploration, and reporting in one English and Arabic workflow. Model selection, agent process controls, and a visible credit balance make analysis settings and application costs easier to understand. A local demo joined three imported tables and generated a grouped revenue chart from six query-result rows.",
    coverImage: "/projects/querylens/overview-current.png",
    tags: ["AI Agents", "Text-to-SQL", "Data Visualization", "Arabic & English", "Next.js", "FastAPI", "PostgreSQL", "Docker"],
    screenshots: [
      {
        src: "/projects/querylens/chart-current.png",
        alt: "QueryLens grouped revenue chart with category series, chart-type controls, CSV and JSON downloads, and all three source tables selected",
        caption: "Multi-table analysis in the running app: the agent joined synthetic sales, regions, and products to generate a grouped revenue chart. Six result rows support the chart; users can switch visualizations and download its data. Captured locally on November 3, 2026 with a dedicated demo account.",
        width: 1600, height: 1100,
      },
      {
        src: "/projects/querylens/overview-current.png",
        alt: "QueryLens overview showing credit balance, imported source and table counts, model selection, recent sessions, and analysis shortcuts",
        caption: "The new overview brings datasets, table counts, recent conversations, model configuration, and credits into one dashboard. This demo uses one SQLite source with three tables and 60 synthetic rows in total.",
        width: 1600, height: 1100,
      },
      {
        src: "/projects/querylens/schema-current.png",
        alt: "QueryLens relational schema explorer displaying products, regions, and sales tables with column types and relationship metadata",
        caption: "Explore imported tables before asking a question: search tables or columns, inspect field types and declared relationships, and switch between the relational map, table inspection, and generated SQL DDL views.",
        width: 1600, height: 1100,
      },
      {
        src: "/projects/querylens/settings-current.png",
        alt: "QueryLens agent settings with configured model, per-question credit rate, process modes, temperature, step limits, and custom instructions",
        caption: "New agent controls expose configured model costs, Standard, Fast, and Deep Analytical modes, temperature, maximum tool steps, and custom guidance. Separate settings tabs provide credit and account controls.",
        width: 1600, height: 1100,
      },
      {
        src: "/projects/querylens/landing-ar.png",
        alt: "QueryLens Arabic landing page with right-to-left navigation and a localized analytics demo",
        caption: "English and Arabic interfaces share the same workflow, with right-to-left layout and localized copy for Arabic.",
        width: 1600, height: 1000,
      },
    ],
    links: {
      github: "https://github.com/AyoubCherguelaine/querylens",
      status: "available",
    },
    details: {
      timeline:
        "Evolved from Chat OLAP into QueryLens. Reviewed November 3, 2026 after adding multi-table chat, chart generation, grouped and stacked series, the overview dashboard, relational schema inspection, and model and credit settings.",
      roleScope:
        "Built the Next.js interface, FastAPI backend, PostgreSQL source catalog, CSV and SQLite imports, conversational tool agent, SQL validation, chart tooling, model and credit controls, and report and evidence downloads.",
      teamSetup:
        "A portfolio project bringing frontend, backend, data modeling, and agent tooling together in one repository.",
      architecture:
        "Next.js proxies same-origin requests to FastAPI and keeps authentication in an HTTP-only cookie. PostgreSQL persists sources, semantic cubes, conversations, model preferences, and credit transactions. The analyst inspects the selected tables and runs SELECT queries; GraphAgent validates chart specifications against successful query evidence and packages result rows for export. Recharts renders bar, line, area, pie, and scatter views, including third-dimension series and bubble sizing.",
      dataEvaluation:
        "Repository tests cover imports, query scope, conversational history, narrative references, chart specifications and evidence, credit accounting, model settings, and provider failures. The current local walkthrough imported three related SQLite tables and generated a grouped chart through the live agent. Screenshots use synthetic data and demonstrate functionality; analytical claims still need review against query results and limitations.",
      productionOps:
        "Docker Compose packages PostgreSQL, migrations, FastAPI, and Next.js. SQL is parsed and checked against selected tables and allowed functions, then executed in read-only transactions with timeouts and bounded results. Imports have size and row limits, source ownership scopes uploaded data, and model-specific credit accounting tracks analysis usage. Agent settings expose process mode and tool-step limits.",
      lessonsLearned:
        "A useful chart needs the same evidence trail as a written answer. Keeping selected tables, query results, visualization controls, and downloadable source data together makes follow-up analysis easier to inspect. Visible model settings and credit costs help users choose how to run that analysis.",
    },
    publicEvidence: [
      {
        platform: "github",
        label: "QueryLens source code",
        url: "https://github.com/AyoubCherguelaine/querylens",
        visibility: "public",
        verifiedOn: "2026-10-18",
      },
    ],
    visibility: "featured",
    priority: 8,
  },
  {
    id: "bart-mnli-cnn-news",
    title: "BART-MNLI CNN News Zero-Shot Classifier",
    summary:
      "A BART-MNLI model adapted to CNN news for topic classification through the Hugging Face zero-shot pipeline.",
    problem:
      "News categorization needed a reusable model that could score candidate topic labels in a standard inference workflow.",
    solution:
      "Fine-tuned facebook/bart-large-mnli on CNN articles and published the model, tokenizer, and a Transformers inference example.",
    impact:
      "The model card reports 94% F1 and accuracy on the CNN test split; weights are available for local inference.",
    coverImage: "/projects/bart-mnli-cnn-news.svg",
    tags: ["Zero-Shot", "BART", "News Classification", "NLP"],
    links: {
      demo: "https://huggingface.co/AyoubChLin/Bart-MNLI-CNN_news",
      status: "available",
    },
    details: {
      timeline: "Published to Hugging Face on July 12, 2023, after data prep, fine-tuning, and model-card documentation.",
      roleScope:
        "Prepared CNN news data, fine-tuned the model, and packaged the weights, tokenizer, and model card for reuse.",
      teamSetup:
        "Co-developed with Faycal Boubekri (as listed in the model card), with shared validation on category behavior and outputs.",
      architecture:
        "BART-Large-MNLI retains contradiction, neutral, and entailment outputs. The zero-shot pipeline scores article and candidate-label pairs using the entailment prediction; published weights use safetensors.",
      dataEvaluation:
        "The card documents one training epoch with 256-token inputs and CNN test evaluation at 128 tokens. Reported scores describe that test setup; they do not establish performance on unseen domains or arbitrary labels.",
      productionOps:
        "Published under Apache-2.0 with a Transformers loading example. The Hub provides downloadable artifacts; a hosted inference service is not bundled with the project.",
      lessonsLearned:
        "Candidate-label wording and input truncation deserve explicit evaluation when adapting an NLI model to a specific news domain.",
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
    visibility: "more",
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
    visibility: "more",
    priority: 10,
  },
  {
    id: "company-document-dataset-v2",
    title: "Company Documents v2",
    summary:
      "A reproducible document generator and public dataset of 353,580 English and French business PDFs across 13 document types.",
    problem:
      "Document-AI training needs varied business layouts with aligned text, field values, and coordinates for evaluating extraction.",
    solution:
      "Built a seeded pipeline that renders documents for 60 synthetic companies, checks text and financial totals, and exports gold fields, word boxes, and degraded scans.",
    impact:
      "Published 404,514 PDF pages and 120,523 degraded page images, with company-based splits for classification, OCR, and field extraction.",
    coverImage: "/projects/company-document-dataset-v2.svg",
    tags: ["Dataset", "Document AI", "OCR", "Synthetic Data", "English / French"],
    links: {
      github: "https://github.com/AyoubCherguelaine/Company-document-dataset-v2",
      demo: "https://huggingface.co/datasets/AyoubChLin/Company-document-dataset-v2",
      status: "available",
    },
    details: {
      timeline: "Published in October 2026; successor to CompanyDocuments.",
      roleScope: "Built source adapters, document templates, annotation and validation steps, scan augmentation, and dataset publishing.",
      teamSetup: "Created by Ayoub Cherguelaine, with publicly available generator code.",
      architecture:
        "Northwind, AdventureWorks, Chinook, and Sakila feed normalized records into Jinja2 templates and WeasyPrint PDFs. The pipeline extracts text and coordinates, augments scan images, and exports Parquet shards.",
      dataEvaluation:
        "Checks compare rendered PDF text with gold values and verify arithmetic using Decimal. Splits hold out issuing companies, while source records and layout families may overlap. Document classes are imbalanced.",
      productionOps:
        "Seeded generation resumes from checkpoints. Publishing one document type at a time limits local disk use; Hugging Face provides per-type subsets and streaming Parquet access. Code and generated documents use Apache-2.0.",
      lessonsLearned:
        "Useful synthetic data needs aligned annotations, validation, and clear split boundaries. Simulated layouts and scan artifacts still require evaluation against real documents.",
    },
    publicEvidence: [
      {
        platform: "github",
        label: "Company Documents v2 generator",
        url: "https://github.com/AyoubCherguelaine/Company-document-dataset-v2",
        visibility: "public",
        verifiedOn: "2026-10-18",
      },
      {
        platform: "huggingface_dataset",
        label: "Company Documents v2 dataset",
        url: "https://huggingface.co/datasets/AyoubChLin/Company-document-dataset-v2",
        visibility: "public",
        metrics: {
          downloads: 12107,
          likes: 2,
        },
        verifiedOn: "2026-10-14",
      },
    ],
    visibility: "featured",
    priority: 0,
  },

  {
    id: "noble-spending",
    title: "Noble Fund",
    summary:
      "A personal finance and wealth dashboard for tracking money across USD, EUR, and Algerian dinar accounts, with budgets, savings vaults, recurring payments, and interactive analytics.",
    problem:
      "Managing income, spending, debts, and savings across different currencies makes it difficult to see available cash, understand spending patterns, and plan ahead in one workspace.",
    solution:
      "Built an authenticated Next.js application backed by PostgreSQL, with multi-currency accounts and transfers, transaction management, category budgets, recurring bills and subscriptions, savings goals, and interactive charts. English and Arabic interfaces support daily use, including right-to-left layouts.",
    impact:
      "Brings account balances, money flow, budget progress, and savings planning into one workspace. Account history and chart drill-downs connect financial summaries to the transactions behind them.",
    coverImage: "/projects/noble-fund/overview.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Recharts", "Tailwind CSS", "Personal Finance"],
    screenshots: [
      {
        src: "/projects/noble-fund/overview.png",
        alt: "Noble Fund dashboard showing wealth, net savings, income, spending, and a six-month money flow chart",
        caption: "The wealth overview brings balances, savings rate, and income versus spending into one view. Captured locally from the current interface with synthetic financial data.",
        width: 1600, height: 1100,
      },
      {
        src: "/projects/noble-fund/accounts.png",
        alt: "Noble Fund accounts screen grouping USD, EUR, and Algerian dinar accounts with balance history",
        caption: "Multi-currency account management with grouped balances, transfers, currency exchange, and account history. All accounts and amounts shown are synthetic demo data.",
        width: 1600, height: 1100,
      },
    ],
    links: {
      github: "https://github.com/AyoubCherguelaine/noble-spending",
      status: "available",
    },
    details: {
      timeline: "Developed iteratively from expense tracking into a multi-currency finance and wealth dashboard.",
      roleScope:
        "Owned product design, React interfaces, financial aggregations, PostgreSQL persistence, authentication, and deployment configuration.",
      teamSetup: "Independent full-stack project.",
      architecture:
        "Next.js App Router with server-rendered initial data, a client dashboard, route-handler APIs, and PostgreSQL through pg. Recharts powers money-flow and account-history charts. Shared currency utilities convert balances and transactions for the selected display currency.",
      dataEvaluation:
        "The dashboard distinguishes transfers from income and spending, aggregates category budgets, and reconstructs account balance history. Portfolio screenshots demonstrate the running interface with synthetic fixtures; they do not represent real financial records or a calculation benchmark.",
      productionOps:
        "Netlify deployment configuration with runtime PostgreSQL connection settings, HTTP-only JWT session cookies, and protected routes. Additional workflows include data import/export, receipt OCR, and optional Gmail purchase review before importing transactions.",
      lessonsLearned:
        "Multi-currency finance requires consistent conversion rules and clear treatment of transfers. Connecting summaries to account history and transaction details makes the numbers easier to inspect.",
    },
    visibility: "more",
    priority: 13,
  },
  // {
  //   id: "gemini-phi3-apps",
  //   title: "Lightweight LLM Applications with Gemini and Phi-3",
  //   summary:
  //     "Built lightweight LLM applications using Gemini and Phi-3 for practical AI integrations.",
  //   problem:
  //     "Teams needed quick access to capable small-model LLM applications without heavy infrastructure or closed API lock-in.",
  //   solution:
  //     "Developed lightweight applications leveraging Gemini and Phi-3 for practical AI tasks, including chat, summarization, and structured extraction.",
  //   impact:
  //     "Demonstrated practical small-model LLM integration patterns for fast prototyping and low-latency deployments.",
  //   coverImage: "/projects/gemini-phi3-apps.svg",
  //   tags: ["LLM", "Gemini", "Phi-3", "Lightweight Models", "Application Development"],
  //   links: {
  //     status: "coming_soon",
  //   },
  //   details: {
  //     timeline: "Built across experimentation and application packaging phases.",
  //     roleScope:
  //       "Implemented application logic, prompt engineering, and integration patterns for Gemini and Phi-3.",
  //     teamSetup: "Individual application development and evaluation.",
  //     architecture:
  //       "Application layer integrating Gemini/Phi-3 APIs with prompt templates, response parsing, and fallback logic.",
  //     dataEvaluation:
  //       "Evaluated output quality, latency, and cost against task requirements.",
  //     productionOps:
  //       "Packaged for deployment with environment configuration and request monitoring hooks.",
  //     lessonsLearned:
  //       "Lightweight model applications require careful prompt design and output parsing to be reliable in production.",
  //   },
  //   visibility: "more",
  //   priority: 14,
  // },
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

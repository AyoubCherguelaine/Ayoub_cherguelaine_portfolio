export type ProjectLinkStatus = "private" | "request" | "coming_soon"

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
  verifiedOn: "2026-04-23"
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
}

export type ProfileSnapshot = {
  verifiedOn: "2026-04-23"
  verifiedLabel: "April 23, 2026"
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
  verifiedOn: "2026-04-23",
  verifiedLabel: "April 23, 2026",
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
        verifiedOn: "2026-04-23",
      },
    ],
    visibility: "featured",
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
        verifiedOn: "2026-04-23",
      },
    ],
    visibility: "featured",
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
        verifiedOn: "2026-04-23",
      },
    ],
    visibility: "featured",
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
        verifiedOn: "2026-04-23",
      },
    ],
    visibility: "more",
  },
  {
    id: "distilbert-med-hana",
    title: "DistilBERT-MLM Medical and Hana Classifier",
    summary:
      "A DistilBERT text-classification artifact published on Hugging Face for domain-specific experimentation under lightweight model constraints.",
    problem:
      "Needed a smaller classification checkpoint that could be tested quickly in constrained inference environments.",
    solution:
      "Released a DistilBERT-based model (`transformers`/safetensors) on Hugging Face with endpoint-compatible packaging.",
    impact:
      "Established a deployable lightweight baseline and expanded the public model portfolio, with metadata verified on the Hub.",
    coverImage: "/projects/distilbert-med-hana.svg",
    tags: ["DistilBERT", "MLM", "Medical NLP", "Classification"],
    links: {
      demo: "https://huggingface.co/AyoubChLin/distilbert-mlm-med-hana-classification",
    },
    details: {
      timeline: "Published on April 30, 2025, as a text-classification model artifact.",
      roleScope:
        "Prepared and published the model package for practical inference testing, with a focus on lightweight DistilBERT deployment behavior.",
      teamSetup: "Individual model publication and iteration workflow.",
      architecture:
        "DistilBERT-family classifier exported in safetensors format with Hugging Face endpoint compatibility tags.",
      dataEvaluation:
        "Hub card currently has minimal documented evaluation details, so validation emphasis stayed on deployability and baseline behavior checks.",
      productionOps:
        "Published via Hugging Face with `transformers` compatibility and public artifact access for downstream integration tests.",
      lessonsLearned:
        "A complete model card (dataset + metrics + limits) is essential; publication quality includes documentation quality, not only checkpoint upload.",
    },
    publicEvidence: [
      {
        platform: "huggingface_model",
        label: "distilbert-mlm-med-hana-classification model",
        url: "https://huggingface.co/AyoubChLin/distilbert-mlm-med-hana-classification",
        visibility: "public",
        metrics: {
          downloads: 2,
          likes: 0,
        },
        verifiedOn: "2026-04-23",
      },
    ],
    visibility: "more",
  },
  {
    id: "qwen-passet-classifier",
    title: "Qwen2.5-Coder LLM Passet Classifier",
    summary:
      "A Qwen2.5-Coder-derived domain model published on Hugging Face, fine-tuned from `unsloth/qwen2.5-coder-7b-instruct-bnb-4bit`.",
    problem:
      "The passet taxonomy required stronger instruction-following behavior for ambiguous domain records than generic classifiers provided.",
    solution:
      "Fine-tuned and published a Qwen2.5-Coder checkpoint using Unsloth + TRL tooling, with `text-generation-inference` compatibility tags.",
    impact:
      "Created a domain-adapted public artifact that can be integrated into instruction-driven classification and workflow automation pipelines.",
    coverImage: "/projects/qwen-passet-classifier.svg",
    tags: ["LLM", "Qwen2.5", "Classification", "Instruct"],
    links: {
      demo: "https://huggingface.co/AyoubChLin/Qwen2.5-Coder-7B-Instruct_passet_classifer_1.0",
    },
    details: {
      timeline: "Published on December 30, 2024, after iterative fine-tuning and packaging cycles.",
      roleScope:
        "Owned prompt/data preparation, fine-tuning pipeline execution, and artifact publication workflow on Hugging Face.",
      teamSetup: "Individual LLM adaptation workflow targeting passet-classification use cases.",
      architecture:
        "Qwen2.5-Coder-7B-Instruct derivative trained with Unsloth and TRL, packaged for transformers/TGI-compatible deployment paths.",
      dataEvaluation:
        "Primary evaluation was qualitative on domain examples; public card currently emphasizes base model lineage and tooling over benchmark tables.",
      productionOps:
        "Published under Apache-2.0 with safetensors and endpoint-compatible tags for controlled integration testing.",
      lessonsLearned:
        "For domain LLM adapters, rich benchmark documentation should ship with the checkpoint to make performance claims verifiable.",
    },
    publicEvidence: [
      {
        platform: "huggingface_model",
        label: "Qwen2.5-Coder-7B-Instruct_passet_classifer_1.0 model",
        url: "https://huggingface.co/AyoubChLin/Qwen2.5-Coder-7B-Instruct_passet_classifer_1.0",
        visibility: "public",
        metrics: {
          likes: 0,
        },
        verifiedOn: "2026-04-23",
      },
    ],
    visibility: "more",
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

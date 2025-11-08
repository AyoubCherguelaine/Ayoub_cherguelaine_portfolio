import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects =[
  {
    title: "AI Legal Assistant",
    description:
      "Intelligent legal assistant leveraging LLM agents and vector databases to analyze laws and past court cases. Supports contextual chat history, legal similarity retrieval, and multi-step reasoning for case analysis.",
    tags: ["LLM", "RAG", "Legal AI", "Agents", "Embeddings"],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    title: "AI Insurance Case Success Predictor",
    description:
      "Agent-based system that predicts insurance case outcomes using legal document embeddings, retrieval tools, and case similarity analysis. Includes explainability layer for evidence-based predictions.",
    tags: ["Agents", "Prediction", "RAG", "LLMs", "Insurance AI"],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    title: "Chat with Database (OLAP-LLM)",
    description:
      "Conversational analytics assistant connecting structured databases (PostgreSQL, MongoDB) to LLMs for natural-language querying, aggregation, and data visualization. Enables executives to chat directly with business data.",
    tags: ["OLAP", "LLM", "Data Engineering", "LangChain", "PostgreSQL"],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    title: "Bart-MNLI CNN News Zero-Shot Classifier",
    description:
      "Fine-tuned a BART‑Large‑MNLI model on the CNN News dataset for zero-shot text classification, achieving F1 ≈ 94 % and accuracy ≈ 94 %. :contentReference[oaicite:2]{index=2}",
    tags: ["Zero-Shot", "BART", "News Classification", "NLP"],
    links: {
      github: "",  // (add GitHub link if you have it)
      demo: "https://huggingface.co/AyoubChLin/Bart-MNLI-CNN_news"
    },
  },
  {
    title: "BERT Fine-tuned on arXiv Metadata",
    description:
      "Fine-tuned a BERT base model on the arXiv metadata corpus to create a classification model for academic paper content. :contentReference[oaicite:4]{index=4}",
    tags: ["BERT", "Academic NLP", "Classification", "Research Papers"],
    links: {
      github: "",
      demo: "https://huggingface.co/AyoubChLin/bert-finetuned-Arxiv"
    },
  },
  {
    title: "Northwind Purchase Orders Document Dataset",
    description:
      "Created a document-classification dataset from the Northwind PurchaseOrders sample database: ~830 purchase orders, converted from PDF to CSV/Parquet for NLP and analytics tasks. :contentReference[oaicite:6]{index=6}",
    tags: ["Dataset", "Document Classification", "Business Data", "PDF → CSV"],
    links: {
      github: "",
      demo: "https://huggingface.co/datasets/AyoubChLin/northwind_PurchaseOrders"
    },
  },
  {
    title: "Northwind Stock Report Dataset",
    description:
      "Developed the Northwind‑Stock_rapport dataset: monthly stock reports and category reports converted to PDFs and labeled for classification and extraction tasks. :contentReference[oaicite:8]{index=8}",
    tags: ["Dataset", "Finance", "Document Analytics", "PDF Generation"],
    links: {
      github: "",
      demo: "https://huggingface.co/datasets/AyoubChLin/northwind-Stock_rapport"
    },
  },
  {
    title: "DistilBERT-MLM Medical & Hana Classification Model",
    description:
      "Built the DistilBERT-MLM model for medical and Hana text classification tasks – part of model portfolio. :contentReference[oaicite:10]{index=10}",
    tags: ["DistilBERT", "MLM", "Medical NLP", "Classification"],
    links: {
      github: "",
      demo: "https://huggingface.co/AyoubChLin/distilbert-mlm-med-hana-classification"
    },
  },
  {
    title: "Qwen2.5-Coder LLM Passet Classifier",
    description:
      "Trained an LLM-based classifier using Qwen2.5‑Coder‑7B‑Instruct for “passet” classification (version 1.0, 16-bit). :contentReference[oaicite:12]{index=12}",
    tags: ["LLM", "Qwen2.5", "Classification", "Instruct"],
    links: {
      github: "",
      demo: "https://huggingface.co/AyoubChLin/Qwen2.5-Coder-7B-Instruct_passet_classifer_1.0_16_bit"
    },
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="group overflow-hidden border border-border hover:border-blue-500 transition-colors"
            >
              <div className="p-6 space-y-4 h-full flex flex-col">
                <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import ProjectOpenGraphImage from "./opengraph-image"

export const runtime = "edge"
export const contentType = "image/png"
export const size = {
  width: 1200,
  height: 630,
}
export const alt = "Project case study preview"

export default async function ProjectTwitterImage(props: Parameters<typeof ProjectOpenGraphImage>[0]) {
  return ProjectOpenGraphImage(props)
}

import OpenGraphImage from "./opengraph-image"

export const runtime = "edge"
export const contentType = "image/png"
export const size = {
  width: 1200,
  height: 630,
}
export const alt = "Ayoub Cherguelaine portfolio"

export default function TwitterImage() {
  return OpenGraphImage()
}

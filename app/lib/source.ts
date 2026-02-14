import { docs } from "@/.docs"
import { loader } from "@hanzo/docs/core/source"

export const source: ReturnType<typeof loader> = loader({
  baseUrl: "/docs",
  source: docs.toDocsSource(),
})

import Link from "next/link"
import { notFound } from "next/navigation"
import { IconArrowLeft, IconArrowRight, IconArrowUpRight } from "@tabler/icons-react"
import { findNeighbour } from "fumadocs-core/server"

import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { DocsTableOfContents } from "@/components/toc"
import { Badge } from "@/registry/new-york/ui/badge"
import { Button } from "@/registry/new-york/ui/button"
import { mdxComponents } from "@/mdx-components"

export const revalidate = false
// For static export, we cannot use dynamicParams
export const dynamicParams = false

export function generateStaticParams() {
  try {
    return source.generateParams()
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) {
    notFound()
  }

  return {
    title: page.data.title || "Documentation",
    description: page.data.description || `Documentation for ${page.data.title}`,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: "article",
      url: absoluteUrl(page.url),
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
      creator: "@luxfiai",
    },
  }
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  
  if (!page) {
    notFound()
  }

  const neighbours = await findNeighbour(source.pageTree, page.url)

  // Get the MDX content - Fumadocs exports the component directly as body
  // @ts-expect-error - revisit fumadocs types.
  const MDXContent = page.data.body

  return (
    <div
      data-slot="docs"
      className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="mx-auto flex w-full max-w-2xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
                  {page.data.title}
                </h1>
                <div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
                  {neighbours.previous && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target ml-auto size-8 shadow-none md:size-7"
                      asChild
                    >
                      <Link href={neighbours.previous.url}>
                        <IconArrowLeft />
                        <span className="sr-only">Previous</span>
                      </Link>
                    </Button>
                  )}
                  {neighbours.next && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target size-8 shadow-none md:size-7"
                      asChild
                    >
                      <Link href={neighbours.next.url}>
                        <span className="sr-only">Next</span>
                        <IconArrowRight />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              {page.data.description && (
                <p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
                  {page.data.description}
                </p>
              )}
            </div>
            {page.data.links ? (
              <div className="flex items-center space-x-2 pt-4">
                {page.data.links?.doc && (
                  <Badge asChild variant="secondary">
                    <Link href={page.data.links.doc} target="_blank" rel="noreferrer">
                      Docs <IconArrowUpRight />
                    </Link>
                  </Badge>
                )}
                {page.data.links?.api && (
                  <Badge asChild variant="secondary">
                    <Link href={page.data.links.api} target="_blank" rel="noreferrer">
                      API Reference <IconArrowUpRight />
                    </Link>
                  </Badge>
                )}
              </div>
            ) : null}
          </div>
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
            <MDXContent components={mdxComponents} />
          </div>
        </div>
        <div className="mx-auto hidden h-16 w-full max-w-2xl items-center gap-2 px-4 sm:flex md:px-0">
          {neighbours.previous && (
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="shadow-none"
            >
              <Link href={neighbours.previous.url}>
                <IconArrowLeft /> {neighbours.previous.name}
              </Link>
            </Button>
          )}
          {neighbours.next && (
            <Button
              variant="secondary"
              size="sm"
              className="ml-auto shadow-none"
              asChild
            >
              <Link href={neighbours.next.url}>
                {neighbours.next.name} <IconArrowRight />
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[calc(100svh-var(--footer-height)+2rem)] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <div className="h-(--top-spacing) shrink-0" />
        {/* @ts-expect-error - revisit fumadocs types. */}
        {page.data.toc?.length ? (
          <div className="no-scrollbar overflow-y-auto px-8">
            {/* @ts-expect-error - revisit fumadocs types. */}
            <DocsTableOfContents toc={page.data.toc} />
            <div className="h-12" />
          </div>
        ) : null}
      </div>
    </div>
  )
}
"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"

type PaginationProps = {
  currentPage?: number
  totalPages?: number
  onPageChange?: (page: number) => void
  className?: string
}

export default function Pagination({
  currentPage: controlledPage,
  totalPages = 5,
  onPageChange,
  className,
}: PaginationProps) {
  const [uncontrolledPage, setUncontrolledPage] = useState(1)
  const currentPage = Math.min(
    Math.max(controlledPage ?? uncontrolledPage, 1),
    totalPages
  )

  function selectPage(page: number) {
    const nextPage = Math.min(Math.max(page, 1), totalPages)

    if (controlledPage === undefined) {
      setUncontrolledPage(nextPage)
    }

    onPageChange?.(nextPage)
  }

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-4", className)}
    >
      <button
        type="button"
        aria-label="Go to previous page"
        disabled={currentPage === 1}
        onClick={() => selectPage(currentPage - 1)}
        className="flex size-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronLeft aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </button>

      <div className="flex items-center gap-5" role="list">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1
          const isCurrentPage = page === currentPage

          return (
            <button
              key={page}
              type="button"
              aria-current={isCurrentPage ? "page" : undefined}
              aria-label={`Go to page ${page}`}
              onClick={() => selectPage(page)}
              className={cn(
                "min-w-3 text-sm leading-5 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none",
                isCurrentPage
                  ? "font-medium text-neutral-300 hover:text-neutral-700"
                  : "font-bold text-neutral-800"
              )}
            >
              {page}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        aria-label="Go to next page"
        disabled={currentPage === totalPages}
        onClick={() => selectPage(currentPage + 1)}
        className="flex size-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </button>
    </nav>
  )
}

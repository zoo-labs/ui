import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'

export function renderWithProviders(
  ui: ReactElement,
  options?: RenderOptions
) {
  return render(ui, { ...options })
}

export * from '@testing-library/react'

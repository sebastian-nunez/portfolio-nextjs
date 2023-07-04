import { render, screen } from "@testing-library/react"

import Home from "../app/page"

describe("Home", () => {
  it("renders the primary heading", () => {
    render(<Home />)

    const heading = screen.getByRole("heading", { name: /sebastian nunez/i })

    expect(heading).toBeInTheDocument()
  })
})

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "@/components/Contact"; // Adjust the path as needed

describe("Contact Component", () => {
  it("renders the heading", () => {
    render(<Contact />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("renders all input fields with correct placeholders", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox"); // Selects inputs of type 'text' or 'email'
    expect(inputs).toHaveLength(4); // Ensure there are 4 input fields

    expect(inputs[0]).toHaveAttribute("placeholder", "Name");
    expect(inputs[1]).toHaveAttribute("placeholder", "Phone Number");
    expect(inputs[2]).toHaveAttribute("placeholder", "Email");
    expect(inputs[3]).toHaveAttribute("placeholder", "Message");
  });

  it("renders the send button", () => {
    render(<Contact />);
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  it("renders the map container", () => {
    render(<Contact />);
    const mapContainer = screen.getByText((content, element) => {
      return element.tagName === "DIV" && element.id === "googleMap";
    });
    expect(mapContainer).toBeInTheDocument();
  });
});
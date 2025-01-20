import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Service from "@/components/Service";

describe("Service Component", () => {
  it("renders the heading 'Our Services'", () => {
    render(<Service />);
    expect(screen.getByText("Our Services")).toBeInTheDocument();
  });

  it("renders all service items with correct titles", () => {
    render(<Service />);

    expect(screen.getByText("Maintenance")).toBeInTheDocument();
    expect(screen.getByText("Electrical")).toBeInTheDocument();
    expect(screen.getByText("Plumbing")).toBeInTheDocument();
  });

  it("renders all service images with correct sources", () => {
    render(<Service />);

    // Use querySelectorAll instead of getAllByRole to get images in order
    const images = document.querySelectorAll(".img-box img");
    expect(images).toHaveLength(3);

    // Create an array of expected image sources
    const expectedImages = [
      "images/s1.png",
      "images/s2.png",
      "images/s3.png"
    ];

    // Check each image matches its expected source
    images.forEach((img, index) => {
      expect(img.getAttribute("src")).toBe(expectedImages[index]);
      expect(img.getAttribute("alt")).toBe("");
    });
  });

  it("renders description text for each service", () => {
    render(<Service />);
    
    const description = "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal";
    const descriptions = screen.getAllByText(description);
    expect(descriptions).toHaveLength(3);
  });

  it("renders the 'View More' button", () => {
    render(<Service />);
    
    const viewMoreLink = screen.getByText("View More");
    expect(viewMoreLink).toBeInTheDocument();
    expect(viewMoreLink.tagName.toLowerCase()).toBe("a");
  });

  it("renders correct number of service boxes with proper structure", () => {
    render(<Service />);

    // Check the full structure of each service box
    const serviceBoxes = document.querySelectorAll(".col-sm-6.col-md-4.mx-auto");
    expect(serviceBoxes).toHaveLength(3);

    serviceBoxes.forEach(box => {
      // Check box structure
      expect(box.querySelector(".box")).toBeInTheDocument();
      expect(box.querySelector(".img-box")).toBeInTheDocument();
      expect(box.querySelector(".detail-box")).toBeInTheDocument();
      
      // Check detail box contains an h5 and p
      const detailBox = box.querySelector(".detail-box");
      expect(detailBox.querySelector("h5")).toBeInTheDocument();
      expect(detailBox.querySelector("p")).toBeInTheDocument();
    });
  });

  it("renders with proper layout classes", () => {
    render(<Service />);

    expect(document.querySelector(".service_section.layout_padding")).toBeInTheDocument();
    expect(document.querySelector(".heading_container.heading_center")).toBeInTheDocument();
    expect(document.querySelector(".btn-box")).toBeInTheDocument();
  });
});
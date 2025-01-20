import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Client from "@/components/Client";

describe("Client Component", () => {
  it("renders the heading 'What Our Clients Say'", () => {
    render(<Client />);
    expect(screen.getByText("What Our Clients Say")).toBeInTheDocument();
    expect(document.querySelector(".heading_container.heading_center")).toBeInTheDocument();
  });

  it("renders correct number of client testimonial sections", () => {
    render(<Client />);
    
    const testimonialItems = document.querySelectorAll(".item");
    // clientList.length * 3 due to three clientMap repetitions
    expect(testimonialItems).toHaveLength(6); 
  });

  it("renders client images correctly", () => {
    render(<Client />);
    
    const images = document.querySelectorAll(".img-box img");
    const expectedImageCount = 6; // 2 images × 3 repetitions
    expect(images).toHaveLength(expectedImageCount);

    // Check that each pair of images has the correct src
    images.forEach((img, index) => {
      const expectedSrc = `images/client-${(index % 2) + 1}.jpg`;
      expect(img.getAttribute("src")).toBe(expectedSrc);
      expect(img.getAttribute("alt")).toBe("");
    });
  });

  it("renders client names and star ratings", () => {
    render(<Client />);
    
    const clientNames = screen.getAllByText("Jorch morik");
    expect(clientNames).toHaveLength(6); // Name repeated 6 times

    const clientInfoDivs = document.querySelectorAll(".client_info");
    clientInfoDivs.forEach(div => {
      // Check for 5 stars in each rating
      const stars = div.querySelectorAll(".fa.fa-star");
      expect(stars).toHaveLength(5);
    });
  });

  it("renders testimonial text correctly", () => {
    render(<Client />);
    
    const expectedText = "chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum";
    const testimonials = screen.getAllByText(expectedText);
    expect(testimonials).toHaveLength(6); // Text repeated 6 times
  });

  it("renders quote icons", () => {
    render(<Client />);
    
    const quoteIcons = document.querySelectorAll(".fa.fa-quote-left");
    expect(quoteIcons).toHaveLength(6); // One quote icon per testimonial
  });

  it("renders with correct carousel structure", () => {
    render(<Client />);
    
    expect(document.querySelector(".carousel-wrap.layout_padding2-top")).toBeInTheDocument();
    expect(document.querySelector(".owl-carousel")).toBeInTheDocument();
  });

  it("renders testimonial boxes with correct structure", () => {
    render(<Client />);
    
    const boxes = document.querySelectorAll(".box");
    expect(boxes).toHaveLength(6);

    boxes.forEach(box => {
      // Check structure of each testimonial box
      expect(box.querySelector(".client_id")).toBeInTheDocument();
      expect(box.querySelector(".img-box")).toBeInTheDocument();
      expect(box.querySelector(".client_detail")).toBeInTheDocument();
      expect(box.querySelector(".client_info")).toBeInTheDocument();
      expect(box.querySelector(".client_text")).toBeInTheDocument();
    });
  });
});
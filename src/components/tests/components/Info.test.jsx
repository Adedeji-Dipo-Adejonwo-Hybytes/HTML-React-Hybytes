import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Info from "@/components/Info";

describe("Info Component", () => {
  it("renders the heading 'Get In Touch'", () => {
    render(<Info />);
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
  });

  it("renders all physical items with correct text", () => {
    render(<Info />);

    // Check for the correct text content
    expect(screen.getByText("Lorem Ipsum is simply dummy text")).toBeInTheDocument();
    expect(screen.getByText("+02 1234567890")).toBeInTheDocument();
    expect(screen.getByText("demo@gmail.com")).toBeInTheDocument();
  });

  it("renders Font Awesome icons for physical items", () => {
    render(<Info />);

    // Check for Font Awesome icons using their classes
    const mapMarkerIcon = document.querySelector(".fa.fa-map-marker");
    const phoneIcon = document.querySelector(".fa.fa-phone");
    const envelopeIcon = document.querySelector(".fa.fa-envelope");

    expect(mapMarkerIcon).toBeInTheDocument();
    expect(phoneIcon).toBeInTheDocument();
    expect(envelopeIcon).toBeInTheDocument();
  });

  it("renders the heading 'Follow Us'", () => {
    render(<Info />);
    expect(screen.getByText("Follow Us")).toBeInTheDocument();
  });

  it("renders all social media icons", () => {
    render(<Info />);

    // Check for Font Awesome social media icons
    const socialIcons = [
      ".fa.fa-facebook",
      ".fa.fa-twitter",
      ".fa.fa-youtube",
      ".fa.fa-instagram"
    ];

    socialIcons.forEach(iconClass => {
      const icon = document.querySelector(iconClass);
      expect(icon).toBeInTheDocument();
    });

    // Verify we have exactly 4 social media icons
    const allSocialIcons = document.querySelectorAll(".social-box .fa");
    expect(allSocialIcons).toHaveLength(4);
  });

  it("renders all items with proper link wrappers", () => {
    render(<Info />);
    
    // Check physical items links (3 items)
    const physicalItemLinks = document.querySelectorAll(".info_items a");
    expect(physicalItemLinks).toHaveLength(3);

    // Check social media links (4 items)
    const socialMediaLinks = document.querySelectorAll(".social-box a");
    expect(socialMediaLinks).toHaveLength(4);
  });
});
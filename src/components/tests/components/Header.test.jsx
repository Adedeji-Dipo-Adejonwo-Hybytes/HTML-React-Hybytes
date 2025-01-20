import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Header from "@/components/Header";

// Helper function to render component with router
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe("Header Component", () => {
  it("renders the brand name", () => {
    renderWithRouter(<Header />);
    const brand = screen.getByText("Inance");
    expect(brand).toBeInTheDocument();
    expect(brand.closest('a')).toHaveClass('navbar-brand');
  });

  it("renders contact information with icons", () => {
    renderWithRouter(<Header />);
    
    // Phone section
    const phoneLink = screen.getByText(/Call : \+01 123455678990/i).closest('a');
    expect(phoneLink).toHaveAttribute('href', 'tel:+01123455678990');
    expect(phoneLink.querySelector('.fa.fa-phone')).toBeInTheDocument();

    // Email section
    const emailLink = screen.getByText(/Email : demo@gmail.com/i).closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:demo@gmail.com');
    expect(emailLink.querySelector('.fa.fa-envelope')).toBeInTheDocument();
  });

  it("renders navigation links in correct order", () => {
    renderWithRouter(<Header />);

    const navItems = document.querySelectorAll('.navbar-nav .nav-item');
    expect(navItems).toHaveLength(4);

    const expectedLinks = [
      { text: "Home", href: "/" },
      { text: "About", href: "/About" },
      { text: "Service", href: "/Services" },
      { text: "Contact Us", href: "/Contact" }
    ];

    navItems.forEach((item, index) => {
      const link = item.querySelector('.nav-link');
      expect(link).toHaveTextContent(expectedLinks[index].text);
      expect(link).toHaveAttribute('href', expectedLinks[index].href);
    });
  });

  it("renders the Home link with correct active state and sr-only span", () => {
    renderWithRouter(<Header />);
    
    const homeNavItem = document.querySelector('.nav-item');
    expect(homeNavItem).toHaveClass('active');
    
    const homeLink = homeNavItem.querySelector('.nav-link');
    const srOnlySpan = homeLink.querySelector('.sr-only');
    expect(srOnlySpan).toBeInTheDocument();
    expect(srOnlySpan).toHaveTextContent('(current)');
  });

  it("renders the navbar toggle button with correct attributes", () => {
    renderWithRouter(<Header />);
    
    const toggleButton = screen.getByLabelText("Toggle navigation");
    expect(toggleButton).toHaveClass('navbar-toggler');
    expect(toggleButton).toHaveAttribute('data-toggle', 'collapse');
    expect(toggleButton).toHaveAttribute('data-target', '#navbarSupportedContent');
    expect(toggleButton).toHaveAttribute('aria-controls', 'navbarSupportedContent');
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it("renders with correct Bootstrap structure", () => {
    renderWithRouter(<Header />);
    
    // Check header sections
    expect(document.querySelector('.header_section')).toBeInTheDocument();
    expect(document.querySelector('.header_top')).toBeInTheDocument();
    expect(document.querySelector('.header_bottom')).toBeInTheDocument();
    
    // Check navbar structure
    expect(document.querySelector('.navbar')).toHaveClass('custom_nav-container');
    expect(document.querySelector('.navbar-collapse')).toHaveAttribute('id', 'navbarSupportedContent');
    expect(document.querySelector('.navbar-nav')).toBeInTheDocument();
  });

  it("renders contact navigation with correct structure", () => {
    renderWithRouter(<Header />);
    
    const contactNav = document.querySelector('.contact_nav');
    expect(contactNav).toBeInTheDocument();
    
    const contactLinks = contactNav.querySelectorAll('a');
    expect(contactLinks).toHaveLength(2);
    
    // Verify each contact link has an icon and span
    contactLinks.forEach(link => {
      expect(link.querySelector('.fa')).toBeInTheDocument();
      expect(link.querySelector('span')).toBeInTheDocument();
    });
  });
});
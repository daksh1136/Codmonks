export const navigationItems = [
  { path: "/", label: "Home" }, { path: "/about-us", label: "About Us" }, { path: "/services", label: "Services" },
  { path: "/technologies", label: "Technologies" }, { path: "/portfolio", label: "Portfolio" }, { path: "/blogs", label: "Blog" }, { path: "/contact", label: "Contact Us" },
] as const;

export const footerServiceLinks = ["Web Development", "Mobile App Development", "UI/UX Design", "Quality Assurance", "Digital Marketing"].map(label => ({ label, path: "/services" }));
export const footerCompanyLinks: { label: string; path: string }[] = [...navigationItems.filter(item => item.path !== "/").map(item => item.label === "Contact Us" ? { ...item, label: "Contact" } : item), { label: "Privacy Policy", path: "/privacy-policy" }];

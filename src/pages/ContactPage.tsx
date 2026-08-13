import { useEffect } from "react";
import { ContactSection } from "../sections/ContactSection";
import { updateSeo } from "../utils/seo";

export function ContactPage() {
  useEffect(() => updateSeo({ title: "Contact", description: "Contact Uttam through UKG Lab social links and email.", path: "/contact" }), []);

  return <ContactSection />;
}

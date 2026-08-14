import { useEffect } from "react";
import { LabSection } from "../sections/LabSection";
import { updateSeo } from "../utils/seo";

export function LabPage() {
  useEffect(() => updateSeo({ title: "Lab", description: "UKG Lab experiments, prototypes, backend concepts, product foundations, and practical software explorations.", path: "/lab" }), []);

  return <LabSection />;
}

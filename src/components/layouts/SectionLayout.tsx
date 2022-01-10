import Sections from "components/common/Sections";
import { useEffect, useState } from "react";

export default function SectionLayout(props: any) {
  const [section, setSection] = useState("Mais Buscados");
  const handleSection = (value: string) => {
    setSection(value);
  };

  useEffect(() => {
    setSection(props.sections[0].title);
  }, []);

  return (
    <>
      <Sections
        handleSection={handleSection}
        section={section}
        sections={props.sections}
      />
      {props.render[section]}
    </>
  );
}

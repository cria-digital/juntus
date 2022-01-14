import Sections from "components/common/Sections";
import { useEffect, useState } from "react";

interface IProps {
  sections: {
    title: string;
  }[];
  render: any;
}

export default function SectionLayout(props: IProps) {
  const [section, setSection] = useState<string>("Mais Buscados");
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

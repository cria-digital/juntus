import Sections from "components/common/Sections";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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

  const location = useLocation();

  useEffect(() => {
    setSection(props.sections[0].title);
  }, []);

  useEffect(() => {
    if (location.state && (location.state as any).section)
      setSection((location.state as any).section);
  }, [(location.state as any)?.section, location.key]);

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

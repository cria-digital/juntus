interface IProps {
  sections: any[];
  section: string;
  handleSection: (section: string) => void;
}

export default function Sections(props: IProps) {
  return (
    <div className="sections">
      {props.sections.map((section: { title: any }) => {
        return (
          <div
            className="section"
            key={section.title}
            onClick={() => props.handleSection(section.title)}
            data-active={section.title === props.section}
          >
            <h2>{section.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

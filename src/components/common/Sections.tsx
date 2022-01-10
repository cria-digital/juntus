export default function Sections(props: any) {
  return (
    <div className="sections">
      {props.sections.map((section: any) => {
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

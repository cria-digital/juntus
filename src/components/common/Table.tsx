interface IData {
  name: string;
  value: string;
}

interface IProps {
  noShadow?: boolean;
  data: IData[];
}

export default function Table(props: IProps) {
  return (
    <table
      className="table"
      style={{
        filter: props.noShadow
          ? ""
          : "drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.1))",
      }}
    >
      <tbody>
        {props.data.map((item: any) => {
          return (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

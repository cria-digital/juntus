export default function Table(props: any) {
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

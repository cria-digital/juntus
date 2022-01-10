import { FaTruck } from "react-icons/fa";

const RoutesItem = () => {
  return (
    <li>
      <h3>
        <span className="list-icon">
          <FaTruck />
        </span>
        Belo Horizonte, MG {">"} São Paulo, SP
      </h3>
    </li>
  );
};

export default RoutesItem;

import { IoIosArrowRoundBack } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";

export default function BackButton(props: any) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.to);
  };

  return (
    <div className="back-button" onClick={props.onClick || handleClick}>
      <IconContext.Provider value={{ size: "25", color: "var(--JuntUs-Blue)" }}>
        <IoIosArrowRoundBack /> <span>{props.children}</span>
      </IconContext.Provider>
    </div>
  );
}

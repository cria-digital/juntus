import { IconContext } from "react-icons/lib";
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md";

export default function Ratings(props: any) {
  /// make an array of n elements

  return (
    <div className="ratings">
      <IconContext.Provider value={{ color: "var(--JuntUs-Yellow)" }}>
        {Array(5)
          .fill(0)
          .map((_, i) =>
            i + 0.5 === props.rating ? (
              <MdStarHalf />
            ) : i + 1 <= props.rating ? (
              <MdStar />
            ) : (
              <MdStarBorder />
            )
          )}
      </IconContext.Provider>
    </div>
  );
}

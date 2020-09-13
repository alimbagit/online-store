import React from "react";
import { Link } from "react-router-dom";

interface PropsOneCategoryIcon {
  description: string;
  pathname: string;
  img: string;
}
const OneCategoryIcon = ({
  img,
  pathname,
  description,
}: PropsOneCategoryIcon) => (
  <div>
    <Link to={pathname}>
      <img src={img} />
      <span>{description}</span>
    </Link>
  </div>
);

export default OneCategoryIcon;

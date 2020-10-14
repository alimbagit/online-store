import React from "react";
import { Link } from "react-router-dom";
import "./oneCategoryIcon.scss";

interface PropsOneCategoryIcon {
  description: string;
  pathname: string;
  img: string;
}

/**
 * Представление однго подкаталога в списке подкаталогов
 * @param img - икнока подкаталога
 * @param pathname - путь к подакаталогу
 * @param description - надипись на подкаталоге
 */
const OneCategoryIcon = ({
  img,
  pathname,
  description
}: PropsOneCategoryIcon) => (
    <Link to={pathname} className="one-category">
      <div className="category-image-wrapper">
        <img src={img} />
      </div>
      <span className="description-category">{description}</span>
    </Link>
  );

export default OneCategoryIcon;

import { GetDescriptionsByPath } from 'data';
import React from 'react';
import { Link } from 'react-router-dom';
import "./breadcrumbs.scss";

interface PropsBreadcrumbs {
    pathname: string
}

const Breadcrumbs = ({ pathname }: PropsBreadcrumbs) => {
    const pathArray = pathname.split("/");
    let descriptionsArray=GetDescriptionsByPath(pathname);
    let crumbs = "/catalog";
    pathArray.splice(0, 2);
    return (
        <div className="wrapper-breadcrambs">
            {pathArray.length!==0 && <Link to={crumbs}>Каталог</Link>}
            {pathArray.map((onePath, index) => {
                crumbs += "/" + onePath;
                return (
                    <Link key={onePath} to={crumbs}> &gt; { descriptionsArray[index]}</Link>
                )
            })}
        </div>
    )
}

export default Breadcrumbs
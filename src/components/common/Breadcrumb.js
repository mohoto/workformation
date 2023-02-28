import { Children } from "react";
import { Fragment } from "react/cjs/react.production.min";

const Breadcrumb = ({ children }) => {
  const childrenArray = Children.toArray(children);

  console.log(childrenArray);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>/</span>
        </Fragment>
      );
    }
    return child
  });

  return (
    <nav className="mx-8 mt-8 md:mx-16 lg:mx-32">
      <ol className="flex items-center space-x-4">{childrenWtihSeperator}</ol>
    </nav>
  );
};

export default Breadcrumb;



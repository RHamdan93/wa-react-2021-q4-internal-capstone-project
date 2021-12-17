import { Link } from "react-router-dom";

const Slide = ({ navigateTo, children }) => {
  let Wrapper = navigateTo
    ? () => <Link to={navigateTo}>{children}</Link>
    : () => <div>{children}</div>;

  return <Wrapper></Wrapper>;
};

export default Slide;

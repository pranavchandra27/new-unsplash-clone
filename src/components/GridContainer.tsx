import Masonry from "react-masonry-css";

interface Props {
  children: React.ReactNode;
  className?: string;
  columnClassName?: string;
}

const GridContainer = ({ children, className, columnClassName }: Props) => {
  return (
    <Masonry
      breakpointCols={{
        default: 3,
        1024: 2,
        768: 1,
      }}
      className={"flex -ml-5 w-auto overflow-hidden " + className}
      columnClassName={"pl-5 " + columnClassName}
    >
      {children}
    </Masonry>
  );
};

export default GridContainer;

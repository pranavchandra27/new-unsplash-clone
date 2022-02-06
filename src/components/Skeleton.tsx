import React from "react";

enum variant {
  text = "text",
  circle = 'circle'
}

type SkeletonProps = {
  width: number,
  height: number,
  variant?: variant
  style?:  React.CSSProperties
}

const Skeleton = (props:SkeletonProps) => {
  const {width, height, style} = props
  return (
   <div style={{width, height, ...style}} className="animate-pulse rounded-sm"></div>
  );
};

export default Skeleton;

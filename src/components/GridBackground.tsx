import React from "react";

const GridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-[0.4] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_80%)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
    </div>
  );
};

export default GridBackground;

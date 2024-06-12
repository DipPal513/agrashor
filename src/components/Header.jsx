import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="border-b-2">
        <TopHeader />
      </div>
      <BottomHeader />
    </header>
  );
};

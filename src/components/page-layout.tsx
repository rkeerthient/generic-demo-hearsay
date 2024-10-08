import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import { twMerge } from "tailwind-merge";
import { searchConfig } from "./config";

type Props = {
  _site?: any;
  children?: React.ReactNode;
  className?: string;
};
const PageLayout = ({ _site, children, className }: Props) => {
  return (
    <SearchHeadlessProvider searcher={provideHeadless(searchConfig)}>
      <img src="https://i.imgur.com/IXJQ457.png" alt="" className="w-full " />
      <div
        className={twMerge(
          "min-h-screen bg-secondary text-secondary-text",
          className
        )}
      >
        {children}
      </div>
    </SearchHeadlessProvider>
  );
};

export default PageLayout;

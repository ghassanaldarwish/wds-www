//import "highlight.js/styles/atom-one-dark.min.css";
import "./mdx.css";
const Prose = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="prose dark:prose-invert max-w-none prose-code:overflow-y-auto  prose-pre:max-h-[500px]  prose-code:after:content-none prose-code:before:content-none prose-pre:p-0"
      data-mdx-content
    >
      {children}
    </div>
  );
};

export default Prose;

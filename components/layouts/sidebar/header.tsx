const SidebarHeader: any = ({ children }: any) => {
  return (
    <h2 className="mb-2 flex gap-2 px-4 text-lg font-semibold tracking-tight">
      {children}
    </h2>
  );
};

export default SidebarHeader;

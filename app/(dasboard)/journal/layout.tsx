interface DashLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashLayoutProps) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-black/10">
        Your ai journal
      </aside>
      <div className="ml-[200px]">
        <header className="h-[60px] border-b border-black/10">Hello</header>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

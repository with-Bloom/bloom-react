type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full mx-auto bg-slate-100]">
      <div className="h-full min-h-screen bg-white max-w-[500px] w-full mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-slate-400">
      <div className="mx-auto flex h-screen w-[375px] flex-col justify-between bg-white px-6 pb-4">
        {children}
      </div>
      ;
    </div>
  );
};

export default Layout;

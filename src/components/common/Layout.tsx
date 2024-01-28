type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex bg-slate-100">
      <div className="mx-auto h-screen w-[375px] bg-white">{children}</div>
    </div>
  );
};

export default Layout;

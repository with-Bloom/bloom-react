type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex bg-slate-100">
      <div className="flex flex-col justify-between mx-auto h-screen w-[375px] bg-white px-6 pb-9">
        {children}
      </div>
    </div>
  );
};

export default Layout;

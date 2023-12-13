type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-slate-100">
      <div className="mx-auto flex h-screen w-[375px] justify-center bg-white px-6 pb-6">{children}</div>;
    </div>
  );
};

export default Layout;

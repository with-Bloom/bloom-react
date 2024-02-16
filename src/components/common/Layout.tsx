type Props = {
  children: React.ReactNode;
  style?: 'default' | 'result';
};

const STYLE = {
  default: 'flex flex-col justify-between px-6 pb-9 ',
  result: '',
};

const Layout = ({ children, style = 'default' }: Props) => {
  const layoutStyle = STYLE[style];
  return (
    <div className="bg-slate-100">
      <div className={`${layoutStyle} mx-auto h-screen w-[375px] bg-white`}>{children}</div>
    </div>
  );
};

export default Layout;
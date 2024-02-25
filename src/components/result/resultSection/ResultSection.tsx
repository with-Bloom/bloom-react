type Props = {
  children: React.ReactNode;
};

const ResultSection = ({ children }: Props) => {
  return <div className="flex flex-col items-center px-6 bg-cover bg-gradient">{children}</div>;
};

export default ResultSection;

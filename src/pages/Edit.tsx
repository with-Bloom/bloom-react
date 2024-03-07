import Header from 'components/common/Header';
import ResultTitle from 'components/result/resultSection/ResultTitle';

const Edit = () => {
  return (
    <div className="flex flex-col items-center h-screen px-6 bg-cover bg-gradient">
      <Header />
      <ResultTitle name="sdf" />
      <div className="w-full h-[520px] bg-white bg-opacity-60 border border-white rounded-[10px] bg-clip-padding backdrop-filter backdrop-blur-sm px-[26px] py-[29px]">
        <textarea className="w-full h-[462px] bg-white bg-opacity-0  resize-none focus:outline-none">
        </textarea>
      </div>
    </div>
  );
};

export default Edit;

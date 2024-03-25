import Header from 'components/common/Header';
import ResultTitle from 'components/result/resultSection/ResultTitle';

const Edit = () => {
  return (
    <div className="flex h-screen flex-col items-center bg-gradient bg-cover px-6">
      <Header />
      <ResultTitle name="sdf" />
      <div className="h-[520px] w-full rounded-[10px] border border-white bg-white bg-opacity-60 bg-clip-padding px-[26px] py-[29px] backdrop-blur-sm backdrop-filter">
        <textarea className="h-[462px] w-full resize-none bg-white  bg-opacity-0 focus:outline-none"></textarea>
      </div>
    </div>
  );
};

export default Edit;

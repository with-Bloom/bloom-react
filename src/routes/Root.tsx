import { Outlet } from 'react-router-dom';

import Layout from 'components/common/Layout';

const Root = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default Root;

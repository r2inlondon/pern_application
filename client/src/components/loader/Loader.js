import { Spin } from "antd";

const Loader = ({ loaderTxt }) => (
  <div className="loader">
    <Spin tip={loaderTxt} size="large">
      <div className="content" />
    </Spin>
  </div>
);

export default Loader;

import { useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const Detail = (props) => {
  const params = useParams(); //获取动态路由名
  const [searchParams] = useSearchParams(); //获取查询字符串
  const location = useLocation(); //获取传递过来的其他参数，包括state

  useEffect(() => {
    console.log("detail location", location);
    console.log("detail params", params);
    console.log(
      "detail searchParams",
      typeof searchParams.get("a"),
      searchParams.get("b")
    );
  });

  return (
    <>
      <h3>Detail</h3>
    </>
  );
};

export default Detail;

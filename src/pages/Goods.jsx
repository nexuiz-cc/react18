import { Link, Outlet } from "react-router-dom";
const Goods = (props) => {
  return (
    <>
      <h3>Goods</h3>
      <div>
        <Link to="/goods/1">商品001</Link>
        <Link to="/goods/2?a=1&b=2">商品002</Link>
        <Link to={{ pathname: "3", search: "a=2&b=3" }}>商品003</Link>
        <Link to="./4" state={{ a: 3, b: 4 }}>
          商品004
        </Link>
        <Link to="../">回退</Link>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Goods;

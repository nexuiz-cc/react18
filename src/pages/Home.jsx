import { useNavigate } from "react-router-dom";
import './Home.scss'
const Home = (props) => {
  const navigate = useNavigate();

  const go = () => {
    // navigate("/login");
    navigate("/reg", { replace: true }); //替换历史记录
    // navigate({pathname:'/goods/6',search:"a=4&b=5",state:{c:6,d:7}},{replace:true})
  };
  return (
    <>
      <h3>Home Page</h3>
      <button className='btn' onClick={go}>jump with navigate()</button>
    </>
  );
};

export default Home;

import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Login</h3>
      <button onClick={() => navigate(-1)}>←</button>
    </>
  );
};

export default Login;

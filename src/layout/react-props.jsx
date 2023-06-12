import Header from "../components/Header";
import Aside from "../components/Aside";

function DefaultLayouts(props) {
  console.log('DefaultLayouts',props);
  let {arr} = props;
  return (
    <div>
      <Header num2 = {props.num}/>
      <div>
        <Aside arr={arr}/>
        <div>
          <div>{props.title}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayouts;

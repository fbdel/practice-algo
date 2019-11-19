import React from "react";
import ReactDOM from "react-dom";

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
};

class SkiCounter extends React.Component {
  getPercentage = decimal => {
    return decimal * 100 + "%";
  };

  calcGoalProgress = (total, goal) => {
    return this.getPercentage(total / goal);
  };

  render() {
    return (
      <section>
        <div>
          <p>Total Days : {this.props.total}</p>
        </div>
        <div>
          <p>Powder Days : {this.props.powder}</p>
        </div>
        <div>
          <p>Backcountry Days : {this.props.backcountry}</p>
        </div>
        <div>
          <p>Goal : {this.props.goal}</p>
        </div>
      </section>
    );
  }
}

ReactDOM.render(
  <SkiCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}
  />,
  document.getElementById("root")
);


/* 
---------------------------------------------------------------------
Below is a more consice version using only Fns to create a component
---------------------------------------------------------------------
*/

// const getPercentage = decimal => {
//     return decimal * 100 + "%"
// }

// const calcGoalProgress = (total,goal) => {
//     return getPercentage(total/goal)
// }

// //Added the fn  calGoP from above to <p> tag
// const SkiDayCounter = ({total, powder, etc}) => {
//     return (
//       <div>
//         <p>Total Days: {total}</p>
// 	     <p>Total Days: {powder}</p>
// 		<p>
// 			GoalProg: 
// 			{calcGoalProgress(total,goal)}
// 		</p>
//         <p>And so on</p>
// 	  </div>
//     );
// }

// ReactDOM.render(
//   <SkiCounter
//     total={skiData.total}
//     powder={skiData.powder}
//     backcountry={skiData.backcountry}
//     goal={skiData.goal}
//   />,
//   document.getElementById("root")
// );
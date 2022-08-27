import React from 'react'
import zxcvbn from 'zxcvbn'
 

function PasswordStrengthMeter({password}) {

const testResult =  zxcvbn(password);
const num = testResult.score * 100/4;
const creatPassLabel = () => {
     switch (testResult.score){
          case 0:
               return `Very weak`;
          case 1:
               return `weak`;
          case 2:
               return `medium`;
          case 3:
               return `Good`;
          case 4:
               return `Strong`;
          case 5:
               return ``;
     }
}
const functionProgressColor = () => {
     switch (testResult.score){
          case 0:
               return `#828282`;
          case 1:
               return `#ea1111`;
          case 2:
               return `#ffad00`;
          case 3:
               return `#9bc158`;
          case 4:
               return `00b500`;
          case 5:
               return `none`;
     }
}
    
const changlePasswordColor =() => ({
     width: `${num}%`,
     background : functionProgressColor(),
     height: `7px`

});
     return (
          <div>
               <div className="progress" style={{ height: `7px`}}>
                <div className="progress-bar " role="progressbar" style={changlePasswordColor()} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
               </div>
               <p style={{ color: functionProgressColor() }}>{creatPassLabel()}</p>
          </div>
     )
}

export default PasswordStrengthMeter

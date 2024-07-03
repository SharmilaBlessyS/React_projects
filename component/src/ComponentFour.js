import React from "react";


function ComponentFour(props){
    const name = props.name;
    const age = props.age;
    const isMarried = props.isMarried;
    return(
        <div>
            <table>
               <tr>
                <th>Name</th>
                <td></td>
               </tr>
               <tr>
                <th>Age</th>
                <td></td>
               </tr>
               <tr>
                <th>Marital Status</th>
                <td></td>
               </tr>
            </table>
            </div>
    )
}
export default App;
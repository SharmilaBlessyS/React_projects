import React from "react";
import ComponentTwo from '.\ComponentTwo.js';
import ComponentThree from '.\ComponentThree.js';
import ComponentFour from '.\ComponentFour.js';

function ComponentOne(props){
    const name = props.name;
    const age = props.age;
    const isMarried = props.isMarried;
    return(
        <div>
            <table>
               <tr>
                <th>Name</th>
                <td>{name}</td>
               </tr>
               <tr>
                <th>Age</th>
                <td>{age}</td>
               </tr>
               <tr>
                <th>Marital Status</th>
                <td>{isMarried}</td>
               </tr>
            </table>

            <ComponentTwo name={name} age={age} isMarried={isMarried}></ComponentTwo>
            <ComponentThree name={name} age={age} isMarried={isMarried}></ComponentThree>
            <ComponentFour name={name} age={age} isMarried={isMarried}></ComponentFour>
        </div>
    )
}
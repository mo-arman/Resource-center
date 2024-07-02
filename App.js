/**<div>
 * h1
 * </div>
 * <div>
 * h2
 * </div>
 */

const parent = React.createElement(
    'h3',
    {id:"Parent"},
    React.createElement("h1",
        {id:"child"},[
            React.createElement('h3',{},"I am a firt child👶"),
            React.createElement('h3',{},'I am a Secand Child👶🏻')
        ]),
        React.createElement("h1",
            {id:"child"},[
                React.createElement('h3',{},"I am a Third child👶"),
                React.createElement('h3',{},'I am a Fourt Child👶🏻')
            ])
);
console.log(parent);
const heading = React.createElement('h1',{},"I am a H1 tag from React.js");
const root = ReactDOM.createRoot(document.getElementById('Arman'));
root.render(parent);
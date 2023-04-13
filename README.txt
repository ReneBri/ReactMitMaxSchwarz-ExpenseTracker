Taking the Max Schwarzmuller React course.

Much more convoluded than the Net Ninja React course.

Much higher amounts of components used. I think it's almost too much. The amount of abstraction through passing of props and changing variable names is insane.

For example to change some state in a higher component he wraps a 'setState' function alone in a handler function called XXXXXXHandler. The when passing it as a prop he calls the prop onAction. Then he drills it deeper into another component changing the name again. All just to change some state..... Just call it 'setState" on every level.

Also, each small part of the component has its own sub component. For example of he were making a clock each number on the clock would be its own component which could be set dynamically just in case theres a use case for having thirteen hours in a day.

Will persist though obviously.
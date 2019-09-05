## SVG module for NodeJS

Object-oriented approach to SVG creation. Supports **graphical elements** (Circle, Rectangle, ...), **filters**, **gradients** and most minor features.

### Usage

Import the module. **svg/src** contains the TS source and **svg/built** contains the JS files.

The module directly exports:

![](https://i.imgur.com/9WhIz8a.png)

- the **Canvas** class `<svg>`, where elements are drawn and/or defined

- all **graphical element classes** (Circle `<circle>`, Ellipse `<ellipse>`, ...)

- the **FilterContainer** class `<filter>`, which can hold a collection of filters

- the **Filters** property, which contains all **filter classes** and properties (BlendFilter `<feBlend>`, FloodFilter `<feFlood>`, ...)

- the **Gradients** property, which contains all **gradient classes** and properties (LinearGradient `<linearGradient>`, ...)

### Tips

- All class setters return the object they refer to, so you can chain methods

`let rect = new svg.Rectangle(0,0,10,10).setId("myRect").setBorder("black").setFill("blue");`

- Adding an element to the Canvas definitions (`<defs>`) is done through **defineElement()**; adding an element directly to the body of the SVG is done through **drawElement()**

![](https://i.imgur.com/fvLe1XC.png)

- Methods will try to inform you of mistakes / bad inputs / errors, but won't stop you from doing whatever you want

![](https://i.imgur.com/IxrHr0a.png)

- If no width or height values are given when creating a new Canvas, it will attempt to estimate the required dimensions when printing or exporting. However, those estimates may be innacurate at times

![](https://i.imgur.com/XqIbUIm.png)
# TickTickStylesheet
Custom CSS stylesheet + JS Clock/Timer for TickTick to make everything more compact and better suited to my custom setup. Designed for use at 80% zoom level. The reason for this is that it's easier to make the fonts much larger using CSS and subsequently shrink the entire page than it is to override the Javascript which expects tasks to have a certain set height.

This stylesheet turns this:

![low information density](https://i.imgur.com/PXxNAot.png "old stylesheet")

Into this:

![much nicer](https://i.imgur.com/x2jFBIm.png "new stylesheet")


This stylesheet currently breaks certain things, like Kanban mode! I will probably fix this if I actually start using Kanban mode for anything. You may need to download and install the Archivo Narrow font locally (https://fonts.google.com/specimen/Archivo+Narrow) if the fonts don't work, or if there's an annoying delay between page load and font load.

# Want to run this in a browser?

Firefox: For CSS, I recommend using Stylus (https://addons.mozilla.org/en-US/firefox/addon/styl-us/) since that's what I use and will probably have the fewest compatibility issues. Stylish should also work. For JS, I recommend Tampermonkey (https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/).
Chrome: Find an add-on which applies custom stylesheets.

# Want to run this as its own app?
Download Nativefier (https://github.com/jiahaog/nativefier), and run:

nativefier --zoom 0.8 --single-instance "https://ticktick.com/#q/all/today/" --inject TickTick.css  --hide-window-frame -n TickTick

# Those things down the bottom right don't show up for me!
You need to run the custom Javascript. If it doesn't work, find the line "setTimeout(initLowerRight, 1000\*5);" in the Javascript file and change the 5 to a larger number. This is a delay before loading in the custom page components, and it needs to occur after the main TickTick page has loaded.

# List of Edits
- Default fonts replaced with the Archivo Narrow font to maximise horizontal text density.
- Glowy checkboxes! More important checkboxes are more glowy.
- Keeps all item grab target handles visible rather than only making them visible when you mouseover.
- Custom markdown formatting:
![g](https://i.imgur.com/AxjlYdm.png "g")
- Denser right click menu and multiple columns for tags:
![g](https://i.imgur.com/PiImsXO.png "g")
- Denser right-click menus, reduced link width, and removal of certain tooltips:
![g](https://i.imgur.com/id0dFyI.png "g")
- Replaced the Rainmeter widgets with custom JS, so that right-click menu will open on top of the widgets:
![g](https://i.imgur.com/UUqfVmF.png "g")

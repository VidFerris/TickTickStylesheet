# TickTickStylesheet
Custom CSS stylesheet for TickTick to make everything more compact and better suited to my custom setup. Designed for use at 80% zoom level. The reason for this is that it's easier to make the fonts much larger using CSS and subsequently shrink the entire page than it is to override the Javascript which expects tasks to have a certain set height.

This stylesheet turns this:

![low information density](https://i.imgur.com/PXxNAot.png "old stylesheet")

Into this:

![much nicer](https://i.imgur.com/uLvNo0T.png "new stylesheet")


This stylesheet currently breaks certain things, like Kanban mode! I will probably fix this if I actually start using Kanban mode for anything. You may need to download and install the Archivo Narrow font locally (https://fonts.google.com/specimen/Archivo+Narrow) if the fonts don't work, or if there's an annoying delay between page load and font load.

# Want to run this in a browser?

Firefox: I recommend using Stylus (https://addons.mozilla.org/en-US/firefox/addon/styl-us/) since that's what I use and will probably have the fewest compatibility issues. Stylish should also work.
Chrome: Find an add-on which applies custom stylesheets.

# Want to run this as its own app?
Download Nativefier (https://github.com/jiahaog/nativefier), and run:

nativefier --zoom 0.8 --single-instance "https://ticktick.com/#q/all/today/" --inject TickTick.css  --hide-window-frame -n TickTick

# Those things down the bottom right don't show up for me!
They are widgets running in Rainmeter (https://www.rainmeter.net/) rather than integrated page elements. The ones visible in the screenshot are edited versions of:
- illustro\Network\Network.ini and illustro\System\System.ini
- MinimalTimer\MinimalTimer.ini (An edit of https://www.deviantart.com/monochromatope/art/Minimal-Timer-1-0-568693681)
- Elegance2\Clock\Clock_hori1.ini and Elegance2\Date\Date_vert1.ini (Edits of https://www.deviantart.com/lilshizzy/art/Rainmeter-Elegance-2-244373054)

The originals are released under Creative Commons licenses, so I should be able to share these edits in this repository. (Coming soon!)

# Want to throw money at me in thanks?
you can do this at https://ko-fi.com/randomini no pressure tho

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

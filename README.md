# TickTickStylesheet
Custom CSS stylesheet for TickTick to make everything more compact and better suited to my custom setup. Designed for use at 80% zoom level. The reason for this is that it's easier to make the fonts much larger using CSS and subsequently shrink the entire page than it is to override the Javascript which expects tasks to have a certain set height.

This stylesheet currently breaks certain things, like Kanban mode! I will probably fix this once I actually start using Kanban mode for anything.

# Want to run this in a browser?

Firefox: I recommend using Stylus (https://addons.mozilla.org/en-US/firefox/addon/styl-us/) since that's what I use and will probably have the fewest compatibility issues. Stylish should also work.
Chrome: Find an add-on which applies custom stylesheets.

# Want to run this as its own app?
Download Nativefier (https://github.com/jiahaog/nativefier), and run:

nativefier --zoom 0.8 --single-instance "https://ticktick.com/#q/all/today/" --inject TickTick.css  --hide-window-frame -n TickTick

# Focus Existing Tab on Link

This used to be an experimental feature in Chrome under chrome://flags but it is no more. With this Chrome extension, if you click a link to an existing tab, instead of opening a second tab, it will simply bring that tab to the front.

### Usage

Enable the extension in Chrome (uploading to Chrome store after I make some nicer icons, if you really want to use it now, download the repo, go to Chrome Extensions, enable "Developer mode", select "Load unpacked extension"), and now any anchor tag that is classed "tab-link" will bring any existing tab with that url to the front on click. If no existing tab exists for that url, the link will open in a new one as normal. 

### When would I ever want this?

Let's say you want to show off some interactive websites during your presentation. It's easiest if you build your presentation in html but embedding full web sites into your presentation is going to look ugly. Who wants to see a full website inside of a slide? Their design might clash with your background color / headers. Worse still, depending on the resolution of the projector, who knows how it will end up displaying? Also, embedding a ton of websites into one tab is a recipe for Chrome slowing way down.

The semi-solution: Open up your example websites as separate tabs. The problem with that is it leaves you hunting for all these tabs in the middle of your presentation. And if you're in "Presentation mode" in Chrome, the menu animation is super swanky, yet distracting. 

The better solution: Pre-load your example pages as separate tabs, as you normally would, and put hyperlinks to those pages in your presentation. When you get to that example, click on the link (it could be an image so it looks nice), and the already loaded tab will come to the front. To quickly get back to your slides, assuming your presentation is in the first tab position, hit cmd-1 and you're back!

#### Disclaimer

This is my first Chrome extension, built mostly out of procrastination of not working on my actual presentation. Suggestions welcome.
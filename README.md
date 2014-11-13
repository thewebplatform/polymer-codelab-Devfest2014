
=========

A [Polymer](http://polymer-project.org) CodeLab
-------------------------

### [GDGDC DevFest 2014](http://www.devfestdc.org/)

- **Date** *Nov 21st, 2014*
- **Location** [*Aol Headquarters in Dulles VA*](https://www.google.com/maps/place/AOL,+Inc/@39.004266,-77.447616,17z/data=!3m1!4b1!4m2!3m1!1s0x89b638e764f4fc67:0xdc42d9468f9a72d5?hl=en)
- **Organizers** [*GDGDC Meetup*](http://gdgdc.com)
- **Sponsors** [*The Web Platform Podcast*](http://thewebplatform.libsyn.com)

### Summary
This Code Lab is based on [Eric Bidelman](https://twitter.com/ebidel)'s [SPA Tutorial](https://www.polymer-project.org/articles/spa.html) on the Polymer Project web application. In this code lab, you will create a single page application from a skeleton application using Web Components & Polymer. The application itself will be a basic wiki with information about Web Components & Resources.

### READ BEFORE YOU ATTEND!!!
Before attending this codelab you will need to do some preparation and have some basic knowledge in a few technologies.

> ** System Requirements**
* Node.js (v0.10.30+) & NPM installed 
* An IDE, code editor, or Chrome DevTools Workspace
* An [Evergreen Browser](http://eisenbergeffect.bluespire.com/evergreen-browsers/)
 * Internet Explorer 10+
 * Chrome latest
 * Firefox latest
 * Opera latest
 * Safari latest

> **YOU NEED TO KNOW** the basics & working knowledge of
 * JavaScript, HTML, & CSS
 * Git & Github

> **You SHOULD know**
- Bower & NPM basics

#### DOWNLOAD ALL DEPENDENCIES PRIOR TO THE CODELAB!
In the event we have wifi issues at the codelab, you will need to have access to local files and have dependencies preloaded. We will allocate some time for fixes & problems but you need to be as prepped as possible. To get the files you need you must clone the repository using git and install its dependencies.

##### Git
Of course you could start a Polymer Application from scratch if you like using the `yo polymer` command for the [Yeoman Generator 'generator-polymer` npm module](https://github.com/yeoman/generator-polymer) which is what we did for this code lab but because you will be going through a step by step process you will need to clone the repository to get the benefits of the step by step process.  

```sh
git clone https://github.com/thewebplatform/polymer-codelab-Devfest2014.git polymer-codelab-Devfest2014
cd polymer-codelab-Devfest2014
```
Install all NPM & Bower application dependencies 
##### NPM (Node Package Manager)
```sh
npm install -g bower
npm install -g grunt-cli
npm install
```
##### Bower
```sh
bower install
```
### View What You Are Building
Before we start, let's view what we are building by running the server and seeing the application.
```sh
grunt serve:dist
```
Next check out the app structure. In particular, view the app folder. That is where most of the app gets updated. This is the current way Google suggests you structure Polymer apps.
### Instructions
You can view any completed section of the tutorial using `git checkout step-?`. To see the difference between any two steps, use the `git diff` command.
 
 `git diff step-?..step-?`

##### Step 0 : Application Structure
The first few steps in this codelab are to get the basic elements we need to scaffold our single page application. When choosing components for layouts in web applications we have a lot of options. Polymer's [`core-elements`](https://www.polymer-project.org/docs/elements/core-elements.html) have some great custom elements that we can utilize. One great feature of these elements is they tend to be 'responsive' right 'out-of-the-box'. 

First, let's checkout the correct application state to work with.
```sh
git checkout -f step-0
```
###### Choose, install, & Add Layout Elements
First, we are going to add the base components we need to scaffold the project layout. Check the project structure to ensure the components and check the dependencies were added. 
```sh
bower install --save Polymer/core-scaffold Polymer/core-toolbar Polymer/font-roboto 
```
By using `--save` you force bower to write andthe changes to its configuration file `bower.json`, thus saving your updates.
Let's talk about the components we chose and why we are using them.
###### [&lt;core-scaffold&gt;](https://www.polymer-project.org/docs/elements/core-elements.html#core-scaffold)
`core-scaffold` is a responsive layout container and is meant to hold common elements in layout such as a header, toolbar, menu, title and areas for application content. 

###### [&lt;core-toolbar&gt;](https://www.polymer-project.org/docs/elements/core-elements.html#core-toolbar)
`core-toolbar` is a horizontal bar containing items that can be used for label, navigation, search and actions. By default, these child items are placed into a horizontal center layout container inside of core-toolbar's Shadow DOM. You can use [flex attributes](https://www.polymer-project.org/docs/polymer/layout-attrs.html) to control the items' sizing. 

###### [&lt;font-roboto&gt;](https://www.polymer-project.org/docs/elements/core-elements.html#core-toolbar)
`font-roboto` is simply a css `link` element that pulls in the `RobotoDraft` Google Web Font used for Google's [Material Design](http://www.google.com/design/spec/material-design/introduction.html) as seen on [Android Loillpop](http://www.android.com/versions/lollipop-5-0/) & [Polymer `paper-elements`](https://www.polymer-project.org/docs/elements/paper-elements.html).

###### Build the Project and Start Watchers*
```sh
grunt serve
```
This will build the application, open your default browser, and run the app on your `localhost:9000`. As you make changes the app will watch for file changes and automatically reload itself to reflect the latest code changes.

###### **note: if you want to see a production build use `grunt serve:dist to build with vulcanize*
<br>
###### Wire up the HTML!
Navigate to your 'elements.html` file located in the `app/elements` directory. Add the HTML import links here (make sure you are using the correct value for the `rel` attribute to ensure the imports will be recognized)
```html
<link rel="import" href="../lib/font-roboto/roboto.html">
<link rel="import" href="../lib/core-toolbar/core-toolbar.html">
<link rel="import" href="../lib/core-scaffold/core-scaffold.html">
```

###### Add Markup
Add `core-scaffold` and `core-toolbar` to your HTML. We are also going to add 'main' & 'nav' elements to get a holistic idea of our layout in the browser. Next add Polymer layout attributes to the elements to get easy fine tuning of the flex box layout and box model. See [Polymer's layout attribute doc's](https://www.polymer-project.org/docs/polymer/layout-attrs.html) for details on these.

```html
...
<body unresolved fullbleed>
  <core-scaffold id="scaffold">
    <nav> navigation </nav>
    <core-toolbar tool flex right-center>flexing right and centered content</core-toolbar>
    <main layout horizontal center-center fit> main content area </main>
  </core-scaffold>
  ...
```
###### Style Global CSS
Update the 'body` and 'h*' element rules so that all elements will use 'RobotoDraft' font instead of 'Arial'.
```css
...
h3,
h4 {
  font: 300 16px/1 "RobotoDraft";
}
...
Next you'll use a new css selector for Shadow DOM to pierce through all shadow roots within the document body and colorize all 'core-toolbars'. '/deep/' is a powerful selector so be careful using it. Also keep in mind that, as of writing this, many css preprocessors still do not support this syntax.   
```
```css
...
body /deep/ core-toolbar {
  background-color: #03a9f4;
  color: #fff;
}
```
###### Add Shadow DOM CSS Shims
In your 'main.css' file add 'polymer-next-selector' css selector. This will simulate Shadow DOM styling for browsers that do not have native implementations od Shadow DOM CSS Selectors.
```css
...
body /deep/ core-toolbar {
  background-color: #03a9f4;
  color: #fff;
}

polymer-next-selector {
  content: 'body /deep/ core-toolbar';
}
```
For a Polymer to know when it should shim CSS selectors for the Shadow DOM, 'style' and 'link' tags require a 'shim-shadowdom' atrribute. No value is required. Add this attribute in your 'index.html' file on the link tag for 'main.css'.

```html
...
<link rel="stylesheet" href="styles/main.css" shim-shadowdom>
...
```
Congratulations! Hopefully you have a working application with very little coding using these elements. You can now move on to `step-1`. If for any reason you are unable to complete this step you can checkout the next step, diff the steps, or repeat this step by checking out `step-0` again.

##### Step 1 : Menus & Content Areas
##### Step 2 : Views, Routing, & Data Binding
##### Step 3 : <a11y-keys> & Keyboard Navigation
##### Step 4 : Dynamic Content w/ Firebase 
##### Stey 5 : Finishing Touches

### Next Steps
### Resources
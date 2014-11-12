
=========

A [Polymer](http://polymer-project.org) CodeLab
-------------------------

### [GDGDC DevFest 2014](http://www.devfestdc.org/)

- **Date** *Nov 21st, 2014*
- **Location** [*Aol Headquarters in Dulles VA*](https://www.google.com/maps/place/AOL,+Inc/@39.004266,-77.447616,17z/data=!3m1!4b1!4m2!3m1!1s0x89b638e764f4fc67:0xdc42d9468f9a72d5?hl=en)
- **Organizers** [*GDGDC Meetup*](http://gdgdc.com)
- **Sponsors** [*The Web Platform Podcast*](http://thewebplatform.libsyn.com)

### Summary
This Code Lab is based on [Eric Bidelman](https://twitter.com/ebidel)'s [SPA Tutorial](https://www.polymer-project.org/articles/spa.html) on the Polymer Project web application. In this code lab, you will create a single page application from a skeleton application using Web Components & Polymer.

### READ BEFORE YOU ATTEND!!!
Before attending this codelab you will need to do some preparation and have some basic knowledge in a few technologies.

> ** System Requirements**
* Node.js (v0.10.30+) & NPM installed 
* An IDE or code editor
* Internet Explorer 10+, Chrome latest, Firefox latest, Opera latest, or Safari latest browser

> **YOU NEED TO KNOW**
* Git VCS
* Basic JavaScript programming knowledge
* Basic Understanding of writing HTML & CSS Code
* Basic working knowledge of Github

> **You SHOULD know**
- Bower basic usage
- NPM basic usage

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

##### Run the Server
```sh
grunt serve:dist
```

### Instructions
You can view any completed section of the tutorial using `git checkout step-?`. To see the difference between any two steps, use the `git diff` command.
 
 `git diff step-?..step-?`

##### Step 0 : Application Structure
The first few steps in this codelab are to get the basic elements we need to scaffold our single page application. When choosing components for layouts in web applications we have a lot of options. Polymer's [`core-elements`](https://www.polymer-project.org/docs/elements/core-elements.html) have some great custom elements that we can utilize. One great feature of these elements is they tend to be 'responsive' right 'out-of-the-box'. 

First, let's checkout the correct application state to work with.
```sh
git checkout -f step-0
```
##### Choose, install, & Add Layout Elements
```sh
bower install Polymer/core-header-panel
```

##### Step 1 : Toolbar
##### Step 2 : Main Content Sections
##### Step 3 : Views & Data Binding
##### Step 4 : Navigation & Routing
##### Step 5 : Keyboard Navigation
##### Step 6 : Loading Dynamic Content 
##### Stey 7 : Finishing Touches

### Next Steps
### Resources
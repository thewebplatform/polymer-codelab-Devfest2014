
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

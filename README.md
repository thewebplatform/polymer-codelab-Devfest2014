Our Catchy Title...NOM NOM
=========

A [Polymer](http://polymer-project.org) CodeLab
-------------------------

### [GDGDC DevFest 2014](http://www.devfestdc.org/)

- **Date** *Nov 21st, 2014*
- **Location** [*Aol Headquarters in Dulles VA*](https://www.google.com/maps/place/AOL,+Inc/@39.004266,-77.447616,17z/data=!3m1!4b1!4m2!3m1!1s0x89b638e764f4fc67:0xdc42d9468f9a72d5?hl=en)
- **Organizers** [*GDGDC Meetup*](http://gdgdc.com)
- **Sponsors** [*The Web Platform Podcast*](http://thewebplatform.libsyn.com)

### Summary
Roughly based on Eric Bidelman's [SPA Tutorial[(https://www.polymer-project.org/articles/spa.html) on the Polymer Project web application. 

> This is a section with blocking...


### READ BEFORE YOU ATTEND!!!
Before attending this codelab you will need to do some preparation and have some basic knowledge in a few technologies.

#### You NEED to Know
- Git VCS (preferrably in the command line)
- Basic Understanding of writing JavaScript, HTML, CSS Code
- Basic working knowledge of Github

#### You SHOULD Know
- Bower basics
- NPM basics

#### DOWNLOAD ALL DEPENDENCIES PRIOR TO THE CODELAB!
In the event we have wifi issues at the codelab, you will need to have access to local files and have dependencies preloaded. We will allocate some time for fixes & problems but you need to be as prepped as possible. To get the files you need you must clone the repository using git and install its dependencies.

##### Git
Of course you could start a Polymer Application from scratch if you like using the `yo polymer` command for the [Yeoman Generator 'generator-polymer` npm module](https://github.com/yeoman/generator-polymer) which is what we did for this codelab but because you will be going through a step by step process you will need to clone the repository to get the benefits of the step by step process.  

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
grunt serve
```

### Instructions
You can view any completed section of the tutorial using `git checkout step-?`. To see the difference between any two steps, use the `git diff` command.
 
 `git diff step-?..step-?`

##### Step 0 : Application Structure
The first few steps in this codelab are to get the basic elements we need to scaffold our single page application. 
```sh
git checkout -f step-0
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
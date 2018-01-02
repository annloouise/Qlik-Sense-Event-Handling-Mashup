# Qlik Sense Event Handling Mashup

This is a showcase mashup showing how the new event handling in Capability API can be used. 

---

## Import the mashup to Qlik Sense 

Import the mashup to Qlik Sense, follow this guide:
[Installing, importing and exporting your visualizations](http://help.qlik.com/en-US/sense-developer/Subsystems/Extensions/Content/Howtos/deploy-extensions.htm)

## Open the mashup in Qlik Sense

Follow this guide to open the mashup in Qlik Sense:
[Opening an existing mashup](http://help.qlik.com/en-US/sense-developer/Subsystems/Dev-Hub/Content/Howtos/dev-hub-open-mashup.htm)

## Event Handling Mashup

#### Functionality:

* Open a non existing object --> the 'error' listener will catch this issue
* Multiple listeners --> two error dialogs will show up, one for each listener
* Close the app --> the 'closed' listener will catch this issue
* Open app again after it has been closed

![Event Handling Mashup](/event-handling-mashup.png?raw=true "Event Handling Mashup")

## Author

**Ann-Louise Andersson**

* [github.com/annloouise](http://github.com/annloouise)

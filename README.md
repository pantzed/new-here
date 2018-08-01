# New Here
## Description
New Here is a social app for finding group and individual activities
when moving to, or visiting, a new place. The app allows users to 
create a profile, join events, and create new events. Events are 
location based, so changing your locations changes the events 
available to you in that area.

## User Stories
### Users should be able to ...
* create an account or login to an existing account
* create a profile
* edit their profile information
* delete their profile
* see all available events
* look at specific event details
* join an event
* leave an event
* delete an event
* create an event

### Features to be developed
* chat with others who have joined the same event
  * Socket Library: Socket.io
* limit event editing and deleting to the admin of that event
* use google authentication at login
* profile map displays location of all suggested events
* bind locations to events and only show events when a users is at the same location

## Comps
See 'comps' directory for wireframes

## Stack
* Style Framework: Bootstrap 4
* DOM Manipulation: Vanilla
* Server: Express
  * Templating Library: ejs
  * Querying Library: Knex
* Database: Postgress
* Hosting Service: Heroku

## External APIs
* Google Maps

## To-do
* Refactor google maps fetch
* Grab actual location and update location description
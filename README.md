# React App Assignment

###### Full Stack Development 2, HDip in Computer Science

__Name:__ Marianna Mazzette

__Video Demo:__ https://youtu.be/GbTwHsEYuzE


This repository contains an implementation of the Movie Fans Web Application using the React library. 

### Features
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any **modifications to existing features**) .]

+ Tv Shows Page
+ Tv Shows Details Page
+ Cast list for reach movie with collapsible content
+ Hyperlink on each cast member for actor's details page, with personal info, photo and biography
+ My Fantasy Movies Page
+ Form to submit info for fantasy movie, including genres selection and date selection
+ List all the fantasy movies added using cards format
+ Pagination for HomePage, Upcoming, Tv Shows pages
+ Protected routes for Favorites and My Fantasy Movies page
+ 3rd party authentication (Supabase)
+ StoryBook stories file myFantasyMovieForm.stories
+ Filter movies by average vote and release date (all movies released after a date)
+ Added Theme file to update font
+ Updated card format to move title at the bottom and rate at the top right conrner of each card
+ Introduced localisation in multiple languages
+ Deployment in Vercel



### Setup requirements.

Login details for protected routes:
email: homer@simpson.com
password: secret


### API endpoints

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ Discover list of tv shows - discover/tv
+ Tvshow details - tv/:id
+ Tvshow posters - tv/:id/images
+ Cast list - movie/:id/credits
+ Actor details - person/:id


### Routing

[ List the __new routes__ supported by your app and state the associated page.]

Public:
+ /tvshows - displays all TV shows.
+ /tvshows/:id - displays the overview of a selected TV and additional details.
+ /actor/:id - displays personal info of a selected actor.
+ /login - displays the login page.

Protected:
+ /movies/favourites - displays the Favorite Movies Page (visible only to authenticated users).
+ /myFantasyMovie - displays the My Fantasy Movies Page (visible only to authenticated users).


### Third Party Components/Integration

[Describe the level of  integration/use or other API's or third party components]

+ Authentication: supabase-js to manage login/logout and storage of the user's login details


### Independent learning (If relevant)

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).

+ New Font: Applied different font for the app: https://mui.com/material-ui/customization/typography/
+ Pagination: 
    https://www.youtube.com/watch?v=RwrkokvWys0&t=1s
    https://www.youtube.com/watch?v=v900iP4Tpa8&t=253s
+ Authentication with Supabase: https://www.youtube.com/watch?v=r7SAlIlMs1k 
+ Collapsible list in Cast: 
    https://stackoverflow.com/questions/67684513/implement-show-more-show-less-in-react-component-when-using-map-for-adding-th
    https://stackoverflow.com/questions/72825282/view-more-and-view-less-with-usestate-hook-in-react-js
    https://stackoverflow.com/questions/72726650/reactjs-adding-a-read-more-button-to-an-array-to-hide-show-more-than-3-items




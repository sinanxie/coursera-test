# Mod3_solution 
The idea here is for the user to search the descriptions of menu items. 
Then, given the list of matches of his search, give the user the ability to throw the items they for sure don't want off the list, 
thus narrowing it down to what they do want.

Once the user enters something into the textbox and clicks the button, 
your app will reach out to the server and retrieve the list of menu items for the entire menu. 
Once retrieved, your task is to loop through all the items and, for each item, 
do a simple check if the string being searched for by the user appears anywhere in the description of the item. 
If it does, that item will be listed below the textbox.

The URL for the REST Endpoint is https://davids-restaurant.herokuapp.com/menu_items.json.

More requirements could be seen through https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/assignments/assignment3/Assignment-3.md

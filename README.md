# Cookie Stand - Lab06

## Cookies Stand

Cookie Stand site displays store locations and cookies sales.  Info is located inside the sales.html file, which is linked from the landing index page.

### App.js

app.js contains objects that represent each of our stores.  Objects have properties representing names of the stores, minimum and maximum customers per hour, and an array of cookies sold per hour for a given day.

Object methods calculate customers per hour randomly between the max and minimum property values of the object.  A complete day method utilizes the customers per hour method and multiplies it by the stores average customers per hour.  This sale is pushed into the array storing the cookies sold per hour for the whole day at that object (i.e. location).

A max sold method iterates through the array of all the cookies sold and finds the most sold in a given hour.

Lastly, the function "publish" renders the data from each object into the html sales page. 

### Author: Quentin P Young III

### Links and Resources
* [submission PR](http://xyz.com)
* Any Links you used as reference

### Reflections and Comments
* Consider including the answers to your daily journal and submission questions here
* This is also a good place to reflect on the tools and resources used and learned

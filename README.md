# Liri
This is a back-end web application that runs 100% on Node.js called Liri (which stands for Language Interpretation and Recognition Interface). This application is similar to the iPhone's Siri but uses the terminal/console to communicate with a user as opposed to being spoken to. The application runs a few different APIs that all have different functions depending on what the user inputs. Below are some detailed instructions on how to use Liri: 

OMDB/movie-this:

The first command that can be taken in by Liri is called movie-this. What this command does is that it allows a user to type in a specific movie and Liri will give back certian information on that movie such as the title, year it was released, ratings, etc. Here is how to do that:

1. First navigate to the folder that contains the liri.js file along with everything else that is needed to power it. Your termial should look like this:

![alt text](https://github.com/wtsegars/Liri/blob/master/images/ScreenShot2019-04-15at9.38.02PM.png)

2. Next you would type the following into you terminal window: 

![alt text](https://github.com/wtsegars/Liri/blob/master/images/ScreenShot2019-04-15at9.50.05PM.png)

(note: Tropic Thunder is just an example, any movie could be put in here and it would work.)

3. Lastly you would hit enter to run Liri and you output should look something like this:

![alt text](https://github.com/wtsegars/Liri/blob/master/images/ScreenShot2019-04-15at9.52.40PM.png)

The second command that can be taken in by Liri is called concert-this. What this will do is that allows for a user to enter a band/artist into the terminal and Liri will give back information on the next venue that the specific artist/band is playing. Here is how a user would do that:

1. Like the previous command, navigate to the folder that contains liri.js using your terminal:

![alt text](https://github.com/wtsegars/Liri/blob/master/images/ScreenShot2019-04-15at9.38.02PM.png)

2. Next you would type the following into you terminal:

![alt text](https://github.com/wtsegars/Liri/blob/master/images/ScreenShot2019-04-16at12.34.24AM.png)

3. Lastly you would hit enter and the output should look something like this:

![alt text](https://github.com/wtsegars/Liri/blob/master/images/ScreenShot2019-04-16at12.35.55AM.png)

The third command that can be taken in by Liri is called spotify-this-song. What this command will do is that it allow for a user to type in the name of a specific song and it will allow Liri to pull up basic information on that song such as the artists who worked on it, the album it came from, a preview link, etc. Here is how a user would use this command:

1. Like the previous commands, navigate to the folder that contains liri.js using your terminal:

![alt text](https://github.com/wtsegars/Liri/blob/master/images/ScreenShot2019-04-15at9.38.02PM.png)

2. Next you would type this into you terminal: 

![alt text](https://github.com/wtsegars/Liri/blob/master/images/ScreenShot2019-04-16at12.46.51AM.png)

3. Lastly you would hit enter and the output should look something like this:

![alt text](https://github.com/wtsegars/Liri/blob/master/images/ScreenShot2019-04-16at12.47.32AM.png)

(note: not all songs are going to have a preview_url.)

The fourth and final command that can be taken in by Liri is call do-what-it-says. This command is unique because not only does it rely on multiple APIs, it also relies on a txt file called "random.txt". What it does is that it takes in the text that is in random.txt and, depending on what is in the txt file, it will active one of the three previously mention commands. Here is how it works and how a user would use this command:

1. Like the previous commands, navigate to the folder that contains liri.js using your terminal:

![alt text](https://github.com/wtsegars/Liri/blob/master/images/ScreenShot2019-04-15at9.38.02PM.png)

2. Next you would type this into your terminal:

![alt text](https://github.com/wtsegars/Liri/blob/master/images/ScreenShot2019-04-17at1.45.05PM.png)

Depending on what is inside of the random.txt file, it will run one of the previous commands. For instance in the example below, it will run spotify-this-song with the song I Want It That Way:

![alt text](https://github.com/wtsegars/Liri/blob/master/images/ScreenShot2019-04-17at1.45.41PM.png)

3. Once the command is run, it will show the information for the song mentioned in the previous example just like it had been used with the spotify-this-song command:

![alt text](https://github.com/wtsegars/Liri/blob/master/images/ScreenShot2019-04-17at1.46.04PM.png)

If the text in random.txt is altered to contain movie-this or concert-this along with a search query, it will work just the same as the previous example.

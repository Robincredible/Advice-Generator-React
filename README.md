# Advice Generator App using React

This is another simple project with an API call returning a random JSON Object.

## Consuming a JSON API with Fetch

This free [Advice Slip JSON API](https://api.adviceslip.com/) returns a random JSON response everytime it is called and I used ```fetch()``` to consume it and return the data. To generate a new advice per button click, I used the function ```Math.floor(Math.random * 20)``` to change the state with a new value everytime. At first I thought about using the function to return an ID, but since the API itself always returns a random object by default, I just have to update the state to rerender and call the API again.

*It should be noted that there is a more efficient way to call the API without the timer that I used to disable the button. This was just a band-aid solution that I thought of at the time after seeing that it always returns the same object if called within 2 seconds. The free API does always return a random object every time by default, but it can also retrieve a random object if you place an ID after the URL. So the more efficient way to do this would be doing a random number call after the URL. Will be updating this in a while*

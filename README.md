# Advice Generator App using React

Hello! This is my second attempt in doing stuff with React! This is another pretty simple project with an API call returning a JSON.

## Consuming a JSON API with Fetch

This free [Advice Slip JSON API](https://api.adviceslip.com/) returns a random JSON response everytime it is called and I used ```fetch()``` to consume it and return the data. To generate a new advice per button click, I used the function ```Math.floor(Math.random * 20)``` to change the state with a new value everytime. At first I thought about using the function to return an ID, but since the API itself always returns a random object by default, I just have to update the state to rerender and call the API again.

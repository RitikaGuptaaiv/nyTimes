# New York Times Most Popular Articles

This project displays the most popular articles from the New York Times using their public API. It includes a shimmer effect while the data is loading.

## Project Structure

- `App.js`: The main component of the application. It sets up the basic layout and renders the `ArticlesContainer` component.
- `ArticlesContainer.js`: Fetches the data from the New York Times API and manages the state of the articles. It renders a shimmer effect while the data is being loaded and an `ArticleList` once the data is fetched.
- `ArticlesList.js`: Displays the list of articles. When an article is clicked, it shows more details about the article on the new page.
- `Shimmer.js`: Displays a loading message while the data is being fetched.
- `App.css`: Contains styles for the main `App` component.
- `ArticlesList.css`: Contains styles for the `ArticlesList` component.
- `Shimmer.css`: Contains styles for the `Shimmer` component.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.


1. Clone the repository:


git clone https://github.com/g123ritz/nytimesarticles.git
cd nyt-most-popular-articles

### Installation

You can create this project either using CLI commands or using `create-react-app`.

#### Using CLI

1. Initialize a new project:

   
    npm init
    

2. Install development dependencies:

 
    npm install -D parcel
  
3. Install React and ReactDOM:

  
    npm install react
    npm install react-dom
    

4. Start the project:

    npm start
    

#### Using create-react-app

1. Create a new React app:

    
    npx create-react-app nyt-most-popular-articles
    cd nyt-most-popular-articles
   

2. Start the development server:

   
    npm start
    

### Replace the API Key

Replace the `api-key` in `ArticlesContainer.js` with your own New York Times API key. You can get it from [New York Times Developer Portal](https://developer.nytimes.com/).

## Running the Application

Start the development server:

npm start
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## ○ Setup and running instructions.
Step 1 - Clone the repository
git clone git@github.com:Anshir08/Plugin-Chat-Interface.git
Step 2 - Install dependencies
->  npm install
Step 3 - Run the application
->  npm run dev

## ○ Explanation of plugin architecture and parsing logic.
Steps to use -
1. Enter the plugin in the input field followed by a space and then the message depending on the plugin
e.g., 
### cacl 5+6*8%4 
### weather mumbai
### define keyboard

2. Press enter.
3. The plugin will be executed give output as message rich chat bubble.


Three plugins available -
1. Calculation plugin - calculated the expression
2. Dictionary plugin - returns the meaning of the word by fetching from dictionary api
3. Weather plugin - returns the weather of the city by fetching from weather api


### Mesage parsing logic -
1. The message is parsed by a splitting the message into plugin type and query.
2. Query is either the mathematical expression or a word or a city name ### depending on the plugin type.
3. For messages persistence, the message is stored in the local storage. and on page reload, the messages are retrieved from the local storage and parsed before updating the state.



## ○ List of plugins implemented and APIs used.
1. Calculation plugin - calculated the expression using JavaScript Function constructor.

2. Dictionary plugin - `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

3. Weather plugin - `https://api.weatherstack.com/current?access_key=${access_key}$&query=${city}`
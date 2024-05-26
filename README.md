This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install the dependencies

Use the follwoing command to install the required dependencies

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

## Design Approach

### Dynamic Component Rendering
I am using server driven UI approach which helps me rendering the UI dynamically. Based on different component type provided in the json data which acts as React Component.The KeysToComponentMap object is used to determine which React component to render based on the type property in the JSON configuration.This approach helps us to change the UI on the fly from backend without making changes to the frontend and without making builds and releasing builds.

### Project Structure
- src/components: Contains the individual reusable React components like CardComponent and TabComponent.
- src/data: Contains the data.json file which defines the structure and content of the components to be rendered.
- src/screens: Contains the HomeScreen component which is the main entry point for rendering the components defined in data.json.
- src/types: Contains TypeScript type definitions.
- src/constants: Contains color codes for app.

### Scalable
- We can add n number of keys in KeysToComponentMap as it renders UI dynamically.
- We can write service layer to handle api calls.
- We can use state management libraries like Redux or context API.
- We can create Reusable component like a TextView to keep the same font for entire app.
- Testing frameworks like jest can be used.
- We can use memoization,pagination or infinte scroll and lazy loading for performance.

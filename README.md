# How to run this app

In the project root directory (client), run the following commands:

    //Install the dependencies
    npm i

    //Run the app in the broswer
    npm start

## Running the records and settings script 

If you want to create this index in your own Algolia application, you need to do the following:

1. Create a .env file in the project root directory. 
2. Add the following with details of your Algolia application ID and Admin API Key

```
    REACT_APP_APPLICATION_ID=
    REACT_APP_ALGOLIA_ADMIN_API_KEY= 
```

3. In the terminal run the following command:

    ```node src/recordsAndSettings.cjs```




# Testing E2E with cypress

In this lesson we have learned how to use cypress to test our application. We have learned how to install cypress, how to write tests, how to run tests and how to run them.

## Forking and cloning the repository
In case you want to fork the repository, you can do it by clicking on the fork button on the top right corner of the repository.

Then you can clone the repository to your local machine by running the following command:

```bash
git clone the-url-of-the-repository
```

## Installing 
To install all the dependencies you can run the following command:

```bash
npm install
```

## Running the tests
To run the tests you can run the following command:

```bash
npm run test
```

You can check this script in the package.json file.

```json	
"scripts": {
    "test": "cypress open"
  },
```

This command is going to open a new window with the cypress interface. You can click on the test you want to run and it will open a new window with the browser running the test.
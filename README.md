# Bug proof: NextJS Custom Server - broken rewrites in production mode

## In development mode
1. First run the app in development mode using `yarn dev`
2. Open the app in a browser
3. Click the link with label "c"
4. See that it works as expected and you see the page with "a"

## In production mode
1. Build the app using `yarn build`
2. Run the app using `yarn start`
3. Open the app in a browser
4. Click the link with label "c"
5. 404 error appears

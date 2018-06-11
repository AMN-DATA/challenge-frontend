# Caya Frontend Challenge

Implement a **multi step wizard** to allow the user to create an account with Caya.

The User information that we need to collect is described in the User type:
```
interface Address {
  line1: string
  city: string
  zip: number
}
interface User {
  name: string
  age: number
  email: string
  newsletter: 'daily' | 'weekly' | 'monthly'
  address: Address
}
```
The number of steps in the wizard is not important as long as there is two or more steps. 
You can choose the order in which you collect all the required information. Example, you can collect the name and age in the first step and then email and newsletter preference in the second step, leaving the Address as the last step in the signup process.

Please use the exported `createUser` function from the `sdk` package(implemented in the /sdk folder) to simulate a request that creates a user account.

Ex:
```
import { createUser } from 'sdk'

createUser({ ... }).then( ... )
```

### Implementation requirements
- Use Typescript
- Use any framework like React.js(already pre-installed) or vanilla DOM APIs
- Use plain CSS or any CSS pre-processor/framework for the styling
- Persist the state so that data is stored in case of a page reload

Optional:
- write a few tests(unit or functional) for the implementation (ex. using [Enzyme](https://github.com/airbnb/enzyme) if you end up using React.js)
- add some animations (custom implementation using CSS or by adding an animations library)
- if CSS is not your strongest skill, feel free to use a UI library like [Material UI](https://material-ui.com/)
- add an SDK like google maps to provide a better UX with address autocompletion for the step to collect the users address

### Judging/evaluation notes
We will be looking at the following when evaluating your submission:
- Code style
- Familiarity with the frameworks/libraries/language of your choice
- Implementation architecture

Feel free to use *any* other library/framework/tool that you find to be useful. Though, the more code you write yourself the better.

### Submission
- Clone the repo
- Implement your solution
- Share your code as a Github/Gitlab/etc repository or a ZIP file
- (optional) Build the project and deploy it (ie make it available publicly)
- (optional) Provide detailed instructions on how to start the project locally(if different than existing `npm start` script)

### Questions?
Feel free to reach out to one of us, we are more than happy to assist you with your submission and clarifying any questions you might have related to the task.
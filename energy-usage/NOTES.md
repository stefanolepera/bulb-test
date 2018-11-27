Candidate Name: Stefano Le Pera

Tasks: 1 and 3

Time: 2h for the first task, 1:30h for the third, then spent an additional hour or so polishing / refactoring / adding more tests for the utility classes

Notes:
My approach was at first investigating about how to divide the application (I ended up having a single main container <AppContainer/> as a stateful component and two stateless components <Chart/> and <Table/>).
I thought about dividing even more (ie having a <Title> component for the <h2/> title for both the stateless components) but it was a bit of an overkill given the task.
On a much more complex application I think is useful to procede with an atomic design having small and reusable presentational components.
I've then added the Axios library for the API call (which I like way more than fetch) and put that on the componentDidMount of the <AppContainer/> to set the state of the application.
In a real world example that uses Redux, that should live in a Thunk or another MiddleWare (redux-saga, redux-observable, etc).
When everything was working I added some basic tests for the views with Enzyme.
I've added some simple styling to make the table look a bit better (never used styled components before unfortunately, eager to explore them as soon as possible).
I've then worked on the energy usage estimation and created the two utility classes (that is when I added moment as a dependancy). I've never worked on estimations before so I hope my approach was correct.
I've then started to add some tests for those classes and did some refactor / small improvements like adding a basic error handling for the data fetch (and rendering a loading / error in the <AppContainer/>) or formatting the dates in a more readable way for both <Chart/> and <Table/>

# Node_TeamInfo

The challenge was to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. 

[Video Link](https://drive.google.com/file/d/1Xr1u1iJHVfnyN2Jb3fsd9JtciKGrFPTr/view)


The application have these classes: `Employee`, `Manager`, `Engineer`, and `Intern`. The tests for these classes (in the `tests` directory) **are all passed**.

The first class is an Employee parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`   // Returns 'Employee'

The other three classes extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` also have the following:

* `officeNumber`

* `getRole()`   // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` also have the following:

* `github`  // GitHub username

* `getGithub()`

* `getRole()`   // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` also have the following:

* `school`

* `getSchool()`

* `getRole()`   // Overridden to return 'Intern'




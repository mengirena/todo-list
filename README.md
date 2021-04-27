# Todo List Project
This is a todo list. A user can add new tasks, delete tasks, and mark/unmark tasks as complete. The latest task will be added to the top of the list. As long as the task are marked completed, it will be moved below tasks that are not completed. 

**Link to project:** https://irenas-todo-list.herokuapp.com
<img width="698" alt="Screen Shot 2021-04-26 at 5 06 55 PM" src="https://user-images.githubusercontent.com/51871665/116189518-ea128e80-a6dd-11eb-859b-cf2315f6c428.png">

## How It's Made:

**Tech used:** CSS, EJS, JavaScript, Express, MongoDB, Heroku 
![APIs](https://user-images.githubusercontent.com/51871665/116189542-f4348d00-a6dd-11eb-9b51-bfe83e236d3d.jpeg)


## Lessons Learned:

### Big picture

To build an app like this todo list, to break down how the client side talks to the server and get the response back as shown in the above figure is necessary. For example, the response of the delete and the put method in this case are not followed by a `.redirect('\')` method as the response of the get method does because the request was sent by an event listener in the client side `.js` file. 

### Tips to make it better

* Before deploying to Heroku, 
    * make sure that the promise used in each route has implemented error handling
    * need to set the var config for Heroku (use double quote for the input at the right side of the equal sign)

* In the client side `main.js` code,
    * `fetch()` takes in one required argument indicating which resource to fetch and optional customed settings including method, headers, body...etc. The body content type should be aligned as indicated in the headers.
    * `this` is different from `event` in the eventlistener. `this` refers to the bound eleemnt. 
    * We use `.id` to get the id from an element but we use `.className` to get class names.

* In `.ejs`, we can assign conditional class names to an element. The double quotes should wrap the `<%= value %>`.

* `db.collection.find()`  doesn't return an object instead it returns a cursor to the selected document.

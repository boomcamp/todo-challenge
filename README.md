# Project Summary

This project is designed to be a test of all the skills you've learned up to this point. There will
only be a list of requirements and no other instructions for this project. Your job will be to create
an application that fulfills the requirements and specifications.

## Project Setup

1. Fork and clone this repository.
2. Create a git branch named `submission`.
3. Start coding.

## Requirements

You'll be building a TODO list application for tracking a list of tasks that need to be accomplished.

You can style the application in anyway that you see fit as long as it functions as specified. Make it
look good, and usable.

Organize your code well, and use best practices.

There will be three states that a TODO task can be in **Todo**, **In Progress**, **Done**. A user should
be able to see all three task groups at the same time.

### Features:

1. Add a new task:
    * There should be some way for users to add tasks to the **Todo** task list.
2. Todo Tasks:
    * Users should be able to delete tasks in the todo list in the case that the task is no longer required.
    * Users should be able to move tasks from the **Todo** status to the **In Progress** status.
3. In Progress Tasks:
    * Users should be able to move **In Progress** tasks back to **Todo** status.
    * Users should be able to move **In Progress** tasks to **Done** status.
4. Done Tasks:
    * Users should be able to move **Done** tasks back to **In Progress**.
    * Users should be able to delete **Done** tasks.
5. All Tasks:
    * Users should be able to edit a task at any time. This will allow them to correct typos, or
      add more detail without creating a new tasks and having to move it through statuses.

### Challenge Features

attempt these only after the required features have been finished

1. Create a way to group sub-tasks under one parent task. When all of the sub-tasks are completed
   the user should then be able to mark the top-level (parent) task as complete.
2. Figure out how to store your TODO list application state using the browser's Local Storage API. Now see
   if you can persist the state of the todo app between refreshes of the page.

   > Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

## Finished

Create a pull request from your `submission` branch back to this repository.


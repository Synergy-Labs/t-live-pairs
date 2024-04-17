# Coding Take-Home Task: Live Pairs

## Introduction

This is a very simplified version of a piece of our front-end app.
It fetches the most recently added pairs on Uniswap and displays them in a table.

The data fetching is done using a [Supabase client](https://supabase.com/docs). Treat the Supabase keys as public - they can be used on the client side.

## Your instructions

This task consists of a series of sub-tasks exploring different ways to expand the code.

You should try to do the sub-tasks in the same order in which they are listed, but feel free to jump around if you feel stuck on any particular one.

The entire task should not take you more than 2.5 hours. **It will not be counted against you if you don't complete everything.** We care more about your thought process and problem-solving than getting the perfect code and completing everything.

1. **Prepare your environment.**
   1. [ ] Create your own PRIVATE repository based on this template.
   2. [ ] Allow @akiszka to access your repository.
   3. [ ] Paste the environment variables received in the email into a `.env` file in the root of the repository.
2. **Fix the "Listed Since" column.**
   1. [ ] Whenever the page is refreshed, it shifts slightly as times in the "Listed Since" column are shown. Fix this so that the table doesn't shift.
   2. [ ] The "Listed Since" column only shows up after one second. Make it show up immediately.
3. **Add infinite scrolling.**
   1. [ ] Right now, the table only shows the first 10 pairs. Add infinite scrolling so that more pairs are loaded as the user scrolls down. (Remember to set a limit on how many pairs are fetched at once.)
   2. [ ] Add a loading spinner at the bottom of the table while more pairs are being fetched.
   3. [ ] Think about the "Listed Since" column. At what point will the time updates affect performance? How can you mitigate this? - If you think this can affect performance, implement a better solution.
4. **Consider real-time updates.**
   1. [ ] Think about how you could implement real-time updates for this table. That is, whenever a new pair is added to the database, it should automatically show up in the table. What would you need to do to implement this? - You don't need to implement this, just think about it and share your thoughts.

Once you are done with the task, please send us an email with a link to your repository. If you have any additional thoughts, include them in the email.

## Running the code

You will need to have Node.js and Yarn installed on your machine.

To install the dependencies, run:

```bash
yarn
```

To start the application, run:

```bash
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).
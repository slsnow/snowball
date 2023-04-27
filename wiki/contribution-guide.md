# Dev Guide

- Verify that git, node, and yarn are installed in your environment.
    - Optionally GitBash, GitHub Desktop, or VSCode if you like.
- Clone the github repo
    - Clone using a new branch, and forked repo ideally as well.
- From the cloned project directory, run `yarn install`
- Run `yarn run start` to build locally in development mode.
    - In development mode, you can make and see live edits. 
    - Note: Site Search doesn't work in development mode. It only works during a full build.
- Create a PR
    - When/if it's merged to main, GitHub actions will auto deploy, test, and build to the pages site.
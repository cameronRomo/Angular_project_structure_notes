#### Launch app to server

- `ng serve`

#### Folders

- e2e

  - end to end
  - testing

- node_modules

  - Used for development

- src

  - source code of app

- assets

  - static assets for application

- environments

  - Config settings for different environments

- main.ts

  - starting point of application
  - bootstrapps the main module of application (`Appmodule`)

- Polyfills.ts

  - fills the gap of JS and current browsers

- Styles.css

  - global styles

- test.ts

  - global tests for application

- editorconfig

  - used to maintain standard editor settings for team

- karma.config.js

  - test runner for js code

- tsconfig
  - settings for TS compiler
  - changes TS to JS for browsers

### Webpack

- Build automation tool
- Gets all scripts and styles compiles into a bundle and then minifies
- Webpack automatically re-compiles app with each new piece of code

### Components

1. Create a component

- `<component name>.component.ts`

  ```TypeScript
    import { Component } from '@angular/core';

    @Component({
      selector: '',
      template: '<h2>Courses</h2>
    })
    export class <ComponentName>
  ```

2. Register it in a module

- Converts a TS class into a module from Anugular's view
  `@NgModule`: contains all the components that are part of the module
  - New component goes into the declarations property

3. Add an element in an HTML markup

- In `app.component.html` add custom component (app-root inside index.html)

\*\* Can use Angular CLI to create a component too: `ng g c <componentName>`
1^2^

- 1 = generate & 2 = component
  - Angular will create .css, .html, .spec.ts, and .ts files
    - Also updates app.module.ts in `@NgModule`

### Templates

- Allows you to dynamically bind data

### Directives

- Manipulates the DOM
- `*ngFor` astrix decoration for directives that manipulates the DOM
  - this directive runs like a for of i.e. `<ul><li *ngFor="let course of courses">{{ course }}</li></ul>`

### Services

- Make a services class
  - `courses.service.ts`
  ```TypeScript
  export class CoursesService {
    getCourses() {
      // Logic for consuming http services
    }
  }
  ```
- Back in component that needs to call service 
  - import service class
  - Call constructor in the component
    - add parameter `constructor(service: CoursesService)` service is a dependency
      - this prevents coupling a service to a component (new operator to instantiate will tightly couple to the component)
      - need to inject the dependency
        - register the dependency in the module in the providers property

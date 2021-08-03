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

### Make a service in Angular

- In terminal: `ng g s <serviceName>`
  - creates the service file and a spec file with boilerplate for unit tests

### Attribute binding

- Difference between HTML and DOM
  - HTML is a mark up language representing the structure of a page
  - The DOM is a model of objects that represent the structure of a document in memory
- Most HTML attributes have a 1:1 mapping to DOM properties, however there are some exceptions
- ex:

  ```TypeScript
  // Does not work because there is not a DOM property called callspan
  ` <table>
      <tr>
        <td [callspan]="2"></td>
      </tr>
    </table>`

  // Does work because `attr.callspan` is telling Angular to target the callspan attribute of an HTML element
    ` <table>
      <tr>
        <td [attr.callspan]="2"></td>
      </tr>
    </table>`
  ```

### Adding Bootstrap to Angular

- `npm i bootstrap --save` (--save adds to the package.json)

  - Helps to enable other developers to quickly install the dependencies instead of looking through the `node_modules` folder

- Go to `styles.css`
  - `@import "~bootstrap/dist/css/bootstrap.css"` (Path found in node_modules under bootstrap)
  - In the demonstration the button from bootstrap was cut in half from the side of the screen
  - To fix this, in the `styles.css` folder add styles pertaining to the box model:
    - i.e `body { padding: 20px; }`

### Class Binding

- When you want to add multiple classes to an element
  - i.e.
    ```TypeScript
      <button class="btn btn-primary" [class.active]="false">Save</button>
    ```
    - The first two classes will always be constant, but the second class will change based on some condition.

### Style Binding

- Similar to class binding, here you access the dom styles object to add styling
  - i.e.
  ```TypeScript
      <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button> // make sure properties are in single quotes.
  ```

### Event Binding

- Use to handle events raised from the DOM
- `$event` is recognized by angular to access the event

  - i.e.

  ```TypeScript
      <div (click)="onDivClicked()">
        <button (click)="onSave($event)">Save</button>
      </div>

    export class CoursesComponent {
      onDivClicked() {
        console.log('Div was clicked')
      }

      onSave($event) {
        $event.stopPropagation(); // If you do not want your event to propagate
        console.log("Button clicked", $event);
      }
    }
  ```

### Event Filtering

- i.e.

```TypeScript
  <input (keyup)="onKeyUp($event)"/>

export class CoursesComponent {
  onKeyUp($event) {
    if ($event.keyCode === 13) console.log("ENTER was pressed")
  }
//or cleaner way with filtering

  <input (keyup.enter)="onKeyUp()"/>

export class CoursesComponent {
  onKeyUp() {
    console.log("ENTER was pressed")
  }
```

### Template Variables

- Angular provides a way to target the value of an input using template variables
  - Helps to simplify code
  - i.e.

```TypeScript
  <input #email (keyup.enter)="onKeyUp(email.value)"/>

export class CoursesComponent {
  onKeyUp(email) { // bad practice passing email parameter around (procedural programming = outdated)
    console.log(email)
  }
```

#### or Two-way Binding - much better!

```TypeScript
  <input [value]="email" (keyup.enter)=" email = $event.target.value onKeyUp()"/> // better
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/> // best! Uses ngModel directive from Angular. Needs to have its module imported in the app.modules folder -> see below!

export class CoursesComponent {
  email;

  onKeyUp() {
    console.log(this.email)
  }

// in app.modules.ts
import { FormsModule } from '@angular/forms'

// in the imports property (array) add `FormsModule`
imports: [
  FormsModule
],
```

### Pipes

- Helps to format data on the screen to help readability/familiarity for users
  - Found in the `@angular/common` module

### Custom Pipes

- To make:

  - `./app`
  - `<pipeName>.pipe.ts`
  - `import { pipe, pipeTransform } from '@angular/core'`

    ````TypeScript
    @Pipe({
      name: 'summary'
    })
    export class SumaryPipe implements PipeTransform {
      transform(value: any, args?: any){
        if (!value)
          return null;

        let actualLimit = (limit) ? limit: 50;
        return value.substr(0, 50) + '...';
      }
    }
    ```
    ````

  - must register in `app.module`
    - In declaration property add: `SummaryPipe (<pipeName>)` and import

### Directives

###### ngIf

- Similar to conditional render in React
  - If the value evaluates to truthy than it will be added to the DOM
- Directive is called using `*ngIf` and assigning it to a condition. depending on the return value one `<ng-template>` will render
  - Identify the `<ng-template>` using a hashtag
- Or the hidden attribute can be used as well.
  - `ngIf` is preferred especially with a large tree application

###### ngSwitchCase

- In `component.html` bind `ngSwitch` to the related property of the component i.e: `[ngSwitch]="<propertyToBindTo>"`
  - As children to the above element, add the `*ngSwitchCase` directive and assign it to a specific value i.e: `*ngSwitchCase="'map'"`
- Link to some interactive elements and use class binding to help highlight the related tab/button then, in it's anchor call a function/method to toggle the values i.e: `<li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'"></a></li>`

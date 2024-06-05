# Lol Guide

## About the project
>The application is an interactive platform based on the game League of Legends, designed to provide a rich and detailed experience for fans of the game. Users can create accounts and log in to access an extensive list of champions. Upon selecting a champion, detailed information is presented, including the lane where the champion plays, their abilities with illustrative videos, the character's lore, and available skins. This functionality allows players to deepen their knowledge of their favorite champions and explore new characters in an engaging and informative way.

Additionally, the application features a dedicated page for the game's runes. In this section, users can explore a comprehensive list of runes, and by clicking on one, they can access explanatory videos, information about associated minor runes, and detailed descriptions of each. For administrators, the system offers advanced features such as creating and editing champions, managing runes, and assigning specific runes to champions. These administrative tools ensure that the app's content is always up-to-date and aligned with the latest changes in the game, providing a consistently relevant experience for users.

## Project Url:
[Lol Guide](https://lol-guide-web.web.app)

## Main technologies used in the project
>* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.
>* This project has implemented [Bootstrap](https://getbootstrap.com) version 5.3.0
>* This project has implemented [ng-bootstrap](https://ng-bootstrap.github.io/) version 15.1.0
>* >* This project has implemented [bootstrap icons](https://icons.getbootstrap.com/) version 1.10.5

## About bootstrap
>For standardization, best practices and responsiveness, when developing new pages, think about the structure of rows and columns following the grid pattern.

**Example:**

| Grid pattern class | Description                                                                    |
|:-------------------|:-------------------------------------------------------------------------------|
| `.container`       | Container with spacing on the sides (width: 1200px).                           |
| `.container-fluid` | Container without spacing on the sides(width: 100%).                           |
| `.row`             | Single div, must be used as a parent div that will have 1 to 12 col child divs |
| `.col`             | Single div, must be used as a parent div that will have 1 to 12 child divs     | 

>***The pattern shown above in the table shows the structure of the project's html pages, new pages must follow the pattern.***

**Page grid example**

~~~html
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>Page title</h1>
    </div>
  </div>
  
  <div class="row">
    <div class="col">
      <p>First container</p>
    </div>
    <div class="col">
      <p>Second container</p>
    </div>
  </div>
</div>
~~~

## Bootstrap componentes
>You can view the available components for using bootstrap and ng-bootstrap by clicking on the links below:
>* [bootstrap components](https://getbootstrap.com/docs/5.3/components)
>* [ng-bootstrap components](https://ng-bootstrap.github.io/#/components)

## Modularization
>The whole project is modularized, each component has its own module, in the `app.module.ts`
> file only the main modules are imported. Shared modules are created in the `Shared`
> folder and only called when needed, this avoids extra initial loading and endless module imports in the main system file.

## File name pattern
| Name rule      | Name pattern                                                    |
|:---------------|:----------------------------------------------------------------|
| Simple name    | `name.ts` / `name.html` / `name.css`                            |
| Compound name  | `compound-name.ts` / `compound-name.html` / `compound-name.css` |
| Directive name | `name.directive.ts` / `compound-name.directive.ts`              |
| Service name   | `name.service.ts` / `compound-name.service.ts`                  | 
| Model name     | `name.model.ts` / `compound-name.model.ts`                      | 
| Guard name     | `name.guard.ts` / `compound-name.guard.ts`                      | 

## How to clone and setup up the project
> - [x] Clone the project, use de code: `git clone <project-url>` to clone the project.
> - [x] Install npm packages, use de code: `npm i` to install the packages.
> - [x] Run the project, use de code: `npm start` to run the project.

## Development server
> Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Preview app
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-one.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-two.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-three.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-four.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-five.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-six.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-seven.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-eight.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-nine.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-ten.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-twelve.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-13.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-admin-1.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-admin-2.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-admin-3.png)
![image](https://github.com/Jhoncosta08/lol-guide/blob/master/src/assets/preview-admin-4.png)

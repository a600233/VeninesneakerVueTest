# Assignment 2 - Vue app - Automated development process.

## Name: Wujiuge Yin  ##
## Student No.: 2008225 ##
<br>

## Overview.
### This app can realize login with Facebook, Google and Email with Firebase. Then users can get all sneakers selling information on the selling list. They can increase the amount of sneakers, edit the detailed information of sneakers and delete records of sneakers. Meanwhile, they also can check the address of sneakers retails and mark the places.

## E2E Testing.
```
     $ npx cypress run --spec cypress/integration/selling.spec.js

           Spec                                                Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √ selling.spec.js                           00:35        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                           00:35        3        3        -        -        -

```

## Continuous Integration.
### [Travis Build Page For The My Vue App](https://travis-ci.org/a600233/VeninesneakerVueTest)
<br>

## Automated Deployment.
### [Auto-deployed of My Vue app](http://venine.surge.sh/)
<br>

## Github

### [My Github Link for Vue Client](https://github.com/a600233/VeninesneakerVueTest)
<br>

## Extra features.
I use Cypress for e2etest, Webpack to bundle, webpack custom build and eslint for checking the codes. My app was deployed to surge, firebase and Travis CI.

## Appendix.
```
    $ npx cypress run


      Spec                                                Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √ home-page.spec.js                         00:03        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √ login.spec.js                             00:02        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √ sell.spec.js                              00:10        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √ selling.spec.js                           00:29        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                           00:45       10       10        -        -        -
```

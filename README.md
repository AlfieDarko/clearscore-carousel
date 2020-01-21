# clearscore-carousel

Clearscore Carousel Tech Test

## Introduction

I was tasked too recreate the ClearScore Credit Score Indicator.

## Prerequisites

- Node version >= 10.13.0
- Yarn is used as the package manager

## Getting Started

- Run: `yarn start:webpack`
- Run: `yarn start:dev` _(in a new terminal)_
- Goto: `http://localhost:3000/`

## Plan

I opted to use hooks instead of class components.
Was playing around with the idea of using useReducer and context for any state handling (& as a chance to play around with it) but opted against it as I thought it may have been overkill. This may have been a mistake 😅.

I planned to have a a carousel component that had different slides as children.

I planned to look at differernt carousels on the web for inspiration to see how they had approached this.

Leave styling and animation until last.

I felt I should start with making a simple view of the first slide. Then work out how to have an outer compononet (The Carousel) hold the logic that switches between the two. Then think about the indicator afterwards. I wanted to hold most of the logic in the carousel and just pass down what as needed.

## Challenges

- One challenge was thinking about how I would handle the slides in the carousel. I thought I had a good idea of how I would put it together, but as it went on, I realised things that I had not considered such as some parts of the data flow.
  <br>

- I think if I could do this again, I would have started with the use of hooks ie useReducer and Context etc. for component state management. I think this would have made the code a bit simpler and easy to follow the flow of data for other developers to pick up and continue

## TODO's

I ran out of time as I had to balance out doing 2 tech tests in a week but I made a list of things that I would have went on to do if I could.

- Score Arc (With Animations...)
- Swipeable Carousel w/ react /swipable for mobile users.
- Use CSSTransitions plugin for CSS animations of indicators and swipes

- Cleaner Code ( Use useReducer and Context for state management)
  I would have been able to decouple the indicator more than I have. I probably should have foresaw this with more planning but time was against me.

- The indicators would have been buttons for semantic and accessibility reasons. Perhaps add an option to pass aria labels into it so people using screen-readers can know what slide they are tabbing into. A11y should have been a top priority

- I also would have attempted to do the blurred background with the carousel slides to mimic the ClearScore site. I looked into it but many of the examples were not compatible with ie11 (I assumed this was to be supported from the tech-test readme.)
  I perhaps should have got a virtual image with ie11 from Microsoft, to check and inspect how this view is handled there, if it is at all. I decided in the end not to waste too much time with this as it was limited already.

- Perhaps serve text from a config / locales file - probably overkill for a tech test

- Data Fetching. I was thinking where would I have fetched the data from the API. I would have made the calls from the dashboard as it is central and can pass down any needed data to the component it holds. Better and morre performant than having the individual slides and components make multiple http requests to the same endpoint.

- Extensive testing. Definitely aware that there is some untested logic. if I had more time I would have gone back to it.

- Accessibility! Added aria labels to the indicators, but I should have thought more about using the current index so I could add aria labels to the slides as props, indicating what number slide the user was on out of the maximum number of slides. Giving visually impaired users a better experience.

# Thoughts.

This was a good tech test, with plenty to think about and multiple ways of implementing things.
What I take away from this excercise is that I should have thought about the data flow abit more, perhaps I would have come to another conclusion in regards to state management.

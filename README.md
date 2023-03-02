# CSS Challenge Task

You are going to try to solve as much tasks as possible.
Its a **Styling Marathon**

## Instructions

1. Fork and clone this [repo](https://github.com/JoinCODED/TASK-css-challenge)
2. You will find a folder for each challenge
3. The `index.html` for each challenge is already there, you do not need to create it.
4. Import your `CSS` only using a `style` sheet for each folder separately
5. **Use live server to run the server**, otherwise, some pages will break!
6. Remember that here we are using w3css, [here in the code](https://github.com/JoinCODED/TASK-css-challenge/blob/f7994331302af72b713ccb1da57532e0ba740679/index.html#L8), and it has some ready classes. if your style 
   doesn’t apply to the html just make sure yours is overriding the w3css.

## Challenge 1

1. You will be adding your code in the `index.html` that is inside folder 1
2. Create style.css file and link it to your html file
3. Try to create this layout:

   ![sample-ch-1](https://i.ibb.co/mFtrkdS/sample-ch-1.png)

### Hints and Tools:

- Harry Potter cover image can be found in the `assets` folder
- To center text you can use `text-align`
- You can get fonts from [Google Fonts](https://fonts.google.com/). You can use any fonts you like for the title.
- Research how you can use google fonts in your HTML website!

## Challenge 2

1. You will be adding your code in the `index.html` that is inside folder 2
2. Create style.css file and link it to your html file
3. Try to create this layout:

![sample-ch-2](https://i.ibb.co/vvHN8xG/chrome-JCom-T2-Xd-FW.png)

4. Use `flexbox`

### Hints and Tools:

- Image is in the `assets` folder, use `background-image`
- Learn how you **center** elements in css [here](https://www.better.dev/centering-things-with-css-flexbox)
  - To read more about `flexBox`, check [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- To add shadow easily, use [this website](https://html-css-js.com/css/generator/box-shadow/) that provides you with the shadow css code.

## Challenge 3

1. You don't need to touch `index.html` this time, just take a look of the classes that are assigned to each html element.
2. Your `style.css` has all classes that you need this time, you only need to fill the classes with your stylings.
3. Your page should look like this ![sample-ch-3](https://s9.gifyu.com/images/challenge3.gif)

#### **The class `container`**

1. Container has to have a height of 300px and width 400px
2. The container should clip the list inside it so the list doesn't overflow. With that, you will have to scroll to see all items

#### **The class `head`**

1. Have a nicer font for both the title and list
2. Give the `head` class a `background-color` and a `color`
3. The head has to be [sticky](https://www.w3schools.com/howto/howto_css_sticky_element.asp), which means if you scroll down, the head doesn't disappear.

#### **The class `row`**

1. Give the list a `background-color` and a `color`
2. Make your list scroll using `overflow`
3. You will find the `row` class in the `index.js`, `ìndex.js` is rendering a list from `people.js` ( you do not need to touch is, it's only so you know what is the `row` class controlling)

### Hints and Tools:

- An example of a scrollable menu is the _History_ from the `calculator.js`
- `style.css` is ready with the classes
- Check out [Overflow attribute](https://www.w3schools.com/css/css_overflow.asp)
- You can use this [coolors](https://coolors.co/) to find colors that you like

## Challenge 4

1. You don't need to touch `index.html` this time, just take a look of the classes that are assigned to each html element.
2. Your `style.css` has all classes that you need this time, you only need to fill the classes with your stylings.
3. Reuse the image from challenge 1, to create the layout provided

   ![sample-ch-4](https://i.ibb.co/K9VsTf6/chrome-TVyyg-D7-KSt.png)

4. Use `flexbox` for centering your card
5. You will be using `position` in couple of things

### Hints and Tools:

- For the image shaping you can check the following resources:
  1. [object-fit](https://www.w3schools.com/css/css3_object-fit.asp)
  2. [object-position](https://www.w3schools.com/css/css3_object-position.asp)
- If you need to read more about [position](https://www.w3schools.com/css/css_positioning.asp)
- `z-index` would help you [here](https://www.w3schools.com/cssref/pr_pos_z-index.asp)

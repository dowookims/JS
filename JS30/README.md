# JS30

Build 30 things with vanila JS in 30 days with 30 tutorials.

### Day 1 DrumKit

* transform
* transition
* querySelector by selecting attribute 
* EventHandler : keydown
* Add or remove class by pressing keyboard => keydown event

### Day 2 JS_CLOCK

* box-shadow
* transform
* transition
* CSS handling by using JS

```js
const hoursHand = document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();
    const hours = now.getHours();
    const hoursDegrees  = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);
```



### Day 3 CSS variable with JS

* css variable

```css
:root {
    --base : ##ffc600;
    --spacing : 10px;
    --blur : 10px;
}

img {
    padding : var(--spacing);
    background : var(--base);
    filter : blue(var(--blur));
}
```

* set CSS properties by JS : document.getElement.style.setProperty
* forEach : Using method with Arrow function

```js
inputs.forEach(input => input.addEventListener('change', handleUpdate))
```

* EventHandler : change, mousemove
* html data-attribute : put data-${Var} on html tag and that use data attributes on JS

```js
this.dataset.Var
```

* HTML input types : range, color
* CSS  filter attribute
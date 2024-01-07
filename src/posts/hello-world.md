---
title: 'Hello world!'
description: 'A test post to make sure everything is working.'
date: '2024-01-06'
tags:
  - Markdown
  - Math
published: true
---

## Test

This is some test post to ensure that things are working as they _should_.

```rs title="greetings.rs"
fn getGreeting(name: &str) -> String {
    format!("Hello there, {}!", name);
}

fn main() {
    let name = "Josh";
    println!("{}", getGreeting(&name));
}
```

```ts
const greet = (name: string) => console.log(`Hello, ${name}!`);
```

## Another Test

This is a paragraph with some math in it: $x^2 + y^2 = z^2$.

And this is a block:

$$
f(x) = x^2
$$

And these are some basic Markdown elements:

- This is a list
- This element is **bold**
- This element is _italic_
- This element is `code`
- This element is ~~strikethrough~~
  - This element is randomly on another list level.
  - As is this one.
- This element is a [link](https://google.com)

And then here's some more text that should hopefully span several lines. This
will ensure that the styling still looks proper, even with text that spans
several lines being justified, which I am not entirely sure will fit the theme
that I have going with this blog site. On the bright side, doing this did allow
me to spot that I'd not formatted / styled the list yet.

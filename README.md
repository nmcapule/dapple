# Dapple

![preview](./docs/apple.png)

Quick attempt to render Bad Apple with filters.

I wanted to be able to read the pixels shown when a Youtube video is playing,
and render an ascii art of it in another element. I tried this with D3.js but
the closest thing I could do is using CSS3DRenderer, which can only apply
transforms to DOM elements.

Next up is to embed iframes in an SVG element and apply filters to it. It works,
but I can't do ascii :( The effect still looks good though. Time to learn more
SVG filtering skills.

## Usage

Just open in browser: https://nmcapule.github.io/dapple/

Play any video you like using query params: `id=<video-id>`. For example:

- https://nmcapule.github.io/dapple/?id=yi-KQ3CKOQU

Enable autoplay with: `autoplay=1`. For example:

- https://nmcapule.github.io/dapple/?id=yi-KQ3CKOQU&autoplay=1

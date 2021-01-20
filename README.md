# Tailwind CSS Nutella

This [Tailwind CSS](https://tailwindcss.com/) plugin is inspired by this [tweet by @simonswiss](https://twitter.com/simonswiss/status/1351726958208450560).

It adds the [Nutella]() brand colors and a matching brown to the color palette.

## Installation

```bash
yarn add Astrotomic/tailwindcss-nutella#main
```

**tailwind.config.js**
```javascript
module.exports = {
  plugins: [
      require('tailwindcss-nutella'),
  ],
};
```

## Usage

```html
<div class="bg-nutella-brown p-8 text-2xl">
    <h1 class="text-shadow-nutella-white">
        <span class="text-nutella-black">n</span><span class="text-nutella-red">utella</span>
    </h1>
</div>
```

Will result in something similar to this.

![Nutella](nutella.png)
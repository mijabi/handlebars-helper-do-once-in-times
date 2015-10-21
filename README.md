# handlebars-helper-do-once-in-times

This helper allows you to do something only once every x times during {{# each}}.


## Install

```zsh
% npm install --save-dev handlebars-helper-do-once-in-times
```


## Usage

```javascript
:Gruntfile.js

module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      site: {
        options: {
          layoutdir: 'dev/assemble-layouts',
          data: ['dev/assemble-datas/**/*.{json,yml}'],
          flatten: false,
          helpers: ['handlebars-helper-do-once-in-times']
        },
        dest: './',
        src: ['dev/*.hbs']
      }
    },

    watch: {
      assemble: {
        files: ['dev/**/*.hbs'],
        tasks: ['assemble']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-assemble');

  grunt.registerTask('default', ['watch']);

};
```

```json
:assemble-datas/list.json

[
  {
    "href": "http://google.com",
    "description": ["google is here."]
  },
  {
    "href": "http://yahoo.com",
    "description": ["yahoo is here."]
  },
  {
    "href": "http://flickr.com",
    "description": ["flickr is here."]
  },
  {
    "href": "http://indiegogo.com",
    "description": ["indiegogo is here."]
  },
  {
    "href": "http://kickstarter.com",
    "description": ["kickstarter is here."]
  },
  {
    "href": "http://etsy.com",
    "description": ["etsy is here."]
  },
  {
    "href": "http://ebay.com",
    "description": ["ebay is here."]
  }
]
```

```json
:assemble-layouts/default.hbs

<!DOCTYPE HTML>
<html lang="ja" dir="ltr">
<head>
  <meta charset="utf-8" />
  <title>title</title>
  <meta name="description" content="desk" />
  <meta name="keywords" content="key,wor,ds" />
</head>
<body>

{{> body }}

</body>
</html>
```

```html
:index.hbs

---
layout: default.hbs
---

<div>

  <ul class="triplet first">
    {{# each list }}
  {{#assemble-repeat-xtimes @index 3}}
  </ul>
  <ul class="triplet">
  {{/assemble-repeat-xtimes}}
    <li>
      {{# each description}}
      <p>{{{this}}}</p>
      {{/ each}}
      <a href="{{href}}">{{href}}</a>
    </li>
    {{/ each}}
  </ul>

</div>

<footer>
  Copyright&copy; mijabi.
</footer>

```

You can get below

```html
:index.html

<!DOCTYPE HTML>
<html lang="ja" dir="ltr">
<head>
  <meta charset="utf-8" />
  <title>title</title>
  <meta name="description" content="desk" />
  <meta name="keywords" content="key,wor,ds" />
</head>
<body>

<div>

  <ul class="triplet first">
    <li>
      <p>google is here.</p>
      <a href="http://google.com">http://google.com</a>
    </li>
    <li>
      <p>yahoo is here.</p>
      <a href="http://yahoo.com">http://yahoo.com</a>
    </li>
    <li>
      <p>flickr is here.</p>
      <a href="http://flickr.com">http://flickr.com</a>
    </li>
  </ul>
  <ul class="triplet">
    <li>
      <p>indiegogo is here.</p>
      <a href="http://indiegogo.com">http://indiegogo.com</a>
    </li>
    <li>
      <p>kickstarter is here.</p>
      <a href="http://kickstarter.com">http://kickstarter.com</a>
    </li>
    <li>
      <p>etsy is here.</p>
      <a href="http://etsy.com">http://etsy.com</a>
    </li>
  </ul>
  <ul class="triplet">
    <li>
      <p>ebay is here.</p>
      <a href="http://ebay.com">http://ebay.com</a>
    </li>
  </ul>

</div>

<footer>
  Copyright&copy; mijabi.
</footer>


</body>
</html>
```

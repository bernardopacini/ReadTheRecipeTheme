ReadTheRecipe Sphinx Theme
==========================

This repository holds the theme used for [ReadTheRecipe](https://github.com/bernardopacini/ReadTheRecipe) and is forked from the [Bernard Sphinx Theme repository](https://github.com/bernardphp/bernardphp-com) under a MIT License.

Installation
------------

To install this theme, clone or download the repository and install it using PIP by running the following command in the root directory of the repository:

```
pip3 install .
```

Usage
-----

To use the theme, import the package and set the following variables in your project's Sphinx `conf.py` file:

```
import sphinxReadTheRecipeTheme

html_theme = "sphinxReadtherecipeTheme"
html_theme_path = [sphinxReadtherecipeTheme.get_html_theme_path()]
```

License
-------

Copyright (c) ReadTheRecipe & Bernard - ReadTheRecipeTheme is licensed with a MIT license and is available as opensource. More information about the license is included within the LICENSE file.

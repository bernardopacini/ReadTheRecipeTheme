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

To use the theme, set the theme in your project's Sphinx `conf.py` file:

```
html_theme = "sphinxReadTheRecipeTheme"
```

The theme registers itself with Sphinx on install; `html_theme_path` is no longer needed.

Optional theme options (defaults shown):

```
html_theme_options = {
    "github_url": "https://github.com/bernardopacini/ReadTheRecipe",
    "logo_text": "ReadTheRecipe",
    "logo_url": "https://readtherecipe.readthedocs.io/en/latest/",
    "show_ribbon": True,
}
```

License
-------

Copyright (c) ReadTheRecipe & Bernard - ReadTheRecipeTheme is licensed with a MIT license and is available as opensource. More information about the license is included within the LICENSE file.

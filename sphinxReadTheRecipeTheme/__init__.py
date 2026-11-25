"""ReadTheRecipe Sphinx HTML theme."""

import os

__version__ = "0.1.0"

_THEME_DIR = os.path.abspath(os.path.dirname(__file__))


def get_html_theme_path():
    """Return the theme's parent directory.

    Deprecated: the theme is registered through the ``sphinx.html_themes``
    entry point, so ``html_theme_path`` is no longer needed. Kept for
    backwards compatibility.
    """
    return os.path.dirname(_THEME_DIR)


def setup(app):
    app.add_html_theme("sphinxReadTheRecipeTheme", _THEME_DIR)
    return {
        "version": __version__,
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }

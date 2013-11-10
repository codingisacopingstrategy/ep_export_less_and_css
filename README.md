Etherpad CSS and LESS export
============================

![Screenshot of Etherpad with the export functionality](http://i.liketightpants.net/and/assets/called/ep_export_less_and_css_screenshot_676x355.png)


How does it work
----------------

This plugin adds an option to export a pad’s content with a mimetype of `text/css`. This means one can link directly to the CSS in an HTML file and edit it collaboratively. Just add a link such as:

    <link rel="stylesheet" href="http://path.to.etherpad/p/pad-name/export/css" type="text/css" />

to you HTML file. Alternatively, pass the pad’s content through the LESS preprocessor,

    <link rel="stylesheet" href="http://path.to.etherpad/p/pad-name/export/less" type="text/css" />

which will clean up the CSS and process variables and calculations, taking an input such as:

    @grid-width: 45px;
    
    div.focus {
        width: 3 * @grid-width + 2 * 20px;
    }

and process it into:

    div.focus {
        width: 175px;
    }

Installation
------------

To install, visit your Etherpad’s plugin admin panel: `http://path.to.etherpad/admin/plugins` ( You need to have enabled admin login in your settings.json ).

Backstory
---------

This plugin arose as a response to a design session at the OSP Open Source Publishing where we had to collaboratively edit a CSS file. As first solution, we had one person in charge of a gong: when she rang, she copied the contents of the pad into the site’s CSS file, and uploaded it—after which the others refreshed their browser to see the updated styles. The plugin facilitates this process.

See [I like tight pants and 48 hours of writing stylesheets with etherpad and a gong](http://i.liketightpants.net/and/48-hours-of-writing-stylesheets-with-etherpad-and-a-gong)

Inspiration
-----------

I copied the approach of `ep_latexexport`, by Eduard Baun.

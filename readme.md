# CoderDojo Hugo Website
![github pages](https://github.com/Coderdojo-Schoeneweide/website-hugo/workflows/github%20pages/badge.svg)

This repository contains the source code of our website. It contains the content of the website as well as the Hugo theme used to generate the static site.

## Website: built code and source code
When pushing to this repository's master branch, GitHub Actions automatically builds the website and pushes the build to another repository: https://github.com/Coderdojo-Schoeneweide/coderdojo-schoeneweide.github.io. **Only ever edit the website-hugo repository, never the built code.**

## Folder Structure
There is separate logic for the general theme and specific website content.
  
### Content
The content of our website is split into multiple parts: Text-heavy content, structured data content and static content.

#### Text-heavy content
This includes stuff like the main text body of the website as well as the posts in the blog section of the website. The content is generated from the markdown files in the `content` directory.

#### Structured data content
This includes stuff like a list of team members and the contact information. Each data set is stored in a single YAML file in the `data` directory.

#### Static content
This includes stuff like images and the Teilnahmebedingungen PDF file, which should be served directly without being processed by Hugo. Static content is stored in the `static` directory.

### Theme
Everything concerning layout, styling, templates goes into the directory `themes/coderdojoschoeneweide`.

#### `archetypes`
The `archetypes` folder contains the template file for new subpages like blog-posts. You may generate new posts from this template by using the `hugo new blog/<page-title>` command from within the root directory of the project.

#### `assets/scss`
* SCSS stylesheets can be added here.
* Variables in SCSS
  * `$color-dark`: Primary dark color for the website, mainly used for foreground content like text
  * `$color-light`: Primary light color for the website, mainly used as background color
  * `$color-main`: Theme color/accent color for the website (currently orange)
* Classes in SCSS
  * `.wrapper`: Limits the maximum content width to a fixed value (currently 900px)

#### `layouts`
* Directly in the `layouts` folder you can find the [template](https://gohugo.io/templates/introduction/) `index.html` which is the template for the homepage of our website
* In the subfolder `_default` you can find templates used for various parts of the content:
  * `baseof.html` is used as a base for each page and contains the HTML head, the header and the footer of the website
  * `impressum.html` is used for the imprint page
  * `list.html` is used for the blog index page (and any other list index page which doesn't have a custom template)
  * `single.html` is used for the individual blog post pages (and any other page which doesn't have a custom template)
* The subfolder `partials` contains HTML-snippets which may be re-used by including them in multiple places
* The subfolder `workshops` contains the templates for the workshops overview page (`list.html`) and the single workshop pages (`single.html`)

#### `static`
* **images** contains images that are part of the theme, such as contact icons
* **js** contains Javascript files that are part of the theme, like obfuscate.js for deobfuscating the contact data in the imprint

# How to develop locally
Before developing for the first time you need to [install the extended version of the Hugo binary for your system](https://gohugo.io/getting-started/installing/) (hugo-extended: we need this because the regular version does not come with SCSS processing capabilities).

**Do not edit the built website in the `public` directory which gets created automatically by Hugo. Changes in this directory will get overwritten on the next rebuild and are ignored by git.**

* Clone this repository: `git clone https://github.com/Coderdojo-Schoeneweide/website-hugo.git`
* Create a new git branch for developing your feature: `git checkout -b <branch_name>` (exceptions only for hotfixes!)
* Run `hugo serve` from within the root directory to make Hugo build the website and run a local server serving the website. Hugo supports live-reloading, so you don't need to restart the server each time you change something.
* Implement and commit your changes: `git commit -a -m "<put commit message here>"`
* Push to the GitHub repository: `git push -u origin <branch_name>` (or simply `git push` if you've pushed to the branch before)
* Open a pull request for your changes to be merged into master and go live!

# Credits
* We used the [Hugo Quick Start guide](https://gohugo.io/getting-started/quick-start/) for the basic set up and the Hugo documentation for further work.
* Thanks to thomas-leister.de for the [introduction on how to make own themes](https://thomas-leister.de/einfuehrung-in-hugo-theme-erstellen/).

<h1 align="center">Personal Site of Joshua Sisley</h1>

Official website for Joshua Sisley.

All the contents to the website is in Markdown format, Please follow the below guidelines for any contributions.  
If you don't know how to write a markdown file, take quick look at [GitHub's markdown](https://guides.github.com/features/mastering-markdown/) guide.

## Creating a new Blog Post :memo:

To submit a new Blog post, create a new folder in the `src/contents/blogs` directory.  
Name the folder with date of posting and slug eg: `2018-08-02--First-blog-post`.  
Add the images you want to include in yor blog inside this directory and create a markdown file with the name `index.md`.
Add the following frontmatter details into the markdown file followed by your blog post in markdown format.
And finally submit a Pull Request.

PS:

- Slug is where your blog post will be available on the website and the prefix `/blog/` is required to identify it as a blog.
- Description should be written in a single line, with considerably almost 2-3 lines as viewable. Make it short and descriptive.
- Date should be in the format YYYY-mm-dd
- Your author name should be your github profile url.

```
---
slug: /blog/YOUR-BLOG-POST-URL (add your post title with hyphens instead of spaces, in Lowercase only)
date: 2018-08-02
author: joshsisley
name: Joshua Sisley
title: My first blog post
tags: blog post
cover: './cover.jpg'
description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'
---

# Your blog post in Markdown
```

## Creating a new Event :triangular_flag_on_post:

To submit a new event details, create a folder in the `src/contents/events/` directory with the name of the event.  
Create a new Markdown file with the name `index.md` and add any images if you want to refer in the same directory.  
Follow the below format with all the details inside the markdown file and submit a Pull Request to this repository.

PS:

- Slug is where your blog post will be available on the website and the prefix `/events/` is a must to identify it as an event.
- Date should be in the format YYYY-mm-dd

eg.

```
---
slug: /events/jsmeetup18
name: jsmeetup:19
date: 2018-12-02
location: A Building
cover: './cover.png'
link: REGISTRATION_LINK (leave empty if not needed)
feedback_link: LINK_TO_SUBMIT_THE_FEEDBACK (leave empty if not needed)
---

# Other event details
And descriptions in Markdown
```

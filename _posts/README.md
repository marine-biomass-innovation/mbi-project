# About this directory

This is where all blog posts will be created as Markdown documents (.md). 

# Contributing

To create a new blog post you can:
* First create it in the `_drafts` directory and then copy it to here (see the [README.md](https://github.com/marine-biomass-innovation/mbi-project/blob/main/_drafts/README.md) in `_drafts` for more detailed instructions); or
* Create a new file through a cloned GitHub repo (advanced, requires using the terminal); or
* Create a new file in this directory:
  * From the `_posts` directory, click `Add file > Create new file` in the top right corner
  * Name it using the format `YYYY-MM-DD-title.md`
  * Include the following at the top of the file:
      ```
      ---
      layout: post
      title: Title of your choice
      ---
      ```
  * Below these lines, write your blog post in Markdown formatting (see below). The layout must be set to post (not grid); it will still be displayed in the grid layout.
  * Use the Preview button at the top of the editing box to see what your text will look like when formatted in Markdown.
  
## Writing in Markdown

Markdown is a text-based formatting method recognised by GitHub, this website and other text editors. Instead of a point-and-click formatting experience that you get with Microsoft Word or Google Docs, Markdown uses symbols and characters written directly into the text as you write it. Here are some great resources for writing in Markdown:

* [Getting Started with Markdown](https://www.markdownguide.org/getting-started/)
* [Markdown Cheet Sheet](https://www.markdownguide.org/cheat-sheet/)

### Markdown: basic syntax:

Here are some basic examples, using the code blocks to show what you type and the writing below them to demonstrate how they appear when formatted correctly.

```
# Header
## Secondary Header
### Tertiary Header
#### And so on
```
# Header
## Secondary Header
### Tertiary Header
#### And so on

---

Feature | Formatted | Raw
--------- | --------- | --------
Hashtag | #hashtag | `#hashtag`
 Italics | *italics* |`*italics*`
Bold | **bold** | `**bold**`
Strikethrough | ~~strikethrough~~ | `~~strikethrough~~`
Inline code | `a <- b + c` | surround text with single backticks ( ` )
Hyperlinks | [hyperlink to HTML cheatsheet](https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf) | `[Text for link](https://www.google.com)`
Insert image | ![alternate text](/assets/img/small_logo.png) | `![alternate text](/path/to/image)`

```
Code block
Surround text with three backticks (```) on lines above and below the text. Text must be on a separate line to the backticks.
```

```
- bullet point
* bullet point alternative
1. numbered list
2. numbered list continued
```
- bullet point
* bullet point alternative
1. numbered list
2. numbered list continued


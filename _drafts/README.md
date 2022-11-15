# Usage

Use this folder for writing blog posts or drafting new pages in Markdown. When you're happy with them and ready to publish follow the below steps.

## Publishing blog posts
1. Rename file with the format: YYYY-MM-DD-title.md
2. Copy file to the `_posts` directory either:
    * through the terminal; or
    * Click edit file, copy all text. Go to `_posts` directory and click `Add file > Create new file`, paste text in. Name file with format specified in step 1. Write commit message and save.

## Publishing a new page
1. Create a link to the page in `_config.yml` with a short, simple name, e.g.;
```
# Add links to the sidebar.
menu:
  - title:             New Page
    url:               /new-page/
```
2. Rename relevant file in `_drafts` to name specified above (i.e. `new-page.md`)
3. Copy file to root directory (i.e. `mbi-project/new-page.md`)

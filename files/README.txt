Put downloadable resource files in this folder (PDFs, slides, spreadsheets, etc).

Then link them from js/resources-data.js like this:

    url: "files/participation-contract.pdf",

Tips:
- Use simple filenames: lowercase, dashes instead of spaces.
  Good:  gantt-chart-template.xlsx
  Bad:   Gantt Chart Template (FINAL v2).xlsx
- For anything you update often, link the Google Drive URL in
  resources-data.js instead of uploading a file here. That way you
  edit it in Drive and never have to re-upload.

/* ============================================================
   MedTech Founders Program — Resource List
   ============================================================

   THIS IS THE ONLY FILE YOU EDIT TO UPDATE THE RESOURCES PAGE.
   You never need to touch the HTML or CSS.

   ------------------------------------------------------------
   TO ADD A RESOURCE
   ------------------------------------------------------------
   Copy this block, paste it into the right section, fill it in:

     {
       title:   "Name people will see",
       desc:    "One short line explaining what it is.",
       url:     "files/my-file.pdf",
       type:    "pdf",
       section: "fall",
       isNew:   true
     },

   ------------------------------------------------------------
   FIELD GUIDE
   ------------------------------------------------------------
   title    Required. Keep it short.

   desc     Required. One sentence.

   url      Where it links. Two options:
              - A file you uploaded:  "files/contract.pdf"
              - A link:               "https://docs.google.com/..."
            Set it to  null  if it isn't ready yet. The item will
            show as "Coming soon" and won't be clickable.

   type     Controls the little colored badge. Use one of:
              "pdf"     "doc"     "sheet"   "slides"
              "form"    "link"    "video"   "folder"

   section  Which group it appears under. Use one of:
              "essentials"   Team Essentials (always relevant)
              "fall"         Fall — Ideation
              "winter"       Winter — Entrepreneurial
              "spring"       Spring — Prototyping

   isNew    Optional. Set to  true  to show a "New" badge.
            Remove it (or set false) once it's no longer new.

   ------------------------------------------------------------
   TO UPLOAD A FILE
   ------------------------------------------------------------
   Put the file in the  files/  folder next to your HTML pages,
   then point url at it, e.g.  "files/gantt-template.xlsx"

   For anything you revise often (a live sheet, a form), link the
   Google Drive URL instead — you update it in Drive and the link
   here never has to change.
   ============================================================ */

const RESOURCES = [

  /* ==========================================================
     TEAM ESSENTIALS — needed all year
     ========================================================== */
  {
    title: "Participation Contract",
    desc: "Sign to confirm your commitment to the program and your team.",
    url: "files/mfp-contract-2026-27.pdf",
    type: "pdf",
    section: "essentials"
  },
  {
    title: "Team Formation Form",
    desc: "Submit your team roster, or ask to be matched with a team.",
    url: "https://forms.gle/ALHf42EcTX1HChCYA",
    type: "form",
    section: "essentials"
  },
  {
    title: "Deliverables Submission Form",
    desc: "Turn in deliverables at each checkpoint through the year.",
    url: "https://forms.gle/7TdMLKwMiEeV2qcv7",
    type: "form",
    section: "essentials"
  },
  {
    title: "Purchase Order (PO) Form",
    desc: "Request funding for parts and materials for your build.",
    url: null,
    type: "form",
    section: "essentials"
  },
  {
    title: "3D Print Submission Form",
    desc: "Submit a print job. Free for program participants.",
    url: null,
    type: "form",
    section: "essentials"
  },
  {
    title: "Discord Server",
    desc: "Team channels, announcements, and day-to-day questions.",
    url: "https://discord.gg/GyPYGn6h6",
    type: "link",
    section: "essentials",
    isNew: true
  },
  {
    title: "Team Charter Template",
    desc: "Set roles, expectations, and meeting norms early on.",
    url: null,
    type: "doc",
    section: "essentials"
  },
  {
    title: "Mentor Office Hours Signup",
    desc: "Book time with coordinators and mentors.",
    url: null,
    type: "form",
    section: "essentials"
  },
  {
    title: "AI Tools for Your Project",
    desc: "Claude, NotebookLM, Perplexity, and Copilot — for research, drafting, and code.",
    url: null,
    type: "link",
    section: "essentials"
  },

  /* ==========================================================
     FALL — IDEATION
     ========================================================== */
  {
    title: "CODR Sample Presentation",
    desc: "Example Conceptual Design Review deck to model yours on.",
    url: "https://docs.google.com/presentation/d/1RChqeF5Qc1RI2wTKQud1clOAvGZU0oIG-IBsTogdDgQ/edit?usp=sharing",
    type: "slides",
    section: "fall"
  },
  {
    title: "PDR Sample Presentation",
    desc: "Example Preliminary Design Review deck.",
    url: null,
    type: "slides",
    section: "fall"
  },
  {
    title: "Sample Idea Incubator Poster",
    desc: "A full example poster showing the expected format and depth.",
    url: null,
    type: "pdf",
    section: "fall"
  },
  {
    title: "Poster Template",
    desc: "Branded starting point for your Idea Incubator poster.",
    url: null,
    type: "slides",
    section: "fall"
  },
  {
    title: "Fall Workshop Slides",
    desc: "Decks from Project 101, Fabrication Fundamentals, Kickoff, and Sketch-a-thon.",
    url: null,
    type: "folder",
    section: "fall"
  },
  {
    title: "SolidWorks Tutorials",
    desc: "Get up to speed on CAD before your first design review.",
    url: null,
    type: "video",
    section: "fall"
  },
  {
    title: "Judging Rubric",
    desc: "How CODR, PDR, and poster presentations are actually scored.",
    url: null,
    type: "pdf",
    section: "fall"
  },
  {
    title: "Google Patents",
    desc: "Search prior art and check whether your idea already exists.",
    url: "https://patents.google.com",
    type: "link",
    section: "fall"
  },
  {
    title: "USPTO Patent Search",
    desc: "Official US patent database for deeper prior-art searching.",
    url: "https://ppubs.uspto.gov/pubwebapp/",
    type: "link",
    section: "fall"
  },
  {
    title: "PubMed",
    desc: "Primary literature for understanding the clinical problem.",
    url: "https://pubmed.ncbi.nlm.nih.gov",
    type: "link",
    section: "fall"
  },
  {
    title: "UCI Libraries",
    desc: "Database access, journal subscriptions, and research help.",
    url: "https://www.lib.uci.edu",
    type: "link",
    section: "fall"
  },
  {
    title: "Poster Printing Info",
    desc: "Where to print on campus, cost, and how early to submit.",
    url: null,
    type: "link",
    section: "fall"
  },

  /* ==========================================================
     WINTER — ENTREPRENEURIAL
     Hidden for now (Coming Soon on the page). Uncomment when
     Winter resources are ready.
     ==========================================================
  {
    title: "Sample Open MIC Pitch Deck",
    desc: "A strong example pitch to benchmark your own against.",
    url: null,
    type: "slides",
    section: "winter"
  },
  {
    title: "Sample Gantt Chart",
    desc: "Example project timeline showing the level of detail expected.",
    url: null,
    type: "sheet",
    section: "winter"
  },
  {
    title: "Concept Paper Template",
    desc: "Structure for writing up your design concept and criteria.",
    url: null,
    type: "doc",
    section: "winter"
  },
  {
    title: "Business Model Canvas",
    desc: "One-page framework for mapping out how your product works as a business.",
    url: null,
    type: "doc",
    section: "winter"
  },
  {
    title: "Market Sizing Template",
    desc: "Work through TAM, SAM, and SOM for your product.",
    url: null,
    type: "sheet",
    section: "winter"
  },
  {
    title: "Winter Workshop Slides",
    desc: "AI Tools in BME, entrepreneurial workshop, and Open MIC prep decks.",
    url: null,
    type: "folder",
    section: "winter"
  },
  {
    title: "FDA Regulatory Pathway Primer",
    desc: "510(k) vs. De Novo vs. PMA — which route a device like yours takes.",
    url: "https://www.fda.gov/medical-devices/how-study-and-market-your-device/device-advice-comprehensive-regulatory-assistance",
    type: "link",
    section: "winter"
  },
  {
    title: "Beall Applied Innovation",
    desc: "UCI's hub for commercialization support, NVC, and startup resources.",
    url: null,
    type: "link",
    section: "winter"
  },
  {
    title: "Design Criteria Worksheet",
    desc: "Define measurable requirements before you start building.",
    url: null,
    type: "doc",
    section: "winter"
  },
  ========================================================== */

  /* ==========================================================
     SPRING — PROTOTYPING
     Hidden for now (Coming Soon on the page). Uncomment when
     Spring resources are ready.
     ==========================================================
  {
    title: "Testing Plan Template",
    desc: "Plan how you'll validate that your prototype actually works.",
    url: null,
    type: "doc",
    section: "spring"
  },
  {
    title: "National BMES Application Outline",
    desc: "What the Student Design Competition submission requires.",
    url: null,
    type: "doc",
    section: "spring"
  },
  {
    title: "BMES Student Design Competition",
    desc: "Official rules, categories, and deadlines from BMES national.",
    url: "https://www.bmes.org",
    type: "link",
    section: "spring"
  },
  {
    title: "Spring Workshop Slides",
    desc: "Build night, prototype swap, and VITAL prep materials.",
    url: null,
    type: "folder",
    section: "spring"
  },
  {
    title: "Makerspace Access & Safety Training",
    desc: "Required training and hours for campus fabrication facilities.",
    url: null,
    type: "link",
    section: "spring"
  },
  {
    title: "McMaster-Carr",
    desc: "Hardware, raw materials, and mechanical components.",
    url: "https://www.mcmaster.com",
    type: "link",
    section: "spring"
  },
  {
    title: "DigiKey",
    desc: "Electronic components, sensors, and prototyping boards.",
    url: "https://www.digikey.com",
    type: "link",
    section: "spring"
  },
  {
    title: "Past Winning Projects",
    desc: "Previous MFP and BMES competition projects worth studying.",
    url: null,
    type: "folder",
    section: "spring"
  },
  {
    title: "UROP & Research Funding",
    desc: "Undergraduate research grants that can fund your prototype.",
    url: null,
    type: "link",
    section: "spring"
  },
  {
    title: "IRB Basics",
    desc: "What you need to know if your project involves human subjects.",
    url: null,
    type: "link",
    section: "spring"
  },
  {
    title: "VITAL Showcase Info",
    desc: "Format, judging, and what to prepare for the spring showcase.",
    url: null,
    type: "pdf",
    section: "spring"
  }
  ========================================================== */

];


/* ============================================================
   SECTION HEADINGS — edit the labels here if you want
   different names or a different order.
   ============================================================ */
const RESOURCE_SECTIONS = [
  {
    id: "essentials",
    label: "Team Essentials",
    blurb: "Forms, agreements, and links you'll need all year."
  },
  {
    id: "fall",
    label: "Fall — Ideation",
    blurb: "Find a problem worth solving. Design reviews and the Idea Incubator."
  },
  {
    id: "winter",
    label: "Winter — Entrepreneurial",
    blurb: "Prove it can be a business. Pitch decks, planning, and Open MIC."
  },
  {
    id: "spring",
    label: "Spring — Prototyping",
    blurb: "Fabricate and test a working prototype. Build nights and VITAL."
  }
];

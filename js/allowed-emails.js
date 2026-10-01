/* ============================================================
   MedTech Founders Program — Resources Access List
   ============================================================

   HOW TO ADD SOMEONE:
   Add their email on its own line inside the list below,
   wrapped in quotes, with a comma at the end. Example:

       "newmember@uci.edu",

   HOW TO REMOVE SOMEONE:
   Delete their line (or put // at the start of the line to
   temporarily disable it without deleting).

   NOTES:
   - Capitalization does not matter. "Peter@uci.edu" and
     "peter@uci.edu" are treated the same.
   - Make sure every line ends with a comma except you may
     leave or remove the comma on the very last one.
   - After editing, save the file and re-upload it to your host.

   REMINDER: this list is visible to anyone who views the page
   source. It is a convenience gate, not real security. Do not
   put confidential material behind it.
   ============================================================ */

const ALLOWED_EMAILS = [
  // ---- Coordinators ----
  "bediak@uci.edu",
  "nstolyar@uci.edu",
  "arvince1@uci.edu",
  "ngooty@uci.edu",
  "samrar@uci.edu",
  "huangn8@uci.edu",
  "bmes@uci.edu",

  // ---- Members ----
  // Add participant emails below this line:

];

/* ------------------------------------------------------------
   OPTIONAL: allow ANY email from a whole domain.
   Useful if you want every UCI address to have access.
   Leave the list empty to keep access limited to the
   specific emails above.

   Example: ["uci.edu"]  ->  anyone@uci.edu can enter
   ------------------------------------------------------------ */
const ALLOWED_DOMAINS = [
  // "uci.edu",
];

/* ============================================================
   SHARED PASSCODE
   ============================================================

   Members must enter BOTH an approved email AND this passcode.

   The passcode is stored as a SHA-256 hash, so the actual
   password is not sitting in plain text in this file.

   (share the current plain passcode with members directly —
   do not write it here, since this file is visible in the repo)

   ------------------------------------------------------------
   TO CHANGE THE PASSCODE
   ------------------------------------------------------------
   1. Open  password-tool.html  in your browser (double-click it).
   2. Type your new passcode. It shows you a long hash.
   3. Copy that hash and paste it below, replacing the current one.
   4. Share the new plain passcode with your members.

   ------------------------------------------------------------
   TO TURN THE PASSCODE OFF
   ------------------------------------------------------------
   Set it to an empty string:   const ACCESS_PASSCODE_HASH = "";
   Members will then only need an approved email.

   ------------------------------------------------------------
   IMPORTANT — READ THIS
   ------------------------------------------------------------
   This raises the bar against casual sharing, but it is NOT
   real security. Anyone technical can read this page's code and
   work around it. For anything you actually need protected,
   store the real files in a Google Drive folder shared only with
   specific people, and link to that folder from here. Google
   will then enforce access for real.
   ============================================================ */

const ACCESS_PASSCODE_HASH =
  "7fcbdfb42f55b85325c731c77c547c060459f322a7c6fcde5e283fcd500331d7";

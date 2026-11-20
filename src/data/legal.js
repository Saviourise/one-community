/*
 * Legal pages content (English, canonical shape). The Impressum and privacy
 * policy are authoritative in German: see `legal` in src/i18n/de.js, which
 * mirrors this shape exactly. DRAFT: everything in [square brackets] must be
 * confirmed before launch. Paragraph strings may contain \n for line breaks.
 */
export const legal = {
  "note": "This is an English translation for your convenience. The German version is authoritative.",
  "impressum": {
    "title": "Legal notice",
    "sections": [
      {
        "heading": "Provider of this website",
        "paragraphs": [
          "One Community Project\nAdetayo Manuwa\n[full, legally suitable address: to be clarified with Christian / City of Dessau-Roßlau]"
        ]
      },
      {
        "heading": "Contact",
        "paragraphs": [
          "Email: [working email address, planned hello@onecommunityproject.org]\n[further direct means of contact, e.g. telephone, if § 5 DDG applies]"
        ]
      },
      {
        "heading": "Responsible for content",
        "paragraphs": [
          "Adetayo Manuwa, address as above [add reference to § 18 MStV after checking]"
        ]
      },
      {
        "heading": "Links to other websites",
        "paragraphs": [
          "The operators of linked websites are responsible for their content. We check reports of unlawful content and remove affected links where necessary."
        ]
      },
      {
        "heading": "Rights to photos and films",
        "paragraphs": [
          "The rights to photos, films and other content belong to the respective rights holders. Unless use is permitted by law, their prior consent is required."
        ]
      }
    ]
  },
  "privacy": {
    "title": "Privacy policy",
    "intro": "This policy explains which personal data are processed when you visit this website.",
    "updated": "Last updated: [date of publication]",
    "sections": [
      {
        "heading": "1. Controller",
        "paragraphs": [
          "Adetayo Manuwa, One Community Project, [address as in the legal notice]. Email: [working email address]. You can also use this address to exercise your rights."
        ]
      },
      {
        "heading": "2. Hosting and server log files",
        "paragraphs": [
          "This website is hosted by Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA. When pages are requested, Cloudflare processes technically necessary data such as your IP address, the date and time of the request, the page requested and your browser type, in order to deliver the website and protect it against misuse. The legal basis is our legitimate interest in secure and stable operation (Art. 6(1)(f) GDPR).",
          "[Confirm in the Cloudflare account before publication:] A data processing agreement under Art. 28 GDPR is in place with Cloudflare. Transfers to Cloudflare in the USA are based on the European Commission’s adequacy decision for the EU-U.S. Data Privacy Framework (Art. 45 GDPR). [Confirm current certification.] Log data are stored for [confirmed retention period or clear deletion criteria] and then deleted."
        ]
      },
      {
        "heading": "3. Language choice, fonts and analytics",
        "paragraphs": [
          "We do not use our own analytics or tracking tools. When external videos are loaded, the respective providers may use cookies or similar storage technologies. See the section “Embedded videos”.",
          "If you choose a language, we store this setting in your browser for the current browsing session (sessionStorage), so that your chosen language stays the same as you move between pages. This storage serves the language function you selected (§ 25(2) no. 2 TDDDG). Fonts are loaded directly from our server, not from Google."
        ]
      },
      {
        "heading": "4. Embedded videos (YouTube, Google Drive)",
        "paragraphs": [
          "Some pages contain videos from YouTube or Google Drive (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland). The videos are only loaded when you select “Load video”. Google then receives data such as your IP address and browser information, provides the video and may use cookies or similar storage technologies. We embed YouTube videos via youtube-nocookie.com. Google also processes the data for its own purposes; see policies.google.com/privacy for details. [Add US transfer and retention details from current Google documentation, e.g. policies.google.com/privacy/frameworks.]",
          "Loading the videos and the related processing of personal data are based on your consent under Art. 6(1)(a) GDPR. Where information is stored on or read from your device, the legal basis is § 25(1) TDDDG. You can withdraw your consent at any time with effect for the future using “Disable video”. This does not affect the lawfulness of processing before withdrawal."
        ]
      },
      {
        "heading": "5. Documentary “Noch einmal Walzer”",
        "paragraphs": [
          "The documentary is provided as a video file via GitHub (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). When you open a page with the film, your browser may already connect to GitHub to load the video file or information about it, and GitHub then receives data such as your IP address and browser information. The legal basis is our legitimate interest in showing the film on our website (Art. 6(1)(f) GDPR). [Confirm GitHub’s transfer basis and retention before publication, e.g. in the GitHub Privacy Statement, docs.github.com.]"
        ]
      },
      {
        "heading": "6. Contact by email",
        "paragraphs": [
          "If you write to us, we process your email address, your message and any other information you provide in order to handle your enquiry. We handle general enquiries on the basis of Art. 6(1)(f) GDPR; our legitimate interest is communicating with interested people and project partners. Where your enquiry concerns a contract with you or pre-contractual measures, the legal basis is Art. 6(1)(b) GDPR. Providing this information is voluntary; without a way to contact you, we cannot reply. Processing takes place via [actual email provider and, if applicable, form provider, recipients and transfer basis]. Once your enquiry has been dealt with, we delete it after [confirmed period or specific deletion criterion], unless statutory retention obligations or other legal reasons prevent this."
        ]
      },
      {
        "heading": "7. Your rights",
        "paragraphs": [
          "Where the legal requirements are met, you have the right of access, rectification, erasure, restriction of processing and data portability.",
          "Where we process personal data on the basis of Art. 6(1)(f) GDPR, you may object to this processing on grounds relating to your particular situation.",
          "You can withdraw consent at any time with effect for the future. This does not affect the lawfulness of processing before withdrawal.",
          "You can lodge a complaint with a data protection supervisory authority, in particular in the Member State of your habitual residence, place of work or place of the alleged infringement."
        ]
      }
    ]
  }
}

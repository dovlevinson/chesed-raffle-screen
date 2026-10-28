// Snapshot shown until the Google Sheet loads (and if the internet drops).
// The live numbers come from the sheet set in SHEET_ID below.
window.SHEET_ID = "17Te9EOv0-lurGUv9fPrZeiGqCa-kJwz0Ol6kbwk3mLI";
window.SNAPSHOT = {
  settings: {
    "Title": "Session 1 Raffle",
    "Bottom line": "Log your hours today!",
    "Updated": "October 28",
    "Note": "Logged hours but don't see them yet? Hours count once they're verified. Ask your parent to check their email!"
  },
  tickets: [],  // names live only in the sheet, so they are never saved in the public repo
  prizes: [["Uber Eats lunch delivered to school","uber-eats.png"],["Ninja portable blender","ninja-blender.png"],["AirPods","airpods.png"],["Razor scooter","razor-scooter.png"]]
};

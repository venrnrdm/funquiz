const results = [
  "ඔබට ඉතා හොඳ දවසක් වේයි!",
  "අද ඔබගේ වාසනාවන්ත දවසක්!",
  "මිතුරන්ගෙන් ආදරය ලැබේවි!",
  "ඔබගේ සිහින ඉටු වේයි!"
];

document.getElementById("result").innerText =
  results[Math.floor(Math.random() * results.length)];

function shareContent() {
  const text = document.getElementById("result").innerText;
  const url = window.location.href;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodeURIComponent(text)}`;

  // Open Adsterra ad in new tab
  window.open("https://www.profitableratecpm.com/essbieqdn?key=fd3a2a8d642b3ca8a96276905d569b26", "_blank");

  // Open Facebook share
  window.open(fbUrl, "_blank");
}

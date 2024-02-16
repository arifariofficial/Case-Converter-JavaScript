document.getElementById("upper-case").addEventListener("click", function () {
  let textArea = document.getElementById("text-area").value;
  document.getElementById("text-area").value = textArea.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function () {
  let textArea = document.getElementById("text-area").value;
  document.getElementById("text-area").value = textArea.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function () {
  let textArea = document.getElementById("text-area").value;
  document.getElementById("text-area").value = textArea
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");
});

document.getElementById("sentence-case").addEventListener("click", function () {
  let textArea = document.getElementById("text-area").value;
  let sentences = textArea.split(/\. +/);

  let processedSentences = sentences.map((item) => {
    let trimmedSentence = item.trim().toLowerCase();
    if (trimmedSentence.length > 0) {
      return trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1);
    } else {
      return trimmedSentence;
    }
  });
  document.getElementById("text-area").value = processedSentences.join(". ");
});

function download(fileName, text) {
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text),
  );
  element.setAttribute("download", fileName);

  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

document
  .getElementById("save-text-file")
  .addEventListener("click", function () {
    let textArea = document.getElementById("text-area").value;
    download("text.txt", textArea);
  });

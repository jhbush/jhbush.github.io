(function () {
  var root = document.documentElement;

  // Light/dark toggle. Without a saved choice the system setting wins.
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Copy buttons on code blocks.
  document.querySelectorAll("div.highlighter-rouge").forEach(function (block) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "copy-code";
    button.textContent = "Copy";
    button.addEventListener("click", function () {
      var code = block.querySelector("pre code") || block.querySelector("pre");
      navigator.clipboard.writeText(code.innerText).then(function () {
        button.textContent = "Copied";
        setTimeout(function () { button.textContent = "Copy"; }, 1500);
      });
    });
    block.appendChild(button);
  });

  // Table of contents built from the post's h2 headings.
  var tocList = document.querySelector(".toc-list");
  var headings = document.querySelectorAll(".post .prose h2[id]");
  if (tocList) {
    if (headings.length < 2) {
      tocList.closest(".toc").remove();
    } else {
      headings.forEach(function (h) {
        var li = document.createElement("li");
        li.innerHTML = '<a href="#' + h.id + '"></a>';
        li.firstChild.textContent = h.textContent;
        tocList.appendChild(li);
      });
    }
  }

  // Reading progress, active TOC entry and back-to-top button.
  var bar = document.querySelector(".progress span");
  var toTop = document.querySelector(".to-top");
  var tocLinks = document.querySelectorAll(".toc a");

  function onScroll() {
    var scrolled = window.scrollY;
    var max = document.body.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (max > 0 ? (scrolled / max) * 100 : 0) + "%";
    if (toTop) toTop.classList.toggle("visible", scrolled > 600);

    if (tocLinks.length) {
      var active = null;
      headings.forEach(function (h) { if (h.getBoundingClientRect().top < 120) active = h.id; });
      tocLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + active); });
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0 }); });
})();

(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var panel = document.querySelector(".nav-panel");
  var form = document.getElementById("estimate-form");
  var nextField = document.getElementById("form-next");
  var yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Thank-you redirect works at any domain, including local preview.
  if (nextField) {
    nextField.value = new URL("thank-you.html", window.location.href).href;
  }

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function setNav(open) {
    if (!toggle || !panel) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    panel.classList.toggle("is-open", open);
    document.body.style.overflow = open && window.matchMedia("(max-width: 760px)").matches ? "hidden" : "";
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });
    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setNav(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setNav(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) setNav(false);
    });
  }

  // Our Work lightbox
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lbImg = lightbox.querySelector(".lightbox-image");
    var lbCaption = lightbox.querySelector(".lightbox-caption");
    var lbClose = lightbox.querySelector(".lightbox-close");
    var lbPrev = lightbox.querySelector(".lightbox-prev");
    var lbNext = lightbox.querySelector(".lightbox-next");
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
    var index = 0;
    var lastFocus = null;
    var startX = null;

    function show(i) {
      if (!items.length) return;
      index = (i + items.length) % items.length;
      var item = items[index];
      var src = item.getAttribute("href");
      var caption = item.getAttribute("data-caption") || "";
      var alt = item.getAttribute("data-alt") || caption;
      lbImg.src = src;
      lbImg.alt = alt;
      lbCaption.textContent = caption;
      var many = items.length > 1;
      lbPrev.hidden = !many;
      lbNext.hidden = !many;
    }

    function openAt(i) {
      lastFocus = document.activeElement;
      show(i);
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      if (lbClose) lbClose.focus();
    }

    function closeLb() {
      lightbox.hidden = true;
      lbImg.removeAttribute("src");
      document.body.style.overflow = "";
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    items.forEach(function (item, i) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        openAt(i);
      });
    });

    if (lbClose) lbClose.addEventListener("click", closeLb);
    if (lbPrev) lbPrev.addEventListener("click", function () { show(index - 1); });
    if (lbNext) lbNext.addEventListener("click", function () { show(index + 1); });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLb();
    });
    document.addEventListener("keydown", function (e) {
      if (lightbox.hidden) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });
    lightbox.addEventListener("touchstart", function (e) {
      if (e.changedTouches[0]) startX = e.changedTouches[0].clientX;
    }, { passive: true });
    lightbox.addEventListener("touchend", function (e) {
      if (startX == null || !e.changedTouches[0]) return;
      var dx = e.changedTouches[0].clientX - startX;
      startX = null;
      if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
    });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      var name = form.querySelector("#name");
      var phone = form.querySelector("#phone");
      var message = form.querySelector("#message");
      var status = document.getElementById("form-status");
      var missing = [];
      if (name && !name.value.trim()) missing.push("name");
      if (phone && !phone.value.trim()) missing.push("phone");
      if (message && !message.value.trim()) missing.push("project details");
      if (missing.length) {
        e.preventDefault();
        if (status) {
          status.className = "form-status is-error";
          status.textContent = "Please add your " + missing.join(", ") + " so we can get back to you.";
        }
        return;
      }
      if (status) {
        status.className = "form-status is-ok";
        status.textContent = "Sending your request…";
      }
    });
  }
})();

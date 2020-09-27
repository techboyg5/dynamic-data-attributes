addDataAttr("href", window.location.href);
addDataAttr("protocol", window.location.protocol);
addDataAttr("host", window.location.host);
addDataAttr("hostname", window.location.hostname);
addDataAttr("port", window.location.port);
addDataAttr("pathname", window.location.pathname);
addDataAttr("search", window.location.search);
addDataAttr("hash", window.location.hash);
addDataAttr("referrer", document.referrer);
addDataAttr("user-agent", navigator.userAgent);

function addDataAttr(name, value) {
  document.documentElement.setAttribute("data-" + name, value);
}

function removeDataAttr(name) {
  document.documentElement.removeAttribute("data-" + name);
}

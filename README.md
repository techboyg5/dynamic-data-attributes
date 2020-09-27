# Dynamic Data Attributes

Dynamic Data Attributes adds several `data-` attributes to the `<html>` tag. The JavaScript file is small, and each data attribute is only a single line of code.

This is useful if you want to apply CSS under certain circumstances.

Below is a table with the specific data attributes listed, the JavaScript that generates them, and an example.

## List of Data Attributes

### window.location properties

| Data Attribute | JavaScript | Example |
| -------------- | ---------- | ------- |
| `data-href` | `window.location.href` | `data-href="https://techboyg5blog.com/"` |
| `data-protocol` | `window.location.protocol` | `data-protocol="https:"` |
| `data-host` | `window.location.host` | `data-host="techboyg5blog.com"` |
| `data-hostname` | `window.location.hostname` | `data-hostname="techboyg5blog.com"` |
| `data-port` | `window.location.port` | `data-port=""` |
| `data-pathname` | `window.location.pathname` | `data-pathname="/"` |
| `data-search` | `window.location.search` | `data-search=""` |
| `data-hash` | `window.location.hash` | `data-hash=""` |

### Referrer

| Data Attribute | JavaScript | Example |
| -------------- | ---------- | ------- |
| `data-referrer` | `document.referrer` | `data-referrer=""` |

### User Agent

| Data Attribute | JavaScript | Example |
| -------------- | ---------- | ------- |
| `data-user-agent` | `navigator.userAgent` | `data-user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0"` |

## Installation

Add this script tag right before the closing `</body>` tag:

    <script src="https://projects.techboyg5blog.com/dynamic-data-attributes/dynamic-data-attributes.js"></script>

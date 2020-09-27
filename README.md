# Dynamic Data Attributes

Dynamic Data Attributes adds several `data-` attributes to the `<html>` tag. You can also add and remove your own data attributes. The JavaScript file is only 662 bytes.

This is useful if you want to apply CSS under certain circumstances.

Below is a table with the specific data attributes listed, the JavaScript that generates them, and an example.

## Pre-Defined Data Attributes

### window.location properties

| Data Attribute | JavaScript |
| -------------- | ---------- |
| `data-href` | `window.location.href` |
| `data-protocol` | `window.location.protocol` |
| `data-host` | `window.location.host` |
| `data-hostname` | `window.location.hostname` |
| `data-port` | `window.location.port` |
| `data-pathname` | `window.location.pathname` |
| `data-search` | `window.location.search` |
| `data-hash` | `window.location.hash` |

### Referrer

| Data Attribute | JavaScript |
| -------------- | ---------- |
| `data-referrer` | `document.referrer` |

### User Agent

| Data Attribute | JavaScript |
| -------------- | ---------- |
| `data-user-agent` | `navigator.userAgent` |

## Functions

### addDataAttr (name, value)

Adds a new data attribute. You can also use it to change an existing data attribute.

Parameters:

    name: The name of the data attribute. Do not include data- at the beginning of the attribute.
    value: The value of the data attribute.

Example:

    addDataAttr("host", window.location.host); // Do not include data- at the beginning of the attribute.

### removeDataAttr (name)

Removes a data attribute.

Parameters:

    name: The name of the data attribute. Do not include data- at the beginning of the attribute.

Example:

    removeDataAttr("host"); // Do not include data- at the beginning

## Installation

Add this script tag right before the closing `</body>` tag:

    <script src="https://projects.techboyg5blog.com/dynamic-data-attributes/dynamic-data-attributes.js"></script>

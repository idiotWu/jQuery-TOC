A plugin that generates table of contents(TOC) dynamically for both jQuery or non-jQuery.

## Install

```
bower install jquery-toc
```

## Compatibility

1. **non-jQuery** version works on **IE9+**
2. **jQuery** version works on anywhere with **jQuery** 

## Usage

### non-jQuery

```javascript
// returns an ordered-list of headers in page content
var list = initTOC(options);

// then you can append it to anywhere you like
container.appendChild(list);
```

### jQuery

```javascript
// will append TOC list to target element
$(elem).initTOC(options);
```

## Options

- `String:selector`: headers selector, default is `'h1, h2, h3, h4, h5, h6'`.
- `String:scope`: selector to specify elements search scope, default is `'body'`.
- `Boolean:overwrite`: whether to overwrite existed headers' id, default is `false`, which means plugin will preserve the existed id property and create a string like `toc-1` for those don't have id set.
- `String:prefix`: string to prepend to id/href property, default is `'toc'`, which generates a string like `toc-0`.

## License
MIT.
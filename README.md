A plugin that generates table of contents(TOC) automatically for both jQuery and non-jQuery.

## Install

```
bower install jquery-toc
```

## Compatibility

1. **non-jQuery** version works on **IE9+**
2. **jQuery** version works on anywhere with **jQuery**

## Showcase
[https://idiotwu.me/understanding-es6-promise/](https://idiotwu.me/understanding-es6-promise/)

## Usage

### non-jQuery

```javascript
// returns an ordered-list of headers in page content
var toc = initTOC(options);

// then you can append it to anywhere you like
elem.appendChild(toc);
```

### jQuery

```javascript
// will append TOC list to target element
$(elem).initTOC(options);
```

## Options

```javascript
initTOC({
    selector: 'h1, h2, h3, h4, h5, h6',
    scope: 'body',
    overwrite: false,
    prefix: 'toc'
});
```

- `String:selector`: headers selector, default is `'h1, h2, h3, h4, h5, h6'`.
- `String:scope`: selector to specify elements search scope, default is `'body'`.
- `Boolean:overwrite`: whether to overwrite existed headers' id, default is `false`, which means plugin will preserve the existed id property and create a string like `toc-1` for those don't have id assigned.
- `String:prefix`: string to prepend to id/href property, default is `'toc'`, which generates a string like `toc-0`.

## Example

#### source:

```html
<aside id="toc"></aside>

<article id="post">
    <h1>this will be ignored due to specific selector</h1>
    <p>...</p>

    <h2>this is a h2</h2>
    <p>...</p>

    <h3>this is a h3</h3>
    <p>...</p>

    <h2>yet another h2</h2>
    <p>...</p>

    <h3>and another h3</h3>
    <h4 id="wow">existed id will be preserved due to options</h4>
</article>
```

### with jQuery version:

```javascript
$('#toc').initTOC({
    selector: 'h2, h3, h4',
    scope: '#post',
    overwrite: false,
    prefix: 'toc'
});
```

### non-jQuery version:

```javascript

var container = document.querySelector('#toc');

var toc = initTOC({
    selector: 'h2, h3, h4',
    scope: '#post',
    overwrite: false,
    prefix: 'toc'
});

container.appendChild(toc);
```

#### yield:

```html
<aside id="toc">
    <ol>
        <li>
            <a href="#toc-0">this is a h2</a>
            <ol>
                <li>
                    <a href="#toc-1">this is a h3</a>
                </li>
            </ol>
        </li>
        <li>
            <a href="#toc-2">yet another h2</a>
            <ol>
                <li>
                    <a href="#toc-3">and another h3</a>
                    <ol>
                        <li><a href="#wow">existed id will be preserved due to options</a></li>
                    </ol>
                </li>
            </ol>
        </li>
    </ol>
</aside>

<article id="post">
    <h1>this will be ignored due to specific selector</h1>
    <p>...</p>

    <h2 id="toc-0">this is a h2</h2>
    <p>...</p>

    <h3 id="toc-1">this is a h3</h3>
    <p>...</p>

    <h2 id="toc-2">yet another h2</h2>
    <p>...</p>

    <h3 id="toc-3">and another h3</h3>
    <h4 id="wow">existed id will be preserved due to options</h4>
</article>
```

## License
MIT.
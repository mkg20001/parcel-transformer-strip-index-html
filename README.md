# parcel-transformer-strip-index-html

Strips /index.html from URLs in parcel builds

# What it does

It turns stuff like this

```html
<a href="/my-page/index.html"></a>
```

...into stuff like this

```html
<a href="/my-page/"></a>
```

**NOTE: Automatic stripping is only done when HMR is disabled, since this otherwise breaks the URLs**

# Usage

Add parcel-transformer-strip-index-html as a transformer for parcel by adding this to your `.parcelrc`

```json
{
  "transforms": {
    "*.html": [
      "parcel-transformer-strip-index-html"
    ]
  }
}
```

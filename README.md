# HTTP
Javascript HTTP methods

### Synchronous

```Javascript
console.log(Get("https://cors-anywhere.herokuapp.com").response);
```
*console >*
>"This API enables cross-origin requests to anywhere.

>Usage:
>*...*
>"

### Asynchronous

Asynchronous request with no callback
```Javascript
Post("https://cors-anywhere.herokuapp.com", null, true)
```

Asynchronous request with callback
```Javascript
Post("https://cors-anywhere.herokuapp.com", {data: "data"},  xmlHttp => console.log(xmlHttp.response))
```
*console >*
> "This API enables cross-origin requests to anywhere.

>Usage:
>*...*
>"

----
underlying method
```Javascript
Ajax(method, url, data, cb)
```

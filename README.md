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

```Javascript
Post("https://cors-anywhere.herokuapp.com", true)
```
Asynchronous request with no callback

```Javascript
Post("https://cors-anywhere.herokuapp.com", xmlHttp => console.log(xmlHttp.response))
```
*console >*
> "This API enables cross-origin requests to anywhere.

>Usage:
>*...*
>"

----

Ajax(method, url, data, cb)

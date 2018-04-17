function Put(url, file, cb) {
    return Ajax("PUT", url, file, cb)
};

function Post(url, data, cb) {
    return Ajax("POST", url, data, cb)
};

function Get(url, cb) {
    return Ajax("GET", url, null, cb)
};

function Ajax(method, url, data, cb) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open(method, url, !!cb);
    if (typeof data === "object") {
        xmlHttp.setRequestHeader("Content-Type", "application/json");
        data = JSON.stringify(data);
    }
    if (typeof cb === "function") xmlHttp.onload = function () {
        if (this.readyState === 4) cb(this);
    };
    xmlHttp.send(data);
    return xmlHttp;
}
// function Post(url, data, cb) {
//         var xmlHttp = new XMLHttpRequest();
//         xmlHttp.open("POST", url, !!cb);
//         if (data.constructor === Object) {
//             xmlHttp.setRequestHeader("Content-Type", "application/json");
//             data = JSON.stringify(data);
//         }
//         else xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//         if (typeof cb === "function") xmlHttp.onload = function () {
//             if (this.readyState === 4) cb(this);
//         };
//         xmlHttp.send(data);
//         return xmlHttp;
//     }

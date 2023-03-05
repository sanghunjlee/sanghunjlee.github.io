

function onClickNameChange(ele) {
    const names = {
        "1": "Sanghun",
        "2": "Joseph",
        "3": "Kyo",
    };
    var curr = ele.innerHTML.trim();
    var key = Object.keys(names).find(k => names[k] == curr);
    key = (parseInt(key) == Object.keys(names).length) ? "1" : (parseInt(key)+1).toString();
    ele.innerHTML = names[key];
}

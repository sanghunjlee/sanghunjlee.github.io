function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 20);
}
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 20);
}

let index = {
    init: async function() {
        await index.initTitle();
        await index.initResume();
        await index.initContents();
    },
    initTitle: async function() {
        let main = document.getElementById("main");
        let title = document.createElement("div");
        title.id="main-title";
        title.style.display = 'none';
        title.style.opacity = 0;
        title.innerHTML = `
        Hi, there. I'm 
        <span class="btn-span" id="titleNameSpan" onclick="index.changeTitleName()"> 
          Sanghun
        </span>`;
        main.appendChild(title);
        unfade(title);
        await delay(1000);
    },
    initResume: async function() {
        let main = document.getElementById("main");
        let resume = document.createElement("div");
        resume.className = "ddiv";
        resume.id = "resume";
        resume.style.display = 'none';
        resume.style.opacity = 0;
        resume.innerHTML = `<div class="cwords">
        <span>For professional information, please refer to my <a id="resume" href="page/resume.html">resume</a>.</span>
        </div>`;
        main.appendChild(resume);
        unfade(resume);
        await delay(1000);
    },
    initContents: async function() {
        let main = document.getElementById("main");
        let contents = document.createElement("div");
        contents.className = "ddiv";
        contents.id = "contents";
        contents.style.display = "none";
        contents.style.opacity = 0;
        contents.innerHTML = `
        <div class="flex-container">
          <div class="button" onclick="index.getPrograms()">
            GitHub
          </div>
          <div class="button" onclick="index.getWebtoons()">
            Webtoons
          </div>
          <div class="button" onclick="index.getTrashbunny()">
            Trashbunny
          </div>
        </div>
        <div id="menuContents">
        </div>`;
        main.appendChild(contents);
        unfade(contents);
        await delay(1000);
    },
    changeTitleName: function() {
        const names = {
            "1": "Sanghun",
            "2": "Joseph",
            "3": "Kyo",
        };
        let titleName = document.getElementById("titleNameSpan");
        var curr = titleName.innerHTML.trim();
        var key = Object.keys(names).find(k => names[k] == curr);
        key = (parseInt(key) == Object.keys(names).length) ? "1" : (parseInt(key)+1).toString();
        titleName.innerHTML = names[key];
    },
    getWebtoons: function() {
        window.alert("webtoons!");
    }
}
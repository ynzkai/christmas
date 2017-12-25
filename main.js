var tree = document.getElementById("tree");
var leaf_count = 11;
var leaf_lenght = 300;





for (var i = 0; i < leaf_count; i++) {
    var leaf = document.createElement("div");
    leaf.style.transform = "rotate(-" + i * 5 + "deg)";
    leaf.style.transformOrigin = "50% 0";
    leaf.style.height = 300 + "px";
    leaf.className = "leaf1";
    tree.appendChild(leaf);
}

var len = leaf_lenght;
var span = 70;
for (var k = 0; k < 4; k++) {
    if (k % 2 != 0) {
        len -= 2 * span;
    }
    for (var i = 0; i < leaf_count; i++) {
        var leaf = document.createElement("div");
        leaf.style.transform = "rotate(-" + i * 5 + "deg)";
        leaf.style.transformOrigin = "50% 0";
        if (k % 2 == 0) {
            leaf.style.height = len - i * (span / leaf_count) + "px";
        } else {
            leaf.style.height = len + i * (span / leaf_count) + "px";
        }
        leaf.className = "leaf2";
        tree.appendChild(leaf);
    }
}

var trunk = document.createElement("div");
trunk.className = "trunk";
tree.appendChild(trunk);


var background = document.querySelector(".container");

for(var i=0; i<50; i++) {
    var star = document.createComment("i");
    star.className = "fas fa-star";
    var starWrapper = document.createElement("div");
    starWrapper.className = "little-star";
    starWrapper.style.left = Math.random()*100+"%";
    starWrapper.style.top = Math.random()*100+"%";
    starWrapper.appendChild(star);
    background.appendChild(starWrapper);
}

for(var i=0; i<50; i++) {
    var star = document.createTextNode("\u2605");
    var starWrapper = document.createElement("div");
    starWrapper.className = "mid-star";
    starWrapper.style.left = Math.random()*100+"%";
    starWrapper.style.top = Math.random()*100+"%";
    starWrapper.appendChild(star);
    background.appendChild(starWrapper);
}

for(var i=0; i<10; i++) {
    var star = document.createTextNode("\u2726");
    var starWrapper = document.createElement("div");
    starWrapper.className = "big-star";
    starWrapper.style.left = Math.random()*100+"%";
    starWrapper.style.top = Math.random()*100+"%";
    starWrapper.appendChild(star);
    background.appendChild(starWrapper);
}

for(var i=0; i<10; i++) {
    var star = document.createTextNode("\u2764");
    var starWrapper = document.createElement("div");
    starWrapper.className = "big-star";
    starWrapper.style.left = Math.random()*100+"%";
    starWrapper.style.top = Math.random()*100+"%";
    starWrapper.appendChild(star);
    background.appendChild(starWrapper);
}


for(var i=0; i<10; i++) {
    var star = document.createTextNode("\u2744");
    var starWrapper = document.createElement("div");
    starWrapper.className = "big-snow";
    starWrapper.style.left = Math.random()*100+"%";
    starWrapper.style.top = Math.random()*100+"%";
    starWrapper.appendChild(star);
    background.appendChild(starWrapper);
}
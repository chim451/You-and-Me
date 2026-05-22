function check(){
if(document.getElementById("pwd").value==="0306"){
document.getElementById("lock").style.display="none";
document.getElementById("app").classList.remove("hidden");
}
}

/* MEMORY STORAGE */
let media=[];

function addMedia(e){
for(let f of e.target.files){
media.push(URL.createObjectURL(f));
}
}

/* VOICE */
function openVoice(){
document.getElementById("modal").classList.add("active");
document.getElementById("content").innerHTML=`
<div>
<button onclick="play('1.mp3')">Good morning</button>
<button onclick="play('2.mp3')">Miss you</button>
<button onclick="play('3.mp3')">Brave</button>
<button onclick="play('4.mp3')">Sad</button>
<button onclick="play('5.mp3')">Scared</button>
<button onclick="play('6.mp3')">Good night</button>
</div>`;
}

function play(a){new Audio(a).play();}

/* MEMORY */
function openMemory(){
document.getElementById("modal").classList.add("active");

let html="<div style='display:grid;gap:10px'>";
media.forEach(m=>{
html+=`<img src="${m}" style="width:100%;border-radius:15px">`;
});
html+="</div>";

document.getElementById("content").innerHTML=html;
}

/* ELI */
function openEli(){
document.getElementById("modal").classList.add("active");
document.getElementById("content").innerHTML=`
<video src="eli.mp4" autoplay controls style="width:100%"></video>`;
}

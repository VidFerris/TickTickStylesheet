
//Schedule Refresh and Backup
var prevloc;

function refreshAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();

    if(now.getHours() > hours ||
       (now.getHours() == hours && now.getMinutes() > minutes) ||
        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
}

function backupAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();

    if(now.getHours() > hours ||
       (now.getHours() == hours && now.getMinutes() > minutes) ||
        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { prevloc = window.location.href; window.location.href = "https://ticktick.com/webapp/#settings/backup";}, timeout);
	setTimeout(function() { document.querySelectorAll('[id="btn-generate"]')[0].click();}, timeout+3000);
	setTimeout(function() { window.location.href = prevloc;}, timeout+60000);
}

backupAt(0, 1, 0); //Will backup at 12:01.

refreshAt(0,5,0); //Will refresh the page at 12:05.


setTimeout(initLowerRight, 1000*5);


function initLowerRight(){
	var cm = document.getElementById('container-main');
var nkr = document.createElement('div');
nkr.setAttribute("id", "nkr");
nkr.innerText = '';
cm.appendChild(nkr);

var cd1 = document.createElement('div');
cd1.setAttribute("id", "hr");
cd1.setAttribute("class", "grey");
cd1.innerText = '';
nkr.appendChild(cd1);
var cd2 = document.createElement('div');
cd2.setAttribute("id", "min");
cd2.setAttribute("class", "orange");
cd2.innerText = '';
nkr.appendChild(cd2);
var cd3 = document.createElement('div');
cd3.setAttribute("id", "wk");
cd3.setAttribute("class", "greysmall");
cd3.innerText = '';
nkr.appendChild(cd3);



var button1 = document.createElement('button');
//button1.setAttribute("onclick", "newTimer(25*60,'#DB8504')");
button1.onclick = function() {newTimer(25*60,'#DB8504');};
button1.setAttribute("class", "orangebutton");
button1.innerText = '25';
nkr.appendChild(button1);
var button2 = document.createElement('button');
//button2.setAttribute("onclick", "newTimer(5*60,'#AD7E0F')");
button2.onclick = function() {newTimer(5*60,'#AD7E0F');};
button2.setAttribute("class", "goldbutton");
button2.innerText = '5';
nkr.appendChild(button2);
var button3 = document.createElement('button');
//button3.setAttribute("onclick", "newTimer(60,'#A8A8A8')");
button3.onclick = function() {newTimer(60,'#BF9B3B');};
button3.setAttribute("class", "darkgoldbutton");
button3.innerText = '1';
nkr.appendChild(button3);

var button4 = document.createElement('button');
button4.setAttribute("class", "graybutton");
button4.innerText = '?';





var input1 = document.createElement('input');
input1.setAttribute("id", "inVal");
input1.setAttribute("type", "number");
input1.setAttribute("min", "0");
input1.innerText = '';
input1.onkeypress = function(event){
                if (event.keyCode == 13 || event.which == 13){
                    newTimer(60*document.getElementById("inVal").value,'#A8A8A8');
                    input1.value="";
                    input1.blur();
                }
            };
			
input1.onblur = function(event){
                input1.style.display = "none";
            };


button4.onclick = function() {input1.style.display = "inline-block"; input1.focus();};

nkr.appendChild(button4);
nkr.appendChild(input1);
var myProgress = document.createElement('div');
myProgress.setAttribute("id", "myProgress");
myProgress.innerText = '';
nkr.appendChild(myProgress);
var myBar = document.createElement('div');
myBar.setAttribute("id", "myBar");
myBar.innerText = '';
myProgress.appendChild(myBar);
bar = myBar;
var rem = document.createElement('div');
rem.setAttribute("id", "remaining");
rem.innerText = '';
nkr.appendChild(rem);
remaining = rem;

var br = document.createElement('br');
br.innerText = '';
nkr.appendChild(br);

setInterval(updateTimer, 100);

setInterval(showTime, 1000);
}






a=new AudioContext()
function beep(vol, freq, duration, delay){
  v=a.createOscillator()
  u=a.createGain()
  v.connect(u)
  v.frequency.value=freq
  v.type="square"
  u.connect(a.destination)
  u.gain.value=vol*0.01
  v.start(a.currentTime+delay*0.001)
  v.stop(a.currentTime+duration*0.001+delay*0.001)
}









var startTime = new Date();
var currentTime = new Date();
var timeDiff = (currentTime.getTime() - startTime.getTime());
var duration = 0;
var bar = document.getElementById("myBar");
var remaining = document.getElementById("remaining");
var rem = 0;
var mins = 0;
var secs = 0;
var secsS = "";
var width = 1;
var alarmDone = 1;



function newTimer(dur,col) {
	startTime = new Date();
    bar.style.backgroundColor = col;
    duration = dur;
	alarmDone = 0;
}


var newtime = "";

function updateTimer() {
	currentTime = new Date();
    timeDiff = (currentTime.getTime() - startTime.getTime());
    width = Math.min(timeDiff/(duration*10),100);
    bar.style.width = (100-width) + "%";
    rem = Math.max(Math.ceil(((duration*1000)-timeDiff)/1000),0); //Remaining time in secs rounded up.
    secs = rem % 60;
    if(secs<10){
    	secsS = "0" + secs;
    }else{
    	secsS = secs;
    }
    mins = Math.floor(rem/60);
	newTime = mins + ":" + secsS;
	if(remaining.innerHTML!=newTime){
		remaining.innerHTML = newTime;
	}
	
	if(rem==0&&alarmDone==0){
		alarmDone = 1;
		beep(50,700,200,400);
		beep(50,500,200,200);
		beep(50,300,200,0);
		beep(50,600,400,600);
		beep(50,500,400,600);
		beep(50,400,400,600);
		beep(50,500,150,1000);
		beep(50,400,150,1000);
		beep(50,300,150,1000);
		setTimeout(function() { alert('Timer Finished!'); }, 1500);
	}
}















function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var day = date.getDate();
    var session = "AM";
    
    
    var weekday=new Array();
    weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    var wkd = weekday[date.getDay()];
        
var month = new Array();
month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var mon = month[date.getMonth()];
        
        
    var n = "\n" + wkd + " | " + mon + " " + day;
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = m + " " + s;
	if(document.getElementById("hr").textContent != h){
		document.getElementById("hr").textContent = h;
	}
    //document.getElementById("hr").textContent = h;
	if(document.getElementById("min").textContent != m){
		document.getElementById("min").textContent = m;
	}
    //document.getElementById("min").textContent = m;
	if(document.getElementById("wk").textContent != n){
		document.getElementById("wk").textContent = n;
	}
    //document.getElementById("wk").textContent = n;
    
}

//Ctrl-F Selects Search Box
function KeyPress(e) {
      var evtobj = window.event? event : e
      if (evtobj.keyCode == 70 && evtobj.ctrlKey) document.getElementsByClassName("search-box")[0].focus();
}

//Need to wait until loaded to add the key capturing code for shortcuts
function captureKeys(){
	document.onkeydown = KeyPress;
}
setTimeout(captureKeys, 1000*5);








//Reload Image Regularly

function reloadBackground() {
document.getElementById("right-view").style.backgroundImage = "url('https://source.unsplash.com/random/440x860/?t="+new Date().getTime()+"')"
//document.getElementById("right-view").style.backgroundImage = "url('https://source.unsplash.com/random/440x860/?bonk')"
//document.getElementById("right-view").style.backgroundImage = "url('https://source.unsplash.com/random/440x860/')"
}
//Once Per 4 Hours
setInterval(reloadBackground,4*60*60*1000)





//Insert Frame into Bike Task
//bframe = document.querySelectorAll('a[href*="http://192.168.1.205:1880/live"]')[0].insertBefore(document.createElement("iframe"),null)
//bframe.setAttribute("src", "https://192.168.1.205:1880/live");
//bframe.style.width = "300px";
//bframe.style.height = "30px";


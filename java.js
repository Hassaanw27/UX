function myFunction(x, _this) {
  uncheckall(_this)
  if (_this.checked) {
    x.style.borderColor = 'rgba(255,0,0,1)';
    document.getElementById('maincontrol').style.borderColor = 'rgba(255, 0, 0, 1)';
    document.getElementById('temp').style.borderColor = 'rgba(255, 0, 0, 1)'; 
    document.getElementById('temp2').style.borderColor = 'rgba(255, 0, 0, 1)'; 
    document.getElementById('temp3').style.borderColor = 'rgba(255, 0, 0, 1)';
    var object = document.getElementById("svg");
    object.setAttribute("style", "stroke: rgba(255, 0, 0, 1);");
  } else {
    x.style.borderColor = 'rgba(255,0,0,0.2)';
  }
}

function anotherFunction(x, _this) {
  uncheckall(_this)
  if (_this.checked) {
    x.style.borderColor = 'rgba(0, 153, 51, 1)';
    document.getElementById('maincontrol').style.borderColor = 'rgba(0, 153, 51, 1)';
    document.getElementById('temp').style.borderColor = 'rgba(0, 153, 51, 1)';
    document.getElementById('temp2').style.borderColor = 'rgba(0, 153, 51, 1)';
    document.getElementById('temp3').style.borderColor = 'rgba(0, 153, 51, 1)';
    var object = document.getElementById("svg");
    object.setAttribute("style", "stroke: rgba(0, 153, 51, 1);");
  } else {
    x.style.borderColor = 'rgba(0, 153, 51, 0.2)';
  }
}

function athirdFunction(x, _this) {
  uncheckall(_this)
  if (_this.checked) {
    x.style.borderColor = 'rgba(0, 0, 255, 1)';
    //document.getElementById('winterpreset').checked = false
    document.getElementById('maincontrol').style.borderColor = 'rgba(0, 0, 255, 1)';
    document.getElementById('temp').style.borderColor = 'rgba(0, 0, 255, 1)';
    document.getElementById('temp2').style.borderColor = 'rgba(0, 0, 255, 1)';
    document.getElementById('temp3').style.borderColor = 'rgba(0, 0, 255, 1)';
    var object = document.getElementById("svg");
    object.setAttribute("style", "stroke: rgba(0, 0, 255, 1);");
  } else {
    x.style.borderColor = 'rgba(0, 0, 255, 0.2)';
  }
}

function afourthFunction(x, _this) {
  uncheckall(_this)
  if (_this.checked) {
    x.style.borderColor = 'rgba(220, 220, 0, 1)';
    document.getElementById('maincontrol').style.borderColor = 'rgba(220, 220, 0, 1)';
    document.getElementById('temp').style.borderColor = 'rgba(220, 220, 0, 1)';
    document.getElementById('temp2').style.borderColor = 'rgba(220, 220, 0, 1)';
    document.getElementById('temp3').style.borderColor = 'rgba(220, 220, 0, 1)';
      var object = document.getElementById("svg");
    object.setAttribute("style", "stroke: rgba(220, 220, 0, 1);");
  } else {
    x.style.borderColor = 'rgba(200, 200, 0, 0.2)';
  }
}

function uncheckall(_this) {
  var liste = [
    document.getElementById('nytkort'),
    document.getElementById('nytkort2'),
    document.getElementById('nytkort3'),
    document.getElementById('nytkort4')
  ]
  for (var i = 0; i < liste.length; i++) {
    liste[i].getElementsByTagName('input')[0].checked = false;
  }
  liste[0].style.borderColor = 'rgba(0, 153, 51, 0.2)';
  liste[1].style.borderColor = 'rgba(255, 0, 0, 0.2)';
  liste[2].style.borderColor = 'rgba(0, 0, 255, 0.2)';
  liste[3].style.borderColor = 'rgba(200, 200, 0, 0.2)';
  _this.checked = true
}

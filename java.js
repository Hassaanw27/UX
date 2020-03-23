function myFunction(x, _this) {
  if (_this.checked) {
    x.style.borderColor = 'rgba(255,0,0,1)';
  } else  {
    x.style.borderColor = 'rgba(255,0,0,0.2';
  }
}

function anotherFunction(x, _this) {
  if (_this.checked) {
    x.style.borderColor = 'rgba(0, 153, 51, 1)';
  } else  {
    x.style.borderColor = 'rgba(0, 153, 51, 0.2)';
  }
}

function athirdFunction(x, _this) {
  if (_this.checked) {
    x.style.borderColor = 'rgba(0, 0, 255, 1)';
    document.getElementById("checkbox").checked = false;
  } else  {
    x.style.borderColor = 'rgba(0, 0, 255, 0.2)';
  }

}

function cbChange(obj) {
    var cbs = document.getElementsByClassName("cb");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    obj.checked = true;
}

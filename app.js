

var pairOverlaps = function(tupA, tupB){
  if(tupB[0]<=tupA[0] && tupA[0]<=tupB[1]){return true;}
  if(tupB[0]<=tupA[1] && tupA[1]<=tupB[1]){return true;}
  return false;
};

var isolatedMeeting = function(tup, tupArr){
  for(var i=0; i < tupArr.length; ++i){
    if(pairOverlaps(tup,tupArr[i])){return false;}
  }
  return true;
};

var consolidatePair = function(tA,tB){
  return [Math.min(tA[0],tB[0]),Math.max(tA[1],tB[1])];
};

var consolidateMeetingInto = function(tup,tupArr){
  var ans = [];
  for(var i=0; i<tupArr.length; ++i){
    if(pairOverlaps(tup,tupArr[i])){ans.push(consolidatePair(tup,tupArr[i]))}
    else{ans.push(tupArr[i])}
  }
  return ans;
};

var tail = function(arr){
  var ans = [];
  for(var i=0; i < arr.length; ++i){
    ans[i] = arr[i];
  }
  ans.shift();
  return ans;
}

var pushFront = function(e,arr){
  var ans = [e];
  for(var i=0; i < arr.length; ++i){
    ans.push(arr[i]);
  }
  return ans;
}

var consolidateMeetings = function(tupArr){
  if(tupArr===[]){return [];}
  if(tupArr.length === 1){return tupArr;}
  if(isolatedMeeting(tupArr[0],tail(tupArr))){
    return pushFront(tupArr[0],consolidateMeetings(tail(tupArr)))
  }
  else{
    return consolidateMeetingInto(tupArr[0],consolidateMeetings(tail(tupArr)));
  }
}

var meetings = [[1,3],[2,5],[7,9]];

console.log(consolidateMeetings(meetings));
console.log(meetings);

////////////////////////////////////


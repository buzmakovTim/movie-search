"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7594],{7594:(O,c,e)=>{e.r(c),e.d(c,{createSwipeBackGesture:()=>_});var h=e(8193),E=e(7830);e(6256);const _=(a,p,D,M,m)=>{const r=a.ownerDocument.defaultView;return(0,E.createGesture)({el:a,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&p(),onStart:D,onMove:t=>{M(t.deltaX/r.innerWidth)},onEnd:t=>{const s=r.innerWidth,n=t.deltaX/s,o=t.velocityX,l=o>=0&&(o>.2||t.deltaX>s/2),u=(l?1-n:n)*s;let d=0;if(u>5){const C=u/Math.abs(o);d=Math.min(C,540)}m(l,n<=0?.01:(0,h.k)(0,n,.9999),d)}})}}}]);
(function(window){var svgSprite='<svg><symbol id="icon-houtui" viewBox="0 0 1024 1024"><path d="M377.052007 512l386.3073-388.203486L705.12909 65.290005 318.845327 453.493491l-58.20668 58.506509 58.20668 58.505485 386.283764 388.203486 58.230216-58.506509L377.052007 512zM377.052007 512"  ></path></symbol><symbol id="icon-qianjin" viewBox="0 0 1024 1024"><path d="M795.10335 512 281.764913 1024l-68.164691-68.116889 444.169919-444.169919-444.169919-444.122117 67.638876-67.591075L795.10335 512 795.10335 512z"  ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M422 122.217c87.184 0 166.131 35.353 223.269 92.492 57.139 57.138 92.49 136.084 92.49 223.269 0 70.326-23.004 135.288-61.89 187.769l227.948 210.366c15.666 14.471 16.659 39.108 2.2 54.791h-0.021c-14.462 15.683-39.104 16.667-54.783 2.205L622.432 681.961C567.913 726.805 498.093 753.737 422 753.737c-87.184 0-166.13-35.352-223.269-92.493-57.136-57.135-92.485-136.085-92.485-223.267 0-87.184 35.349-166.13 92.485-223.269C255.87 157.564 334.816 122.217 422 122.217z m184.814 130.946C559.526 205.877 494.177 176.616 422 176.616c-72.176 0-137.528 29.254-184.814 76.546-47.284 47.286-76.54 112.638-76.54 184.814 0 72.174 29.256 137.524 76.54 184.816 47.286 47.284 112.638 76.543 184.814 76.543 72.177 0 137.526-29.259 184.814-76.543 47.284-47.292 76.543-112.642 76.543-184.816 0-72.175-29.258-137.527-76.543-184.813z" fill="#999999" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
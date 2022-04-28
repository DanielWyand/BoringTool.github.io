// page dom 
var pages = document.querySelectorAll('.pages')

// thispage 
var thisPage = pages[0]
var pageSize = thisPage.size

// page layout in mm
var marginTop_mm = 20
var marginBottom_mm = 20
var marginLeft_mm = 20
var marginRight_mm = 20
var thisPageWidth_mm = thisPage.dataset.size == "A4" ? 210 : 215.9
var thisPageHeight_mm = thisPage.dataset.size == "A4" ? 297 : 279.4

// page layout in Px
var thisPageWidth = parseFloat(getComputedStyle(thisPage).width)
var thisPageHeight = parseFloat(getComputedStyle(thisPage).height)
var marginTop = marginTop_mm / thisPageWidth_mm *thisPageWidth
var marginBottom = marginBottom_mm / thisPageWidth_mm *thisPageWidth
var marginLeft = marginLeft_mm / thisPageWidth_mm *thisPageWidth
var marginRight = marginRight_mm / thisPageWidth_mm *thisPageWidth

//svg name space
var svgNS = 'http://www.w3.org/2000/svg'

//grid
var ContentInnerBorderWidth = thisPageWidth-marginLeft-marginRight-4
var ContentInnerBorderHeight = thisPageHeight-marginBottom-marginTop-4
// row y in px 
var y0 = marginTop + 2;
var y1 = y0 + ContentInnerBorderHeight*0.1
var y2 = y1 + ContentInnerBorderHeight*0.025
var y3 = y2 + ContentInnerBorderHeight*0.095
var y4 = y3 + ContentInnerBorderHeight*0.66
var y5 = y4 + ContentInnerBorderHeight*0.12
// col x in px 
var x0 = marginLeft + 2
var x1 = x0 + ContentInnerBorderWidth*0.09
var x2 = x1 + ContentInnerBorderWidth*0.09
var x3 = x2 + ContentInnerBorderWidth*0.10
var x4 = x3 + ContentInnerBorderWidth*0.22
var x5 = x4 + ContentInnerBorderWidth*0.06
var x6 = x5 + ContentInnerBorderWidth*0.14
var x7 = x6 + ContentInnerBorderWidth*0.06
var x8 = x7 + ContentInnerBorderWidth*0.06
var x9 = x8 + ContentInnerBorderWidth*0.18

// text-anchor: middle;  /* 文本水平居中 */
// dominant-baseline: middle; /* 文本垂直居中 */

//grid lines
var template = new(Object)
template.d_ContentOuterBorder = `M ${marginLeft} ${marginTop} L ${thisPageWidth-marginRight} ${marginTop} L ${thisPageWidth-marginRight} ${thisPageHeight-marginBottom} L ${marginLeft} ${thisPageHeight-marginBottom} Z`;
template.d_ContentInnerBorder = `M ${x0} ${y0} L ${x9} ${y0} L ${x9} ${y5} L ${x0} ${y5} Z`;
template.hGrid1 = `M ${x0} ${y1} L ${x9} ${y1}`;
template.hGrid2 = `M ${x0} ${y2} L ${x8} ${y2}`;
template.hGrid3 = `M ${x0} ${y3} L ${x9} ${y3}`;
template.hGrid4 = `M ${x0} ${y4} L ${x9} ${y4}`;
template.vGrid1 = `M ${x1} ${y2} L ${x1} ${y4}`;
template.vGrid2 = `M ${x2} ${y2} L ${x2} ${y4}`;
template.vGrid3 = `M ${x3} ${y0} L ${x3} ${y1}`;
template.vGrid4 = `M ${x4} ${y2} L ${x4} ${y4}`;
template.vGrid5 = `M ${x5} ${y1} L ${x5} ${y4}`;
template.vGrid6 = `M ${x6} ${y2} L ${x6} ${y4}`;
template.vGrid7 = `M ${x7} ${y2} L ${x7} ${y4}`;
template.vGrid8 = `M ${x8} ${y1} L ${x8} ${y4}`;

// create a page 
var svg=document.createElementNS(svgNS,'svg'); 	
svg.setAttribute("style",`width:${thisPageWidth};height:${thisPageHeight};`);
svg.setAttribute('xmlns', svgNS);
svg.setAttribute('version','1.1');
svg.setAttribute('width',`${thisPageWidth}px`);
svg.setAttribute('height',`${thisPageHeight}px`);
svg.setAttribute('viewBox',`0 0 ${thisPageWidth} ${thisPageHeight}` );

// insert ERM logo
var svg_ERMlogo=document.createElementNS(svgNS,'svg'); 
var logoPadding = 15;
svg_ERMlogo.setAttribute('x', `${marginLeft+2+logoPadding}` );
svg_ERMlogo.setAttribute('y', `${marginTop+2+logoPadding}` );
svg_ERMlogo.setAttribute('width', `${ContentInnerBorderHeight*0.1 - logoPadding*2}` );
svg_ERMlogo.setAttribute('height', `${ContentInnerBorderHeight*0.1 - logoPadding*2}` );
svg_ERMlogo.setAttribute('viewBox','10 0 52 70')
svg_ERMlogo.innerHTML = `<path id="svg_1" stroke-miterlimit="1" stroke-width="0.325" stroke="#636466" fill="none" d="m1.52337,10.2533l47.9,0l0,37.3l-47.9,0l0,-37.3zm47.9,33.3l-47.9,0m47.9,-4.2l-47.9,0m47.9,-8.1l-47.9,0m47.9,-4.2l-47.9,0m47.9,-4.3l-47.9,0m47.9,-4.2l-47.9,0m47.9,-4.2l-47.9,0m44.1,33.2l0,-37.3m-4.1,37.3l0,-37.3m-7.9,37.3l0,-37.3m-4,37.3l0,-37.3m-4,37.3l0,-37.3m-4.1,37.3l0,-37.3m-4,37.3l0,-37.3m-4,37.3l0,-37.3m-3.9,37.3l0,-37.3m-4,37.3l0,-37.3m43.8,25l-47.9,0m36,12.3l0,-37.3"/><path id="svg_2" fill="#636466" d="m1.02337,69.3533l0,-0.6c0.5,-0.2 0.8,-0.4 1.1,-0.7c0,-0.3 0.1,-0.8 0.1,-1.5c0.1,-1.3 0.1,-2.2 0.1,-2.8l0,-7.3c0,-0.9 -0.1,-1.4 -0.2,-1.6c0,-0.1 -0.1,-0.1 -0.2,-0.2c-0.2,-0.1 -0.7,-0.2 -1.6,-0.2l0,-1l2.6,0.1l5,0l2.3,-0.1l1.7,0c0.1,0 0.2,0 0.4,0.1l0.1,0.1l-0.2,1.6c0,0.1 0,0.7 -0.1,1.6l-0.9,0c0,-0.9 0,-1.4 -0.1,-1.6c0,-0.1 -0.1,-0.2 -0.1,-0.2c-0.1,-0.1 -0.4,-0.1 -0.9,-0.2c-0.7,-0.1 -1.5,-0.1 -2.2,-0.1c-0.7,0 -1.4,0 -2.1,0.1c-0.1,0.9 -0.2,1.9 -0.2,3.3l0,2.3c0.5,0 1.1,0.1 1.6,0.1l1.9,0c0.4,0 0.6,0 0.7,-0.1c0.1,0 0.1,-0.1 0.2,-0.2c0.1,-0.3 0.1,-0.8 0.2,-1.4l0.9,0l0,5l-1,0c0,-0.9 0,-1.4 -0.2,-1.6c-0.1,-0.2 -0.3,-0.2 -0.5,-0.3c-0.5,-0.1 -1.2,-0.1 -2,-0.1c-0.7,0 -1.3,0 -1.8,0.1l0,6.2c0.6,0 1.3,0.1 2.2,0.1c0.8,0 1.6,0 2.3,-0.1c0.7,-0.1 1.1,-0.1 1.3,-0.2c0.1,0 0.1,-0.1 0.1,-0.2c0.1,-0.4 0.3,-1 0.4,-2.1l0.9,0c-0.2,1.5 -0.3,2.7 -0.3,3.7l-0.1,-0.1c-0.5,0.1 -1.2,0.1 -2.1,0.1l-5.5,0c-0.2,-0.1 -1.4,-0.1 -3.8,0zm12.6,-15l0,-0.9l6,0c0.9,0 1.7,-0.1 2.3,-0.1c1.2,0 2.1,0.1 2.7,0.3c0.6,0.2 1.1,0.5 1.5,1.1c0.4,0.5 0.6,1.2 0.6,2c0,0.9 -0.3,1.7 -0.9,2.5c-0.6,0.7 -1.4,1.3 -2.6,1.8c0.2,0.3 0.4,0.7 0.6,1c0.2,0.4 0.4,0.6 0.4,0.6c0,0.1 0.1,0.1 0.1,0.2l1.8,2.6c0.5,0.7 0.7,1.1 0.8,1.1c0.6,0.8 0.9,1.2 1,1.3c0.1,0.1 0.3,0.2 0.4,0.3c0.1,0.1 0.4,0.1 0.7,0.1l0,0.9l-4.3,0c0,-0.2 -0.1,-0.4 -0.3,-0.6l-2.4,-4c-0.7,-1.1 -1.3,-2.1 -1.8,-2.7c-0.2,-0.3 -0.5,-0.6 -0.7,-0.7l0.1,-0.4c0.9,0 1.6,-0.1 2.1,-0.3c0.5,-0.2 0.9,-0.6 1.2,-1.2c0.3,-0.6 0.5,-1.2 0.5,-1.9s-0.2,-1.3 -0.5,-1.7c-0.3,-0.5 -0.7,-0.8 -1.2,-1c-0.3,-0.1 -0.9,-0.2 -1.7,-0.2c-0.4,0 -0.7,0 -1.1,0.1c0,0.3 0,0.9 -0.1,1.8c0,2.1 -0.1,3.6 -0.1,4.3l0,3.6c0,1.6 0.1,2.4 0.1,2.7c0,0.4 0.1,0.7 0.1,0.8c0,0.1 0.1,0.1 0.1,0.2c0.1,0 0.2,0.1 0.3,0.1c0.2,0 0.6,0.1 1.3,0.1l0,1c-1.3,0 -2.6,-0.1 -3.9,-0.1c-1.2,0 -2.3,0 -3.3,0.1l0,-1c0.9,0 1.4,-0.1 1.5,-0.1c0.1,0 0.2,-0.1 0.2,-0.1c0,-0.1 0.1,-0.2 0.1,-0.3c0.1,-0.3 0.1,-0.7 0.1,-1.3l0.1,-3.3l0,-6.6c0,-0.9 -0.1,-1.5 -0.1,-1.7c0,-0.1 -0.1,-0.1 -0.2,-0.2c0,0 -0.5,-0.1 -1.5,-0.2zm16.3,15l0,-1c0.9,-0.1 1.4,-0.1 1.5,-0.2c0.1,0 0.2,-0.1 0.2,-0.2c0.1,-0.1 0.1,-0.2 0.1,-0.4c0.1,-0.4 0.1,-1.4 0.1,-2.8l0,-7.7c0,-1.2 -0.1,-1.9 -0.1,-2.1c0,-0.1 -0.1,-0.2 -0.1,-0.2c-0.1,-0.1 -0.2,-0.1 -0.4,-0.1c-0.5,-0.1 -1,-0.1 -1.4,-0.1l0,-1c1.6,0 2.6,0.1 3.2,0.1c0.8,0 1.6,0 2.3,-0.1l1,2.2l0.8,1.7l3.6,7.4c0.8,-1.5 1.3,-2.6 1.7,-3.5l1.5,-3.1c0.8,-1.8 1.3,-2.8 1.5,-3.2c0.2,-0.4 0.4,-0.9 0.6,-1.5c1,0.1 1.6,0.1 1.9,0.1l3.4,-0.1l0,1l-0.2,0c-0.8,0 -1.2,0.1 -1.5,0.3c-0.2,0.2 -0.3,0.5 -0.3,1.1l0,1.4l-0.1,3.2l0,5.7c0.1,1 0.1,1.5 0.2,1.8c0,0.1 0.1,0.2 0.1,0.3c0.1,0.1 0.1,0.1 0.3,0.1c0.1,0 0.6,0.1 1.4,0.1l0,1l-3.6,-0.1l-3.5,0.1l0,-1c0.9,0 1.5,-0.1 1.6,-0.2c0.1,-0.1 0.2,-0.3 0.3,-0.5c0.1,-0.3 0.1,-1.2 0.1,-2.8l0,-8.3l-2.6,5.3l-1.1,2.5c-0.3,0.7 -0.8,1.7 -1.4,3c-0.4,0.8 -0.7,1.4 -0.9,1.9l-0.7,0c-0.3,-0.6 -0.7,-1.5 -1.2,-2.6c-0.9,-1.9 -1.5,-3.3 -2,-4.2l-3,-6.1l0,8.9c0,1.3 0.1,2 0.1,2.2c0,0.2 0.1,0.3 0.1,0.4c0.1,0.1 0.2,0.1 0.3,0.2c0.2,0.1 0.6,0.1 1.4,0.1l0,1c-0.8,0 -1.7,-0.1 -2.6,-0.1c-1.1,0 -2,0 -2.6,0.1zm3.7,-22.5l15,-15.5l-7.2,-7.6l-3.3,3.7l-0.6,-0.4l3.8,-4.1l8.1,8.3l-15.8,16.3l-32.3,-33l0.4,-0.4l31.9,32.7z"/><path id="svg_3" fill="#008061" d="m9.22337,36.4533c0.1,-0.1 -0.1,-0.3 -0.4,-0.2c-0.1,-0.5 -0.4,-0.4 -0.4,-0.6c-0.2,-0.1 0.3,-0.5 0.4,-0.4l-0.2,-0.2l0,-0.2l-0.2,0l-0.4,-0.4c-0.3,-0.2 -0.4,-0.3 -0.2,-0.4c0.2,-0.2 -0.2,-0.5 -0.4,-0.4c0,0.1 -0.2,0 -0.2,-0.2l-0.1,-0.3c-0.2,0.1 -0.3,0 -0.2,-0.2c0.1,-0.2 0,-0.2 -0.2,-0.2c-0.4,0 -0.4,-0.2 -0.2,-0.4c0.3,0 0.2,-0.1 0,-0.2l-0.4,0l0,-0.2l0.2,-0.4l-0.2,-0.4c-0.3,0.5 -0.4,-0.2 -0.2,-0.4l-0.2,-0.2c-0.1,0 -0.3,-0.4 -0.4,-0.8c-0.3,0 -0.3,-0.4 0,-0.4l0.2,0c0.5,0.1 0.3,-0.3 -0.2,-0.4c-0.1,-0.1 -0.1,0 -0.2,0l-0.2,-0.2l0,-0.2l-0.2,-0.2l0.2,-0.2l0.2,-0.2l-0.2,-0.4l-0.2,0c-0.1,0 -0.1,-0.2 0,-0.4c-0.1,-0.1 -0.3,-0.2 -0.2,-0.2l0,-0.2l-0.4,-0.2l0,-0.6l-0.2,-0.2l0,-0.4l-0.2,-0.2c-0.4,0 -0.3,-0.1 0,-0.2c0,-0.1 -0.1,-0.2 -0.4,-0.2c-0.2,0 -0.3,-0.1 -0.4,-0.2c0.1,0 0.2,-0.1 0.2,-0.2c0.4,0 0.4,-0.2 0.2,-0.4l0,0.2c0.2,0 0.1,-0.2 0,-0.2l0,-0.2c-0.3,0.1 -0.3,-0.3 -0.2,-0.4c0.2,-0.2 0.2,-0.3 -0.2,-0.6l0,-0.4l-0.4,-0.2l0,-0.2l-0.2,-0.2l0.2,0c0.5,-0.1 0.2,-0.7 -0.2,-0.8l0.2,-0.2c0.3,0 0.3,-0.2 0.2,-0.4l0,-0.2l-0.2,-0.2c-0.2,0.1 -0.3,0 -0.2,-0.4c-0.1,0 -0.1,-0.1 0,-0.2c0.3,-0.3 0.2,-0.3 -0.2,-0.4c-0.5,0 -0.3,-0.4 0,-0.4c0.2,-0.1 0.3,-0.3 0,-0.4c-0.1,-0.1 -0.2,-0.3 -0.2,-0.4l-0.2,-0.2l0,-0.2l0.2,0c-0.1,-0.2 0,-0.4 0,-0.4c0.1,-0.3 0.1,-0.5 -0.2,-0.6l0,-0.2l0.2,0l-0.2,-0.2c-0.5,0.1 -0.4,-0.6 -0.4,-0.8c-0.1,-0.2 0,-0.4 0,-0.6l0,-2.1l-0.4,-0.2c0.1,-0.1 -0.1,-0.3 -0.2,-0.4l0,-0.2c0.2,-0.1 0.1,-0.5 0,-0.8l0.2,-0.4c0.4,0 0.1,-0.3 -0.2,-0.4l0,-0.2l0.2,-0.2c0.1,0 0.1,-0.1 0,-0.2l-0.2,-0.4l0,0.1c-0.2,-0.4 -0.1,-0.6 0,-0.8c0.1,0 0,-0.4 -0.2,-0.8l0,-0.2c-0.1,-0.2 -0.1,-0.3 0.2,-0.4c0.1,-0.1 0,-0.3 0,-0.6c-0.6,-0.4 -0.2,-0.4 0,-1l0,-0.6c-0.3,-0.3 -0.1,-0.6 0,-0.6l0.2,-0.2c-0.1,-0.1 -0.1,-0.2 0,-0.2l0,-0.4c-0.3,0.1 -0.2,-0.1 -0.2,-0.2c0.1,-0.2 0,-0.2 -0.2,-0.2l0,-0.2c0.1,0 0.2,-0.1 0.2,-0.2s0.1,-0.2 0.2,-0.2c-0.1,-0.1 -0.1,-0.3 0,-0.4l0,-0.4c-0.2,-0.1 -0.2,-0.4 0,-0.4c0,-0.1 0.1,-0.3 0.2,-0.4c-0.1,-0.1 -0.1,-0.2 0,-0.2c0.1,-0.3 0.2,-0.3 0.4,0l0,0.6c0.1,-0.1 0.1,0 0,0l0,0.4c0.2,0 0.2,0.2 0,0.4c0.1,0 0.1,0.1 0.2,0.2l0,0.4c0.1,0 0.1,0.2 0,0.4c0,0 0,0.1 0,0l0,2.3c0.1,0 0.1,0.1 0,0.2l0,0.4c0.2,-0.1 0.3,0.1 0.2,0.2c0,0.2 0,0.6 0.2,0.8c-0.1,0.3 -0.1,0.5 0,0.6c0,0.2 0.1,1.7 0.2,1.9c0.2,0 0.2,1 0,1.3c0.2,0.3 0.2,0.5 0.2,0.8c0,0.1 0.2,0.6 0.2,1l0,0.4c-0.1,0 0,0.2 0,0.4c0.1,-0.1 0.2,0 0.2,0.2l-0.2,0l0,0.2c0.3,0.1 0.3,0.8 0.2,1c0.3,0.1 0.5,1.2 0.4,1.3l0.2,0.4l-0.2,0l0,0.4c0.2,0.2 0.2,0.3 0.2,0.8c0.2,0.1 0.4,0.8 0.4,1.2c0.2,0.1 0.2,0.6 0.2,0.6l0,0.4c0,0.1 0.1,0.2 0.2,0.4c-0.1,0.2 0,0.2 0,0.4c0.1,0.3 0.1,0.4 0.2,0.6c0,0.1 0.3,0.8 0.4,1.2c0.1,0.2 0.2,0.5 0.2,0.8l0.2,0.5c-0.1,0.2 -0.1,0.2 0,0.2l0.1,0.3c0.1,-0.2 0.2,0.5 0.2,0.6c0.1,0.2 0.1,0.2 0.2,0.2c0.1,0.2 0.1,0.6 0,0.6l0,0.4c0.1,0.1 0.2,0.2 0.2,0.4l0,0.6c0.4,-0.2 0.6,0.4 0.6,1c0.2,0.1 0.3,0.1 0.4,0.2c-0.1,0.3 0,0.6 0,0.8c0.2,0.1 0.4,0.3 0.4,0.4c0,0.3 0.2,0.6 0.2,0.6c0.5,0.5 0.5,0.6 0.6,0.8c0.1,0.2 0.3,0.3 0.2,0.6c0.1,-0.1 0.2,0 0.2,0.2c0.3,0.2 0.3,0.3 0.2,0.6c-0.1,0 0,0.3 0.2,0.4c0.7,0.3 0.7,0.4 0.8,0.8l0,-0.2c0.2,0.3 1,1.2 1.3,1.7c0.3,0 0.3,0.2 0.2,0.4c0.2,-0.1 0.4,0.2 0.4,0.4c0.2,0 0.4,0.3 0.2,0.5l0.4,0.2l0.2,0.2l0,0.2c0,0.1 0.1,0.1 0.2,0.2c0.1,0 0.2,0.1 0.4,0l0,0.2c-0.2,0.2 0,0.4 0.2,0.4c0.2,0.1 0.3,0.3 0.4,0.6c0,0 0.2,0.1 0.2,0.4l0.6,0.4c0.4,-0.2 0.4,0.1 0.4,0.4l0.2,0.2l0.2,0.2l0.2,0.2l-0.1,0l0.2,0.2l0.2,0l0.2,0.2l0.4,0.2l0.2,0.2c0,0.2 0.1,0.4 0.2,0.3c0.1,0 0.3,0.2 0.4,0.2l0.2,0.2c0.1,0 0.4,0.1 0.6,0.2c0.1,0.2 0.3,0.3 0.6,0.4c0.2,0.2 0.9,0.6 1.3,1c0.1,0 0.1,0 0,0.2c1.3,0.1 1.3,0.7 1.3,1.2l0.4,0l0.2,-0.2c0.5,-0.3 0.8,0 1,0.2c0,0 0.2,0 0.2,0.2c0.1,0 0.1,0 0.2,0.2c0,0.1 0.3,0.2 0.4,0.2c0.1,-0.1 0.3,-0.1 0.4,0l0.4,0l0.4,0.2c0.1,-0.1 0.3,0 0.4,0c0.1,0.2 0.3,0.2 0.4,0c0.1,0.1 0.3,0.1 0.4,0.2l0.6,0.2l0.8,0c0.5,-0.1 1,0.2 1.2,0.2l0.2,0.2l0,-0.2l0.2,0l0,0.2l0.6,0l-0.2,0l0,-0.2l0.4,0l0,0.2l0.4,0c0.1,0.1 0.6,0 0.8,-0.2l1.2,0c0.1,0.1 0.9,0.1 1,0c0,0.1 0.1,0.2 0.2,0c0.2,0.1 1.1,0 1.2,0c0.2,0.1 0.2,0 0.4,-0.2c0.2,0 0.8,-0.2 1,-0.2c0.2,0.1 0.8,-0.1 0.8,-0.2c0.1,-0.1 0.4,-0.3 0.6,-0.4l0.2,0l0.2,-0.2l0.2,0c0.1,-0.1 0.1,-0.1 0.2,0c0,-0.2 0.2,-0.4 0.4,-0.2c0.1,0.1 0.1,0 0.2,-0.2c0.1,-0.3 0.5,-0.4 0.8,-0.4c0.1,0.1 0.2,0 0.4,-0.2c0,-0.1 0.4,-0.3 0.6,-0.2c0.1,-0.1 0.3,-0.2 0.4,-0.2c0.1,-0.2 0.1,-0.2 0.2,-0.2c0.1,-0.1 0.3,0 0.4,0c0.2,0 0.3,-0.1 0.2,-0.2c0.1,-0.2 0.4,-0.5 0.6,-0.4c0.2,0 0.7,-0.2 0.8,-0.6c0,-0.4 0.4,-0.6 0.6,-0.6c0.2,0.3 0.3,0 0.4,-0.4l0,-0.2c-0.1,0.1 0,0.1 0.2,0c0.3,0.2 0.4,0 0.4,-0.2c0.1,-0.5 0,-0.4 0.2,-0.6l0,-0.2l0.2,0l0,-0.2l0.2,0l0,-0.2l0.2,-0.2l0.2,-0.2l-0.4,0c0.1,-0.1 0.1,-0.1 0,0c0,-0.3 0.1,-0.4 0.2,-0.4s0.3,-0.1 0.2,-0.2c-0.3,-0.4 0,-0.5 0.2,-0.6c0.1,-0.2 0.2,-0.2 0,-0.4l0,-0.2l0.4,-0.2l0,-0.4s0,-0.2 0.2,-0.4c-0.1,0 0.1,-0.1 0.2,-0.2c-0.1,-0.3 -0.1,-0.4 0,-0.5c0,0 0.1,0 0,-0.2c0,-0.1 0.1,-0.3 0.2,-0.4c0.1,0 0.2,-0.2 0.2,-0.2c-0.2,-0.3 -0.1,-0.3 0,-0.4c0,0 0.1,-0.2 0,-0.4c0,0 0,-0.1 0.2,-0.2c-0.1,-0.1 0,-0.1 0,-0.2c-0.1,-0.3 -0.1,-0.9 0,-1.2c-0.1,-0.1 0,-0.1 0,-0.2c-0.4,-0.3 -0.3,-0.5 0,-0.6l0,-0.2c-0.2,-0.1 -0.1,-0.4 0,-0.4l0,-0.6c-0.2,-0.2 -0.1,-0.2 0,-0.2l0,-0.2c-0.2,-0.2 -0.2,-0.3 -0.2,-0.6c0.1,-0.1 0.1,-0.1 0,-0.4c-0.2,-0.2 -0.2,-0.2 0,-0.6c-0.2,-0.2 -0.2,-0.4 0,-0.6c0.1,-0.1 0.1,-0.1 0,-0.2l-0.4,-0.4c-0.1,-0.2 0,-0.3 -0.2,-0.4c-0.1,0 -0.2,-0.1 -0.2,-0.2c-0.3,-0.1 -0.2,-0.5 -0.2,-0.6l-0.2,-0.2c-0.4,-0.3 -0.2,-0.5 0,-0.6c0.4,-0.3 0,-0.5 -0.4,-0.4c-0.2,0.5 -0.3,0.4 -0.4,0.2c-0.2,0 -0.3,-0.1 -0.4,-0.2c0.1,-0.1 0.1,-0.1 0,-0.2c0.1,-0.1 0.1,-0.1 0,-0.2c-0.2,0.1 -0.4,0 -0.6,-0.2c0,0 0,-0.1 -0.2,-0.2c-0.1,0.1 -0.6,0 -0.8,-0.2c-0.2,0 -0.3,0 -0.4,-0.4c-0.1,0 -0.1,-0.2 -0.2,-0.2l-0.2,-0.2l-0.1,0.4c-0.1,0 -0.4,-0.1 -0.4,-0.2c0,-0.2 -0.2,-0.2 -0.2,0c-0.1,0 -0.7,0.3 -1.2,0.3l-0.1,-0.1c-0.3,0 -1,0.4 -1.2,0.8l-0.3,0.2c0,0.3 -0.1,0.4 -0.2,0.4c-0.3,0.1 -0.4,0.3 -0.2,0.4l-0.2,0.2l0,0.2l-0.2,0.2c-0.1,0.4 0,0.6 0.2,0.6l0.2,0l0.2,0.2c-0.1,-0.1 0.2,-0.2 0.4,-0.2c0.1,-0.2 0.4,-0.3 0.8,-0.2c0.4,-0.6 0.8,-0.3 0.8,0c0.1,0.2 0.6,0.4 0.8,0.4c0.2,-0.2 0.4,0.2 0.2,0.4l0,0.2l0.2,0.2l0,0.2l0.4,0c0.1,0 0.1,0.3 -0.2,0.3l-0.2,0.2c-0.2,0.3 0.1,0.3 0.2,0.2c0.3,-0.1 0.3,0.3 0.2,0.8l0,0.2l0.2,0.2c0.1,0.2 0.1,0.3 0,0.4c-0.2,0 -0.5,0.2 -0.6,0c-0.2,0 -0.3,0 -0.4,-0.2l-0.2,0.4l-0.6,0l-0.3,0.1c-0.2,0.3 -0.3,0.3 -0.4,0.2c-0.1,0 -0.2,0.1 -0.4,0.4c-0.2,0.1 -0.4,0.1 -0.4,0c0.1,-0.3 -0.1,-0.5 -0.2,-0.4l-0.2,0.2l-0.2,0l0,0.2l-0.2,0c-0.5,-0.2 -0.3,-0.2 0,-0.4l0.2,0.2l0.2,-0.2l0,-0.6l-0.2,-0.2c-0.2,0.1 -0.3,0 -0.2,-0.2c-0.1,-0.1 -0.4,-0.1 -0.4,0l0,0.4c0,0.1 -0.2,0.2 -0.2,-0.2l-0.4,0c-0.4,0.2 -0.5,-0.1 -0.4,-0.4c0.1,0 0.1,-0.1 -0.2,-0.2l-0.2,-0.2c0.1,0 0,-0.1 -0.2,-0.2c-0.1,0.1 -0.1,0.1 -0.2,0c-0.3,-0.2 -0.4,-0.3 -0.2,-0.4c0.2,-0.2 0.1,-0.3 -0.2,-0.4l0,-0.4c-0.3,-0.4 0.1,-0.6 0.2,-0.4c0.6,-0.2 0.3,-0.5 0,-0.4c0,0.1 -0.1,0.1 -0.3,0c-0.2,-0.4 -0.1,-0.6 0.2,-0.8l0,-0.2c-0.4,-0.1 -0.2,-0.3 -0.2,-0.4l0.2,-0.2l0.2,-0.2c0.3,0 0.2,-0.2 0,-0.4c-0.2,0.2 -0.2,-0.1 -0.2,-0.2l0,-0.4c0.1,0 0.1,-0.1 0.2,-0.2c-0.1,0 0,-0.2 0,-0.4c0.3,0 0.5,-0.2 0.4,-0.2l0,-0.2c0.3,-0.2 0.4,-0.5 0.2,-0.6c0.1,-0.1 0.3,-0.4 0.4,-0.4c0.1,0 0.2,-0.1 0.2,-0.2c0.2,-0.1 0.2,-0.3 0.4,-0.4c0.1,0 0.3,-0.1 0.4,-0.2l0.4,-0.6c0,0.1 0.2,0 0.4,-0.2l0.2,0c0.6,0.1 0.6,0 0.6,-0.2c-0.2,-0.1 0,0 0.2,0l0.4,0c0.1,0.2 0.4,0.1 0.4,0l0.2,-0.4l0.2,0l0,0.4l0.4,-0.2l0.4,0c0.2,0.1 0.9,0.2 1.2,0.4c0.3,0.1 0.5,0.1 0.6,0.2l0.2,0c0.3,0 0.5,0.2 0.8,0.4l0,0.2l0.4,0c0.1,0 0.5,0.1 0.8,0.6l0.2,0.2l0.4,0.4l0.4,0.2l0,0.2l0.4,0.4l-0.4,0l-0.2,-0.4c-0.1,-0.1 -0.2,-0.3 -0.6,-0.2c-0.1,-0.2 -0.3,0.2 -0.2,0.2c0.2,0 0.2,0.2 0.2,0.2c-0.1,0.1 -0.2,0.3 0.2,0.2c0.4,-0.1 0.4,0 0.4,0.2c-0.2,0.3 0.3,0.3 0.6,0.2c1.2,0.3 1.1,0.5 1.2,0.7c-0.3,0 -0.4,0.3 -0.2,0.4c0.3,0.1 0.2,0.4 0,0.4c-0.1,-0.1 -0.2,0 0,0.2c-0.1,0.1 0,0.2 0,0.2l0.2,0c-0.1,0 0,0 0,0c-0.1,0.2 0,0.3 0.2,0.4c0.3,0 0.3,0.3 0.2,0.6c-0.2,0 0,0.3 0.2,0.2c0.3,0 0.4,0.1 0.4,0.2c0.3,0.1 0.2,0.3 0,0.4l0,0.5c0.1,0.1 0.5,0.3 0.4,0.6c0.2,0.1 0.2,0.2 0,0.2c0.2,0.1 0.2,0.4 0,0.4c0.3,0.1 0.2,0.4 0,0.4c0.1,0 0.1,0.4 0,0.4c0.2,0.1 0.2,0.2 0.2,0.2c-0.1,0.1 -0.1,0.4 -0.2,0.4c0.2,0.1 0.4,0.2 0.4,0.4c0.1,0.1 0.1,0.2 0,0.2s-0.2,0.2 -0.2,0.4c-0.1,0 -0.1,0.6 0,0.7l0,0.6l-0.7,0.3l0.2,0l0,0.2l-0.2,0l0,0.4c0.2,0.1 0.1,0.5 0,0.6l0,0.6c0.1,0 0,0.5 -0.2,0.6c0,0 -0.1,0.3 -0.2,0.4c0.1,0.2 0.1,0.5 -0.2,0.8c-0.1,0 -0.1,0 0,0.2c0.1,0.1 0.1,0.2 0,0.4l0,0.4c0,0.1 -0.1,0.2 -0.4,0.2l0,0.2c0,0.1 0,0.3 -0.2,0.2c0,0.4 -0.2,0.3 -0.4,0.2l0,-0.2c-0.6,0.1 -0.4,0.6 -0.2,0.4c0.2,-0.1 0.3,0 0.4,0.2l-0.2,0l0,0.4c0,-0.1 -0.2,0.1 -0.2,0.2c0.1,0.2 0,0.5 -0.2,0.6c-0.4,0 -0.5,0.5 -0.4,0.6c-0.1,0.2 -0.3,0.5 -0.4,0.4c0,0 -0.2,0.1 -0.2,0.4l-0.6,0.4l0,0.4c0.2,0.4 -0.1,0.6 -0.4,0.6c0,0.1 0,0.4 -0.2,0.4c-0.2,0.1 -0.3,0.3 -0.4,0.4c0.1,0.1 0.1,0.1 0,0.2c0,0.1 -0.1,0.1 -0.2,0.2l0,0.2l-0.2,0c0.1,-0.1 -0.2,0 -0.2,0.2s-0.2,0.4 -0.2,0.4c-0.1,0 -0.2,0 -0.2,0.2c-0.1,0.2 -0.2,0.1 -0.4,0.2c-0.4,-0.2 -0.5,-0.1 -0.4,0.2c-0.1,0 -0.1,0 0,0.2c-0.1,0.2 -0.3,0.3 -0.4,0.2c-0.2,0.1 -0.3,0.1 -0.4,0.2c0,0.2 0,0.3 -0.2,0.2c-0.4,0.1 -0.6,0.1 -0.8,0.2c0.1,0.3 -0.1,0.4 -0.6,0.4l-0.2,0.2l-0.2,0c0.2,0.2 0.1,0.4 -0.2,0.4l-0.2,0l0,0.2l-0.4,0l0,-0.3l-0.2,0l-0.4,0.4l-0.2,-0.2l-0.6,0c-0.2,-0.2 -0.5,0 -0.6,0.2l0.2,0.4l0.2,0l-0.8,0.2l-0.2,0.2l-0.2,-0.2l-0.4,0c0,-0.1 -0.1,-0.1 -0.2,0.2l-0.2,0l0,0.3l-0.4,0l0,-0.2c0.1,0.1 0.2,-0.1 0.2,-0.2l0,-0.4c0.1,-0.2 0.1,-0.2 0.2,-0.2c0.2,-0.1 0.3,-0.3 0,-0.4l0,-0.2c0.2,-0.1 0.2,-0.3 -0.2,-0.4l-0.2,0l-0.2,0.2l0,1c-0.1,-0.1 -0.2,0 -0.2,0.2l-0.2,0l0.2,0.2l0,0.2c0.3,0 0.2,0.2 0,0.4l-0.2,0l-0.2,-0.2l-0.2,0.2c-0.1,-0.4 -0.5,-0.4 -0.6,-0.2l-0.4,0c-0.1,-0.1 -0.2,-0.2 -0.4,0c-0.1,0.1 -0.3,0.1 -0.6,-0.2l0,-0.4c0.1,0 0.3,0.1 0.4,0.2c0.2,-0.2 0.2,-0.3 0,-0.4l-0.4,0c0,0.2 -0.3,0.4 -0.6,0.4l-0.3,0.2c-0.4,-0.1 -0.2,0.1 -0.2,0.4l0.2,0l0,0.4l-0.4,0c-0.1,-0.1 -0.1,-0.4 -0.2,-0.4c-0.1,-0.5 -0.4,-0.3 -0.3,0c0,0.7 -0.3,0.5 -0.6,0l-0.6,0c0.1,-0.4 -0.2,-0.3 -0.4,-0.2c-0.2,-0.1 -0.3,0 -0.4,0.2c0,0.4 -0.2,0.3 -0.2,0c-0.1,-0.3 -0.3,-0.2 -0.4,0l-0.2,-0.2l-0.2,0.2l-0.2,-0.2l-0.2,0c-0.1,-0.2 -0.2,-0.2 -0.4,0c-0.1,0.3 -0.2,0.2 -0.2,-0.2c0,-0.2 0,-0.2 -0.4,-0.2c-0.3,-0.2 -0.6,-0.1 -0.8,0c-0.3,0 -0.2,0.1 0,0.2c0.6,0 0.2,0.4 0,0.2c-0.1,-0.1 -0.1,-0.2 -0.2,-0.2l0,-0.2c-0.2,-0.2 -0.1,-0.4 0,-0.4c0,-0.2 0.2,-0.3 0.4,-0.4c-0.1,-0.6 -0.6,-0.2 -1,0.4c-0.2,0 -0.5,0.4 -1,0.2c-0.1,-0.1 -0.1,-0.2 -0.2,-0.2c0.1,-0.2 0.2,-0.3 0.2,-0.2c0.1,-0.2 0.2,-0.4 -0.2,-0.4l0,-0.2s-0.1,-0.1 -0.2,0c-0.1,0.2 -0.2,0.1 -0.4,0c0.1,-0.2 0,-0.3 -0.2,-0.2l0,0.2l-0.6,0l-0.2,-0.2c-0.1,0 -0.2,0 -0.4,0.2c-0.3,0.1 -0.6,0.1 -0.6,-0.2c-0.2,-0.2 -0.6,-0.4 -1,-0.4l-0.4,-0.2c0,0.1 -0.1,0 -0.2,0c0,-0.2 0.1,-0.3 0.2,-0.4l0,-0.2c-0.2,-0.5 0.4,-0.5 0.6,-0.4l0.4,0l0,-0.2l-0.2,0c0.2,-0.2 -0.1,-0.3 -0.2,-0.2c-0.2,0.1 -0.3,0.2 -0.6,0c-0.1,0 -0.2,-0.1 -0.2,-0.2c0.1,-0.1 0.1,-0.2 0.2,-0.2l0,-0.2c0,-0.5 -0.3,-0.3 -0.2,0l-0.2,0l-0.2,0.2c-0.2,0 -0.3,0.1 -0.4,0.2c0,0 0.1,0.2 0.2,0.2c0.3,-0.1 0.4,-0.1 0.6,0l0.4,0.2l-0.2,0.3l-0.2,0.2c0,-0.3 -0.4,-0.1 -0.4,0.2c0.4,0.4 0.1,0.4 -0.2,0.2c-0.9,-0.1 -0.9,-0.4 -0.8,-1.2l-0.2,0l-0.4,-0.2l-0.3,-0.1c-0.1,0 -0.1,-0.2 0,-0.2l-0.2,0c-0.2,-0.1 -0.3,-0.3 -0.2,-0.2l-0.4,0l-0.2,-0.2c0.1,-0.1 0,-0.2 -0.2,-0.2c-0.2,-0.1 -0.6,0 -0.6,-0.2l0,-0.2c-0.1,-0.3 -0.4,-0.6 -0.6,-0.6c-0.4,0.1 -0.3,-0.1 -0.2,-0.2c0.1,-0.2 -0.1,-0.7 -0.4,-0.8l-0.2,0l-0.4,-0.6l-0.8,0l-0.2,-0.4l0.2,-0.2l0.6,0l0,0.4l0.2,0l0.2,0.2c0.6,0 0.5,-0.2 0.2,-0.4l-0.4,-0.2c-0.4,-0.7 -1,-0.3 -1,0l-0.4,0l0.2,-0.2l-0.2,-0.2l-0.4,0l-0.2,-0.2l0.2,-0.2c0.4,-0.2 0.4,-0.4 0.2,-0.4l-0.4,-0.2c0,-0.1 0,-0.1 -0.2,-0.2c0.4,-0.3 0.3,-0.5 0,-0.6l-0.2,-0.4l-0.2,0l-0.2,0.2l-0.2,-0.2l-0.4,0l0.2,-0.2l0.4,0c0.5,0 0.3,-0.3 0,-0.4l-0.1,0l0,-0.2l0.2,0c0.2,-0.2 -0.1,-0.4 -0.4,-0.2l-0.2,0.2l-0.2,0.2c0,0.5 0,0.5 -0.4,0c-0.1,-0.2 -0.1,-0.2 0,-0.2c-0.1,0.1 -0.2,0 -0.2,-0.3zm28.3,8.1zm-34.5,-22.9c0,0.4 0.2,0.2 0.2,0c0.2,-0.1 0,-0.1 -0.2,0zm1.2,2.9c0,0.3 0.1,0.2 0.2,0c0,-0.1 -0.2,-0.2 -0.2,0zm-0.2,0c-0.5,0 -0.3,0.2 0,0.4c0.2,-0.2 0.1,-0.4 0,-0.4zm0.4,0.7l0,0.4l0.2,0c0.3,-0.2 0.1,-0.4 0,-0.4l-0.2,0zm2.1,4.6s-0.1,-0.1 -0.2,0c-0.2,0.1 0,0.3 0.2,0.2c0.1,0.1 0.2,0 0,-0.2zm0.4,1.4l-0.2,0.2l0.4,0c0.1,0 0.1,-0.3 -0.2,-0.2zm0.4,1.5c0.1,0.1 0.2,0 0.2,0c0.1,-0.2 0,-0.3 0,-0.2c-0.3,0 -0.4,0 -0.2,0.2zm2.3,2.5c-0.1,-0.3 -0.3,-0.2 -0.4,0c0.3,0.3 0.3,0.2 0.4,0zm0.4,-0.2l-0.2,0c-0.1,0.5 0.3,0.3 0.2,0zm0.3,0.1l-0.2,0c0.2,0.3 0.5,0.2 0.2,0zm-0.3,0.7l0,0.2l0.2,0c0.1,0 0.2,-0.2 0.2,-0.4c-0.1,-0.3 -0.4,-0.1 -0.4,0l0,0.2zm1.5,1c-0.1,-0.2 -0.3,-0.2 -0.4,0c0,0.5 0.3,0.3 0.4,0zm0.4,1.5c0,0.3 0.3,0.3 0.4,0c-0.1,-0.2 -0.3,-0.2 -0.4,0zm2.9,1.9c0,0.1 0.1,0.2 0.2,0l-0.2,0zm-0.2,1.4c0,0.2 0.1,0.2 0.2,0c-0.1,-0.1 -0.2,-0.1 -0.2,0zm1.5,0.4c-0.1,-0.1 -0.2,0 -0.2,0c0.3,0.3 0.3,0 0.2,0zm0.4,0.5l0.2,-0.2c0.2,-0.4 0,-0.4 -0.2,-0.2c-0.1,-0.2 -0.3,0.1 -0.2,0.2l0.2,0.2zm1.6,1.4c-0.2,0 0,0.2 0.2,0.2l0.2,0l0,-0.2c0.1,-0.1 0.2,-0.1 0.2,-0.4c0,-0.2 -0.4,-0.2 -0.4,0c-0.1,0.1 -0.2,0.3 -0.2,0.4zm2.9,0c0,-0.2 -0.3,-0.2 -0.4,0c0.1,0.3 0.4,0.2 0.4,0zm-1.2,1.9c0,0.2 0.3,0.1 0.4,0c-0.1,-0.3 -0.4,-0.3 -0.4,0zm2.1,-0.6s0.1,0 0,0c0.1,0.2 0,0.2 0,0zm0.6,0.2l0,-0.2l-0.2,0.2l0.2,0zm-0.6,0.8c0.5,0.2 0.6,0 0.6,-0.4c-0.1,-0.1 -0.4,-0.2 -0.6,0c-0.2,0.2 -0.2,0.3 0,0.4zm6.4,1.8l0.2,0c-0.2,-0.2 -0.2,-0.2 -0.2,0zm0.5,-0.5c0,0.3 0.2,0.2 0.2,0c0.1,-0.1 -0.2,0 -0.2,0zm0.8,0.4c0,-0.3 -0.2,-0.3 -0.2,0c0,0.4 0.3,0.4 0.2,0zm0.6,0.2c0.1,-0.1 -0.1,-0.1 -0.2,0c0.1,0.4 0.3,0.4 0.2,0zm7.3,-2.1l-0.2,0.2l0.2,0l0.2,0.4l0.2,0l0,-0.2l0.2,0.2c0.6,0 0.1,-0.3 -0.4,-0.4l0,-0.4c0.6,-0.6 0.2,-0.7 0,-0.6l-0.2,0.8zm1.5,0.2l0.2,0c-0.5,-0.2 -0.3,0.1 -0.2,0zm0.4,-0.9c-0.2,0 -0.2,0 -0.2,0.2l0.2,0l0,-0.2zm0.4,-0.1c0,0.2 0.1,0.1 0.2,0l-0.2,0zm1.9,-0.3c0.2,-0.1 0.2,-0.1 0.2,-0.2c-0.1,-0.3 -0.4,-0.2 -0.6,-0.2c-0.1,0.2 0,0.4 0.4,0.4zm-0.4,0.3c-0.2,0 -0.1,0.2 0,0.2l0,-0.2zm1,-0.7c-0.1,-0.1 -0.2,0 -0.2,0l0,0.2l0.2,0l0,0.2l0.2,0l0,-0.4l-0.2,0zm-0.2,-1.4c0,0.3 0.4,0.3 0.8,0.2c0.2,0.1 0.2,0.1 0.4,-0.2c0.1,-0.1 0.1,-0.3 -0.2,-0.2l-0.2,0l-0.2,-0.2l-0.2,0c-0.5,-0.3 -0.6,0.3 -0.4,0.4zm0.6,-0.7c-0.1,-0.1 -0.3,-0.1 -0.4,0c0.1,0.2 0.3,0.2 0.4,0zm2.3,-0.8c-0.7,0 -0.5,0.5 -0.2,0.6c0.5,-0.2 0.4,-0.6 0.2,-0.6zm-0.6,-0.4c0.2,0.1 0.2,0.2 0.4,0c0.3,0 0.3,0 0.2,-0.2c-0.1,-0.3 -0.3,-0.3 -0.4,-0.2c-0.2,0.3 -0.2,0.3 -0.2,0.4zm2.5,-5.2l0.2,0c0.2,0.1 0.4,0.1 0.4,0l0,-0.4l-0.2,-0.2c0,0.1 -0.4,0.1 -0.4,0l0,0.6zm1,0l0.2,0l-0.2,0zm-0.2,-0.4l0.4,0c-0.2,-0.4 -0.4,-0.2 -0.6,0l0.2,0zm0.6,-0.3c-0.1,0 -0.2,0 -0.2,0.2c0.2,0.4 0.7,0.2 0.8,0c-0.1,-0.3 -0.2,-0.5 -0.2,-0.6c0.1,-0.2 0.1,-0.3 -0.2,-0.6c-0.3,-0.1 -0.5,0.2 -0.2,0.4l0,0.6zm-7.9,-8.3c-0.2,0 -0.4,0.1 -0.2,0.2c0.2,0.3 0.3,0 0.2,-0.2zm0.2,0.9c0,-0.1 0,-0.2 -0.2,-0.2l-0.2,0.4c0.1,0.5 0.5,0.1 0.2,-0.2l0.2,0zm0.5,0.6c-0.2,0 -0.1,0.3 0,0.4l0.2,0c0.1,0 0.1,-0.4 0,-0.4c0.1,-0.1 -0.2,0 -0.2,0zm-1.5,-1c-0.2,0 -0.2,0.1 0,0.2l0,-0.2zm-0.6,0.2l0.2,0l0,-0.2c-0.1,-0.1 -0.2,0.1 -0.2,0.2zm0,-0.9l-0.2,-0.2c-0.1,-0.1 -0.3,0 -0.2,0.2l0.4,0zm-1.7,0.9c-0.1,0 -0.2,0.1 -0.2,0.2c0.2,0.1 0.3,0 0.2,-0.2zm-0.4,0c0.2,-0.1 0.1,-0.4 0,-0.4c-0.4,0 -0.4,0.2 0,0.4zm1.4,-5.5c0,0.1 -0.1,0.2 0,0zm1.5,-1.2c0,0.3 0.3,0.2 0.2,0c0.1,-0.4 -0.2,-0.4 -0.2,0zm1.2,1.4l0,-0.4c-0.2,-0.1 -0.2,0.2 0,0.4zm2.8,0.9c-0.4,-0.2 -0.5,0.2 -0.2,0.6c0.2,0.2 0.5,0.2 0.6,0c0.2,0.1 0.3,-0.4 0,-0.4c-0.1,-0.1 -0.2,-0.2 -0.4,-0.2zm5.2,4.2l-0.2,0c0.2,0.2 0.2,0 0.2,0zm-1.3,0.8c0.3,0.1 0.4,-0.1 0.4,-0.2c-0.2,-0.2 -0.5,-0.2 -0.6,0c0.1,0.2 0.1,0.2 0.2,0.2zm0.2,3.5c0.1,-0.1 0,-0.2 -0.2,0c0.1,0.1 0.2,0.1 0.2,0zm0.2,1.5c0,0.2 0.2,0.1 0.2,-0.2l-0.2,0c-0.1,-0.1 -0.2,0 0,0.2zm0.5,-0.2c0.1,0.2 0,0.2 0,0zm0.6,0c-0.1,0 -0.3,-0.1 -0.2,0.2c0.2,0.2 0.2,-0.1 0.2,-0.2z"/>`
svg.appendChild(svg_ERMlogo)

//draw grid
Object.keys(template).forEach(key => {
    let path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', template[key])
    path.setAttribute('stroke-width', 0.5)
    path.setAttribute('fill', 'none')
    path.setAttribute('stroke', 'black')
    svg.appendChild(path)
});



pages[0].appendChild(svg);
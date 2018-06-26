var style = 'style3';
var useBc = true;

var text = (useBc) ? 'bc. ' : '';
var rowWrapper = (useBc) ? '' : '@';

var cellWrapper = '|';
var txtBkg = '#';
var txtSpace = '+';
var txtUnknown = '_';

switch(style) {
	case 'lem':
		cellWrapper = '';
		txtBkg = '\xa0';
		txtSpace = '_';
		txtUnknown = '.';
		break;
	case 'simple':
		cellWrapper = '';
		txtBkg = '\xa0';
		txtSpace = '+';
		txtUnknown = '_';
		break;
	case 'style2':
		cellWrapper = '|';
		txtBkg = '\u25A0';
		txtSpace = '\xa0';
		txtUnknown = '_';
		break;
	case 'style3':
		cellWrapper = '|';
		txtBkg = '\u2591';
		txtSpace = '\xa0';
		txtUnknown = '_';
		break;
}


var rows = document.querySelectorAll('#cross_tbl tbody tr');
[].forEach.call(rows, function(row) {
	var cells = row.querySelectorAll('td');
	text += rowWrapper;
	[].forEach.call(cells, function(cell) {
		var isField = (cell.classList.contains('td_cell'));
		var opened = (isField) ? cell.querySelector('.open') : null;
		var num = (isField & cellWrapper.length) ? cell.querySelector('.num') : null;
		var cellText = (isField) ? txtUnknown : txtBkg;

		text += (num) ? num.innerText : cellWrapper;
		if (opened) {
			cellText = (opened.innerText) ? opened.innerText : txtSpace;
		}
		text += cellText;
	})
	text += cellWrapper;
	text += rowWrapper;
	text += '\n';
})
console.log(text);
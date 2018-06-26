var style = 'style2';
var useBc = true;
var useSuperscripts = true;

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
	case 'style2':
		cellWrapper = '|';
		txtBkg = '\u25A0';
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

		text += (num) ? (useSuperscripts) ? getSuperscript(num.innerText) : num.innerText : cellWrapper;
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


function getSuperscript(num) {
	var superscript = num;
	switch(num) {
		case '1':
			superscript = '\u00B9';
			break;
		case '2':
			superscript = '\u00B2';
			break;
		case '3':
			superscript = '\u00B3';
			break;
		case '4':
			superscript = '\u2074';
			break;
		case '5':
			superscript = '\u2075';
			break;
		case '6':
			superscript = '\u2076';
			break;
		case '7':
			superscript = '\u2077';
			break;
		case '8':
			superscript = '\u2078';
			break;
		case '9':
			superscript = '\u2079';
			break;
	}
	return superscript;
}
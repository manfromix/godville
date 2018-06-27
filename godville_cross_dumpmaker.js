(function (useBc=true) {
	var dump = (useBc) ? 'bc. ' : '';
	var rowWrapper = (useBc) ? '' : '@';

	var cellWrapper = '|';
	var txtBkg = '#';
	var txtSpace = '+';
	var txtUnknown = '_';
	var message = '';

	var rows = document.querySelectorAll('#cross_tbl tbody tr');
	if (!rows.length) {
		message = 'Кроссворд не найден';
	} else {
		[].forEach.call(rows, function(row) {
			var cells = row.querySelectorAll('td');
			dump += rowWrapper;
			[].forEach.call(cells, function(cell) {
				var isField = (cell.classList.contains('td_cell'));
				var opened = (isField) ? cell.querySelector('.open') : null;
				var num = (isField & cellWrapper.length) ? cell.querySelector('.num') : null;
				var cellText = (isField) ? txtUnknown : txtBkg;

				dump += (num) ? num.innerText : cellWrapper;
				if (opened) {
					cellText = (opened.innerText) ? opened.innerText : txtSpace;
				}
				dump += cellText;
			})
			dump += cellWrapper;
			dump += rowWrapper;
			dump += '\n';
		});
		if (typeof copy == 'function') {
			copy(dump);
			message = dump + '\n\n Дамп кроссворда скопирован в буфер обмена';
		} else {
			message = dump + '\n\n Выделите текст дампа кроссворда и скопируйте';
		}
	}
	alert(message);
})()
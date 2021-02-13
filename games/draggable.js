var z_index = 1;

function makeDraggable(item) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, moved = false;
	item.onmousedown = getItem;

	function getItem(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		item.style.zIndex = z_index++;
		document.onmousemove = dragItem;
		document.onmouseup = releaseItem;
		item.style.cursor = 'grabbing';
	}

	function dragItem(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		item.style.top = (item.offsetTop - pos2) + "px";
		item.style.left = (item.offsetLeft - pos1) + "px";
		moved = true;
	}

	function releaseItem() {
		if (moved == true) {
			var
			screen_width  = window.innerWidth,
			top_pos = item.offsetTop,
			top_position  = ((top_pos / screen_width)*100).toFixed(2),
			item_left = item.style.left,
			left_len  = item_left.length - 2,
			left_pos  = Number(item_left.substring(0, left_len)),
			left_position = ((left_pos / screen_width)*100).toFixed(2);
			
			item.style.top  = top_position + 'vw';
			item.style.left = left_position + 'vw';
			moved = false;
		}
		document.onmouseup = null;
		document.onmousemove = null;
		item.style.cursor = 'grab';
	}
}

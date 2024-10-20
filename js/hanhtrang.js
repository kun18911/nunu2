const gridDevil = document.querySelector(".gridDevil");
const addCellBtnDevil = document.getElementById("addCellBtnDevil");
// const removeCellBtn = document.getElementById("removeCellBtn");
const containerDevil2 = document.querySelector(".containerDevil2");
const containerDevil3 = document.querySelector(".containerDevil3");

// Tạo 15 ô ban đầu
let cellCount = 15;
function createCell(i) {
    const cell = document.createElement('div');
    cell.classList.add('cellDevil');
    cell.innerText = i;
    return cell;
}

function createGear() {
    gridDevil.innerHTML = ''
    for (let i = 1; i <= cellCount; i++) {
        gridDevil.appendChild(createCell(i));
    }
}

// Xử lý khi bấm nút "Xóa ô cuối"
// removeCellBtn.addEventListener("click", () => {
//     if (gridDevil.children.length > 1) {
//         gridDevil.removeChild(gridDevil.lastChild);
//         cellCount--;
//         checkScroll();
//     }
// });

// Xử lý khi bấm nút "Thêm ô"
addCellBtnDevil.addEventListener("click", () => {
    cellCount++;
    gridDevil.appendChild(createCell(cellCount));
    checkScroll();
});

// Kiểm tra nếu có nội dung bị ẩn và thêm shadow
function checkScroll() {
const scrollHeight = containerDevil2.scrollHeight;
const clientHeight = containerDevil2.clientHeight;
const scrollTop = containerDevil2.scrollTop;

// Nếu số ô nhỏ hơn hoặc bằng 25 thì không cần shadow
if (cellCount <= 25) {
containerDevil3.classList.remove('shadow-bottom');
} 
// Kiểm tra cuộn, và nếu gần cuối cùng, thì bỏ shadow
else if (scrollTop + clientHeight >= scrollHeight - 1) {
containerDevil3.classList.remove('shadow-bottom');
} 
// Nếu vẫn có không gian để cuộn, thì thêm shadow
else {
containerDevil3.classList.add('shadow-bottom');
}
}


// Theo dõi sự kiện cuộn (scroll) để bật/tắt shadow
containerDevil2.addEventListener('scroll', checkScroll);

// Kiểm tra ban đầu khi trang load
// checkScroll();
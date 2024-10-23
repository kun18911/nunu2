const gridDevil = document.querySelector(".gridDevil");
const addCellBtnDevil = document.getElementById("addCellBtnDevil");
// const removeCellBtn = document.getElementById("removeCellBtn");
const containerDevil2 = document.querySelector(".containerDevil2");
const containerDevil3 = document.querySelector(".containerDevil3");
var gearCharacter = [
    {
        name: 'Giáo',
        level: 5,
        size: 200,
        src: 'https://png.pngtree.com/png-clipart/20240111/original/pngtree-weapon-metal-sword-game-free-buckle-element-decorative-material-png-image_14079599.png',
        position: {top: 0, left: 0},
        dame: 0,
        hp: 0,
        armor: 0, type: "Vũ khí", Quantity: 1
    },
    {
        name: 'áo Lông Vũ',
        size: 200,
        level: 5,
        src: 'https://static.vecteezy.com/system/resources/thumbnails/031/789/735/small/snow-armor-game-ai-generated-free-png.png',
        position: {top: 0, left: 0},
        dame: 0,
        hp: 0,
        armor: 0, type: "Giáp", Quantity: 1
    },
    {
        name: 'bình Hồi hp nhỏ',
        src: 'https://w7.pngwing.com/pngs/703/499/png-transparent-vial-filled-with-red-liquid-illustration-potions-in-harry-potter-elixir-of-life-potion-miscellaneous-game-magic-thumbnail.png',
        position: {top: 0, left: 0},
        size: 200,
        hp: 10,
        type: "potion", Quantity: 1,
        type2: "hp"
    },
    {
        name: 'bình Hồi mana nhỏ',
        src: 'https://toppng.com/uploads/preview/mana-official-orcs-must-clip-art-royalty-free-library-potion-11562945566fwymq0sdh4.png',
        position: {top: 0, left: 0},
        size: 200,
        mana: 10,
        type: "potion", Quantity: 1,
        type2: "mana"
    }
]
// Tạo 15 ô ban đầu
let cellCount = 5;
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

document.addEventListener("keydown", function(event) {
    if (event.key === 'b') {
        // Kiểm tra xem còn ô trống trong hành trang hay không
        const emptyCells = document.querySelectorAll(".gridDevil .cellDevil:not(.occupied)");
        
        if (emptyCells.length > 0) {
            if (item.length > 0) {

                // Nếu còn chỗ trống, lấy phần tử đầu tiên từ item
                const newItem = item.shift(); // Lấy phần tử đầu tiên từ mảng item
    
                // Thêm phần tử vào mảng gearcharacter
                gearcharacter.push(newItem);
    
                // Lấy ô trống đầu tiên
                const cell = emptyCells[0];
    
                // Đánh dấu ô này là đã được sử dụng
                cell.classList.add('occupied');
                cell.dataset.num = gearcharacter.length-1
cell.addEventListener('click', () => showItemInfo(newItem, cell.dataset.num));

    
                // Thêm src hình ảnh của item vào ô
                cell.style.backgroundImage = `url(${newItem.src})`;
                cell.style.backgroundSize = `${newItem.size}px ${newItem.size}px`;
                cell.style.backgroundPosition = `${newItem.position.top}px ${newItem.position.left}px`;
            } else console.log("hết item")
        } else {
            // Nếu không còn chỗ trống
            console.log("Không còn chỗ trống trong hành trang");
        }
    }
});


var gearcharacter = []
var item = [ 
    {
        name: 'Giáo',
        level: 5,
        size: 200,
        src: 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true',
        position: {top: 0, left: 0},
        dame: 0,
        hp: 0,
        armor: 0, type: "Vũ khí", Quantity: 1
    },
    {
        name: 'áo Lông Vũ',
        size: 200,
        level: 5,
        src: 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true',
        position: {top: 0, left: 0},
        dame: 0,
        hp: 0,
        armor: 0, type: "Giáp", Quantity: 1
    },
    {
        name: 'bình Hồi hp nhỏ',
        src: 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true',
        position: {top: 0, left: 0},
        size: 200,
        hp: 10,
        type: "potion", Quantity: 1,
        type2: "hp"
    },
    {
        name: 'bình Hồi mana nhỏ',
        src: 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true',
        position: {top: 0, left: 0},
        size: 200,
        mana: 10,
        type: "potion", Quantity: 1,
        type2: "mana"
    }
]


const itemInfo = document.querySelector(".item-info");
const confirmBox = document.querySelector(".confirm-box");
let selectedItemIndex = null;
        // Hiển thị thông tin vật phẩm
        function showItemInfo(gear, index) {
            itemInfo.style.display = 'block';
            // itemInfo.style.top = `${index * 40}px`;  // Example position
            document.querySelector('.item-name').textContent = `Tên: ${gear.name}`;
            document.querySelector('.item-stats').textContent = gear.type === 'potion' ? `HP: ${gear.hp || ''}` : `Dame: ${gear.dame}, Armor: ${gear.armor}, HP: ${gear.hp}`;
            selectedItemIndex = index
        }

        // Xử lý khi bấm "Bỏ"
        document.querySelector('.remove-btn').addEventListener('click', () => {
            confirmBox.style.display = 'block';
            itemInfo.style.display = 'none';
        });

        // Xử lý khi bấm "Có"
        var gearNull = []
        document.querySelector('.confirm-btn').addEventListener('click', () => {
            const removedItem = gearcharacter.splice(selectedItemIndex, 1);  // Xóa vật phẩm
            item.push(removedItem);  // Thêm lại vào mảng item
            createGearCells();  // Cập nhật lại hành trang
            confirmBox.style.display = 'none';  // Ẩn bảng xác nhận
            itemInfo.style.display = 'none';  // Ẩn bảng thông tin
            
        });

        // Xử lý khi bấm "Không"
        document.querySelector('.cancel-btn').addEventListener('click', () => {
            confirmBox.style.display = 'none';
        });



        function createGearCells() {
            createGear()
            gearcharacter.forEach(i=>gearNull.push(i))

            const emptyCells = document.querySelectorAll(".gridDevil .cellDevil:not(.occupied)");
            var o = 0
            // Lặp qua các ô trống và item để thêm vật phẩm vào hành trang
            for (let i = 0; i < emptyCells.length; i++) {
                // Lấy ô trống hiện tại
                const cell = emptyCells[i];
                if (gearcharacter.length > 0) {
                    // Lấy vật phẩm đầu tiên từ mảng item
                    const newItem = gearcharacter.shift(); // Shift lấy phần tử đầu tiên và xóa nó khỏi mảng item
        
                    // Thêm vật phẩm vào mảng gearcharacter
                    // Đánh dấu ô là đã bị chiếm dụng
                    cell.classList.add('occupied');
                    cell.dataset.num = gearcharacter.length-1
                    cell.addEventListener('click', () => showItemInfo(newItem, cell.dataset.num));
                    // Thêm hình ảnh vào ô
                    cell.style.backgroundImage = `url(${newItem.src})`;
                    cell.style.backgroundSize = `${newItem.size}px ${newItem.size}px`;
                    cell.style.backgroundPosition = `${newItem.position.top}px ${newItem.position.left}px`;
                }
            }
            gearcharacter = gearNull 
            gearNull = []
        }

        // Xử lý khi bấm nút "Đóng"
document.querySelector('.close-btnn').addEventListener('click', () => {
    itemInfo.style.display = 'none';  // Ẩn bảng thông tin
});
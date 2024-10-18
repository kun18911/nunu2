// Nút mở/đóng bảng
const toggleMenuButton = document.querySelector('.btnToggleMenu');
const blackOverlay = document.getElementById('blackOverlay');
const menuContainer = document.querySelector('.menuContainer');
const menuBoardHero = document.getElementById('characterTableContainer');

var currentBoard = 0
function toggleMenu() {
    const isActive = menuContainer.classList.contains('none');
    if (isActive) {
        // Mở bảng và blackOverlay
        menuContainer.classList.remove('none');
        blackOverlay.classList.remove('none');
        currentBoard ='menu'
        setTimeout(() => {
            menuContainer.style.opacity = 1
            menuContainer.style.transform = 'scale(1)'
            blackOverlay.style.opacity = 1
            toggleMenuButton.textContent = 'Quay lại'
        }, 10);
    } else {
        if (currentBoard == 'menu') {
            // Đóng bảng và blackOverlay
            menuContainer.style.opacity = 0
            blackOverlay.style.opacity = 0
            toggleMenuButton.textContent = 'Tùy chọn' 
            setTimeout(() => { 
                blackOverlay.classList.add('none'); 
                menuContainer.classList.add('none') 
                menuContainer.style.transform = 'scale(0.8)'
            }, 300)
        } else if (currentBoard == "menuBoardHero") {
            console.log(isActive)
            currentBoard = 'menu'
            menuBoardHero.style.opacity = 0
            setTimeout(() => {
                menuBoardHero.classList.add('none'); 
                menuBoardHero.style.transform = 'translate(-50%, -50%) scale(0.8)'
            }, 300);
        }
    }
    // toggleMenuButton.textContent = isActive ? 'Quay lại':'Tùy chọn' 
}

// Ấn nút mở bảng
toggleMenuButton.addEventListener('click', toggleMenu);

// Ấn vào blackOverlay để đóng bảng
blackOverlay.addEventListener('click', toggleMenu);











 // Mảng danh sách tướng
 const characterListt = {
    character: [
        { name: "Nhân vật Ab", level: 5, tick: false, soulRock: 10, tile: false, star: 0, goal: 20 },
        { name: "Nhân vật B", level: 3, tick: false, soulRock: 5, tile: false, star: 0, goal: 20 },
        { name: "Nhân vật C", level: 10, tick: false, soulRock: 25, tile: true, star: 3, goal: 20 },
        { name: "Nhân vật D", level: 8, tick: false, soulRock: 30, tile: true, star: 4, goal: 20 },
        { name: "Nhân vật E", level: 3, tick: false, soulRock: 0, tile: false, star: 0, goal: 20 },
{ name: "Nhân vật F", level: 3, tick: false, soulRock: 0, tile: false, star: 0, goal: 20 },
{ name: "Nhân vật T", level: 3, tick: false, soulRock: 0, tile: false, star: 0, goal: 30 },
{ name: "Nhân vật D", level: 8, tick: true, soulRock: 30, tile: true, star: 4, goal: 20 },
        { name: "Nhân vật E", level: 3, tick: false, soulRock: 0, tile: false, star: 0, goal: 20 },
{ name: "Nhân vật F", level: 3, tick: false, soulRock: 0, tile: false, star: 0, goal: 20 },
{ name: "Nhân vật G", level: 3, tick: false, soulRock: 33, tile: false, star: 0, goal: 30 },
    ],
};



const popup = document.getElementById('popup');
const popupP = document.querySelector('#popup p');

var gold = 1000

// Hàm tạo bảng từ mảng tướng
function createTable() {
    const table = document.getElementById("characterTable");
    table.innerHTML = ''; // Reset bảng

    // Sắp xếp tướng
   const sortedCharacters = characterListt.character.sort((a, b) => {
// Tiêu chí 1: Cả hai tướng đều chưa triệu hồi
if (a.tile === false && b.tile === false) {
    return b.soulRock - a.soulRock;
}

// Tiêu chí 2: So sánh tướng chưa triệu hồi có soulRock >= goal đứng trước tướng đã triệu hồi
if (a.tile === false && a.soulRock >= a.goal && b.tile === true) {
    return -1; // Tướng a chưa triệu hồi nhưng có đủ soulRock, đứng trước tướng đã triệu hồi
}
if (b.tile === false && b.soulRock >= b.goal && a.tile === true) {
    return 1; // Tướng b chưa triệu hồi nhưng có đủ soulRock, đứng trước tướng đã triệu hồi
}

// Tiêu chí 3: Một tướng đã triệu hồi và một tướng chưa triệu hồi
if (a.tile !== b.tile) {
    return a.tile === true ? -1 : 1;
}

// Tiêu chí 4: So sánh cấp độ
if (a.level !== b.level) {
    return b.level - a.level;
}

// Tiêu chí 5: So sánh số sao
return b.star - a.star;
});


    // Tạo các hàng và ô trong bảng (mỗi hàng 2 ô)
    for (let i = 0; i < sortedCharacters.length; i += 2) {
        const row = table.insertRow();

        // Tạo ô đầu tiên
        createCharacterCell(row.insertCell(), sortedCharacters[i]);

        // Nếu còn tướng tiếp theo thì tạo ô thứ 2
        if (sortedCharacters[i + 1]) {
            createCharacterCell(row.insertCell(), sortedCharacters[i + 1]);
        } else {
            // Nếu không có tướng thứ 2, thêm một ô trống
            row.insertCell().innerHTML = '';
        }
    }
}

// Hàm tạo ô cho tướng
function createCharacterCell(cell, character) {
// Giới hạn tên hiển thị 8 ký tự
const displayName = character.name.length > 10 ? character.name.slice(0,10) + '...' : character.name;

if (!character.tile) {
    // Ô chưa triệu hồi (màu tím)
    cell.className = 'inactive';
    cell.innerHTML = `
    <div class="devilContainer">
        <div class="avatar"></div>
        <div>
        <strong title="${character.name}">${displayName}</strong><br> <!-- Dùng title để hiện tên đầy đủ khi hover -->
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${character.soulRock / character.goal * 100}%"></div>
            <div class="progress-text">${character.soulRock}/${character.goal}</div>
        </div>
    </div>
    `;
    if (character.soulRock >= character.goal) {
        cell.classList.add("flyBtnDevil")
    // soulRockCell.setAttribute("data-soulrock", character.soulRock);
    cell.addEventListener('click', () => summonCharacter(character))}
} else {
    // Ô đã triệu hồi (màu xanh), chia làm 2 cột
    cell.className = 'active';
    var classTick = "none"
    if (character.tick) classTick = ''
    cell.innerHTML = `
    <div class="devilContainer">
    <div class="avatar"></div>
    <div class="tickDevil ${classTick}"></div>
    <div>
            <div><strong title="${character.name}">${displayName}</strong></div> <!-- Dùng title để hiện tên đầy đủ khi hover -->
            <div class="level-star-container">
                <span class="level">Cấp ${character.level}</span>
                <span class="star">${'★'.repeat(character.star)}${'☆'.repeat(5 - character.star)}</span>
            </div>
        </div>
    </div>
    `;
}
}


// Hàm triệu hồi tướng
function summonCharacter(character) {
    var x = document.getElementById("confirmationDialogDevil")
    var xy = document.querySelector("#confirmationDialogDevil h2")
    const rule = {
        10: 1000, 30: 4000, 80: 10000, 
    } //  if (bangGia[soLuongHoa] !== undefined) {
    const rule2 = {
        10: 1, 30: 2, 80: 3, 
    }
    const cost = rule[character.goal]
    const cost2 = rule2[character.goal]
    x.classList.remove("none")
    setTimeout(()=> x.style.opacity = 1,10)
    
    xy.textContent =  `Bạn có muốn triệu hồi ${character.name} với 
    ${cost.toLocaleString('vi-VN')} vàng?`
   
    // ấn có
    document.getElementById('yesButtonDevil').addEventListener('click', yes)
    function yes() {
       x.classList.add("none") // Ẩn hộp thông báo
       if (gold >= cost) {
           gold -= cost; character.star = cost2
           character.soulRock = character.soulRock - character.goal
           character.tile = true; // Đánh dấu là đã triệu hồi

           popup.classList.remove('none');
           popup.style.opacity = 1
           popupP.style.color = 'green'
           x.style.opacity = 0

           // Sau 2 giây, làm mờ bảng
           setTimeout(() => {
           popup.style.opacity = 0
            //    cell.classList.remove("flyBtnDevil")
            createTable()
               // Sau khi bảng mờ hoàn toàn, ẩn bảng
               setTimeout(() => {
               popup.classList.add('none');
                   ; // Cập nhật bảng
               }, 300); // Khoảng 1 giây để hoàn tất hiệu ứng mờ
           }, 2000); // Đợi 2 giây trước khi bắt đầu làm mờ
           popupP.textContent = `${character.name} đã được triệu hồi thành công!`
       } else {
           popup.style.opacity = 1
           popup.classList.remove('none');
           popupP.style.color = 'red'
           x.style.opacity = 0


           // Sau 2 giây, làm mờ bảng
           setTimeout(() => {
           popup.style.opacity = 0
               // Sau khi bảng mờ hoàn toàn, ẩn bảng
               setTimeout(() => {
                   popup.classList.add('none');
               }, 300); // Khoảng 1 giây để hoàn tất hiệu ứng mờ
           }, 2000); // Đợi 2 giây trước khi bắt đầu làm mờ
           popupP.textContent = `Không đủ tiền để mua ${character.name}`
       }

       document.getElementById('noButtonDevil').removeEventListener('click', no)
       document.getElementById('yesButtonDevil').removeEventListener('click', yes)
   }

    // Xử lý sự kiện cho nút "Không"
    document.getElementById('noButtonDevil').addEventListener('click', no)
    function no() {
        x.style.opacity = 0
        setTimeout(() => {
            x.classList.add('none');
        }, 300);
        document.getElementById('noButtonDevil').removeEventListener('click', no)
        document.getElementById('yesButtonDevil').removeEventListener('click', yes)
    }
}


document.getElementById('menuItemHero').addEventListener('click', function() {
    menuBoardHero.classList.remove('none'); createTable();
    currentBoard = 'menuBoardHero'
    setTimeout(() => {
        menuBoardHero.style.opacity = 1
        menuBoardHero.style.transform = 'translate(-50%, -50%) scale(1)'
    }, 10);
})

// Tạo bảng khi load trang
// createTable();
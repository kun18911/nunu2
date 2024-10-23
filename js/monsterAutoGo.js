let isMovingMon = false; // Trạng thái chuyển động

// Hàm di chuyển hình vuông
function moveSquare() {
    const allMon = document.querySelectorAll(".enemy")
    const allMonMini = document.querySelectorAll(".enemyMini")

    allMon.forEach(i => {
        var loop, stepsRemain = 0, direct = 0
        loop = setInterval(function () {
            if (i.isGo == "end") { clearInterval(loop) }
            else if (i.isGo == true) {
                if (stepsRemain == -1) {
                    // direct = Math.floor(Math.random() * 4) + 1;
                    direct = Math.floor(Math.random() * 4) + 1;
                    stepsRemain = Math.floor(Math.random() * 4) + 15;
                }
                stepsRemain--
                if (moveCharacter2(i, direct)) { stepsRemain = -1 }
            }
        }, 40)
    })
}

// Xử lý khi nhấn nút
function mimi() {
    if (!isMovingMon) {
        // Bắt đầu di chuyển
        const allMon = document.querySelectorAll(".enemy")

        allMon.forEach(i => i.isGo = true)
        isMovingMon = true;
        moveSquare()
    } else {
        // Dừng di chuyển
        isMovingMon = false;
        const allMon = document.querySelectorAll(".enemy")

        allMon.forEach(i => i.isGo = 'end')
    }
}







// ------------------ go
// Lấy tất cả các vật cản có class "obstacle"
let moving2 = { left: false, right: false, up: false, down: false };
const speed2 = 2; // Điều chỉnh tốc độ

// Hàm di chuyển nhân vật
function moveCharacter2(mon, direction) {
    const container = document.querySelector('.map');
    const containCon = document.querySelector('.miniMapp');
    const character = mon
    const miniChar = document.querySelector(`.enemyMini${mon.dataset.codeEnemy}`)
    const characterRect = character.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();

    switch (direction) {
        case 4:
            if (characterRect.left > containerRect.left) {
                var x = character.offsetLeft - speed2
                character.style.left = x + 'px';
                miniChar.style.left = x / five + 'px';
            } else {
                // if (characterRect.left <= containerRect.left) {
                character.style.left = '2px';
                miniChar.style.left = 2 / five + 'px';
            }
            break;
        case 2:
            {
                if (characterRect.right < containerRect.right) {
                    var x = character.offsetLeft + speed2
                    character.style.left = x + 'px';
                    miniChar.style.left = x / five + 'px';

                }
                if (characterRect.right >= containerRect.right) {
                    var x = container.offsetWidth - character.offsetWidth - 4
                    character.style.left = x + 'px'
                    miniChar.style.left = x / five - 4 + 'px'
                }
                break;
            }
        case 1:
            if (characterRect.top > containerRect.top) {
                var x = character.offsetTop - speed2
                character.style.top = x + 'px';
                miniChar.style.top = x / five + 'px';
            }
            if (characterRect.top <= containerRect.top) {
                character.style.top = 2 + 'px';
                miniChar.style.top = 2 / five + 'px';
            }
            break;
        case 3:
            if (characterRect.bottom < containerRect.bottom) {
                var x = character.offsetTop + speed2
                character.style.top = x + 'px';
                miniChar.style.top = x / five + 'px';
            }
            if (characterRect.bottom >= containerRect.bottom) {
                var x = container.offsetHeight - character.offsetHeight - 4
                character.style.top = x + 'px'
                miniChar.style.top = x / five - 4 + 'px';
            }
            break;
    }
    if (checkCollision2(mon)) return true
}

function checkCollision2(mon) {
    const character = mon
    const characterRect = character.getBoundingClientRect();
    const obstacles = document.querySelectorAll('.obstacle');
    for (let obstacle of obstacles) {
        let obstacleRect = obstacle.getBoundingClientRect();

        // Kiểm tra va chạm
        if (!(characterRect.right < obstacleRect.left ||
            characterRect.left > obstacleRect.right ||
            characterRect.bottom < obstacleRect.top ||
            characterRect.top > obstacleRect.bottom)) {
            var y = mon.dataset.codeEnemy
            var miniChar = document.querySelector(`.enemyMini${y}`)

            // Nếu va chạm từ bên trái (cạnh phải của nhân vật chạm cạnh trái của vật thể)
            if (characterRect.right >= obstacleRect.left && characterRect.left < obstacleRect.left) {
                character.style.left = (obstacle.offsetLeft - character.offsetWidth - 2) + 'px';
                miniChar.style.left = obstacle.offsetLeft / five - miniChar.offsetWidth + 'px'

            }
            // Nếu va chạm từ bên phải (cạnh trái của nhân vật chạm cạnh phải của vật thể)
            else if (characterRect.left <= obstacleRect.right && characterRect.right > obstacleRect.right) {
                character.style.left = (obstacle.offsetLeft + obstacle.offsetWidth + 2) + 'px';
                miniChar.style.left = obstacle.offsetLeft / five + obstacle.offsetWidth / five + 'px'

            }
            // Nếu va chạm từ phía trên (cạnh dưới của nhân vật chạm cạnh trên của vật thể)
            if (characterRect.bottom >= obstacleRect.top && characterRect.top < obstacleRect.top) {
                character.style.top = (obstacle.offsetTop - character.offsetHeight - 2) + 'px';
                miniChar.style.top = obstacle.offsetTop / five - miniChar.offsetHeight + 'px'
            }
            // Nếu va chạm từ phía dưới (cạnh trên của nhân vật chạm cạnh dưới của vật thể)
            else if (characterRect.top <= obstacleRect.bottom && characterRect.bottom > obstacleRect.bottom) {
                character.style.top = (obstacle.offsetTop + obstacle.offsetHeight + 2) + 'px';
                miniChar.style.top = obstacle.offsetTop / five + obstacle.offsetHeight / five + 'px'
            }

            return true; // Nếu có va chạm, trả về true
        }
    }
    return false;
}


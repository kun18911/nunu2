
var board = [], hàng = 8, cột = 8, listOfArrays = []
var currTile = undefined, otherTile = undefined
var fiveBlock = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/bomb5.png?raw=true'
var blank = 'https://github.com/ImKennyYip/candy-crush/blob/master/images/blank.png?raw=true'
var normal_Class = ['gold', 'yingyang', 'heart', 'sword', 'water', 'soulRock']
var srcValue = []; function createTag(x) {return document.createElement(x)}
function getId(x) {return document.getElementById(x)}
function srcSymbol(x) {return x.dataset.symbolSSrc}

var meTurn = true, monTurn, starPoint = 0

// thắc mắc
{// ???  xóa bảng là xóa hết 81 ô ?
    // ??? cho outfocus là rem
    // ??? ví dụ chữ L là nó cộng 2 lượt
    // ??? cho ăn 3x là cộng lượt
    // ??? rớt cờ chứ T, nó tạo ra viên ngang và 3x
    //xử điểm giáp board
}
// 11.
function checkValid() {
    const checkMatch = (candy1, candy2, candy3) =>
        candy1.src === candy2.src && candy2.src === candy3.src && !candy1.src.includes('blank');

    // Kiểm tra hàng và cột
    for (let i = 0; i < hàng; i++) {
        for (let j = 0; j < cột; j++) {
            if (j < cột - 2 && checkMatch(board[i][j], board[i][j + 1], board[i][j + 2])) return true;
            if (i < hàng - 2 && checkMatch(board[i][j], board[i + 1][j], board[i + 2][j])) return true;
        }
    }

    return false;
}


// 16.
function làm_Tròn(number, decimalPlaces) {var factor = Math.pow(10, decimalPlaces); return Math.round(number * factor) / factor}

// 1. Bắt đầu: -----------------------------------------------------
    // if (window.innerWidth < 768) {
    //     // Thiết lập giá trị cho điện thoại
    //     a = window.innerWidth;
    //     b = window.innerHeight;
    // } else {
        // Thiết lập giá trị cho màn hình máy tính
        a = 320;
        b = 620;
    // }

function randomCandy() {
    return `ảnh/${normal_Class[Math.floor(Math.random() * normal_Class.length)]}.png`
}
var board_table = document.getElementById("board");
var startG = 0, click1 = undefined
var nammuoiW, nammuoiH
var offsetWidthTile, offsetHeightTile
function startGame() {
    document.getElementById("board").style.width = '95%'
    document.getElementById("board").style.height = document.getElementById("board").offsetWidth + 'px'
    var nammuoiW = (board_table.offsetWidth - 14) / cột
    var nammuoiH = (board_table.offsetHeight - 14)/ hàng 
    for (let r = 0; r < hàng; r++) {let row = [];
        for (let c = 0; c < cột; c++){let tile = createTile(r, c, row)}; board.push(row);
    }
    
    function createTile(r, c, row) {
        // --------------- tạo thẻ cha, ảnh 1, ảnh 2
        let tileDad = createTag("div"), tile = createTag("img") //y = createTag("img")
        tileDad.style.position = "absolute"
        tileDad.style.width = `${nammuoiW}px`
        tileDad.style.height = `${nammuoiH}px`

        tile.src = randomCandy(); tile.style.opacity = "1";
        tile.classList.add("fc", 'offBoom');
        tile.addEventListener("click", click_Curr); tile.id = r + "-" + c;
        tile.dataset.symbolClass = 'undefined'
        tileDad.id = "a" + r + "-" + c; row.push(tile); 
        // --------------- gắn thẻ cha, ảnh 1, ảnh 2 vào bảng 
        board_table.appendChild(tileDad).appendChild(tile);  //tileDad.appendChild(y);
        // ----------------------- 
        // console.log(board_table.offsetWidth, board_table.style.width)
        tile.style.width = `${nammuoiW}px`;
        tile.style.height = `${nammuoiH}px`;        
        tile.style.padding = '0px';
        tile.style.margin = '0px';
        return tile;
    }
    // function createTile(r, c, row) {
    //     tile.src = randomCandy(); 
    //     tile.style.opacity = "1"; tile.classList.add("fc", 'offBoom');
    //     tile.addEventListener("click", click_Curr); 
    //     board_table.appendChild(tileDad).appendChild(tile);
    //     tile.id = `${r}${c}`; tileDad.id = `a${r}${c}`; row.push(tile); 

    //     Object.assign(tileDad.style, {top:`${nammuoi * r}rem`,left: `${nammuoi * c}rem`, 
    //     position: "absolute"});  tileDad.dataset.symbolTop =`${nammuoi*r}rem`;return tile
    // }
    
    

    function createE(b) {
        // --------------- tạo thẻ cha, ảnh 1, ảnh 2
        const x = createTag("img"); box = createTag("div"); //y = createTag("img")
        x.id = `0-*${b}`; box.id = "a" + x.id
        Object.assign(box.style, {
            top: `-${nammuoiH}px`, left: `${nammuoiW * b}px`,
            position: 'absolute'
        });
        box.style.width = `${nammuoiW}px`;
        box.style.height = `${nammuoiH}px`
        x.dataset.symbolClass = 'undefined'
        // --------------- gắn thẻ cha, ảnh 1, ảnh 2 vào bảng 
        board_table.appendChild(box).appendChild(x); 
        // box.appendChild(y);
    }; for (let i = 0; i < cột; i++) { createE(i)}

    for (let i = 0; i < hàng; i++) {
        for (let e = 0; e < cột; e++) {
            var box = document.getElementById("a" + board[i][e].id)
            Object.assign(box.style, {top:`${nammuoiH * i}px`,left: `${nammuoiW * e}px`})
        }
    }   


    // -----------------------
    offsetWidthTile = document.getElementById("a1-1").offsetWidth
    offsetHeightTile = document.getElementById("a1-1").offsetHeight
    function heightWidth_Img() {
        var boardImages = document.querySelectorAll('#board img, #board div img');

        // Áp dụng kích thước động cho từng img
        boardImages.forEach(function (img) {
            img.style.width = nammuoiW + 'px'
            img.style.height = nammuoiH+ 'px'
        });
    }
    heightWidth_Img()

    if (startG == 0) {tạo_Cột_Slide(); 
        if (checkValid()) { setTimeout(() => { readycrush() }, 500) } 
        else {
            setTimeout(() => { click1 = true; startG++; startTurn()}, 500)
        }
    }
}
function applyStylesToImages() {
    var board_table = document.getElementById("board");
       const images = document.querySelectorAll('#board img'); // Chọn tất cả thẻ img trong #board
       images.forEach(img => {
            img.style.width = `${board_table.offsetWidth / hàng}px`;
           img.style.height = `${board_table.offsetWidth / hàng}px`;       
       });
   }
  

// Biến kiểm tra lần click đầu tiên
function click_Curr() {
    const focus = (tile, cls) => { tile.classList.replace(tile.classList[0], cls)}
    if (click1 == true ) {
        click1 = false; currTile = this; // console.log(1)
        focus(currTile, 'focus')
    } 
    else if (click1 == false && this == currTile  ) { 
        click1 = undefined
        clearInterval(timer); timeBox.classList.add("disableTime")
        focus(this, 'outFocus'); // console.log(2)
        setTimeout(() => focus(this, 'fc'), 800); 
        setTimeout(() => {
            click1 = true; startTurn(1);
            timeBox.classList.remove("disableTime")
        }, 400); 
    } 
    else if (click1 == false && this != currTile  ) { 
        click1 = undefined; otherTile = this;
        clearInterval(timer); timeBox.classList.add("disableTime")
        focus(otherTile, 'outFocus'); // console.log(2)
        setTimeout(() => focus(otherTile, 'fc'), 1200); 
        setTimeout(() => focus(currTile, 'fc'), 100); 
        setTimeout(() => dragEnd(), 400); 
    } 
} // ??? sao dùng const 

function dragEnd() { 
    // ------------- nếu 1 trong 2 src là blank thì off. ktra
    if (currTile.src.includes('blank') || otherTile.src.includes('blank')) return;
    const [r1, c1] = currTile.id.split("-").map(Number), [r2, c2] = otherTile.id.split("-").map(Number);
    if (Math.abs(r1 - r2) + Math.abs(c1 - c2) === 1) {
            srcToSrc(currTile, otherTile) // 1. đổi src img1 cho nhau
            setTimeout(()=>{readycrush()}, 800)
    } else {
        setTimeout(() => {
            click1 = true; startTurn(1);
            timeBox.classList.remove("disableTime")
        }, 400)
    }
} // 1cau lệnh thì bỏ ngoặc !!1
var getPoint = new Set()
function readycrush() {
    for (let r = 0; r < hàng; r++) {meme(cột, board[r])} // Kiểm tra hàng
    for (let c = 0; c < cột; c++) {meme(hàng, board.map(row => row[c]))} // Kiểm tra cột

    // Hàm chung để kiểm tra hàng hoặc cột
    function meme(length, line) {
        let candy1 = line[0], array = [candy1];
        for (let i = 1; i < length; i++) {
            let candy2 = line[i];
            if (candy1.src == candy2.src && !candy1.src.includes('blank')) {
                array.push(candy2)} 
            else {
                if (array.length >= 3) listOfArrays.push(array);
                candy1 = candy2; array = [candy1];
            }
        }
        if (array.length >= 3) listOfArrays.push(array);
    }
    if (listOfArrays.length == 0) {click1 = true; endTurn(); return}
    // --------------------------------
    let vienKeoGiaoNhau = new Set(), mangLonHonBon = []
    // 3x:     
    for (let i = 0; i < listOfArrays.length; i++) {
        let setI = new Set(listOfArrays[i]); // Chuyển mảng i thành Set
        for (let j = i + 1; j < listOfArrays.length; j++) {
            let setJ = new Set(listOfArrays[j]); // Chuyển mảng j thành Set
            let giaoNhau = [...setI].filter(candy => setJ.has(candy)); // Tìm giao giữa 2 Set
            giaoNhau.forEach(candy => vienKeoGiaoNhau.add(candy));
        }
    }
    // for (let i = 0; i < listOfArrays.length; i++) {
    //     for (let j = i + 1; j < listOfArrays.length; j++) {
    //         let giaoNhau = listOfArrays[i].filter(candy => listOfArrays[j].includes(candy));
    //         giaoNhau.forEach(candy => vienKeoGiaoNhau.add(candy));
    //         // [1,2,3].filter(candy => [5,3].includes(candy))  ; [3]
    //     }
    // }; 
    let mangVienKeoGiaoNhau = [...vienKeoGiaoNhau] //Array.from(vienKeoGiaoNhau);
    var tTurns3x = mangVienKeoGiaoNhau.length
    mangVienKeoGiaoNhau.forEach(tile => changeSrc(tile, 3));
    // --------------------------------------
    // 4x:
    var tTurns4x = new Set()
    mangLonHonBon = listOfArrays.filter(array => array.length >= 4);
    mangLonHonBon.forEach(array => {
        let trùng = array.some(candy => mangVienKeoGiaoNhau.includes(candy));
        if (!trùng) { // trùng thì bỏ
            let checkTiles = [otherTile, currTile].filter(tile => array.includes(tile));
            let tileToChange = checkTiles.length > 0 ? checkTiles[0] 
                : array[Math.floor(Math.random() * array.length)];
                tTurns4x.add(tileToChange)
            changeSrc(tileToChange, rowFirst(array[0].id)==rowFirst(array[1].id) ? 1 : 2)
        }
    });
    if (startG != 0) tTurns += tTurns3x + [...tTurns4x].length
    //-------------------
    // tinh điểm
    // var getPoint = new Set()
    // listOfArrays.forEach(arrayDad => {
    //     arrayDad.forEach(child => {
    //         if (getPoint.has(child)) {

    //         } else {
    //             getPoint.add(child);
    //             if (meTurn==true){
    //                 getPoint2Turn(1, child.src)
    //             } else if (monTurn == true) {
    //                 getPoint2Turn(2, child.src)
    //             }
    //         }
    //     })
    // })

    // --------
    function checkBoom() {
    for (var i = 0; i < listOfArrays.length; i++) {
        var hi = listOfArrays[i].some(item =>item.dataset.symbolClass != 'undefined')
        if (hi) return true
    }
}; 
var timeBling = 0
    if (checkBoom()) {bling(listOfArrays, 1)}
    function bling(arrayBling, x) {
        timeBling = 1000
        var array = new Set()
        for (var i = 0; i < arrayBling.length; i++) {
            if (x == 1) {
                arrayBling[i].filter(item => {
                    if (item.dataset.symbolClass != 'undefined') {array.add(item)}
                })
            } else {
                if (arrayBling[i].dataset.symbolClass != 'undefined') {array.add(arrayBling[i])}
            }
        }; array = [... array]
        array.forEach(image=>{
            image.classList.add('blink'); // Thêm class để bắt đầu hiệu ứng chớp nháy
            image.style.transition = 'opacity 0.5s ease'; // Đặt transition thành 0.5s
            setTimeout(()=>{
                image.classList.remove('blink');
                image.style.transition = 'box-shadow 0.3s ease-in-out, opacity 0.3s ease';
            }, timeBling)
        })
    }
    
    setTimeout(()=>{
        timeBling = 0
        for (var i = 0; i < listOfArrays.length; i++) {
            listOfArrays[i].forEach(item =>{haha(item)})
        }
    }, timeBling)
    
    setTimeout(()=>{
        for (var i = 0; i < listOfArrays.length; i++) {
            listOfArrays[i].forEach((item, index) => {
                if (item.classList[1] == 'offBoom') {nổChuyền(item, 'hi')}
                if (i ==listOfArrays.length-1 &&index==listOfArrays[i].length-1){
                    setTimeout(()=>{handleBoom()}, 350);
                }
            });
        }
    }, 350 + timeBling)
    function haha(item) {
        var b = item.dataset.symbolClass; if (b != 'undefined') {nổChuyền(item, b)}    
    }
    function handleBoom() {
        var onBoo = document.querySelectorAll(".onBoom")
        onBoo = Array.from(onBoo);
        if (onBoo.length > 0) {
            bling(onBoo, 2)
            setTimeout(() => {
                onBoo.forEach((item, index) => {
                    haha(item);
                    if (index === onBoo.length - 1) {
                        setTimeout(() => {
                            var onBoo = document.querySelectorAll(".onBoom")
                            onBoo = Array.from(onBoo);
                            if (onBoo.length > 0) {
                                bling(onBoo, 2)
                                setTimeout(() => {
                                    timeBling = 0; handleBoom()
                                }, bling)
                            } else { handsome() }
                        }, 350)
                    }
                })
            }, bling);
        } else {handsome()}
    }
} // vẫn có khả năng 1 giây r chạy luôn !!!
function handsome() {
    objectSrc_2(); objectSrc2 = []; listOfArrays = [];
    otherTile = undefined; currTile = undefined; getPoint.clear()
    if (currentTurn === 'character') {
        attackInGame(numDame, monsterInGame)
    } else {
        attackInGame(numDame, characterInGame) 
    }
    numDame = 0
    var onBoo = document.querySelectorAll(".deleted")
    onBoo.forEach(item => item.classList.replace(item.classList[1], 'offBoom'))
    // slideCandy()
    setTimeout(function () { slideCandy() }, 100)
}

function nổChuyền(tile, type) {
    let [r, c] = tile.id.split("-").map(Number);
    // Nổ 4 ô chéo cho viên 3x3
    if (type === '3x3') {
        let directions = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
        directions.forEach(([dr, dc]) => {
            let nr = r + dr, nc = c + dc;
            if (nr>=0&&nr < hàng && nc>=0 &&nc<cột){addClassIfKeywordPresent(board[nr][nc])}
        });
    }

    // Nổ 2 ô trước và 2 ô sau cho viên ngang
    else if (type === 'Ngang') {
        let range = [-2, -1, 1, 2];
        range.forEach(dc => {
            let nc = c + dc;
            if (nc >= 0 && nc < cột) {addClassIfKeywordPresent(board[r][nc])}
        });
    }

    // Nổ 2 ô trên và 2 ô dưới cho viên dọc
    else if (type === 'Doc') {
        let range = [-2, -1, 1, 2];
        range.forEach(dr => {
            let nr = r + dr;
            if (nr >= 0 && nr < hàng) {addClassIfKeywordPresent(board[nr][c])}
        });
    } 
    deleteImg2_Blank(tile) 
    
    function deleteImg2_Blank(tile) {
        if (startG != 0) {
            if (getPoint.has(tile)) {
            } else {
                getPoint.add(tile);
                if (currentTurn === "character") {
                    getPoint2Turn(1, tile)
                } else {
                    getPoint2Turn(2, tile)
                }
            }
        } 

        tile.classList.replace(tile.classList[1], 'deleted');
        tile.dataset.symbolClass = 'undefined';
        deleteImg2(tile); tile.style.opacity = 0;
        setTimeout(() => {
            tile.src = 'ảnh/blank.png'; tile.style.opacity = 1;
        }, 300);
    }
    function addClassIfKeywordPresent(tile) {
        if (/Ngang|Doc|3x3/.test(tile.dataset.symbolClass)) {
            tile.classList.replace(tile.classList[1], 'onBoom');
        } else {  deleteImg2_Blank(tile)}
    }
}
// // Hàm để cắt chuỗi lấy tên file
function split_Name(src) {//var x=src.split('/'); console.log(src, x, x.pop(), x)
    return src.split('/').pop().split('.')[0].replace(/Ngang|Doc|3x3/g, '');
}
function split_Name_Key(src) { return src.split('/').pop().split('.')[0] }

var objectSrc2 = []
function objectSrc_2() {
    objectSrc2.forEach(i=>{
        i.tile.src = i.src; i.tile.dataset.symbolClass = i.suffix
        i.tile.classList.replace(i.tile.classList[1], 'offBoom')
        createPic2(i.tile, i.suffix); 
    })
}
function changeSrc(tile, type) {  var src = tile.src
    suffix = type === 1 ? 'Doc' : type === 2 ? 'Ngang' : '3x3';
    objectSrc2.push({tile: tile, suffix: suffix, src: src})
}

function changeImg2(curr, other) {
    const currPic2 = havePic2(curr); const otherPic2 = havePic2(other)
    function havePic2(box) {
        return document.getElementById("a" + 
        box.id).querySelector('img:nth-of-type(2)')
    }

    if (currPic2 && otherPic2) {[currPic2.src, otherPic2.src] = [otherPic2.src, currPic2.src]} 
    else if (!currPic2 && otherPic2){
        createPic2(curr); havePic2(curr).src = otherPic2.src; deleteImg2(other)
    } 
    else if (currPic2 && !otherPic2) {
        createPic2(other); havePic2(other).src=currPic2.src; deleteImg2(curr)    
    }
}
function createPic2(tile, r) {
    var x = getId("a" + tile.id)
        x.insertAdjacentHTML('beforeend', `<img style="position:absolute; 
            z-index:2; width: ${offsetWidthTile}px; height: ${offsetHeightTile}px">`);
        x.querySelector('img:nth-of-type(2)').style.pointerEvents = 'none'
    if (r != undefined) x.querySelector('img:nth-of-type(2)').src = `ảnh/filter${r}.png`
}

function deleteImg2(tile) {
    var x = getId("a"+tile.id)
    if (x.children.length > 1) {x.removeChild(x.children[1])}
}
function removeSpecificElements(array) {
    return array.filter(item => !/Ngang|Doc|3x3/.test(item));
} // cho 4
function extractKeyword(src) {
    // Kiểm tra và trả về từ khóa nếu tồn tại
    let keywordMatch = src.match(/Ngang|Doc|3x3/);
    if (keywordMatch) {
        return keywordMatch[0]; // Trả về từ khóa tìm thấy
    }
    return null; // Không có từ khóa nào được tìm thấy
}
// Hàm lấy số của hàng
function rowFirst(id) { return +id.split('-')[0] }


// ---------------------------------------
var collumnArray = []
function tạo_Cột_Slide() { // ✨
    for (var i = 0; i < cột; i++) {
        collumnArray[i] = [];
        for (var j = hàng - 1; j >= 0; j--) {
            collumnArray[i].push(document.getElementById("a" + board[j][i].id))
        }
        collumnArray[i].push(document.getElementById("a0-*" + i))
    }
}
// 12.
var slidePoint = 0, iii = 0
function haha(cot) {
    var indexCollumn = cot.slice(0, -1).findIndex(i => 
        i.querySelector('img:first-of-type').src.includes("blank"))

    if (indexCollumn !== -1) {
        // lấy các phần tử sau ô trống
        var arrayAfterBlank = cot.slice(indexCollumn + 1);
        var arrayAnd_Blank = cot.slice(indexCollumn);
        // cho ô cuối viên random
        cot[cot.length - 1].querySelector('img:first-of-type').src = randomCandy()
        cot[cot.length - 1].querySelector('img:first-of-type').style.width = offsetWidthTile + 'px'
        cot[cot.length - 1].querySelector('img:first-of-type').style.height = offsetHeightTile + 'px'
         // Buộc trình duyệt tính toán layout lại để đảm bảo animation được kích hoạt
        //  void cot[0].offsetHeight; 

        // cho kẹo rớt xuống
        arrayAfterBlank.forEach((el) => {
            el.style.zIndex = 1
            el.style.transition = 'transform 500ms ease-in';
            el.style.transform = `translateY(${offsetHeightTile}px)`
        })
        
        setTimeout(() => { 
            // Lặp từ phần tử đầu tiên đến phần tử áp chót
            for (let i = 0; i < arrayAnd_Blank.length - 1; i++) {
                function mi(a) { return arrayAnd_Blank[a].querySelector('img:first-of-type') }
                mi(i).dataset.symbolClass = mi(i+1).dataset.symbolClass
                mi(i).src = mi(i + 1).src; changeImg2(mi(i), mi(i + 1)); deleteImg2(mi(i + 1));
            } 
            
            arrayAfterBlank.forEach(el => {
                el.style.transition='';
                el.style.transform = '';
                el.style.zIndex = '';
            })
            setTimeout(()=>{haha(cot)},30)
        }, 500)
    } else { slidePoint++ }
}

function slideCandy() { // ✨
    for (var i = 0; i < cột; i++) { haha(collumnArray[i]) } // rớt cờ
    var slideLoop = setInterval(function () {
        if (slidePoint == cột) {
            clearInterval(slideLoop); slidePoint = 0
            if (checkValid()) {setTimeout(()=>readycrush(), 200)} 
            else {
                setTimeout(() => {
                    click1 = true; display_InfoChar_Mon();
                    if (startG == 0) {
                        startG++;
                        startTurn()
                    } else { checkBattleResult()? 2:endTurn() }
                    // checkBattleResult();

                }, 200)
            }
        }
    }, 20)
}


const srcToSrc= (img1, img2) => {
    // Ẩn hình ảnh đầu tiên
    img1.style.opacity = 0; img2.style.opacity = 0;
    // Đợi cho đến khi độ mờ hoàn thành
    setTimeout(() => {
        [img1.src, img2.src] = [img2.src, img1.src]; // 1. đổi src img cho nhau
        img1.style.opacity = 1; img2.style.opacity = 1; // Hiện 2 hình ảnh
        [currTile.dataset.symbolClass, otherTile.dataset.symbolClass] = [otherTile.dataset.symbolClass, currTile.dataset.symbolClass];
        click1 = undefined; changeImg2(currTile,otherTile); //đổi ảnh Filter cho nhau
    }, 300); // Thời gian tương tự như trong transition
};
var arrayNameCandy = ['yingyang', "heart", "water", "sword"]
var goldMe = 0, soulRockMe = 0, numDame = 0
function getPoint2Turn(x, tileSrc) {
    var y = tileSrc.dataset.symbolClass != 'undefined'
    if (x == 1) { // me
        var goldSoulRockFound = ['gold', 'soulRock'].some((name, index) =>{
            if (tileSrc.src.includes(name)) {
                switch (index) {
                    case 0: {
                        var num = 7; y == true? num = num * 1.5: 0
                        goldMe += num
                        goldMe = +goldMe.toFixed(1);
                        break;
                    }
                    case 1: {
                        var num = 0.5; y == true? num = num * 1.5: 0
                        soulRockMe += num
                        soulRockMe = +soulRockMe.toFixed(1);
                        break;
                    }
                }
                return true; // Dừng lại khi tìm thấy phần tử phù hợp
            }
        })
        if (goldSoulRockFound) {return}
        arrayNameCandy.some((name, index) =>{
            if (tileSrc.src.includes(name)) {
                switch (index) {
                    case 0: {
                        var num = parseInt((characterInGame.getmaxHealth() / 14) / 3)
                        y == true? num = num * 1.5: 0
                        armorTwo(characterInGame, num)
                        break;
                    }
                    case 1: {
                        var num =  parseInt((characterInGame.getmaxHealth() / 8) / 3)
                        y == true? num = num * 1.5: 0
                        healthTwo(characterInGame, num)
                        break;
                    }
                    case 2: {
                        var num = 11
                        y == true? num = num * 1.5: 0
                        manaTwo(characterInGame, num)
                        break;
                    }
                    case 3: {
                        var num = characterInGame.maxDame /3
                        y == true? num = num * 1.5: 0
                        numDame += num
                        break;
                    }
                }
                return true; // Dừng lại khi tìm thấy phần tử phù hợp
            }
        })
    } else {
        var goldSoulRockFound = ['gold', 'soulRock'].some( name =>{
            if (tileSrc.src.includes(name)) {return true}
        })
        if (goldSoulRockFound) {return}
        arrayNameCandy.some((name, index) =>{
            if (tileSrc.src.includes(name)) {
                switch (index) {
                    case 0: {
                        var num = parseInt((monsterInGame.getmaxHealth() / 14) / 3)
                        y == true? num = num * 1.5: 0
                        armorTwo(monsterInGame, num)
                        break;
                    }
                    case 1: {
                        var num = parseInt((monsterInGame.getmaxHealth() / 8) / 3)
                        y == true? num = num * 1.5: 0
                        healthTwo(monsterInGame, num)
                        break;
                    }
                    case 2: {
                        var num = 11
                        y == true? num = num * 1.5: 0
                        manaTwo(monsterInGame, 11)
                        break;
                    }
                    case 3: {
                        var num = monsterInGame.maxDame / 3 
                        y == true? num = num * 1.5: 0
                        numDame += num
                        break;
                    }
                }
                return true; // Dừng lại khi tìm thấy phần tử phù hợp
            }
        })
    }
}
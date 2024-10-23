// 3. cho quái đánh: -----------------------------------------------
var pi = { a: 0 }
function testValid() { // kiểm tra xem bàn cờ có đi đc nước nào ko?  
    // r: row, c: collumn
    for (var r = 0; r < hàng; r++) {
        for (var c = 0; c < cột ; c++) {
            changeSrcTest(r + 1 < hàng, 'test', r, c, 1, 0)// hoán đổi chính nó và viên dưới nó
            changeSrcTest(c + 1 < cột, 'test', r, c, 0, 1)// hoán đổi chính nó và viên bên phải
            // ps: chỉ cần đổi 2 hướng là biết, ko cần 4 hướng
            if (pi.a > 0) { pi.a = 0; return true }; 
        }
    }
    // ko còn nước đi nào là trả false nè
    return false 
} 
function reBuild() {
    document.getElementById("board").innerHTML = ''
    startGame()
}

// hoán đổi src và filter giả lập, rồi trả về cũ
function changeSrcTest(condition1, condition2, r, c, y, z, array, num) { 
    if (condition1) {
        // hàm hoán đổi src
        function mimi() { 
            // var img1 = board[r][c], img2 = board[r + y][c + z]
            // 1. đổi src img cho nhau
            [board[r][c].src, board[r + y][c + z].src] = 
            [board[r + y][c + z].src, board[r][c].src];
            // 2. đổi symbolClass img cho nhau
            [board[r][c].dataset.symbolClass, board[r + y][c + z].dataset.symbolClass] = 
                        [board[r + y][c + z].dataset.symbolClass, board[r][c].dataset.symbolClass];
            // 3. đổi ảnh Filter cho nhau
            changeFilter(board[r][c], board[r + y][c + z]); 
        }; 
     
        mimi() // mimi lần 1 là hoán đổi src và filter 2 viên
        if (checkValid()) {
            if (condition2 == 'test') {
                pi.a++;
            } else {
                var testV = readycrush2(num)
                if (testV[0] == true) {
                    pi.a++;
                    array.push([board[r][c], board[r + y][c + z], testV[1], testV[2]])
                }
            }
        };
        mimi() // mimi lần 2 là để trả src và filter về
    }
}
//4. kiểm tra xem có tạo đc 4 viên liên tiếp ko
// kiểm tra xem có tạo đc 3 viên liên tiếp ko
function fakeTurn(num) {
    auto_array = []; 
    for (var r = 0; r < hàng; r++) {
        for (var c = 0; c < cột; c++) { /**xuống*/ /**phải */
            changeSrcTest(r + 1 < hàng, undefined, r, c, 1, 0, auto_array, num); 
            changeSrcTest(c + 1 < cột, undefined, r, c, 0, 1, auto_array, num); 
        }
    } 
    var possible = pi.a > 0; pi.a = 0
    return [possible, auto_array] 
}
//6.
function readycrush2(number) {
    // truyền 1 để nó return đúng cái listOfArray
    listOfArrays = []; listOfArrays = readycrush(1) 
    
    // bước 1, check xem mảng tìm đc có thỏa mãn ăn 3, ăn 4 ko
    var possible = listOfArrays.some(i => { if (i.length >= number) return true })
    // ko có thì lượn lập tức
    if (possible == false) {return [false]}
    
    // bước 2, xem có tất cả bao nhiêu viên đặc biệt
    // ví dụ:  [y] [y]   r     và     [y]  [y]   t   
    //          j   e  [[Y]]           j    t   [y]   
    // ==> rõ ràng ăn nước 1 có lợi hơn
    var numOf_SpecialChess = 0
    var fusionArray = [... new Set(listOfArrays.flat())]
    fusionArray.forEach(i => { 
        if (i.dataset.symbolClass != undefined) { numOf_SpecialChess ++ } 
    })
    // bước 3, xem có bao nhiêu mảng nếu ăn nước này
    // ví dụ:  [x] [x]  y  [x]   và    [x]  [x]  (y)   [x]
    //          j   y  [x]  k           j   (y)  [x]   (k)
    // ==> rõ ràng ăn nước 2 có lợi hơn
    var length = listOfArrays.length; 
    listOfArrays = [] // set up lại về mảng rỗng
    return [true, numOf_SpecialChess, length]
}
//7. Quái lựa cấp độ khó để đánh 
function auto_Fight1() { 
    // Xem bàn cờ có những bước đi nào 
    var arrayAll = [fakeTurn(4), fakeTurn(3)]
    var randomNum = Math.floor(Math.random() * arrayAll.length)
    arraySelected = arrayAll[0][0] == true? arrayAll[randomNum] : arrayAll[1]
    var boomChess = [], branch = [], n = 0 //a[1] lấy all mảng|
    arraySelected[1].forEach((i, index) => { 
        boomChess.push([i[2], index]); branch.push([i[3], index]); 
        i[2] > 0 ? n++ : 1 
    })
    if (n > 0) { mi(boomChess) } else { mi(branch) }  // a[1][0]|[2],  a[1][1]|[2]   |[0] và [1] lấy gốc
    function mi(array) {
        const maxNum = Math.max(...array.map(arr => arr[0])); 
        const arrayContainIndex = array // Tạo mảng chứa các phần tử thứ hai của các mảng con có phần tử đầu tiên bằng giá trị lớn nhất
        .filter(arr => arr[0] === maxNum)
        .map(arr => arr[1]);
        console.log(arrayContainIndex)
        var randomm = Math.floor(Math.random() * arrayContainIndex.length), 
            condition = Math.floor(Math.random() * 2) + 1
            index= arrayContainIndex[randomm]
            console.log(index)
            console.log(arraySelected)

        if (condition == 1) {
            currTile = arraySelected[1][index][0];
            otherTile = arraySelected[1][index][1]
        } else {
            currTile = arraySelected[1][index][1], 
            otherTile = arraySelected[1][index][0]
        }
    };
    currTile.classList.replace(currTile.classList[3], 'focus')// mở focus Cur
    setTimeout(function () { currTile.classList.replace(currTile.classList[3], 'fc') }, 900)// tắt focus Cur
    setTimeout(function () {
        [currTile.src, otherTile.src] = [otherTile.src, currTile.src]; 
        otherTile.classList.replace(otherTile.classList[3], 'outFocus')// mở focus Other
        setTimeout(function () { otherTile.classList.replace(otherTile.classList[3], 'fc') }, 400)//tắt focus Other
        setTimeout(function () { readycrush() }, 700)
    }, 1100)
}
function auto_Fight() {
    var x = Math.floor(Math.random() * 2) + 1
    // console.log(x)
    // x==1?skilQuai1():1
    // x==1?skilQuai2():1
    // x==3?skilQuai3():1
    if (quai.manaInfor() >= 75 && theyTurn == true && x == 1) {
        var x = Math.floor(Math.random() * 2) + 1
        if (x == 1) { //ko mana
            auto_Fight1()
        } else {
            // if (quai.manaInfor() >= 300) {} else 
            if (quai.manaInfor() >= 225) {
                var x = Math.floor(Math.random() * 3) + 1
                x == 1 ? skilQuai1() : 1
                x == 2 ? skilQuai2() : 1
                x == 3 ? skilQuai3() : 1
            } else if (quai.manaInfor() >= 150) {
                var x = Math.floor(Math.random() * 2) + 1
                x == 1 ? skilQuai1() : 1
                x == 2 ? skilQuai2() : 1
            } else if (quai.manaInfor() >= 75) {
                skilQuai1()
            }
        }
    } else { auto_Fight1() }
}
// function timePlayy() {
//     timeTogether = setInterval(function () {
//         if (timePlay >= 0 && meTurn == true) {
//             hộp_TimeMe.classList.remove("nonee")/*mở timeMe*/; hộp_TimeEn.classList.add("nonee")//tắt timeEnemy
//             giờ_TimeMe.innerHTML = timePlay; timePlay--
//             if (timePlay < 0) {
//                 if (numbGo > 0) {
//                     clearInterval(timeTogether)
//                             // (1) mở bảng lượt, (2) tắt bảng lượt
//                        /*1*/thẻ_Cha_Lượt.classList.remove("nonee")
//                        /*2*/setTimeout(function () { thẻ_Cha_Lượt.classList.add("nonee") }, 1700)
//                     so_Luot.innerHTML = numbGo; numbGo-- // (3) cho số lượt và trừ đi lượt

//                     click1 = true; meTurn = true; theyTurn = false; timePlay = 10; timePlayy()
//                 } else {
//                     document.querySelector(".outGame").classList.add("nonee")
//                     click1 = false; timePlay = 10; meTurn = false; theyTurn = true
//                     // đặt x nhiu đây, vì nó đôn lên 1 số
//                     var xx = [7, 6, 5, 4, 3]; var random = Math.floor(Math.random() * xx.length)
//                     timeEnemyPlay = xx[random]
//                 }
//             }
//         } else if (timePlay >= 0 && theyTurn == true) {
//             if (timePlay == timeEnemyPlay) { // ? dùng sau clear?
//                 hộp_TimeEn.classList.add("doiMauTime"); clearInterval(timeTogether); auto_Fight()
//             } else {
//                 hộp_TimeMe.classList.add("nonee")/*tắt timeMe*/; hộp_TimeEn.classList.remove("nonee")//mở timeEnemy
//                 giờ_TimeEn.innerHTML = timePlay; timePlay--
//                 if (timePlay < 0) { click1 = true; timePlay = 10; meTurn = true; theyTurn = false }
//             }
//         }
//     }, 1000)
// }
// var timeEn = [7, 6, 5, 4, 3]// điểm và thời gian đánh
// function turnFight() {
//     function end_Game_Or_Continue_Turn() {
//         if (quai.hp(2, 0) <= 0) {
//             đẩy_Quái();
//             me_Ingame.lvPercent(1); mee.lv(1); quái_Me[6] = mee.lvPercentInfor(); quái_Me[5] = mee.lvInfor()
//             var x = +document.querySelector(".vangMe1").innerHTML
//             document.querySelector(".xu_Nv_0").innerHTML = +document.querySelector(".xu_Nv_0").innerHTML + x

//             document.querySelector(".vangMe1").innerHTML = 0
//             document.querySelector(".vangEnemy1").innerHTML = 0

//             document.querySelector(".HNEnemy1").innerHTML = 0

//             var indec = tìmIndexMảngCha(quái_S, quaiMap[2])
//             quái_S[indec][12] = quái_S[indec][12] + (+document.querySelector(".HNMe1").innerHTML)
//             document.querySelector(".HNMe1").innerHTML = 0


//         }; if (mee.hp(2, 0) <= 0) {
//             me_Ingame.lvPercent(2); mee.lv(2);
//             quái_Me[6] = mee.lvPercentInfor(); quái_Me[5] = mee.lvInfor()
//             document.querySelector(".vangMe1").innerHTML = 0
//             document.querySelector(".vangEnemy1").innerHTML = 0
//             document.querySelector(".HNMe1").innerHTML = 0
//             document.querySelector(".HNEnemy1").innerHTML = 0
//         }
//         (quai.hp(2, 0) > 0 && mee.hp(2, 0) > 0) ? xóa_Bảng() : end_Game();
//     };// ✨
//     if (meTurn == true) { // mình có nhiều lượt /*còn bao nhiêu lượt*/ /*tắt sáng ô */
//         numbGo > 0 ? (document.querySelector(".outGame").classList.remove("nonee"),
//             điểm___Tắt_Mở_Bảng___Số_Lượt(), end_Light_Fight(time_Me), yyyCòn = 1, end_Game_Or_Continue_Turn())
//             : (cộngĐiểmSauCrush(1), end_Light_Fight(time_Me),// mình hết lượt --> quái đánh
//                 document.querySelector(".outGame").classList.add("nonee"),
//                 timeEnemyPlay = timeEn[Math.floor(Math.random() * timeEn.length)], yyyCòn = 2, end_Game_Or_Continue_Turn())
//     } else { // quái có nhiều lượt    ||  // quái hết lượt --> mình đánh
//         numbGo > 0 ? (điểm___Tắt_Mở_Bảng___Số_Lượt(), end_Light_Fight(time_Enemy),
//             document.querySelector(".outGame").classList.add("nonee"),
//             yyyCòn = 2, end_Game_Or_Continue_Turn())
//             : (cộngĐiểmSauCrush(1), document.querySelector(".outGame").classList.remove("nonee"),
//                 end_Light_Fight(time_Enemy), yyyCòn = 1, end_Game_Or_Continue_Turn())
//     }; function mở_Và_Tắt_Bảng_Lượt() { thẻ_Cha_Lượt.classList.remove("nonee"); setTimeout(function () { thẻ_Cha_Lượt.classList.add("nonee") }, 1700) }
//     function end_Light_Fight(xx) { xx.classList.remove("doiMauTime") }; function điểm___Tắt_Mở_Bảng___Số_Lượt() { cộngĐiểmSauCrush(1); mở_Và_Tắt_Bảng_Lượt(); so_Luot.innerHTML = numbGo; numbGo--; }
//     hiện_Mana()
//     document.querySelector(".hpEnemy1").style.width = làm_Tròn(quai.hpInfor() * 4 / quai.hpMaxInfor(), 2) + 'rem'
//     document.querySelector(".hpMe1").style.width = làm_Tròn(mee.hpInfor() * 4 / mee.hpMaxInfor(), 2) + 'rem'
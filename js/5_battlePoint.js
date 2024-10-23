
const characterInGame = {
    get hpLv() { return 100 + (this.level - 1) * 20 },
    get dameLv() { return 20 + (this.level - 1) * 10 },
    get armorLv() { return 3 + (this.level - 1) * 2 },
    get maxHealth() { return this.hpGear + this.hpLv },
    get maxDame() { return this.dameGear + this.dameLv },
    get maxArmor() { return this.armorGear + this.armorLv },

    // Phương thức tính hpLv cho từng nhân vật
    getHpLv() {return 100 + (this.level - 1) * 20},
    getdameLv() { return 20 + (this.level - 1) * 10 },
    getarmorLv() { return 3 + (this.level - 1) * 2 },
    getmaxHealth() { return this.hpGear + this.hpLv },
    getmaxDame() { return this.dameGear + this.dameLv },
    getmaxArmor() { return this.armorGear + this.armorLv }
};

// Định nghĩa cả getter và setter cho thuộc tính name
    Object.keys(characterList.character[characterr.charI]).forEach(prop => {
       Object.defineProperty(characterInGame, prop, {
        get: function() {return characterList.character[characterr.charI][prop]},
        set: function(newValue) {characterList.character[characterr.charI][prop]= newValue},
           configurable: true
    });
    });



// Quái vật
const monsterInGame = {
    get hpLv() { return 100 + (this.level - 1) * 20 },
    get dameLv() { return 20 + (this.level - 1) * 10 },
    get armorLv() { return 3 + (this.level - 1) * 2 },
    get maxHealth() { return this.hpGear + this.hpLv },
    get maxDame() { return this.dameGear + this.dameLv },
    get maxArmor() { return this.armorGear + this.armorLv },

    // Phương thức tính hpLv cho từng nhân vật
    getHpLv() {return 100 + (this.level - 1) * 20},
    getdameLv() { return 20 + (this.level - 1) * 10 },
    getarmorLv() { return 3 + (this.level - 1) * 2 },
    getmaxHealth() { return this.hpGear + this.hpLv },
    getmaxDame() { return this.dameGear + this.dameLv },
    getmaxArmor() { return this.armorGear + this.armorLv }
};

// Định nghĩa cả getter và setter cho thuộc tính name
function monsterIsInGame(idMonster) {

    Object.keys(mapsData[characterr.mapI].enemies[idMonster]).forEach(prop => {
        Object.defineProperty(monsterInGame, prop, {
            get: function () { return mapsData[characterr.mapI].enemies[idMonster][prop] },
            set: function (newValue) { mapsData[characterr.mapI].enemies[idMonster][prop] = newValue },
            configurable: true
        });
    });
}




var manaMe = document.getElementById("mana-bar")
var manaMon = document.getElementById("monster-mana-bar")
var armorMe = document.getElementById("armorMe")
var armorMon = document.getElementById("armorMon")
// Cập nhật thông tin nhân vật
function displayCharacterInfo() {
    document.getElementById('current-health').innerText = characterInGame.currentHealth;
    document.getElementById('max-health').innerText = characterInGame.maxHealth;
    document.getElementById('current-mana').innerText = characterInGame.mana;
    document.getElementById('max-mana').innerText = characterInGame.maxMana;
    armorMe.innerText = characterInGame.armor;
    const healthBar = document.getElementById('health-bar');
    healthBar.style.width = (characterInGame.currentHealth / characterInGame.maxHealth) * 100 + '%';
    manaMe.style.width = (characterInGame.mana / characterInGame.maxMana) * 100 + '%';
    if (characterInGame.currentHealth <= characterInGame.maxHealth * 0.1) {
        healthBar.classList.add('shadow');
        document.querySelector(".meAllHp").classList.add('shadow');
    } else {
        healthBar.classList.remove('shadow');
        document.querySelector(".meAllHp").classList.remove('shadow');

    }




    if (characterInGame.mana >= 10) {
        flyBtn("skill1-char", 'add')
        flyBtn("meMiniSkill1", 'add')
    } else {flyBtn("skill1-char", 'remove'); flyBtn("meMiniSkill1", 'remove')}
    if (characterInGame.mana >= 20) {
        flyBtn("skill2-char", 'add')
        flyBtn("meMiniSkill2", 'add')
    } else {flyBtn("skill2-char", 'remove'); flyBtn("meMiniSkill2", 'remove')}
    if (characterInGame.mana >= 30) {
        flyBtn("skill3-char", 'add')
        flyBtn("meMiniSkill3", 'add')
    } else {flyBtn("skill3-char", 'remove'); flyBtn("meMiniSkill3", 'remove')}


    function flyBtn(classs, a) {
        document.getElementById(classs).classList[a]("flyBtn")
    }

}

// Cập nhật thông tin quái vật
function displayMonsterInfo() {
    document.getElementById('current-monster-health').innerText = monsterInGame.currentHealth;
    document.getElementById('max-monster-health').innerText = monsterInGame.maxHealth;
    document.getElementById('current-monster-mana').innerText = monsterInGame.mana;
    document.getElementById('max-monster-mana').innerText = monsterInGame.maxMana;
    armorMon.innerText = monsterInGame.armor;
    const monsterHealthBar = document.getElementById('monster-health-bar');
    monsterHealthBar.style.width = (monsterInGame.currentHealth / monsterInGame.maxHealth) * 100 + '%';
    manaMon.style.width = (monsterInGame.mana / monsterInGame.maxMana) * 100 + '%';
    
    if (monsterInGame.currentHealth <= monsterInGame.maxHealth * 0.1) {
        monsterHealthBar.classList.add('shadow');
        document.querySelector(".enemyAllHp").classList.add('shadow');
    } else {
        monsterHealthBar.classList.remove('shadow');
        document.querySelector(".enemyAllHp").classList.remove('shadow');
    }

    // if (monsterInGame.mana >= 10) {
    //     flyBtn("skill1-mon", 'add')
    // } else {flyBtn("skill1-mon", 'remove')}
    // if (monsterInGame.mana >= 20) {
    //     flyBtn("skill2-mon", 'add')
    // } else {flyBtn("skill2-mon", 'remove')}
    // if (monsterInGame.mana >= 30) {
    //     flyBtn("skill3-mon", 'add')
    // } else {flyBtn("skill3-mon", 'remove')}


    // function flyBtn(classs, a) {
    //     document.getElementById(classs).classList[a]("flyBtn")
    // }
}

// Kiểm tra kết quả trận đấu
function checkBattleResult() {
    const char = characterInGame
    if (char.currentHealth <= 0) {
        // Giảm 3% kinh nghiệm của nhân vật
        let exp = 3;
        // nhân vật
        {
            if (char.experience - exp < 0) {
                if (char.level > 1) {
                    char.level -= 1; 
                    char.experience = 100 - Math.abs(char.experience - exp); 
                } else {
                    char.level = 1;
                    char.experience = Math.max(0, char.experience - exp); 
                }
            } else {char.experience -= exp}
        }

        // bossMe
        {
            if (characterr.experience - exp < 0) {
                if (characterr.level > 1) {
                    characterr.level -= 1; 
                    characterr.experience = 100 - Math.abs(characterr.experience - exp); // Đặt lại kinh nghiệm còn lại khi xuống cấp
                } else {
                    characterr.level = 1;
                    characterr.experience = Math.max(0, characterr.experience - exp); // Đảm bảo không trừ quá 1% khi cấp là 1
                }
            } else {
                // Nếu kinh nghiệm vẫn còn đủ, chỉ trừ kinh nghiệm
                characterr.experience -= exp;
            }

        }

        updateCharacterInfo(); resetBoard(); return true
    } else if (monsterInGame.currentHealth <= 0) {
        alert("Nhân vật thắng!"); // Nhân vật thắng
        {
            char.experience += 2; // Nhân vật nhận kinh nghiệm
            char.level += Math.floor(char.experience / 100); // Tăng cấp độ khi kinh nghiệm đủ
            char.experience = char.experience % 100; // Giữ lại kinh nghiệm thừa
        }
        {
            characterr.experience += 2; // Nhân vật nhận kinh nghiệm
            characterr.level += Math.floor(characterr.experience / 100); // Tăng cấp độ khi kinh nghiệm đủ
            characterr.experience = characterr.experience % 100; // Giữ lại kinh nghiệm thừa
        }
        updateCharacterInfo(); resetBoard(); return true
    }
}


// Khôi phục máu và mana
function resetBattle() {
    setTimeout(() => {
        characterInGame.currentHealth = characterInGame.maxHealth;
        characterInGame.mana = 0;
        characterInGame.armor = 0;
        monsterInGame.currentHealth = monsterInGame.maxHealth;
        monsterInGame.mana = 0;
        monsterInGame.armor = 0;
        display_InfoChar_Mon()
    }, 3000);
}

// Tăng máu cho nhân vật
function healthTwo(character, num) {
    if (character.currentHealth < character.maxHealth) {
        character.currentHealth += num
        character.currentHealth = +character.currentHealth.toFixed(1);
        if (character.currentHealth > character.maxHealth) {
            character.currentHealth = character.maxHealth;
        }
        // display_InfoChar_Mon()
    }
}

// Tăng mana cho nhân vật
function manaTwo(character, num) {
    if (character.mana < character.maxMana) {
        character.mana += num
        character.mana = +character.mana.toFixed(1);
        if (character.mana > character.maxMana) {
            character.mana = character.maxMana;
        }
        // display_InfoChar_Mon()
    }
}

// Tăng giáp cho nhân vật
function armorTwo(character, num) {
    character.armor += num; // Tăng 1 giáp
    character.armor = +character.armor.toFixed(1); // Tăng 1 giáp
    // display_InfoChar_Mon()
}

// Tấn công quái vật
// pp1 là char nếu nhân vật tcong quái
function attackInGame(pp1, pp2) {
     // Tính toán sát thương
    const characterMaxDame = pp1;
    const monsterMaxArmor = pp2.maxArmor;
    // Tính toán sát thương hiệu quả
    let effectiveDamage = characterMaxDame - monsterMaxArmor;
    if (effectiveDamage > 0) {
        // Nếu có sát thương, trừ giáp quái vật trước
        if (pp2.armor > 0) {
            pp2.armor -= effectiveDamage; pp2.armor = +pp2.armor.toFixed(1);
            if (pp2.armor < 0) {
                // Nếu giáp quái vật nhỏ hơn 0, trừ máu quái vật
                let remainingDamage = Math.abs(pp2.armor);// Sát thương còn lại
                pp2.armor = 0; // Đặt giáp về 0
                hp(remainingDamage)// Trừ máu quái vật
            }
        } else {hp(effectiveDamage)}
    }
    function hp(x) {
        pp2.currentHealth -= x
        pp2.currentHealth = +Math.max(pp2.currentHealth, 0).toFixed(1);
    }
    // display_InfoChar_Mon()
    // checkBattleResult();
}

// Kỹ năng 1 của nhân vật
document.getElementById('skill1-char').addEventListener('click', () => {
    characterInGame.skill1(monsterInGame);
});

// Kỹ năng 2 của nhân vật
document.getElementById('skill2-char').addEventListener('click', () => {
    characterInGame.skill2(monsterInGame);
});

// Kỹ năng 3 của nhân vật
document.getElementById('skill3-char').addEventListener('click', () => {
    characterInGame.skill3(monsterInGame);
});

// // Tăng máu cho quái vật
// document.getElementById('heal-monster').addEventListener('click', () => {
//     if (monsterInGame.currentHealth < monsterInGame.maxHealth) {
//         monsterInGame.currentHealth += 10; // Tăng 10 máu
//         if (monsterInGame.currentHealth > monsterInGame.maxHealth) {
//             monsterInGame.currentHealth = monsterInGame.maxHealth;
//         }
//         display_InfoChar_Mon()
//     }
// });

// // Tăng mana cho quái vật
// document.getElementById('mana-mon').addEventListener('click', () => {
//     if (monsterInGame.mana < monsterInGame.maxMana) {
//         monsterInGame.mana += 10; // Tăng 10 mana
//         if (monsterInGame.mana > monsterInGame.maxMana) {
//             monsterInGame.mana = monsterInGame.maxMana;
//         }
//         display_InfoChar_Mon()
//     }
// });

// // Tăng giáp cho quái vật
// document.getElementById('armor-monster').addEventListener('click', () => {
//     monsterInGame.armor += 1; // Tăng 1 giáp
//     display_InfoChar_Mon()
// });
function display_InfoChar_Mon() {
    displayCharacterInfo();
    displayMonsterInfo();
}

// // Tấn công nhân vật
// document.getElementById('attack-character').addEventListener('click', () => {
//     attackInGame(monsterInGame.maxDame, characterInGame)
// });

// Kỹ năng 1 của quái vật
// document.getElementById('skill1-mon').addEventListener('click', () => {
//     monsterInGame.skill1(characterInGame);
// });

// // Kỹ năng 2 của quái vật
// document.getElementById('skill2-mon').addEventListener('click', () => {
//     monsterInGame.skill2(characterInGame);
// });

// // Kỹ năng 3 của quái vật
// document.getElementById('skill3-mon').addEventListener('click', () => {
//     monsterInGame.skill3(characterInGame);
// });

// Khởi tạo thông tin ban đầu
display_InfoChar_Mon()


// ---------------------
// bảng thông tin nhân vật
 // Khởi tạo thông tin nhân vật
 const bossMe = {
    name: "Khoa",
    vang: 0,
    kimcuong: 0,
    level: 1,
    experience: 5
};

// Hàm cập nhật hiển thị của thanh kinh nghiệm và thông tin nhân vật
// function updateCharacterInfo() {
//     const expBar = document.getElementById('exp-bar');
//     const charName = document.getElementById('char-name');
//     const charGold = document.getElementById('char-gold');
//     const charDiamond = document.getElementById('char-diamond');
//     const charLevel = document.getElementById('char-level');
//     // Cập nhật width của thanh kinh nghiệm theo phần trăm kinh nghiệm
//     expBar.style.width = `${bossMe.experience}%`;

//     // Cập nhật thông tin nhân vật
//     charName.textContent = `Tên: ${bossMe.name}`;
//     charGold.textContent = `Vàng: ${bossMe.vang}`;
//     charDiamond.textContent = `Kim cương: ${bossMe.kimcuong}`;
//     charLevel.textContent = `Cấp độ: ${bossMe.level}+${bossMe.experience}%`;
// }

// Cập nhật thông tin ban đầu
// updateCharacterInfo();

function resetBoard() {
    tTurns = 0; startG = 0; currentTurn = "character"; collumnArray = []
    click1 = undefined; clearInterval(timer)

    
    timeBox.classList.add("disableTime")
   

    document.getElementById("board").innerHTML = ''
    board = []


    // chia ra nếu ai hết máu thì...
    if (characterInGame.currentHealth <=0 ) {
        bling("picMonInGame")
        document.querySelector(".boxMeIn_Game").classList.remove("colorTurn", "flyBtn")
        document.querySelector(".boxMonIn_Game").classList.add("colorTurn", "flyBtn")
    } else if (monsterInGame.currentHealth <=0) {
        bling("picMeInGame")
        document.querySelector(".boxMeIn_Game").classList.add("colorTurn", "flyBtn")
        document.querySelector(".boxMonIn_Game").classList.remove("colorTurn", "flyBtn")
    }
    function bling(id) {
        overlay.classList.remove("none");
        document.querySelector(`.${id}`).classList.add('blink'); // Thêm class để bắt đầu hiệu ứng chớp nháy
        document.querySelector(`.${id}`).style.transition = 'opacity 0.5s ease'; // Đặt transition thành 0.5s
        setTimeout(()=>{
            document.querySelector(`.${id}`).classList.remove('blink');
            document.querySelector(`.${id}`).style.transition = '';

            document.querySelector(".boxMeIn_Game").classList.remove("colorTurn", "flyBtn")
            document.querySelector(".boxMonIn_Game").classList.remove("colorTurn", "flyBtn")
            timeBox.classList.remove("disableTime"); timeBox.style.visibility = 'hidden'
            showOverLay(2)
            setTimeout(()=> {mimi(); 
                if (characterInGame.currentHealth <=0 ) {
                    monsterPresent = 0; checkFight()
                } else if (monsterInGame.currentHealth <=0) {
                    var bigE = monsterPresent
                    var miniE = document.querySelector(`.enemyMini${bigE.dataset.codeEnemy}`)
                    bigE.isGo = false; 
                    miniE.style.top = `${miniE.offsetTop + 5000}px`
                    bigE.style.top = `${bigE.offsetTop + 5000}px`
                    monsterPresent = 0; checkFight()
                    setTimeout(()=> {
                        bigE.isGo = true
                        miniE.style.top = `${miniE.offsetTop - 5000}px`
                        bigE.style.top = `${bigE.offsetTop - 5000}px`
                    }, 10000)

                }
                characterInGame.mana = 0
                monsterInGame.mana = 0
                characterInGame.currentHealth = characterInGame.maxHealth
                monsterInGame.currentHealth = monsterInGame.maxHealth

                characterInGame.armor = 0; monsterInGame.armor = 0
            }, 4000)
        }, 1000)
    }
}
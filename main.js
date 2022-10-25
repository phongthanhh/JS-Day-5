// Custom Input

let getInputMain = document.querySelectorAll('input');

function validate(input) {
    if (input.value) {
        input.classList.add('fill-bg');
    } else {
        input.classList.remove('fill-bg');
    }
}
getInputMain.forEach((input) => {
    input.oninput = function() {
        validate(input)
    }
})


function showResultTrue(message, result, mess = '', result2 = '', mess2 = '', result3 = '', mess3 = '') {
    message.classList.remove('false');
    message.classList.add('true');
    message.innerHTML = `Kết quả : ${mess} <b>${result}</b>  ${mess2} <b>${result2}</b> ${mess3} <b>${result3}</b>`;

}

function showResultFalse(message, result, mess = '', result2 = '', mess2 = '') {
    message.classList.remove('true');
    message.classList.add('false');
    message.innerHTML = `Thông báo : ${mess} <b>${result}</b>  ${mess2} <b>${result2}</b>`;
}

//EXE

//EXE1
function bt1() {
    const errorMessage = document.getElementById('errorMessage');

    const standPoit = +document.getElementById('exe1-num').value;

    const getArena = document.getElementById('exe1-area').value;
    const getObj = +document.getElementById('exe1-obj').value;

    const point = +document.getElementById('exe1-num1').value;
    const point2 = +document.getElementById('exe1-num2').value;
    const point3 = +document.getElementById('exe1-num3').value;


    if (standPoit <= 30 && standPoit > 10) {
        if (point <= 10 && point2 <= 10 && point3 <= 10) {

            let sum = point + point2 + point3;
            switch (getArena) {
                case 'a':
                    {
                        sum += 2;
                        break;
                    }
                case 'b':
                    {
                        sum += 1;
                        break;
                    }
                case 'c':
                    {
                        sum += 0.5;
                        break;
                    }
                default:
                    {
                        sum += 0;
                        break;
                    }
            }
            switch (getObj) {
                case 1:
                    {
                        sum += 2.5;
                        break;
                    }
                case 2:
                    {
                        sum += 1.5;
                        break;
                    }
                case 3:
                    {
                        sum += 1;
                        break;
                    }
                default:
                    {
                        sum += 0;
                        break;
                    }
            }
            if (sum >= standPoit) {
                showResultTrue(errorMessage, sum, 'Chúc mừng, bạn đã đậu. Tổng điểm = ')
            } else {
                showResultFalse(errorMessage, sum, 'Bạn đã rớt. Tổng điểm = ')
            }
        } else {
            showResultFalse(errorMessage, 'Điểm thi phải <=10')
        }
    } else {
        showResultFalse(errorMessage, 'Điểm chuẩn phải >10 và <=30')
    }
}

//EXE2

function bt2() {
    const errorMessage2 = document.getElementById('errorMessage2');

    const getName = document.getElementById('exe3-name').value;
    const getNum = +document.getElementById('exe3-num').value;
    let sum = 0;
    if (getNum) {
        if (getNum <= 50) {
            sum = getNum * 500;
        } else if (getNum <= 100) {
            sum = getNum * 650;
        } else if (getNum <= 200) {
            sum = getNum * 850;
        } else if (getNum <= 350) {
            sum = getNum * 1100;
        } else {
            sum = getNum * 1300;
        }
        sum = sum.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        showResultTrue(errorMessage2, getName, 'Họ tên: ', sum, 'Tiền điện')
    } else {
        showResultFalse(errorMessage2, 'Số Kw không hợp lệ !')
    }
}

//EXE3
function bt3() {

}

//EXE4

function change() {
    let getSelect = document.getElementById('exe4-obj');
    let getKCC = document.getElementById('exe4-num2');
    if (getSelect.value == 2) {
        getKCC.style.display = 'block';
    } else {
        getKCC.style.display = 'none ';
    }
}

function bt4() {
    const errorMessage4 = document.getElementById('errorMessage4');

    const getSelect = document.getElementById('exe4-obj').value;

    const name = document.getElementById('exe4-name').value;

    const KCC = +document.getElementById('exe4-num1').value;

    const connects = +document.getElementById('exe4-num2').value;
    let sum = 0;
    if (getSelect) {
        if (getSelect == 1) {
            sum = 4.5 + 20.5 + (7.5 * KCC);
        } else {
            if (connects <= 10) {
                sum = 15 + 75 + (50 * KCC);
            } else {
                sum = 15 + 75 + (5 * (connects - 10)) + (50 * KCC);
            }
        }
        sum = sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        showResultTrue(errorMessage4, name, 'Mã khách hàng: ', sum, 'Tiền cáp')

    } else {
        showResultFalse(errorMessage4, 'Vui lòng chọn loại khách hàng !')
    }
}
let nameInput = document.querySelector('#name');
let btnSubmit = document.querySelector('#btn-submit');
let welcomeMessage = document.querySelector('#welcome-message');
let welcomeName = document.querySelector('#welcome-name');

btnSubmit.onclick = function() {
    let nameValue = nameInput.value.trim(); // 获取输入框中的值并去除首尾空白

    if (nameValue === "ceshiwwh") {
        welcomeName.textContent = "测试员王炜皓"; // 设置欢迎消息中的姓名
        welcomeMessage.style.display = 'block'; // 显示欢迎消息
        setTimeout(function() {
            window.location.href = "./main.html";
        }, 1500); // 延迟1.5秒跳转到index.html
    } else {
        window.location.href = "./index.html";
    }
};

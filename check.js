let nameInput = document.querySelector('#name');
let btnSubmit = document.querySelector('#btn-submit');
let welcomeMessage = document.querySelector('#welcome-message');
let welcomeName = document.querySelector('#welcome-name');

btnSubmit.onclick = function() {
    let nameValue = nameInput.value.trim(); // ��ȡ������е�ֵ��ȥ����β�հ�

    if (nameValue === "ceshi") {
        welcomeName.textContent = nameValue; // ���û�ӭ��Ϣ�е�����
        welcomeMessage.style.display = 'block'; // ��ʾ��ӭ��Ϣ
        setTimeout(function() {
            window.location.href = "./main.html";
        }, 3000); // �ӳ�3����ת��index.html
    } else {
        window.location.href = "./index.html";
    }
};

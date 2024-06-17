let nameInput = document.querySelector('#name');
let btnSubmit = document.querySelector('#btn-submit');
let welcomeMessage = document.querySelector('#welcome-message');
let welcomeName = document.querySelector('#welcome-name');

btnSubmit.onclick = function() {
	let nameValue = nameInput.value.trim(); // 获取输入框中的值并去除首尾空白

	if (nameValue == "ceshiwwh") {
		welcomeName.textContent = "测试员王炜皓"; // 设置欢迎消息中的姓名
		welcomeMessage.style.display = 'block'; // 显示欢迎消息
		setTimeout(function() {
			window.location.href = "./main.html";
		}, 1500); // 延迟1.5秒跳转到index.html
	} 
	else{
		if (nameValue == "14735529") {
			welcomeName.textContent = "郭睿麒"; 
			welcomeMessage.style.display = 'block'; 
			setTimeout(function() {
				window.location.href = "./main.html";
			}, 1500); 
		} 
		else{
			if (nameValue == "16738724ace") {
				welcomeName.textContent = "陈谢源"; 
				welcomeMessage.style.display = 'block'; 
				setTimeout(function() {
					window.location.href = "./main.html";
				}, 1500); 
			} 
			else{
				if (nameValue == "xst111224") {
					welcomeName.textContent = "刘宏渊"; 
					welcomeMessage.style.display = 'block'; 
					setTimeout(function() {
						window.location.href = "./main.html";
					}, 1500); 
				} 
				else{
					if (nameValue == "540788") {
						welcomeName.textContent = "严誉尹"; 
						welcomeMessage.style.display = 'block'; 
						setTimeout(function() {
							window.location.href = "./main.html";
						}, 1500); 
					} 
					else{
						if (nameValue == "1L2L1h2J3y4c") {
							welcomeName.textContent = "包辰瀚"; 
							welcomeMessage.style.display = 'block'; 
							setTimeout(function() {
								window.location.href = "./main.html";
							}, 1500); 
						} 
						else{
							if (nameValue == "20120817") {
								welcomeName.textContent = "王炜皓"; 
								welcomeMessage.style.display = 'block'; 
								setTimeout(function() {
									window.location.href = "./main.html";
								}, 1500); 
							} 
							else{
								if (nameValue == "tianmanqi") {
									welcomeName.textContent = "田曼琪"; 
									welcomeMessage.style.display = 'block'; 
									setTimeout(function() {
										window.location.href = "./main.html";
									}, 1500); 
								} 
								else{
										if (nameValue == "541881452") {
										welcomeName.textContent = "刘家铖"; 
										welcomeMessage.style.display = 'block'; 
										setTimeout(function() {
											window.location.href = "./main.html";
										}, 1500); 
									} 
									else{
										window.location.href = "./index.html";
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
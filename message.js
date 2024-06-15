const commentslist =[
{
	name:"测试员",
	comment1:
	"留言区测试中",
	time:"9.29"
}
];
const commentsBox=document.querySelector('#commentslist');
const btnSubmit = document.querySelector('#btn-submit');
let nameInput = document.querySelector('#name');
let commentInput = document.querySelector('#comment');

const renderComments=function(commentslist){
		commentsBox.innerHTML=""

commentslist.forEach((item)=>{
			commentsBox.insertAdjacentHTML(
					'beforeend',
		   `<hr>
			<h4>
		<span>${item.name}</span>
		<span class="date">${item.time}</span>
		</h4>
			<p>${item.comment1}</p>
		`	
		)	
     }
   )
}

renderComments (commentslist);

btnSubmit.onclick =function(){
	let nameStr = nameInput.value.replace(/<(\/?\w+)>/g,"&lt;$1&gt;");
	let commentStr = commentInput.value.replace(/<(\/?\w+)>/g,"&lt;$1&gt;");
	if(nameStr!=""&&commentStr!=""){
	commentslist.unshift(
	{
		name :nameStr,
		comment1: commentStr,
		time:new Date(),
	}

	);
	renderComments(commentslist);
	commentInput.value=""
}
else
	alert('请输入昵称和内容！')
}
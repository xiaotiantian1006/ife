	 var aDiv=document.getElementsByTagName('p');
	//�ж�input�����Ƿ�Ϊ����
		function inputText(){
			var input=document.getElementsByTagName('input')[0].value;
			if(isNaN(input)){
				alert('����������');
			}else{
				return input;
			}
		}
//����p
		function arrDiv(input){
			var eDiv=document.createElement('p');
			console.log(eDiv);
			eDiv.appendChild(document.createTextNode(input));
			return eDiv;
		}
//�Ƴ�div
		function reDiv(){
			document.body.removeChild(this);
		}
		//����ĸ���ť
		
		function buttonClick(){
			//�����
			document.getElementsByClassName('leftIn')[0].onclick=function(){
				var input=inputText();
				if(input){
				 var divEle=arrDiv(input);
					if(aDiv.length){
						document.body.insertBefore(divEle,aDiv[0]);
					}else{
						document.body.appendChild(divEle);
					}
					divEle.onclick=reDiv;
				}
				document.getElementsByTagName("input")[0].value = "";
			};
			//�Ҳ���
			document.getElementsByClassName('rightIn')[0].onclick=function(){
				var input=inputText();
				if(input){					
					var divEle=arrDiv(input);
					document.body.appendChild(divEle);
					divEle.onclick=reDiv;
				}
				document.getElementsByTagName("input")[0].value = "";
			};
			//����
			document.getElementsByClassName('leftOut')[0].onclick=function(){
				if(aDiv.length){
					var value = aDiv[0].innerHTML;
					document.body.removeChild(aDiv[0]);
					alert(value);
				}
			}
			//�Ҳ��
				document.getElementsByClassName("rightOut")[0].onclick = function(){
					if(aDiv.length){
						var value = aDiv[aDiv.length - 1].innerHTML;
						var reomveElem = document.body.removeChild(aDiv[aDiv.length - 1]);
						alert(value);
					}
				}
		}
		buttonClick()
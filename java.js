var body;

var Quest=[database.quiz.q1.question,database.quiz.q2.question,database.quiz.q3.question,database.quiz.q4.question];
var QuestHolders;

function addQuest() {
	body=$('body');

	for(let i=0;i<database.quiz.q1.options.length;i++){

		body.append('<div class="quest quest-'+i+'">'+Quest[i]+' </div> ');


	}


	QuestHolders=$('.quest');

	for(let i=0;i<QuestHolders.length;i++){
		$(QuestHolders[i]).css({ border:'2px solid black',marginLeft:'auto',marginRight:'auto',background:'gray',width:'500px',height:'270px',marginTop:'25px',textAlign:'center',paddingTop:'10px',fontSize:'28px' })

	}


}


addQuest();

var allanswer1;
var allanswer2;
var allanswer3;
var allanswer4;

var allCheckers1;
var allCheckers2;
var allCheckers3;
var allCheckers4;

function addAnswers(){

	for(let i=0;i<database.quiz.q1.options.length;i++){

		$(QuestHolders[0]).append(`
			<div class="answer1 answer1-${i} ">
			<input type="radio" name="ans1" class="Check1 Check1-${i}" id="Ans1-${i}" >${database.quiz.q1.options[i]}</input>
			</div>
			`);

	}


	for(let i=0;i<database.quiz.q2.options.length;i++){

		$(QuestHolders[1]).append(`
			<div class="answer2 answer2-${i} ">
			<input type="radio" name="ans2" class="Check2 Check2-${i}" id="Ans2-${i}" >${database.quiz.q2.options[i]}</input>
			</div>
			`);

	}


	for(let i=0;i<database.quiz.q3.options.length;i++){

		$(QuestHolders[2]).append(`
			<div class="answer3 answer3-${i} ">
			<input type="radio" name="ans3" class="Check3 Check3-${i}" id="Ans3-${i}" >${database.quiz.q3.options[i]}</input>
			</div>
			`);

	}


	for(let i=0;i<database.quiz.q4.options.length;i++){

		$(QuestHolders[3]).append(`
			<div class="answer4 answer4-${i} ">
			<input type="radio" name="ans4" class="Check4 Check4-${i}" id="Ans4-${i}" >${database.quiz.q4.options[i]}</input>
			</div>
			`);

	}


	allanswer1=$('.answer1');
	allanswer2=$('.answer2');
	allanswer3=$('.answer3');
	allanswer4=$('.answer4');
	
	for(let i=0;i<allanswer1.length;i++){
	
	$(allanswer1[i]).css({ marginTop:'25px',marginLeft:'auto',marginRight:'auto',fontSize:'20px' })
   	$(allanswer2[i]).css({ marginTop:'25px',marginLeft:'auto',marginRight:'auto',fontSize:'20px' })
   	$(allanswer3[i]).css({ marginTop:'25px',marginLeft:'auto',marginRight:'auto',fontSize:'20px' })
   	$(allanswer4[i]).css({ marginTop:'25px',marginLeft:'auto',marginRight:'auto',fontSize:'20px' }) 
    }


 
    allCheckers1=$('.Check1');
    allCheckers2=$('.Check2');
    allCheckers3=$('.Check3');
    allCheckers4=$('.Check4');

}

addAnswers();




window.onbeforeunload = function(){
   
   	localStorage.clear();

   	
   	for(let i=0;i<allCheckers1.length;i++){

   		if( $(allCheckers1[i]).prop( "checked" ) ){

   			let Cd='UserAns1-'+i+'';

   			localStorage.setItem(Cd,"checked");

   		}

   	}


   	for(let i=0;i<allCheckers2.length;i++){

   		if( $(allCheckers2[i]).prop( "checked" ) ){

   			let Cd='UserAns2-'+i+'';

   			localStorage.setItem(Cd,"checked");

   		}

   	}


   	for(let i=0;i<allCheckers3.length;i++){

   		if( $(allCheckers3[i]).prop( "checked" ) ){

   			let Cd='UserAns3-'+i+'';

   			localStorage.setItem(Cd,"checked");

   		}

   	}


   	for(let i=0;i<allCheckers4.length;i++){

   		if( $(allCheckers4[i]).prop( "checked" ) ){

   			let Cd='UserAns4-'+i+'';

   			localStorage.setItem(Cd,"checked");

   		}

   	}


}




function checking (){

	setTimeout( ()=>{

		
		for(let i=0;i<allanswer1.length;i++){

			let db='UserAns1-'+i+'';
			let joker=localStorage.getItem(db);

			if(joker == "checked"){	
			  
			  $(allCheckers1[i]).attr('checked', true);
			
			}


		}


		for(let i=0;i<allanswer2.length;i++){

			let db='UserAns2-'+i+'';
			let joker=localStorage.getItem(db);

			if(joker == "checked"){	
			  
			  $(allCheckers2[i]).attr('checked', true);
			
			}


		}



		for(let i=0;i<allanswer3.length;i++){

			let db='UserAns3-'+i+'';
			let joker=localStorage.getItem(db);

			if(joker == "checked"){	
			  
			  $(allCheckers3[i]).attr('checked', true);
			
			}


		}



		for(let i=0;i<allanswer4.length;i++){

			let db='UserAns4-'+i+'';
			let joker=localStorage.getItem(db);

			if(joker == "checked"){	
			  
			  $(allCheckers4[i]).attr('checked', true);
			
			}


		}


	},200 )


}

checking();


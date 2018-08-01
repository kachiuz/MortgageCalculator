$(document).ready(function(){
	
	$( "#calculateButton" ).click(function() {
		var mortgageAmount = $('#mortgageAmount').val();
		var repaymentPeriod = $('#repaymentPeriod').val();
		var interestRate = $('#interestRate').val();
		
		var errorText1 = "Enter A Valid Mortgage Amount!";
		var errorText2 = "Enter A Valid Repayment Period!";
		var errorText3 = "Enter A Valid Interest Rate!";
		
		if ($.isNumeric(mortgageAmount) === false)
		{
			$( "#mortgageAmount" ).css({"border-color": "red", "background-color": "#ffb3b3"});
			$( "#error" ).text(errorText1);
			
			$( "#repaymentPeriod" ).css({"border-color": "blue", "background-color": "white"});
			$( "#interestRate" ).css({"border-color": "blue", "background-color": "white"});			
		}
		else if ($.isNumeric(repaymentPeriod) === false)
		{
			$( "#repaymentPeriod" ).css({"border-color": "red", "background-color": "#ffb3b3"});
			$( "#error" ).text(errorText2);
			
			$( "#mortgageAmount" ).css({"border-color": "blue", "background-color": "white"});
			$( "#interestRate" ).css({"border-color": "blue", "background-color": "white"});
		}
		else if ($.isNumeric(interestRate) === false)
		{
			$( "#interestRate" ).css({"border-color": "red", "background-color": "#ffb3b3"});
			$( "#error" ).text(errorText3);
			
			$( "#mortgageAmount" ).css({"border-color": "blue", "background-color": "white"});
			$( "#repaymentPeriod" ).css({"border-color": "blue", "background-color": "white"});
		}
		else if ($.isNumeric(mortgageAmount)&& $.isNumeric(repaymentPeriod) && $.isNumeric(interestRate) )
		{
			//reset error  messages
			$( "#mortgageAmount" ).css({"border-color": "blue", "background-color": "white"});
			$( "#repaymentPeriod" ).css({"border-color": "blue", "background-color": "white"});
			$( "#interestRate" ).css({"border-color": "blue", "background-color": "white"});
			$( "#error" ).text("");
			
			//get counter value;
			var counter = $('#counter').val();
			
			//chnage background color for every second result values
			if (counter % 2 === 0)
			{
				
				var backgroundColor = "col-xs-6 col-sm-6 col-md-3 col-lg-3 previuosResult1B";
				var backgroundColorInputValues = "col-xs-6 col-sm-6 col-md-6 col-lg-6 previuosResult1B";
				var backgroundColorValues = "col-xs-6 col-sm-6 col-md-6 col-lg-6  previuosResult1";
				var backgroundColorValuesPR = "col-xs-6 col-sm-6 col-md-3 col-lg-3 previuosResult1";
				
			}
			else
			{
				var backgroundColor = "col-xs-6 col-sm-6 col-md-3 col-lg-3 previuosResult2B";
				var backgroundColorInputValues = "col-xs-6 col-sm-6 col-md-6 col-lg-6 previuosResult2B";
				var backgroundColorValues = "col-xs-6 col-sm-6 col-md-6 col-lg-6  previuosResult2";
				var backgroundColorValuesPR = "col-xs-6 col-sm-6 col-md-3 col-lg-3 previuosResult2";
			}
		
			numberOfPeriods = repaymentPeriod*12;
			monthlyInterestRate = interestRate/(12*100);
					
			//monthly payments calculation
			monthlyPayment = (mortgageAmount*monthlyInterestRate*Math.pow((1+monthlyInterestRate), numberOfPeriods))/((Math.pow((1+monthlyInterestRate),numberOfPeriods))-1);
			monthlyPayment = monthlyPayment.toFixed(2);
			
			//monthly interest only calculation
			totalMortgageValue = (monthlyPayment*numberOfPeriods).toFixed(2);
			totalInterest = (totalMortgageValue - mortgageAmount).toFixed(2);
			interestOnly = mortgageAmount*monthlyInterestRate;
			interestOnly = interestOnly.toFixed(2);
			
			$("#monthlyPayment").text(monthlyPayment);
			$( "#interestOnly" ).text(interestOnly);
			
			$( "#totalMortgageValue" ).text(totalMortgageValue);
			$( "#totalInterest" ).text(totalInterest);
				
			
			/*for (i=1;i<=repaymentPeriod;i++)
			{
				var currentPeriod = i*12;
				var balance = mortgageAmount*((Math.pow(1+monthlyInterestRate, numberOfPeriods))-Math.pow(1+monthlyInterestRate, currentPeriod));
				balance = balance/((Math.pow(1+monthlyInterestRate, numberOfPeriods))-1);
				balance = balance.toFixed(2);
				
				$("#panel").append(i+" - ");
				$("#panel").append(balance);
				$("#panel").append("<br>");
				//testArray.push({x: 0+i, y: balance-1000*i});

			}*/
			
			
			
			//----------------------------Caculated previuos results------------------------------------//
			
			
						
							
			
			//////////////////////////////////////////////////////////////////////////////////////
			
			var $divCONTAINER = $("<div>", {id: "divCONTAINER"+counter, "class": "container width100"});
			$("#resultBox").prepend($divCONTAINER);
			
			
			//fith row div for previuos results
			var $divROW5 = $("<div>", {id: "divROW5"+counter, "class": "row"});
			$("#divCONTAINER"+counter).prepend($divROW5);	
				//total mortgage value
				var $divTMV = $("<div>", {id: "divTMV"+counter, "class":backgroundColor});
				$("#divROW5"+counter).prepend("<hr>");
				$("#divROW5"+counter).prepend($divTMV);
				$("#divTMV"+counter).prepend(totalMortgageValue);
				
				//total mortgage name
				var $divTMN = $("<div>", {id: "divTMN"+counter, "class": backgroundColorValuesPR});
				$("#divROW5"+counter).prepend($divTMN);
				$("#divTMN"+counter).prepend("Total Sum Payed:");
				
				//total interest value
				var $divTIV = $("<div>", {id: "divTIV"+counter, "class": backgroundColor});
				$("#divROW5"+counter).prepend($divTIV);
				$("#divTIV"+counter).prepend(totalInterest);
				
				//total interest name
				var $divTIN = $("<div>", {id: "divTIN"+counter, "class": backgroundColorValuesPR});
				$("#divROW5"+counter).prepend($divTIN);
				$("#divTIN"+counter).prepend("Total Interest:");
			
			//fourth row div for previuos results
			var $divROW4 = $("<div>", {id: "divROW4"+counter, "class": "row"});
			$("#divCONTAINER"+counter).prepend($divROW4);
				//Interest only value
				var $divIOV = $("<div>", {id: "divIOV"+counter, "class": backgroundColor});
				$("#divROW4"+counter).prepend($divIOV);
				$("#divIOV"+counter).prepend(interestOnly);
				
				//interest only name
				var $divION = $("<div>", {id: "divION"+counter, "class": backgroundColorValuesPR});
				$("#divROW4"+counter).prepend($divION);
				$("#divION"+counter).prepend("Interest Only:");
				
				//monthly payments value
				var $divMPV = $("<div>", {id: "divMPV"+counter, "class": backgroundColor});
				$("#divROW4"+counter).prepend($divMPV);
				$("#divMPV"+counter).prepend(monthlyPayment);
				
				//monthly payments name
				var $divMPN = $("<div>", {id: "divMPN"+counter, "class": backgroundColorValuesPR});
				$("#divROW4"+counter).prepend($divMPN);
				$("#divMPN"+counter).prepend("Monthly Payment:");
			
			//third row div for previuos results
			var $divROW3 = $("<div>", {id: "divROW3"+counter, "class": "row"});
			$("#divCONTAINER"+counter).prepend($divROW3);
			
				//interest rate
				var $divIR = $("<div>", {id: "divIR"+counter, "class": backgroundColorInputValues});
				$("#divROW3"+counter ).prepend($divIR);
				$("#divIR"+counter).prepend(interestRate);
				
				//interest name
				var $divIN = $("<div>", {id: "divIN"+counter, "class": backgroundColorValues});
				$("#divROW3"+counter ).prepend($divIN);
				$("#divIN"+counter).prepend("Interest Rate:");
			
			
			//socond row div for previuos results
			var $divROW2 = $("<div>", {id: "divROW2"+counter, "class": "row"});
			$("#divCONTAINER"+counter).prepend($divROW2);
			
				//repayment period value
				var $divPV = $("<div>", {id: "divPV"+counter, "class": backgroundColorInputValues});
				$("#divROW2"+counter ).prepend($divPV);
				$("#divPV"+counter).prepend(repaymentPeriod);
				
				//repayment Period name
				var $divPN = $("<div>", {id: "divPN"+counter, "class": backgroundColorValues});
				$("#divROW2"+counter ).prepend($divPN);
				$("#divPN"+counter).prepend("Repayment Period:");
				
			//first row div for previuos results
			var $divROW1 = $("<div>", {id: "divROW1"+counter, "class": "row"});
			$("#divCONTAINER"+counter).prepend($divROW1);
			
				//mortgage amount value
				var $divMAV = $("<div>", {id: "divMAV"+counter, "class": backgroundColorInputValues});
				$("#divROW1"+counter).prepend($divMAV);
				$("#divMAV"+counter).prepend(mortgageAmount);
				
				//mortgage amount name
				var $divMA = $("<div>", {id: "divMA"+counter, "class": backgroundColorValues});
				$("#divROW1"+counter ).prepend($divMA);
				$("#divMA"+counter).prepend("Mortgage Amount:");
			
			
			//increase counter value
			counter++;
			var counter = $('#counter').val(counter);
		}
		else
		{ alert("lolol")}
	});
	
	
	//clar results table
	$( "#buttonClear" ).click(function() {
		//reset result box
		$( "#resultBox" ).text("");
		//reset counter value
		var counter = $('#counter').val(0);
	});
	
	
	
	$("#button1").click( function () {
		$("#modal1").css("display", "block");

		var mortgageAmount = $('#mortgageAmount').val();
		var repaymentPeriod = $('#repaymentPeriod').val();
		var interestRate = $('#interestRate').val();
		var numberOfPeriods = repaymentPeriod*12;
		var monthlyInterestRate = interestRate/(12*100);
		
		//monthly payments calculation
		var monthlyPayment = (mortgageAmount*monthlyInterestRate*Math.pow((1+monthlyInterestRate), numberOfPeriods))/((Math.pow((1+monthlyInterestRate),numberOfPeriods))-1);
		monthlyPayment = monthlyPayment.toFixed(2);
	
		//monthly interest only calculation
		var totalMortgageValue = (monthlyPayment*numberOfPeriods).toFixed(2);
		var totalInterest = (totalMortgageValue - mortgageAmount).toFixed(2);
		
		//for pie chart
		var mortgagePie = ((mortgageAmount/totalMortgageValue)*100).toFixed(2);
		var totalInterestPie = ((totalInterest/totalMortgageValue)*100).toFixed(2);
		
		var testArray = [];
		for (i=1;i<=repaymentPeriod;i++)
			{
				var currentPeriod = i*12;
				var balance = mortgageAmount*((Math.pow(1+monthlyInterestRate, numberOfPeriods))-Math.pow(1+monthlyInterestRate, currentPeriod));
				balance = balance/((Math.pow(1+monthlyInterestRate, numberOfPeriods))-1);
				balance = Number(balance.toFixed(0));
				
				testArray.push({x: i,y: balance});
				

			}
	//Better to construct options first and then pass it as a parameter
	
	
	var chart = new CanvasJS.Chart("chartContainer", {
		
	animationEnabled: true,
	exportEnabled: true,
	//width: 320,
	title:{
		text: "Outstanding Balance"
	},
	data: [{        
		type: "line",       
		dataPoints: testArray
	}]
});

	
	

	
	//////////////////

//var monthlyPayment = 476;
var payPerYear = monthlyPayment*12;
var testArray3 = [];
var testArray2 = [];
for (i=1;i<=repaymentPeriod;i++)
	{
			
		var intersetPaidPerYear = 0;  //0 at every beggining of the year
		var principalPaidPerYear = 0;
		for (x=0;x<12;x++)
		{
			var interestPaidPerMonth = mortgageAmount*monthlyInterestRate;
			var principalPaidPerMonth = monthlyPayment - interestPaidPerMonth;
			
			mortgageAmount -= principalPaidPerMonth;
			
			var standingBalance = mortgageAmount - principalPaidPerMonth;
			
			intersetPaidPerYear += interestPaidPerMonth;
			principalPaidPerYear += principalPaidPerMonth;
		}
		
		intersetPaidPerYear = Number(intersetPaidPerYear.toFixed(2));
		testArray2.push({x: i,y: intersetPaidPerYear});
		
		principalPaidPerYear = Number(principalPaidPerYear.toFixed(2));
		testArray3.push({x: i,y: principalPaidPerYear});
		
	}




	var options =  {
		animationEnabled: true,
		exportEnabled: true,
		//responsive: true,
		//width: 320,
		title:{
			text: "Mortgage Amortization",
			//fontFamily: "arial black",
			//fontColor: "#695A42"
		},
		axisX: {
			
			intervalType: "year"
		},
		axisY:{
			
			gridColor: "#B6B1A8",
			tickColor: "#B6B1A8"
		},

		data: [{
			type: "stackedColumn",
			showInLegend: true,
			color: "#696661",
			name: "Principal",
			dataPoints: testArray3
			},
			{        
				type: "stackedColumn",
				showInLegend: true,
				name: "Interest",
				color: "#B6B1A8",
			dataPoints: testArray2
		}]
	};
	
	var chart3 = new CanvasJS.Chart("chartContainer3", {
	animationEnabled: true,
	exportEnabled: true,
	title: {
		text: "Total Payments Pie Chart"
	},
	data: [{
		type: "pie",
		//startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: totalInterestPie, label: "Total interest paid: "+totalInterest},
			{y: mortgagePie, label: "Mortgage of: "+mortgageAmount},
		]
	}]
});

	
	var testArray4 = [];
	var mortgageAmount = $('#mortgageAmount').val(); //need to get this value again
	interestRate = 1;
	for (y=1;y<=12; y++){
		var monthlyInterestRate = interestRate/(12*100);
		var monthlyPayment = (mortgageAmount*monthlyInterestRate*Math.pow((1+monthlyInterestRate), numberOfPeriods))/((Math.pow((1+monthlyInterestRate),numberOfPeriods))-1);
		monthlyPayment = Number(monthlyPayment.toFixed(2));
		testArray4.push({y: monthlyPayment, label: y+"%"});
		interestRate++;
	}
	var chart4 = new CanvasJS.Chart("chartContainer4", {
	animationEnabled: true,
	//theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "Monthly Payments"
	},
	axisY: {
		title: "Monthly Payments"
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "grey",
		legendText: "Monthly payments on different interest rates",
		dataPoints: testArray4
		}]
	});

	
	
	chart.render();
	$("#chartContainer2").CanvasJSChart(options);
	chart3.render();
	chart4.render();
	});
	
	
	$("#button2").click( function () {
		$("#modal2").css("display", "block");
		$("#mortgageSchedule").text("");
		
		
		
		var mortgageAmount = $('#mortgageAmount').val();
		var repaymentPeriod = $('#repaymentPeriod').val();
		var interestRate = $('#interestRate').val();
		var numberOfPeriods = repaymentPeriod*12;
		var monthlyInterestRate = interestRate/(12*100);
		
		//monthly payments calculation
		var monthlyPayment = (mortgageAmount*monthlyInterestRate*Math.pow((1+monthlyInterestRate), numberOfPeriods))/((Math.pow((1+monthlyInterestRate),numberOfPeriods))-1);
		monthlyPayment = monthlyPayment.toFixed(2);
		
		var mortgageAmountDummy = mortgageAmount;
		for (i=1; i<=repaymentPeriod; i++)
		{
			//chnage background color for every second result values
			if (i % 2 === 0)
			{
				var backgroundColor = "row text-center backgroundOdd";				
			}
			else
			{
				var backgroundColor = "row text-center backgroundEven";
			}
	
			var currentPeriod = i*12;
			var balance = mortgageAmount*((Math.pow(1+monthlyInterestRate, numberOfPeriods))-Math.pow(1+monthlyInterestRate, currentPeriod));
			balance = balance/((Math.pow(1+monthlyInterestRate, numberOfPeriods))-1);
			balance = balance.toFixed(2);
	
	
			var intersetPaidPerYear = 0;  //0 at every beggining of the year
			var principalPaidPerYear = 0;
			for (x=0;x<12;x++)
			{
				var interestPaidPerMonth = mortgageAmountDummy*monthlyInterestRate;
				var principalPaidPerMonth = monthlyPayment - interestPaidPerMonth;
				
				mortgageAmountDummy -= principalPaidPerMonth;
							
				intersetPaidPerYear += interestPaidPerMonth;
				principalPaidPerYear += principalPaidPerMonth;
			}
			
			intersetPaidPerYear = intersetPaidPerYear.toFixed(2);
			
			principalPaidPerYear = principalPaidPerYear.toFixed(2);
	
	
	
			var $divRow = $("<div>", {id: "divRow"+i, "class": backgroundColor});
			$("#mortgageSchedule").append($divRow);
			
			//
			
			//add year to row
			var $divYear = $("<div>", {id: "divYear"+i, "class": "col-xs-3 col-sm-3 col-md-3 col-lg-3"});
			$("#divRow"+i).append($divYear);
			$("#divYear"+i).append(i);
			
			//add principal to row
			var $divPrincipal = $("<div>", {id: "divPrincipal"+i, "class": "col-xs-3 col-sm-3 col-md-3 col-lg-3"});
			$("#divRow"+i).append($divPrincipal);
			$("#divPrincipal"+i).append(principalPaidPerYear);
			//add interest to row
			var $divInterest = $("<div>", {id: "divInterest"+i, "class": "col-xs-3 col-sm-3 col-md-3 col-lg-3"});
			$("#divRow"+i).append($divInterest);
			$("#divInterest"+i).append(intersetPaidPerYear);
			
			//add balance to row
			var $divBalance = $("<div>", {id: "divBalance"+i, "class": "col-xs-3 col-sm-3 col-md-3 col-lg-3"});
			$("#divRow"+i).append($divBalance);
			$("#divBalance"+i).append(balance);
		}
		
	});
	

	
});



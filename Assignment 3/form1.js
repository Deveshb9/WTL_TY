function validate()
	{
		if(document.Myform.Name.value=="")
		{
			alert("Please Enter Your Name");
			document.Myform.Name.focus();
			return false;
		}
	
		if(document.Myform.Email.value=="")
		{
			alert("Please Enter Your Email");
			document.Myform.Email.focus();
			return false;
		}
		
		if(document.Myform.Zipcode.value=="")
		{
			alert("Please provide the correct Zipcode")
			document.Myform.Zipcode.focus();
			return false;
		}

		var Zip=document.Myform.Zipcode.value
		if(Zip.length !=6||isNaN(Zip))
		{
			alert("Please provide the correct Zipcode")
			document.Myform.Zipcode.focus();
			return false;
		}

		if(document.Myform.Mobile.value=="")
		{
			alert("Please provide the correct Mobile no.")
			document.Myform.Mobile.focus();
			return false;
		}

		var Mob=document.Myform.Mobile.value
		if(Mob.length !=10||isNaN(Mob))
		{
			alert("Please provide the correct Mobile No.")
			document.Myform.Mob.focus();
			return false;
		}

		if(document.Myform.Country.value=="-1")
		{
			alert("Please provide Country")
			document.Myform.Country.focus();
			return false;
		}
		
		if(document.Myform.DOB.value=="")
		{
			alert("Please provide the correct Date of Birth")
			document.Myform.DOB.focus();
			return false;
		}

		if(document.Myform.Gender.value=="")
		{
			alert("Please provide the correct Gender")
			return false;
		}

		if(document.Myform.Permanent.value=="")
		{
			alert("Please provide the correct Permanent Address")
			document.Myform.Permanent.focus();
			return false;
		}

		if(document.Myform.Correspondence.value=="")
		{
			alert("Please provide the correct Correspondence Address")
			document.Myform.Correspondence.focus();
			return false;
		}
			
		
		var Email=document.Myform.Email.value;
		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email))
		{
			return(true);
		}
		alert("You have entered an invalid email address!!")
		return(false);

       	}
	
	
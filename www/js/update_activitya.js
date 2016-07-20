$(document).on('pageshow', '#primarymessage', function(){  
//alert('updateactivitya 222');
$('#chatr').empty();



$('.upload-statusbar').remove();
$('.ajax-upload-dragdrop').remove();

$('#intlife').hide();
$('.uii').hide();
$.mobile.loading("hide");
/*var status_val_inpro = $('input:radio[name=radio-choice-a]:checked').val();
alert(status_val_inpro);

if(status_val_inpro == 'Verified'){

$("#radio-choice-ab").attr('checked', 'checked');
}*/

//insurance start
  $('#radio_insur_hs').hide();

   $('#fir_two_field_nine_seven').hide();
  $('#insured_one_zero_one').hide();
   $('#plociy_one_zero_six').hide();
    $('#accident_three_field_nine_five').hide();
     $('#owner_driver_two_field_hundred').hide();
      $('#outside_driver_two_field_nine_nine').hide();
       $('#claimant_details_two_field_hundred_zero_two').hide();

   $('#insu_accident_nine_five_a').empty();
  $('#insu_inves_nine_five_b').empty();
   $('#insu_final_nine_five_c').empty();
    $('#insu_accident_nine_seven_a').empty();
     $('#insu_investiagtor_nine_seven_b').empty();
      $('#insu_accident_hundred_a').empty();
       $('#insu_investiagtor_hundred_b').empty();
         $('#insu_accident_nine_nine_a').empty();
            $('#insu_investiagtor_nine_nine_b').empty();
            $('#insu_accident_one_zero_two_a').empty();
            $('#insu_investiagtor_one_zero_two_b').empty();
            $('#insu_final_one_zero_one').empty();
       $('#insu_final_one_zero_six').empty();	

//hide final box insurance
    $('#fir_two_field_nine_seven').hide();

$('.insu_hide_old').show();

         document.getElementById('insu_accident_nine_seven_a').value = "";
document.getElementById('insu_investiagtor_nine_seven_b').value = "";
  document.getElementById('insu_accident_hundred_a').value = "";
document.getElementById('insu_investiagtor_hundred_b').value = "";
  document.getElementById('insu_accident_nine_nine_a').value = "";
document.getElementById('insu_investiagtor_nine_nine_b').value = "";
  document.getElementById('insu_accident_one_zero_two_a').value = "";
document.getElementById('insu_investiagtor_one_zero_two_b').value = "";
  document.getElementById('insu_accident_nine_five_a').value = "";
document.getElementById('insu_inves_nine_five_b').value = "";
  document.getElementById('insu_final_nine_five_c').value = "";
document.getElementById('insu_final_one_zero_six').value = "";

assignValues();


$(document).off('click', '#dashinsy').on('click', '#dashinsy', function() {

  $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#inprogressinsy').on('click', '#inprogressinsy', function() {

  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#verifiedinsy').on('click', '#verifiedinsy', function() {

  $.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#not_verifiedinsy').on('click', '#not_verifiedinsy', function() {

  $.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
  return false;
});


$(document).off('click', '#completedinsy').on('click', '#completedinsy', function() {

  $.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#signoutinsy').on('click', '#signoutinsy', function() {
  sessionStorage.clear(); 
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#before_new_listupa').on('click', '#before_new_listupa', function() {
  $.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#inprobj').on('click', '#inprobj', function() {
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#chatSendButtoncancel').on('click', '#chatSendButtoncancel', function() {

$.mobile.changePage($('#primarymessage'), { transition: "none", changeHash: true, reverse: false });
return false;

});

});






function assignValues(){

  region_array = JSON.parse(sessionStorage.getItem("regionArray"));
  superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
  user_obja = JSON.parse(sessionStorage.getItem("currentobj_inpro"));
  supervisor_activity_log_array = JSON.parse(sessionStorage.getItem("supervisor_activity_log_array"));
    sh_eeem_array = JSON.parse(sessionStorage.getItem("sh_eeem_array"));

  var coordinator_id = user_obja.coordinator_id;

  var verification_user_id = user_obja.verification_user_id;

  var qualification_id=user_obja.qualification_id;

//alert(qualification_id+'for int'+verification_user_id+'verification_user_id');

  regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
  var region=regionArray_array.region;
  var user_id=regionArray_array.user_id;
  var state=regionArray_array.state;
//alert(region_num);
username=regionArray_array.username;
//alert(username);

if(qualification_id != '95' || qualification_id != '102' || qualification_id != '99' || qualification_id != '101' || qualification_id != '97' || qualification_id != '100' ){
 $('#chatSendButton_insuran').hide();
}
if(qualification_id == '95' || qualification_id == '102' || qualification_id == '99' || qualification_id == '101' || qualification_id == '97' || qualification_id == '100' ){
 $('#chatSendButton_insuran').show();
}

for(a=0;a<sh_eeem_array.length;a++){
 sh_eeem_array = sh_eeem_array[a];
 eeemail=sh_eeem_array.E_Mail;
  Username_state_head=sh_eeem_array.Username
  }
username=regionArray_array.username;
username_tvo=regionArray_array.username;

//alert(eeemail+'eeemailcdds');
typofver=user_obja.taskname;
pertobever=user_obja.First_Name;
pertobeverlast=user_obja.Last_Name;
task=user_obja.qualification_name
//alert(username+'username');
//alert(typofver+'typofver');
//alert(pertobever+'pertobever');
//alert(pertobeverlast+'pertobeverlast');
//alert(task+'task');
//alert(eeemail+'eeemail');

$("#userlistinsohh").text(username);

$('#named').text(user_obja.First_Name+user_obja.Last_Name );
$('#locv').text(user_obja.state);

var status_val_inpro = $('input:radio[name=radio-choice-a]:checked').val();
//alert(status_val_inpro+'status_val_inpro');

if(qualification_id == '84' || qualification_id == '85'|| qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
//alert('84 85 86 87 88');
if(status_val_inpro != 'Inprogress' ){
  //alert('Inprogress not');
  //alert(qualification_id+'for int inside tru');
  $('#intlife').show();

}else{
   $('#intlife').hide();
}
}


//radio button show int start
var status_val_inpro = $('input:radio[name=radio-choice-a]:checked').val();
//alert(status_val_inpro);
if(status_val_inpro == 'Inprogress'){
$('.verinot').hide(); 
$('.chatshowhide').show();
}
if(status_val_inpro == 'Verified' || status_val_inpro == 'Notverified' ){
$('.verinot').show();
$('.chatshowhide').hide();

}
/*$(document).off('click', '#veriu').on('click', '#veriu', function() {
  alert('1');
$('.verinot').show();
});

$(document).off('click', '#veriunot').on('click', '#veriunot', function() {
$('.verinot').show();
});*/
$( '#radio-choice-ab' ).click(function() {
$('.verinot').hide();
$('.chatshowhide').show();
$('#intlife').hide();
});

$( '#radio-choice-bb' ).click(function() {
  //alert('clicked verify true bbbbbbb'+qualification_id);

if(qualification_id == '84' || qualification_id == '85' || qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
  //alert(qualification_id+'clcik verify true button');
  $('#intlife').show();
}else{
$('#intlife').hide();
}
$('.verinot').show();
$('.chatshowhide').hide();
});

$( '#radio-choice-cb' ).click(function() {
  //alert('clicked verify false cccccccc'+qualification_id);
if(qualification_id == '84' || qualification_id == '85' || qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
  //alert(qualification_id+'clcik verify false button');
  $('#intlife').show();
}else{
$('#intlife').hide();
}
$('.verinot').show();
$('.chatshowhide').hide();
});

var status_val_inpr_inpro = $('input:radio[name=radio-choice-a-true]:checked').val();

//fir details
$( '#radio-choice-bb-instrue' ).click(function() {
  if(qualification_id == '97'){
    $('#owner_driver_two_field_hundred').show();
  }
});


//
if(qualification_id == '97' || qualification_id == '101' || qualification_id == '106' || qualification_id == '95' || qualification_id == '100' || qualification_id == '99' || qualification_id == '102'){
    $('#radio_insur_hs').show();
}

if(qualification_id == '97'){
  $('.insu_hide_old').hide();
 //   $('#accident_show').show();
 if(status_val_inpr_inpro == "Verified_ins"){
   $('#accident_show').show();
}
 $( '#radio-choice-bb-instrue' ).click(function() {
  if(qualification_id == '97'){
      $('#insu_accident_nine_seven_a').empty();
      $('#insu_investiagtor_nine_seven_b').empty();
      $('#owner_driver_two_field_hundred').hide();
      $('#plociy_one_zero_six').hide();
    $('#accident_show').show();

  }
});
/*$( '#radio-choice-ab-inpro' ).click(function() {
  alert('97');
  if(qualification_id == '97'){
    $('#accident_show').hide();
  }
});*/

}
		//fir
if(qualification_id == '97'){
	$('.insu_hide_old').hide();
 //$('#fir_two_field_nine_seven').show();
if(status_val_inpr_inpro == "Verified_ins"){
   $('#fir_two_field_nine_seven').show();
}
 $( '#radio-choice-bb-instrue' ).click(function() {
  if(qualification_id == '97'){
        $('#insu_accident_nine_seven_a').empty();
          $('#insu_investiagtor_nine_seven_b').empty();
$('#accident_three_field_nine_five').hide();
 $('#claimant_details_two_field_hundred_zero_two').hide();
  $('#outside_driver_two_field_nine_nine').hide();
  $('#insured_one_zero_one').hide();
  $('#owner_driver_two_field_hundred').hide();

    $('#fir_two_field_nine_seven').show();

  }
});
$( '#radio-choice-ab-inpro' ).click(function() {
  //alert('97');
  if(qualification_id == '97'){
    $('#fir_two_field_nine_seven').hide();
  }
});
	}
		//insured
if(qualification_id == '101'){
	$('.insu_hide_old').hide();
 //$('#insured_one_zero_one').show();
   if(status_val_inpr_inpro == "Verified_ins"){
      $('#insured_one_zero_one').show();
}
$( '#radio-choice-bb-instrue' ).click(function() {
  if(qualification_id == '101'){
        $('#insu_accident_hundred_a').empty();
        $('#insu_investiagtor_hundred_b').empty();
$('#accident_three_field_nine_five').hide();
 $('#claimant_details_two_field_hundred_zero_two').hide();
  $('#outside_driver_two_field_nine_nine').hide();
  $('#fir_two_field_nine_seven').hide();
  $('#owner_driver_two_field_hundred').hide();
    $('#insured_one_zero_one').show();
  }
});
$( '#radio-choice-ab-inpro' ).click(function() {
  //alert('101');
  if(qualification_id == '101'){
    $('#insured_one_zero_one').hide();
  }
});
	}
		//policy
if(qualification_id == '106'){
	$('.insu_hide_old').hide();
// $('#plociy_one_zero_six').show();
	  if(status_val_inpr_inpro == "Verified_ins"){
      $('#plociy_one_zero_six').show();
}
$( '#radio-choice-bb-instrue' ).click(function() {
  if(qualification_id == '106'){
        $('#insu_accident_hundred_a').empty();
        $('#insu_investiagtor_hundred_b').empty();
        $('#fir_two_field_nine_seven').hide();
           $('#owner_driver_two_field_hundred').hide();
    $('#plociy_one_zero_six').show();
  }
});
$( '#radio-choice-ab-inpro' ).click(function() {
 // alert('106');
  if(qualification_id == '106'){
    $('#plociy_one_zero_six').hide();
  }
});
  }

//accident
if(qualification_id == '95'){
	$('.insu_hide_old').hide();
// $('#accident_three_field_nine_five').show();
    if(status_val_inpr_inpro == "Verified_ins"){
      $('#accident_three_field_nine_five').show();
}

$( '#radio-choice-bb-instrue' ).click(function() {
  if(qualification_id == '95'){
        $('#insu_accident_nine_five_a').empty();
        $('#insu_inves_nine_five_b').empty();
        $('#insu_final_nine_five_c').empty();

  
  $('#claimant_details_two_field_hundred_zero_two').hide();
  $('#outside_driver_two_field_nine_nine').hide();
   $('#insured_one_zero_one').hide();
    $('#fir_two_field_nine_seven').hide();
      $('#owner_driver_two_field_hundred').hide();

        $('#accident_three_field_nine_five').show();
  }
});
$( '#radio-choice-ab-inpro' ).click(function() {
  //alert("95");
  if(qualification_id == '95'){
    $('#accident_three_field_nine_five').hide();

  }
});
	}
	//owner driver
if(qualification_id == '100'){
	$('.insu_hide_old').hide();
  if(status_val_inpr_inpro == "Verified_ins"){
      $('#owner_driver_two_field_hundred').show();
}
$( '#radio-choice-bb-instrue' ).click(function() {
  if(qualification_id == '100'){
        $('#insu_accident_hundred_a').empty();
        $('#insu_investiagtor_hundred_b').empty();
   $('#accident_three_field_nine_five').hide();
 $('#claimant_details_two_field_hundred_zero_two').hide();
  $('#outside_driver_two_field_nine_nine').hide();
  $('#insured_one_zero_one').hide();
  $('#fir_two_field_nine_seven').hide();
    $('#owner_driver_two_field_hundred').show();
  }
});
$( '#radio-choice-ab-inpro' ).click(function() {
 // alert('100');
  if(qualification_id == '100'){
    $('#owner_driver_two_field_hundred').hide();
  }
});
	}
		//outside driver
if(qualification_id == '99'){
	$('.insu_hide_old').hide();
 //$('#outside_driver_two_field_nine_nine').show();
     if(status_val_inpr_inpro == "Verified_ins"){
      $('#outside_driver_two_field_nine_nine').show();
}
$( '#radio-choice-bb-instrue' ).click(function() {
  if(qualification_id == '99'){
        $('#insu_accident_hundred_a').empty();
        $('#insu_investiagtor_hundred_b').empty();
       $('#accident_three_field_nine_five').hide();
 $('#claimant_details_two_field_hundred_zero_two').hide();
  $('#insured_one_zero_one').hide();
  $('#fir_two_field_nine_seven').hide();
  $('#owner_driver_two_field_hundred').hide();
    $('#outside_driver_two_field_nine_nine').show();
  }
});
$( '#radio-choice-ab-inpro' ).click(function() {
  //alert('99');
  if(qualification_id == '99'){
    $('#outside_driver_two_field_nine_nine').hide();
  }
});
	}
			//claimant driver
if(qualification_id == '102'){
	$('.insu_hide_old').hide();
 //$('#claimant_details_two_field_hundred_zero_two').show();
      if(status_val_inpr_inpro == "Verified_ins"){
      $('#claimant_details_two_field_hundred_zero_two').show();
}
$( '#radio-choice-bb-instrue' ).click(function() {
  if(qualification_id == '102'){
        $('#insu_accident_hundred_a').empty();
        $('#insu_investiagtor_hundred_b').empty();
       
$('#accident_three_field_nine_five').hide();
  $('#outside_driver_two_field_nine_nine').hide();
  $('#insured_one_zero_one').hide();
  $('#fir_two_field_nine_seven').hide();
  $('#owner_driver_two_field_hundred').hide();

    $('#claimant_details_two_field_hundred_zero_two').show();
  }
});
$( '#radio-choice-ab-inpro' ).click(function() {
  //alert('102');
  if(qualification_id == '102'){
    $('#claimant_details_two_field_hundred_zero_two').hide();
  }
});
	}

$(document).off('click', '#chatSendButton_insuran').on('click', '#chatSendButton_insuran', function() { 
//alert('chat insurance    asdf');
var insu_accident_nine_seven_a=document.getElementById('insu_accident_nine_seven_a').value;
var insu_investiagtor_nine_seven_b=document.getElementById('insu_investiagtor_nine_seven_b').value;

var status_val_inpr_inpro = $('input:radio[name=radio-choice-a-true]:checked').val();
//alert(status_val_inpr_inpro);
var loginistant_insu=document.getElementById('messageText_insu').value;
//alert(loginistant_insu+'loginistant_insu');

if(loginistant_insu != '' && status_val_inpr_inpro == 'Inprogress_ins'){

//alert('chat');

$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

//alert(sdocument+'sdocument'+'save typed msg');
var formData = $("#callAjaxForm").serialize();
//alert('updateactivitya msg');
$.ajax({
  type: "POST",
url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/chat_insu.php?loginistant_insu="+loginistant_insu+"&verification_user_id="+verification_user_id+"&coordinator_id="+coordinator_id+"&status_val_inpro="+status_val_inpro+"&remarkg="+remarkg+"&qualification_id="+qualification_id+"&username="+username+"&typofver="+typofver+"&pertobever="+pertobever+"&pertobeverlast="+pertobeverlast+"&task="+task+"&eeemail="+eeemail+"&user_id="+user_id,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});
document.getElementById('messageText_insu').value="";
}

if(status_val_inpr_inpro != 'Inprogress_ins'){//radio button
//fir version of the accident start
if(qualification_id == '97'){
	//alert('97');
if(insu_accident_nine_seven_a != '' && insu_investiagtor_nine_seven_b != ''){

/*  document.getElementById('insu_accident_nine_seven_a').value = "";
document.getElementById('insu_investiagtor_nine_seven_b').value = "";*/
  document.getElementById('insu_accident_hundred_a').value = "";
document.getElementById('insu_investiagtor_hundred_b').value = "";
  document.getElementById('insu_accident_nine_nine_a').value = "";
document.getElementById('insu_investiagtor_nine_nine_b').value = "";
  document.getElementById('insu_accident_one_zero_two_a').value = "";
document.getElementById('insu_investiagtor_one_zero_two_b').value = "";
  document.getElementById('insu_accident_nine_five_a').value = "";
document.getElementById('insu_inves_nine_five_b').value = "";
  document.getElementById('insu_final_nine_five_c').value = "";
document.getElementById('insu_final_one_zero_six').value = "";


/*alert(verification_user_id+'verification_user_id');
alert(qualification_id+'qualification_id');
alert(user_id+'user_id');
alert(state+'state');
alert(insu_accident_nine_seven_a+'insu_accident_nine_seven_a');
alert(insu_investiagtor_nine_seven_b+'insu_investiagtor_nine_seven_b');*/
var status="FV";

$.ajax({
    url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_nine_seven_a="+insu_accident_nine_seven_a+"&insu_investiagtor_nine_seven_b="+insu_investiagtor_nine_seven_b+"&status="+status+"&region="+region+"&user_id="+user_id+"&state="+state,
//  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_hundred_a="+insu_accident_hundred_a+"&insu_investiagtor_hundred_b="+insu_investiagtor_hundred_b+"&status="+status+"&region="+region+"&user_id="+user_id+"&state="+state,
  //url: 'http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/index_verifd_insu.php?',
  data:$('#insuform').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
//alert('Data available for the search made');

 
        sessionStorage.setItem("claimant_details_array",JSON.stringify(result[0]));
        sessionStorage.setItem("details_injured_array",JSON.stringify(result[1]));
        sessionStorage.setItem("details_deceased_array",JSON.stringify(result[2]));

        sessionStorage.setItem("driver_details_d_array",JSON.stringify(result[3]));
        sessionStorage.setItem("driver_details_o_array",JSON.stringify(result[4]));
        sessionStorage.setItem("fir_details_array",JSON.stringify(result[5]));


        sessionStorage.setItem("accident_details_array",JSON.stringify(result[6]));
        sessionStorage.setItem("vehicle_details_array",JSON.stringify(result[7]));
         sessionStorage.setItem("insured_per_details_array",JSON.stringify(result[8]));
          sessionStorage.setItem("verification_master_arra",JSON.stringify(result[9]));
           sessionStorage.setItem("policy_details_array",JSON.stringify(result[10]));

      sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[11]));
        sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[12]));
         sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[13]));
          sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[14]));
           sessionStorage.setItem("supervisor_inprogress_array",JSON.stringify(result[15]));

      sessionStorage.setItem("supervisor_verified_array",JSON.stringify(result[16]));
        sessionStorage.setItem("supervisor_completed_array",JSON.stringify(result[17]));
         sessionStorage.setItem("supervisor_not_verified_array",JSON.stringify(result[18]));
   


// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

/*$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#insuform").serialize();
alert('drop button value insert 97');
$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_nine_seven_a="+insu_accident_nine_seven_a+"&insu_investiagtor_nine_seven_b="+insu_investiagtor_nine_seven_b+"&status="+status,
  data: formData,
  success: onSuccessad,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorad
});*/

}
}
//fir version of the accident end
//owner driver details start
var insu_accident_hundred_a=document.getElementById('insu_accident_hundred_a').value;
var insu_investiagtor_hundred_b=document.getElementById('insu_investiagtor_hundred_b').value;

//alert(insu_accident_hundred_a+'1');
//alert(insu_investiagtor_hundred_b+'2');
if(qualification_id == '100'){
	//alert('100');
//owner driver details start
if(insu_accident_hundred_a != '' && insu_investiagtor_hundred_b != ''){

  document.getElementById('insu_accident_nine_seven_a').value = "";
document.getElementById('insu_investiagtor_nine_seven_b').value = "";
/*  document.getElementById('insu_accident_hundred_a').value = "";
document.getElementById('insu_investiagtor_hundred_b').value = "";*/
  document.getElementById('insu_accident_nine_nine_a').value = "";
document.getElementById('insu_investiagtor_nine_nine_b').value = "";
  document.getElementById('insu_accident_one_zero_two_a').value = "";
document.getElementById('insu_investiagtor_one_zero_two_b').value = "";
  document.getElementById('insu_accident_nine_five_a').value = "";
document.getElementById('insu_inves_nine_five_b').value = "";
  document.getElementById('insu_final_nine_five_c').value = "";
document.getElementById('insu_final_one_zero_six').value = "";

var status="OV";

$.ajax({
  //url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_nine_five_a="+insu_accident_nine_five_a+"&insu_inves_nine_five_b="+insu_inves_nine_five_b+"&insu_final_nine_five_c="+insu_final_nine_five_c+"&status="+status+"&region="+region+"&user_id="+user_id+"&state="+state,
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_hundred_a="+insu_accident_hundred_a+"&insu_investiagtor_hundred_b="+insu_investiagtor_hundred_b+"&status="+status+"&region="+region+"&user_id="+user_id+"&state="+state,
  //url: 'http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/index_verifd_insu.php?',
  data:$('#insuform').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
//alert('Data available for the search made');

 
        sessionStorage.setItem("claimant_details_array",JSON.stringify(result[0]));
        sessionStorage.setItem("details_injured_array",JSON.stringify(result[1]));
        sessionStorage.setItem("details_deceased_array",JSON.stringify(result[2]));

        sessionStorage.setItem("driver_details_d_array",JSON.stringify(result[3]));
        sessionStorage.setItem("driver_details_o_array",JSON.stringify(result[4]));
        sessionStorage.setItem("fir_details_array",JSON.stringify(result[5]));


        sessionStorage.setItem("accident_details_array",JSON.stringify(result[6]));
        sessionStorage.setItem("vehicle_details_array",JSON.stringify(result[7]));
         sessionStorage.setItem("insured_per_details_array",JSON.stringify(result[8]));
          sessionStorage.setItem("verification_master_arra",JSON.stringify(result[9]));
           sessionStorage.setItem("policy_details_array",JSON.stringify(result[10]));

      sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[11]));
        sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[12]));
         sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[13]));
          sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[14]));
           sessionStorage.setItem("supervisor_inprogress_array",JSON.stringify(result[15]));

      sessionStorage.setItem("supervisor_verified_array",JSON.stringify(result[16]));
        sessionStorage.setItem("supervisor_completed_array",JSON.stringify(result[17]));
         sessionStorage.setItem("supervisor_not_verified_array",JSON.stringify(result[18]));
   


// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});


/*$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#insuform").serialize();
alert('drop button value insert 100');
$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_hundred_a="+insu_accident_hundred_a+"&insu_investiagtor_hundred_b="+insu_investiagtor_hundred_b+"&status="+status,
  data: formData,
  success: onSuccessad,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorad
});*/

}
}       
//owner driver details end
//outside driver details start
var insu_accident_nine_nine_a=document.getElementById('insu_accident_nine_nine_a').value;
var insu_investiagtor_nine_nine_b=document.getElementById('insu_investiagtor_nine_nine_b').value;

//alert(insu_accident_nine_nine_a+'1');
//alert(insu_investiagtor_nine_nine_b+'2');
if(qualification_id == '99'){
	//alert('99');
//OUTSIDE driver details start
if(insu_accident_nine_nine_a != '' && insu_investiagtor_nine_nine_b != ''){

  document.getElementById('insu_accident_nine_seven_a').value = "";
document.getElementById('insu_investiagtor_nine_seven_b').value = "";
  document.getElementById('insu_accident_hundred_a').value = "";
document.getElementById('insu_investiagtor_hundred_b').value = "";
/*  document.getElementById('insu_accident_nine_nine_a').value = "";
document.getElementById('insu_investiagtor_nine_nine_b').value = "";*/
  document.getElementById('insu_accident_one_zero_two_a').value = "";
document.getElementById('insu_investiagtor_one_zero_two_b').value = "";
  document.getElementById('insu_accident_nine_five_a').value = "";
document.getElementById('insu_inves_nine_five_b').value = "";
  document.getElementById('insu_final_nine_five_c').value = "";
document.getElementById('insu_final_one_zero_six').value = "";

/*alert(verification_user_id+'verification_user_id');
alert(qualification_id+'qualification_id');
alert(user_id+'user_id');
alert(state+'state');*/
var status="DV";

$.ajax({
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_nine_nine_a="+insu_accident_nine_nine_a+"&insu_investiagtor_nine_nine_b="+insu_investiagtor_nine_nine_b+"&status="+status+"&region="+region+"&user_id="+user_id+"&state="+state,
  //url: 'http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/index_verifd_insu.php?',
  data:$('#insuform').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
//alert('Data available for the search made');

 
        sessionStorage.setItem("claimant_details_array",JSON.stringify(result[0]));
        sessionStorage.setItem("details_injured_array",JSON.stringify(result[1]));
        sessionStorage.setItem("details_deceased_array",JSON.stringify(result[2]));

        sessionStorage.setItem("driver_details_d_array",JSON.stringify(result[3]));
        sessionStorage.setItem("driver_details_o_array",JSON.stringify(result[4]));
        sessionStorage.setItem("fir_details_array",JSON.stringify(result[5]));


        sessionStorage.setItem("accident_details_array",JSON.stringify(result[6]));
        sessionStorage.setItem("vehicle_details_array",JSON.stringify(result[7]));
         sessionStorage.setItem("insured_per_details_array",JSON.stringify(result[8]));
          sessionStorage.setItem("verification_master_arra",JSON.stringify(result[9]));
           sessionStorage.setItem("policy_details_array",JSON.stringify(result[10]));

      sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[11]));
        sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[12]));
         sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[13]));
          sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[14]));
           sessionStorage.setItem("supervisor_inprogress_array",JSON.stringify(result[15]));

      sessionStorage.setItem("supervisor_verified_array",JSON.stringify(result[16]));
        sessionStorage.setItem("supervisor_completed_array",JSON.stringify(result[17]));
         sessionStorage.setItem("supervisor_not_verified_array",JSON.stringify(result[18]));
   


// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

/*$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#insuform").serialize();
alert('drop button value insert 99');
$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_nine_nine_a="+insu_accident_nine_nine_a+"&insu_investiagtor_nine_nine_b="+insu_investiagtor_nine_nine_b+"&status="+status,
  data: formData,
  success: onSuccessad,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorad
});*/

}
}
//outside driver details end
//CLAIMANT details start
var insu_accident_one_zero_two_a=document.getElementById('insu_accident_one_zero_two_a').value;
var insu_investiagtor_one_zero_two_b=document.getElementById('insu_investiagtor_one_zero_two_b').value;

//alert(insu_accident_nine_nine_a+'1');
//alert(insu_investiagtor_nine_nine_b+'2');
if(qualification_id == '102'){
	//alert('102');
//claimant details start
if(insu_accident_one_zero_two_a != '' && insu_investiagtor_one_zero_two_b != ''){

  document.getElementById('insu_accident_nine_seven_a').value = "";
document.getElementById('insu_investiagtor_nine_seven_b').value = "";
  document.getElementById('insu_accident_hundred_a').value = "";
document.getElementById('insu_investiagtor_hundred_b').value = "";
  document.getElementById('insu_accident_nine_nine_a').value = "";
document.getElementById('insu_investiagtor_nine_nine_b').value = "";
 /* document.getElementById('insu_accident_one_zero_two_a').value = "";
document.getElementById('insu_investiagtor_one_zero_two_b').value = "";*/
  document.getElementById('insu_accident_nine_five_a').value = "";
document.getElementById('insu_inves_nine_five_b').value = "";
  document.getElementById('insu_final_nine_five_c').value = "";
document.getElementById('insu_final_one_zero_six').value = "";

/*alert(verification_user_id+'verification_user_id');
alert(qualification_id+'qualification_id');
alert(user_id+'user_id');
alert(state+'state');*/
var status="CV";

$.ajax({
//  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_nine_five_a="+insu_accident_nine_five_a+"&insu_inves_nine_five_b="+insu_inves_nine_five_b+"&insu_final_nine_five_c="+insu_final_nine_five_c+"&status="+status+"&region="+region+"&user_id="+user_id+"&state="+state,
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_one_zero_two_a="+insu_accident_one_zero_two_a+"&insu_investiagtor_one_zero_two_b="+insu_investiagtor_one_zero_two_b+"&status="+status+"&region="+region+"&user_id="+user_id+"&state="+state,
  data:$('#insuform').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
//alert('Data available for the search made');

 
        sessionStorage.setItem("claimant_details_array",JSON.stringify(result[0]));
        sessionStorage.setItem("details_injured_array",JSON.stringify(result[1]));
        sessionStorage.setItem("details_deceased_array",JSON.stringify(result[2]));

        sessionStorage.setItem("driver_details_d_array",JSON.stringify(result[3]));
        sessionStorage.setItem("driver_details_o_array",JSON.stringify(result[4]));
        sessionStorage.setItem("fir_details_array",JSON.stringify(result[5]));


        sessionStorage.setItem("accident_details_array",JSON.stringify(result[6]));
        sessionStorage.setItem("vehicle_details_array",JSON.stringify(result[7]));
         sessionStorage.setItem("insured_per_details_array",JSON.stringify(result[8]));
          sessionStorage.setItem("verification_master_arra",JSON.stringify(result[9]));
           sessionStorage.setItem("policy_details_array",JSON.stringify(result[10]));

      sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[11]));
        sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[12]));
         sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[13]));
          sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[14]));
           sessionStorage.setItem("supervisor_inprogress_array",JSON.stringify(result[15]));

      sessionStorage.setItem("supervisor_verified_array",JSON.stringify(result[16]));
        sessionStorage.setItem("supervisor_completed_array",JSON.stringify(result[17]));
         sessionStorage.setItem("supervisor_not_verified_array",JSON.stringify(result[18]));
   


// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

/*$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#insuform").serialize();
//alert('drop button value insert 102');
$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_one_zero_two_a="+insu_accident_one_zero_two_a+"&insu_investiagtor_one_zero_two_b="+insu_investiagtor_one_zero_two_b+"&status="+status,
  data: formData,
  success: onSuccessad,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorad
});*/

}
}
//claimant details end
//accident details start
var insu_accident_nine_five_a=document.getElementById('insu_accident_nine_five_a').value;
var insu_inves_nine_five_b=document.getElementById('insu_inves_nine_five_b').value;
var insu_final_nine_five_c=document.getElementById('insu_final_nine_five_c').value;

//alert(insu_accident_nine_five_a+'1');
//alert(insu_inves_nine_five_b+'2');
//alert(insu_final_nine_five_c+'2');
if(qualification_id == '95'){
	//alert('95');
//accident details start
if(insu_accident_nine_five_a != '' && insu_inves_nine_five_b != '' && insu_final_nine_five_c !=''){

  document.getElementById('insu_accident_nine_seven_a').value = "";
document.getElementById('insu_investiagtor_nine_seven_b').value = "";
  document.getElementById('insu_accident_hundred_a').value = "";
document.getElementById('insu_investiagtor_hundred_b').value = "";
  document.getElementById('insu_accident_nine_nine_a').value = "";
document.getElementById('insu_investiagtor_nine_nine_b').value = "";
  document.getElementById('insu_accident_one_zero_two_a').value = "";
document.getElementById('insu_investiagtor_one_zero_two_b').value = "";
/*  document.getElementById('insu_accident_nine_five_a').value = "";
document.getElementById('insu_inves_nine_five_b').value = "";
  document.getElementById('insu_final_nine_five_c').value = "";*/
document.getElementById('insu_final_one_zero_six').value = "";

/*alert(verification_user_id+'verification_user_id');
alert(qualification_id+'qualification_id');
alert(user_id+'user_id');
alert(state+'state');*/
var status="AC";

$.ajax({
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_nine_five_a="+insu_accident_nine_five_a+"&insu_inves_nine_five_b="+insu_inves_nine_five_b+"&insu_final_nine_five_c="+insu_final_nine_five_c+"&status="+status+"&region="+region+"&user_id="+user_id+"&state="+state,
  //url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_nine_nine_a="+insu_accident_nine_nine_a+"&insu_investiagtor_nine_nine_b="+insu_investiagtor_nine_nine_b+"&status="+status+"&region="+region+"&user_id="+user_id+"&state="+state,
  //url: 'http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/index_verifd_insu.php?',
  data:$('#insuform').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
//alert('Data available for the search made');

 
        sessionStorage.setItem("claimant_details_array",JSON.stringify(result[0]));
        sessionStorage.setItem("details_injured_array",JSON.stringify(result[1]));
        sessionStorage.setItem("details_deceased_array",JSON.stringify(result[2]));

        sessionStorage.setItem("driver_details_d_array",JSON.stringify(result[3]));
        sessionStorage.setItem("driver_details_o_array",JSON.stringify(result[4]));
        sessionStorage.setItem("fir_details_array",JSON.stringify(result[5]));


        sessionStorage.setItem("accident_details_array",JSON.stringify(result[6]));
        sessionStorage.setItem("vehicle_details_array",JSON.stringify(result[7]));
         sessionStorage.setItem("insured_per_details_array",JSON.stringify(result[8]));
          sessionStorage.setItem("verification_master_arra",JSON.stringify(result[9]));
           sessionStorage.setItem("policy_details_array",JSON.stringify(result[10]));

      sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[11]));
        sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[12]));
         sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[13]));
          sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[14]));
           sessionStorage.setItem("supervisor_inprogress_array",JSON.stringify(result[15]));

      sessionStorage.setItem("supervisor_verified_array",JSON.stringify(result[16]));
        sessionStorage.setItem("supervisor_completed_array",JSON.stringify(result[17]));
         sessionStorage.setItem("supervisor_not_verified_array",JSON.stringify(result[18]));
   


// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

/*$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#insuform").serialize();
alert('drop button value insert 95');
$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_nine_five_a="+insu_accident_nine_five_a+"&insu_inves_nine_five_b="+insu_inves_nine_five_b+"&insu_final_nine_five_c="+insu_final_nine_five_c+"&status="+status,
  data: formData,
  success: onSuccessad,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorad
});*/

}
}
//accident details end
//policy final command details start
var insu_final_one_zero_six=document.getElementById('insu_final_one_zero_six').value;

//alert(insu_final_one_zero_six+'1');

if(qualification_id == '106'){ 
	//alert('106');

if(insu_final_one_zero_six != '' ){

 document.getElementById('insu_accident_nine_seven_a').value = "";
document.getElementById('insu_investiagtor_nine_seven_b').value = "";
  document.getElementById('insu_accident_hundred_a').value = "";
document.getElementById('insu_investiagtor_hundred_b').value = "";
  document.getElementById('insu_accident_nine_nine_a').value = "";
document.getElementById('insu_investiagtor_nine_nine_b').value = "";
  document.getElementById('insu_accident_one_zero_two_a').value = "";
document.getElementById('insu_investiagtor_one_zero_two_b').value = "";
  document.getElementById('insu_accident_nine_five_a').value = "";
document.getElementById('insu_inves_nine_five_b').value = "";
  document.getElementById('insu_final_nine_five_c').value = "";
/*document.getElementById('insu_final_one_zero_six').value = "";*/

var status="ASDE";

$.ajax({
  //url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_nine_five_a="+insu_accident_nine_five_a+"&insu_inves_nine_five_b="+insu_inves_nine_five_b+"&insu_final_nine_five_c="+insu_final_nine_five_c+"&status="+status+"&region="+region+"&user_id="+user_id+"&state="+state,
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/one_zero_six.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_final_one_zero_six="+insu_final_one_zero_six+"&status="+status+"&region="+region+"&user_id="+user_id+"&state="+state,
  data:$('#insuform').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
//alert('Data available for the search made');

 
        sessionStorage.setItem("claimant_details_array",JSON.stringify(result[0]));
        sessionStorage.setItem("details_injured_array",JSON.stringify(result[1]));
        sessionStorage.setItem("details_deceased_array",JSON.stringify(result[2]));

        sessionStorage.setItem("driver_details_d_array",JSON.stringify(result[3]));
        sessionStorage.setItem("driver_details_o_array",JSON.stringify(result[4]));
        sessionStorage.setItem("fir_details_array",JSON.stringify(result[5]));


        sessionStorage.setItem("accident_details_array",JSON.stringify(result[6]));
        sessionStorage.setItem("vehicle_details_array",JSON.stringify(result[7]));
         sessionStorage.setItem("insured_per_details_array",JSON.stringify(result[8]));
          sessionStorage.setItem("verification_master_arra",JSON.stringify(result[9]));
           sessionStorage.setItem("policy_details_array",JSON.stringify(result[10]));

      sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[11]));
        sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[12]));
         sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[13]));
          sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[14]));
           sessionStorage.setItem("supervisor_inprogress_array",JSON.stringify(result[15]));

      sessionStorage.setItem("supervisor_verified_array",JSON.stringify(result[16]));
        sessionStorage.setItem("supervisor_completed_array",JSON.stringify(result[17]));
         sessionStorage.setItem("supervisor_not_verified_array",JSON.stringify(result[18]));
   


// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

/*$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});


var formData = $("#insuform").serialize();
alert('drop button value insert 106');
$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/one_zero_six.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_final_one_zero_six="+insu_final_one_zero_six+"&status="+status,
  data: formData,
  success: onSuccessad,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorad
});*/

}
}
//policy final command details end
//insured final command details start
var insu_final_one_zero_one=document.getElementById('insu_final_one_zero_one').value;

//alert(insu_final_one_zero_one+'1');

if(qualification_id == '101'){
	//alert('101');
	
if(insu_final_one_zero_one != '' ){

var status="ASD";

$.ajax({
  //url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/insur.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_accident_nine_five_a="+insu_accident_nine_five_a+"&insu_inves_nine_five_b="+insu_inves_nine_five_b+"&insu_final_nine_five_c="+insu_final_nine_five_c+"&status="+status+"&region="+region+"&user_id="+user_id+"&state="+state,
 // url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/one_zero_six.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_final_one_zero_six="+insu_final_one_zero_six+"&status="+status+"&region="+region+"&user_id="+user_id+"&state="+state,
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/one_zero_six.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_final_one_zero_one="+insu_final_one_zero_one+"&status="+status+"&region="+region+"&user_id="+user_id+"&state="+state,
  data:$('#insuform').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
//alert('Data available for the search made');

 
        sessionStorage.setItem("claimant_details_array",JSON.stringify(result[0]));
        sessionStorage.setItem("details_injured_array",JSON.stringify(result[1]));
        sessionStorage.setItem("details_deceased_array",JSON.stringify(result[2]));

        sessionStorage.setItem("driver_details_d_array",JSON.stringify(result[3]));
        sessionStorage.setItem("driver_details_o_array",JSON.stringify(result[4]));
        sessionStorage.setItem("fir_details_array",JSON.stringify(result[5]));


        sessionStorage.setItem("accident_details_array",JSON.stringify(result[6]));
        sessionStorage.setItem("vehicle_details_array",JSON.stringify(result[7]));
         sessionStorage.setItem("insured_per_details_array",JSON.stringify(result[8]));
          sessionStorage.setItem("verification_master_arra",JSON.stringify(result[9]));
           sessionStorage.setItem("policy_details_array",JSON.stringify(result[10]));

      sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[11]));
        sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[12]));
         sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[13]));
          sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[14]));
           sessionStorage.setItem("supervisor_inprogress_array",JSON.stringify(result[15]));

      sessionStorage.setItem("supervisor_verified_array",JSON.stringify(result[16]));
        sessionStorage.setItem("supervisor_completed_array",JSON.stringify(result[17]));
         sessionStorage.setItem("supervisor_not_verified_array",JSON.stringify(result[18]));
   


// alert(region+'refresh new regionArray_array');
$.mobile.loading().hide();
$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

/*$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#insuform").serialize();
alert('drop button value insert 101');
$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/one_zero_six.php?verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&user_id="+user_id+"&state="+state+"&insu_final_one_zero_one="+insu_final_one_zero_one+"&status="+status,
  data: formData,
  success: onSuccessad,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorad
});*/

}
}
//insured final command details end
}//close for radio button backup
});
function onErrorad(data, status)
{
alert("Network error ins");

}  
function onSuccessad(data, status)
{
	//alert("Successfully Submitted ins");
  $.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
  return false;
}


//radio button show int end

//alert(supervisor_activity_log_array+'super log');

//alert(qualification_id+'qualification_id');
//alert(verification_user_id+'verification_user_id');

for(a=0;a<supervisor_activity_log_array.length;a++){

  activity_lok_obj = supervisor_activity_log_array[a];

  idf=activity_lok_obj.verification_id;
  text=activity_lok_obj.activity_log;
  image=activity_lok_obj.document;
  status=activity_lok_obj.status;
  type=activity_lok_obj.type;
  date_new=activity_lok_obj.log_date;

    First_Name=activity_lok_obj.First_Name;

  var s = date_new;
  var bits = s.split(/\D/);
  var datea = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);
//alert(date);
var date=datea.getDate()+'/'+parseInt(datea.getMonth() + 1)+'/'+datea.getFullYear();
var time=datea.getHours()+':'+datea.getMinutes();


if(idf == verification_user_id && type == qualification_id ){
/*
alert(qualification_id+'qualification_id iiiiiiiiiiiiinnnnnnnnn'+type+'type');
alert(verification_user_id+'verification_user_id iiiiiinnnn'+idf+'idf');*/

//alert(date+'2');
if(status == 'supervisor' && text !==''){
//alert('supervisor');

//var chatr='<div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+'</p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" style="padding: 0px 2px 1px 18px;"><p style="float: right;margin-right: 25px;margin-top: -5px;color:#54566B">hari</p></div></div> '
//var chatr='<div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3 msg_span_3_new">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+'</p></div><div class="ui-block-c msg_grid_5 msg_grid_5_c"><img src="images/primary/chat-icon.png" alt="" class="msg_img_new" ><p style="" class="">TVO</p></div></div>'
//var chatr=' <div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span><a href="#"  class="delete" id="'+activity_lok_obj.activity_log_id+'"><img src="images/primary/delete_icon1.png"  class="msgg_delete_icon" alt="" ></a></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+' </p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">'+username_tvo+'</p></div></div> '
var chatr=' <div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3" style="margin-top:-12px;padding:5px"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span><a href="#"  class="delete" id="'+activity_lok_obj.activity_log_id+'"><img src="images/primary/delete_icon1.png"  class="msgg_delete_icon" alt="" ></a></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bga">'+activity_lok_obj.activity_log+' </p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icona.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">'+username_tvo+'</p></div></div> '

$('#chatr').append(chatr);
}
if(status == 'doc' && image !==''){
//alert('doc');

//var chatr='<div class="ui-grid-b" style="padding-top:5%;padding-bottom:5%"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bgg"><img src="http://insurance.fourthforce.in/insurance/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" style="padding: 0px 2px 1px 18px;"><p style="float: right;margin-right: 25px;margin-top: -5px;color:#54566B">hari</p></div></div>  '
//var chatr='<div class="ui-grid-b" style="padding-top:5%;padding-bottom:5%"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3 msg_span_3_new">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bgg"><img src="http://insurance.fourthforce.in/insurance/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_c"><img src="images/primary/chat-icon.png" alt="" class=""><p class="">TVO</p></div></div>'
var chatr='<br><div class="ui-grid-b"  id="image"><div class="ui-block-a msg_grid_3" style="margin-top: 6%;"> <i class="zmdi zmdi-time zmd-fw" style="    opacity: 0.5; padding-left:7%;"></i><span class="msg_span_3">'+time+'</span><br><span class="msg_span_3">'+date+'</span><a href="#"  class="delete" id="'+activity_lok_obj.activity_log_id+'"><img src="images/primary/delete_icon1.png"  class="img_delete_icon" alt="" ></a>  </div><div class="ui-block-b msg_box msg_grid_4 msg_mid_bgg"><p class="msg_grid_p_1 "><a href="#popupPhotoPortrait" data-rel="popup" data-position-to="window" class="ui-btn ui-corner-all ui-shadow ui-btn-inline im" data-transition="fade" id="'+activity_lok_obj.document+'"><img src="http://insurance.fourthforce.in/super/'+activity_lok_obj.document+'"  class="imgsize imguirot" alt="" ></a></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_1"><img src="images/primary/chat-icona.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">'+username_tvo+'</p></div></div> '

$('#chatr').append(chatr);
}

if(status == 'cor'){

//var chatr='<div class="ui-grid-b" style="padding-top:4%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon.png" alt="" style="    padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#54566B">STATE HEAD</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+' </p><br> </div><div class="ui-block-c msg_grid_5 msg_grid_sudeep"> <span class="msg_span_3 ">'+date+'</span><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:17%;padding-top: 7%;margin-top:-10px"></i><span class="msg_sudeep">'+time+'</span></div></div>'
var chatr='<br><div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon.png" alt="" style="width:80px;"   padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#1259BF">'+First_Name+'</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+'   </p><br> </div><div class="ui-block-c msg_grid_5 ms55"> <span class="msg_span_33">'+date+'</span><br><i class="zmdi zmdi-time zmd-fw ii" ></i><span class="msg_span_3">'+time+'</span></div></div>'

$('#chatr').append(chatr);
}

if(status == 'rh'){
var chatr='<br><div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-iconb.png" alt="" style="width:80px;"   padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#6A7D1B">'+First_Name+'</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tippo">'+activity_lok_obj.activity_log+'   </p><br> </div><div class="ui-block-c msg_grid_5 ms55"> <span class="msg_span_33">'+date+'</span><br><i class="zmdi zmdi-time zmd-fw ii" ></i><span class="msg_span_3">'+time+'</span></div></div>'

$('#chatr').append(chatr);
}

}



}

$(".im").click(function(){
  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");
//alert(img_id+'asdasdw');
var imz='<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right" style="background-color:#BC3217;width:50px;height: 50px;">Close</a><img src="http://insurance.fourthforce.in/super/'+img_id+'" alt="Photo portrait" class="imgzz imguirot">'
$('.imj').append(imz);
});

$(".delete").click(function(){
var element = $(this);
var del_id = element.attr("id");
//alert(del_id+'del_id');
if(confirm("Are you sure you want to delete this?")){
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/delete.php?del_id="+del_id,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});
}

});




//upload a file to server once onchange is detected
$('#pgAddBookBookImage').on('change', function () {
  $('#chatSendButton').hide();
  $('.uii').show();
  $(".ui-icon-loading").show();
$.mobile.loading("show", {
text: "Loading file...",
textVisible: true
});

//check to see if we have a file
var fName = document.getElementById('pgAddBookBookImage').files[0];

if (typeof (fName) === 'undefined') fName = '';

//get the file name
var ofName = fName.name;
//get the file extension
//alert(ofName+'fname');
//var ofExt = Mid(ofName, InStrRev(ofName, '.'));
// open a file reader to upload the file to the server
var reader = new FileReader();
// once the file reader has loaded the file contents
reader.onload = function() {
// get the dataURL of the file, a base 64 decoded string
var dataURL = reader.result;
//save the file to the server
var req = Ajax("http://staging.eimpressive.com/watchguardlive/savepng.php", "POST", "file=" + ofName + "&content=" + dataURL);

if (req.status == 200) {
// return the full path of the saved file
//alert('200');
  $('.uii').show();
  $(".ui-icon-loading").show();
$.mobile.loading("show", {
text: "Loading file...",
textVisible: true
});
fName = req.responseText;
//alert(fName+'fname');
$('#pgAddBookImagePreview').attr('src', dataURL);
//show a toast message that the file has been uploaded
/*$(".ui-icon-loading").show();
$.mobile.loading("show", {
text: "Loading file...",
textVisible: true
});*/
//alert('file has been uploaded');
//toastr.success(ofName + ' file uploaded.', 'Library');
}else {
// return a blank file name
fName = req.responseText;
  $('.uii').show();
  $(".ui-icon-loading").show();
$.mobile.loading("show", {
text: "Loading file...",
textVisible: true
});
//alert(fName+'fname not uploaded');
/*$(".ui-icon-loading").show();
$.mobile.loading("show", {
text: "Loading file...",
textVisible: true
});*/
//alert('file has been uploaded');
//alert(fName+'fname not been upload');
//show a toast message that the file has not been uploaded
//alert('show a toast message that the file has not been uploaded');
//toastr.error(ofName + ' file NOT uploaded.', 'Library');
}
//set the file name to store later
$('#pgAddBookBookImage').data('file', fName);
$(".ui-icon-loading").hide();
$.mobile.loading("hide");
$('.uii').hide();
$('#chatSendButton').show();

};
// start reading the file contents
reader.readAsDataURL(fName);

/*$.mobile.loading("hide");*/
});

function Ajax(URL, method, data, callback) {
  if (typeof(method) !== 'object') {
    var settings = new Object;
    if(!method || method === null || typeof(method) === 'undefined') method = "GET";
    settings.type = method.toUpperCase()
    if(!data || data === null || typeof(data) === 'undefined') data = "";
    settings.data = data;
    if (!callback) {
      settings.async = false;
      } else {
      settings.success = callback;
    settings.fail = callback}
  }
  return $.ajax(URL, settings);
}

function onSuccess(data, status)
{
  //alert(data);

  //var sdocument=$('input[type=file]').val('');
  //alert(sdocument);
  sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(data));

  currentobj_log_inpro =  JSON.parse(sessionStorage.getItem("supervisor_activity_log_array"));

  $('#chatr').empty();

  for(a=0;a<currentobj_log_inpro.length;a++){

    activity_lok_obj = currentobj_log_inpro[a];

    text=activity_lok_obj.activity_log;
    image=activity_lok_obj.document;
    status=activity_lok_obj.status;
    date_new=activity_lok_obj.log_date;

      type=activity_lok_obj.type;
  idf=activity_lok_obj.verification_id;


    First_Name=activity_lok_obj.First_Name;
    
    var s = date_new;
    var bits = s.split(/\D/);
    var datea = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);
//alert(date);
var date=datea.getDate()+'/'+parseInt(datea.getMonth() + 1)+'/'+datea.getFullYear();
var time=datea.getHours()+':'+datea.getMinutes();
//alert(date+'2');
//alert(verification_user_id+'verification_user_id'+'qualification_id'+qualification_id);
if(idf == verification_user_id && type == qualification_id ){
if(status == 'supervisor' && text !==''){
//alert('supervisor');

//var chatr=' <div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bg">'+activity_lok_obj.activity_log+' </p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icon.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">Tvo</p></div></div> '
var chatr=' <div class="ui-grid-b" style="padding-top:5%;"><div class="ui-block-a msg_grid_3" style="margin-top:-12px;padding:5px"><span class="msg_span_3">'+date+'</span> <br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;    padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span><a href="#"  class="delete" id="'+activity_lok_obj.activity_log_id+'"><img src="images/primary/delete_icon1.png"  class="msgg_delete_icon" alt="" ></a></div><div class="ui-block-b msg_grid_4">  <p class="msg_box msg_mid_bga">'+activity_lok_obj.activity_log+' </p></div><div class="ui-block-c msg_grid_5"><img src="images/primary/chat-icona.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">'+username_tvo+'</p></div></div> '

$('#chatr').append(chatr);
}

if(status == 'doc' && image !==''){
//alert('doc');
//var chatr='<div class="ui-grid-b"  id="image"><div class="ui-block-a msg_grid_3" style="margin-top: 6%;"> <i class="zmdi zmdi-time zmd-fw" style="    opacity: 0.5; padding-left:7%;"></i><span class="msg_span_3">'+time+'</span><br><span class="msg_span_3">'+date+'</span>  </div><div class="ui-block-b msg_box msg_grid_4 msg_mid_bgg"><p class="msg_grid_p_1 "><a href="#"  class=""><img src="http://insurance.fourthforce.in/insurance/super/'+activity_lok_obj.document+'" style="width:100px;height:80px;margin-left:25%" alt="Band"></a></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_1"><img src="images/use.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">Tvo</p></div></div> '
//var chatr='<br><div class="ui-grid-b"  id="image"><div class="ui-block-a msg_grid_3" style="margin-top: 6%;"> <i class="zmdi zmdi-time zmd-fw" style="    opacity: 0.5; padding-left:7%;"></i><span class="msg_span_3">'+time+'</span><br><span class="msg_span_3">'+date+'</span><a href="#"  class="delete" id="'+activity_lok_obj.activity_log_id+'"><img src="images/primary/delete_icon1.png"  class="img_delete_icon" alt="" ></a>  </div><div class="ui-block-b msg_box msg_grid_4 msg_mid_bgg"><p class="msg_grid_p_1 "><a href="#popupPhotoPortrait" data-rel="popup" data-position-to="window" class="ui-btn ui-corner-all ui-shadow ui-btn-inline im" data-transition="fade" id="'+activity_lok_obj.activity_log_id+'"><img src="http://insurance.fourthforce.in/insurance/super/'+activity_lok_obj.document+'"  class="imgsize" alt="" ></a></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_1"><img src="images/primary/chat-icon.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">'+username_tvo+'</p></div></div> '
var chatr='<br><div class="ui-grid-b"  id="image"><div class="ui-block-a msg_grid_3" style="margin-top: 6%;"> <i class="zmdi zmdi-time zmd-fw" style="    opacity: 0.5; padding-left:7%;"></i><span class="msg_span_3">'+time+'</span><br><span class="msg_span_3">'+date+'</span><a href="#"  class="delete" id="'+activity_lok_obj.activity_log_id+'"><img src="images/primary/delete_icon1.png"  class="img_delete_icon" alt="" ></a>  </div><div class="ui-block-b msg_box msg_grid_4 msg_mid_bgg"><p class="msg_grid_p_1 "><a href="#popupPhotoPortrait" data-rel="popup" data-position-to="window" class="ui-btn ui-corner-all ui-shadow ui-btn-inline im" data-transition="fade" id="'+activity_lok_obj.document+'"><img src="http://insurance.fourthforce.in/super/'+activity_lok_obj.document+'"  class="imgsize imguirot" alt="" ></a></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_1"><img src="images/primary/chat-icona.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">'+username_tvo+'</p></div></div> '

$('#chatr').append(chatr);
}

if(status == 'cor'){
//alert(activity_lok_obj.activity_log);
//var chatr='<div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon-state.png" alt="" style="width:80px;"   padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#54566B">State Head</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+'   </p><br> </div><div class="ui-block-c msg_grid_5"> <span class="msg_span_3">'+date+'</span><br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div></div>'
var chatr='<br><div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-icon.png" alt="" style="width:80px;"   padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#1259BF">'+First_Name+'</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tip">'+activity_lok_obj.activity_log+'   </p><br> </div><div class="ui-block-c msg_grid_5"> <span class="msg_span_3">'+date+'</span><br><i class="zmdi zmdi-time zmd-fw" style="opacity: 0.5; padding-left:7%;padding-top: 7%;margin-top:-10px"></i><span class="msg_span_3">'+time+'</span></div></div>'

$('#chatr').append(chatr);
}

if(status == 'rh'){
var chatr='<br><div class="ui-grid-b" style="padding-top:1%;"><div class="ui-block-a msg_grid_3"><img src="images/primary/chat-iconb.png" alt="" style="width:80px;"   padding: 10px 2px 1px 18px;"><p style=" margin-left: 15px;margin-top: -5px;color:#6A7D1B">'+First_Name+'</p></div><div class="ui-block-b msg_grid_4"> <p class="msg_box  tippo">'+activity_lok_obj.activity_log+'   </p><br> </div><div class="ui-block-c msg_grid_5 ms55"> <span class="msg_span_33">'+date+'</span><br><i class="zmdi zmdi-time zmd-fw ii" ></i><span class="msg_span_3">'+time+'</span></div></div>'

$('#chatr').append(chatr);
}

}
}

$(".im").click(function(){
  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");
//alert(img_id+'asdasdw');
//var imz='<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right" style="background-color:#3F4150;width:50px;height: 50px;">Close</a><img src="images/primary/Screenshot.png" alt="Photo portrait" class="imgzz">'
var imz='<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right" style="background-color:#BC3217;width:50px;height: 50px;">Close</a><img src="http://insurance.fourthforce.in/super/'+img_id+'" alt="Photo portrait" class="imgzz imguirot">'

$('.imj').append(imz);
});

$(".delete").click(function(){
var element = $(this);
var del_id = element.attr("id");
//alert(del_id+'del_id');
if(confirm("Are you sure you want to delete this?")){
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/delete.php?del_id="+del_id,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});
}
});

}

function onError(data, status)
{
alert("Network error: Please check your internet connection");
}        

var settings = {

  url: "http://insurance.fourthforce.in/uploadas.php",
  method: "POST",
  allowedTypes:"jpg,png,gif",
  /*allowedTypes:"jpg,png,gif,doc,pdf,zip",*/
  fileName: "myfile",
  multiple: true,
  
  onSuccess:function(files,data,xhr)
  {
    //alert('success');
    sessionStorage.setItem("ret",JSON.stringify(data));
    ret =  JSON.parse(sessionStorage.getItem("ret"));
    var res = ret.slice(12,100); //fourth
   // var res = ret.slice(143,300); //stage
   // alert(res+'res');
   //alert(verification_user_id+'verification_user_id');
      //alert(coordinator_id+'coordinator_id');
         //alert(res+'res');
          // alert(qualification_id+'qualification_id');

$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();

$.ajax({
  type: "POST",
url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/sdoc.php?verification_user_id="+verification_user_id+"&coordinator_id="+coordinator_id+"&res="+res+"&qualification_id="+qualification_id+"&user_id="+user_id,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});

    $("#status").html("<font color='green'>Upload is success</font>");
    
  },
    afterUploadAll:function()
    {
       // alert("all images uploaded!!");
    },
  onError: function(files,status,errMsg)
  {   
    $("#status").html("<font color='red'>Upload is Failed</font>");
  }
}
$("#mulitplefileuploader").uploadFile(settings);


$(document).off('click', '#chatSendButton').on('click', '#chatSendButton', function() { 

   /*$("#myPopupr").hide();*/
//alert("but pressed");
/*  var $element = $('.upload-filename').html();
    alert($element +'element');*/

/*$('.upload').empty();   */

/*var x = document.getElementById("myFile").value;*/

var remarkg=document.getElementById('remarkg').value;

//alert(remarkg+'remarkg');

var loginistant=document.getElementById('messageText').value;

var status_val_inpro = $('input:radio[name=radio-choice-a]:checked').val();
//var status_val_inpro='Inprogress';
//alert(status_val_inpro +'status');
//var sdocument=$('input[type=file]').val().split('\\').pop();



//alert(sdocument+' submit');

var inte=document.getElementById('inte').value;
//alert(inte+'inte 1');
var inte_rat=document.getElementById('inte_rat').value;
//alert(inte_rat+'inte_rat 1 b');
var beh=document.getElementById('beh').value;
//alert(beh+'beh 2 a');
var beh_rat=document.getElementById('beh_rat').value;
//alert(beh_rat+'beh_rat 2 b');
var hab=document.getElementById('hab').value;
//alert(hab+'hab 3 ');
var hab_rat=document.getElementById('hab_rat').value;
//alert(hab_rat+'hab_rat 3 b');


if(loginistant == '' ){
if(remarkg != ''  && status_val_inpro != 'Inprogress'){

//alert(hab_rat+'hab_rat'+qualification_id);
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();

//alert(status_val_inpro+'status_val_inpro');
//alert(typofver+'typofver');
//alert(pertobever+'pertobever');
//alert(pertobeverlast+'pertobeverlast');
//alert(task+'task');
//alert(eeemail+'eeemail');
 

$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/chat.php?loginistant="+loginistant+"&verification_user_id="+verification_user_id+"&coordinator_id="+coordinator_id+"&status_val_inpro="+status_val_inpro+"&remarkg="+remarkg+"&qualification_id="+qualification_id+"&username="+username+"&typofver="+typofver+"&pertobever="+pertobever+"&pertobeverlast="+pertobeverlast+"&task="+task+"&eeemail="+eeemail+"&user_id="+user_id,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});
}else{
  alert('fill up the empty field');
}
}

if(loginistant == ''  ){
  if(qualification_id == '84' || qualification_id == '85' || qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
if(status_val_inpro != 'Inprogress' && inte != 'Select Reference' && inte_rat != 'Select Rating' && beh !='Select Reference' && beh_rat != 'Select Rating' && hab !='Select Reference' && hab_rat != 'Select Rating'){

$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/lifeint.php?verification_user_id="+verification_user_id+"&coordinator_id="+coordinator_id+"&qualification_id="+qualification_id+"&inte="+inte+"&inte_rat="+inte_rat+"&beh="+beh+"&beh_rat="+beh_rat+"&hab="+hab+"&hab_rat="+hab_rat,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});
}
}
}



if(loginistant != '' && status_val_inpro == 'Inprogress'){



$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

//alert(sdocument+'sdocument'+'save typed msg');
var formData = $("#callAjaxForm").serialize();
//alert('updateactivitya msg');
$.ajax({
  type: "POST",
url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/chat.php?loginistant="+loginistant+"&verification_user_id="+verification_user_id+"&coordinator_id="+coordinator_id+"&status_val_inpro="+status_val_inpro+"&remarkg="+remarkg+"&qualification_id="+qualification_id+"&username="+username+"&typofver="+typofver+"&pertobever="+pertobever+"&pertobeverlast="+pertobeverlast+"&task="+task+"&eeemail="+eeemail+"&user_id="+user_id,

  data: formData,
  success: onSuccess,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onError
});

}



if(status_val_inpro == 'Inprogress'){
  document.getElementById('messageText').value = "";
document.getElementById('remarkg').value = "";
 $.mobile.changePage($('#primarymessage'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(remarkg != ''  && status_val_inpro != 'Inprogress' ){ 
//alert('dads');
  document.getElementById('messageText').value = "";
document.getElementById('remarkg').value = "";
  //alert(region_num);
  //$("input[type='radio']:first").attr("checked", "checked");
//alert(region);
//alert(user_id);

 alert('Verification Record Submitted Successfully');
//alert('Verification Record Submitted Successfully bfr sdsdf');
// $('#myPopupr').hide();
$.ajax({url: 'http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/count.php?region='+region+"&user_id="+user_id+"&state="+state,
  data:$('#update_to_inprogressw').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
    sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[0]));
      sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[1]));
        sessionStorage.setItem("supervisor_completed_count_array",JSON.stringify(result[2]));
    sessionStorage.setItem("supervisor_not_verified_count_array",JSON.stringify(result[3]));
 
 sessionStorage.setItem("supervisor_inprogress_array",JSON.stringify(result[4]));
      sessionStorage.setItem("supervisor_verified_array",JSON.stringify(result[5]));
        sessionStorage.setItem("supervisor_completed_array",JSON.stringify(result[6]));
    sessionStorage.setItem("supervisor_not_verified_array",JSON.stringify(result[7]));

         sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(result[8]));
    sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[9]));

 //alert('Verification Record Submitted Successfully');

      $.mobile.loading().hide();
     
      $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
//$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {    
  console.log(request);
  console.log(error);  
  $("#Network").popup("open");         
  alert('Network error has occurred please try again!');
}
});
}

});

}

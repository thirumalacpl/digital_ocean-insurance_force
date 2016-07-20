$(document).on('pageshow', '#pagedesign', function(){  
//alert('supervisor_inprogress_inside');
$('.iGallery').imageflip()


$('.sqw').empty();

$('.sddq').empty();
$('#sda_newin').empty();
$('#lii_newin').empty();
$('#lii_newin_for_deliq').empty();
$('#lii_newin_for_deliq1').empty();
$('#deliqshow1').hide();
$('#deliqshow2').hide();
$('#lii_newinui').show();

/*$('#intlife').hide();*/
$('.proof').show();
$('.reportr').hide();
$('#logapp').empty();
$('.document_imag_inprooneqa').empty();
$('.document_imag_inprooneqb').empty();
$('.document_imag_inprooneqc').empty();
$('.document_imag_inprooneqd').empty();
$('.document_imag_inprooneqe').empty();
$('.document_imag_inprooneqf').empty();

 $('.foi').hide();
$('#lii_newinp').show();
$('.sddqi').empty();
$('#lii_newinp').empty();

 $('.accident_details_a').empty();
 $('#accident_details_ab').empty();
 $('#accident_details_abc').empty();
 $('.accident_Vechicle_details_a').empty();
 $('.accident_detail_sceneofcrime').empty();
  $('.fir_details_disa').empty();
    $('#accident_details_abgh').empty();
    $('#injured_Detaillsb').empty();
     $('#deceased_detailsb').empty();
         $('#injured_per_detailss_per').empty();
$('.driver_owner_details_list').empty();
$('#driver_deetails_list').empty();
$('.injuredd_r_list').empty();
$('.policy_detaiils_detai').empty();

$('#injured_Detaillsbqqwe').empty();
$('#deceased_detailsbwqdre').empty();

 $('#accident_details_vehicle').hide();
 $('#fir_details').hide();
  $('#policy_detaiils').hide();
    $('#insuredd_div').hide();
 $('#driver_owner').hide();
 $('#insured_person_details').hide();
 $('#claimant_inpro').hide();
 $('#driverhide').hide();
  $('#deceased_person_details').hide();
  $('.claimant_lista_inpro').empty();
$('.claimant_lista_inpro_injured').empty();
$('#deceased_detailsbwqdre_inpro').empty();

     $('.claimant_lista_inpro_injured_dece').empty();
//1  accident 1.accident  2.vehicle 3.soc   95
      $('.accident_details_a').empty();
      $('.accident_Vechicle_details_a').empty();
//2  claimant ---1.injured 2.deceased    102
      $('.claimant_lista_inpro').empty();
      $('.claimant_lista_inpro_injured').empty();
      $('.claimant_lista_inpro_injured_dece').empty();
//3  driver owner details     100
      $('.driver_owner_details_list').empty();
//4  driver outside details     99
      $('.driver_deetails_list_outside_driver').empty();
//5  insured  person details       1.insured  2.policy
      $('.injuredd_r_list').empty();
      $('.policy_detaiils_detai').empty();
//6  fir details       97
      $('.fir_details_disa').empty();

        $('.imz_in_div_inputa_claiman').empty();
        $('.imz_in_div_inputa_claiman_accide_vehic').empty();
        $('.imz_in_div_input').empty();
        $('.imz_in_div_inputa').empty();
        $('.imz_in_div_inputa_claiman_policy').empty();
        $('.imz_in_div_inputa_fir').empty();
        $('.imz_in_div_inputa_owner').empty();
     
        $('.imz_in_div_inputa_claiman_injured').empty();
        $('.imz_in_div_inputa_claiman_injured_decea').empty();
        $('.imz_in_div_inputa_fir_outside_driver').empty();

  $('#vehicle_hide').show();


$(document).off('click', '#dashins').on('click', '#dashins', function() {

$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;

});

$(document).off('click', '#inprogressins').on('click', '#inprogressins', function() {

$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#verifiedins').on('click', '#verifiedins', function() {

$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#not_verifiedins').on('click', '#not_verifiedins', function() {

$.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#completedins').on('click', '#completedins', function() {

  $.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#signoutins').on('click', '#signoutins', function() {
  sessionStorage.clear(); 
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#inprogressnextbj').on('click', '#inprogressnextbj', function() {

//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#primarymessage'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#before_inprouiou').on('click', '#before_inprouiou', function() {

  $.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});
/*end*/


//alert("success");
$('.document_imag_inpro').empty();
$('#select_inpro').empty();

assignValues();




function assignValues(){
  region_array = JSON.parse(sessionStorage.getItem("regionArray"));
  superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
  user_obja = JSON.parse(sessionStorage.getItem("currentobj_inpro"));
  activity_log_details_array = JSON.parse(sessionStorage.getItem("activity_log_supervisor_details_array"));

  currentobja_addressid = JSON.parse(sessionStorage.getItem("currentobja_addressid_inpro"));



currentobj_educational_records = JSON.parse(sessionStorage.getItem("currentobj_educational_inpro"));

education_array = JSON.parse(sessionStorage.getItem("education_array"));
employment_array = JSON.parse(sessionStorage.getItem("employment_array"));
address_array = JSON.parse(sessionStorage.getItem("address_array"));


//alert("inside inprogress educat" +currentobj_educational_records.user_id+currentobj_educational_records.education_type );

currentobj_employment_records = JSON.parse(sessionStorage.getItem("currentobj_employment_records_inpo"));

//alert("inside inprogress employ" +currentobj_employment_records.user_id+currentobj_employment_records.employment_type );

addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));

bank_inpro =  JSON.parse(sessionStorage.getItem("bank_inpro"));
assest_inpro =  JSON.parse(sessionStorage.getItem("assest_inpro"));
address_veriia =  JSON.parse(sessionStorage.getItem("address_veriia"));
referencea =  JSON.parse(sessionStorage.getItem("referencea"));
distr_residentiala =  JSON.parse(sessionStorage.getItem("distr_residentiala"));
dist_detailsa =  JSON.parse(sessionStorage.getItem("dist_detailsa"));


web_veria =  JSON.parse(sessionStorage.getItem("web_veria"));
supplier_venda =  JSON.parse(sessionStorage.getItem("supplier_venda"));
ware_housa =  JSON.parse(sessionStorage.getItem("ware_housa"));
common_addressa =  JSON.parse(sessionStorage.getItem("common_addressa"));

employment_upload_array = JSON.parse(sessionStorage.getItem("multiple_documents_array"));

driving_lica = JSON.parse(sessionStorage.getItem("driving_lica"));
credential_deta = JSON.parse(sessionStorage.getItem("credential_deta"));
identity_deta = JSON.parse(sessionStorage.getItem("identity_deta"));
professional_deta = JSON.parse(sessionStorage.getItem("professional_deta"));
bankruptcy_deta = JSON.parse(sessionStorage.getItem("bankruptcy_deta"));

servant_veria = JSON.parse(sessionStorage.getItem("servant_veria"));
criminal_veria = JSON.parse(sessionStorage.getItem("criminal_veria"));
employgap_veria = JSON.parse(sessionStorage.getItem("employgap_veria"));
integrity_lifestylea = JSON.parse(sessionStorage.getItem("integrity_lifestylea"));
delinquent_veria = JSON.parse(sessionStorage.getItem("delinquent_veria"));
edusalary_offa = JSON.parse(sessionStorage.getItem("edusalary_offa"));
edusalary_edua = JSON.parse(sessionStorage.getItem("edusalary_edua"));
integrity_lifestyle_pera = JSON.parse(sessionStorage.getItem("integrity_lifestyle_pera"));
servant_educa = JSON.parse(sessionStorage.getItem("servant_educa"));

reject_repa = JSON.parse(sessionStorage.getItem("reject_repa"));
coordinator_final_comment_array = JSON.parse(sessionStorage.getItem("coordinator_final_comment_array"));

personal_deta = JSON.parse(sessionStorage.getItem("personal_deta"));

/*insurance session start*/
claimant_deta = JSON.parse(sessionStorage.getItem("claimant_deta"));
details_inj = JSON.parse(sessionStorage.getItem("details_inj"));
details_decea = JSON.parse(sessionStorage.getItem("details_decea"));
driver_details_o = JSON.parse(sessionStorage.getItem("driver_details_o"));
driver_details_d = JSON.parse(sessionStorage.getItem("driver_details_d"));
fir_detai = JSON.parse(sessionStorage.getItem("fir_detai"));
accident_details_a = JSON.parse(sessionStorage.getItem("accident_details_a"));
vehicle_details_a = JSON.parse(sessionStorage.getItem("vehicle_details_a"));
insured_per_deta = JSON.parse(sessionStorage.getItem("insured_per_deta"));
verification_maste = JSON.parse(sessionStorage.getItem("verification_maste"));

policy_detaiil = JSON.parse(sessionStorage.getItem("policy_detaiil"));
insured_per_detaiil = JSON.parse(sessionStorage.getItem("insured_per_detaiil"));
/*insurance session end*/
details_injured_array =  JSON.parse(sessionStorage.getItem("details_injured_array"));
details_deceased_array =  JSON.parse(sessionStorage.getItem("details_deceased_array"));

//alert(insured_per_detaiil+'insured_per_detaiil');

if(region_array == null){
//alert('ppp');
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
}

//alert(verification_maste+'verification_maste');

 if(vehicle_details_a == null){
  $('#vehicle_hide').hide();
 }

  if(policy_detaiil == null){
 $('#policyhided').hide();
  }

if(details_inj != null){
//alert(details_inj+'details_inj');
var detail_inj_userid=details_inj.user_id;
}

if(details_decea != null){
//alert(details_decea+'details_decea');
var details_decea_userid=details_decea.user_id;
}

//alert(verification_maste+'verification_maste');
//alert(personal_deta+'personal_deta');
if(personal_deta == null){
 //alert('personal_deta not equal to null');

 $('.foi').hide();
}



if(personal_deta != null){
// alert('personal_deta not equal to null');
peruser=personal_deta.user_id;
userobj=user_obja.verification_user_id;
//alert(peruser+'peruser'+userobj+'userobj');
 $('.foi').hide();
}

if(verification_maste == null){
 //alert('personal_deta not equal to null');

 $('.foi').hide();
}

if(verification_maste != null){
// alert('personal_deta not equal to null');
peruserin=verification_maste.Verification_Master_Id;
userobjin=user_obja.verification_user_id;
//alert(peruser+'peruser'+userobj+'userobj');
 $('.foi').hide();
}

document.getElementById('filterBasic-input').value = "";

var coordinator_id = user_obja.qualification_id;
 //alert(coordinator_id+'qualification_idcoordinator_id');
// var proof_type_id =currentobja_addressid.proof_type_id;
// alert(proof_type_id+'proof_type_id');
var verification_user_id = user_obja.verification_user_id;

var qualification_id=user_obja.qualification_id;
 //alert(qualification_id+'qualification_id');
var city=user_obja.city_name;
var state=user_obja.state;

//alert(city+'city');
//alert(state+'state');

var region_num=region_array.region;

//alert(currentobj_log_inpro);
//var current_log=currentobj_log_inpro;

regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));
username=regionArray_array.username;
//alert(username);
$("#userlistinso").text(username);

var subco_status=user_obja.subco_status;
//alert(subco_status+'subco_status');
if(subco_status == 'reject' ){
//alert('reject');
if(reject_repa !== null){
for(a=0;a<coordinator_final_comment_array.length;a++){

  reject_repaa = coordinator_final_comment_array[a];

var verificationid=reject_repaa.verification_id;
  var typ=reject_repaa.type;
  //alert(reject_repaa);
if(verificationid == verification_user_id && qualification_id == typ ){
var oneempqa=reject_repaa.comment;

//alert(oneempqa+'oneempqa');
 $('.reportr').show();
  $('.sqw').append('<li>'+oneempqa+'</li>');
}

  }
}
}

$('.hhhh').text('Subject Name : '+user_obja.First_Name+' '+user_obja.Last_Name);
$('.pppp').text('Type : '+user_obja.verification_for);





if(qualification_id == '85' ){

  if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
 // alert('76 education salary inside');
  //var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.father+'</p><span class="pri_span">Father Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.mother+'</p><span class="pri_span">Mother Name</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.company+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.designation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.country+'</p></li>'

//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+integrity_lifestyle_pera.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+integrity_lifestyle_pera.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+integrity_lifestyle_pera.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+integrity_lifestyle_pera.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+integrity_lifestyle_pera.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+integrity_lifestyle_pera.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+integrity_lifestyle_pera.state+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+integrity_lifestyle_pera.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+integrity_lifestyle_pera.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+integrity_lifestyle_pera.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+integrity_lifestyle_pera.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+integrity_lifestyle_pera.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
// /alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
/*$('#intlife').show(); */
 }



if(qualification_id == '95' ){
  //alert(qualification_id+'95');

        if(verification_maste !== null){
if(peruserin == userobjin ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

 var multi_type_id_insu=employimg_obj.verification_type_id;
  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && multi_type_id_insu == '105' ){ 

var oneemp=employimg_obj.document;
//alert(oneemp+'oneemp');
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
//alert('claimant');

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Claim No:'+verification_maste.clno+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'
//$('#lii_newinp').append(liiip);
$('#lii_newinp').append(liiip);
}else{
    $('.foi').hide();
}
}
   $('#lii_newinui').hide();
   $('.proof').hide();

$('#accident_details_vehicle').show();
var sder='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Accident and Time (dd/mm/yyyy):</span><span class="fonnt">'+accident_details_a.accident_date+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Speed of vehicle:</span><span class="fonnt">'+accident_details_a.vehicle_speed+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Odometer reading:</span><span class="fonnt">'+accident_details_a.odometer_reading+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Exact Place of Accident including Address/Spot of Accident with LandMark:</span><span class="fonnt">'+accident_details_a.place_of_accident+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Purpose of travel at the time of Accident:</span><span class="fonnt">'+accident_details_a.purpose_of_travel+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">If Carriage of Goods, detail the nature of goods:</span><span class="fonnt">'+accident_details_a.nature_of_goods+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">No. of people travelling at the time of Accident and in what capacity:</span><span class="fonnt">'+accident_details_a.numof_people+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Details of third party involved in the accident:</span><span class="fonnt">'+accident_details_a.third_party_name+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Vicinity Spot:</span><span class="fonnt">'+accident_details_a.vicinity_attribute+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Type of Accident:</span><span class="fonnt">'+accident_details_a.type_of_accident+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Nature of Road:</span><span class="fonnt">'+accident_details_a.nature_of_road+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Road Type:</span><span class="fonnt">'+accident_details_a.road_type+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Name of Fourth Force Investigating Officer:</span><span class="fonnt">'+accident_details_a.name_of_investigating_officer+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Insured Vehicle Movement:</span><span class="fonnt">'+accident_details_a.iv_co_relation+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Third Party Vehicle Movement:</span><span class="fonnt">'+accident_details_a.tp_co_relation+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Vehicle Seized on the Spot:</span><span class="fonnt">'+accident_details_a.vehicle_on_spot+'</span></p></li>'
$('.accident_details_a').append(sder);
 if(vehicle_details_a !== null){
var sderbcy='<li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Vehicle Registration No:</span><span class="fonnt">'+vehicle_details_a.reg_no+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Registration (dd/mm/yyyy):</span><span class="fonnt">'+vehicle_details_a.reg_date+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Purchase date of vehicle:</span><span class="fonnt">'+vehicle_details_a.purchase_date+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Type of vehicle:</span><span class="fonnt">'+vehicle_details_a.type_of_vehicle+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Purpose of vehicle:</span><span class="fonnt">'+vehicle_details_a.type_of_vehicle+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Make and Model of the vehicle:</span><span class="fonnt">'+vehicle_details_a.make+''+vehicle_details_a.model+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Colour of vehicle:</span><span class="fonnt">'+vehicle_details_a.color+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Fuel Type of Vehicle (Diesel,Petrol,CNG,etc):</span><span class="fonnt">'+vehicle_details_a.type_of_fuel+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Laden Weight:</span><span class="fonnt">'+vehicle_details_a.laden_weight+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">UnLaden Weight:</span><span class="fonnt">'+vehicle_details_a.unladen_weight+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Engine No:</span><span class="fonnt">'+vehicle_details_a.engine_no+' </span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Chassis No:</span><span class="fonnt">'+vehicle_details_a.chassis_no+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of transfer (if applicable):</span><span class="fonnt">'+vehicle_details_a.date_of_transfer+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FC details of the vehicle if applicable:</span><span class="fonnt">'+vehicle_details_a.fc_details+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Details of Hypothecation if any:</span><span class="fonnt">'+vehicle_details_a.hypothecation+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn"> Permit details of the vehicle if applicable:</span><span class="fonnt">'+vehicle_details_a.permit_details+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Type of Permit:</span><span class="fonnt">'+vehicle_details_a.type_of_permit+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Permit Number:</span><span class="fonnt">'+vehicle_details_a.permit_num+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Date of expiry of permit number:</span><span class="fonnt">'+vehicle_details_a.date_of_permit_expiry+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Date of issue of permit number:</span><span class="fonnt">'+vehicle_details_a.date_of_permit_issue+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Details of the Opposite Vehicle:</span><span class="fonnt">'+vehicle_details_a.details_of_opp_vehicle+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Name and Owner of the Opposite Vehicle:</span><span class="fonnt">'+vehicle_details_a.owner_of_opp_vehicle+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Kilometers run:</span><span class="fonnt">'+vehicle_details_a.km_run+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Permit Issuing RTO Name:</span><span class="fonnt">'+vehicle_details_a.rtoname+'</span></p></li>'
$('.accident_Vechicle_details_a').append(sderbcy);
}
var sderbcsoc='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Rough sketch describing of the road map and vehicle position at the time of accident:</span><span class="fonnt">'+accident_details_a.rough_sketch+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Availability of critical observation such as road blocks, speed brakers, speed limit signs at the SOC:</span><span class="fonnt">'+accident_details_a.critical_obs+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Longitude/Latitude:</span><span class="fonnt">'+accident_details_a.latlng+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Any other reveleant information:</span><span class="fonnt">'+accident_details_a.relevant_info+'</span></p></li>'
$('.accident_detail_sceneofcrime').append(sderbcsoc);
//insurace update dedit start
$(".iimpolicy_detai__accid").click(function(){
  
    $('.imz_in_div_inputa_accid').empty();
  
 $("#edit_acci_details_a").popup("open"); 

  //alert('imopolicy');

  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");
var accident_details_a_user_id = accident_details_a.user_id;

//var img_first_name = 'thirumal m 12313423154';

var imz_in_div_inputa_accid='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Accident and Time (dd/mm/yyyy):</span><span class="fonnt"><input value="'+accident_details_a.accident_date+'" size="35" id="accident_date"></span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Speed of vehicle:</span><span class="fonnt"><input value="'+accident_details_a.vehicle_speed+'" size="35" id="vehicle_speed"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Odometer reading:</span><span class="fonnt"><input value="'+accident_details_a.odometer_reading+'" size="35" id="odometer_reading"></span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Exact Place of Accident including Address/Spot of Accident with LandMark:</span><span class="fonnt"><input value="'+accident_details_a.place_of_accident+'" size="35"  id="place_of_accident"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Purpose of travel at the time of Accident:</span><span class="fonnt"><input value="'+accident_details_a.purpose_of_travel+'" size="35" id="purpose_of_travel"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">If Carriage of Goods, detail the nature of goods:</span><span class="fonnt"><input value="'+accident_details_a.nature_of_goods+'" size="35" id="nature_of_goods"></span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">No. of people travelling at the time of Accident and in what capacity:</span><span class="fonnt"><input value="'+accident_details_a.numof_people+'" size="35" id="numof_people"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Details of third party involved in the accident:</span><span class="fonnt"><input value="'+accident_details_a.third_party_name+'" size="35" id="third_party_name"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Vicinity Spot:</span><span class="fonnt"><input value="'+accident_details_a.vicinity_attribute+'" size="35" id="vicinity_attribute"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Type of Accident:</span><span class="fonnt"><input value="'+accident_details_a.type_of_accident+'" size="35" id="type_of_accident"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Nature of Road:</span><span class="fonnt"><input value="'+accident_details_a.nature_of_road+'" size="35" id="nature_of_road"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Road Type:</span><span class="fonnt"><input value="'+accident_details_a.road_type+'" size="35" id="road_type"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Name of Fourth Force Investigating Officer:</span><span class="fonnt"><input value="'+accident_details_a.name_of_investigating_officer+'" size="35" id="name_of_investigating_officer"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Insured Vehicle Movement:</span><span class="fonnt"><input value="'+accident_details_a.iv_co_relation+'" size="35" id="iv_co_relation"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Third Party Vehicle Movement:</span><span class="fonnt"><input value="'+accident_details_a.tp_co_relation+'" size="35" id="tp_co_relation"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Vehicle Seized on the Spot:</span><span class="fonnt"><input value="'+accident_details_a.vehicle_on_spot+'" size="35" id="vehicle_on_spot"></span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Rough sketch describing of the road map and vehicle position at the time of accident:</span><span class="fonnt"><input value="'+accident_details_a.rough_sketch+'" size="35" id="soc_rough_sketch"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Availability of critical observation such as road blocks, speed brakers, speed limit signs at the SOC:</span><span class="fonnt"><input value="'+accident_details_a.critical_obs+'" size="35" id="soc_critical_obs"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Longitude/Latitude:</span><span class="fonnt"><input value="'+accident_details_a.latlng+'" size="35" id="soc_latlng"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Any other reveleant information:</span><span class="fonnt"><input value="'+accident_details_a.relevant_info+'" size="35" id="soc_relevant_info"></span></p></li>'

$('.imz_in_div_inputa_accid').append(imz_in_div_inputa_accid);

$("#edit_insured_d_accide").click(function(){
  
   $("#edit_acci_details_a").popup("close"); 

//alert('edit_policy_update');
var accident_date = document.getElementById("accident_date").value; //1
var vehicle_speed = document.getElementById("vehicle_speed").value; //2
var odometer_reading = document.getElementById("odometer_reading").value;//3
var place_of_accident = document.getElementById("place_of_accident").value;//4
var purpose_of_travel = document.getElementById("purpose_of_travel").value;//5
var nature_of_goods = document.getElementById("nature_of_goods").value;//6
var numof_people = document.getElementById("numof_people").value;//7
var third_party_name = document.getElementById("third_party_name").value;//8
var vicinity_attribute = document.getElementById("vicinity_attribute").value;//9
var type_of_accident = document.getElementById("type_of_accident").value;//10
var nature_of_road = document.getElementById("nature_of_road").value;//11
var road_type = document.getElementById("road_type").value;//12
var name_of_investigating_officer = document.getElementById("name_of_investigating_officer").value;//13
var iv_co_relation = document.getElementById("iv_co_relation").value;//14
var tp_co_relation = document.getElementById("tp_co_relation").value;//15
var vehicle_on_spot = document.getElementById("vehicle_on_spot").value;//16

//vehicle
/*var vehicle_reg_no = document.getElementById("vehicle_reg_no").value;//17
var vehicle_reg_date = document.getElementById("vehicle_reg_date").value;//18
var vehicle_purchase_date = document.getElementById("vehicle_purchase_date").value;//19
var vehicle_type_of_vehicle = document.getElementById("vehicle_type_of_vehicle").value;//20
var vehicle_purpose_of_vehicle = document.getElementById("vehicle_purpose_of_vehicle").value;//21
var vehicle_model = document.getElementById("vehicle_model").value;//22
var vehicle_color = document.getElementById("vehicle_color").value;//23
var vehicle_type_of_fuel = document.getElementById("vehicle_type_of_fuel").value;//24
var vehicle_laden_weight = document.getElementById("vehicle_laden_weight").value;//25
var vehicle_unladen_weight = document.getElementById("vehicle_unladen_weight").value;//26
var vehicle_engine_no = document.getElementById("vehicle_engine_no").value;//27
var vehicle_chassis_no = document.getElementById("vehicle_chassis_no").value;//28
var vehicle_date_of_transfer = document.getElementById("vehicle_date_of_transfer").value;//29
var vehicle_fc_details = document.getElementById("vehicle_fc_details").value;//30
var vehicle_hypothecation = document.getElementById("vehicle_hypothecation").value;//31
var vehicle_permit_details = document.getElementById("vehicle_permit_details").value;//32
var vehicle_type_of_permit = document.getElementById("vehicle_type_of_permit").value;//33
var vehicle_permit_num = document.getElementById("vehicle_permit_num").value;//34
var vehicle_date_of_permit_expiry = document.getElementById("vehicle_date_of_permit_expiry").value;//35
var vehicle_date_of_permit_issue = document.getElementById("vehicle_date_of_permit_issue").value;//36
var vehicle_details_of_opp_vehicle = document.getElementById("vehicle_details_of_opp_vehicle").value;//37
var vehicle_owner_of_opp_vehicle = document.getElementById("vehicle_owner_of_opp_vehicle").value;//38
var vehicle_km_run = document.getElementById("vehicle_km_run").value;//39*/
//vehicle
var soc_rough_sketch = document.getElementById("soc_rough_sketch").value;//40
var soc_critical_obs = document.getElementById("soc_critical_obs").value;//41
var soc_latlng = document.getElementById("soc_latlng").value;//42
var soc_relevant_info = document.getElementById("soc_relevant_info").value;//43


/*alert(accident_details_a_user_id+'accident_details_a_user_id');

alert(accident_date+'accident_date');
alert(vehicle_speed+'vehicle_speed');
alert(odometer_reading+'odometer_reading');
alert(place_of_accident+'place_of_accident');
alert(purpose_of_travel+'purpose_of_travel');
alert(nature_of_goods+'nature_of_goods');
alert(numof_people+'numof_people');
alert(third_party_name+'third_party_name');
alert(vicinity_attribute+'vicinity_attribute');
alert(type_of_accident+'type_of_accident');
alert(nature_of_road+'nature_of_road');
alert(road_type+'road_type');
alert(name_of_investigating_officer+'name_of_investigating_officer');
alert(iv_co_relation+'iv_co_relation');
alert(tp_co_relation+'tp_co_relation');
alert(vehicle_on_spot+'vehicle_on_spot');*/
//vehicle
/*alert(vehicle_reg_no+'vehicle_reg_no');
alert(vehicle_reg_date+'vehicle_reg_date');
alert(vehicle_purchase_date+'vehicle_purchase_date');
alert(vehicle_type_of_vehicle+'vehicle_type_of_vehicle');
alert(vehicle_purpose_of_vehicle+'vehicle_purpose_of_vehicle');
alert(vehicle_model+'vehicle_model');
alert(vehicle_color+'vehicle_color');
alert(vehicle_type_of_fuel+'vehicle_type_of_fuel');
alert(vehicle_laden_weight+'vehicle_laden_weight');
alert(vehicle_unladen_weight+'vehicle_unladen_weight');
alert(vehicle_engine_no+'vehicle_engine_no');
alert(vehicle_chassis_no+'vehicle_chassis_no');
alert(vehicle_date_of_transfer+'vehicle_date_of_transfer');
alert(vehicle_fc_details+'vehicle_fc_details');
alert(vehicle_hypothecation+'vehicle_hypothecation');
alert(vehicle_permit_details+'vehicle_permit_details');
alert(vehicle_type_of_permit+'vehicle_type_of_permit');
alert(vehicle_permit_num+'vehicle_permit_num');
alert(vehicle_date_of_permit_expiry+'vehicle_date_of_permit_expiry');
alert(vehicle_date_of_permit_issue+'vehicle_date_of_permit_issue');
alert(vehicle_details_of_opp_vehicle+'vehicle_details_of_opp_vehicle');
alert(vehicle_owner_of_opp_vehicle+'vehicle_owner_of_opp_vehicle');
alert(vehicle_km_run+'vehicle_km_run');*/
//vehicle end
/*alert(soc_rough_sketch+'soc_rough_sketch');
alert(soc_critical_obs+'soc_critical_obs');
alert(soc_latlng+'soc_latlng');
alert(soc_relevant_info+'soc_relevant_info');*/

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
// url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_insu_fir.php?name_of_ps="+name_of_ps+"&address_of_ps="+address_of_ps+"&dist_bet_acc_ps="+dist_bet_acc_ps+"&fir_no="+fir_no+"&fir_date="+fir_date+"&delay_in_fir="+delay_in_fir+"&firsum="+firsum+"&fircoy="+fircoy+"&fir_logged_by="+fir_logged_by+"&fofname="+fofname+"&relationship_with_victim="+relationship_with_victim+"&vehicle_details="+vehicle_details+"&no_of_veh_involved="+no_of_veh_involved+"&vehicle_impleded_as_party="+vehicle_impleded_as_party+"&mvi_inspected="+mvi_inspected+"&summary_of_nvi="+summary_of_nvi+"&damage_of_vehicle="+damage_of_vehicle+"&shid_mark_obs="+shid_mark_obs+"&per_of_contribution="+per_of_contribution+"&chargesheet_filed="+chargesheet_filed+"&chargesheetcoll="+chargesheetcoll+"&sumchrge="+sumchrge+"&insu_user_id_fir="+insu_user_id_fir,  
  //url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_insu_accide.php?accident_date="+accident_date+"&vehicle_speed="+vehicle_speed+"&odometer_reading="+odometer_reading+"&place_of_accident="+place_of_accident+"&purpose_of_travel="+purpose_of_travel+"&nature_of_goods="+nature_of_goods+"&numof_people="+numof_people+"&third_party_name="+third_party_name+"&vicinity_attribute="+vicinity_attribute+"&type_of_accident="+type_of_accident+"&nature_of_road="+nature_of_road+"&road_type="+road_type+"&name_of_investigating_officer="+name_of_investigating_officer+"&iv_co_relation="+iv_co_relation+"&tp_co_relation="+tp_co_relation+"&vehicle_on_spot="+vehicle_on_spot+"&vehicle_reg_no="+vehicle_reg_no+"&vehicle_reg_date="+vehicle_reg_date+"&vehicle_purchase_date="+vehicle_purchase_date+"&vehicle_type_of_vehicle="+vehicle_type_of_vehicle+"&vehicle_purpose_of_vehicle="+vehicle_purpose_of_vehicle+"&vehicle_model="+vehicle_model+"&vehicle_color="+vehicle_color+"&vehicle_type_of_fuel="+vehicle_type_of_fuel+"&vehicle_laden_weight="+vehicle_laden_weight+"&vehicle_unladen_weight="+vehicle_unladen_weight+"&vehicle_engine_no="+vehicle_engine_no+"&vehicle_chassis_no="+vehicle_chassis_no+"&vehicle_date_of_transfer="+vehicle_date_of_transfer+"&vehicle_fc_details="+vehicle_fc_details+"&vehicle_hypothecation="+vehicle_hypothecation+"&vehicle_permit_details="+vehicle_permit_details+"&vehicle_type_of_permit="+vehicle_type_of_permit+"&vehicle_permit_num="+vehicle_permit_num+"&vehicle_date_of_permit_expiry="+vehicle_date_of_permit_expiry+"&vehicle_date_of_permit_issue="+vehicle_date_of_permit_issue+"&vehicle_details_of_opp_vehicle="+vehicle_details_of_opp_vehicle+"&vehicle_owner_of_opp_vehicle="+vehicle_owner_of_opp_vehicle+"&vehicle_km_run="+vehicle_km_run+"&soc_rough_sketch="+soc_rough_sketch+"&soc_critical_obs="+soc_critical_obs+"&soc_latlng="+soc_latlng+"&soc_relevant_info="+soc_relevant_info+"&accident_details_a_user_id="+accident_details_a_user_id,
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_insu_accide.php?accident_date="+accident_date+"&vehicle_speed="+vehicle_speed+"&odometer_reading="+odometer_reading+"&place_of_accident="+place_of_accident+"&purpose_of_travel="+purpose_of_travel+"&nature_of_goods="+nature_of_goods+"&numof_people="+numof_people+"&third_party_name="+third_party_name+"&vicinity_attribute="+vicinity_attribute+"&type_of_accident="+type_of_accident+"&nature_of_road="+nature_of_road+"&road_type="+road_type+"&name_of_investigating_officer="+name_of_investigating_officer+"&iv_co_relation="+iv_co_relation+"&tp_co_relation="+tp_co_relation+"&vehicle_on_spot="+vehicle_on_spot+"&soc_rough_sketch="+soc_rough_sketch+"&soc_critical_obs="+soc_critical_obs+"&soc_latlng="+soc_latlng+"&soc_relevant_info="+soc_relevant_info+"&accident_details_a_user_id="+accident_details_a_user_id,
  data: formData,
  success: onSuccessins,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorins
});


});

$("#edit_insured_Cancel").click(function(){
   $("#edit_acci_details_a").popup("close"); 

$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

function onErrorins(data, status)
{
alert("Network super eion policy");
}  
function onSuccessins(data, status)
{
//alert('success super ffffffffffir');
  sessionStorage.setItem("accident_details_a",JSON.stringify(data));
  $('.accident_details_a').empty();
    $('.accident_Vechicle_details_a').empty();
        $('.accident_detail_sceneofcrime').empty();
 
  accident_details_a =  JSON.parse(sessionStorage.getItem("accident_details_a"));
  for(a=0;a<accident_details_a.length;a++){  

  accident_details_a = accident_details_a[a];
// alert(addressimg_obj.document_name);



var sder='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Accident and Time (dd/mm/yyyy):</span><span class="fonnt">'+accident_details_a.accident_date+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Speed of vehicle:</span><span class="fonnt">'+accident_details_a.vehicle_speed+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Odometer reading:</span><span class="fonnt">'+accident_details_a.odometer_reading+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Exact Place of Accident including Address/Spot of Accident with LandMark:</span><span class="fonnt">'+accident_details_a.place_of_accident+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Purpose of travel at the time of Accident:</span><span class="fonnt">'+accident_details_a.purpose_of_travel+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">If Carriage of Goods, detail the nature of goods:</span><span class="fonnt">'+accident_details_a.nature_of_goods+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">No. of people travelling at the time of Accident and in what capacity:</span><span class="fonnt">'+accident_details_a.numof_people+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Details of third party involved in the accident:</span><span class="fonnt">'+accident_details_a.third_party_name+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Vicinity Spot:</span><span class="fonnt">'+accident_details_a.vicinity_attribute+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Type of Accident:</span><span class="fonnt">'+accident_details_a.type_of_accident+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Nature of Road:</span><span class="fonnt">'+accident_details_a.nature_of_road+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Road Type:</span><span class="fonnt">'+accident_details_a.road_type+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Name of Fourth Force Investigating Officer:</span><span class="fonnt">'+accident_details_a.name_of_investigating_officer+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Insured Vehicle Movement:</span><span class="fonnt">'+accident_details_a.iv_co_relation+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Third Party Vehicle Movement:</span><span class="fonnt">'+accident_details_a.tp_co_relation+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Vehicle Seized on the Spot:</span><span class="fonnt">'+accident_details_a.vehicle_on_spot+'</span></p></li>'
$('.accident_details_a').append(sder);
 if(vehicle_details_a !== null){
var sderbcy='<li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Vehicle Registration No:</span><span class="fonnt">'+vehicle_details_a.reg_no+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Registration (dd/mm/yyyy):</span><span class="fonnt">'+vehicle_details_a.reg_date+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Purchase date of vehicle:</span><span class="fonnt">'+vehicle_details_a.purchase_date+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Type of vehicle:</span><span class="fonnt">'+vehicle_details_a.type_of_vehicle+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Purpose of vehicle:</span><span class="fonnt">'+vehicle_details_a.type_of_vehicle+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Make and Model of the vehicle:</span><span class="fonnt">'+vehicle_details_a.make+''+vehicle_details_a.model+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Colour of vehicle:</span><span class="fonnt">'+vehicle_details_a.color+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Fuel Type of Vehicle (Diesel,Petrol,CNG,etc):</span><span class="fonnt">'+vehicle_details_a.type_of_fuel+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Laden Weight:</span><span class="fonnt">'+vehicle_details_a.laden_weight+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">UnLaden Weight:</span><span class="fonnt">'+vehicle_details_a.unladen_weight+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Engine No:</span><span class="fonnt">'+vehicle_details_a.engine_no+' </span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Chassis No:</span><span class="fonnt">'+vehicle_details_a.chassis_no+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of transfer (if applicable):</span><span class="fonnt">'+vehicle_details_a.date_of_transfer+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FC details of the vehicle if applicable:</span><span class="fonnt">'+vehicle_details_a.fc_details+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Details of Hypothecation if any:</span><span class="fonnt">'+vehicle_details_a.hypothecation+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn"> Permit details of the vehicle if applicable:</span><span class="fonnt">'+vehicle_details_a.permit_details+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Type of Permit:</span><span class="fonnt">'+vehicle_details_a.type_of_permit+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Permit Number:</span><span class="fonnt">'+vehicle_details_a.permit_num+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Date of expiry of permit number:</span><span class="fonnt">'+vehicle_details_a.date_of_permit_expiry+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Date of issue of permit number:</span><span class="fonnt">'+vehicle_details_a.date_of_permit_issue+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Details of the Opposite Vehicle:</span><span class="fonnt">'+vehicle_details_a.details_of_opp_vehicle+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Name and Owner of the Opposite Vehicle:</span><span class="fonnt">'+vehicle_details_a.owner_of_opp_vehicle+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Kilometers run:</span><span class="fonnt">'+vehicle_details_a.km_run+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Permit Issuing RTO Name:</span><span class="fonnt">'+vehicle_details_a.rtoname+'</span></p></li>'
$('.accident_Vechicle_details_a').append(sderbcy);
}
var sderbcsoc='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Rough sketch describing of the road map and vehicle position at the time of accident:</span><span class="fonnt">'+accident_details_a.rough_sketch+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Availability of critical observation such as road blocks, speed brakers, speed limit signs at the SOC:</span><span class="fonnt">'+accident_details_a.critical_obs+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Longitude/Latitude:</span><span class="fonnt">'+accident_details_a.latlng+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">   <p class="li_p_pri"><span class="fonn">Any other reveleant information:</span><span class="fonnt">'+accident_details_a.relevant_info+'</span></p></li>'
$('.accident_detail_sceneofcrime').append(sderbcsoc);

}
}
});

//accide vehic start
$(".iimpolicy_detai_claima_acc_vehic").click(function(){
  
    $('.imz_in_div_inputa_claiman_accide_vehic').empty();
    
 $("#edit_claimant_details_acc_vehic").popup("open"); 
 
  //alert('imopolicy');

  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");
var accident_details_a_user_id = accident_details_a.user_id;

//var img_first_name = 'thirumal m95 12313423154';
var imz_in_div_inputa_claiman_accide_vehic='<li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Vehicle Registration No:</span><span class="fonnt"><input value="'+vehicle_details_a.reg_no+'" size="35" id="vehicle_reg_no"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Registration (dd/mm/yyyy):</span><span class="fonnt"><input value="'+vehicle_details_a.reg_date+'" size="35" id="vehicle_reg_date"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Purchase date of vehicle:</span><span class="fonnt"><input value="'+vehicle_details_a.purchase_date+'" size="35" id="vehicle_purchase_date"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Type of vehicle:</span><span class="fonnt"><input value="'+vehicle_details_a.type_of_vehicle+'" size="35" id="vehicle_type_of_vehicle"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Purpose of vehicle:</span><span class="fonnt"><input value="'+vehicle_details_a.purpose_of_vehicle+'" size="35" id="vehicle_purpose_of_vehicle"></span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Make and Model of the vehicle:</span><span class="fonnt"><input value="'+vehicle_details_a.make+''+vehicle_details_a.model+'" size="35" id="vehicle_model"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Colour of vehicle:</span><span class="fonnt"><input value="'+vehicle_details_a.color+'" size="35" id="vehicle_color"></span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Fuel Type of Vehicle (Diesel,Petrol,CNG,etc):</span><span class="fonnt"><input value="'+vehicle_details_a.type_of_fuel+'" size="35" id="vehicle_type_of_fuel"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Laden Weight:</span><span class="fonnt"><input value="'+vehicle_details_a.laden_weight+'" size="35" id="vehicle_laden_weight"> </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">UnLaden Weight:</span><span class="fonnt"><input value="'+vehicle_details_a.unladen_weight+'" size="35" id="vehicle_unladen_weight"> </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Engine No:</span><span class="fonnt"><input value="'+vehicle_details_a.engine_no+'" size="35" id="vehicle_engine_no"></span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Chassis No:</span><span class="fonnt"><input value="'+vehicle_details_a.chassis_no+'" size="35" id="vehicle_chassis_no"></span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of transfer (if applicable):</span><span class="fonnt"><input value="'+vehicle_details_a.date_of_transfer+'" size="35" id="vehicle_date_of_transfer"></span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FC details of the vehicle if applicable:</span><span class="fonnt"><input value="'+vehicle_details_a.fc_details+'" size="35" id="vehicle_fc_details"></span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Details of Hypothecation if any:</span><span class="fonnt"><input value="'+vehicle_details_a.hypothecation+'" size="35" id="vehicle_hypothecation"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn"> Permit details of the vehicle if applicable:</span><span class="fonnt"><input value="'+vehicle_details_a.permit_details+'" size="35"  id="vehicle_permit_details"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Type of Permit:</span><span class="fonnt"><input value="'+vehicle_details_a.type_of_permit+'" size="35" id="vehicle_type_of_permit"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Permit Number:</span><span class="fonnt"><input value="'+vehicle_details_a.permit_num+'" size="35" id="vehicle_permit_num"> </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Date of expiry of permit number:</span><span class="fonnt"><input value="'+vehicle_details_a.date_of_permit_expiry+'" size="35" id="vehicle_date_of_permit_expiry"> </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Date of issue of permit number:</span><span class="fonnt"><input value="'+vehicle_details_a.date_of_permit_issue+'"  size="35" id="vehicle_date_of_permit_issue"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Details of the Opposite Vehicle:</span><span class="fonnt"><input value="'+vehicle_details_a.details_of_opp_vehicle+'" size="35" id="vehicle_details_of_opp_vehicle"> </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Name and Owner of the Opposite Vehicle:</span><span class="fonnt"><input value="'+vehicle_details_a.owner_of_opp_vehicle+'" size="35" id="vehicle_owner_of_opp_vehicle"> </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Kilometers run:</span><span class="fonnt"><input value="'+vehicle_details_a.km_run+'" size="35" id="vehicle_km_run"></span></p></li>'
$('.imz_in_div_inputa_claiman_accide_vehic').append(imz_in_div_inputa_claiman_accide_vehic);
                   

$("#edit_insured_d_claima_acci_vehic").click(function(){
  
   $("#edit_claimant_details_acc_vehic").popup("close"); 
   
var vehicle_reg_no = document.getElementById("vehicle_reg_no").value;//17
var vehicle_reg_date = document.getElementById("vehicle_reg_date").value;//18
var vehicle_purchase_date = document.getElementById("vehicle_purchase_date").value;//19
var vehicle_type_of_vehicle = document.getElementById("vehicle_type_of_vehicle").value;//20
var vehicle_purpose_of_vehicle = document.getElementById("vehicle_purpose_of_vehicle").value;//21
var vehicle_model = document.getElementById("vehicle_model").value;//22
var vehicle_color = document.getElementById("vehicle_color").value;//23
var vehicle_type_of_fuel = document.getElementById("vehicle_type_of_fuel").value;//24
var vehicle_laden_weight = document.getElementById("vehicle_laden_weight").value;//25
var vehicle_unladen_weight = document.getElementById("vehicle_unladen_weight").value;//26
var vehicle_engine_no = document.getElementById("vehicle_engine_no").value;//27
var vehicle_chassis_no = document.getElementById("vehicle_chassis_no").value;//28
var vehicle_date_of_transfer = document.getElementById("vehicle_date_of_transfer").value;//29
var vehicle_fc_details = document.getElementById("vehicle_fc_details").value;//30
var vehicle_hypothecation = document.getElementById("vehicle_hypothecation").value;//31
var vehicle_permit_details = document.getElementById("vehicle_permit_details").value;//32
var vehicle_type_of_permit = document.getElementById("vehicle_type_of_permit").value;//33
var vehicle_permit_num = document.getElementById("vehicle_permit_num").value;//34
var vehicle_date_of_permit_expiry = document.getElementById("vehicle_date_of_permit_expiry").value;//35
var vehicle_date_of_permit_issue = document.getElementById("vehicle_date_of_permit_issue").value;//36
var vehicle_details_of_opp_vehicle = document.getElementById("vehicle_details_of_opp_vehicle").value;//37
var vehicle_owner_of_opp_vehicle = document.getElementById("vehicle_owner_of_opp_vehicle").value;//38
var vehicle_km_run = document.getElementById("vehicle_km_run").value;//39


/*alert(accident_details_a_user_id+'accident_details_a_user_id');

alert(vehicle_reg_no+'vehicle_reg_no');
alert(vehicle_reg_date+'vehicle_reg_date');
alert(vehicle_purchase_date+'vehicle_purchase_date');
alert(vehicle_type_of_vehicle+'vehicle_type_of_vehicle');
alert(vehicle_purpose_of_vehicle+'vehicle_purpose_of_vehicle');
alert(vehicle_model+'vehicle_model');
alert(vehicle_color+'vehicle_color');
alert(vehicle_type_of_fuel+'vehicle_type_of_fuel');
alert(vehicle_laden_weight+'vehicle_laden_weight');
alert(vehicle_unladen_weight+'vehicle_unladen_weight');
alert(vehicle_engine_no+'vehicle_engine_no');
alert(vehicle_chassis_no+'vehicle_chassis_no');
alert(vehicle_date_of_transfer+'vehicle_date_of_transfer');
alert(vehicle_fc_details+'vehicle_fc_details');
alert(vehicle_hypothecation+'vehicle_hypothecation');
alert(vehicle_permit_details+'vehicle_permit_details');
alert(vehicle_type_of_permit+'vehicle_type_of_permit');
alert(vehicle_permit_num+'vehicle_permit_num');
alert(vehicle_date_of_permit_expiry+'vehicle_date_of_permit_expiry');
alert(vehicle_date_of_permit_issue+'vehicle_date_of_permit_issue');
alert(vehicle_details_of_opp_vehicle+'vehicle_details_of_opp_vehicle');
alert(vehicle_owner_of_opp_vehicle+'vehicle_owner_of_opp_vehicle');
alert(vehicle_km_run+'vehicle_km_run');*/

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
//  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_insu_fir.php?name_of_ps="+name_of_ps+"&address_of_ps="+address_of_ps+"&dist_bet_acc_ps="+dist_bet_acc_ps+"&fir_no="+fir_no+"&fir_date="+fir_date+"&delay_in_fir="+delay_in_fir+"&firsum="+firsum+"&fircoy="+fircoy+"&fir_logged_by="+fir_logged_by+"&fofname="+fofname+"&relationship_with_victim="+relationship_with_victim+"&vehicle_details="+vehicle_details+"&no_of_veh_involved="+no_of_veh_involved+"&vehicle_impleded_as_party="+vehicle_impleded_as_party+"&mvi_inspected="+mvi_inspected+"&summary_of_nvi="+summary_of_nvi+"&damage_of_vehicle="+damage_of_vehicle+"&shid_mark_obs="+shid_mark_obs+"&per_of_contribution="+per_of_contribution+"&chargesheet_filed="+chargesheet_filed+"&chargesheetcoll="+chargesheetcoll+"&sumchrge="+sumchrge+"&insu_user_id_fir="+insu_user_id_fir,  
 url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_insu_accide_vehicle.php?vehicle_reg_no="+vehicle_reg_no+"&vehicle_reg_date="+vehicle_reg_date+"&vehicle_purchase_date="+vehicle_purchase_date+"&vehicle_type_of_vehicle="+vehicle_type_of_vehicle+"&vehicle_purpose_of_vehicle="+vehicle_purpose_of_vehicle+"&vehicle_model="+vehicle_model+"&vehicle_color="+vehicle_color+"&vehicle_type_of_fuel="+vehicle_type_of_fuel+"&vehicle_laden_weight="+vehicle_laden_weight+"&vehicle_unladen_weight="+vehicle_unladen_weight+"&vehicle_engine_no="+vehicle_engine_no+"&vehicle_chassis_no="+vehicle_chassis_no+"&vehicle_date_of_transfer="+vehicle_date_of_transfer+"&vehicle_fc_details="+vehicle_fc_details+"&vehicle_hypothecation="+vehicle_hypothecation+"&vehicle_permit_details="+vehicle_permit_details+"&vehicle_type_of_permit="+vehicle_type_of_permit+"&vehicle_permit_num="+vehicle_permit_num+"&vehicle_date_of_permit_expiry="+vehicle_date_of_permit_expiry+"&vehicle_date_of_permit_issue="+vehicle_date_of_permit_issue+"&vehicle_details_of_opp_vehicle="+vehicle_details_of_opp_vehicle+"&vehicle_owner_of_opp_vehicle="+vehicle_owner_of_opp_vehicle+"&vehicle_km_run="+vehicle_km_run+"&accident_details_a_user_id="+accident_details_a_user_id,
 data: formData,
  success: onSuccessins,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorins
});


});

$("#edit_insured_Cancel").click(function(){
   $("#edit_claimant_details_acc_vehic").popup("close"); 
   
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

function onErrorins(data, status)
{
alert("Network super eion policy");
}  
function onSuccessins(data, status)
{
//alert('success super ffffffffffir');
  sessionStorage.setItem("vehicle_details_a",JSON.stringify(data));
  $('.accident_Vechicle_details_a').empty();

  vehicle_details_a =  JSON.parse(sessionStorage.getItem("vehicle_details_a"));
  for(a=0;a<vehicle_details_a.length;a++){  

  vehicle_details_a = vehicle_details_a[a];
// alert(addressimg_obj.document_name);

var sderclaimant='<li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Vehicle Registration No:</span><span class="fonnt">'+vehicle_details_a.reg_no+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Registration (dd/mm/yyyy):</span><span class="fonnt">'+vehicle_details_a.reg_date+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Purchase date of vehicle:</span><span class="fonnt">'+vehicle_details_a.purchase_date+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Type of vehicle:</span><span class="fonnt">'+vehicle_details_a.type_of_vehicle+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Purpose of vehicle:</span><span class="fonnt">'+vehicle_details_a.type_of_vehicle+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Make and Model of the vehicle:</span><span class="fonnt">'+vehicle_details_a.make+''+vehicle_details_a.model+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Colour of vehicle:</span><span class="fonnt">'+vehicle_details_a.color+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Fuel Type of Vehicle (Diesel,Petrol,CNG,etc):</span><span class="fonnt">'+vehicle_details_a.type_of_fuel+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Laden Weight:</span><span class="fonnt">'+vehicle_details_a.laden_weight+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">UnLaden Weight:</span><span class="fonnt">'+vehicle_details_a.unladen_weight+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Engine No:</span><span class="fonnt">'+vehicle_details_a.engine_no+' </span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Chassis No:</span><span class="fonnt">'+vehicle_details_a.chassis_no+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of transfer (if applicable):</span><span class="fonnt">'+vehicle_details_a.date_of_transfer+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FC details of the vehicle if applicable:</span><span class="fonnt">'+vehicle_details_a.fc_details+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Details of Hypothecation if any:</span><span class="fonnt">'+vehicle_details_a.hypothecation+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn"> Permit details of the vehicle if applicable:</span><span class="fonnt">'+vehicle_details_a.permit_details+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Type of Permit:</span><span class="fonnt">'+vehicle_details_a.type_of_permit+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Permit Number:</span><span class="fonnt">'+vehicle_details_a.permit_num+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Date of expiry of permit number:</span><span class="fonnt">'+vehicle_details_a.date_of_permit_expiry+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Date of issue of permit number:</span><span class="fonnt">'+vehicle_details_a.date_of_permit_issue+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Details of the Opposite Vehicle:</span><span class="fonnt">'+vehicle_details_a.details_of_opp_vehicle+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Name and Owner of the Opposite Vehicle:</span><span class="fonnt">'+vehicle_details_a.owner_of_opp_vehicle+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Kilometers run:</span><span class="fonnt">'+vehicle_details_a.km_run+'</span></p></li>'
$('.accident_Vechicle_details_a').append(sderclaimant);

/*var injuredd_r_listqaa='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn ">Name of Police Station:</span><span class="fonnt iimpolicy_detai_insu">'+fir_detai.name_of_ps+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address of Police Station:</span><span class="fonnt">'+fir_detai.address_of_ps+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Site:</span><span class="fonnt">'+fir_detai.dist_bet_acc_ps+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR No:</span><span class="fonnt">'+fir_detai.fir_no+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR Date:</span><span class="fonnt">'+fir_detai.fir_date+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any delay in filing the FIR:</span><span class="fonnt">'+fir_detai.delay_in_fir+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR summary details:</span><span class="fonnt">'+fir_detai.firsum+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is FIR copy collected:</span><span class="fonnt">'+fir_detai.fircoy+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">FIR Logged by:</span><span class="fonnt">'+fir_detai.fir_logged_by+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Fourth Force Investigating Officers Name:</span><span class="fonnt">'+fir_detai.fofname+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Relationship to the Victim/Claimant:</span><span class="fonnt">'+fir_detai.relationship_with_victim+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Vehicle Details mentioned in the FIR:</span><span class="fonnt">'+fir_detai.vehicle_details+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">No of Vehicles involved in the accident:</span><span class="fonnt">'+fir_detai.no_of_veh_involved+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Owner of vehicle impleded as party:</span><span class="fonnt">'+fir_detai.vehicle_impleded_as_party+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether MVI Inspected:</span><span class="fonnt">'+fir_detai.mvi_inspected+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of MVI Inspection:</span><span class="fonnt">'+fir_detai.summary_of_nvi+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Accessed Damage of vehicle:</span><span class="fonnt">'+fir_detai.damage_of_vehicle+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Skid Marks Available:</span><span class="fonnt">'+fir_detai.shid_mark_obs+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Percentage of contribution of the vehicles to the accident:</span><span class="fonnt">'+fir_detai.per_of_contribution+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Chargesheet Filed:</span><span class="fonnt">'+fir_detai.chargesheet_filed+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Charge Sheet collected:</span><span class="fonnt">'+fir_detai.chargesheetcoll+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of the Charge Sheet, if applicable:</span><span class="fonnt">'+fir_detai.sumchrge+'</span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">"city"</span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">"state"</span></p></li>'
$('.fir_details_disa').append(injuredd_r_listqaa);
acci_details_disa_accide*/

}
}
});

//accide vehic end

//insurance update edit end
for(a=0;a<employment_upload_array.length;a++){  

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
// /alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}

/*106 policy details start*/

if(qualification_id == '106' ){
 // alert(qualification_id+'106');
      if(verification_maste !== null){
if(peruserin == userobjin ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

 var multi_type_id_insu=employimg_obj.verification_type_id;
  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && multi_type_id_insu == '105'){

var oneemp=employimg_obj.document;
//alert(oneemp+'oneemp');
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');
}

}
//alert('claimant');

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}

   $('#lii_newinui').hide();
   $('.proof').hide();
  $('#policy_detaiils').show();
  if(policy_detaiil != null){
var policy_detaiilswer='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy Available:</span><span class="fonnt ">'+policy_detaiil.pol_avl+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address:</span><span class="fonnt">'+policy_detaiil.address+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Details Of Policy:</span><span class="fonnt">'+policy_detaiil.dtl_pol+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy No:</span><span class="fonnt">'+policy_detaiil.pol_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Policy Start Date:</span><span class="fonnt">'+policy_detaiil.pol_srt_dt+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy End Date:</span><span class="fonnt">'+policy_detaiil.pol_end_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note No:</span><span class="fonnt">'+policy_detaiil.crv_nte_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note Start Date:</span><span class="fonnt">'+policy_detaiil.crv_nte_srt_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note End Date:</span><span class="fonnt">'+policy_detaiil.crv_nte_end_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Close Proximity(within 15days):</span><span class="fonnt">'+policy_detaiil.wheth_cls_pro+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Date Of Intimation:</span><span class="fonnt">'+policy_detaiil.dt_inmit+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Tax/Commercial:</span><span class="fonnt">'+policy_detaiil.tax_com+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Class Of Vehicle:</span><span class="fonnt">'+policy_detaiil.cls_vec+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+policy_detaiil.state+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">'+policy_detaiil.city_name+'</span></p></li>'
$('.policy_detaiils_detai').append(policy_detaiilswer);
}


$(".impolicy_detai").click(function(){
    $('.imz_in_div_input').empty();
 $("#edit_policy_details").popup("open"); 
  //alert('imopolicy');

  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");

var policy_user_id = policy_detaiil.user_id;
//alert(policy_user_id+'policy_user_id');
var policy_address_groupid = policy_detaiil.address_group;;
//var img_first_name = 'thirumal m95 12313423154';
if(policy_detaiil != null){
var imz_in_div_input='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy Available:</span><span class="fonnt impolicy_detai"><input value="'+policy_detaiil.pol_avl+'"  id="pol_avl"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address:</span><span class="fonnt"><input value="'+policy_detaiil.address+'"  id="policy_address"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Details Of Policy:</span><span class="fonnt"><input value="'+policy_detaiil.dtl_pol+'"  id="policy_dtl_pol"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy No:</span><span class="fonnt"><input value="'+policy_detaiil.pol_no+'"  id="policy_pol_no"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Policy Start Date:</span><span class="fonnt"><input value="'+policy_detaiil.pol_srt_dt+'"  id="policy_pol_srt_dt"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy End Date:</span><span class="fonnt"><input value="'+policy_detaiil.pol_end_dt+'"  id="policy_pol_end_dt"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note No:</span><span class="fonnt"><input value="'+policy_detaiil.crv_nte_no+'"  id="policy_crv_nte_no"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note Start Date:</span><span class="fonnt"><input value="'+policy_detaiil.crv_nte_srt_dt+'"  id="policy_crv_nte_srt_dt"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note End Date:</span><span class="fonnt"><input value="'+policy_detaiil.crv_nte_end_dt+'"  id="policy_crv_nte_end_dt"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Close Proximity(within 15days):</span><span class="fonnt"><input value="'+policy_detaiil.wheth_cls_pro+'"  id="policy_wheth_cls_pro"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Date Of Intimation:</span><span class="fonnt"><input value="'+policy_detaiil.dt_inmit+'"  id="policy_dt_inmit"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Tax/Commercial:</span><span class="fonnt"><input value="'+policy_detaiil.tax_com+'"  id="policy_tax_com"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Class Of Vehicle:</span><span class="fonnt"><input value="'+policy_detaiil.cls_vec+'"  id="policy_cls_vec"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+policy_detaiil.state+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">'+policy_detaiil.city_name+'</span></p></li>'
$('.imz_in_div_input').append(imz_in_div_input);
}
$("#edit_insured_d").click(function(){
   $("#edit_policy_details").popup("close"); 
//alert('edit_policy_update');
var pol_avl = document.getElementById("pol_avl").value;
var policy_address = document.getElementById("policy_address").value;
var policy_dtl_pol = document.getElementById("policy_dtl_pol").value;
var policy_pol_no = document.getElementById("policy_pol_no").value;
var policy_pol_srt_dt = document.getElementById("policy_pol_srt_dt").value;
var policy_pol_end_dt = document.getElementById("policy_pol_end_dt").value;
var policy_crv_nte_no = document.getElementById("policy_crv_nte_no").value;
var policy_crv_nte_srt_dt = document.getElementById("policy_crv_nte_srt_dt").value;
var policy_crv_nte_end_dt = document.getElementById("policy_crv_nte_end_dt").value;
var policy_wheth_cls_pro = document.getElementById("policy_wheth_cls_pro").value;
var policy_dt_inmit = document.getElementById("policy_dt_inmit").value;
var policy_tax_com = document.getElementById("policy_tax_com").value;
var policy_cls_vec = document.getElementById("policy_cls_vec").value;
//alert(pol_avl+'pol_avl');
//alert(policy_address+'policy_address');
//alert(policy_dtl_pol+'policy_dtl_pol');
//alert(policy_pol_no+'policy_pol_no');
//alert(policy_pol_srt_dt+'policy_pol_srt_dt');
//alert(policy_pol_end_dt+'policy_pol_end_dt');
//alert(policy_crv_nte_no+'policy_crv_nte_no');
//alert(policy_crv_nte_srt_dt+'policy_crv_nte_srt_dt');
//alert(policy_crv_nte_end_dt+'policy_crv_nte_end_dt');
//alert(policy_wheth_cls_pro+'policy_wheth_cls_pro');
//alert(policy_dt_inmit+'policy_dt_inmit');
//alert(policy_tax_com+'policy_tax_com');
//alert(policy_cls_vec+'policy_cls_vec');
var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_policy.php?policy_user_id="+policy_user_id+"&policy_address_groupid="+policy_address_groupid+"&pol_avl="+pol_avl+"&policy_address="+policy_address+"&policy_dtl_pol="+policy_dtl_pol+"&policy_pol_no="+policy_pol_no+"&policy_pol_srt_dt="+policy_pol_srt_dt+"&policy_pol_end_dt="+policy_pol_end_dt+"&policy_crv_nte_no="+policy_crv_nte_no+"&policy_crv_nte_srt_dt="+policy_crv_nte_srt_dt+"&policy_crv_nte_end_dt="+policy_crv_nte_end_dt+"&policy_wheth_cls_pro="+policy_wheth_cls_pro+"&policy_dt_inmit="+policy_dt_inmit+"&policy_tax_com="+policy_tax_com+"&policy_cls_vec="+policy_cls_vec,
  //url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_personal_table.php?img_master_id="+img_master_id+"&img_first_name="+img_first_name,
  data: formData,
  success: onSuccessins,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorins
});


});

$("#edit_policy_Cancel").click(function(){
   $("#edit_policy_details").popup("close"); 
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

function onErrorins(data, status)
{
alert("Network super eion policy");
}  
function onSuccessins(data, status)
{
//alert('success super policy');
  sessionStorage.setItem("policy_detaiil",JSON.stringify(data));
  $('.policy_detaiils_detai').empty();
  policy_detaiil =  JSON.parse(sessionStorage.getItem("policy_detaiil"));
  for(a=0;a<policy_detaiil.length;a++){  

  policy_detaiil = policy_detaiil[a];
// alert(addressimg_obj.document_name);
if(policy_detaiil != null){
var policy_detaiilsweraa='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy Available:</span><span class="fonnt ">'+policy_detaiil.pol_avl+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address:</span><span class="fonnt">'+policy_detaiil.address+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Details Of Policy:</span><span class="fonnt">'+policy_detaiil.dtl_pol+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy No:</span><span class="fonnt">'+policy_detaiil.pol_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Policy Start Date:</span><span class="fonnt">'+policy_detaiil.pol_srt_dt+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy End Date:</span><span class="fonnt">'+policy_detaiil.pol_end_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note No:</span><span class="fonnt">'+policy_detaiil.crv_nte_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note Start Date:</span><span class="fonnt">'+policy_detaiil.city_name+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note End Date:</span><span class="fonnt">'+policy_detaiil.crv_nte_end_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Close Proximity(within 15days):</span><span class="fonnt">'+policy_detaiil.wheth_cls_pro+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Date Of Intimation:</span><span class="fonnt">'+policy_detaiil.dt_inmit+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Tax/Commercial:</span><span class="fonnt">'+policy_detaiil.tax_com+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Class Of Vehicle:</span><span class="fonnt">'+policy_detaiil.cls_vec+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+policy_detaiil.state+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">'+policy_detaiil.city_name+'</span></p></li>'
$('.policy_detaiils_detai').append(policy_detaiilsweraa);
}
 document.getElementById("pol_avl").value="";
 document.getElementById("policy_address").value="";
 document.getElementById("policy_dtl_pol").value="";
 document.getElementById("policy_pol_no").value="";
 document.getElementById("policy_pol_srt_dt").value="";
document.getElementById("policy_pol_end_dt").value="";
 document.getElementById("policy_crv_nte_no").value="";
 document.getElementById("policy_crv_nte_srt_dt").value="";
document.getElementById("policy_crv_nte_end_dt").value="";
 document.getElementById("policy_wheth_cls_pro").value="";
 document.getElementById("policy_dt_inmit").value="";
 document.getElementById("policy_tax_com").value="";
 document.getElementById("policy_cls_vec").value="";

}
}

});

for(a=0;a<employment_upload_array.length;a++){  

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
// /alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}
/*106 policy details end */

/*101 insured details start*/
if(qualification_id == '101' ){
  //alert(qualification_id+'101');
      if(verification_maste !== null){
if(peruserin == userobjin ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];

// alert(addressimg_obj.document_name);

var multi_type_id_insu=employimg_obj.verification_type_id;
  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && multi_type_id_insu == '105' ){

var oneemp=employimg_obj.document;
//alert(oneemp+'oneemp');
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');
}

}
//alert('claimant');

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Claim No:'+verification_maste.clno+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}

   $('#lii_newinui').hide();
   $('.proof').hide();
  $('#insuredd_div').show();
var policy_detaiilswerio='<li class="li_hei">  <p class="li_p_pri"><span class="fonn">Vehicle insured person name:</span><span class="fonnt">'+insured_per_detaiil.name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address:</span><span class="fonnt">'+insured_per_detaiil.address+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Contact No:</span><span class="fonnt">'+insured_per_detaiil.con_no+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Select Gender:</span><span class="fonnt">'+insured_per_detaiil.gender+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">DOB:</span><span class="fonnt">'+insured_per_detaiil.dob+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Average yearly income:</span><span class="fonnt">'+insured_per_detaiil.yr_income+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Pan and Aadhar details (if any):</span><span class="fonnt">'+insured_per_detaiil.pn_adh_dtls+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Date of issue and expiry of the policy:</span><span class="fonnt">'+insured_per_detaiil.doi_exp+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Insured Profession:</span><span class="fonnt">'+insured_per_detaiil.isu_prof+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Number of members in the family:</span><span class="fonnt">'+insured_per_detaiil.no_fmly+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">How many of them are above 18+ and drive vehicle:</span><span class="fonnt">'+insured_per_detaiil.ab_age+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">How many vehicles do you have:</span><span class="fonnt">'+insured_per_detaiil.vec_no+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Usage of vehicles:</span><span class="fonnt">'+insured_per_detaiil.usg_vec+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+insured_per_detaiil.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+insured_per_detaiil.state+'</p></li>'
$('.injuredd_r_list').append(policy_detaiilswerio);
//11111111111111101111111111111111 update edit start
  $('#policy_detaiils').show();
  if(policy_detaiil != null){
var policy_detaiilswer='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy Available:</span><span class="fonnt ">'+policy_detaiil.pol_avl+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address:</span><span class="fonnt">'+policy_detaiil.address+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Details Of Policy:</span><span class="fonnt">'+policy_detaiil.dtl_pol+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy No:</span><span class="fonnt">'+policy_detaiil.pol_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Policy Start Date:</span><span class="fonnt">'+policy_detaiil.pol_srt_dt+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy End Date:</span><span class="fonnt">'+policy_detaiil.pol_end_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note No:</span><span class="fonnt">'+policy_detaiil.crv_nte_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note Start Date:</span><span class="fonnt">'+policy_detaiil.city_name+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note End Date:</span><span class="fonnt">'+policy_detaiil.crv_nte_end_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Close Proximity(within 15days):</span><span class="fonnt">'+policy_detaiil.wheth_cls_pro+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Date Of Intimation:</span><span class="fonnt">'+policy_detaiil.dt_inmit+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Tax/Commercial:</span><span class="fonnt">'+policy_detaiil.tax_com+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Class Of Vehicle:</span><span class="fonnt">'+policy_detaiil.cls_vec+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+policy_detaiil.state+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">'+policy_detaiil.city_name+'</span></p></li>'
$('.policy_detaiils_detai').append(policy_detaiilswer);
}
$(".iimpolicy_detai_insu").click(function(){
    $('.imz_in_div_inputa').empty();
 $("#edit_insured_details").popup("open"); 
  //alert('imopolicy');

  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");

var insu_user_id = insured_per_detaiil.user_id;
/*alert(insu_user_id+'insu_user_id');*/
var insured_per_detaiil_groupid = insured_per_detaiil.address_group;;
//var img_first_name = 'thirumal m95 12313423154';
var imz_in_div_inputa='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn ">Vehicle insured person name:</span><span class="fonnt iimpolicy_detai_insu"><input value="'+insured_per_detaiil.name+'" size="35"  id="insu_name"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address:</span><span class="fonnt"><input value="'+insured_per_detaiil.address+'" size="35"  id="insu_address"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Contact No:</span><span class="fonnt"><input value="'+insured_per_detaiil.con_no+'"  size="35" id="insu_con_no"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Select Gender:</span><span class="fonnt"><input value="'+insured_per_detaiil.gender+'" size="35" id="insu_gender"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">DOB:</span><span class="fonnt"><input value="'+insured_per_detaiil.dob+'" size="35" id="insu_dob"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Average yearly income:</span><span class="fonnt"><input value="'+insured_per_detaiil.yr_income+'" size="35" id="insu_yr_income"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Pan and Aadhar details (if any):</span><span class="fonnt"><input value="'+insured_per_detaiil.pn_adh_dtls+'" size="35" id="insu_pn_adh_dtls"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Date of issue and expiry of the policy:</span><span class="fonnt"><input value="'+insured_per_detaiil.doi_exp+'" size="35" id="insu_doi_exp"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Insured Profession:</span><span class="fonnt"><input value="'+insured_per_detaiil.isu_prof+'" size="35" id="insu_isu_proof"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Number of members in the family:</span><span class="fonnt"><input value="'+insured_per_detaiil.no_fmly+'" size="35" id="insu_no_fmly"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">How many of them are above 18+ and drive vehicle:</span><span class="fonnt"><input value="'+insured_per_detaiil.ab_age+'" size="35"  id="insu_ab_age"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">How many vehicles do you have:</span><span class="fonnt"><input value="'+insured_per_detaiil.vec_no+'" size="35" id="insu_vec_no"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Usage of vehicles:</span><span class="fonnt"><input value="'+insured_per_detaiil.usg_vec+'" size="35" id="insu_usg_vec"></span></p></li>'
$('.imz_in_div_inputa').append(imz_in_div_inputa);

$("#edit_insured_d").click(function(){
   $("#edit_insured_details").popup("close"); 
//alert('edit_policy_update');
var insu_name = document.getElementById("insu_name").value;
var insu_address = document.getElementById("insu_address").value;
var insu_con_no = document.getElementById("insu_con_no").value;
var insu_gender = document.getElementById("insu_gender").value;
var insu_dob = document.getElementById("insu_dob").value;
var insu_yr_income = document.getElementById("insu_yr_income").value;
var insu_pn_adh_dtls = document.getElementById("insu_pn_adh_dtls").value;
var insu_doi_exp = document.getElementById("insu_doi_exp").value;
var insu_isu_proof = document.getElementById("insu_isu_proof").value;
var insu_no_fmly = document.getElementById("insu_no_fmly").value;
var insu_ab_age = document.getElementById("insu_ab_age").value;
var insu_vec_no = document.getElementById("insu_vec_no").value;
var insu_usg_vec = document.getElementById("insu_usg_vec").value;
//alert(insu_name+'insu_name');
//alert(insu_address+'insu_address');
//alert(insu_con_no+'insu_con_no');
//alert(insu_gender+'insu_gender');
//alert(insu_dob+'insu_dob');
//alert(insu_yr_income+'insu_yr_income');
//alert(insu_pn_adh_dtls+'insu_pn_adh_dtls');
//alert(insu_doi_exp+'insu_doi_exp');
//alert(insu_isu_proof+'insu_isu_proof');
//alert(insu_no_fmly+'insu_no_fmly');
//alert(insu_ab_age+'insu_ab_age');
//alert(insu_vec_no+'insu_vec_no');
//alert(insu_usg_vec+'insu_usg_vec');
var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
//  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_policy.php?insu_name="+insu_name+"&policy_address_groupid="+policy_address_groupid+"&pol_avl="+pol_avl+"&policy_address="+policy_address+"&policy_dtl_pol="+policy_dtl_pol+"&policy_pol_no="+policy_pol_no+"&policy_pol_srt_dt="+policy_pol_srt_dt+"&policy_pol_end_dt="+policy_pol_end_dt+"&policy_crv_nte_no="+policy_crv_nte_no+"&policy_crv_nte_srt_dt="+policy_crv_nte_srt_dt+"&policy_crv_nte_end_dt="+policy_crv_nte_end_dt+"&policy_wheth_cls_pro="+policy_wheth_cls_pro+"&policy_dt_inmit="+policy_dt_inmit+"&policy_tax_com="+policy_tax_com+"&policy_cls_vec="+policy_cls_vec,
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_insu.php?insu_name="+insu_name+"&insu_address="+insu_address+"&insu_con_no="+insu_con_no+"&insu_gender="+insu_gender+"&insu_dob="+insu_dob+"&insu_yr_income="+insu_yr_income+"&insu_pn_adh_dtls="+insu_pn_adh_dtls+"&insu_doi_exp="+insu_doi_exp+"&insu_isu_proof="+insu_isu_proof+"&insu_no_fmly="+insu_no_fmly+"&insu_ab_age="+insu_ab_age+"&insu_vec_no="+insu_vec_no+"&insu_usg_vec="+insu_usg_vec+"&insu_user_id="+insu_user_id,
  data: formData,
  success: onSuccessins,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorins
});


});

$("#edit_insured_Cancel").click(function(){
   $("#edit_insured_details").popup("close"); 
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

function onErrorins(data, status)
{
alert("Network super eion policy");
}  
function onSuccessins(data, status)
{
//alert('success super policy');
  sessionStorage.setItem("insured_per_detaiil",JSON.stringify(data));
  $('.injuredd_r_list').empty();
  insured_per_detaiil =  JSON.parse(sessionStorage.getItem("insured_per_detaiil"));
  for(a=0;a<insured_per_detaiil.length;a++){  

  insured_per_detaiil = insured_per_detaiil[a];
// alert(addressimg_obj.document_name);

var injuredd_r_listqaa='<li class="li_hei">  <p class="li_p_pri"><span class="fonn">Vehicle insured person name:</span><span class="fonnt">'+insured_per_detaiil.name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address:</span><span class="fonnt">'+insured_per_detaiil.address+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Contact No:</span><span class="fonnt">'+insured_per_detaiil.con_no+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Select Gender:</span><span class="fonnt">'+insured_per_detaiil.gender+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">DOB:</span><span class="fonnt">'+insured_per_detaiil.dob+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Average yearly income:</span><span class="fonnt">'+insured_per_detaiil.yr_income+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Pan and Aadhar details (if any):</span><span class="fonnt">'+insured_per_detaiil.pn_adh_dtls+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Date of issue and expiry of the policy:</span><span class="fonnt">'+insured_per_detaiil.doi_exp+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Insured Profession:</span><span class="fonnt">'+insured_per_detaiil.isu_prof+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Number of members in the family:</span><span class="fonnt">'+insured_per_detaiil.no_fmly+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">How many of them are above 18+ and drive vehicle:</span><span class="fonnt">'+insured_per_detaiil.ab_age+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">How many vehicles do you have:</span><span class="fonnt">'+insured_per_detaiil.vec_no+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Usage of vehicles:</span><span class="fonnt">'+insured_per_detaiil.usg_vec+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+insured_per_detaiil.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+insured_per_detaiil.state+'</p></li>'
$('.injuredd_r_list').append(injuredd_r_listqaa);

}
}

});

//policy start
$(".iimpolicy_detai_claima_policy").click(function(){
  
    $('.imz_in_div_inputa_claiman_policy').empty();
    
 $("#edit_claimant_details_policy").popup("open"); 
 
  //alert('imopolicy');

  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");
var claimant_deta_user_id_policy_detaiil = policy_detaiil.user_id;

//var img_first_name = 'thirumal m95 12313423154';
var imz_in_div_inputa_claiman_policy='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy Available:</span><span class="fonnt "><input value="'+policy_detaiil.pol_avl+'" size="35" id="pol_pol_avl"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address:</span><span class="fonnt"><input value="'+policy_detaiil.address+'" size="35" id="pol_address"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Details Of Policy:</span><span class="fonnt"><input value="'+policy_detaiil.dtl_pol+'" size="35" id="pol_dtl_pol"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy No:</span><span class="fonnt"><input value="'+policy_detaiil.pol_no+'" size="35" id="pol_pol_no"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Policy Start Date:</span><span class="fonnt"><input value="'+policy_detaiil.pol_srt_dt+'" size="35" id="pol_pol_srt_dt"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy End Date:</span><span class="fonnt"><input value="'+policy_detaiil.pol_end_dt+'" size="35" id="pol_pol_end_dt"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note No:</span><span class="fonnt"><input value="'+policy_detaiil.crv_nte_no+'" size="35" id="pol_crv_nte_no"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note Start Date:</span><span class="fonnt"><input value="'+policy_detaiil.crv_nte_srt_dt+'" size="35" id="pol_crv_nte_srt_dt"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note End Date:</span><span class="fonnt"><input value="'+policy_detaiil.crv_nte_end_dt+'" size="35" id="pol_crv_nte_end_dt"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Close Proximity(within 15days):</span><span class="fonnt"><input value="'+policy_detaiil.wheth_cls_pro+'" size="35" id="pol_wheth_cls_pro"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Date Of Intimation:</span><span class="fonnt"><input value="'+policy_detaiil.dt_inmit+'" size="35" id="pol_dt_inmit"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Tax/Commercial:</span><span class="fonnt"><input value="'+policy_detaiil.tax_com+'"  size="35" id="pol_tax_com"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Class Of Vehicle:</span><span class="fonnt"><input value="'+policy_detaiil.cls_vec+'" size="35" id="pol_cls_vec"></span></p></li>'
$('.imz_in_div_inputa_claiman_policy').append(imz_in_div_inputa_claiman_policy);
                   

$("#edit_insured_d_claima_policy").click(function(){
  
   $("#edit_claimant_details_policy").popup("close"); 
   
//alert('edit_policy_update');
var pol_pol_avl = document.getElementById("pol_pol_avl").value;//1
var pol_address = document.getElementById("pol_address").value;//2
var pol_dtl_pol = document.getElementById("pol_dtl_pol").value;//3
var pol_pol_no = document.getElementById("pol_pol_no").value;//4
var pol_pol_srt_dt = document.getElementById("pol_pol_srt_dt").value;//5
var pol_pol_end_dt = document.getElementById("pol_pol_end_dt").value;//6
var pol_crv_nte_no = document.getElementById("pol_crv_nte_no").value;//7
var pol_crv_nte_srt_dt = document.getElementById("pol_crv_nte_srt_dt").value;//8
var pol_crv_nte_end_dt = document.getElementById("pol_crv_nte_end_dt").value;//9
var pol_wheth_cls_pro = document.getElementById("pol_wheth_cls_pro").value;//10
var pol_dt_inmit = document.getElementById("pol_dt_inmit").value;//11

var pol_tax_com = document.getElementById("pol_tax_com").value;//12
var pol_cls_vec = document.getElementById("pol_cls_vec").value;//13


/*alert(claimant_deta_user_id_policy_detaiil+'claimant_deta_user_id_policy_detaiil');

alert(pol_pol_avl+'pol_pol_avl');//1
alert(pol_address+'pol_address');//2
alert(pol_dtl_pol+'pol_dtl_pol');//3
alert(pol_pol_no+'pol_pol_no');//4
alert(pol_pol_srt_dt+'pol_pol_srt_dt');//5
alert(pol_pol_end_dt+'pol_pol_end_dt');//6
alert(pol_crv_nte_no+'pol_crv_nte_no');//7
alert(pol_crv_nte_srt_dt+'pol_crv_nte_srt_dt');//8
alert(pol_crv_nte_end_dt+'pol_crv_nte_end_dt');//9
alert(pol_wheth_cls_pro+'pol_wheth_cls_pro');//10
alert(pol_dt_inmit+'pol_dt_inmit');//11

alert(pol_tax_com+'pol_tax_com');//12
alert(pol_cls_vec+'pol_cls_vec');//13*/


var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
//  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_insu_fir.php?name_of_ps="+name_of_ps+"&address_of_ps="+address_of_ps+"&dist_bet_acc_ps="+dist_bet_acc_ps+"&fir_no="+fir_no+"&fir_date="+fir_date+"&delay_in_fir="+delay_in_fir+"&firsum="+firsum+"&fircoy="+fircoy+"&fir_logged_by="+fir_logged_by+"&fofname="+fofname+"&relationship_with_victim="+relationship_with_victim+"&vehicle_details="+vehicle_details+"&no_of_veh_involved="+no_of_veh_involved+"&vehicle_impleded_as_party="+vehicle_impleded_as_party+"&mvi_inspected="+mvi_inspected+"&summary_of_nvi="+summary_of_nvi+"&damage_of_vehicle="+damage_of_vehicle+"&shid_mark_obs="+shid_mark_obs+"&per_of_contribution="+per_of_contribution+"&chargesheet_filed="+chargesheet_filed+"&chargesheetcoll="+chargesheetcoll+"&sumchrge="+sumchrge+"&insu_user_id_fir="+insu_user_id_fir,  
 url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/updatepolicydetai.php?pol_pol_avl="+pol_pol_avl+"&pol_address="+pol_address+"&pol_dtl_pol="+pol_dtl_pol+"&pol_pol_no="+pol_pol_no+"&pol_pol_srt_dt="+pol_pol_srt_dt+"&pol_pol_end_dt="+pol_pol_end_dt+"&pol_crv_nte_no="+pol_crv_nte_no+"&pol_crv_nte_srt_dt="+pol_crv_nte_srt_dt+"&pol_crv_nte_end_dt="+pol_crv_nte_end_dt+"&pol_wheth_cls_pro="+pol_wheth_cls_pro+"&pol_dt_inmit="+pol_dt_inmit+"&pol_tax_com="+pol_tax_com+"&pol_cls_vec="+pol_cls_vec+"&claimant_deta_user_id_policy_detaiil="+claimant_deta_user_id_policy_detaiil,
 data: formData,
  success: onSuccessins,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorins
});


});

$("#edit_insured_Cancel").click(function(){
   $("#edit_claimant_details_policy").popup("close"); 
   
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

function onErrorins(data, status)
{
alert("Network super eion policy");
}  
function onSuccessins(data, status)
{
//alert('success super ffffffffffir');
  sessionStorage.setItem("policy_detaiil",JSON.stringify(data));
  $('.policy_detaiils_detai').empty();

  policy_detaiil =  JSON.parse(sessionStorage.getItem("policy_detaiil"));
  for(a=0;a<policy_detaiil.length;a++){  

  policy_detaiil = policy_detaiil[a];
// alert(addressimg_obj.document_name);

var sderclaimant='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy Available:</span><span class="fonnt ">'+policy_detaiil.pol_avl+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address:</span><span class="fonnt">'+policy_detaiil.address+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Details Of Policy:</span><span class="fonnt">'+policy_detaiil.dtl_pol+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy No:</span><span class="fonnt">'+policy_detaiil.pol_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Policy Start Date:</span><span class="fonnt">'+policy_detaiil.pol_srt_dt+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy End Date:</span><span class="fonnt">'+policy_detaiil.pol_end_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note No:</span><span class="fonnt">'+policy_detaiil.crv_nte_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note Start Date:</span><span class="fonnt">'+policy_detaiil.city_name+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note End Date:</span><span class="fonnt">'+policy_detaiil.crv_nte_end_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Close Proximity(within 15days):</span><span class="fonnt">'+policy_detaiil.wheth_cls_pro+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Date Of Intimation:</span><span class="fonnt">'+policy_detaiil.dt_inmit+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Tax/Commercial:</span><span class="fonnt">'+policy_detaiil.tax_com+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Class Of Vehicle:</span><span class="fonnt">'+policy_detaiil.cls_vec+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+policy_detaiil.state+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">'+policy_detaiil.city_name+'</span></p></li>'
$('.policy_detaiils_detai').append(sderclaimant);

/*var injuredd_r_listqaa='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn ">Name of Police Station:</span><span class="fonnt iimpolicy_detai_insu">'+fir_detai.name_of_ps+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address of Police Station:</span><span class="fonnt">'+fir_detai.address_of_ps+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Site:</span><span class="fonnt">'+fir_detai.dist_bet_acc_ps+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR No:</span><span class="fonnt">'+fir_detai.fir_no+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR Date:</span><span class="fonnt">'+fir_detai.fir_date+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any delay in filing the FIR:</span><span class="fonnt">'+fir_detai.delay_in_fir+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR summary details:</span><span class="fonnt">'+fir_detai.firsum+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is FIR copy collected:</span><span class="fonnt">'+fir_detai.fircoy+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">FIR Logged by:</span><span class="fonnt">'+fir_detai.fir_logged_by+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Fourth Force Investigating Officers Name:</span><span class="fonnt">'+fir_detai.fofname+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Relationship to the Victim/Claimant:</span><span class="fonnt">'+fir_detai.relationship_with_victim+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Vehicle Details mentioned in the FIR:</span><span class="fonnt">'+fir_detai.vehicle_details+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">No of Vehicles involved in the accident:</span><span class="fonnt">'+fir_detai.no_of_veh_involved+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Owner of vehicle impleded as party:</span><span class="fonnt">'+fir_detai.vehicle_impleded_as_party+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether MVI Inspected:</span><span class="fonnt">'+fir_detai.mvi_inspected+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of MVI Inspection:</span><span class="fonnt">'+fir_detai.summary_of_nvi+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Accessed Damage of vehicle:</span><span class="fonnt">'+fir_detai.damage_of_vehicle+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Skid Marks Available:</span><span class="fonnt">'+fir_detai.shid_mark_obs+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Percentage of contribution of the vehicles to the accident:</span><span class="fonnt">'+fir_detai.per_of_contribution+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Chargesheet Filed:</span><span class="fonnt">'+fir_detai.chargesheet_filed+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Charge Sheet collected:</span><span class="fonnt">'+fir_detai.chargesheetcoll+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of the Charge Sheet, if applicable:</span><span class="fonnt">'+fir_detai.sumchrge+'</span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">"city"</span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">"state"</span></p></li>'
$('.fir_details_disa').append(injuredd_r_listqaa);
acci_details_disa_accide*/

}
}
});

//policty end


//11111111110111111111111111 update end
for(a=0;a<employment_upload_array.length;a++){  

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
//alert(oneemp+'oneemp image');
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}
/*101 insured details end */
if(qualification_id == '97' ){
//  alert(qualification_id+'97');
      if(verification_maste !== null){
if(peruserin == userobjin ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var multi_type_id_insu=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && multi_type_id_insu == '105' ){

var oneemp=employimg_obj.document;
//alert(oneemp+'oneemp');
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
//alert('claimant');

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Claim No:'+verification_maste.clno+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}

  $('#lii_newinui').hide();
  $('.proof').hide();
  $('#fir_details').show();
var fir_details_dis='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn ">Name of Police Station:</span><span class="fonnt iimpolicy_detai_insu">'+fir_detai.name_of_ps+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address of Police Station:</span><span class="fonnt">'+fir_detai.address_of_ps+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Site:</span><span class="fonnt">'+fir_detai.dist_bet_acc_ps+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR No:</span><span class="fonnt">'+fir_detai.fir_no+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR Date:</span><span class="fonnt">'+fir_detai.fir_date+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any delay in filing the FIR:</span><span class="fonnt">'+fir_detai.delay_in_fir+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR summary details:</span><span class="fonnt">'+fir_detai.firsum+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is FIR copy collected:</span><span class="fonnt">'+fir_detai.fircoy+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">FIR Logged by:</span><span class="fonnt">'+fir_detai.fir_logged_by+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Fourth Force Investigating Officers Name:</span><span class="fonnt">'+fir_detai.fofname+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Relationship to the Victim/Claimant:</span><span class="fonnt">'+fir_detai.relationship_with_victim+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Vehicle Details mentioned in the FIR:</span><span class="fonnt">'+fir_detai.vehicle_details+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">No of Vehicles involved in the accident:</span><span class="fonnt">'+fir_detai.no_of_veh_involved+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Owner of vehicle impleded as party:</span><span class="fonnt">'+fir_detai.vehicle_impleded_as_party+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether MVI Inspected:</span><span class="fonnt">'+fir_detai.mvi_inspected+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of MVI Inspection:</span><span class="fonnt">'+fir_detai.summary_of_nvi+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Accessed Damage of vehicle:</span><span class="fonnt">'+fir_detai.damage_of_vehicle+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Skid Marks Available:</span><span class="fonnt">'+fir_detai.shid_mark_obs+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Percentage of contribution of the vehicles to the accident:</span><span class="fonnt">'+fir_detai.per_of_contribution+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Chargesheet Filed:</span><span class="fonnt">'+fir_detai.chargesheet_filed+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Charge Sheet collected:</span><span class="fonnt">'+fir_detai.chargesheetcoll+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of the Charge Sheet, if applicable:</span><span class="fonnt">'+fir_detai.sumchrge+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">FIR Time:</span><span class="fonnt">'+fir_detai.firtime+'</span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">FIR UNDER U/S(IPC) AND MV ACT:</span><span class="fonnt">'+fir_detai.ipcact+'</span></p></li>  <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">'+fir_detai.city_name+'</span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+fir_detai.state+'</span></p></li>'
$('.fir_details_disa').append(fir_details_dis);

$(".iimpolicy_detai_fir").click(function(){
    $('.imz_in_div_inputa_fir').empty();
 $("#edit_fir_details").popup("open"); 
  //alert('imopolicy');

  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");
var insu_user_id_fir = fir_detai.user_id;

//var img_first_name = 'thirumal m95 12313423154';
var imz_in_div_inputa_fir='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn ">Name of Police Station:</span><span class="fonnt iimpolicy_detai_insu"><input value="'+fir_detai.name_of_ps+'" size="35" id="name_of_ps"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address of Police Station:</span><span class="fonnt"><input value="'+fir_detai.address_of_ps+'"  size="35" id="address_of_ps"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Site:</span><span class="fonnt"><input value="'+fir_detai.dist_bet_acc_ps+'"  size="35" id="dist_bet_acc_ps"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR No:</span><span class="fonnt"><input value="'+fir_detai.fir_no+'"  size="35" id="fir_no"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR Date:</span><span class="fonnt"><input value="'+fir_detai.fir_date+'"  size="35" id="fir_date"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any delay in filing the FIR:</span><span class="fonnt"><input value="'+fir_detai.delay_in_fir+'"  size="35" id="delay_in_fir"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR summary details:</span><span class="fonnt"><input value="'+fir_detai.firsum+'"  size="35" id="firsum"></span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is FIR copy collected:</span><span class="fonnt"><input value="'+fir_detai.fircoy+'"  size="35" id="fircoy"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">FIR Logged by:</span><span class="fonnt"><input value="'+fir_detai.fir_logged_by+'"   size="35" id="fir_logged_by"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Fourth Force Investigating Officers Name:</span><span class="fonnt"><input value="'+fir_detai.fofname+'" size="35"  id="fofname"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Relationship to the Victim/Claimant:</span><span class="fonnt"><input value="'+fir_detai.relationship_with_victim+'"  size="35" id="relationship_with_victim"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Vehicle Details mentioned in the FIR:</span><span class="fonnt"><input value="'+fir_detai.vehicle_details+'"  size="35" id="vehicle_details"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">No of Vehicles involved in the accident:</span><span class="fonnt"><input value="'+fir_detai.no_of_veh_involved+'" size="35"  id="no_of_veh_involved"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Owner of vehicle impleded as party:</span><span class="fonnt"><input value="'+fir_detai.vehicle_impleded_as_party+'"  size="35" id="vehicle_impleded_as_party"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether MVI Inspected:</span><span class="fonnt"><input value="'+fir_detai.mvi_inspected+'"  size="35" id="mvi_inspected"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of MVI Inspection:</span><span class="fonnt"><input value="'+fir_detai.summary_of_nvi+'"  size="35" id="summary_of_nvi"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Accessed Damage of vehicle:</span><span class="fonnt"><input value="'+fir_detai.damage_of_vehicle+'"  size="35" id="damage_of_vehicle"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Skid Marks Available:</span><span class="fonnt"><input value="'+fir_detai.shid_mark_obs+'"  size="35" id="shid_mark_obs"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Percentage of contribution of the vehicles to the accident:</span><span class="fonnt"><input value="'+fir_detai.per_of_contribution+'"  size="35" id="per_of_contribution"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Chargesheet Filed:</span><span class="fonnt"><input value="'+fir_detai.chargesheet_filed+'"  size="35" id="chargesheet_filed"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Charge Sheet collected:</span><span class="fonnt"><input value="'+fir_detai.chargesheetcoll+'"  size="35" id="chargesheetcoll"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of the Charge Sheet, if applicable:</span><span class="fonnt"><input value="'+fir_detai.sumchrge+'"  size="35" id="sumchrge"></span></p></li>'
$('.imz_in_div_inputa_fir').append(imz_in_div_inputa_fir);

$("#edit_insured_d_fir").click(function(){
   $("#edit_fir_details").popup("close"); 
//alert('edit_policy_update');
var name_of_ps = document.getElementById("name_of_ps").value;
var address_of_ps = document.getElementById("address_of_ps").value;
var dist_bet_acc_ps = document.getElementById("dist_bet_acc_ps").value;
var fir_no = document.getElementById("fir_no").value;
var fir_date = document.getElementById("fir_date").value;
var delay_in_fir = document.getElementById("delay_in_fir").value;
var firsum = document.getElementById("firsum").value;
var fircoy = document.getElementById("fircoy").value;
var fir_logged_by = document.getElementById("fir_logged_by").value;
var fofname = document.getElementById("fofname").value;
var relationship_with_victim = document.getElementById("relationship_with_victim").value;
var vehicle_details = document.getElementById("vehicle_details").value;
var no_of_veh_involved = document.getElementById("no_of_veh_involved").value;
var vehicle_impleded_as_party = document.getElementById("vehicle_impleded_as_party").value;
var mvi_inspected = document.getElementById("mvi_inspected").value;
var summary_of_nvi = document.getElementById("summary_of_nvi").value;
var damage_of_vehicle = document.getElementById("damage_of_vehicle").value;
var shid_mark_obs = document.getElementById("shid_mark_obs").value;
var per_of_contribution = document.getElementById("per_of_contribution").value;
var chargesheet_filed = document.getElementById("chargesheet_filed").value;
var chargesheetcoll = document.getElementById("chargesheetcoll").value;
var sumchrge = document.getElementById("sumchrge").value;

/*alert(insu_user_id_fir+'insu_user_id_fir');

alert(name_of_ps+'name_of_ps');
alert(address_of_ps+'address_of_ps');
alert(dist_bet_acc_ps+'dist_bet_acc_ps');
alert(fir_no+'fir_no');
alert(fir_date+'fir_date');
alert(delay_in_fir+'delay_in_fir');
alert(firsum+'firsum');
alert(fircoy+'fircoy');
alert(fir_logged_by+'fir_logged_by');
alert(fofname+'fofname');
alert(relationship_with_victim+'relationship_with_victim');
alert(vehicle_details+'vehicle_details');
alert(no_of_veh_involved+'no_of_veh_involved');
alert(vehicle_impleded_as_party+'vehicle_impleded_as_party');
alert(mvi_inspected+'mvi_inspected');
alert(summary_of_nvi+'summary_of_nvi');
alert(damage_of_vehicle+'damage_of_vehicle');
alert(shid_mark_obs+'shid_mark_obs');
alert(per_of_contribution+'per_of_contribution');
alert(chargesheet_filed+'chargesheet_filed');
alert(chargesheetcoll+'chargesheetcoll');
alert(sumchrge+'sumchrge');*/

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_insu_fir.php?name_of_ps="+name_of_ps+"&address_of_ps="+address_of_ps+"&dist_bet_acc_ps="+dist_bet_acc_ps+"&fir_no="+fir_no+"&fir_date="+fir_date+"&delay_in_fir="+delay_in_fir+"&firsum="+firsum+"&fircoy="+fircoy+"&fir_logged_by="+fir_logged_by+"&fofname="+fofname+"&relationship_with_victim="+relationship_with_victim+"&vehicle_details="+vehicle_details+"&no_of_veh_involved="+no_of_veh_involved+"&vehicle_impleded_as_party="+vehicle_impleded_as_party+"&mvi_inspected="+mvi_inspected+"&summary_of_nvi="+summary_of_nvi+"&damage_of_vehicle="+damage_of_vehicle+"&shid_mark_obs="+shid_mark_obs+"&per_of_contribution="+per_of_contribution+"&chargesheet_filed="+chargesheet_filed+"&chargesheetcoll="+chargesheetcoll+"&sumchrge="+sumchrge+"&insu_user_id_fir="+insu_user_id_fir,  
  data: formData,
  success: onSuccessins,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorins
});


});

$("#edit_insured_Cancel").click(function(){
   $("#edit_fir_details").popup("close"); 
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

function onErrorins(data, status)
{
alert("Network super eion policy");
}  
function onSuccessins(data, status)
{
//alert('success super ffffffffffir');
  sessionStorage.setItem("fir_detai",JSON.stringify(data));
  $('.fir_details_disa').empty();
  fir_detai =  JSON.parse(sessionStorage.getItem("fir_detai"));
  for(a=0;a<fir_detai.length;a++){  

  fir_detai = fir_detai[a];
// alert(addressimg_obj.document_name);

var injuredd_r_listqaa='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn ">Name of Police Station:</span><span class="fonnt iimpolicy_detai_insu">'+fir_detai.name_of_ps+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address of Police Station:</span><span class="fonnt">'+fir_detai.address_of_ps+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Site:</span><span class="fonnt">'+fir_detai.dist_bet_acc_ps+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR No:</span><span class="fonnt">'+fir_detai.fir_no+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR Date:</span><span class="fonnt">'+fir_detai.fir_date+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any delay in filing the FIR:</span><span class="fonnt">'+fir_detai.delay_in_fir+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR summary details:</span><span class="fonnt">'+fir_detai.firsum+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is FIR copy collected:</span><span class="fonnt">'+fir_detai.fircoy+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">FIR Logged by:</span><span class="fonnt">'+fir_detai.fir_logged_by+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Fourth Force Investigating Officers Name:</span><span class="fonnt">'+fir_detai.fofname+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Relationship to the Victim/Claimant:</span><span class="fonnt">'+fir_detai.relationship_with_victim+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Vehicle Details mentioned in the FIR:</span><span class="fonnt">'+fir_detai.vehicle_details+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">No of Vehicles involved in the accident:</span><span class="fonnt">'+fir_detai.no_of_veh_involved+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Owner of vehicle impleded as party:</span><span class="fonnt">'+fir_detai.vehicle_impleded_as_party+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether MVI Inspected:</span><span class="fonnt">'+fir_detai.mvi_inspected+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of MVI Inspection:</span><span class="fonnt">'+fir_detai.summary_of_nvi+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Accessed Damage of vehicle:</span><span class="fonnt">'+fir_detai.damage_of_vehicle+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Skid Marks Available:</span><span class="fonnt">'+fir_detai.shid_mark_obs+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Percentage of contribution of the vehicles to the accident:</span><span class="fonnt">'+fir_detai.per_of_contribution+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Chargesheet Filed:</span><span class="fonnt">'+fir_detai.chargesheet_filed+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Charge Sheet collected:</span><span class="fonnt">'+fir_detai.chargesheetcoll+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of the Charge Sheet, if applicable:</span><span class="fonnt">'+fir_detai.sumchrge+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">FIR Time:</span><span class="fonnt">'+fir_detai.firtime+'</span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">FIR UNDER U/S(IPC) AND MV ACT:</span><span class="fonnt">'+fir_detai.ipcact+'</span></p></li>  <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">'+fir_detai.city_name+'</span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+fir_detai.state+'</span></p></li>'
$('.fir_details_disa').append(injuredd_r_listqaa);

}
}
});

for(a=0;a<employment_upload_array.length;a++){  

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
// /alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}

if(qualification_id == '100' ){
  //alert(qualification_id+'100');

  if(verification_maste !== null){
if(peruserin == userobjin ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var multi_type_id_insu=employimg_obj.verification_type_id;
  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && multi_type_id_insu == '105' ){

var oneemp=employimg_obj.document;
//alert(oneemp+'oneemp');
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Claim No:'+verification_maste.clno+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}

  $('#driver_owner').show();
     $('#lii_newinui').hide();
   $('.proof').hide();
var sderqwe='<li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Name :</span><span class="fonnt">'+driver_details_o.name+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address :</span><span class="fonnt">'+driver_details_o.address+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Contact No:</span><span class="fonnt">'+driver_details_o.con_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Select Gender :</span><span class="fonnt">'+driver_details_o.gender+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Type of DL :</span><span class="fonnt">'+driver_details_o.dl_type+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DOB :</span><span class="fonnt">'+driver_details_o.dob+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driving Licence No :</span><span class="fonnt">'+driver_details_o.dl_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Issuing Authority :</span><span class="fonnt">'+driver_details_o.issue_autho+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of issue & Expiry :</span><span class="fonnt">'+driver_details_o.doi_exp+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Vehicles authorized to drive :</span><span class="fonnt">'+driver_details_o.vec_auth+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Badge No :</span><span class="fonnt">'+driver_details_o.bdg_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date if Applicable :</span><span class="fonnt">'+driver_details_o.date_app+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Provide opposite Vehicles driver details :</span><span class="fonnt">'+driver_details_o.opp_dr_dtls+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Age:</span><span class="fonnt">'+driver_details_o.age+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Place of Issue:</span><span class="fonnt">'+driver_details_o.dl_place_issue+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Education:</span><span class="fonnt">'+driver_details_o.driver_education+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Experience:</span><span class="fonnt">'+driver_details_o.driver_exp+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Valid For:</span><span class="fonnt">'+driver_details_o.dl_valid_for+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Class of DL:</span><span class="fonnt">'+driver_details_o.class_of_dl+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver from the same locality:</span><span class="fonnt">'+driver_details_o.driver_same_locality+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver in petition is same as fir:</span><span class="fonnt">'+driver_details_o.driver_petition_same_fir+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Criminal Case status against driver:</span><span class="fonnt">'+driver_details_o.criminal_case_status+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Issue :</span><span class="fonnt">'+driver_details_o.do_issue+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver involved in any accident in last 2 years:</span><span class="fonnt">'+driver_details_o.dr_invloved+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is the driver under any influence of intoxicating liquor or drugs:</span><span class="fonnt">'+driver_details_o.dr_influ+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any other relevant information:</span><span class="fonnt">'+driver_details_o.othr_info+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">State :</span><span class="fonnt">'+driver_details_o.state+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">City :</span><span class="fonnt">'+driver_details_o.city_name+'</span></p></li>'
$('.driver_owner_details_list').append(sderqwe);

$(".iimpolicy_detai_fir_ownero").click(function(){
  
    $('.imz_in_div_inputa_owner').empty();
    
 $("#edit_owner_driver_details_owner").popup("open"); 
 
  //alert('imopolicy');

  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");
var insu_user_id_owner_o = driver_details_o.user_id;

//var img_first_name = 'thirumal m 12313423154';
var imz_in_div_inputa_owner='<li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Name :</span><span class="fonnt"><input value="'+driver_details_o.name+'" size="35" id="owner_name"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address :</span><span class="fonnt"><input value="'+driver_details_o.address+'" size="35" id="owner_adress"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Contact No:</span><span class="fonnt"><input value="'+driver_details_o.con_no+'" size="35" id="owner_con_no"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Select Gender :</span><span class="fonnt"><input value="'+driver_details_o.gender+'" size="35" id="owner_gender"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Type of DL :</span><span class="fonnt"><input value="'+driver_details_o.dl_type+'" size="35" id="owner_dl_type"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DOB :</span><span class="fonnt"><input value="'+driver_details_o.dob+'" size="35" id="owner_dob"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driving Licence No :</span><span class="fonnt"><input value="'+driver_details_o.dl_no+'" size="35" id="owner_dl_no"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Issuing Authority :</span><span class="fonnt"><input value="'+driver_details_o.issue_autho+'" size="35" id="owner_issue_autho">'+driver_details_o.issue_autho+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of issue & Expiry :</span><span class="fonnt"><input value="'+driver_details_o.doi_exp+'" size="35" id="owner_doi_exp"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Vehicles authorized to drive :</span><span class="fonnt"><input value="'+driver_details_o.vec_auth+'" size="35" id="owner_vec_auth"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Badge No :</span><span class="fonnt"><input value="'+driver_details_o.bdg_no+'" size="35" id="owner_bdg_no"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date if Applicable :</span><span class="fonnt"><input value="'+driver_details_o.date_app+'" size="35" id="owner_date_app"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Provide opposite Vehicles driver details :</span><span class="fonnt"><input value="'+driver_details_o.opp_dr_dtls+'" size="35" id="owner_opp_dr_dtls"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Age:</span><span class="fonnt"><input value="'+driver_details_o.age+'" size="35" id="owner_age"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Place of Issue:</span><span class="fonnt"><input value="'+driver_details_o.dl_place_issue+'" size="35" id="o_dl_place_issue"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Education:</span><span class="fonnt"><input value="'+driver_details_o.driver_education+'" size="35" id="o_driver_education"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Experience:</span><span class="fonnt"><input value="'+driver_details_o.driver_exp+'" size="35" id="o_driver_exp"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Valid For:</span><span class="fonnt"><input value="'+driver_details_o.dl_valid_for+'" size="35" id="o_dl_valid_for"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Class of DL:</span><span class="fonnt"><input value="'+driver_details_o.class_of_dl+'" size="35" id="o_class_of_dl">'+driver_details_o.class_of_dl+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver from the same locality:</span><span class="fonnt"><input value="'+driver_details_o.driver_same_locality+'" size="35" id="o_driver_same_locality"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver in petition is same as fir:</span><span class="fonnt"><input value="'+driver_details_o.driver_petition_same_fir+'" size="35" id="o_driver_petition_same_fir"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Criminal Case status against driver:</span><span class="fonnt"><input value="'+driver_details_o.criminal_case_status+'" size="35" id="ocriminal_case_status"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Issue :</span><span class="fonnt"><input value="'+driver_details_o.do_issue+'" size="35" id="o_do_issue"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver involved in any accident in last 2 years:</span><span class="fonnt"><input value="'+driver_details_o.dr_invloved+'" size="35" id="o_dr_invloved"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is the driver under any influence of intoxicating liquor or drugs:</span><span class="fonnt"><input value="'+driver_details_o.dr_influ+'" size="35" id="o_dr_influ"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any other relevant information:</span><span class="fonnt"><input value="'+driver_details_o.othr_info+'" size="35" id="o_othr_info"></span></p></li>'
$('.imz_in_div_inputa_owner').append(imz_in_div_inputa_owner);
                                   
$("#edit_insured_d_ownera").click(function(){
  
   $("#edit_owner_driver_details_owner").popup("close"); 
   
//alert('edit_policy_update');
var owner_name = document.getElementById("owner_name").value;
var owner_adress = document.getElementById("owner_adress").value;
var owner_con_no = document.getElementById("owner_con_no").value;
var owner_gender = document.getElementById("owner_gender").value;
var owner_dl_type = document.getElementById("owner_dl_type").value;
var owner_dob = document.getElementById("owner_dob").value;
var owner_dl_no = document.getElementById("owner_dl_no").value;
var owner_issue_autho = document.getElementById("owner_issue_autho").value;
var owner_doi_exp = document.getElementById("owner_doi_exp").value;
var owner_vec_auth = document.getElementById("owner_vec_auth").value;
var owner_bdg_no = document.getElementById("owner_bdg_no").value;
var owner_date_app = document.getElementById("owner_date_app").value;
var owner_opp_dr_dtls = document.getElementById("owner_opp_dr_dtls").value;
var owner_age = document.getElementById("owner_age").value;
var o_dl_place_issue = document.getElementById("o_dl_place_issue").value;
var o_driver_education = document.getElementById("o_driver_education").value;
var o_driver_exp = document.getElementById("o_driver_exp").value;
var o_dl_valid_for = document.getElementById("o_dl_valid_for").value;
var o_class_of_dl = document.getElementById("o_class_of_dl").value;
var o_driver_same_locality = document.getElementById("o_driver_same_locality").value;
var o_driver_petition_same_fir = document.getElementById("o_driver_petition_same_fir").value;
var ocriminal_case_status = document.getElementById("ocriminal_case_status").value;
var o_do_issue = document.getElementById("o_do_issue").value;
var o_dr_invloved = document.getElementById("o_dr_invloved").value;
var o_dr_influ = document.getElementById("o_dr_influ").value;
var o_othr_info = document.getElementById("o_othr_info").value;



/*alert(insu_user_id_owner_o+'insu_user_id_owner_o');

alert(owner_name+'owner_name');//1
alert(owner_adress+'owner_adress');//2
alert(owner_con_no+'owner_con_no');//3
alert(owner_gender+'owner_gender');//4
alert(owner_dl_type+'owner_dl_type');//5
alert(owner_dob+'owner_dob');//6
alert(owner_dl_no+'owner_dl_no');//7
alert(owner_issue_autho+'owner_issue_autho');//8
alert(owner_doi_exp+'owner_doi_exp');//9
alert(owner_vec_auth+'owner_vec_auth');//10
alert(owner_bdg_no+'owner_bdg_no');//11
alert(owner_date_app+'owner_date_app');//12
alert(owner_opp_dr_dtls+'owner_opp_dr_dtls');//13
alert(owner_age+'owner_age');//14
alert(o_dl_place_issue+'o_dl_place_issue');//15
alert(o_driver_education+'o_driver_education');//16
alert(o_driver_exp+'o_driver_exp');//17
alert(o_dl_valid_for+'o_dl_valid_for');//18
alert(o_class_of_dl+'o_class_of_dl');//19
alert(o_driver_same_locality+'o_driver_same_locality');//20
alert(o_driver_petition_same_fir+'o_driver_petition_same_fir');//21
alert(ocriminal_case_status+'ocriminal_case_status');//22
alert(o_do_issue+'o_do_issue');//23
alert(o_dr_invloved+'o_dr_invloved');//24
alert(o_dr_influ+'o_dr_influ');//25
alert(o_othr_info+'o_othr_info');//26*/


var formData = $("#callAjaxForm").serialize();


//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
 // url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_outside_driver.php?out_name="+out_name+"&address="+address+"&con_no="+con_no+"&gender="+gender+"&is_driver="+is_driver+"&dl_type="+dl_type+"&dob="+dob+"&dr_lic_no="+dr_lic_no+"&issu_autho="+issu_autho+"&updated_date="+updated_date+"&doi_exp="+doi_exp+"&vec_autho="+vec_autho+"&bg_no="+bg_no+"&date_app="+date_app+"&op_dr_dtls="+op_dr_dtls+"&driver_drugs="+driver_drugs+"&dr_involved="+dr_involved+"&natr_relation="+natr_relation+"&cur_emp_pr="+cur_emp_pr+"&info="+info+"&age="+age+"&dl_place_of_issue="+dl_place_of_issue+"&driver_education="+driver_education+"&driver_experience="+driver_experience+"&dl_valid_for="+dl_valid_for+"&class_of_dl="+class_of_dl+"&driver_petition_same_fir="+driver_petition_same_fir+"&criminal_case_status="+criminal_case_status+"&insu_user_id_outside_driver="+insu_user_id_outside_driver,  
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_owner_d.php?owner_name="+owner_name+"&owner_adress="+owner_adress+"&owner_con_no="+owner_con_no+"&owner_gender="+owner_gender+"&owner_dl_type="+owner_dl_type+"&owner_dob="+owner_dob+"&owner_dl_no="+owner_dl_no+"&owner_issue_autho="+owner_issue_autho+"&owner_doi_exp="+owner_doi_exp+"&owner_vec_auth="+owner_vec_auth+"&owner_bdg_no="+owner_bdg_no+"&owner_date_app="+owner_date_app+"&owner_opp_dr_dtls="+owner_opp_dr_dtls+"&owner_age="+owner_age+"&o_dl_place_issue="+o_dl_place_issue+"&o_driver_education="+o_driver_education+"&o_driver_exp="+o_driver_exp+"&o_dl_valid_for="+o_dl_valid_for+"&o_class_of_dl="+o_class_of_dl+"&o_driver_same_locality="+o_driver_same_locality+"&o_driver_petition_same_fir="+o_driver_petition_same_fir+"&ocriminal_case_status="+ocriminal_case_status+"&o_do_issue="+o_do_issue+"&o_dr_invloved="+o_dr_invloved+"&o_dr_influ="+o_dr_influ+"&o_othr_info="+o_othr_info+"&insu_user_id_owner_o="+insu_user_id_owner_o,

  data: formData,
  success: onSuccessins,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorins
});


});

$("#edit_insured_Cancel").click(function(){
   $("#edit_ownero_driver_details").popup("close"); 
   
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

function onErrorins(data, status)
{
alert("Network super eion policy");
}  
function onSuccessins(data, status)
{
//alert('success super ffffffffffir');
  sessionStorage.setItem("driver_details_o",JSON.stringify(data));
  $('.driver_owner_details_list').empty();
  
  driver_details_o =  JSON.parse(sessionStorage.getItem("driver_details_o"));
  for(a=0;a<driver_details_o.length;a++){  

  driver_details_o = driver_details_o[a];
// alert(addressimg_obj.document_name);

var injuredd_r_listqaa='<li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Name :</span><span class="fonnt">'+driver_details_o.name+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address :</span><span class="fonnt">'+driver_details_o.address+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Contact No:</span><span class="fonnt">'+driver_details_o.con_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Select Gender :</span><span class="fonnt">'+driver_details_o.gender+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Type of DL :</span><span class="fonnt">'+driver_details_o.dl_type+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DOB :</span><span class="fonnt">'+driver_details_o.dob+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driving Licence No :</span><span class="fonnt">'+driver_details_o.dl_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Issuing Authority :</span><span class="fonnt">'+driver_details_o.issue_autho+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of issue & Expiry :</span><span class="fonnt">'+driver_details_o.doi_exp+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Vehicles authorized to drive :</span><span class="fonnt">'+driver_details_o.vec_auth+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Badge No :</span><span class="fonnt">'+driver_details_o.bdg_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date if Applicable :</span><span class="fonnt">'+driver_details_o.date_app+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Provide opposite Vehicles driver details :</span><span class="fonnt">'+driver_details_o.opp_dr_dtls+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Age:</span><span class="fonnt">'+driver_details_o.age+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Place of Issue:</span><span class="fonnt">'+driver_details_o.dl_place_issue+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Education:</span><span class="fonnt">'+driver_details_o.driver_education+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Experience:</span><span class="fonnt">'+driver_details_o.driver_exp+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Valid For:</span><span class="fonnt">'+driver_details_o.dl_valid_for+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Class of DL:</span><span class="fonnt">'+driver_details_o.class_of_dl+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver from the same locality:</span><span class="fonnt">'+driver_details_o.driver_same_locality+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver in petition is same as fir:</span><span class="fonnt">'+driver_details_o.driver_petition_same_fir+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Criminal Case status against driver:</span><span class="fonnt">'+driver_details_o.criminal_case_status+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Issue :</span><span class="fonnt">'+driver_details_o.do_issue+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver involved in any accident in last 2 years:</span><span class="fonnt">'+driver_details_o.dr_invloved+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is the driver under any influence of intoxicating liquor or drugs:</span><span class="fonnt">'+driver_details_o.dr_influ+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any other relevant information:</span><span class="fonnt">'+driver_details_o.othr_info+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">State :</span><span class="fonnt">'+driver_details_o.state+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">City :</span><span class="fonnt">'+driver_details_o.city_name+'</span></p></li>'
$('.driver_owner_details_list').append(injuredd_r_listqaa);
      

}
}
});


for(a=0;a<employment_upload_array.length;a++){  

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
// /alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}

if(qualification_id == '104' ){
  //alert(qualification_id+'104');

      if(verification_maste !== null){
if(peruserin == userobjin ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id ){

var oneemp=employimg_obj.document;
//alert(oneemp+'oneemp');
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
//alert('claimant');

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}

   $('#lii_newinui').hide();
   $('.proof').hide();
  $('#insured_person_details').show();
  var injured_per_detailss='<li class="li_hei">  <p class="li_p_pri"><span class="fonn">Vehicle insured person name:</span><span class="fonnt">'+insured_per_deta.name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address:</span><span class="fonnt">'+insured_per_deta.address+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Gender:</span><span class="fonnt">'+insured_per_deta.gender+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Average yearly income:</span><span class="fonnt">'+insured_per_deta.yr_income+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+insured_per_deta.state+'</span></p></li>'
$('#injured_per_detailss_per').append(injured_per_detailss);
var sderty='<li class="li_hei">  <p class="li_p_pri"><span class="fonn">Name:</span><span class="fonnt">'+details_inj.name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address:</span><span class="fonnt">'+details_inj.address+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Marital Status:</span><span class="fonnt">'+details_inj.mar_sts+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Doctor Name:</span><span class="fonnt">'+details_inj.doc_name+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Hospital Name:</span><span class="fonnt">'+details_inj.hosp_name+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Hospital Address:</span><span class="fonnt">'+details_inj.hosp_address+'</span></p></li>'
$('#injured_Detaillsb').append(sderty);
for(a=0;a<employment_upload_array.length;a++){  

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
// /alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}
if(qualification_id == '103' ){
 // alert(qualification_id+'103');
  $('#deceased_person_details').show();
   $('#lii_newinui').hide();
   $('.proof').hide();

var sderertt='<li class="li_hei">  <p class="li_p_pri"><span class="fonn">Vehicle insured person name:</span><span class="fonnt">'+insured_per_deta.name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address:</span><span class="fonnt">'+insured_per_deta.address+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Gender:</span><span class="fonnt">'+insured_per_deta.gender+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Average yearly income:</span><span class="fonnt">'+insured_per_deta.yr_income+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+insured_per_deta.state+'</span></p></li>'
$('#deceased_detailsb').append(sderertt);
var sderertt='<li class="li_hei">  <p class="li_p_pri"><span class="fonn">Vehicle insured person name:</span><span class="fonnt">'+insured_per_deta.name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address:</span><span class="fonnt">'+insured_per_deta.address+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Gender:</span><span class="fonnt">'+insured_per_deta.gender+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Average yearly income:</span><span class="fonnt">'+insured_per_deta.yr_income+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+insured_per_deta.state+'</span></p></li>'
$('#deceased_detailsbw').append(sderertt);
for(a=0;a<employment_upload_array.length;a++){  

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
// /alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}
if(qualification_id == '102' ){
  //alert(qualification_id+'102');

    if(verification_maste !== null){
if(peruserin == userobjin ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

var multi_type_id_insu=employimg_obj.verification_type_id;
  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && multi_type_id_insu == '105'){

var oneemp=employimg_obj.document;
//alert(oneemp+'oneemp');
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
//alert('claimant');

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Claim No:'+verification_maste.clno+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}

  $('#claimant_inpro').show();
   $('#lii_newinui').hide();
   $('.proof').hide();



var sderclaimant='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Name of the Claimant:'+claimant_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Is the Claim made by/for:'+claimant_deta.claim_made+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Address of the Claimant:'+claimant_deta.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Contact No:'+claimant_deta.contact_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Select Gender:'+claimant_deta.gender+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">DOB:'+claimant_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Occupation:'+claimant_deta.occupation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Annual Income:'+claimant_deta.yearly_income+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Number of members in the family:'+claimant_deta.no_of_members+' </p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Advocate Details and contact if any:'+claimant_deta.advocate_details+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Version of Details:'+claimant_deta.casesum+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+claimant_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+claimant_deta.state+'</p></li>'
$('.claimant_lista_inpro').append(sderclaimant);
//injured add more start
for(a=0;a<details_injured_array.length;a++){
details_injaddmore = details_injured_array[a];
var ddeta = details_injaddmore.user_id;
var ddeta_injuredid = details_injaddmore.injured_id;

if(detail_inj_userid == ddeta){

var sderty='<li class="li_hei" style="background-color:#54566B">  <p class="li_p_pri"><span style="color:white;font-weight:600;font-size:25px">Name:</span><span style="color:white;font-weight:600;font-size:25px">'+details_injaddmore.name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address:</span><span class="fonnt">'+details_injaddmore.address+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Contact No:</span><span class="fonnt">'+details_injaddmore.contact+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Age:</span><span class="fonnt">'+details_injaddmore.age+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Gender:</span><span class="fonnt">'+details_injaddmore.gender+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Marital Status:</span><span class="fonnt">'+details_injaddmore.marital_status+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Is the Injured:</span><span class="fonnt">'+details_injaddmore.is_insured+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Relationship with the Claimant:</span><span class="fonnt">'+details_injaddmore.relation_claimant+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Details of Injury Suffered:</span><span class="fonnt">'+details_injaddmore.insury_sufferd+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Any permanent disability suffered:</span><span class="fonnt">'+details_injaddmore.permanent_disability+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Occupation:</span><span class="fonnt">'+details_injaddmore.occupation+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Annual Income:</span><span class="fonnt">'+details_injaddmore.income+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Is Personal Accident Benefit:</span><span class="fonnt">'+details_injaddmore.accident_benefit+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Details of Asset owned:</span><span class="fonnt">'+details_injaddmore.asset_owned+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Name of Employer:</span><span class="fonnt">'+details_injaddmore.employer_name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address of Employer:</span><span class="fonnt">'+details_injaddmore.employer_address+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Employer Contact:</span><span class="fonnt">'+details_injaddmore.employer_contact+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Brief Statement of Employer:</span><span class="fonnt">'+details_injaddmore.employer_statement+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Condition of the Injured during Admission:</span><span class="fonnt">'+details_injaddmore.insured_condition+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Date of Admission/Treatment (dd/mm/yyy):</span><span class="fonnt">'+details_injaddmore.doa+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Name of the Hospital/Clinic:</span><span class="fonnt">'+details_injaddmore.hospital_name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Approx Distance of the Hospital from the site:</span><span class="fonnt">'+details_injaddmore.distance+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Address:</span><span class="fonnt">'+details_injaddmore.hospital_address+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Name of the Doctor:</span><span class="fonnt">'+details_injaddmore.doctor_name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Nature of Treatment Provided:</span><span class="fonnt">'+details_inj.treatment+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Date of Discharge (dd/mm/yyyy):</span><span class="fonnt">'+details_injaddmore.dod+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Medical Expenses Incurred:</span><span class="fonnt">'+details_injaddmore.medical_expense+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Condition of the Injured at the time of Discharge:</span><span class="fonnt">'+details_injaddmore.discharge_condition+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> MLC/Wound Certificate details:</span><span class="fonnt">'+details_injaddmore.wounded_certificate+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">AR Copy provided:</span><span class="fonnt">'+details_injaddmore.ar_copy+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Time of Hospitalization:</span><span class="fonnt">'+details_injaddmore.hosp_time+'</span></p></li>'
$('.claimant_lista_inpro_injured').append(sderty);
ddeta_injuredid++;


}
}
//deceased add more end
for(a=0;a<details_deceased_array.length;a++){
details_deceaaddmore = details_deceased_array[a];
var ddetadeces = details_deceaaddmore.user_id;

if(details_decea_userid == ddetadeces){

var sderertt='<li class="li_hei" style="background-color:#54566B">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri" ><span style="color:white;font-weight:600;font-size:25px">Name:'+ddetadeces.name+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+ddetadeces.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Contact No:'+ddetadeces.contact+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Age:'+ddetadeces.age+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Gender:'+ddetadeces.gender+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Marital Status:'+ddetadeces.marital_status+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Is the Deceased:'+ddetadeces.isdeceased+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Relationship with the claimant:'+ddetadeces.relationship+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Details of injury suffered:'+ddetadeces.injured_details+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Occupation:'+ddetadeces.occupation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Annual Income:'+ddetadeces.annual_income+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Is Personal Accident Benefit:'+ddetadeces.accident_benefit+'<p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Details of Asset owned:'+ddetadeces.asset_owned+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Name of Employer:'+ddetadeces.emp_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Address of Employer:'+ddetadeces.emp_address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Employer Contact:'+ddetadeces.emp_contact+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Brief Statement of Employer:'+ddetadeces.emp_statement+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Death:'+ddetadeces.dofd+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of PM:'+ddetadeces.dofpm+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Panchanama:'+ddetadeces.dofpnama+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">PM Copy Provided:'+ddetadeces.pmcopy+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Cause of death as per PMR:'+ddetadeces.cause_pmr+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Police Details on death:'+ddetadeces.police_details+'</p></li>'
$('.claimant_lista_inpro_injured_dece').append(sderertt);

}
}

$(".iimpolicy_detai_claima").click(function(){

    //alert("edit claimant_deta");
  
  $('.imz_in_div_inputa_claiman').empty();
  
    //$('.imz_in_div_inputa_fir').empty();
    
 $("#edit_claimant_details").popup("open"); 
 
  //alert('imopolicy');

  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");
var claimant_deta_user_id = claimant_deta.user_id;

//var img_first_name = 'thirumal m 12313423154';
var imz_in_div_inputa_claiman='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Name of the Claimant:<input value="'+claimant_deta.name+'" size="35" id="clai_name"></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Is the Claim made by/for:<input value="'+claimant_deta.claim_made+'" size="35" id="clai_claim_made"></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Address of the Claimant:<input value="'+claimant_deta.address+'" size="35" id="clai_address"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Contact No:<input value="'+claimant_deta.contact_no+'" size="35" id="claim_contact_no"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Select Gender:<input value="'+claimant_deta.gender+'" size="35" id="clai_gender"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">DOB:<input value="'+claimant_deta.dob+'" size="35" id="clai_dob">'+claimant_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Occupation:<input value="'+claimant_deta.occupation+'" size="35" id="clai_occupation"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Annual Income:<input value="'+claimant_deta.yearly_income+'" size="35" id="clai_yearly_income"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Number of members in the family:<input value="'+claimant_deta.no_of_members+'" size="35" id="clai_no_of_members"> </p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Advocate Details and contact if any:<input value="'+claimant_deta.advocate_details+'" size="35" id="cali_advocate_details"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Version of Details:<input value="'+claimant_deta.casesum+'" size="35" id="clai_casesum"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+claimant_deta.state+'</p></li>'
$('.imz_in_div_inputa_claiman').append(imz_in_div_inputa_claiman);
                   

$("#edit_insured_d_claima").click(function(){
  


   $("#edit_claimant_details").popup("close"); 
   
//alert('edit_policy_update');
var clai_name = document.getElementById("clai_name").value;
var clai_claim_made = document.getElementById("clai_claim_made").value;
var clai_address = document.getElementById("clai_address").value;
var claim_contact_no = document.getElementById("claim_contact_no").value;
var clai_gender = document.getElementById("clai_gender").value;
var clai_dob = document.getElementById("clai_dob").value;
var clai_occupation = document.getElementById("clai_occupation").value;
var clai_yearly_income = document.getElementById("clai_yearly_income").value;
var clai_no_of_members = document.getElementById("clai_no_of_members").value;
var cali_advocate_details = document.getElementById("cali_advocate_details").value;
var clai_casesum = document.getElementById("clai_casesum").value;
/*var vehicle_details = document.getElementById("vehicle_details").value;
var no_of_veh_involved = document.getElementById("no_of_veh_involved").value;
var vehicle_impleded_as_party = document.getElementById("vehicle_impleded_as_party").value;
var mvi_inspected = document.getElementById("mvi_inspected").value;
var summary_of_nvi = document.getElementById("summary_of_nvi").value;
var damage_of_vehicle = document.getElementById("damage_of_vehicle").value;
var shid_mark_obs = document.getElementById("shid_mark_obs").value;
var per_of_contribution = document.getElementById("per_of_contribution").value;
var chargesheet_filed = document.getElementById("chargesheet_filed").value;
var chargesheetcoll = document.getElementById("chargesheetcoll").value;
var sumchrge = document.getElementById("sumchrge").value;*/


/*alert(claimant_deta_user_id+'claimant_deta_user_id');

alert(clai_name+'clai_name');
alert(clai_claim_made+'clai_claim_made');
alert(clai_address+'clai_address');
alert(claim_contact_no+'claim_contact_no');
alert(clai_gender+'clai_gender');
alert(clai_dob+'clai_dob');
alert(clai_occupation+'clai_occupation');
alert(clai_yearly_income+'clai_yearly_income');
alert(clai_no_of_members+'clai_no_of_members');
alert(cali_advocate_details+'cali_advocate_details');
alert(clai_casesum+'clai_casesum');*/

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
//  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_insu_fir.php?name_of_ps="+name_of_ps+"&address_of_ps="+address_of_ps+"&dist_bet_acc_ps="+dist_bet_acc_ps+"&fir_no="+fir_no+"&fir_date="+fir_date+"&delay_in_fir="+delay_in_fir+"&firsum="+firsum+"&fircoy="+fircoy+"&fir_logged_by="+fir_logged_by+"&fofname="+fofname+"&relationship_with_victim="+relationship_with_victim+"&vehicle_details="+vehicle_details+"&no_of_veh_involved="+no_of_veh_involved+"&vehicle_impleded_as_party="+vehicle_impleded_as_party+"&mvi_inspected="+mvi_inspected+"&summary_of_nvi="+summary_of_nvi+"&damage_of_vehicle="+damage_of_vehicle+"&shid_mark_obs="+shid_mark_obs+"&per_of_contribution="+per_of_contribution+"&chargesheet_filed="+chargesheet_filed+"&chargesheetcoll="+chargesheetcoll+"&sumchrge="+sumchrge+"&insu_user_id_fir="+insu_user_id_fir,  
 url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_insu_calima.php?clai_name="+clai_name+"&clai_claim_made="+clai_claim_made+"&clai_address="+clai_address+"&claim_contact_no="+claim_contact_no+"&clai_gender="+clai_gender+"&clai_dob="+clai_dob+"&clai_occupation="+clai_occupation+"&clai_yearly_income="+clai_yearly_income+"&clai_no_of_members="+clai_no_of_members+"&cali_advocate_details="+cali_advocate_details+"&clai_casesum="+clai_casesum+"&claimant_deta_user_id="+claimant_deta_user_id,
  data: formData,
  success: onSuccessins,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorins
});


});

$("#edit_insured_Cancel").click(function(){
   $("#edit_claimant_details").popup("close"); 
   
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

function onErrorins(data, status)
{
alert("Network super eion policy");
}  
function onSuccessins(data, status)
{
//alert('success super ffffffffffir');
  sessionStorage.setItem("claimant_deta",JSON.stringify(data));
  $('.claimant_lista_inpro').empty();

  claimant_deta =  JSON.parse(sessionStorage.getItem("claimant_deta"));
  for(a=0;a<claimant_deta.length;a++){  

  claimant_deta = claimant_deta[a];
// alert(addressimg_obj.document_name);

var sderclaimant='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Name of the Claimant:'+claimant_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Is the Claim made by/for:'+claimant_deta.claim_made+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Address of the Claimant:'+claimant_deta.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Contact No:'+claimant_deta.contact_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Select Gender:'+claimant_deta.gender+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">DOB:'+claimant_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Occupation:'+claimant_deta.occupation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Annual Income:'+claimant_deta.yearly_income+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Number of members in the family:'+claimant_deta.no_of_members+' </p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Advocate Details and contact if any:'+claimant_deta.advocate_details+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Version of Details:'+claimant_deta.casesum+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+claimant_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+claimant_deta.state+'</p></li>'
$('.claimant_lista_inpro').append(sderclaimant);

/*var injuredd_r_listqaa='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn ">Name of Police Station:</span><span class="fonnt iimpolicy_detai_insu">'+fir_detai.name_of_ps+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address of Police Station:</span><span class="fonnt">'+fir_detai.address_of_ps+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Site:</span><span class="fonnt">'+fir_detai.dist_bet_acc_ps+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR No:</span><span class="fonnt">'+fir_detai.fir_no+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR Date:</span><span class="fonnt">'+fir_detai.fir_date+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any delay in filing the FIR:</span><span class="fonnt">'+fir_detai.delay_in_fir+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR summary details:</span><span class="fonnt">'+fir_detai.firsum+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is FIR copy collected:</span><span class="fonnt">'+fir_detai.fircoy+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">FIR Logged by:</span><span class="fonnt">'+fir_detai.fir_logged_by+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Fourth Force Investigating Officers Name:</span><span class="fonnt">'+fir_detai.fofname+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Relationship to the Victim/Claimant:</span><span class="fonnt">'+fir_detai.relationship_with_victim+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Vehicle Details mentioned in the FIR:</span><span class="fonnt">'+fir_detai.vehicle_details+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">No of Vehicles involved in the accident:</span><span class="fonnt">'+fir_detai.no_of_veh_involved+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Owner of vehicle impleded as party:</span><span class="fonnt">'+fir_detai.vehicle_impleded_as_party+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether MVI Inspected:</span><span class="fonnt">'+fir_detai.mvi_inspected+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of MVI Inspection:</span><span class="fonnt">'+fir_detai.summary_of_nvi+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Accessed Damage of vehicle:</span><span class="fonnt">'+fir_detai.damage_of_vehicle+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Skid Marks Available:</span><span class="fonnt">'+fir_detai.shid_mark_obs+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Percentage of contribution of the vehicles to the accident:</span><span class="fonnt">'+fir_detai.per_of_contribution+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Chargesheet Filed:</span><span class="fonnt">'+fir_detai.chargesheet_filed+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Charge Sheet collected:</span><span class="fonnt">'+fir_detai.chargesheetcoll+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of the Charge Sheet, if applicable:</span><span class="fonnt">'+fir_detai.sumchrge+'</span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">"city"</span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">"state"</span></p></li>'
$('.fir_details_disa').append(injuredd_r_listqaa);
acci_details_disa_accide*/

}
}
});
//claimanyt injured start
$(".iimpolicy_detai_claima_injured").click(function(){
  
    $('.imz_in_div_inputa_claiman_injured').empty();
    
 $("#edit_claimant_details_injured").popup("open"); 
 
  //alert('imopolicy');

  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");
var claimant_deta_user_id_injured = details_inj.user_id;

for(a=0;a<details_injured_array.length;a++){
details_injaddmore = details_injured_array[a];
var ddeta_inju_edit = details_injaddmore.user_id;

if(detail_inj_userid == ddeta_inju_edit){
//var img_first_name = 'thirumal m95 12313423154';
var imz_in_div_inputa_claiman_injured='<li class="li_hei" style="background-color:#54566B">  <p class="li_p_pri"><span style="color:white;font-weight:600;font-size:25px">Name:</span><span class="fonnt"><input value="'+ddeta_inju_edit.name+'" size="35" id="inju_name"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address:</span><span class="fonnt"><input value="'+ddeta_inju_edit.address+'"  size="35" id="inju_address"></span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Contact No:</span><span class="fonnt"><input value="'+ddeta_inju_edit.contact+'" size="35" id="inju_conatct"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Gender:</span><span class="fonnt"><input value="'+ddeta_inju_edit.gender+'" size="35" id="inju_gender"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Marital Status:</span><span class="fonnt"><input value="'+ddeta_inju_edit.marital_status+'" size="35" id="inju_marital_status"></span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Is the Injured:</span><span class="fonnt"><input value="'+ddeta_inju_edit.is_insured+'" size="35" id="inju_is_insured"></span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Relationship with the Claimant:</span><span class="fonnt"><input value="'+ddeta_inju_edit.relation_claimant+'" size="35" id="inju_relation_claimant"></span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Details of Injury Suffered:</span><span class="fonnt"><input value="'+ddeta_inju_edit.insury_sufferd+'" size="35" id="inju_insury_sufferd"></span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Any permanent disability suffered:</span><span class="fonnt"><input value="'+ddeta_inju_edit.permanent_disability+'" size="35" id="inju_permanent_disability"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Occupation:</span><span class="fonnt"><input value="'+ddeta_inju_edit.occupation+'" size="35" id="inju_occupation"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Annual Income:</span><span class="fonnt"><input value="'+ddeta_inju_edit.income+'" size="35" id="inju_income"></span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Is Personal Accident Benefit:</span><span class="fonnt"><input value="'+ddeta_inju_edit.accident_benefit+'" size="35" id="inju_accident_benefit"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Details of Asset owned:</span><span class="fonnt"><input value="'+ddeta_inju_edit.asset_owned+'" size="35" id="inju_asset_owned"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Name of Employer:</span><span class="fonnt"><input value="'+ddeta_inju_edit.employer_name+'" size="35" id="inju_employer_name"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address of Employer:</span><span class="fonnt"><input value="'+ddeta_inju_edit.employer_address+'" size="35" id="inju_employer_address"></span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Employer Contact:</span><span class="fonnt"><input value="'+ddeta_inju_edit.employer_contact+'" size="35" id="inju_employer_contact"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Brief Statement of Employer:</span><span class="fonnt"><input value="'+ddeta_inju_edit.employer_statement+'" size="35" id="inju_employer_statement"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Condition of the Injured during Admission:</span><span class="fonnt"><input value="'+ddeta_inju_edit.insured_condition+'" size="35" id="inju_insured_condition"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Date of Admission/Treatment (dd/mm/yyy):</span><span class="fonnt"><input value="'+ddeta_inju_edit.doa+'" size="35" id="inju_doa"></span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Name of the Hospital/Clinic:</span><span class="fonnt"><input value="'+ddeta_inju_edit.hospital_name+'" size="35" id="inju_hospital_name"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Approx Distance of the Hospital from the site:</span><span class="fonnt"><input value="'+ddeta_inju_edit.distance+'" size="35" id="inju_distance"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Address:</span><span class="fonnt"><input value="'+ddeta_inju_edit.hospital_address+'" size="35" id="inju_hospital_address"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Name of the Doctor:</span><span class="fonnt"><input value="'+ddeta_inju_edit.doctor_name+'" size="35" id="inju_doc_name"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Nature of Treatment Provided:</span><span class="fonnt"><input value="'+ddeta_inju_edit.treatment+'" size="35" id="inju_treatment"></span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Date of Discharge (dd/mm/yyyy):</span><span class="fonnt"><input value="'+ddeta_inju_edit.dod+'" size="35" id="inju_dod"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Medical Expenses Incurred:</span><span class="fonnt"><input value="'+ddeta_inju_edit.medical_expense+'" size="35"  id="inju_medical_expense"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Condition of the Injured at the time of Discharge:</span><span class="fonnt"><input value="'+ddeta_inju_edit.discharge_condition+'" size="35" id="inju_discharge_condition"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> MLC/Wound Certificate details:</span><span class="fonnt"><input value="'+ddeta_inju_edit.wounded_certificate+'" size="35" id="inju_wounded_certificate"></span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">AR Copy provided:</span><span class="fonnt"><input value="'+ddeta_inju_edit.ar_copy+'" size="35"  id="inju_ar_copy"></span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Time of Hospitalization:</span><span class="fonnt"><input value="'+ddeta_inju_edit.hosp_time+'" size="35" id="inju_hosp_time"></span></p></li>'
$('.imz_in_div_inputa_claiman_injured').append(imz_in_div_inputa_claiman_injured);
}
}     

$("#edit_insured_d_claima_injured").click(function(){
  
   $("#edit_claimant_details_injured").popup("close"); 
   
var inju_name = document.getElementById("inju_name").value;//1
var inju_address = document.getElementById("inju_address").value;//2
var inju_conatct = document.getElementById("inju_conatct").value;//3
var inju_gender = document.getElementById("inju_gender").value;//4
var inju_marital_status = document.getElementById("inju_marital_status").value;//5
var inju_is_insured = document.getElementById("inju_is_insured").value;//6
var inju_relation_claimant = document.getElementById("inju_relation_claimant").value;//7
var inju_insury_sufferd = document.getElementById("inju_insury_sufferd").value;//8
var inju_permanent_disability = document.getElementById("inju_permanent_disability").value;//9
var inju_occupation = document.getElementById("inju_occupation").value;//10
var inju_income = document.getElementById("inju_income").value;//11

var inju_accident_benefit = document.getElementById("inju_accident_benefit").value;//12
var inju_asset_owned = document.getElementById("inju_asset_owned").value;//13
var inju_employer_name = document.getElementById("inju_employer_name").value;//14
var inju_employer_address = document.getElementById("inju_employer_address").value;//15
var inju_employer_contact = document.getElementById("inju_employer_contact").value;//16
var inju_employer_statement = document.getElementById("inju_employer_statement").value;//17
var inju_insured_condition = document.getElementById("inju_insured_condition").value;//18
var inju_doa = document.getElementById("inju_doa").value;//19
var inju_hospital_name = document.getElementById("inju_hospital_name").value;//20
var inju_distance = document.getElementById("inju_distance").value;//21
var inju_hospital_address = document.getElementById("inju_hospital_address").value;//22

var inju_doc_name = document.getElementById("inju_doc_name").value;//23
var inju_treatment = document.getElementById("inju_treatment").value;//24
var inju_dod = document.getElementById("inju_dod").value;//25
var inju_medical_expense = document.getElementById("inju_medical_expense").value;//25
var inju_discharge_condition = document.getElementById("inju_discharge_condition").value;//26
var inju_wounded_certificate = document.getElementById("inju_wounded_certificate").value;//28
var inju_ar_copy = document.getElementById("inju_ar_copy").value;//29
var inju_hosp_time = document.getElementById("inju_hosp_time").value;//30

/*alert(claimant_deta_user_id_injured+'claimant_deta_user_id_injured');//1

alert(inju_name+'inju_name');//1

alert(inju_address+'inju_address');//2
alert(inju_conatct+'inju_conatct');//3
alert(inju_gender+'inju_gender');//4
alert(inju_marital_status+'inju_marital_status');//5
alert(inju_is_insured+'inju_is_insured');//6
alert(inju_relation_claimant+'inju_relation_claimant');//7
alert(inju_insury_sufferd+'inju_insury_sufferd');//8
alert(inju_permanent_disability+'inju_permanent_disability');//9
alert(inju_occupation+'inju_occupation');//10
alert(inju_income+'inju_income');//11
alert(inju_accident_benefit+'inju_accident_benefit');//12

alert(inju_asset_owned+'inju_asset_owned');//13
alert(inju_employer_name+'inju_employer_name');//14
alert(inju_employer_address+'inju_employer_address');//15
alert(inju_employer_contact+'inju_employer_contact');//16
alert(inju_employer_statement+'inju_employer_statement');//17
alert(inju_insured_condition+'inju_insured_condition');//18
alert(inju_doa+'inju_doa');//19
alert(inju_hospital_name+'inju_hospital_name');//20
alert(inju_distance+'inju_distance');//21
alert(inju_hospital_address+'inju_hospital_address');//22

alert(inju_doc_name+'inju_doc_name');//23
alert(inju_treatment+'inju_treatment');//24
alert(inju_dod+'inju_dod');//25
alert(inju_medical_expense+'inju_medical_expense');//26
alert(inju_discharge_condition+'inju_discharge_condition');//27
alert(inju_wounded_certificate+'inju_wounded_certificate');//28
alert(inju_ar_copy+'inju_ar_copy');//29
alert(inju_hosp_time+'inju_hosp_time');//30*/


var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_insu_calima_injured.php?inju_name="+inju_name+"&inju_address="+inju_address+"&inju_conatct="+inju_conatct+"&inju_gender="+inju_gender+"&inju_marital_status="+inju_marital_status+"&inju_is_insured="+inju_is_insured+"&inju_relation_claimant="+inju_relation_claimant+"&inju_insury_sufferd="+inju_insury_sufferd+"&inju_permanent_disability="+inju_permanent_disability+"&inju_occupation="+inju_occupation+"&inju_income="+inju_income+"&inju_accident_benefit="+inju_accident_benefit+"&inju_asset_owned="+inju_asset_owned+"&inju_employer_name="+inju_employer_name+"&inju_employer_address="+inju_employer_address+"&inju_employer_contact="+inju_employer_contact+"&inju_employer_statement="+inju_employer_statement+"&inju_insured_condition="+inju_insured_condition+"&inju_doa="+inju_doa+"&inju_hospital_name="+inju_hospital_name+"&inju_distance="+inju_distance+"&inju_hospital_address="+inju_hospital_address+"&inju_doc_name="+inju_doc_name+"&inju_treatment="+inju_treatment+"&inju_dod="+inju_dod+"&inju_medical_expense="+inju_medical_expense+"&inju_discharge_condition="+inju_discharge_condition+"&inju_wounded_certificate="+inju_wounded_certificate+"&inju_ar_copy="+inju_ar_copy+"&inju_hosp_time="+inju_hosp_time+"&claimant_deta_user_id_injured="+claimant_deta_user_id_injured,
  data: formData,
  success: onSuccessins,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorins
});


});

$("#edit_insured_Cancel").click(function(){
   $("#edit_claimant_details_injured").popup("close"); 
   
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

function onErrorins(data, status)
{
alert("Network super eion policy");
}  
function onSuccessins(data, status)
{
//alert('success super ffffffffffir');
  sessionStorage.setItem("details_inj",JSON.stringify(data));
  $('.claimant_lista_inpro_injured').empty();

  details_inj =  JSON.parse(sessionStorage.getItem("details_inj"));

  for(a=0;a<details_injured_array.length;a++){
details_injaddmore = details_injured_array[a];
var ddeta = details_injaddmore.user_id;

if(detail_inj_userid == ddeta){

var sderty='<li class="li_hei" style="background-color:#54566B">  <p class="li_p_pri"><span style="color:white;font-weight:600;font-size:25px">Name:</span><span style="color:white;font-weight:600;font-size:25px">'+details_injaddmore.name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address:</span><span class="fonnt">'+details_injaddmore.address+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Contact No:</span><span class="fonnt">'+details_injaddmore.contact+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Age:</span><span class="fonnt">'+details_injaddmore.age+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Gender:</span><span class="fonnt">'+details_injaddmore.gender+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Marital Status:</span><span class="fonnt">'+details_injaddmore.marital_status+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Is the Injured:</span><span class="fonnt">'+details_injaddmore.is_insured+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Relationship with the Claimant:</span><span class="fonnt">'+details_injaddmore.relation_claimant+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Details of Injury Suffered:</span><span class="fonnt">'+details_injaddmore.insury_sufferd+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Any permanent disability suffered:</span><span class="fonnt">'+details_injaddmore.permanent_disability+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Occupation:</span><span class="fonnt">'+details_injaddmore.occupation+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Annual Income:</span><span class="fonnt">'+details_injaddmore.income+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Is Personal Accident Benefit:</span><span class="fonnt">'+details_injaddmore.accident_benefit+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Details of Asset owned:</span><span class="fonnt">'+details_injaddmore.asset_owned+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Name of Employer:</span><span class="fonnt">'+details_injaddmore.employer_name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address of Employer:</span><span class="fonnt">'+details_injaddmore.employer_address+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Employer Contact:</span><span class="fonnt">'+details_injaddmore.employer_contact+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Brief Statement of Employer:</span><span class="fonnt">'+details_injaddmore.employer_statement+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Condition of the Injured during Admission:</span><span class="fonnt">'+details_injaddmore.insured_condition+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Date of Admission/Treatment (dd/mm/yyy):</span><span class="fonnt">'+details_injaddmore.doa+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Name of the Hospital/Clinic:</span><span class="fonnt">'+details_injaddmore.hospital_name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Approx Distance of the Hospital from the site:</span><span class="fonnt">'+details_injaddmore.distance+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Address:</span><span class="fonnt">'+details_injaddmore.hospital_address+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Name of the Doctor:</span><span class="fonnt">'+details_injaddmore.doctor_name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Nature of Treatment Provided:</span><span class="fonnt">'+details_inj.treatment+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Date of Discharge (dd/mm/yyyy):</span><span class="fonnt">'+details_injaddmore.dod+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Medical Expenses Incurred:</span><span class="fonnt">'+details_injaddmore.medical_expense+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Condition of the Injured at the time of Discharge:</span><span class="fonnt">'+details_injaddmore.discharge_condition+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> MLC/Wound Certificate details:</span><span class="fonnt">'+details_injaddmore.wounded_certificate+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">AR Copy provided:</span><span class="fonnt">'+details_injaddmore.ar_copy+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Time of Hospitalization:</span><span class="fonnt">'+details_injaddmore.hosp_time+'</span></p></li>'
$('.claimant_lista_inpro_injured').append(sderty);


}
}

}
});
$(".iimpolicy_detai_claima_injured_decea").click(function(){
  
    $('.imz_in_div_inputa_claiman_injured_decea').empty();
    
 $("#edit_claimant_details_injured_decea").popup("open"); 
 
  //alert('imopolicy');

  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");
var claimant_deta_user_id_injured_dece = details_decea.user_id;

//var img_first_name = 'thirumal m 12313423154';
var imz_in_div_inputa_claiman_injured_decea='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:<input value="'+details_decea.name+'" size="35"  id="dece_name"></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:<input value="'+details_decea.address+'"  size="35" id="dece_address"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Contact No:<input value="'+details_decea.contact+'" size="35" id="dece_contact"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Age:<input value="'+details_decea.age+'" size="35" id="dece_age"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Gender:<input value="'+details_decea.gender+'" size="35"  id="dece_gender"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Marital Status:<input value="'+details_decea.marital_status+'" size="35" id="dece_marital_status"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Is the Deceased:<input value="'+details_decea.isdeceased+'" size="35" id="dece_isdeceased"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Relationship with the claimant:<input value="'+details_decea.relationship+'" size="35" id="dece_relationship"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Details of injury suffered:<input value="'+details_decea.injured_details+'" size="35" id="dece_injured_details"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Occupation:<input value="'+details_decea.occupation+'" size="35" id="dece_occupation"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Annual Income:<input value="'+details_decea.annual_income+'" size="35" id="dece_annual_income"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Is Personal Accident Benefit:<input value="'+details_decea.accident_benefit+'" size="35" id="dece_accident_benefit"><p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Details of Asset owned:<input value="'+details_decea.asset_owned+'" size="35" id="dece_asset_owned"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Name of Employer:<input value="'+details_decea.emp_name+'" size="35" id="dece_emp_name"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Address of Employer:<input value="'+details_decea.emp_address+'"  size="35" id="dece_emp_address"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Employer Contact:<input value="'+details_decea.emp_contact+'" size="35" id="dece_emp_contact"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Brief Statement of Employer:<input value="'+details_decea.emp_statement+'" size="35" id="dece_emp_statement"></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Death:<input value="'+details_decea.dofd+'" size="35" id="dece_dofd"></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of PM:<input value="'+details_decea.dofpm+'" size="35" id="dece_dofpm"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Panchanama:<input value="'+details_decea.dofpnama+'" size="35" id="dece_dofpnama"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">PM Copy Provided:<input value="'+details_decea.pmcopy+'" size="35" id="dece_pmcopy"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Cause of death as per PMR:<input value="'+details_decea.cause_pmr+'" size="35" id="dece_cause_pmr"></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Police Details on death:<input value="'+details_decea.police_details+'" size="35" id="dece_police_details"></p></li>'
$('.imz_in_div_inputa_claiman_injured_decea').append(imz_in_div_inputa_claiman_injured_decea);
                   

$("#edit_insured_d_claima_injured_decea").click(function(){
  
   $("#edit_claimant_details_injured_decea").popup("close"); 
   
//alert('edit_policy_update');
var dece_name = document.getElementById("dece_name").value;//1
var dece_address = document.getElementById("dece_address").value;//2
var dece_contact = document.getElementById("dece_contact").value;//3
var dece_age = document.getElementById("dece_age").value;//4
var dece_gender = document.getElementById("dece_gender").value;//5
var dece_marital_status = document.getElementById("dece_marital_status").value;//6      ///7 missed
var dece_isdeceased = document.getElementById("dece_isdeceased").value;//8
var dece_relationship = document.getElementById("dece_relationship").value;//9
var dece_injured_details = document.getElementById("dece_injured_details").value;//10
var dece_occupation = document.getElementById("dece_occupation").value;//11
var dece_annual_income = document.getElementById("dece_annual_income").value;//12

var dece_accident_benefit = document.getElementById("dece_accident_benefit").value;//13
var dece_asset_owned = document.getElementById("dece_asset_owned").value;//14
var dece_emp_name = document.getElementById("dece_emp_name").value;//15
var dece_emp_address = document.getElementById("dece_emp_address").value;//16
var dece_emp_contact = document.getElementById("dece_emp_contact").value;//17
var dece_emp_statement = document.getElementById("dece_emp_statement").value;//18
var dece_dofd = document.getElementById("dece_dofd").value;//19
var dece_dofpm = document.getElementById("dece_dofpm").value;//20
var dece_dofpnama = document.getElementById("dece_dofpnama").value;//21
var dece_pmcopy = document.getElementById("dece_pmcopy").value;//22
var dece_cause_pmr = document.getElementById("dece_cause_pmr").value;//23
var dece_police_details = document.getElementById("dece_police_details").value;//24

/*
alert(claimant_deta_user_id_injured_dece+'claimant_deta_user_id_injured_dece');//1

alert(dece_name+'dece_name');//1
alert(dece_address+'dece_address');//2
alert(dece_contact+'dece_contact');//3
alert(dece_age+'dece_age');//4
alert(dece_gender+'dece_gender');//5
alert(dece_marital_status+'dece_marital_status');//6
alert(dece_isdeceased+'dece_isdeceased');//7
alert(dece_relationship+'dece_relationship');//8
alert(dece_injured_details+'dece_injured_details');//9
alert(dece_occupation+'dece_occupation');//10
alert(dece_annual_income+'dece_annual_income');//11

alert(dece_accident_benefit+'dece_accident_benefit');//12
alert(dece_asset_owned+'dece_asset_owned');//13
alert(dece_emp_name+'dece_emp_name');//14
alert(dece_emp_address+'dece_emp_address');//15
alert(dece_emp_contact+'dece_emp_contact');//16
alert(dece_emp_statement+'dece_emp_statement');//17
alert(dece_dofd+'dece_dofd');//18
alert(dece_dofpm+'dece_dofpm');//19
alert(dece_dofpnama+'dece_dofpnama');//20
alert(dece_pmcopy+'dece_pmcopy');//21
alert(dece_cause_pmr+'dece_cause_pmr');//22
alert(dece_police_details+'dece_police_details');//23*/

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/updatedeceased.php?dece_name="+dece_name+"&dece_address="+dece_address+"&dece_contact="+dece_contact+"&dece_age="+dece_age+"&dece_gender="+dece_gender+"&dece_marital_status="+dece_marital_status+"&dece_isdeceased="+dece_isdeceased+"&dece_relationship="+dece_relationship+"&dece_injured_details="+dece_injured_details+"&dece_occupation="+dece_occupation+"&dece_annual_income="+dece_annual_income+"&dece_accident_benefit="+dece_accident_benefit+"&dece_asset_owned="+dece_asset_owned+"&dece_emp_name="+dece_emp_name+"&dece_emp_address="+dece_emp_address+"&dece_emp_contact="+dece_emp_contact+"&dece_emp_statement="+dece_emp_statement+"&dece_dofd="+dece_dofd+"&dece_dofpm="+dece_dofpm+"&dece_dofpnama="+dece_dofpnama+"&dece_pmcopy="+dece_pmcopy+"&dece_cause_pmr="+dece_cause_pmr+"&dece_police_details="+dece_police_details+"&claimant_deta_user_id_injured_dece="+claimant_deta_user_id_injured_dece,
  data: formData,
  success: onSuccessins,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorins
});


});

$("#edit_insured_Cancel").click(function(){
   $("#edit_claimant_details_injured_decea").popup("close"); 
   
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

function onErrorins(data, status)
{
alert("Network super eion policy");
}  
function onSuccessins(data, status)
{
//alert('success super ffffffffffir');
  sessionStorage.setItem("details_decea",JSON.stringify(data));
  $('.claimant_lista_inpro_injured_dece').empty();

  details_decea =  JSON.parse(sessionStorage.getItem("details_decea"));
  for(a=0;a<details_decea.length;a++){  

  details_decea = details_decea[a];
// alert(addressimg_obj.document_name);

var sderclaimant='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+details_decea.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+details_decea.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Contact No:'+details_decea.contact+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Age:'+details_decea.age+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Gender:'+details_decea.gender+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Marital Status:'+details_decea.marital_status+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Is the Deceased:'+details_decea.isdeceased+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Relationship with the claimant:'+details_decea.relationship+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Details of injury suffered:'+details_decea.injured_details+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Occupation:'+details_decea.occupation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Annual Income:'+details_decea.annual_income+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Is Personal Accident Benefit:'+details_decea.accident_benefit+'<p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Details of Asset owned:'+details_decea.asset_owned+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Name of Employer:'+details_decea.emp_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Address of Employer:'+details_decea.emp_address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Employer Contact:'+details_decea.emp_contact+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Brief Statement of Employer:'+details_decea.emp_statement+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Death:'+details_decea.dofd+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of PM:'+details_decea.dofpm+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Panchanama:'+details_decea.dofpnama+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">PM Copy Provided:'+details_decea.pmcopy+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Cause of death as per PMR:'+details_decea.cause_pmr+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Police Details on death:'+details_decea.police_details+'</p></li>'
$('.claimant_lista_inpro_injured_dece').append(sderclaimant);

/*var injuredd_r_listqaa='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn ">Name of Police Station:</span><span class="fonnt iimpolicy_detai_insu">'+fir_detai.name_of_ps+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address of Police Station:</span><span class="fonnt">'+fir_detai.address_of_ps+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Site:</span><span class="fonnt">'+fir_detai.dist_bet_acc_ps+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR No:</span><span class="fonnt">'+fir_detai.fir_no+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR Date:</span><span class="fonnt">'+fir_detai.fir_date+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any delay in filing the FIR:</span><span class="fonnt">'+fir_detai.delay_in_fir+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR summary details:</span><span class="fonnt">'+fir_detai.firsum+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is FIR copy collected:</span><span class="fonnt">'+fir_detai.fircoy+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">FIR Logged by:</span><span class="fonnt">'+fir_detai.fir_logged_by+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Fourth Force Investigating Officers Name:</span><span class="fonnt">'+fir_detai.fofname+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Relationship to the Victim/Claimant:</span><span class="fonnt">'+fir_detai.relationship_with_victim+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Vehicle Details mentioned in the FIR:</span><span class="fonnt">'+fir_detai.vehicle_details+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">No of Vehicles involved in the accident:</span><span class="fonnt">'+fir_detai.no_of_veh_involved+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Owner of vehicle impleded as party:</span><span class="fonnt">'+fir_detai.vehicle_impleded_as_party+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether MVI Inspected:</span><span class="fonnt">'+fir_detai.mvi_inspected+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of MVI Inspection:</span><span class="fonnt">'+fir_detai.summary_of_nvi+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Accessed Damage of vehicle:</span><span class="fonnt">'+fir_detai.damage_of_vehicle+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Skid Marks Available:</span><span class="fonnt">'+fir_detai.shid_mark_obs+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Percentage of contribution of the vehicles to the accident:</span><span class="fonnt">'+fir_detai.per_of_contribution+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Chargesheet Filed:</span><span class="fonnt">'+fir_detai.chargesheet_filed+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Charge Sheet collected:</span><span class="fonnt">'+fir_detai.chargesheetcoll+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of the Charge Sheet, if applicable:</span><span class="fonnt">'+fir_detai.sumchrge+'</span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">"city"</span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">"state"</span></p></li>'
$('.fir_details_disa').append(injuredd_r_listqaa);
acci_details_disa_accide*/

}
}
});

//claimant injured end
for(a=0;a<employment_upload_array.length;a++){  

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
// /alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}
if(qualification_id == '99' ){
  //alert(qualification_id+'99');

      if(verification_maste !== null){
    //    alert('verification_maste');
if(peruserin == userobjin ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

var multi_type_id_insu=employimg_obj.verification_type_id;
  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && multi_type_id_insu == '105'){

var oneemp=employimg_obj.document;
//alert(oneemp+'oneemp');
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
//alert('claimant');

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Claim No:'+verification_maste.clno+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}

  $('.proof').hide();
     $('#lii_newinui').hide();
  $('#driverhide').show();
var sder='<li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Name of the Driver :</span><span class="fonnt">'+driver_details_d.name+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Address of the Driver :</span><span class="fonnt">'+driver_details_d.address+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fon">Contact No:</span><span class="fonnt">'+driver_details_d.con_no+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Gender:</span><span class="fonnt">'+driver_details_d.gender+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Type of DL:</span><span class="fonnt">'+driver_details_d.dl_type+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is the Driver is:</span><span class="fonnt">'+driver_details_d.is_driver+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">DOB:</span><span class="fonnt">'+driver_details_d.dob+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Driving Licence No:</span><span class="fonnt">'+driver_details_d.dr_lic_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Issuing Authority:</span><span class="fonnt">'+driver_details_d.issu_autho+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of issue:</span><span class="fonnt">'+driver_details_d.updated_date+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Expiry:</span><span class="fonnt">'+driver_details_d.doi_exp+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Vehicles authorized to drive:</span><span class="fonnt">'+driver_details_d.vec_autho+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Badge No:</span><span class="fonnt">'+driver_details_d.bg_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date if Applicable:</span><span class="fonnt">'+driver_details_d.date_app+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Provide opposite Vehicles driver details:</span><span class="fonnt">'+driver_details_d.op_dr_dtls+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is the driver under any influence of intoxicating liquor or drugs:</span><span class="fonnt">'+driver_details_d.driver_drugs+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is the driver involved in any accident in the last two years:</span><span class="fonnt">'+driver_details_d.op_dr_dtls+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">If relative provide details about the nature of relationship with the insured:</span><span class="fonnt">'+driver_details_d.natr_relation+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">if Paid driver, how long he/she has been in the current employment:</span><span class="fonnt">'+driver_details_d.cur_emp_pr+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any other relevant information:</span><span class="fonnt">'+driver_details_d.info+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Age:</span><span class="fonnt">'+driver_details_d.age+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Place of Issue:</span><span class="fonnt">'+driver_details_d.dl_place_of_issue+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Education:</span><span class="fonnt">'+driver_details_d.driver_education+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Experience:</span><span class="fonnt">'+driver_details_d.driver_experience+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Valid For:</span><span class="fonnt">'+driver_details_d.dl_valid_for+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Class of DL:</span><span class="fonnt">'+driver_details_d.class_of_dl+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver in petition is same as fir:</span><span class="fonnt">'+driver_details_d.driver_petition_same_fir+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Criminal Case status against driver:</span><span class="fonnt">'+driver_details_d.criminal_case_status+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+driver_details_d.state+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">'+driver_details_d.city_name+'</span></p></li>'
$('.driver_deetails_list_outside_driver').append(sder);

$(".iimpolicy_detai_fir_outside_driver").click(function(){
    $('.imz_in_div_inputa_fir_outside_driver').empty();
 $("#edit_outside_driver_details").popup("open"); 
  //alert('imopolicy');

  $('.imj').empty();
var element = $(this);
var img_id = element.attr("id");
var insu_user_id_outside_driver = driver_details_d.user_id;

//var img_first_name = 'thirumal m 12313423154';
var imz_in_div_inputa_fir_outside_driver='<li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Name of the Driver :</span><span class="fonnt"><input value="'+driver_details_d.name+'" size="35" id="out_name"></span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Address of the Driver :</span><span class="fonnt"><input value="'+driver_details_d.address+'" size="35" id="address"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fon">Contact No:</span><span class="fonnt"><input value="'+driver_details_d.con_no+'" size="35" id="con_no">'+driver_details_d.con_no+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Gender:</span><span class="fonnt"><input value="'+driver_details_d.gender+'"  size="35"id="gender"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is the Driver is :</span><span class="fonnt"><input value="'+driver_details_d.is_driver+'" size="35" id="is_driver"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Type of DL :</span><span class="fonnt"><input value="'+driver_details_d.dl_type+'" size="35"  id="dl_type"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">DOB:</span><span class="fonnt"><input value="'+driver_details_d.dob+'" size="35" id="dob">'+driver_details_d.dob+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Driving Licence No:</span><span class="fonnt"><input value="'+driver_details_d.dr_lic_no+'" size="35" id="dr_lic_no"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Issuing Authority:</span><span class="fonnt"><input value="'+driver_details_d.issu_autho+'" size="35" id="issu_autho"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of issue:</span><span class="fonnt"><input value="'+driver_details_d.updated_date+'" size="35" id="updated_date">'+driver_details_d.updated_date+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Expiry:</span><span class="fonnt"><input value="'+driver_details_d.doi_exp+'" size="35" id="doi_exp"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Vehicles authorized to drive:</span><span class="fonnt"><input value="'+driver_details_d.vec_autho+'" size="35" id="vec_autho"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Badge No:</span><span class="fonnt"><input value="'+driver_details_d.bg_no+'" size="35"  id="bg_no"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date if Applicable:</span><span class="fonnt"><input value="'+driver_details_d.date_app+'" size="35" id="date_app"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Provide opposite Vehicles driver details:</span><span class="fonnt"><input value="'+driver_details_d.op_dr_dtls+'" size="35" id="op_dr_dtls"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is the driver under any influence of intoxicating liquor or drugs:</span><span class="fonnt"><input value="'+driver_details_d.driver_drugs+'" size="35" id="driver_drugs"></span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is the driver involved in any accident in the last two years:</span><span class="fonnt"><input value="'+driver_details_d.dr_involved+'"  size="35" id="dr_involved"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">If relative provide details about the nature of relationship with the insured:</span><span class="fonnt"><input value="'+driver_details_d.natr_relation+'" size="35" id="natr_relation"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">if Paid driver, how long he/she has been in the current employment:</span><span class="fonnt"><input value="'+driver_details_d.cur_emp_pr+'" size="35" id="cur_emp_pr"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any other relevant information:</span><span class="fonnt"><input value="'+driver_details_d.info+'" size="35" id="info"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Age:</span><span class="fonnt"><input value="'+driver_details_d.age+'" size="35" id="age"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Place of Issue:</span><span class="fonnt"><input value="'+driver_details_d.dl_place_of_issue+'" size="35" id="dl_place_of_issue"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Education:</span><span class="fonnt"><input value="'+driver_details_d.driver_education+'" size="35" id="driver_education"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Experience:</span><span class="fonnt"><input value="'+driver_details_d.driver_experience+'" size="35" id="driver_experience"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Valid For:</span><span class="fonnt"><input value="'+driver_details_d.dl_valid_for+'" size="35"  id="dl_valid_for"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Class of DL:</span><span class="fonnt"><input value="'+driver_details_d.class_of_dl+'" size="35" id="class_of_dl"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver in petition is same as fir:</span><span class="fonnt"><input value="'+driver_details_d.driver_petition_same_fir+'" size="35" id="driver_petition_same_fir"></span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Criminal Case status against driver:</span><span class="fonnt"><input value="'+driver_details_d.criminal_case_status+'" size="35" id="criminal_case_status"></span></p></li>'
$('.imz_in_div_inputa_fir_outside_driver').append(imz_in_div_inputa_fir_outside_driver);

$("#edit_insured_d_fir_outside_driver").click(function(){
   $("#edit_outside_driver_details").popup("close"); 
//alert('edit_policy_update');
var out_name = document.getElementById("out_name").value;
var address = document.getElementById("address").value;
var con_no = document.getElementById("con_no").value;
var gender = document.getElementById("gender").value;
var is_driver = document.getElementById("is_driver").value;
var dl_type = document.getElementById("dl_type").value;
var dob = document.getElementById("dob").value;
var dr_lic_no = document.getElementById("dr_lic_no").value;
var issu_autho = document.getElementById("issu_autho").value;
var updated_date = document.getElementById("updated_date").value;
var doi_exp = document.getElementById("doi_exp").value;
var vec_autho = document.getElementById("vec_autho").value;
var bg_no = document.getElementById("bg_no").value;
var date_app = document.getElementById("date_app").value;
var op_dr_dtls = document.getElementById("op_dr_dtls").value;
var driver_drugs = document.getElementById("driver_drugs").value;
var dr_involved = document.getElementById("dr_involved").value;
var natr_relation = document.getElementById("natr_relation").value;
var cur_emp_pr = document.getElementById("cur_emp_pr").value;
var info = document.getElementById("info").value;
var age = document.getElementById("age").value;
var dl_place_of_issue = document.getElementById("dl_place_of_issue").value;
var driver_education = document.getElementById("driver_education").value;
var driver_experience = document.getElementById("driver_experience").value;
var dl_valid_for = document.getElementById("dl_valid_for").value;
var class_of_dl = document.getElementById("class_of_dl").value;
var driver_petition_same_fir = document.getElementById("driver_petition_same_fir").value;
var criminal_case_status = document.getElementById("criminal_case_status").value;


/*alert(insu_user_id_outside_driver+'insu_user_id_outside_driver');

alert(out_name+'out_name');//1
alert(address+'address');//2
alert(con_no+'con_no');//3
alert(gender+'gender');//4
alert(is_driver+'is_driver');//5
alert(dl_type+'dl_type');//6
alert(dob+'dob');//7
alert(dr_lic_no+'dr_lic_no');//8
alert(issu_autho+'issu_autho');//9
alert(updated_date+'updated_date');//10
alert(doi_exp+'doi_exp');//11
alert(vec_autho+'vec_autho');//12
alert(bg_no+'bg_no');//13
alert(date_app+'date_app');//14
alert(op_dr_dtls+'op_dr_dtls');//15
alert(driver_drugs+'driver_drugs');//16
alert(dr_involved+'dr_involved');//17
alert(natr_relation+'natr_relation');//18
alert(cur_emp_pr+'cur_emp_pr');//19
alert(info+'info');//20
alert(age+'age');//21
alert(dl_place_of_issue+'dl_place_of_issue');//22
alert(driver_education+'driver_education');//23
alert(driver_experience+'driver_experience');//24
alert(dl_valid_for+'dl_valid_for');//25
alert(class_of_dl+'class_of_dl');//26
alert(driver_petition_same_fir+'driver_petition_same_fir');//27
alert(criminal_case_status+'criminal_case_status');//28*/


var formData = $("#callAjaxForm").serialize();


//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  //url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_insu_fir.php?name_of_ps="+name_of_ps+"&address_of_ps="+address_of_ps+"&dist_bet_acc_ps="+dist_bet_acc_ps+"&fir_no="+fir_no+"&fir_date="+fir_date+"&delay_in_fir="+delay_in_fir+"&firsum="+firsum+"&fircoy="+fircoy+"&fir_logged_by="+fir_logged_by+"&fofname="+fofname+"&relationship_with_victim="+relationship_with_victim+"&vehicle_details="+vehicle_details+"&no_of_veh_involved="+no_of_veh_involved+"&vehicle_impleded_as_party="+vehicle_impleded_as_party+"&mvi_inspected="+mvi_inspected+"&summary_of_nvi="+summary_of_nvi+"&damage_of_vehicle="+damage_of_vehicle+"&shid_mark_obs="+shid_mark_obs+"&per_of_contribution="+per_of_contribution+"&chargesheet_filed="+chargesheet_filed+"&chargesheetcoll="+chargesheetcoll+"&sumchrge="+sumchrge+"&insu_user_id_fir="+insu_user_id_fir,  
  url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/update_outside_driver.php?out_name="+out_name+"&address="+address+"&con_no="+con_no+"&gender="+gender+"&is_driver="+is_driver+"&dl_type="+dl_type+"&dob="+dob+"&dr_lic_no="+dr_lic_no+"&issu_autho="+issu_autho+"&updated_date="+updated_date+"&doi_exp="+doi_exp+"&vec_autho="+vec_autho+"&bg_no="+bg_no+"&date_app="+date_app+"&op_dr_dtls="+op_dr_dtls+"&driver_drugs="+driver_drugs+"&dr_involved="+dr_involved+"&natr_relation="+natr_relation+"&cur_emp_pr="+cur_emp_pr+"&info="+info+"&age="+age+"&dl_place_of_issue="+dl_place_of_issue+"&driver_education="+driver_education+"&driver_experience="+driver_experience+"&dl_valid_for="+dl_valid_for+"&class_of_dl="+class_of_dl+"&driver_petition_same_fir="+driver_petition_same_fir+"&criminal_case_status="+criminal_case_status+"&insu_user_id_outside_driver="+insu_user_id_outside_driver,  
  data: formData,
  success: onSuccessins,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorins
});


});

$("#edit_insured_Cancel").click(function(){
   $("#edit_outside_driver_details").popup("close"); 
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

function onErrorins(data, status)
{
alert("Network super eion policy");
}  
function onSuccessins(data, status)
{
//alert('success super ffffffffffir');
  sessionStorage.setItem("driver_details_d",JSON.stringify(data));
  $('.driver_deetails_list_outside_driver').empty();
  driver_details_d =  JSON.parse(sessionStorage.getItem("driver_details_d"));
  for(a=0;a<driver_details_d.length;a++){  

  driver_details_d = driver_details_d[a];
// alert(addressimg_obj.document_name);

var injuredd_r_listqaa='<li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Name of the Driver :</span><span class="fonnt">'+driver_details_d.name+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Address of the Driver :</span><span class="fonnt">'+driver_details_d.address+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fon">Contact No:</span><span class="fonnt">'+driver_details_d.con_no+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Gender:</span><span class="fonnt">'+driver_details_d.gender+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Type of DL:</span><span class="fonnt">'+driver_details_d.dl_type+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is the Driver is:</span><span class="fonnt">'+driver_details_d.dl_type+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">DOB:</span><span class="fonnt">'+driver_details_d.dob+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Driving Licence No:</span><span class="fonnt">'+driver_details_d.dr_lic_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Issuing Authority:</span><span class="fonnt">'+driver_details_d.issu_autho+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of issue:</span><span class="fonnt">'+driver_details_d.updated_date+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Expiry:</span><span class="fonnt">'+driver_details_d.doi_exp+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Vehicles authorized to drive:</span><span class="fonnt">'+driver_details_d.vec_autho+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Badge No:</span><span class="fonnt">'+driver_details_d.bg_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date if Applicable:</span><span class="fonnt">'+driver_details_d.date_app+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Provide opposite Vehicles driver details:</span><span class="fonnt">'+driver_details_d.op_dr_dtls+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is the driver under any influence of intoxicating liquor or drugs:</span><span class="fonnt">'+driver_details_d.driver_drugs+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is the driver involved in any accident in the last two years:</span><span class="fonnt">'+driver_details_d.op_dr_dtls+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">If relative provide details about the nature of relationship with the insured:</span><span class="fonnt">'+driver_details_d.natr_relation+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">if Paid driver, how long he/she has been in the current employment:</span><span class="fonnt">'+driver_details_d.cur_emp_pr+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any other relevant information:</span><span class="fonnt">'+driver_details_d.info+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Age:</span><span class="fonnt">'+driver_details_d.age+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Place of Issue:</span><span class="fonnt">'+driver_details_d.dl_place_of_issue+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Education:</span><span class="fonnt">'+driver_details_d.driver_education+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Experience:</span><span class="fonnt">'+driver_details_d.driver_experience+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Valid For:</span><span class="fonnt">'+driver_details_d.dl_valid_for+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Class of DL:</span><span class="fonnt">'+driver_details_d.class_of_dl+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver in petition is same as fir:</span><span class="fonnt">'+driver_details_d.driver_petition_same_fir+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Criminal Case status against driver:</span><span class="fonnt">'+driver_details_d.criminal_case_status+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+driver_details_d.state+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">'+driver_details_d.city_name+'</span></p></li>'
$('.driver_deetails_list_outside_driver').append(injuredd_r_listqaa);

}
}
});

for(a=0;a<employment_upload_array.length;a++){  

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
// /alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}

if(qualification_id == '80' ){

  if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
 // alert('76 education salary inside');
   //var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.edu_name+'</p><span class="pri_span">Institution Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.degree+'</p><span class="pri_span">Qualification</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.year+'</p><span class="pri_span">Year Of Passing</span></div>'
$('#sda_newin').append(sd);


//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+servant_educa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+servant_educa.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+servant_educa.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+servant_educa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+servant_educa.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+servant_educa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+servant_educa.state+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+servant_educa.add_one+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+servant_educa.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+servant_educa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+servant_educa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+servant_educa.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
// /alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}
}
 }


if(qualification_id == '76' ){
 // alert('76 education salary inside');
 if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
  // var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.university+'</p><span class="pri_span">College/University</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.year_passing+'</p><span class="pri_span">Year of Passing</span></div>'
$('#sda_newin').append(sd);



//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">College/University: '+edusalary_edua.university+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Name Of The Degree: '+edusalary_edua.degree+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+edusalary_edua.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+edusalary_edua.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+edusalary_edua.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+edusalary_edua.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+edusalary_edua.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+edusalary_edua.state+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">College/University: '+edusalary_edua.university+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+edusalary_edua.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+edusalary_edua.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+edusalary_edua.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id')
//alert(empidempl+'empidempl'+verification_user_id+'verification_user_id');
if(empidempl == verification_user_id){
   //alert(empidempl+'empidempl'+verification_user_id+'verification_user_id insideeeeeeee 2222222222');
  if(empimgempl == qualification_id  ){
    //alert(empimgempl+'empimgempl'+qualification_id+'qualification_id insiiiiiiiiiiiiiiiiiiiiiiiiiiiiii 11111111')
//alert(empimgempl+''+qualification_id+''+empidempl+''+verification_user_id);
var oneemp=employimg_obj.document;
// /alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
 }

if(qualification_id == '75' ){
   //var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.designation+'</p><span class="pri_span">Designation</span></div>'
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.company+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.designation+'</p><span class="pri_span">Designation</span></div>'

$('#sda_newin').append(sd);


//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Salary:'+edusalary_offa.salary+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Employee Id:'+edusalary_offa.employeeid+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+edusalary_offa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address 1:'+edusalary_offa.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+edusalary_offa.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Phone:'+edusalary_offa.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Email:'+edusalary_offa.email+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Website:'+edusalary_offa.web+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+edusalary_offa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+edusalary_offa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+edusalary_offa.state+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Salary:'+edusalary_offa.salary+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Employee Id:'+edusalary_offa.employeeid+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+edusalary_offa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address 1:'+edusalary_offa.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+edusalary_offa.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Phone:'+edusalary_offa.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Email:'+edusalary_offa.email+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Website:'+edusalary_offa.web+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+edusalary_offa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+edusalary_offa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+edusalary_offa.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;

//alert(empimgempl+'empimgempl'+qualification_id+'qualification_id'+empidempl+'empidempl'+verification_user_id+'verification_user_id');

if(empidempl == verification_user_id){
  if(empimgempl == qualification_id  ){


//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
 }

if(qualification_id == '89' || qualification_id == '90' || qualification_id == '91' || qualification_id == '92' || qualification_id == '93'){
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
//   var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.First_Name+' '+delinquent_veria.Last_Name+'</p><span class="pri_span"> Subject Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.bank1+'</p><span class="pri_span">Bank Name 1</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.bank2+'</p><span class="pri_span">Bank Name 2</span></div>'
$('#sda_newin').append(sd);

$('#lii_newinui').hide();
//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+delinquent_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+delinquent_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+delinquent_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+delinquent_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+delinquent_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+delinquent_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+delinquent_veria.state+'</p></li>'

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/judgement1.png" alt="" class="li_img_pri"><p class="li_p_pri">Mode Of Operation:'+delinquent_veria.bk_mode+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+delinquent_veria.account_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">IFSC Code:'+delinquent_veria.ifsc_code+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Pan Number:'+delinquent_veria.pan_no+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+delinquent_veria.add_one+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+delinquent_veria.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+delinquent_veria.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">city:'+delinquent_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">state:'+delinquent_veria.state+'</p></li>'
$('#deliqshow1').show();
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/judgement1.png" alt="" class="li_img_pri"><p class="li_p_pri">Bank Name:'+delinquent_veria.bank1+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+delinquent_veria.account_no1+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">Branch Name:'+delinquent_veria.branch_name1+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+delinquent_veria.add_one1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+delinquent_veria.pincodebamk1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">city:'+delinquent_veria.citybank1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">state:'+delinquent_veria.statebank1+'</p></li>'
$('#lii_newin_for_deliq1').append(liii);

$('#deliqshow2').show();

var liiiu='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/judgement1.png" alt="" class="li_img_pri"><p class="li_p_pri">Bank Name:'+delinquent_veria.bank2+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+delinquent_veria.account_no2+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">Branch Name:'+delinquent_veria.branch_new2+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+delinquent_veria.bank_address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+delinquent_veria.pin_new2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">city:'+delinquent_veria.city_new2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">state:'+delinquent_veria.state_new2+'</p></li>'

$('#lii_newin_for_deliq').append(liiiu);



for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
 }

if(qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}

//  var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.company+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.employeeid+'</p><span class="pri_span">Employee Id</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.designation+'</p><span class="pri_span">Designation</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.company+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.designation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.country+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+integrity_lifestylea.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+integrity_lifestylea.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+integrity_lifestylea.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+integrity_lifestylea.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+integrity_lifestylea.state+'</p></li>'

$('#lii_newin').append(liii);

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
/*$('#intlife').show();*/
 }

if(qualification_id == '49' || qualification_id == '50' || qualification_id == '51' || qualification_id == '77' || qualification_id == '78' || qualification_id == '79'){
// var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.designation+'</p><span class="pri_span">Designation</span></div>'
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.company_name+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.employee_id+'</p><span class="pri_span">Employee Id</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.designation+'</p><span class="pri_span">Designation</span></div>'

$('#sda_newin').append(sd);


//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+servant_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+servant_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+servant_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+servant_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+servant_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+servant_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+servant_veria.state+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+servant_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address1:'+servant_veria.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Land Mark:'+servant_veria.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+servant_veria.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+servant_veria.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+servant_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+servant_veria.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}


 }

if(qualification_id == '81' || qualification_id == '82' || qualification_id == '83'  ){
  if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
  //alert('employ gap');
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.designation+'</p><span class="pri_span">Designation</span></div>'

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Credential-name--icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.reason+'</p><span class="pri_span">Reason</span></div>'

$('#sda_newin').append(sd);

//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+employgap_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+employgap_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+employgap_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+employgap_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+employgap_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+employgap_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+employgap_veria.state+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">Gap From-To:'+employgap_veria.gap_from+'-'+employgap_veria.gap_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+employgap_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+employgap_veria.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+employgap_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+employgap_veria.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}
if(qualification_id == '71' || qualification_id == '72' || qualification_id == '73' || qualification_id == '74' ){

if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.designation+'</p><span class="pri_span">Designation</span></div>'

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.first_name+''+criminal_veria.last_name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.city_name+'</p><span class="pri_span">City</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.state+'</p><span class="pri_span">State</span></div>'

$('#sda_newin').append(sd);


//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+criminal_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+criminal_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+criminal_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+criminal_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+criminal_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+criminal_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+criminal_veria.state+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+criminal_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address 1:'+criminal_veria.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+criminal_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile No:'+criminal_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+criminal_veria.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+criminal_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+criminal_veria.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '43' ){
 // alert('web verifi details 43');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.designation+'</p><span class="pri_span">Designation</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.company+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.designation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.country+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+web_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+web_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+web_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+web_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+web_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+web_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+web_veria.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '47' ){
  //alert('supplier details 47');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.supplier_name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.registration_no+'</p><span class="pri_span">Registration No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.registration_date+'</p><span class="pri_span">Sales Tax No</span></div>'
$('#sda_newin').append(sd);

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Registration No / Incoparation No :' +supplier_venda.registration_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Licence: '+supplier_venda.license_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">TIN:'+supplier_venda.tin_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street: '+supplier_venda.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark: '+supplier_venda.landmark+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District: '+supplier_venda.district+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+supplier_venda.street+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+supplier_venda.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+supplier_venda.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City: '+supplier_venda.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State: '+supplier_venda.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '45' ){
  //alert('ware house details 45');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/warehousename-icon.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.warehouse_name+'</p><span class="pri_span">Ware House Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Permiter-use.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.permit+'</p><span class="pri_span">Permitted Use</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/suit-unit-icon.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.sunit+'</p><span class="pri_span">Suit/Unit</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.warehouse_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.street+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.country+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Warehouse.png" alt="" class="li_img_pri"><p class="li_p_pri">Warehouse Name : '+ware_housa.warehouse_name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Suit-unit.png" alt="" class="li_img_pri"><p class="li_p_pri">Details / Description of Leasing: '+ware_housa.sunit+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Permit-use.png" alt="" class="li_img_pri"><p class="li_p_pri">Address1: '+ware_housa.address+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Permit-use.png" alt="" class="li_img_pri"><p class="li_p_pri">Address2 : '+ware_housa.street+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Land-lord-type.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark : '+ware_housa.landmark+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Lease-type-icon-2.png" alt="" class="li_img_pri"><p class="li_p_pri">Permitted Use: '+ware_housa.permit+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Payable.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Leasing : '+ware_housa.lease_start+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+ware_housa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City: '+ware_housa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+ware_housa.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert('oneemploy');
var oneemp=employimg_obj.document;
//alert('oneemp');
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40' || qualification_id == '70' || qualification_id == '84' || qualification_id == '94'){
  //alert('common details 42 44 46');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.First_Name+' '+common_addressa.Last_Name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Address2+'</p><span class="pri_span">Address2</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Taluk+'</p><span class="pri_span">Taluk</span></div>'
$('#sda_newin').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Address1+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+common_addressa.registration_no+'&nbsp;To &nbsp;'+common_addressa.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Zipcode+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+common_addressa.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+common_addressa.Phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+common_addressa.Mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+common_addressa.Current_Zipcode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+common_addressa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+common_addressa.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" onerror="imgError(this);"></a></li>');

}

}

}

if(qualification_id == '66' ){
  //alert('bankrupcy verification');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.bank_name+'</p><span class="pri_span">Bank Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.account_type+'</p><span class="pri_span">Type of Account</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.branch_name+'</p><span class="pri_span">Branch Name</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.bank_name+'</p><span class="pri_span">Bank Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.account_type+'</p><span class="pri_span">Type of Account</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.branch_name+'</p><span class="pri_span">Branch Name</span></div>'

$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Part Name:'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/judgement1.png" alt="" class="li_img_pri"><p class="li_p_pri">Mode Of Operation:'+bankruptcy_deta.bk_mode+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+bankruptcy_deta.account_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">IFSC Code:'+bankruptcy_deta.ifsc_code+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Pan Number:'+bankruptcy_deta.pan_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Dealing:'+bankruptcy_deta.dof+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/turn-over.png" alt="" class="li_img_pri"><p class="li_p_pri">Turn-Over:'+bankruptcy_deta.trovr+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Bankruptcy:'+bankruptcy_deta.dobr+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-code.png" alt="" class="li_img_pri"><p class="li_p_pri">Case-Code:'+bankruptcy_deta.ccode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-type.png" alt="" class="li_img_pri"><p class="li_p_pri">case-type:'+bankruptcy_deta.ctype+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-no-1.png" alt="" class="li_img_pri"><p class="li_p_pri">case-Number:'+bankruptcy_deta.cano+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+bankruptcy_deta.add_one+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Documentsr.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark:'+bankruptcy_deta.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+bankruptcy_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">city:'+bankruptcy_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">state:'+bankruptcy_deta.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Part Name:'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/judgement1.png" alt="" class="li_img_pri"><p class="li_p_pri">Mode Of Operation:'+bankruptcy_deta.bk_mode+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+bankruptcy_deta.account_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">IFSC Code:'+bankruptcy_deta.ifsc_code+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Pan Number:'+bankruptcy_deta.pan_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Dealing:'+bankruptcy_deta.dof+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/turn-over.png" alt="" class="li_img_pri"><p class="li_p_pri">Turn-Over:'+bankruptcy_deta.trovr+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Bankruptcy:'+bankruptcy_deta.dobr+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-code.png" alt="" class="li_img_pri"><p class="li_p_pri">Case-Code:'+bankruptcy_deta.ccode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-type.png" alt="" class="li_img_pri"><p class="li_p_pri">case-type:'+bankruptcy_deta.ctype+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-no-1.png" alt="" class="li_img_pri"><p class="li_p_pri">case-Number:'+bankruptcy_deta.cano+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+bankruptcy_deta.add_one+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Documentsr.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark:'+bankruptcy_deta.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+bankruptcy_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">city:'+bankruptcy_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">state:'+bankruptcy_deta.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}


if(qualification_id == '69' ){
  //alert('identity verification');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.name_institution+'</p><span class="pri_span">Name of the Istitution</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.licence_no+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.name_prof+'</p><span class="pri_span">Name of the Professional licence</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.licence_no+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'
$('#sda_newin').append(sd);

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+professional_deta.name_prof+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Name of the Institution:'+professional_deta.licence_type+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">DOB:'+professional_deta.doi+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Address of Institution:'+professional_deta.addinst+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Licence No:'+professional_deta.licence_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+professional_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+professional_deta.state+'</p></li>'


$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}



if(qualification_id == '39' ){
  //alert('credential verification');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.credential_name+'</p><span class="pri_span">Credential Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Credential-name--icon.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.isdby+'</p><span class="pri_span">Issue By</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.issuedaut+'</p><span class="pri_span">Issue Date</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.credential_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.credential+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.valid+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.pincode+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Credentials Name:'+credential_deta.credential_name+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Credentials Description:'+credential_deta.crdescrp+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Issue Date:'+credential_deta.issuedaut+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Issue By:'+credential_deta.isdby+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+credential_deta.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+credential_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+credential_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+credential_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+credential_deta.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '56' ){
  //alert('distributor residential address verification');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.licenceno+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.valid+'</p><span class="pri_span">Valid Upto</span></div>'
$('#sda_newin').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+driving_lica.fname+'&nbsp;To &nbsp;'+driving_lica.bank_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.account_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.ifsc_code+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">Issued Name: '+driving_lica.issuename+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of issue: '+driving_lica.dateofissue+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Valid thru: '+driving_lica.valid+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Father-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+driving_lica.fname+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri"> Address: '+driving_lica.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+driving_lica.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"> City: '+driving_lica.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+driving_lica.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '41' ){
  //alert('distributor details 41');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.company_name+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.registration_no+'</p><span class="pri_span">Registration No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.registration_date+'</p><span class="pri_span">Date of Registration</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.company_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.license_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.district+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Company_Name: '+dist_detailsa.company_name+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/case-no-1.png" alt="" class="li_img_pri"><p class="li_p_pri">Registration_Number: '+dist_detailsa.registration_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Registration_Date: '+dist_detailsa.registration_date+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Commer-reg.png" alt="" class="li_img_pri"><p class="li_p_pri">Pan No:'+dist_detailsa.cr_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Tin Number:'+dist_detailsa.tin_no+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+dist_detailsa.address+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+dist_detailsa.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark'+dist_detailsa.street+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District: '+dist_detailsa.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+dist_detailsa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+dist_detailsa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+dist_detailsa.state+'</p></li>'


$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}



if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
  //alert('reference');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.yname+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.name+'</p><span class="pri_span">Name of the Referee </span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.district+'</p><span class="pri_span">District</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Address'+referencea.address+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+referencea.street+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark:'+referencea.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+referencea.city+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+referencea.state+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">How long does the Referee Knows You (Yrs):'+referencea.reference+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/patta-number.png" alt="" class="li_img_pri"><p class="li_p_pri">Address of the Referee :'+referencea.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+referencea.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile No of the Referee :'+referencea.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Email of the Referee:'+referencea.mail+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Any Other information:'+referencea.feedback+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+referencea.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+referencea.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+referencea.state+'</p></li>'
$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}


if(qualification_id == '29'  ){
  //alert('address verrrrrr');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+user_obja.First_Name+' '+user_obja.Last_Name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.landmark+'</p><span class="pri_span">Landmark</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.district+'</p><span class="pri_span">District</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.address+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.district+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+address_veriia.address+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+address_veriia.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark:'+address_veriia.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+address_veriia.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+address_veriia.city_name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+address_veriia.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+address_veriia.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if( qualification_id == '31' ){
  //alert('address verrrrrr');
  //personal details start
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
 //personal details start
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+user_obja.First_Name+' '+user_obja.Last_Name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.company_name+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.employee_id+'</p><span class="pri_span">Employee Id</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.address+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.district+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Salary:'+address_veriia.salary+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Designation:'+address_veriia.designation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+address_veriia.address+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+address_veriia.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark:'+address_veriia.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+address_veriia.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+address_veriia.city_name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+address_veriia.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+address_veriia.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '65' ){
  //alert('identity');
if(personal_deta != null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.idname+'</p><span class="pri_span">ID Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.idnumber+'</p><span class="pri_span">ID Number</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'
$('#sda_newin').append(sd);

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Party Name:'+identity_deta.name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">ID Name:'+identity_deta.idname+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">ID Number:'+identity_deta.idnumber+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">issued office:'+identity_deta.issued+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Valid thru:'+identity_deta.valid+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode : '+identity_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City : '+identity_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State : '+identity_deta.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '64' ){   //alert('bank');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.bank_name+'</p><span class="pri_span">Bank Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.account_type+'</p><span class="pri_span">Bank Phone Number</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.branch_name+'</p><span class="pri_span">Branch Name</span></div>'
$('#sda_newin').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.pan_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.country+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.pincode+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Primary Contact Name:'+bank_inpro.account_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">Bank Guarantee Issued Date : '+bank_inpro.bgisd+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Purpose:'+bank_inpro.purpose+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">In Favour Of:'+bank_inpro.infav+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Bank Guarantee Duration(In Years):'+bank_inpro.bgd+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address 1:'+bank_inpro.add_one+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address 2:'+bank_inpro.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">PinCode:'+bank_inpro.pincode+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+bank_inpro.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+bank_inpro.state+'</p></li>'

$('#lii_newin').append(liii);

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}



if(qualification_id == '63' ){
//alert('assest');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+user_obja.First_Name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.property_type+'</p><span class="pri_span">Property Type</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.doc_no+'</p><span class="pri_span">Document Number</span></div>'
$('#sda_newin').append(sd);


//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.property_type+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.sur_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.patta_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.pincode+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Property-type-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Property-Type: '+assest_inpro.property_type+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Survey Number:'+assest_inpro.sur_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/patta-number.png" alt="" class="li_img_pri"><p class="li_p_pri">Patta Number:'+assest_inpro.patta_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/sq-feet.png" alt="" class="li_img_pri"><p class="li_p_pri">Sq feet:'+assest_inpro.appx_sq+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">sub-register office:'+assest_inpro.sub_off+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode : '+assest_inpro.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City : '+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State : '+assest_inpro.state+'</p></li>'

$('#lii_newin').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

  var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');


}

}

}


if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('employment');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employer_name+'</p><span class="pri_span">Organization Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employee_id+'</p><span class="pri_span">Employer ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/saller_icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employee_final_salary+'</p><span class="pri_span">Sallery</span></div>'
$('#sda_newin').append(sd);

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Name : '+user_obja.First_Name+'  '+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+currentobj_employment_records.working_from+'&nbsp;To &nbsp;'+currentobj_employment_records.working_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address : '+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode : '+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City : '+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State : '+currentobj_employment_records.state+'</p></li>'

$('#lii_newin').append(liii);





var oneemploy = new Array(10);
k = -1;

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");

if(empimg == coordinator_id && empid == verification_user_id ){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5' || qualification_id == '6'){
//alert('if education');
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_educational_records.year_of_passing+'</p><span class="pri_span">Year_of_passing</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png"  class="iomg" alt=""><p class="pri_p">'+currentobj_educational_records.percentage+'</p><span class="pri_span">Percentage</span></div>'
$('#sda_newin').append(sd);

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">Subject Name : '+user_obja.First_Name+'  '+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Institute Name : '+currentobj_educational_records.institute_name+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Course Name : '+currentobj_educational_records.degree_name+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">University Board : '+currentobj_educational_records.major+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+currentobj_educational_records.edufrom+'&nbsp;To &nbsp;'+currentobj_educational_records.eduto+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address : '+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode : '+currentobj_educational_records.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City : '+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State : '+currentobj_educational_records.state+'</p></li>'
$('#lii_newin').append(liii);



var oneemp = new Array(10);
j = -1;
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");
//alert(empid+'empid');
if(empimg == coordinator_id && empid == verification_user_id ) {

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

//var oneemp=employimg_obj.document;
j++;
oneemp[j]=employimg_obj.document;

if (j == 0 ){
  var one=oneemp[j];
//alert(one+'oneemp');
//$('.document_imag_inprooneqc').append('<img src="http://localhost/uploads/'+one+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
 $('.s').append('<li><a href="http://insurance.fourthforce.in/uploads/'+one+'"><img src="http://insurance.fourthforce.in/uploads/'+one+'"  style="height: 300px;width:350px"></a></li>');


}
if (j == 1 ){
  var oneo=oneemp[j];
// alert(oneo+'two');
//$('.document_imag_inprooneqd').append('<img src="http://localhost/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
 $('.s').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneo+'"><img src="http://insurance.fourthforce.in/uploads/'+oneo+'"  style="height: 300px;width:350px"></a></li>');

}
if (j == 2 ){
  var oneo=oneemp[j];
//alert(oneo+'two');
//$('.document_imag_inprooneqb').append('<img src="http://localhost/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
 $('.s').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneo+'"><img src="http://insurance.fourthforce.in/uploads/'+oneo+'"  style="height: 300px;width:350px"></a></li>');

}
if (j == 3 ){
  var oneo=oneemp[j];
// alert(oneo+'two');
//$('.document_imag_inprooneqa').append('<img src="http://localhost/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
 $('.s').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneo+'"><img src="http://insurance.fourthforce.in/uploads/'+oneo+'"  style="height: 300px;width:350px"></a></li>');

}
if (j == 4 ){
  var oneo=oneemp[j];
//alert(oneo+'two');
//$('.document_imag_inprooneqe').append('<img src="http://localhost/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
 $('.s').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneo+'"><img src="http://insurance.fourthforce.in/uploads/'+oneo+'"  style="height: 300px;width:350px"></a></li>');

}
if (j == 5 ){
  var oneo=oneemp[j];
//alert(oneo+'two');
//$('.document_imag_inprooneqf').append('<img src="http://localhost/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
 $('.s').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneo+'"><img src="http://insurance.fourthforce.in/uploads/'+oneo+'"  style="height: 300px;width:350px"></a></li>');

}

//alert(currentobj_educational_records.from);

$('#from_o').html(' <h1 class="sdah1">From-To</h1><p class="sdap">'+currentobj_educational_records.from+'</p><p class="sdap">'+currentobj_educational_records.to+'</p>');
$('#designation_o').html('<h1 class="sdah1">Qualification</h1><p class="sdap">'+user_obja.qualification_name+'</p>');
$('#percentage_o').html('<h1 class="sdah1">Percentage</h1><p class="sdap">'+currentobj_educational_records.percentage+'%</p>');
$('#year_of_passing_o').html('<h1 class="sdah1">year_of_passing</h1><p class="sdap">'+currentobj_educational_records.year_of_passing+'</p>');
$('#institute_inproo_o').text(currentobj_educational_records.institute_name);
$('#address_inproo_o').text(currentobj_educational_records.address);
$('#pincode_inproo_o').text(currentobj_educational_records.pincode);


}

}


}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
if(personal_deta !== null){
if(peruser == userobj ){
  $('.foi').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqi').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinp').append(liiip);

}else{
    $('.foi').hide();
}
}
$('.proof').hide();

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.qualification_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newin').append(liii);
 /* var liii='<li class="ui-li-has-icon ui-first- ui-first-child">  <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/mobile/location.png" alt="USA" class="ui-li-icon profile t">  <span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="institute_inproo_ratio"></span></a></li><li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/world.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="city_inproo">'+city+'</span></a></li> <li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/state.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="state_inproo"> '+state+'</span></a></li>'
  $('#lii').append(liii);*/



var oneaddress = new Array(10);
j = -1;
//alert('if address id');
for(a=0;a<addressid_records_array.length;a++){
//alert("addressid for");

addressimg_obj = addressid_records_array[a];
// alert(addressimg_obj.document_name);
var oneimg=addressimg_obj.proof_type_id;
var oneid=addressimg_obj.user_id;

//alert(oneimg +'equal to'+ proof_type_id);
//alert(oneid +'equal to'+ verification_user_id);
if(oneimg == coordinator_id && oneid == verification_user_id ){
//alert("oneimg ======inside coordinator_id");
//alert("oneid ======inside verification_user_id");
//var oneproof=addressimg_obj.document_name;

var oneemp=addressimg_obj.document_name;
//alert(oneemp);
  $('.sddq').append('<li><a href="http://insurance.fourthforce.in/insurance/documents/addressid/'+oneemp+'"><img src="http://insurance.fourthforce.in/insurance/documents/addressid/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');


j++;
oneaddress[j]=addressimg_obj.document_name;

if (j == 0 ){
  var one=oneaddress[j];
//alert(one+'oneemp');
//$('.document_imag_inprooneqc').append('<img src="http://insurance.fourthforce.in/insurance/documents/addressid/'+one+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
$('.s').append('<li><a href="http://insurance.fourthforce.in/insurance/documents/addressid/'+one+'"><img src="http://insurance.fourthforce.in/insurance/documents/addressid/'+one+'"  style="height: 300px;width:350px"></a></li>');


}
if (j == 1 ){
  var oneo=oneaddress[j];
//alert(oneo+'two');
//$('.document_imag_inprooneqd').append('<img src="http://insurance.fourthforce.in/insurance/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');
$('.s').append('<li><a href="http://insurance.fourthforce.in/insurance/documents/addressid/'+oneo+'"><img src="http://insurance.fourthforce.in/insurance/documents/addressid/'+oneo+'"  style="height: 300px;width:350px"></a></li>');

}
if (j == 2 ){
  var oneo=oneaddress[j];
// alert(oneo+'two');
$('.document_imag_inprooneqb').append('<img src="http://insurance.fourthforce.in/insurance/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 3 ){
  var oneo=oneaddress[j];
// alert(oneo+'two');
$('.document_imag_inprooneqa').append('<img src="http://insurance.fourthforce.in/insurance/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 4 ){
  var oneo=oneaddress[j];
// alert(oneo+'two');
$('.document_imag_inprooneqe').append('<img src="http://insurance.fourthforce.in/insurance/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 5 ){
  var oneo=oneaddress[j];
// alert(oneo+'two');
$('.document_imag_inprooneqf').append('<img src="http://insurance.fourthforce.in/insurance/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}


$('#institute_inproo_ratio').text(user_obja.qualification_name);
//   $('#address_inproo').text(currentobj_educational_records.address);
//$('#pincode_inproo').text(currentobj_educational_records.pincode);


}

}

}

$(document).off('click', '#inpro_to_verified').on('click', '#inpro_to_verified', function() { 
  var status_val_inpro=document.getElementById('status_val_inpro').value;
  var remark_inpro=document.getElementById('remark_inpro').value;
  var activity_log=document.getElementById('activity_log').value;
// var sdocument=document.getElementById('pgAddBookBookImage').value;
var sdocument=$('input[type=file]').val().split('\\').pop();
// var a = 'The Three Musketeers';
//b= a.substring(4, 9); 
//alert(b);
//alert(sdocument);


$.ajax({url: "http://insurance.fourthforce.in/slim_insurance/slim_four_ripsssjs/supervisor_status_to_verified.php?status_val_inpro="+status_val_inpro+"&verification_user_id="+verification_user_id+"&remark_inpro="+remark_inpro+"&coordinator_id="+coordinator_id+"&region_num="+region_num+"&activity_log="+activity_log+"&sdocument="+sdocument,
  data:$('#update_to_verified_inpro').serialize(),
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
      sessionStorage.setItem("new_verification_count_array",JSON.stringify(result[0]));
      sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[1]));
      sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[2]));
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

});





}






});
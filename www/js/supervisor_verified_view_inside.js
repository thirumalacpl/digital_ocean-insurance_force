$(document).on('pageshow', '#pagedesign_veri', function(){  
//$( document ).delegate("#pagedesign_veri", "pageinit", function() {
    $('.iGallery').imageflip()
//alert('supervisor_verified_view_inside');
$('.sdd').empty();
/*$('#sda_newin').empty();
$('#lii_newin').empty();*/
$('.proof').show();
$('#sda_newveri').empty();
$('#lii_newveri').empty();

$('#lii_newin_for_deliqa').empty();
$('#lii_newin_for_deliq1a').empty();
$('#deliqshow1a').hide();
$('#deliqshow2a').hide();
$('#lii_newinuia').show();


$('.document_imag_inproone_veria').empty();
$('.document_imag_inproone_verib').empty();
$('.document_imag_inproone_veric').empty();
$('.document_imag_inproone_verid').empty();
$('.document_imag_inproone_verie').empty();
$('.document_imag_inproone_verif').empty();

 $('.foiveri').hide();
$('#lii_newinpveri').show();
$('.sddqiveri').empty();
$('#lii_newinpveri').empty();

//insurance start
$('#veri_accident_details_a').empty();
 $('#veri_accident_details_ab').empty();
 $('#veri_accident_details_abc').empty();
 $('#veri_accident_Vechicle_details_a').empty();
 $('#veri_accident_detail_sceneofcrime').empty();
  $('#veri_fir_details_disa').empty();
    $('#veri_accident_details_abgh').empty();
    $('#veri_injured_Detaillsb').empty();
     $('#veri_deceased_detailsb').empty();
         $('#veri_injured_per_detailss_per').empty();
$('#veri_driver_owner_details_list').empty();
$('#veri_driver_deetails_list').empty();
$('.injuredd_r_list').empty();
$('.veri_policy_detaiils_detai').empty();

$('#veri_injured_Detaillsbqqwe').empty();
$('#veri_deceased_detailsbwqdre').empty();

 $('#accident_details_vehicle_veri').hide();
 $('#veri_fir_details').hide();
  $('#veri_policy_detaiils').hide();
    $('#insuredd_div_veri').hide();
 $('#veri_driver_owner').hide();
 $('#veri_insured_person_details').hide();
 $('#veri_claimant').hide();
 $('#veri_driverhide').hide();
  $('#veri_deceased_person_details').hide();
    $('#claimant_lista_inpro_veri').empty();
$('#injured_Detaillsbqqwe_inpro_veri').empty();
$('#deceased_detailsbwqdre_inpro_veri').empty();
    $('#claimant_lista_inpro_veri').empty();
$('#injured_Detaillsbqqwe_inpro_veri').empty();
$('#deceased_detailsbwqdre_inpro_veri').empty();
$('#claimant_inpro_veri').hide();
//insurance end

$(document).off('click', '#dashinvv').on('click', '#dashinvv', function() {

$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#inprogressinvv').on('click', '#inprogressinvv', function() {

$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});



$(document).off('click', '#verifiedinvv').on('click', '#verifiedinvv', function() {

$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#not_verifiedinvv').on('click', '#not_verifiedinvv', function() {

$.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#completedinvv').on('click', '#completedinvv', function() {

  $.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#signoutinvv').on('click', '#signoutinvv', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

/*end*/

$(document).off('click', '#dashboardlis_veri').on('click', '#dashboardlis_veri', function() {
//alert("sdfsdaffasf");
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#verils_veiring').on('click', '#verils_veiring', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#before_verified_in').on('click', '#before_verified_in', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#inproveria_oi').on('click', '#inproveria_oi', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#new_verilistfromverifieda_oo').on('click', '#new_verilistfromverifieda_oo', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});
$(document).off('click', '#verified_inpro_inside_upo_n').on('click', '#verified_inpro_inside_upo_n', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#siha_p').on('click', '#siha_p', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});


assignValues();

superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));

supervisor_view_verified_array =  JSON.parse(sessionStorage.getItem("supervisor_verified_array"));

regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));





function assignValues(){
  region_array = JSON.parse(sessionStorage.getItem("regionArray"));
  user_obja = JSON.parse(sessionStorage.getItem("currentobj_veri"));

  currentobja_addressid = JSON.parse(sessionStorage.getItem("currentobja_addressid_veri"));

//alert( currentobja_addressid.document_name);
currentobj_educational_records = JSON.parse(sessionStorage.getItem("currentobj_educational_records_veri"));
// alert( currentobj_educational_records.user_id+'education');
currentobj_employment_records = JSON.parse(sessionStorage.getItem("currentobja_emnployment_veri"));

addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));

employment_upload_array = JSON.parse(sessionStorage.getItem("multiple_documents_array"));

supervisor_final_commanda = JSON.parse(sessionStorage.getItem("supervisor_final_commanda"));

bank_inpro =  JSON.parse(sessionStorage.getItem("bank_inproa"));
assest_inpro =  JSON.parse(sessionStorage.getItem("assest_inpro"));
address_veriia =  JSON.parse(sessionStorage.getItem("address_veriia"));
referencea =  JSON.parse(sessionStorage.getItem("referencea"));


distr_residentiala =  JSON.parse(sessionStorage.getItem("distr_residentiala"));
dist_detailsa =  JSON.parse(sessionStorage.getItem("dist_detailsa"));


web_veria =  JSON.parse(sessionStorage.getItem("web_veria"));
supplier_venda =  JSON.parse(sessionStorage.getItem("supplier_venda"));
ware_housa =  JSON.parse(sessionStorage.getItem("ware_housa"));
common_addressa =  JSON.parse(sessionStorage.getItem("common_addressa"));

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

regionArray_array =  JSON.parse(sessionStorage.getItem("regionArray"));

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
tvo_extra_commenta = JSON.parse(sessionStorage.getItem("tvo_extra_commenta"));
/*insurance session end*/

//alert(personal_deta+'per');

if(regionArray_array == null){
//alert('ppp');
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
}




if(details_inj != null){
//alert(details_inj+'details_inj');
var detail_inj_userid=details_inj.user_id;
}

if(details_decea != null){
//alert(details_decea+'details_decea');
var details_decea_userid=details_decea.user_id;
}

//alert(personal_deta+'personal_deta');
if(personal_deta == null){
 //alert('personal_deta equal to null');

 $('.foiveri').hide();
}

if(personal_deta != null){
 //alert('personal_deta not equal to null');
peruser=personal_deta.user_id;
userobj=user_obja.verification_user_id;
//alert(peruser+'peruser'+userobj+'userobj');
 $('.foiveri').hide();
}

if(verification_maste == null){
 //alert('personal_deta not equal to null');

 $('.foiveri').hide();
}

if(verification_maste != null){
// alert('personal_deta not equal to null');
peruserin=verification_maste.Verification_Master_Id;
userobjin=user_obja.verification_user_id;
//alert(peruser+'peruser'+userobj+'userobj');
 $('.foiveri').hide();
}

username=regionArray_array.username;
//alert(username);
$("#userlistinveri").text(username);

var fin = supervisor_final_commanda;

if(fin !== null){
$('.final_comment').text(supervisor_final_commanda.final_Command);
//alert(supervisor_final_commanda.final_Command+'supervisor_final_commanda.final_Command');
}

var fin_op = tvo_extra_commenta;

if(fin_op !== null){
  //alert(fin_op+'1 fin_op');
$('.final_comment_tec').text(tvo_extra_commenta.comments);
}

if(fin_op !== null){
  //alert(fin_op+'2 fin_op');

$('.final_comment_tec_acci').text(tvo_extra_commenta.comments);


}

document.getElementById('filterBasic-inputveri').value = ""

var qualification_id = user_obja.type;
//alert(qualification_id+'qqqqqqqqqq');
//alert(user_obja.type+'type');
var verification_user_id = user_obja.verification_user_id;
//alert(verification_user_id );
var city = user_obja.city_name;
//alert(city);
var state = user_obja.state;
//alert(state);

var region_num=region_array.region;
//alert(region_array.region+'regionnnnnn');

//alert(qualification_id+'qualification_id');

if(qualification_id == '97'){
  //alert('97 final_comment');
$('#fir_finalcommand').show(); //fir 97
$('#driver_finalcommand').hide(); //driver
$('#claimant_finalcommand').hide(); // claimant
$('#owner_finalcommand').hide(); //owner
$('#accid_finalcommand').hide(); // accide
$('#insured_f_comm').hide(); // insured
}
if(qualification_id == '99'){
  //alert('99 final_comment');
$('#fir_finalcommand').hide(); //fir 97
$('#driver_finalcommand').show(); //driver
$('#claimant_finalcommand').hide(); // claimant
$('#owner_finalcommand').hide(); //owner
$('#accid_finalcommand').hide(); // accide
$('#insured_f_comm').hide(); // insured
}
if(qualification_id == '102'){
  //alert('99 final_comment');
$('#fir_finalcommand').hide(); //fir 97
$('#driver_finalcommand').hide(); //driver
$('#claimant_finalcommand').show(); // claimant
$('#owner_finalcommand').hide(); //owner
$('#accid_finalcommand').hide(); // accide
$('#insured_f_comm').hide(); // insured
}
if(qualification_id == '100'){
  //alert('100 final_comment');
$('#fir_finalcommand').hide(); //fir 97
$('#driver_finalcommand').hide(); //driver
$('#claimant_finalcommand').hide(); // claimant
$('#owner_finalcommand').show(); //owner
$('#accid_finalcommand').hide(); // accide
$('#insured_f_comm').hide(); // insured
}
if(qualification_id == '95'){
  //alert('95 final_comment');
$('#fir_finalcommand').hide(); //fir 97
$('#driver_finalcommand').hide(); //driver
$('#claimant_finalcommand').hide(); // claimant
$('#owner_finalcommand').hide(); //owner
$('#accid_finalcommand').show(); // accide
$('#insured_f_comm').hide(); // insured

}
if(qualification_id == '101'){
 // alert('101 insured final_comment');

$('#fir_finalcommand').hide(); //fir 97
$('#driver_finalcommand').hide(); //driver
$('#claimant_finalcommand').hide(); // claimant
$('#owner_finalcommand').hide(); //owner
$('#accid_finalcommand').hide(); // accide
$('#insured_f_comm').show(); // insured

}


$('.hhhh').text('Subject Name : '+user_obja.First_Name+' '+user_obja.Last_Name);
$('.pppp').text('Type : '+user_obja.verification_for);

if(qualification_id == '85' ){
  if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
 // alert('76 education salary inside');
  //var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.father+'</p><span class="pri_span">Father Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.mother+'</p><span class="pri_span">Mother Name</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.father+'</p><span class="pri_span">Father Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestyle_pera.mother+'</p><span class="pri_span">Mother Name</span></div>'

$('#sda_newveri').append(sd);

//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+integrity_lifestyle_pera.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+integrity_lifestyle_pera.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+integrity_lifestyle_pera.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+integrity_lifestyle_pera.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+integrity_lifestyle_pera.state+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+integrity_lifestyle_pera.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+integrity_lifestyle_pera.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+integrity_lifestyle_pera.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+integrity_lifestyle_pera.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+integrity_lifestyle_pera.state+'</p></li>'

$('#lii_newveri').append(liii);


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
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
 }

if(qualification_id == '80' ){
  if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
 // alert('76 education salary inside');
   //var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.designation+'</p><span class="pri_span">Designation</span></div>'
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.edu_name+'</p><span class="pri_span">Institution Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.degree+'</p><span class="pri_span">Qualification</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.year+'</p><span class="pri_span">Year Of Passing</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.edu_name+'</p><span class="pri_span">Institution Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.degree+'</p><span class="pri_span">Qualification</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_educa.year+'</p><span class="pri_span">Year Of Passing</span></div>'

$('#sda_newveri').append(sd);


//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+servant_educa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+servant_educa.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+servant_educa.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+servant_educa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+servant_educa.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+servant_educa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+servant_educa.state+'</p></li>'

//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+servant_educa.add_one+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+servant_educa.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+servant_educa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+servant_educa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+servant_educa.state+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+servant_educa.add_one+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+servant_educa.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+servant_educa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+servant_educa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+servant_educa.state+'</p></li>'

$('#lii_newveri').append(liii);


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
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
 }


if(qualification_id == '76' ){
  if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
 // alert('76 education salary inside');
  // var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.designation+'</p><span class="pri_span">Designation</span></div>'
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.university+'</p><span class="pri_span">College/University</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.year_passing+'</p><span class="pri_span">Year of Passing</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.university+'</p><span class="pri_span">College/University</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_edua.year_passing+'</p><span class="pri_span">Year of Passing</span></div>'

$('#sda_newveri').append(sd);


//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+edusalary_edua.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+edusalary_edua.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+edusalary_edua.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+edusalary_edua.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+edusalary_edua.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+edusalary_edua.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+edusalary_edua.state+'</p></li>'

//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">College/University: '+edusalary_edua.university+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+edusalary_edua.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+edusalary_edua.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+edusalary_edua.state+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">College/University: '+edusalary_edua.university+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Name Of The Degree: '+edusalary_edua.degree+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+edusalary_edua.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+edusalary_edua.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+edusalary_edua.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+edusalary_edua.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+edusalary_edua.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+edusalary_edua.state+'</p></li>'

$('#lii_newveri').append(liii);


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
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
 }
//insurance start start
/*101 insured details start*/
if(qualification_id == '101' ){
  //alert(qualification_id+'101');
      if(verification_maste !== null){
if(peruserin == userobjin ){
  $('.foiveri').show();
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
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');
}

}
//alert('claimant');

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}

   $('#lii_newinuia').hide();
   $('.proof').hide();
  $('#insuredd_div_veri').show();
  if(insured_per_detaiil != null){
var policy_detaiilswerio='<li class="li_hei">  <p class="li_p_pri"><span class="fonn">Vehicle insured person name:</span><span class="fonnt">'+insured_per_detaiil.name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address:</span><span class="fonnt">'+insured_per_detaiil.address+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Contact No:</span><span class="fonnt">'+insured_per_detaiil.con_no+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Select Gender:</span><span class="fonnt">'+insured_per_detaiil.gender+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">DOB:</span><span class="fonnt">'+insured_per_detaiil.dob+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Average yearly income:</span><span class="fonnt">'+insured_per_detaiil.yr_income+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Pan and Aadhar details (if any):</span><span class="fonnt">'+insured_per_detaiil.pn_adh_dtls+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Date of issue and expiry of the policy:</span><span class="fonnt">'+insured_per_detaiil.doi_exp+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Insured Profession:</span><span class="fonnt">'+insured_per_detaiil.isu_prof+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Number of members in the family:</span><span class="fonnt">'+insured_per_detaiil.no_fmly+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">How many of them are above 18+ and drive vehicle:</span><span class="fonnt">'+insured_per_detaiil.ab_age+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">How many vehicles do you have:</span><span class="fonnt">'+insured_per_detaiil.vec_no+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Usage of vehicles:</span><span class="fonnt">'+insured_per_detaiil.usg_vec+'</span></p></li>'
$('.injuredd_r_list_veri').append(policy_detaiilswerio);
}
if(policy_detaiil != null){
var policy_detaiilswer='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy Available:</span><span class="fonnt ">'+policy_detaiil.pol_avl+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address:</span><span class="fonnt">'+policy_detaiil.address+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Details Of Policy:</span><span class="fonnt">'+policy_detaiil.dtl_pol+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy No:</span><span class="fonnt">'+policy_detaiil.pol_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Policy Start Date:</span><span class="fonnt">'+policy_detaiil.pol_srt_dt+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy End Date:</span><span class="fonnt">'+policy_detaiil.pol_end_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note No:</span><span class="fonnt">'+policy_detaiil.crv_nte_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note Start Date:</span><span class="fonnt">'+policy_detaiil.crv_nte_srt_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note End Date:</span><span class="fonnt">'+policy_detaiil.crv_nte_end_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Close Proximity(within 15days):</span><span class="fonnt">'+policy_detaiil.wheth_cls_pro+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Date Of Intimation:</span><span class="fonnt">'+policy_detaiil.dt_inmit+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Tax/Commercial:</span><span class="fonnt">'+policy_detaiil.tax_com+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Class Of Vehicle:</span><span class="fonnt">'+policy_detaiil.cls_vec+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+policy_detaiil.state+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">'+policy_detaiil.city_name+'</span></p></li>'
$('.veri_policy_detaiils_detai').append(policy_detaiilswer);
}
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
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}


/*101 insured details end */
//99 start
if(qualification_id == '99' ){
 // alert(qualification_id+'99');


      if(verification_maste !== null){
if(peruserin == userobjin ){
  $('.foiveri').show();
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
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
//alert('claimant');

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Petition Download:'+verification_maste.petition_download+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}

  $('.proof').hide();
     $('#lii_newinuia').hide();
  $('#veri_driverhide').show();
    if(driver_details_d !== null){
var sder='<li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Name of the Driver :</span><span class="fonnt">'+driver_details_d.name+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Address of the Driver :</span><span class="fonnt">'+driver_details_d.address+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fon">Contact No:</span><span class="fonnt">'+driver_details_d.con_no+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Gender:</span><span class="fonnt">'+driver_details_d.gender+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Type of DL:</span><span class="fonnt">'+driver_details_d.dl_type+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is the Driver is:</span><span class="fonnt">'+driver_details_d.is_driver+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">DOB:</span><span class="fonnt">'+driver_details_d.dob+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Driving Licence No:</span><span class="fonnt">'+driver_details_d.dr_lic_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Issuing Authority:</span><span class="fonnt">'+driver_details_d.issu_autho+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of issue:</span><span class="fonnt">'+driver_details_d.updated_date+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Expiry:</span><span class="fonnt">'+driver_details_d.doi_exp+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Vehicles authorized to drive:</span><span class="fonnt">'+driver_details_d.vec_autho+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Badge No:</span><span class="fonnt">'+driver_details_d.bg_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date if Applicable:</span><span class="fonnt">'+driver_details_d.city_name+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Provide opposite Vehicles driver details:</span><span class="fonnt">'+driver_details_d.op_dr_dtls+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is the driver under any influence of intoxicating liquor or drugs:</span><span class="fonnt">'+driver_details_d.dr_act+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is the driver involved in any accident in the last two years:</span><span class="fonnt">'+driver_details_d.op_dr_dtls+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">If relative provide details about the nature of relationship with the insured:</span><span class="fonnt">'+driver_details_d.natr_relation+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">if Paid driver, how long he/she has been in the current employment:</span><span class="fonnt">'+driver_details_d.cur_emp_pr+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any other relevant information:</span><span class="fonnt">'+driver_details_d.info+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Age:</span><span class="fonnt">'+driver_details_d.age+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Place of Issue:</span><span class="fonnt">'+driver_details_d.dl_place_of_issue+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Education:</span><span class="fonnt">'+driver_details_d.driver_education+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Experience:</span><span class="fonnt">'+driver_details_d.driver_experience+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Valid For:</span><span class="fonnt">'+driver_details_d.dl_valid_for+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Class of DL:</span><span class="fonnt">'+driver_details_d.class_of_dl+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver in petition is same as fir:</span><span class="fonnt">'+driver_details_d.driver_petition_same_fir+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Criminal Case status against driver:</span><span class="fonnt">'+driver_details_d.criminal_case_status+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+driver_details_d.state+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">'+driver_details_d.city_name+'</span></p></li>'
$('#veri_driver_deetails_list').append(sder);
}
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
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}
//99 end
//100 start
if(qualification_id == '100' ){
  //alert(qualification_id+'100');

  if(verification_maste !== null){
if(peruserin == userobjin ){
  $('.foiveri').show();
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
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Claim No:'+verification_maste.clno+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Petition Download:'+verification_maste.petition_download+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}

  $('#veri_driver_owner').show();
     $('#lii_newinuia').hide();
   $('.proof').hide();
   if(driver_details_o !== null){
var sderqwe='<li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Name :</span><span class="fonnt">'+driver_details_o.name+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address :</span><span class="fonnt">'+driver_details_o.address+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Contact No:</span><span class="fonnt">'+driver_details_o.con_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Select Gender :</span><span class="fonnt">'+driver_details_o.gender+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Type of DL :</span><span class="fonnt">'+driver_details_o.dl_type+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DOB :</span><span class="fonnt">'+driver_details_o.dob+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driving Licence No :</span><span class="fonnt">'+driver_details_o.dl_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Issuing Authority :</span><span class="fonnt">'+driver_details_o.issue_autho+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of issue & Expiry :</span><span class="fonnt">'+driver_details_o.doi_exp+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Vehicles authorized to drive :</span><span class="fonnt">'+driver_details_o.vec_auth+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Badge No :</span><span class="fonnt">'+driver_details_o.bdg_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date if Applicable :</span><span class="fonnt">'+driver_details_o.date_app+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Provide opposite Vehicles driver details :</span><span class="fonnt">'+driver_details_o.opp_dr_dtls+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Age:</span><span class="fonnt">'+driver_details_o.age+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Place of Issue:</span><span class="fonnt">'+driver_details_o.dl_place_issue+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Education:</span><span class="fonnt">'+driver_details_o.driver_education+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver Experience:</span><span class="fonnt">'+driver_details_o.driver_exp+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">DL Valid For:</span><span class="fonnt">'+driver_details_o.dl_valid_for+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Class of DL:</span><span class="fonnt">'+driver_details_o.class_of_dl+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver from the same locality:</span><span class="fonnt">'+driver_details_o.driver_same_locality+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver in petition is same as fir:</span><span class="fonnt">'+driver_details_o.driver_petition_same_fir+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Criminal Case status against driver:</span><span class="fonnt">'+driver_details_o.criminal_case_status+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Issue :</span><span class="fonnt">'+driver_details_o.do_issue+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Driver involved in any accident in last 2 years:</span><span class="fonnt">'+driver_details_o.dr_invloved+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is the driver under any influence of intoxicating liquor or drugs:</span><span class="fonnt">'+driver_details_o.dr_influ+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any other relevant information:</span><span class="fonnt">'+driver_details_o.othr_info+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">State :</span><span class="fonnt">'+driver_details_o.state+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">City :</span><span class="fonnt">'+driver_details_o.city_name+'</span></p></li>'
$('#veri_driver_owner_details_list').append(sderqwe);
}
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
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}
//100 end
//97 fir start
if(qualification_id == '97' ){
  //alert(qualification_id+'97');
      if(verification_maste !== null){
if(peruserin == userobjin ){
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var multi_type_id_insu=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && multi_type_id_insu == '105' ){

var oneemp=employimg_obj.document;
//alert(oneemp+'oneemp');
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
//alert('claimant');

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Claim No:'+verification_maste.clno+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Petition Download:'+verification_maste.petition_download+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}

   $('#lii_newinuia').hide();
   $('.proof').hide();
  $('#veri_fir_details').show();
   if(fir_detai != null){
var fir_details_dis='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn ">Name of Police Station:</span><span class="fonnt iimpolicy_detai_insu">'+fir_detai.name_of_ps+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address of Police Station:</span><span class="fonnt">'+fir_detai.address_of_ps+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Site:</span><span class="fonnt">'+fir_detai.dist_bet_acc_ps+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR No:</span><span class="fonnt">'+fir_detai.fir_no+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR Date:</span><span class="fonnt">'+fir_detai.fir_date+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Any delay in filing the FIR:</span><span class="fonnt">'+fir_detai.delay_in_fir+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FIR summary details:</span><span class="fonnt">'+fir_detai.firsum+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Is FIR copy collected:</span><span class="fonnt">'+fir_detai.fircoy+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">FIR Logged by:</span><span class="fonnt">'+fir_detai.fir_logged_by+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Fourth Force Investigating Officers Name:</span><span class="fonnt">'+fir_detai.fofname+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Relationship to the Victim/Claimant:</span><span class="fonnt">'+fir_detai.relationship_with_victim+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Vehicle Details mentioned in the FIR:</span><span class="fonnt">'+fir_detai.vehicle_details+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">No of Vehicles involved in the accident:</span><span class="fonnt">'+fir_detai.no_of_veh_involved+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Owner of vehicle impleded as party:</span><span class="fonnt">'+fir_detai.vehicle_impleded_as_party+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether MVI Inspected:</span><span class="fonnt">'+fir_detai.mvi_inspected+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of MVI Inspection:</span><span class="fonnt">'+fir_detai.summary_of_nvi+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Accessed Damage of vehicle:</span><span class="fonnt">'+fir_detai.damage_of_vehicle+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Skid Marks Available:</span><span class="fonnt">'+fir_detai.shid_mark_obs+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Percentage of contribution of the vehicles to the accident:</span><span class="fonnt">'+fir_detai.per_of_contribution+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Chargesheet Filed:</span><span class="fonnt">'+fir_detai.chargesheet_filed+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Is Charge Sheet collected:</span><span class="fonnt">'+fir_detai.chargesheetcoll+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Summary of the Charge Sheet, if applicable:</span><span class="fonnt">'+fir_detai.sumchrge+'</span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">'+fir_detai.city_name+'</span></p></li> <li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+fir_detai.state+'</span></p></li>'
$('#veri_fir_details_disa').append(fir_details_dis);
}
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
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}
//97 fir end
//106 start
/*106 policy details start*/

if(qualification_id == '106' ){
  //alert(qualification_id+'106');
      if(verification_maste !== null){
if(peruserin == userobjin ){
  $('.foiveri').show();
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
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');
}

}
//alert('claimant');

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}

   $('#lii_newinuia').hide();
   $('.proof').hide();
  $('#veri_policy_detaiils').show();
var policy_detaiilswer='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy Available:</span><span class="fonnt ">'+policy_detaiil.pol_avl+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Address:</span><span class="fonnt">'+policy_detaiil.address+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Details Of Policy:</span><span class="fonnt">'+policy_detaiil.dtl_pol+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy No:</span><span class="fonnt">'+policy_detaiil.pol_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Policy Start Date:</span><span class="fonnt">'+policy_detaiil.pol_srt_dt+'</span></p></li><li class="li_hei">   <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Policy End Date:</span><span class="fonnt">'+policy_detaiil.pol_end_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note No:</span><span class="fonnt">'+policy_detaiil.crv_nte_no+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note Start Date:</span><span class="fonnt">'+policy_detaiil.crv_nte_srt_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Cover Note End Date:</span><span class="fonnt">'+policy_detaiil.crv_nte_end_dt+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Whether Close Proximity(within 15days):</span><span class="fonnt">'+policy_detaiil.wheth_cls_pro+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Date Of Intimation:</span><span class="fonnt">'+policy_detaiil.dt_inmit+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Tax/Commercial:</span><span class="fonnt">'+policy_detaiil.tax_com+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Class Of Vehicle:</span><span class="fonnt">'+policy_detaiil.cls_vec+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">State:</span><span class="fonnt">'+policy_detaiil.state+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">City:</span><span class="fonnt">'+policy_detaiil.city_name+'</span></p></li>'
$('.veri_policy_detaiils_detai').append(policy_detaiilswer);

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
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}
/*106 policy details end */
//106 end
//95 accident start
if(qualification_id == '95' ){
  //alert(qualification_id+'95');

        if(verification_maste !== null){
if(peruserin == userobjin ){
  $('.foiveri').show();
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
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
//alert('claimant');

//var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Claim No:'+verification_maste.clno+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'
var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Claim No:'+verification_maste.clno+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Petition Download:'+verification_maste.petition_download+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'

//$('#lii_newinp').append(liiip);
$('#lii_newinpveri').append(liiip);
}else{
    $('.foiveri').hide();
}
}
   $('#lii_newinuia').hide();
   $('.proof').hide();
  $('#accident_details_vehicle_veri').show();
   if(accident_details_a !== null){
var sder='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Accident and Time (dd/mm/yyyy):</span><span class="fonnt">'+accident_details_a.accident_date+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Speed of vehicle:</span><span class="fonnt">'+accident_details_a.vehicle_speed+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Odometer reading:</span><span class="fonnt">'+accident_details_a.odometer_reading+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Exact Place of Accident including Address/Spot of Accident with LandMark:</span><span class="fonnt">'+accident_details_a.place_of_accident+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Purpose of travel at the time of Accident:</span><span class="fonnt">'+accident_details_a.purpose_of_travel+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">If Carriage of Goods, detail the nature of goods:</span><span class="fonnt">'+accident_details_a.nature_of_goods+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">No. of people travelling at the time of Accident and in what capacity:</span><span class="fonnt">'+accident_details_a.numof_people+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Details of third party involved in the accident:</span><span class="fonnt">'+accident_details_a.third_party_name+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Vicinity Spot:</span><span class="fonnt">'+accident_details_a.vicinity_attribute+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Type of Accident:</span><span class="fonnt">'+accident_details_a.type_of_accident+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Nature of Road:</span><span class="fonnt">'+accident_details_a.nature_of_road+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Road Type:</span><span class="fonnt">'+accident_details_a.road_type+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Name of Fourth Force Investigating Officer:</span><span class="fonnt">'+accident_details_a.name_of_investigating_officer+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Insured Vehicle Movement:</span><span class="fonnt">'+accident_details_a.iv_co_relation+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Third Party Vehicle Movement:</span><span class="fonnt">'+accident_details_a.tp_co_relation+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Vehicle Seized on the Spot:</span><span class="fonnt">'+accident_details_a.vehicle_on_spot+'</span></p></li>'
$('#veri_accident_details_a').append(sder);
}
 if(vehicle_details_a !== null){
var sderbcy='<li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Vehicle Registration No:</span><span class="fonnt">'+vehicle_details_a.reg_no+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of Registration (dd/mm/yyyy):</span><span class="fonnt">'+vehicle_details_a.reg_date+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Purchase date of vehicle:</span><span class="fonnt">'+vehicle_details_a.purchase_date+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Type of vehicle:</span><span class="fonnt">'+vehicle_details_a.type_of_vehicle+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Purpose of vehicle:</span><span class="fonnt">'+vehicle_details_a.type_of_vehicle+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Make and Model of the vehicle:</span><span class="fonnt">'+vehicle_details_a.make+''+vehicle_details_a.model+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Colour of vehicle:</span><span class="fonnt">'+vehicle_details_a.color+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Fuel Type of Vehicle (Diesel,Petrol,CNG,etc):</span><span class="fonnt">'+vehicle_details_a.type_of_fuel+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Laden Weight:</span><span class="fonnt">'+vehicle_details_a.laden_weight+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">UnLaden Weight:</span><span class="fonnt">'+vehicle_details_a.unladen_weight+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Engine No:</span><span class="fonnt">'+vehicle_details_a.engine_no+' </span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Chassis No:</span><span class="fonnt">'+vehicle_details_a.chassis_no+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Date of transfer (if applicable):</span><span class="fonnt">'+vehicle_details_a.date_of_transfer+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">FC details of the vehicle if applicable:</span><span class="fonnt">'+vehicle_details_a.fc_details+'</span></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Details of Hypothecation if any:</span><span class="fonnt">'+vehicle_details_a.hypothecation+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn"> Permit details of the vehicle if applicable:</span><span class="fonnt">'+vehicle_details_a.permit_details+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Type of Permit:</span><span class="fonnt">'+vehicle_details_a.type_of_permit+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Permit Number:</span><span class="fonnt">'+vehicle_details_a.permit_num+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Date of expiry of permit number:</span><span class="fonnt">'+vehicle_details_a.date_of_permit_expiry+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Date of issue of permit number:</span><span class="fonnt">'+vehicle_details_a.date_of_permit_issue+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Details of the Opposite Vehicle:</span><span class="fonnt">'+vehicle_details_a.details_of_opp_vehicle+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Name and Owner of the Opposite Vehicle:</span><span class="fonnt">'+vehicle_details_a.owner_of_opp_vehicle+' </span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Kilometers run:</span><span class="fonnt">'+vehicle_details_a.km_run+'</span></p></li>'
$('#veri_accident_Vechicle_details_a').append(sderbcy);
}
 if(accident_details_a !== null){
var sderbcsoc='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"><span class="fonn">Rough sketch describing of the road map and vehicle position at the time of accident:</span><span class="fonnt">'+accident_details_a.rough_sketch+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Availability of critical observation such as road blocks, speed brakers, speed limit signs at the SOC:</span><span class="fonnt">'+accident_details_a.critical_obs+'</span></p></li><li class="li_hei"> <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"> <p class="li_p_pri"><span class="fonn">Longitude/Latitude:</span><span class="fonnt">'+accident_details_a.latlng+'</span></p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri">  <p class="li_p_pri"><span class="fonn">Any other reveleant information:</span><span class="fonnt">'+accident_details_a.relevant_info+'</span></p></li>'
$('#veri_accident_detail_sceneofcrime').append(sderbcsoc);
}
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
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}
//95 accident end
//102 start
if(qualification_id == '102' ){
 // alert(qualification_id+'102');

    if(verification_maste !== null){
if(peruserin == userobjin ){
  $('.foiveri').show();
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
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
//alert('claimant');

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Name:'+verification_maste.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">In the Court Of:'+verification_maste.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mact/Case No:'+verification_maste.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Insurance Company:'+verification_maste.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Petition Download:'+verification_maste.petition_download+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+verification_maste.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+verification_maste.state+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}

  $('#claimant_inpro_veri').show();
   $('#lii_newinuia').hide();
   $('.proof').hide();
     if(claimant_deta != null){
var sderclaimant='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Name of the Claimant:'+claimant_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Is the Claim made by/for:'+claimant_deta.claim_made+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Address of the Claimant:'+claimant_deta.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Contact No:'+claimant_deta.contact_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Select Gender:'+claimant_deta.gender+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">DOB:'+claimant_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Occupation:'+claimant_deta.occupation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Annual Income:'+claimant_deta.yearly_income+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Number of members in the family:'+claimant_deta.no_of_members+' </p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Advocate Details and contact if any:'+claimant_deta.advocate_details+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Version of Details:'+claimant_deta.casesum+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+claimant_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+claimant_deta.state+'</p></li>'
//var sderclaimant='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Name of the Claimant:'+claimant_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Is the Claim made by/for:'+claimant_deta.claim_made+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Address of the Claimant:'+claimant_deta.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Contact No:'+claimant_deta.contact_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Select Gender:'+claimant_deta.gender+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">DOB:'+claimant_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Occupation:'+claimant_deta.occupation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Annual Income:'+claimant_deta.yearly_income+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Number of members in the family:'+claimant_deta.no_of_members+' </p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Advocate Details and contact if any:'+claimant_deta.advocate_details+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Claimant Version of Details:'+claimant_deta.casesum+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+claimant_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+claimant_deta.state+'</p></li>'
$('#claimant_lista_inpro_veri').append(sderclaimant);
}
if(detail_inj_userid == verification_user_id){
  if(details_inj != null){
var sderty='<li class="li_hei">  <p class="li_p_pri"><span class="fonn">Name:</span><span class="fonnt">'+details_inj.name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address:</span><span class="fonnt">'+details_inj.address+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Contact No:</span><span class="fonnt">'+details_inj.contact+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Age:</span><span class="fonnt">'+details_inj.age+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Gender:</span><span class="fonnt">'+details_inj.gender+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Marital Status:</span><span class="fonnt">'+details_inj.marital_status+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Is the Injured:</span><span class="fonnt">'+details_inj.is_insured+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Relationship with the Claimant:</span><span class="fonnt">'+details_inj.relation_claimant+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Details of Injury Suffered:</span><span class="fonnt">'+details_inj.insury_sufferd+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Any permanent disability suffered:</span><span class="fonnt">'+details_inj.permanent_disability+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Occupation:</span><span class="fonnt">'+details_inj.occupation+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Annual Income:</span><span class="fonnt">'+details_inj.income+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Is Personal Accident Benefit:</span><span class="fonnt">'+details_inj.accident_benefit+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Details of Asset owned:</span><span class="fonnt">'+details_inj.asset_owned+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Name of Employer:</span><span class="fonnt">'+details_inj.employer_name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Address of Employer:</span><span class="fonnt">'+details_inj.employer_address+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Employer Contact:</span><span class="fonnt">'+details_inj.employer_contact+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Brief Statement of Employer:</span><span class="fonnt">'+details_inj.employer_statement+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Condition of the Injured during Admission:</span><span class="fonnt">'+details_inj.insured_condition+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Date of Admission/Treatment (dd/mm/yyy):</span><span class="fonnt">'+details_inj.doa+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Name of the Hospital/Clinic:</span><span class="fonnt">'+details_inj.hospital_name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Approx Distance of the Hospital from the site:</span><span class="fonnt">'+details_inj.distance+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Address:</span><span class="fonnt">'+details_inj.hospital_address+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Name of the Doctor:</span><span class="fonnt">'+details_inj.doctor_name+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Nature of Treatment Provided:</span><span class="fonnt">'+details_inj.treatment+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">Date of Discharge (dd/mm/yyyy):</span><span class="fonnt">'+details_inj.dod+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Medical Expenses Incurred:</span><span class="fonnt">'+details_inj.medical_expense+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn">Condition of the Injured at the time of Discharge:</span><span class="fonnt">'+details_inj.discharge_condition+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> MLC/Wound Certificate details:</span><span class="fonnt">'+details_inj.wounded_certificate+'</span></p></li><li class="li_hei">   <p class="li_p_pri"><span class="fonn">AR Copy provided:</span><span class="fonnt">'+details_inj.ar_copy+'</span></p></li><li class="li_hei">  <p class="li_p_pri"><span class="fonn"> Time of Hospitalization:</span><span class="fonnt">'+details_inj.hosp_time+'</span></p></li>'
$('#injured_Detaillsbqqwe_inpro_veri').append(sderty);
}
}
if(details_decea_userid == verification_user_id){
    if(details_decea != null){
var sderertt='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+details_decea.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+details_decea.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Contact No:'+details_decea.contact+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Age:'+details_decea.age+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Gender:'+details_decea.gender+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Marital Status:'+details_decea.marital_status+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Is the Deceased:'+details_decea.isdeceased+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Relationship with the claimant:'+details_decea.relationship+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Details of injury suffered:'+details_decea.injured_details+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Occupation:'+details_decea.occupation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Annual Income:'+details_decea.annual_income+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Is Personal Accident Benefit:'+details_decea.accident_benefit+'<p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Details of Asset owned:'+details_decea.asset_owned+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Name of Employer:'+details_decea.emp_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Address of Employer:'+details_decea.emp_address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Employer Contact:'+details_decea.emp_contact+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Brief Statement of Employer:'+details_decea.emp_statement+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Death:'+details_decea.dofd+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of PM:'+details_decea.dofpm+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Panchanama:'+details_decea.dofpnama+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">PM Copy Provided:'+details_decea.pmcopy+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Cause of death as per PMR:'+details_decea.cause_pmr+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Police Details on death:'+details_decea.police_details+'</p></li>'
$('#deceased_detailsbwqdre_inpro_veri').append(sderertt);
}
}

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
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
}
//102 end
//insurance end end
if(qualification_id == '75' ){
  if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.company+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.company+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+edusalary_offa.designation+'</p><span class="pri_span">Designation</span></div>'

$('#sda_newveri').append(sd);

//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+edusalary_offa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+edusalary_offa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+edusalary_offa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+edusalary_offa.state+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Salary:'+edusalary_offa.salary+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Employee Id:'+edusalary_offa.employeeid+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+edusalary_offa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address 1:'+edusalary_offa.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+edusalary_offa.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Phone:'+edusalary_offa.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Email:'+edusalary_offa.email+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Website:'+edusalary_offa.web+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+edusalary_offa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+edusalary_offa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+edusalary_offa.state+'</p></li>'

$('#lii_newveri').append(liii);


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
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}

}
 }

if(qualification_id == '89' || qualification_id == '90' || qualification_id == '91' || qualification_id == '92' || qualification_id == '93'){
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
//   var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.First_Name+' '+delinquent_veria.Last_Name+'</p><span class="pri_span"> Subject Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.bank1+'</p><span class="pri_span">Bank Name 1</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+delinquent_veria.bank2+'</p><span class="pri_span">Bank Name 2</span></div>'
$('#sda_newveri').append(sd);

$('#lii_newinuia').hide();
//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+delinquent_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+delinquent_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+delinquent_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+delinquent_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+delinquent_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+delinquent_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+delinquent_veria.state+'</p></li>'

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/judgement1.png" alt="" class="li_img_pri"><p class="li_p_pri">Mode Of Operation:'+delinquent_veria.bk_mode+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+delinquent_veria.account_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">IFSC Code:'+delinquent_veria.ifsc_code+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Pan Number:'+delinquent_veria.pan_no+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+delinquent_veria.add_one+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+delinquent_veria.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+delinquent_veria.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">city:'+delinquent_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">state:'+delinquent_veria.state+'</p></li>'
$('#deliqshow1a').show();
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/judgement1.png" alt="" class="li_img_pri"><p class="li_p_pri">Bank Name:'+delinquent_veria.bank1+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+delinquent_veria.account_no1+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">Branch Name:'+delinquent_veria.branch_name1+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+delinquent_veria.add_one1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+delinquent_veria.pincodebamk1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">city:'+delinquent_veria.citybank1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">state:'+delinquent_veria.statebank1+'</p></li>'
$('#lii_newin_for_deliq1a').append(liii);

$('#deliqshow2a').show();

var liiiu='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/judgement1.png" alt="" class="li_img_pri"><p class="li_p_pri">Bank Name:'+delinquent_veria.bank2+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+delinquent_veria.account_no2+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">Branch Name:'+delinquent_veria.branch_new2+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+delinquent_veria.bank_address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+delinquent_veria.pin_new2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">city:'+delinquent_veria.city_new2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">state:'+delinquent_veria.state_new2+'</p></li>'

$('#lii_newin_for_deliqa').append(liiiu);



for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
 }



if(qualification_id == '86' || qualification_id == '87' || qualification_id == '88' ){
  if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.company+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.employeeid+'</p><span class="pri_span">City</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.company+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.employeeid+'</p><span class="pri_span">Employee Id</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+integrity_lifestylea.designation+'</p><span class="pri_span">Designation</span></div>'

$('#sda_newveri').append(sd);


//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+integrity_lifestylea.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+integrity_lifestylea.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+integrity_lifestylea.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+integrity_lifestylea.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+integrity_lifestylea.state+'</p></li>'

var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-1:'+integrity_lifestylea.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+integrity_lifestylea.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+integrity_lifestylea.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+integrity_lifestylea.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+integrity_lifestylea.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}
 }

if(qualification_id == '49' || qualification_id == '50' || qualification_id == '51' || qualification_id == '77' || qualification_id == '78' || qualification_id == '79'){
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.company_name+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.employee_id+'</p><span class="pri_span">Employee Id</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.company_name+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.employee_id+'</p><span class="pri_span">Employee Id</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+servant_veria.designation+'</p><span class="pri_span">Designation</span></div>'

$('#sda_newveri').append(sd);



//var liii='<li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+servant_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address1:'+servant_veria.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Land Mark:'+servant_veria.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+servant_veria.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+servant_veria.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+servant_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+servant_veria.state+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+servant_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address1:'+servant_veria.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Land Mark:'+servant_veria.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+servant_veria.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+servant_veria.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+servant_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+servant_veria.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}


 }

if(qualification_id == '81' || qualification_id == '82' || qualification_id == '83'  ){
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.designation+'</p><span class="pri_span">Designation</span></div>'

//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.company_name+'</p><span class="pri_span">Company/Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Credential-name--icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.reason+'</p><span class="pri_span">Reason</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Credential-name--icon.png" class="iomg" alt=""><p class="pri_p">'+employgap_veria.reason+'</p><span class="pri_span">Reason</span></div>'

$('#sda_newveri').append(sd);

//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From-To:'+employgap_veria.gap_from+'-'+employgap_veria.gap_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+employgap_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+employgap_veria.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+employgap_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+employgap_veria.state+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">Gap From-To:'+employgap_veria.gap_from+'-'+employgap_veria.gap_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+employgap_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+employgap_veria.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+employgap_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+employgap_veria.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}
if(qualification_id == '71' || qualification_id == '72' || qualification_id == '73' || qualification_id == '74' ){
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.first_name+''+criminal_veria.last_name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.city_name+'</p><span class="pri_span">City</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.state+'</p><span class="pri_span">State</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.first_name+''+criminal_veria.last_name+'</p><span class="pri_span">Name </span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.city_name+'</p><span class="pri_span">City</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+criminal_veria.state+'</p><span class="pri_span">State</span></div>'

$('#sda_newveri').append(sd);

//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+criminal_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+criminal_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+criminal_veria.state+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+criminal_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address 1:'+criminal_veria.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+criminal_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile No:'+criminal_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+criminal_veria.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+criminal_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+criminal_veria.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '69' ){
  if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
  //alert('identity verification');

//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.name_prof+'</p><span class="pri_span">Name of the Istitution</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.licence_no+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.name_prof+'</p><span class="pri_span">Name of the Professional licence</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.licence_no+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'

$('#sda_newveri').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+professional_deta.name_prof+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Name of the Institution:'+professional_deta.name_institution+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">DOB:'+professional_deta.doi+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Licence Type:'+professional_deta.licence_type+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Licence No:'+professional_deta.licence_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+professional_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+professional_deta.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+professional_deta.name_prof+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Name of the Institution:'+professional_deta.licence_type+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">DOB:'+professional_deta.doi+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Address of Institution:'+professional_deta.addinst+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Licence No:'+professional_deta.licence_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+professional_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+professional_deta.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '64' ){
  if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
  //alert('bank');

//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.bank_name+'</p><span class="pri_span">Bank Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.account_type+'</p><span class="pri_span">Type of Account</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.branch_name+'</p><span class="pri_span">Branch Name</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.bank_name+'</p><span class="pri_span">Bank Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.account_type+'</p><span class="pri_span">Bank Phone Number</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.branch_name+'</p><span class="pri_span">Branch Name</span></div>'

$('#sda_newveri').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+bank_inpro.account_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">IFSC Code: '+bank_inpro.ifsc_code+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Pan Number:'+bank_inpro.pan_no+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+bank_inpro.add_one+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address-2:'+bank_inpro.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">PinCode:'+bank_inpro.pincode+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+bank_inpro.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+bank_inpro.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Primary Contact Name:'+bank_inpro.account_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">Bank Guarantee Issued Date : '+bank_inpro.bgisd+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Purpose:'+bank_inpro.purpose+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">In Favour Of:'+bank_inpro.infav+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Bank Guarantee Duration(In Years):'+bank_inpro.bgd+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address 1:'+bank_inpro.add_one+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address 2:'+bank_inpro.add_two+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">PinCode:'+bank_inpro.pincode+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+bank_inpro.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+bank_inpro.state+'</p></li>'

$('#lii_newveri').append(liii);

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '65' ){
  //alert('identity');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.idname+'</p><span class="pri_span">ID Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.idnumber+'</p><span class="pri_span">ID Number</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.idname+'</p><span class="pri_span">ID Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.idnumber+'</p><span class="pri_span">ID Number</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'

$('#sda_newveri').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Party Name:'+identity_deta.name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">ID Name:'+identity_deta.idname+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">ID Number:'+identity_deta.idnumber+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">issued office:'+identity_deta.idnumber+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Valid thru:'+identity_deta.valid+'<br></p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Party Name:'+identity_deta.name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">ID Name:'+identity_deta.idname+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">ID Number:'+identity_deta.idnumber+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">issued office:'+identity_deta.issued+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Valid thru:'+identity_deta.valid+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode : '+identity_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City : '+identity_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State : '+identity_deta.state+'</p></li>'


$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '63' ){
//alert('assest');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.property_type+'</p><span class="pri_span">Property Type</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.doc_no+'</p><span class="pri_span">Document Number</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+user_obja.First_Name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.property_type+'</p><span class="pri_span">Property Type</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.doc_no+'</p><span class="pri_span">Document Number</span></div>'

$('#sda_newveri').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Property-type-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Property-Type: '+assest_inpro.property_type+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Survey Number:'+assest_inpro.sur_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/patta-number.png" alt="" class="li_img_pri"><p class="li_p_pri">Patta Number:'+assest_inpro.patta_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/sq-feet.png" alt="" class="li_img_pri"><p class="li_p_pri">Sq feet:'+assest_inpro.appx_sq+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">sub-register office:'+assest_inpro.sub_off+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Property-type-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Property-Type: '+assest_inpro.property_type+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Survey Number:'+assest_inpro.sur_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/patta-number.png" alt="" class="li_img_pri"><p class="li_p_pri">Patta Number:'+assest_inpro.patta_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/sq-feet.png" alt="" class="li_img_pri"><p class="li_p_pri">Sq feet:'+assest_inpro.appx_sq+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">sub-register office:'+assest_inpro.sub_off+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode : '+assest_inpro.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City : '+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State : '+assest_inpro.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

  var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');


}

}

}

if(qualification_id == '66' ){
  //alert('bankrupcy verification');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}

//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.bank_name+'</p><span class="pri_span">Bank Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.account_type+'</p><span class="pri_span">Type of Account</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.branch_name+'</p><span class="pri_span">Branch Name</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.bank_name+'</p><span class="pri_span">Bank Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.account_type+'</p><span class="pri_span">Type of Account</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.branch_name+'</p><span class="pri_span">Branch Name</span></div>'

$('#sda_newveri').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Part Name:'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/judgement1.png" alt="" class="li_img_pri"><p class="li_p_pri">Mode Of Operation:'+bankruptcy_deta.bk_mode+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+bankruptcy_deta.account_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">IFSC Code:'+bankruptcy_deta.ifsc_code+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Pan Number:'+bankruptcy_deta.pan_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Dealing:'+bankruptcy_deta.dof+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/turn-over.png" alt="" class="li_img_pri"><p class="li_p_pri">Turn-Over:'+bankruptcy_deta.trovr+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Bankruptcy:'+bankruptcy_deta.dobr+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-code.png" alt="" class="li_img_pri"><p class="li_p_pri">Case-Code:'+bankruptcy_deta.ccode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-type.png" alt="" class="li_img_pri"><p class="li_p_pri">case-type:'+bankruptcy_deta.ctype+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-no-1.png" alt="" class="li_img_pri"><p class="li_p_pri">case-Number:'+bankruptcy_deta.cano+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+bankruptcy_deta.add_one+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Documentsr.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark:'+bankruptcy_deta.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+bankruptcy_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">city:'+bankruptcy_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">state:'+bankruptcy_deta.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Part Name:'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/judgement1.png" alt="" class="li_img_pri"><p class="li_p_pri">Mode Of Operation:'+bankruptcy_deta.bk_mode+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Account-number-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Account Number:'+bankruptcy_deta.account_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/badge-512.png" alt="" class="li_img_pri"><p class="li_p_pri">IFSC Code:'+bankruptcy_deta.ifsc_code+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/pan.png" alt="" class="li_img_pri"><p class="li_p_pri">Pan Number:'+bankruptcy_deta.pan_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Dealing:'+bankruptcy_deta.dof+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/turn-over.png" alt="" class="li_img_pri"><p class="li_p_pri">Turn-Over:'+bankruptcy_deta.trovr+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Bankruptcy:'+bankruptcy_deta.dobr+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-code.png" alt="" class="li_img_pri"><p class="li_p_pri">Case-Code:'+bankruptcy_deta.ccode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-type.png" alt="" class="li_img_pri"><p class="li_p_pri">case-type:'+bankruptcy_deta.ctype+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/case-no-1.png" alt="" class="li_img_pri"><p class="li_p_pri">case-Number:'+bankruptcy_deta.cano+'</p></li><li class="li_hei"> <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+bankruptcy_deta.add_one+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Documentsr.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark:'+bankruptcy_deta.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+bankruptcy_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">city:'+bankruptcy_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">state:'+bankruptcy_deta.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}


if(qualification_id == '39' ){
  //alert('credential verification');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}

//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Credential-name--icon.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.credential_name+'</p><span class="pri_span">Credential Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.credential+'</p><span class="pri_span">Vaild Upto</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.credential_name+'</p><span class="pri_span">Credential Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Credential-name--icon.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.isdby+'</p><span class="pri_span">Issue By</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.issuedaut+'</p><span class="pri_span">Issue Date</span></div>'

$('#sda_newveri').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+credential_deta.name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Credentials Name:'+credential_deta.credential_name+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Credentials:'+credential_deta.credential+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Valid thur:'+credential_deta.valid+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+credential_deta.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+credential_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+credential_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+credential_deta.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Credentials Name:'+credential_deta.credential_name+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Credentials Description:'+credential_deta.crdescrp+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Issue Date:'+credential_deta.issuedaut+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Issue By:'+credential_deta.isdby+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+credential_deta.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+credential_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+credential_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+credential_deta.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+credential_deta.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '56' ){
  //alert('distributor residential address verification');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.issuename+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.licenceno+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.valid+'</p><span class="pri_span">Valid Upto</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.licenceno+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.valid+'</p><span class="pri_span">Valid Upto</span></div>'

$('#sda_newveri').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">Issued Name: '+driving_lica.issuename+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of issue: '+driving_lica.dateofissue+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Valid thru: '+driving_lica.valid+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Father-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+driving_lica.fname+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri"> Address: '+driving_lica.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+driving_lica.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"> City: '+driving_lica.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+driving_lica.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">Issued Name: '+driving_lica.issuename+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of issue: '+driving_lica.dateofissue+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Valid thru: '+driving_lica.valid+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/Father-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+driving_lica.fname+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri"> Address: '+driving_lica.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+driving_lica.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri"> City: '+driving_lica.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+driving_lica.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}
if(qualification_id == '43' ){
 // alert('web verifi details 43');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.designation+'</p><span class="pri_span">Designation</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.company+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.employee_id+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.designation+'</p><span class="pri_span">Designation</span></div>'

$('#sda_newveri').append(sd);


//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+web_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+web_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+web_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+web_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+web_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+web_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+web_veria.state+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+web_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+web_veria.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile: '+web_veria.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+web_veria.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+web_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+web_veria.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+web_veria.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '47' ){
 // alert('supplier details 47');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}


//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.supplier_name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.registration_no+'</p><span class="pri_span">Registration No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.registration_date+'</p><span class="pri_span">Date of Registration</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.supplier_name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.registration_no+'</p><span class="pri_span">Registration No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.registration_date+'</p><span class="pri_span">Sales Tax No</span></div>'

$('#sda_newveri').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.registration_no+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.license_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.tin_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.district+'</p></li>'

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Commercial Reg Number:' +supplier_venda.registration_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Licence: '+supplier_venda.license_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">TIN:'+supplier_venda.tin_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street: '+supplier_venda.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark: '+supplier_venda.landmark+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District: '+supplier_venda.district+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+supplier_venda.street+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+supplier_venda.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+supplier_venda.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City: '+supplier_venda.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State: '+supplier_venda.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Registration No / Incoparation No :' +supplier_venda.registration_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Licence-num-icon.png" alt="" class="li_img_pri"><p class="li_p_pri">Licence: '+supplier_venda.license_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">TIN:'+supplier_venda.tin_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street: '+supplier_venda.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark: '+supplier_venda.landmark+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District: '+supplier_venda.district+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+supplier_venda.street+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+supplier_venda.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+supplier_venda.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City: '+supplier_venda.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State: '+supplier_venda.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '45' ){

  //alert('ware house details 45');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}

//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/warehousename-icon.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.warehouse_name+'</p><span class="pri_span">Ware House Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Permiter-use.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.permit+'</p><span class="pri_span">Permitted Use</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/suit-unit-icon.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.sunit+'</p><span class="pri_span">Suit/Unit</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/warehousename-icon.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.warehouse_name+'</p><span class="pri_span">Ware House Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Permiter-use.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.permit+'</p><span class="pri_span">Permitted Use</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/suit-unit-icon.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.sunit+'</p><span class="pri_span">Suit/Unit</span></div>'

$('#sda_newveri').append(sd);


//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Warehouse.png" alt="" class="li_img_pri"><p class="li_p_pri">WareHouse: '+ware_housa.warehouse_name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Suit-unit.png" alt="" class="li_img_pri"><p class="li_p_pri">Suit/unit: '+ware_housa.sunit+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Permit-use.png" alt="" class="li_img_pri"><p class="li_p_pri">Lease Start: '+ware_housa.lease_start+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Permit-use.png" alt="" class="li_img_pri"><p class="li_p_pri">Lease End: '+ware_housa.lease_end+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Land-lord-type.png" alt="" class="li_img_pri"><p class="li_p_pri">Land loard type: '+ware_housa.landlord_type+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Lease-type-icon-2.png" alt="" class="li_img_pri"><p class="li_p_pri">Lease type: '+ware_housa.lease_type+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Payable.png" alt="" class="li_img_pri"><p class="li_p_pri">Payable: '+ware_housa.payable+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Pernit.png" alt="" class="li_img_pri"><p class="li_p_pri">Permitted-use: '+ware_housa.permit+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark: '+ware_housa.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address: '+ware_housa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+ware_housa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City: '+ware_housa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+ware_housa.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Warehouse.png" alt="" class="li_img_pri"><p class="li_p_pri">Warehouse Name : '+ware_housa.warehouse_name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Suit-unit.png" alt="" class="li_img_pri"><p class="li_p_pri">Details / Description of Leasing: '+ware_housa.sunit+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Permit-use.png" alt="" class="li_img_pri"><p class="li_p_pri">Address1: '+ware_housa.address+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Permit-use.png" alt="" class="li_img_pri"><p class="li_p_pri">Address2 : '+ware_housa.street+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Land-lord-type.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark : '+ware_housa.landmark+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Lease-type-icon-2.png" alt="" class="li_img_pri"><p class="li_p_pri">Permitted Use: '+ware_housa.permit+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Payable.png" alt="" class="li_img_pri"><p class="li_p_pri">Date of Leasing : '+ware_housa.lease_start+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+ware_housa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City: '+ware_housa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+ware_housa.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert('oneemploy');
var oneemp=employimg_obj.document;
//alert('oneemp');
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40' || qualification_id == '70' || qualification_id == '84' || qualification_id == '94'){
  //alert('common details 42 44 46');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Address1+'</p><span class="pri_span">Address1</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Address2+'</p><span class="pri_span">Address2</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Taluk+'</p><span class="pri_span">Taluk</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.First_Name+' '+common_addressa.Last_Name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Address2+'</p><span class="pri_span">Address2</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Taluk+'</p><span class="pri_span">Taluk</span></div>'

$('#sda_newveri').append(sd);
//var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+common_addressa.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+common_addressa.Phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+common_addressa.Mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+common_addressa.permanent_regionsection+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+common_addressa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+common_addressa.state+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+common_addressa.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Telephone:'+common_addressa.Phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+common_addressa.Mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+common_addressa.Current_Zipcode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+common_addressa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+common_addressa.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}



if(qualification_id == '41' ){
  //alert('bank');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.company_name+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.registration_no+'</p><span class="pri_span">Registration No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.registration_date+'</p><span class="pri_span">Date of Registration</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.company_name+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.registration_no+'</p><span class="pri_span">Registration No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.registration_date+'</p><span class="pri_span">Date of Registration</span></div>'

$('#sda_newveri').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Company_Name: '+dist_detailsa.company_name+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/case-no-1.png" alt="" class="li_img_pri"><p class="li_p_pri">Registration_Number: '+dist_detailsa.registration_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Registration_Date: '+dist_detailsa.registration_date+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Commer-reg.png" alt="" class="li_img_pri"><p class="li_p_pri">Commercial Registration:'+dist_detailsa.cr_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Tin Number:'+dist_detailsa.tin_no+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+dist_detailsa.address+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+dist_detailsa.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark'+dist_detailsa.street+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District: '+dist_detailsa.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+dist_detailsa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+dist_detailsa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+dist_detailsa.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Company_Name: '+dist_detailsa.company_name+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div><img src="images/inner-pages/case-no-1.png" alt="" class="li_img_pri"><p class="li_p_pri">Registration_Number: '+dist_detailsa.registration_no+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Calendar.png" alt="" class="li_img_pri"><p class="li_p_pri">Registration_Date: '+dist_detailsa.registration_date+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Commer-reg.png" alt="" class="li_img_pri"><p class="li_p_pri">Pan No:'+dist_detailsa.cr_no+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Valid.png" alt="" class="li_img_pri"><p class="li_p_pri">Tin Number:'+dist_detailsa.tin_no+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+dist_detailsa.address+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+dist_detailsa.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark'+dist_detailsa.street+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District: '+dist_detailsa.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode: '+dist_detailsa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+dist_detailsa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+dist_detailsa.state+'</p></li>'

$('#lii_newveri').append(liii);

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}



if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
  //alert('reference');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}

//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.landmark+'</p><span class="pri_span">Landmark</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.street+'</p><span class="pri_span">Street</span></div>'

///var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.landmark+'</p><span class="pri_span">Landmark</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.street+'</p><span class="pri_span">Street</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.yname+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.name+'</p><span class="pri_span">Name of the Referee </span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.district+'</p><span class="pri_span">District</span></div>'

$('#sda_newveri').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+referencea.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+referencea.bank_name+'&nbsp;To &nbsp;'+referencea.bank_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+referencea.account_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+referencea.ifsc_code+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+referencea.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Company_name:'+referencea.company_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/sq-feet.png" alt="" class="li_img_pri"><p class="li_p_pri">Employee Id:'+referencea.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/Documentsr.png" alt="" class="li_img_pri"><p class="li_p_pri">Salary:'+referencea.salary+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+referencea.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/patta-number.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+referencea.street+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+referencea.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+referencea.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+referencea.state+'</p></li>'
///var liii='<li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+referencea.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/patta-number.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+referencea.street+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+referencea.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+referencea.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+referencea.state+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/reg-office.png" alt="" class="li_img_pri"><p class="li_p_pri">How long does the Referee Knows You (Yrs):'+referencea.reference+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/inner-pages/patta-number.png" alt="" class="li_img_pri"><p class="li_p_pri">Address of the Referee :'+referencea.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+referencea.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile No of the Referee :'+referencea.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Email of the Referee:'+referencea.mail+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Any Other information:'+referencea.feedback+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+referencea.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+referencea.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+referencea.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}


if(qualification_id == '29'){
  //alert('address verrrrrr');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}

//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.address+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.landmark+'</p><span class="pri_span">Landmark</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.street+'</p><span class="pri_span">Street</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+user_obja.First_Name+' '+user_obja.Last_Name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.landmark+'</p><span class="pri_span">Landmark</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.street+'</p><span class="pri_span">Street</span></div>'

$('#sda_newveri').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.address+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.district+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+address_veriia.address+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+address_veriia.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark:'+address_veriia.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+address_veriia.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+address_veriia.city_name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+address_veriia.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+address_veriia.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if( qualification_id == '31' ){
  //alert('address verrrrrr');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+user_obja.First_Name+' '+user_obja.Last_Name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.company_name+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.employee_id+'</p><span class="pri_span">Employee Id</span></div>'
$('#sda_newveri').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.address+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.district+'</p></li>'
var liii='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address:'+address_veriia.address+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Street.png" alt="" class="li_img_pri"><p class="li_p_pri">Street:'+address_veriia.street+'<br></p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/Landmark.png" alt="" class="li_img_pri"><p class="li_p_pri">Landmark:'+address_veriia.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode:'+address_veriia.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City:'+address_veriia.city_name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/District.png" alt="" class="li_img_pri"><p class="li_p_pri">District:'+address_veriia.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State:'+address_veriia.state+'</p></li>'

$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '27' ){
  //alert('bank');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.qname+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.task_name+'</p><span class="pri_span">Salary</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.account_type+'</p><span class="pri_span">City</span></div>'
$('#sda_newveri').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+bank_inpro.bank_name+'&nbsp;To &nbsp;'+bank_inpro.bank_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.account_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.ifsc_code+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
//alert('assest');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.patta_no+'</p><span class="pri_span">Salary</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.doc_no+'</p><span class="pri_span">City</span></div>'
$('#sda_newveri').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.sur_no+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+assest_inpro.doc_no+'&nbsp;To &nbsp;'+assest_inpro.working_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.sub_off+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newveri').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

  var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');


}

}

}


if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
  //alert('emplo inside');

if(personal_deta !== null){

if(peruser == userobj ){
 // alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
//var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employer_name+'</p><span class="pri_span">Employer Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employee_id+'</p><span class="pri_span">Employer ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/saller_icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employee_final_salary+'</p><span class="pri_span">Sallery</span></div>'
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employer_name+'</p><span class="pri_span">Organization Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employee_id+'</p><span class="pri_span">Employer ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/saller_icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employee_final_salary+'</p><span class="pri_span">Sallery</span></div>'

$('#sda_newveri').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+currentobj_employment_records.working_from+'&nbsp;To &nbsp;'+currentobj_employment_records.working_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/inner-pages/first-name.png" alt="" class="li_img_pri"><p class="li_p_pri">Name : '+user_obja.First_Name+'  '+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+currentobj_employment_records.working_from+'&nbsp;To &nbsp;'+currentobj_employment_records.working_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address : '+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode : '+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City : '+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State : '+currentobj_employment_records.state+'</p></li>'

$('#lii_newveri').append(liii);

  var oneemploy = new Array(10);
  k = -1;
  for(a=0;a<employment_upload_array.length;a++){

    employimg_obj = employment_upload_array[a];

    var empimgempl=employimg_obj.verification_type_id;
    var empidempl=employimg_obj.verification_master_id;


    if(empimgempl == qualification_id && empidempl == verification_user_id ){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');




    }

  }

}


if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5' || qualification_id == '6'){
  //alert('education if');
if(personal_deta !== null){

if(peruser == userobj ){
  //alert('show edu p');
  $('.foiveri').show();
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  //var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;
   var profile=employimg_obj.profile;


  if(empidempl == verification_user_id && profile == 'pro'){

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sddqiveri').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

var liiip='<li class="li_hei">  <div class="li_pri_left"></div><img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Name:'+personal_deta.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Telephone.png" alt="" class="li_img_pri"><p class="li_p_pri">Date Of Birth:'+personal_deta.dob+'</p></li><li class="li_hei">  <div class="li_pri_left"></div><img src="images/inner-pages/Mobile.png" alt="" class="li_img_pri"><p class="li_p_pri">Father Name:'+personal_deta.father_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Mother Name:'+personal_deta.mother_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">Place Of Birth:'+personal_deta.birth_place+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Mobile:'+personal_deta.mobile+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Landline No:'+personal_deta.phone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Passport No:'+personal_deta.passport_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Aadhar No:'+personal_deta.aadhar_no+'</p></li>'

$('#lii_newinpveri').append(liiip);

}else{
    $('.foiveri').hide();
}
}
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_educational_records.year_of_passing+'</p><span class="pri_span">Year_of_passing</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png"  class="iomg" alt=""><p class="pri_p">'+currentobj_educational_records.percentage+'</p><span class="pri_span">Percentage</span></div>'
$('#sda_newveri').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">Subject Name : '+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">Institute Name : '+currentobj_educational_records.institute_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+currentobj_educational_records.edufrom+'&nbsp;To &nbsp;'+currentobj_educational_records.eduto+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">Address : '+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">Pincode : '+currentobj_educational_records.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">City : '+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">State : '+currentobj_educational_records.state+'</p></li>'

$('#lii_newveri').append(liii);

/*  var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Degree</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" alt=""><p class="pri_p">'+currentobj_educational_records.year_of_passing+'</p><span class="pri_span">Year_of_passing</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" alt=""><p class="pri_p">'+currentobj_educational_records.percentage+'</p><span class="pri_span">Percentage</span></div>'
$('#sda_newveri').append(sd);
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li>'
$('#lii_newveri').append(liii);
*/


  var oneemp = new Array(10);
  j = -1;
  for(a=0;a<employment_upload_array.length;a++){

    employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");

if(empimg == qualification_id && empid == verification_user_id ){
//alert("if employimg_obj");
//alert(currentobj_educational_records.percentage+"if empimg after");
//alert(empid+"if empid after");
//alert(verification_user_id+"if verification_user_id after");
//var oneemp=employimg_obj.document;

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/uploads/'+oneemp+'"><img src="http://insurance.fourthforce.in/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');




//  $('.document_imag_veri').append('<img class="profile-thumbnail" src="http://staging.eimpressive.com/uploads/'+oneemp+'" style="width:150px;height:150px">&nbsp;');


$('#pincode_veri').text(currentobj_educational_records.pincode);



}

}

}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){

$('.proof').hide();

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.qualification_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newveri').append(liii);

/*var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.qualification_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">Tam</p></li>'
$('#lii_newveri').append(liii);*/

  var oneaddress = new Array(10);
  j = -1;
  for(a=0;a<addressid_records_array.length;a++){
//alert("addressid for");
addressimg_obj = addressid_records_array[a];
// alert(addressimg_obj.document_name);
var oneimg=addressimg_obj.proof_type_id;
var oneid=addressimg_obj.user_id;
//alert(qualification_id+"oneimg");

if(oneimg == qualification_id && oneid == verification_user_id ){
//alert("if address proof");
//var oneproof=addressimg_obj.document_name;

var oneemp=addressimg_obj.document_name;
//alert(oneemp);
  $('.sdd').append('<li><a href="http://insurance.fourthforce.in/documents/addressid/'+oneemp+'"><img src="http://insurance.fourthforce.in/documents/addressid/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');





$('#institute_inproo_veriii').text(user_obja.qualification_name);

$('#name_veri').text(user_obja.name);
$('#qualification_name_veri').text(user_obja.qualification_name);

$('#location_veri').text(user_obja.city_name);



}

}


}

}






});










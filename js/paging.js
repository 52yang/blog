
//分页
$(document).ready(function(){
	var sub_r = 5; 
	var number_of_items = $('.c_left').children().size();
	var number_of_pages = Math.ceil(number_of_items/sub_r);
	$('.sub_l').val(0);
	$('.sub_r').val(sub_r);
	var navigation_html = '<a class="previous_link" href="javascript:previous();"><i class="iconfont">&#xe70f;</i></a>'; 
	var current_link = 0;
	while(number_of_pages > current_link){
		navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
		current_link++;
	}
	navigation_html += '<a class="next_link" href="javascript:next();"><i class="iconfont">&#xe70f;</i></a>';
	$('.c_foot').html(navigation_html);
	$('.c_foot .page_link:first').addClass('active_page');
	$('.c_left').children().css('display', 'none');
	$('.c_left').children().slice(0, sub_r).css('display', 'block');	
});
function previous(){
	new_page = parseInt($('.sub_l').val()) - 1;
	if($('.active_page').prev('.page_link').length==true){
		go_to_page(new_page);
	}
};
function next(){
	new_page = parseInt($('.sub_l').val()) + 1;
	if($('.active_page').next('.page_link').length==true){
		go_to_page(new_page);
	}
};
function go_to_page(page_num){
	var sub_r = parseInt($('.sub_r').val());
	start_from = page_num * sub_r;
	end_on = start_from + sub_r;
	$('.c_left').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
	$('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');
	$('.sub_l').val(page_num);
};
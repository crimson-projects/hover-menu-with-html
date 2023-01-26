$(function () {

	'use strict';



	$('.menu__item').on("mouseenter", function () {
		let id = $(this).data('id');
		$('#' + id + '-bg__img').addClass('active');
	});
	$('.menu__item').on("mouseleave", function () {
		$('.menu-img img').removeClass('active');
	});

});
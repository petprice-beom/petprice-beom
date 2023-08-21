if (window.console == undefined) {
	console = { log: function () {} };
}
/** browser checker **/
(function ($) {
	$.browserTest = function (a, z) {
		var u = 'unknown',
			x = 'X',
			m = function (r, h) {
				for (var i = 0; i < h.length; i = i + 1) {
					r = r.replace(h[i][0], h[i][1]);
				}
				return r;
			},
			c = function (i, a, b, c) {
				var r = { name: m((a.exec(i) || [u, u])[1], b) };
				r[r.name] = true;
				r.version = (c.exec(i) || [x, x, x, x])[3];
				if (r.name.match(/safari/) && r.version > 400) {
					r.version = '2.0';
				}
				if (r.name === 'presto') {
					r.version = $.browser.version > 9.27 ? 'futhark' : 'linear_b';
				}
				r.versionNumber = parseFloat(r.version, 10) || 0;
				r.versionX = r.version !== x ? (r.version + '').substr(0, 1) : x;
				r.className = r.name + r.versionX;
				return r;
			};
		a = (
			a.match(/Opera|Navigator|Minefield|KHTML|Chrome/)
				? m(a, [
						[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/, ''],
						['Chrome Safari', 'Chrome'],
						['KHTML', 'Konqueror'],
						['Minefield', 'Firefox'],
						['Navigator', 'Netscape'],
				  ])
				: a
		).toLowerCase();
		$.browser = $.extend(
			!z ? $.browser : {},
			c(
				a,
				/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,
				[],
				/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/
			)
		);
		$.layout = c(
			a,
			/(gecko|konqueror|msie|opera|webkit)/,
			[
				['konqueror', 'khtml'],
				['msie', 'trident'],
				['opera', 'presto'],
			],
			/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/
		);
		$.os = {
			name: (/(win|mac|linux|sunos|solaris|iphone)/.exec(
				navigator.platform.toLowerCase()
			) || [u])[0].replace('sunos', 'solaris'),
		};
		if (!z) {
			$('html').addClass(
				[
					$.os.name,
					$.browser.name,
					$.browser.className,
					$.layout.name,
					$.layout.className,
				].join(' ')
			);
		}
	};
	$.browserTest(navigator.userAgent);
})(jQuery); //http://jquery.thewikies.com/browser/
var Gnt = Gnt || {};
Gnt = {
	touchis: 'ontouchstart' in window,
	init: function () {
		var funcThis = this;
		var userAgent = navigator.userAgent.toLowerCase();
		$(function () {
			if (funcThis.touchis) {
				$('html').addClass('touchmode');
			} else {
				$('html').removeClass('touchmode');
			}
			if (userAgent.indexOf('samsung') > -1) {
				$('html').addClass('samsung');
			}
			funcThis.commonResize();
			funcThis.ratioImg();
		});
		$(window).on('load', function () {
			funcThis.commonInit();
			funcThis.oldBrowerPop();
			funcThis.rndResearch();
			funcThis.dementiaUI();
			funcThis.crdesResize();
			funcThis.subtempMotion();
			funcThis.subContMotion();
		});
	},
	chageRatio: function () {
		var $d_ratio = $('.d_ratio');
		if ($d_ratio.length == 0) {
			return;
		}
		$d_ratio.attr('data-empty', $d_ratio.attr('src'));
		$d_ratio.each(function () {
			var $this = $(this),
				$t_src = $this.attr('data-src');
			if ($(window).width() > 1920) {
				$this.attr('src', $this.attr('data-src'));
			} else {
				$this.attr('src', $this.attr('data-empty'));
			}
		});
	},
	subtempMotion: function () {
		var msubtitw = $('.msubtit_w'),
			svcont_tb_w = $('.svcont_tb_w'),
			msubtitw_pos = 0;
		$('.svcont_tb_w').addClass('motion_active');
		if (svcont_tb_w.length === 0 || $(window).width() <= 1023) {
			msubtitw.addClass('motion_active');
		}

		$(window).on('scroll', function () {
			msubtitw_pos = msubtitw.length
				? msubtitw.offset().top - $(window).height() / 2 - 700
				: 0;
			if (msubtitw_pos < 0) {
				msubtitw_pos = 0;
			}
			if ($(window).scrollTop() > msubtitw_pos) {
				msubtitw.addClass('motion_active');
			}
		});
	},
	subContMotion: function () {
		var $motion_obj_group = $('.motion_obj_group');
		if ($motion_obj_group.hasClass('once_show')) {
			$motion_obj_group.addClass('motion_active');
		}
		if ($(window).width() <= 1023) {
			$motion_obj_group.first().addClass('motion_active');
		}
		$(window).on('scroll', function () {
			$motion_obj_group.each(function () {
				var valueData = 0;
				var $this = $(this);
				var $t_attr =
					$this.attr('data-pcpos') !== undefined
						? parseInt($this.attr('data-pcpos'))
						: 0;
				var $t_attr_m =
					$this.attr('data-mobilepos') !== undefined
						? parseInt($this.attr('data-mobilepos'))
						: 0;
				if ($(window).width() > 1023) {
					valueData = $t_attr;
				} else {
					valueData = $t_attr_m;
				}
				var $motion_obj_group_pos = $this.length
					? $this.offset().top - $(window).height() / 2 - valueData
					: 0;
				if (
					$(window).scrollTop() > $motion_obj_group_pos ||
					$(window).scrollTop() >
						$(document).height() - $(window).height() - 200
				) {
					$this.addClass('motion_active');
				}
			});
		});
		if ($(window).scrollTop() > 0) {
			$(window).trigger('scroll');
		}
	},
	crdesResize: function () {
		if ($('.bg_crdes_left').length == 0) {
			return;
		}
		var $bg_crdes_left = $('.bg_crdes_left'),
			$cdres_tabui_right = $('.cdres_tabui_right'),
			$cdres_tabui_right_pos = $cdres_tabui_right.length
				? $cdres_tabui_right.offset().left
				: 0;
		$bg_crdes_left.css({ width: '' });
		$bg_crdes_left.css({ width: $cdres_tabui_right_pos });
	},
	ptbarResizeCall: function () {
		var $ptbar_w = $('.ptbar_w'),
			$ptbar = $('.ptbar'),
			$has_ptbar = $('.has_ptbar'),
			$pthline = $('.pthline');
		if ($ptbar_w.length === 0) {
			return;
		}
		if ($('.pipedata_tb').find('.ptbar_w').length) {
			//$ptbar_w.appendTo($(".pipedata_tb_w"));
		}
		$ptbar_w.css({ left: '', top: '', height: '' });
		$ptbar.css({ width: '' });
		/*$ptbar_w.css({
			"left" : $(".has_ptbar").position().left,
			"height" : $(".has_ptbar").outerHeight()
		});*/
		$ptbar_w.each(function (index) {
			var $this = $(this),
				$t_bar = $this.find('.ptbar'),
				$t_widnum = parseInt($t_bar.attr('data-barwidth'));
			/*
			$this.css({
				"top" : $(".has_ptdtarget").eq(index).position().top
			});*/
			$t_bar.css({
				width:
					$('.pthline_list > li')
						.eq($t_widnum + 1)
						.position().left - $has_ptbar.eq(index).position().left,
			});
		});
	},
	ratioImg: function () {
		var dataratio_img = $('img[data-ratio]');
		var funcThis = this;
		if (funcThis.touchis) {
			dataratio_img.each(function () {
				$(this).attr('src', $(this).attr('data-ratio'));
			});
		}
	},
	getScrollBar: function () {
		var $outer = $('<div>')
				.css({ visibility: 'hidden', width: 100, overflow: 'scroll' })
				.appendTo('body'),
			widthWithScroll = $('<div>')
				.css({ width: '100%' })
				.appendTo($outer)
				.outerWidth();
		$outer.remove();
		return 100 - widthWithScroll;
	},
	resizePartWidth: 1023,
	commonResize: function () {
		var funcThis = this;
		var $window_width = 0;
		$(window)
			.on('resize', function () {
				if ($window_width == $(window).width() && funcThis.touchis) {
					return;
				}
				if ($(window).width() <= funcThis.resizePartWidth) {
				} else {
				}
				//funcThis.mapScrollResize();
				funcThis.chageRatio();
				funcThis.reportMainResize();
				funcThis.crdesResize();
				funcThis.reformFunc();
				funcThis.rndResearch();
				funcThis.bizCircleResize();
				funcThis.dementiaUI();
				funcThis.commonLayout();
				$window_width = $(window).width();
			})
			.resize();
	},
	rndResearch: function () {
		var $rndws_spec_w = $('.rndws_spec_w'),
			$rndws_both = $('.rndws_both'),
			$rndws_both_left = $rndws_both.length ? $rndws_both.position().left : 0;

		$rndws_spec_w.css({ 'margin-left': '' });

		if ($(window).width() > 1023) {
			$rndws_spec_w.css({ 'margin-left': $rndws_both_left - 30 });
		}
	},
	dementiaUI: function () {
		var $dementia_intro_z = $('.dementia_intro_z');
		var $dementia_img_w = $('.dementia_img_w');
		$dementia_intro_z.css({ height: '' });
		if ($(window).width() > 1023) {
			$dementia_intro_z.css({
				height: $dementia_img_w.length ? $dementia_img_w.height() : 0,
			});
		}
	},
	mapScroll: function () {
		var funcThis = this,
			$schvlow02 = $('.schvlow02'),
			$schiscObj = null;

		if (
			$schvlow02.length &&
			!funcThis.touchis &&
			!$schvlow02.hasClass('nodata')
		) {
			$schiscObj = new IScroll('.schvlow02', {
				scrollbars: true,
				mouseWheel: true,
				interactiveScrollbars: true,
				shrinkScrollbars: 'scale',
				preventDefault: false,
			});
			$schvlow02.on('refresh', function () {
				$schiscObj.refresh();
			});
			$schvlow02.on('enable', function () {
				$schiscObj.enable();
			});
			$schvlow02.on('disable', function () {
				$schiscObj.disable();
			});
		}
	},
	mapScrollResize: function () {
		if ($(window).width() < 1023) {
			$('.schvlow02').trigger('enable');
		} else {
			$('.schvlow02').trigger('disable');
		}
	},
	reformFunc: function () {
		var $resitem = $('[data-pcw]');
		if ($resitem.length === 0) {
			return;
		}
		$resitem.each(function () {
			if ($(window).width() <= 1023) {
				$(this).css({ width: '' });
			} else {
				$(this).css({ width: $(this).attr('data-pcw') });
			}
		});
	},
	bizCircleResize: function () {
		var $bizdia_item_in = $('.bizdia_item_in');
		$bizdia_item_in.css({ height: '' });
		if ($(window).width() <= 1023) {
			$bizdia_item_in.css({ height: $bizdia_item_in.outerWidth() });
		}
	},
	menuRock: function (target) {
		if ($(target).length) {
			$(target).find('.tomitem').addClass('active');
			$(target).find('.ttmitem_w').show();
		}
	},
	totalMenu: function () {
		var $tomharray = [],
			$tomitem_w = $('.tomitem_w'),
			$page_wrap = $('.page_wrap'),
			$page_wrap_left = $page_wrap.length ? $page_wrap.offset().left : 0,
			$page_wrap_wid = $page_wrap.length ? $page_wrap.width() : 0,
			$main_dotmenu_list_w = $('.main_dotmenu_list_w'),
			$taddress_w = $('.taddress_w');

		$('.tomitem_w').css({ height: '' });
		$tomitem_w.each(function () {
			$tomharray.push($(this).outerHeight());
		});
		if ($(window).width() > 1920) {
			$main_dotmenu_list_w.css({
				left: $page_wrap_left + $page_wrap_wid,
				right: 'auto',
			});
		} else {
			$main_dotmenu_list_w.css({ left: '', right: '' });
		}
		if ($(window).width() > 1023) {
			$tomitem_w.css({ height: Math.max.apply(null, $tomharray) });
		}
	},
	commonLayout: function () {
		var funcThis = this;
		if ($(window).width() <= 1023) {
			if (!$('.ftsns_list').hasClass('mbtype')) {
				$('.ftsns_list').addClass('mbtype').appendTo($('.ftcpara04'));
			}
			$('.taddress_w').css({ left: '' });
			$('.total_list').css({ height: '' });
			$('.tomitem_w').css({ height: '' });
			if (!$('.tsns_list_w').hasClass('out')) {
				$('.tsns_list_w').addClass('out').appendTo($('.total_menu_z'));
			}
		} else {
			if ($('.ftsns_list').hasClass('mbtype')) {
				$('.ftsns_list').appendTo($('.ftlayer02_w')).removeClass('mbtype');
			}
			if ($('.tomitem_w').length) {
				$('.taddress_w').css({ left: $('.tomitem_w').first().position().left });
			}
			$('.total_list').css({ height: $(window).height() });
			if ($('.tsns_list_w').hasClass('out')) {
				$('.tsns_list_w').appendTo($('.total_isc')).removeClass('out');
			}
			$('.tomitem').removeClass('active');
			$('.ttmitem_w').css({ display: '' });
			$('.btn_topgo_w').trigger('topgoRefresh');
		}
		funcThis.totalMenu();
	},
	commonInit: function () {
		var funcThis = this;
		// pc header
		function headerFunc() {
			var $gnbli = $('.gnb_list > li');
			var $total_menu_z = $('.total_menu_z');
			var $total_menu_w = $('.total_menu_w');
			var totalisc = null;

			if ($total_menu_w.length) {
				totalisc = new IScroll('.total_menu_w', {
					mouseWheel: true,
					preventDefault: false,
				});
				$total_menu_z.on('refresh', function () {
					totalisc.refresh();
				});
			}

			funcThis.totalMenu();

			$('.btn_htotal').on('click', function (e) {
				e.preventDefault();
				$('.total_menu_z').addClass('active');
				funcThis.totalMenu();
				setTimeout(function () {
					totalisc.refresh();
					//$total_menu_z.trigger("refresh");
				}, 700);
				if (funcThis.touchis) {
					document.ontouchmove = function (e) {
						e.preventDefault();
					};
					$('body,html')
						.addClass('touchDis2')
						.on('touchmove', function (e) {
							e.preventDefault();
						});
					if ($(window).width() <= 1023) {
						if ($('.total_list > li').last().hasClass('active')) {
							totalisc.scrollTo(
								0,
								-(
									$('.total_menu_w').outerHeight() -
									$('.total_isc').outerHeight()
								)
							);
						}
					}
				}
			});
			//$(".btn_htotal").trigger("click");

			$('.btn_total_close').on('click', function (e) {
				e.preventDefault();
				$('.total_menu_z').removeClass('active');
				if (funcThis.touchis) {
					document.ontouchmove = function (e) {
						return true;
					};
					$('body,html').removeClass('touchDis2').off('touchmove');
				}
			});
			$gnbli.hoverIntent({
				over: function () {
					var $this = $(this),
						$t_tmitem_w = $this.find('.tmitem_w'),
						$t_gmitem = $this.find('.gmitem');
					$this.addClass('active');
					$t_tmitem_w.stop().slideDown(function () {
						$t_tmitem_w.addClass('complete');
					});
				},
				out: function () {
					var $this = $(this),
						$t_tmitem_w = $this.find('.tmitem_w'),
						$t_gmitem = $this.find('.gmitem');
					$this.removeClass('active');
					$t_tmitem_w.removeClass('complete');
					$t_tmitem_w.slideUp();
				},
				interval: 30,
			});

			if (funcThis.touchis) {
				$('.gmitem').attr('href', 'javascript:;');
			}

			$('.nat_target').on('click', function (e) {
				e.preventDefault();
				var $this = $(this),
					$t_nat_layer_w = $this.next('.nat_layer_w');

				if ($t_nat_layer_w.is(':animated')) {
					return;
				}
				$t_nat_layer_w.slideToggle();
			});
			$(document).on('click', function (e) {
				var natlayer = $('.nat_layer_w');
				if (
					$(e.target).is('.nat_target') ||
					$(e.target).parents('.nat_select_w').length ||
					natlayer.is(':animated')
				) {
					return;
				}
				natlayer.slideUp();
			});

			var $tomitem = $('.tomitem'),
				$ttmitemw = $('.ttmitem_w');
			$tomitem.on('click', function (e) {
				if ($(window).width() > 1023) {
					return;
				}
				e.preventDefault();
				var $this = $(this),
					$t_ttmitem_w = $this.next('.ttmitem_w');
				if ($tomitem.not($this).hasClass('active')) {
					$tomitem.not($this).removeClass('active');
					$ttmitemw.not($t_ttmitem_w).hide();
				}
				$this.toggleClass('active');
				$t_ttmitem_w.toggle();
				setTimeout(function () {
					totalisc.refresh();
					//$total_menu_z.trigger("refresh");
				}, 20);
			});

			$(window).on('resize', function () {
				totalisc.refresh();
			});
		}
		headerFunc();

		// top go
		var $btn_topgo_w = $('.btn_topgo_w'),
			$footer_wrap = $('.footer_wrap'),
			$footer_wrap_pos = 0,
			$footer_wrap_height = 0,
			$fixed_pos = 0;

		function btntopgoInit() {
			//$("body").append("<div id='debug' style='position:fixed;bottom:0;right:0;background:red;color:#fff;z-index:1000;padding:10px;' />");
			$footer_wrap_height = $footer_wrap.length
				? $footer_wrap.outerHeight()
				: 0;
			$footer_wrap_pos = $footer_wrap.length ? $footer_wrap.offset().top : 0;
			$fixed_pos =
				Math.floor(
					$footer_wrap_pos + $footer_wrap_height - $(window).height()
				) - 150;
			if ($(window).height() >= $(document).height()) {
				$btn_topgo_w.css({
					bottom: 'auto',
					top: $footer_wrap_pos,
				});
				return;
			}
			if (Math.floor($(window).scrollTop()) >= $fixed_pos) {
				$btn_topgo_w.css({
					top: '',
					bottom: $footer_wrap_height,
				});
			} else {
				$btn_topgo_w.css({
					bottom: 0,
				});
			}
			//$("body").append("<div id='debug' style='position:fixed;bottom:0;right:0;background:red;color:#fff;z-index:1000;padding:10px;' />");
			//$("#debug").html(Math.floor($(window).scrollTop())+", "+$fixed_pos);
		}
		$btn_topgo_w.on('topgoRefresh', function () {
			btntopgoInit();
		});

		btntopgoInit();
		$(window).on('scroll', function (e) {
			btntopgoInit();
		});

		// 상단으로 스크롤이동
		$('.btn_topgo').on('click', function (e) {
			setTimeout(function () {
				window.scrollTo(0, 0);
			}, 30);
		});
	},
	/* 구브라우저 미지원 팝업 */
	oldBrowerPop: function () {
		var innerHtml = '';
		if (navigator.appName.indexOf('Microsoft') > -1) {
			if (
				navigator.appVersion.indexOf('MSIE 7') > -1 ||
				navigator.appVersion.indexOf('MSIE 8') > -1 ||
				navigator.appVersion.indexOf('MSIE 9') > -1
			) {
				innerHtml += "<div class='browser_layer_w'>";
				innerHtml += "<div class='browser_layer'>";
				innerHtml += "<div class='brow_top'>미지원 브라우저 알림</div>";
				innerHtml += "<div class='brow_mid'>";
				innerHtml += "<p class='brow_mid_p'>";
				innerHtml += '웹사이트의 모든 기능을 이용하시려면<br>';
				innerHtml += '최신 브라우저로 업데이트하시기 바랍니다.';
				innerHtml += '</p>';
				innerHtml += "<p class='brow_btn_w'>";
				innerHtml +=
					"<a href='https://support.microsoft.com/ko-kr/help/17621/internet-explorer-downloads' class='brow_btn' target='_blank' title='새창'><span class='hdtext'>Internet Explorer 다운로드 바로가기</span></a>";
				innerHtml += '</p>';
				innerHtml += '</div>';
				innerHtml += '</div>';
				innerHtml += '</div>';
				$('body').append(innerHtml);
				$('.browser_layer').css({
					'margin-top': -$('.browser_layer').outerHeight() / 2,
				});
				$('.browser_layer_w').addClass('complete');
				$('.page_wrap').css({ 'z-index': 0 });
			}
		}
	},
	windowPopup: function (w, h, url) {
		cw = screen.availWidth; //화면 넓이
		ch = screen.availHeight; //화면 높이
		sw = w; //띄울 창의 넓이
		sh = h; //띄울 창의 높이
		ml = (cw - sw) / 2; //가운데 띄우기위한 창의 x위치
		mt = (ch - sh) / 2; //가운데 띄우기위한 창의 y위치
		test = window.open(
			url,
			'tst',
			'width=' +
				sw +
				',height=' +
				sh +
				',top=' +
				mt +
				',left=' +
				ml +
				',resizable=no,scrollbars=yes'
		);
	},
	dimLayerShow: function (option) {
		var $callbtn = null,
			touchIs = 'ontouchstart' in window,
			$modal = null,
			$target = null,
			transis = 'TransitionEvent' in window,
			$t_box = null,
			$t_td = null,
			objThis = this,
			$t_tpt = 0,
			$t_tpb = 0;

		$(function () {
			$callbtn = $('.haslayer');
			$modal = $('.dlayer_z');

			$target = $(option.target);
			$t_box = $target.find('.dlayer_box');
			$t_td = $target.find('.dlayer_td');
			$t_tpt = parseInt($t_td.css('padding-top'));
			$t_tpb = parseInt($t_td.css('padding-bottom'));

			if ($modal.length === 0) {
				return;
			}
			$modal.removeClass('active');
			$target.addClass('active');

			var boxzoneHeight = $t_box.outerHeight() + $t_tpt + $t_tpb;
			var varheight = 0;
			if (boxzoneHeight > $(window).height()) {
				varheight = boxzoneHeight;
			} else {
				varheight = $(window).height();
			}
			$('.page_wrap').css({ 'z-index': 0 });
			$t_box.css({ top: 0 });
			heightcheck();
			if ('openCallback' in option) {
				option.openCallback();
			}
			function heightcheck() {
				if (touchIs) {
					$('body')
						.data('data-scr', $(window).scrollTop())
						.css({ 'margin-top': -$(window).scrollTop() })
						.append($target);
					$('html').addClass('touchDis');
				} else {
					if (boxzoneHeight > $(window).height()) {
						$('html').addClass('touchDis2');
					}
				}
			}
			$modal.on('click', '.btn_dlayerclose,.closetrigger', function (e) {
				var $this = $(this),
					$t_p = $this.parents('.dlayer_z');
				e.preventDefault();
				objThis.dimLayerHide({ target: $t_p });
			});
		});
	},
	dimLayerHide: function (option) {
		var $callbtn = null,
			touchIs = 'ontouchstart' in window,
			$modal = null,
			$target = null,
			transis = 'TransitionEvent' in window,
			$t_box = null,
			$t_box_duration = 0;

		$(function () {
			$callbtn = $('.haslayer');
			$modal = $('.dlayer_z');

			$target = $(option.target);
			$t_box = $target.find('.dlayer_box');
			$t_td = $target.find('.dlayer_td');
			$t_tpt = parseInt($t_td.css('padding-top'));
			$t_tpb = parseInt($t_td.css('padding-bottom'));
			$t_box_duration = transis
				? $t_box.css('transition-duration').slice(0, -1) * 1000
				: 0;

			if ($modal.length === 0) {
				return;
			}
			var boxzoneHeight = $t_box.outerHeight() + $t_tpt + $t_tpb;
			var varheight = 0;

			if (boxzoneHeight > $(window).height()) {
				varheight = boxzoneHeight;
			} else {
				varheight = $(window).height();
			}

			$target.removeClass('active');
			$('.page_wrap').css({ 'z-index': '' });
			$('html,body').removeClass('touchDis touchDis2');
			scrollEnd();

			if ('closeCallback' in option) {
				option.closeCallback();
			}

			function scrollEnd() {
				if (touchIs) {
					$('body').css({ 'margin-top': 0 });
					window.scrollTo(0, Number($('body').data('data-scr')));
				}
			}
		});
	},
	mainFullPageLayout: function () {
		//window.location.href =  window.location.href.split("#")[0];
		var $mfull_vlow_w = $('.mfull_vlow_w');
		var funcThis = this;
		var afterResizeTime = 0;
		var $myVideo = $('#myVideo');
		var $main_header = $('.page_wrap.main_wrap .header_wrap');
		var $main_footer = $('.page_wrap.main_wrap .footer_wrap');
		var $main_dotmenu_list_w = $('.main_dotmenu_list_w');
		var $main_dotmenu_list = $('.main_dotmenu_list');
		var $main_dotmenu_li = $('.main_dotmenu_list > li');
		var $url = window.location.href.split('#')[1];
		var $mvlow04 = $('.mvlow04');
		var $mfull_content_w = $('.mfull_content_w');

		$main_header.removeClass('type2');
		if ($url == 'mainlow01') {
			$main_header.removeClass('type2');
		} else if ($url == 'mainlow02') {
			$main_header.addClass('type2');
		} else if ($url == 'mainlow03') {
			$main_dotmenu_list_w.removeClass('type2');
			$main_header.removeClass('type2');
		} else if ($url == 'mainlow04') {
			$main_header.addClass('type2');
		}

		if ($mfull_vlow_w.length) {
			$mfull_vlow_w.fullpage({
				verticalCentered: true,
				// autoScrolling:false,
				anchors: ['mainlow01', 'mainlow02', 'mainlow03', 'mainlow04'],
				menu: '.main_dotmenu_list',
				scrollOverflow: true,
				onLeave: function (index, nextIndex, direction) {
					$main_header.removeClass('type2');
					$main_dotmenu_li.removeClass('active');
					if (nextIndex !== 5) {
						$main_dotmenu_list_w.removeClass('type2');
						$main_dotmenu_li.eq(4).addClass('active');
						$main_header.removeClass('type2');
					}
					if (index == 0) {
						$myVideo.play();
					} else if (index == 1) {
						$main_dotmenu_list_w.addClass('type2');
						$main_header.addClass('type2');
						if (nextIndex == 3) {
							$main_dotmenu_list_w.removeClass('type2');
							$main_header.removeClass('type2');
						}
					} else if (index == 2) {
					} else if (index == 3) {
						if (nextIndex === 2) {
							$main_dotmenu_list_w.addClass('type2');
							$main_header.addClass('type2');
						}
					} else if (index == 4) {
					} else {
						//$myVideo.pause();
					}
					if (nextIndex === 4) {
						$main_header.addClass('type2');
						$main_dotmenu_list_w.addClass('type2');
					}
					if (nextIndex === 3) {
						$main_header.removeClass('type2');
						$main_dotmenu_list_w.removeClass('type2');
					}
					if (nextIndex === 4 || index === 3) {
						$main_dotmenu_list_w.addClass('type2');
					}
					if (nextIndex === 2 || index === 1) {
						//$main_header.addClass("type2");
						//$main_dotmenu_list_w.addClass("type2");
					}
					console.log('index = ' + index, 'nextIndex = ' + nextIndex);
				},
				onSlideLeave: function (
					anchorLink,
					index,
					slideIndex,
					direction,
					nextSlideIndex
				) {
					console.log('index = ' + index, 'nextSlideIndex = ' + nextSlideIndex);
				},
				afterLoad: function (anchorLink, index) {
					//console.log("anchorLink = " +anchorLink );
					$main_header.removeClass('type2');
					if (anchorLink == 'mainlow01') {
						// intro
						if (!$('body').hasClass('normal_mode')) {
							$mfull_content_w.find('.mfull_copy_main').css({
								'transition-duration': '1200ms',
							});
							$mfull_content_w.find('.mfull_copy_sub').css({
								'transition-duration': '1200ms',
								'transition-delay': '700ms',
							});
							$mfull_content_w.addClass('motion_active');
						}
					} else if (anchorLink == 'mainlow02') {
						$main_header.addClass('type2');
						$main_dotmenu_list_w.addClass('type2');
						$('.mvlow02').addClass('motion_active');
					} else if (anchorLink == 'mainlow03') {
						$main_header.removeClass('type2');
						$('.mvlow03').addClass('motion_active');
					} else if (anchorLink == 'mainlow04') {
						$main_header.addClass('type2');
						$('.mvlow04').addClass('motion_active');
					}
				},
				afterResize: function () {
					mvlow4Height();
					if (afterResizeTime) {
						clearTimeout(afterResizeTime);
					}
					afterResizeTime = setTimeout(function () {
						if ($('html').hasClass('safari')) {
							return;
						}
						$.fn.fullpage.reBuild();
						$('body').removeClass('normal_mode');
						if ($(window).height() < 1023) {
							if (Gnt.touchis) {
								$.fn.fullpage.destroy('all');
							}
							$.fn.fullpage.setAutoScrolling(false);
							$('body').addClass('normal_mode');
							normalMode();
						} else {
							$.fn.fullpage.setAutoScrolling(true);
						}
						//
						console.log('resize');
					}, 30);
				},
			});
			$(window).on('load', function () {
				$('body').removeClass('normal_mode');
				if ($(window).height() < 900 || $(window).width() < 1023) {
					if (Gnt.touchis) {
						$.fn.fullpage.destroy('all');
					}
					$.fn.fullpage.setAutoScrolling(false);
					$('body').addClass('normal_mode');
					normalMode();
				} else {
					$.fn.fullpage.setAutoScrolling(true);
				}
				mvlow4Height();
				//$.fn.fullpage.reBuild();
				// motion
				objMotion();
			});
			/*
			$(window).on("resize",function(){
				if($(window).height()<900 || $(window).width()<1023){
					normalMode();
				}
			});*/

			function normalMode() {
				/*
				$.fn.fullpage({
	                scrollOverflow: false
	            });*/
				$main_header.removeClass('type2');
				$main_dotmenu_list_w.removeClass('type2');
				$('.mvlow01 ,.mfull_content_w').css('height', '');
				$('.mvlow01 .fp-tableCell').css('min-height', '');
				$('.mfull_vlow_w .section').removeClass('fp-auto-height');
				$('.mvlow01')
					.css('height', $(window).height())
					.removeClass('fp-auto-height');
				if ($(window).width() <= 1679) {
				} else {
					if ($(window).height() < 1023 && $(window).width() <= 1679) {
						$('.mfull_vlow_w .section').addClass('fp-auto-height');
					}
				}
			}

			/* motion */
			function objMotion() {
				// normal motion
				var mvlow02 = $('.mvlow02');
				var mvlow02_pos = 0;
				var mvlow03 = $('.mvlow03');
				var mvlow03_pos = 0;
				var mvlow04 = $('.mvlow04');
				var mvlow04_pos = 0;

				if ($('body').hasClass('normal_mode')) {
					$mfull_content_w.removeClass('motion_active');
					$mfull_content_w.find('.mfull_copy_main').css({
						'transition-duration': '',
					});
					$mfull_content_w.find('.mfull_copy_sub').css({
						'transition-duration': '',
						'transition-delay': '',
					});
					setTimeout(function () {
						$mfull_content_w.find('.mfull_copy_main').css({
							'transition-duration': '1200ms',
						});
						$mfull_content_w.find('.mfull_copy_sub').css({
							'transition-duration': '1200ms',
							'transition-delay': '700ms',
						});
						$mfull_content_w.addClass('motion_active');
					}, 100);
				}
				$(window).on('scroll', function (e) {
					mvlow02_pos = mvlow02.offset().top - 400;
					mvlow03_pos = mvlow03.offset().top - 400;
					mvlow04_pos = mvlow04.offset().top - 400;

					if ($(this).scrollTop() > mvlow02_pos) {
						mvlow02.addClass('motion_active');
					}

					if ($(this).scrollTop() > mvlow03_pos) {
						mvlow03.addClass('motion_active');
					}

					if ($(this).scrollTop() > mvlow04_pos) {
						mvlow04.addClass('motion_active');
					}
				});
			}
		}

		function mvlow4Height() {
			var $height = $mvlow04.length ? $mvlow04.outerHeight() : 0;
			var $height_footer = $main_footer.length ? $main_footer.outerHeight() : 0;
			var $mcdev_contlow = $('.mcdev_contlow');
			if ($(window).height() >= $height) {
				$mvlow04.removeClass('fp-auto-height');
				//$mcdev_contlow.css("padding-bottom",$height_footer);
				$main_footer.addClass('layer');
			} else {
				$mvlow04.addClass('fp-auto-height');
				$mcdev_contlow.css('padding-bottom', '');
				$main_footer.removeClass('layer');
			}
		}
	},
	bottomMainBanner: function () {
		var $mctxtban = $('.mctxtban'),
			mctxtban_length = $mctxtban.length;

		var mctxtban_obj = new Swiper('.swiper-container.mctxtban_w', {
			init: false,
			pagination: {
				el: '.swiper-pagination.mctxtban_paging',
				clickable: true,
			},
		});
		mctxtban_obj.on('init', function () {
			if ($('.mctxtban_w').find('.nodata_para').length) {
				$('.mctxtban_paging').hide();
				$('.mctxtban_w').addClass('nodata_type');
			}
			$.fn.fullpage.reBuild();
		});
		// init Swiper
		mctxtban_obj.init();
	},
	reportMainScroll: function () {
		var $has_mbscroll = $('.has_mbscroll'),
			$mbscroll_obj = null;

		if ($has_mbscroll.length) {
			$mbscroll_obj = new IScroll('.has_mbscroll', {
				eventPassthrough: true,
				scrollX: true,
				scrollY: false,
				preventDefault: false,
				bounce: false,
			});
			$has_mbscroll.on('enable', function () {
				$mbscroll_obj.enable();
			});
			$has_mbscroll.on('disable', function () {
				$mbscroll_obj.disable();
			});
		}
	},
	reportMainResize: function () {
		var $has_mbscroll = $('.has_mbscroll');
		if ($has_mbscroll.length) {
			if ($(window).width() <= 1023) {
				$has_mbscroll.trigger('enable');
			} else {
				$has_mbscroll.trigger('disable');
			}
		}
	},
};
Gnt.init();

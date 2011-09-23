/*
 * mobile listview unit tests
 */

// TODO split out into seperate test files
(function( $ ){
	module( "Collapsible section", {});

	asyncTest( "The page should enhanced correctly", function(){
		$.testHelper.pageSequence([
			function(){
				$.testHelper.openPage( "#basic-collapsible-test" );
			},

			function() {
				var $page = $( "#basic-collapsible-test" );
				ok($page.find( ".ui-content >:eq(0)" ).hasClass( "ui-collapsible" ), ".ui-collapsible class added to collapsible elements" );
				ok($page.find( ".ui-content >:eq(0) >:header" ).hasClass( "ui-collapsible-heading" ), ".ui-collapsible-heading class added to collapsible heading" );
				ok($page.find( ".ui-content >:eq(0) > div" ).hasClass( "ui-collapsible-content" ), ".ui-collapsible-content class added to collapsible content" );
				ok($page.find( ".ui-content >:eq(0)" ).hasClass( "ui-collapsible-collapsed" ), ".ui-collapsible-collapsed added to collapsed elements" );
				ok(!$page.find( ".ui-content >:eq(1)" ).hasClass( "ui-collapsible-collapsed" ), ".ui-collapsible-collapsed not added to expanded elements" );
				ok($page.find( ".ui-collapsible.ui-collapsible-collapsed" ).find( ".ui-collapsible-heading-toggle > .ui-btn-inner" ).hasClass( "ui-corner-top ui-corner-bottom" ), "Collapsible header button should have class ui-corner-all" );
				start();
			}
		]);
	});

	asyncTest( "Expand/Collapse", function(){
		$.testHelper.pageSequence([
			function(){
				$.testHelper.openPage( "#basic-collapsible-test" );
			},

			function() {
				ok($( "#basic-collapsible-test .ui-collapsible" ).eq(0).hasClass( "ui-collapsible-collapsed" ), "First collapsible should be collapsed");
				$( "#basic-collapsible-test .ui-collapsible-heading-toggle" ).eq(0).click();
				ok(!$( "#basic-collapsible-test .ui-collapsible" ).eq(0).hasClass( "ui-collapsible-collapsed" ), "First collapsible should be expanded after click");
				$( "#basic-collapsible-test .ui-collapsible-heading-toggle" ).eq(0).click();
				ok($( "#basic-collapsible-test .ui-collapsible" ).eq(0).hasClass( "ui-collapsible-collapsed" ), "First collapsible should be collapsed");
				start();
			}
		]);
	});

	module( "Collapsible set", {});

	asyncTest( "The page should enhanced correctly", function(){
		$.testHelper.pageSequence([
			function(){
				$.testHelper.openPage( "#basic-collapsible-set-test" );
			},

			function() {
				var $page = $( "#basic-collapsible-set-test" );

				ok($page.find( ".ui-content >:eq(0)" ).hasClass( "ui-collapsible-set" ), ".ui-collapsible-set class added to collapsible set" );
				ok($page.find( ".ui-content >:eq(0) > div" ).hasClass( "ui-collapsible" ), ".ui-collapsible class added to collapsible elements" );
				$page.find( ".ui-collapsible-set" ).each(function() {
					var $this = $( this );
					ok($this.find( ".ui-collapsible" ).first().find( ".ui-collapsible-heading-toggle > .ui-btn-inner" ).hasClass( "ui-corner-top" ), "First collapsible header button should have class ui-corner-top" );
					ok($this.find( ".ui-collapsible" ).last().find( ".ui-collapsible-heading-toggle > .ui-btn-inner" ).hasClass( "ui-corner-bottom" ), "Last collapsible header button should have class ui-corner-bottom" );
				});

				start();
			}
		]);
	});

	asyncTest( "Collapsible set with only one collapsible", function() {
		$.testHelper.pageSequence([
			function(){
				$.testHelper.openPage( "#collapsible-set-with-lonely-collapsible-test" );
			},

			function() {
				var $page = $( "#collapsible-set-with-lonely-collapsible-test" );
				$page.find( ".ui-collapsible-set" ).each(function() {
					var $this = $( this );
					ok($this.find( ".ui-collapsible" ).first().find( ".ui-collapsible-heading-toggle > .ui-btn-inner" ).hasClass( "ui-corner-top" ), "First collapsible header button should have class ui-corner-top" );
					ok($this.find( ".ui-collapsible" ).last().find( ".ui-collapsible-heading-toggle > .ui-btn-inner" ).hasClass( "ui-corner-bottom" ), "Last collapsible header button should have class ui-corner-bottom" );
				});

				start();
			}
		]);
	});

	asyncTest( "Section expanded by default", function(){
		$.testHelper.pageSequence([
			function(){
				$.testHelper.openPage( "#basic-collapsible-set-test" );
			},

			function() {
				equals($( "#basic-collapsible-set-test .ui-content >:eq(0) .ui-collapsible-collapsed" ).length, 2, "There should be 2 section collapsed" );
				ok(!$( "#basic-collapsible-set-test .ui-content >:eq(0) >:eq(1)" ).hasClass( "ui-collapsible-collapsed" ), "Section B should be expanded" );
				start();
			}
		]);
	});

	asyncTest( "Expand/Collapse", function(){
		$.testHelper.pageSequence([
			function(){
				$.testHelper.openPage( "#basic-collapsible-set-test" );
			},

			function() {
				ok($( "#basic-collapsible-set-test .ui-collapsible" ).eq(0).hasClass( "ui-collapsible-collapsed" ), "First collapsible should be collapsed");
				$( "#basic-collapsible-set-test .ui-collapsible-heading-toggle" ).eq(0).click();
				ok(!$( "#basic-collapsible-set-test .ui-collapsible" ).eq(0).hasClass( "ui-collapsible-collapsed" ), "First collapsible should be expanded after click");
				$( "#basic-collapsible-set-test .ui-collapsible-heading-toggle" ).eq(0).click();
				ok($( "#basic-collapsible-set-test .ui-collapsible" ).hasClass( "ui-collapsible-collapsed" ), "All collapsible should be collapsed");
				start();
			}
		]);
	});


})( jQuery );
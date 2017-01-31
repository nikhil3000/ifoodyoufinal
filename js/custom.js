$(function() {
	"use strict";
	if (top != self) top.location.replace(self.location.href);
	$("#menuzord").menuzord({
		align: "right",
		effect: "fade",
		animation: "drop-left"
	});

	if( $().owlCarousel ){
		$(".food-item-inner").owlCarousel({

	     //Set AutoPlay to 3 seconds
		  autoPlay:false,
		  margin: 20,
		  navigation: true,
		  navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		  pagination: false,
		  responsive:{
				  320:{
					  items:1
				  },
				  480:{
					  items:1
				  },
				  667:{
					  items:1
				  },
				  768:{
					  items:2
				  },
				  992:{
					  items:3
				  }
			  }
	  });

	   $(".slider2-inner").owlCarousel({

		 //Set AutoPlay to 3 seconds
		  autoPlay:false,
		  navigation: true,
		  navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		  pagination: false,
		  items : 1,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,2]

	  });

	  $(".event-item-feature").owlCarousel({

	     //Set AutoPlay to 3 seconds
		  autoPlay:false,
		  navigation: false,
		  pagination: false,
	      items : 2,
		  responsive:{
				  320:{
					  items:1
				  },
				  480:{
					  items:1
				  },
				  667:{
					  items:2
				  },
				  767:{
					  items:2
				  },
				  768:{
					  items:3
				  },
				  992:{
					  items:3
				  }
			  }
	  });

	   $(".event-item-feature2").owlCarousel({

	     //Set AutoPlay to 3 seconds
		  autoPlay:false,
		  navigation: false,
		  pagination: false,
	      items : 3,
		  responsive:{
			   320:{
				   items:1
			   },
			   480:{
				   items:1
			   },
			   667:{
				   items:2
			   },
			   768:{
				   items:3
			   },
			   992:{
				   items:3
			   }
		   }

	  });

	  $(".large-blog-item").owlCarousel({

	     //Set AutoPlay to 3 seconds
		  autoPlay:false,
		  navigation: true,
		  navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		  pagination: false,
	      items : 1,
	      itemsDesktop : [1199,3],
	      itemsDesktopSmall : [979,2]

	  });
	    $(".related-post-feature").owlCarousel({

	     //Set AutoPlay to 3 seconds
		  autoPlay:false,
		  navigation: false,
		  pagination: false,
	      items : 3,
		  responsive:{
				  320:{
					  items:1
				  },
				  480:{
					  items:1
				  },
				  667:{
					  items:2
				  },
				  768:{
					  items:3
				  },
				  992:{
					  items:3
				  }
			  }
	  });

		 $(".product-stock-feature").owlCarousel({

	     //Set AutoPlay to 3 seconds
		  autoPlay:false,
		  navigation: false,
		  pagination: false,
	      items : 4,
		  responsive:{
				  320:{
					  items:1
				  },
				  480:{
					  items:1
				  },
				  667:{
					  items:2
				  },
				  768:{
					  items:3
				  },
				  992:{
					  items:3
				  }
			  }
	  });
	}

	// Mixit Up, Photo Filter
	$('#product-grid').mixItUp();

});

// This will create a single gallery from all elements that have class "gallery-item"

	if( $().magnificPopup ){
		$('#gallery2').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery:{
			enabled:true
			}
		});

		$('.food-item').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery:{
			enabled:true
			}
		});

		$('.product-list-box').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery:{
				enabled:true
			}
		});
	}

	if( $().datepicker ){
		$(".date-picker").datepicker();
		$(".date-picker").on("change", function () {
			var id = $(this).attr("id");
			var val = $("label[for='" + id + "']").text();
			$("#msg").text(val + " changed");
		});
	}

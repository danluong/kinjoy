jQuery(document).ready(function(t){var n=t(".masonry-container"),o=!1;if(n.length){var i=n.masonry({columnWidth:".grid-sizer",itemSelector:"none",stamp:".page-header",percentPosition:!0,stagger:30,visibleStyle:{transform:"translateY(0)",opacity:1},hiddenStyle:{transform:"translateY(5px)",opacity:0}});o=i.data("masonry"),i.imagesLoaded(function(){i.masonry("layout"),i.removeClass("are-images-unloaded"),t(".load-more").removeClass("are-images-unloaded"),t("#nav-below").css("opacity","1"),i.masonry("option",{itemSelector:".masonry-post"});var n=i.find(".masonry-post");i.masonry("appended",n)}),t("#nav-below").insertAfter(".masonry-container"),t(window).on("orientationchange",function(n){i.masonry("layout")})}if(t(".infinite-scroll").length&&t(".nav-links .next").length){var l=t("#main article").first().parent(),r=t(".load-more a");l.infiniteScroll({path:".nav-links .next",append:"#main article",history:!1,outlayer:o,loadOnScroll:!r.length,button:r.length?".load-more a":null,scrollThreshold:!r.length&&600}),r.on("click",function(n){t(this).html(blog.icon+blog.loading).addClass("loading")}),l.on("append.infiniteScroll",function(n,o,e,a){t(".generate-columns-container").length||l.append(r.parent()),t(a).find("img").each(function(n,o){o.outerHTML=o.outerHTML}),i&&i.imagesLoaded(function(){i.masonry("layout")}),r.html(blog.icon+blog.more).removeClass("loading")}),l.on("last.infiniteScroll",function(){t(".load-more").hide()})}});
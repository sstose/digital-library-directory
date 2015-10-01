Drupal.behaviors.taxonomymainMenu = function (context) {
  $('#headercontainer #taxonomymainmenu .taxtop', context)
    .addClass('slideBlocks-processed')
    .each(function () {
      $(this).children(".open").toggle(        
        function () { 
          $(this).siblings(".list").slideDown("slow");
        },
        function () {
          $(this).siblings(".list").slideUp("slow");
        });
    });
};




/*
If want all to slide down on click
Drupal.behaviors.taxonomymainMenu = function (context) {
  $('#taxonomymainmenu .taxtop .open', context).click

    (function () {
      $("#taxonomymainmenu .taxtop .list").slideToggle()
        });
};

Drupal.behaviors.taxonomyOpenAllCategories = function (context) {
  $("#block-block-18 .block-content a", context).click(function() {
    $("#taxonomymainmenu .taxtop .list").slideToggle();

    });
};

*/



Drupal.behaviors.filterBlock = function (context) {
  $('#block-views--exp-dl_view_grid-page_1 .block-inner, #block-views--exp-dl_view_list-page_1 .block-inner, #block-quicktabs-maptabs .block-inner', context)
    .addClass('slideBlocks-processed')

    .each(function () {

      $(this).children(".block-title").toggle(
        

        function () { 
          $(this).siblings(".block-content").slideDown("slow");
        },
        function () {
          $(this).siblings(".block-content").slideUp("slow");
        });
    });
};




Drupal.behaviors.guidedSearch = function (context) {
  $('#tertiary-content .faceted-search-facet', context)
    .addClass('slideBlocks-processed')
    .each(function () {
      $(this).children("h3").toggle(
        function () { 
          $(this).siblings(".item-list").slideDown("slow");
        },
        function () {
          $(this).siblings(".item-list").slideUp("slow");
        });
    });
};


Drupal.behaviors.guidedOpenall = function (context) {
  $('#leaderboard-top .block-faceted_search_ui .block-inner', context)
    .addClass('slideBlocks-processed')
    .each(function () {
      $(this).children(".block-title").toggle(
        function () { 
          $(this).siblings(".block-content").slideDown("slow");
        },
        function () {
          $(this).siblings(".block-content").slideUp("slow");
        });
    });
};




Drupal.behaviors.guidedSearchTab = function (context) {
  $('.quicktabs_tabpage #block-faceted_search_ui-1_guided .faceted-search-facet, .quicktabs_tabpage #block-faceted_search_ui-2_guided .faceted-search-facet', context)
    .addClass('slideBlocks-processed')
    .each(function () {
      $(this).children("h3").toggle(
        function () { 
          $(this).siblings(".item-list").slideDown("slow");
        },
        function () {
          $(this).siblings(".item-list").slideUp("slow");
        });
    });
};



Drupal.behaviors.iFrame = function (context) {
  $('.field-type-iframe', context)
    .addClass('slideBlocks-processed')

    .each(function () {
      $(this).children(".field-label").toggle(
        

        function () { 
          $(this).siblings(".field-items").slideDown("slow");
        },
        function () {
          $(this).siblings(".field-items").slideUp("slow");
        });
    });
};


Drupal.behaviors.taxonomyOpenSidebars132 = function (context) {
  $("#sidebar-left .faceted-search-facet--taxonomy--132 h3", context).click(function() {
    $("#sidebar-left .faceted-search-facet--taxonomy--132 .item-list").slideToggle();
    });
};
Drupal.behaviors.taxonomyOpenSidebars131 = function (context) {
  $("#sidebar-left .faceted-search-facet--taxonomy--131 h3", context).click(function() {
    $("#sidebar-left .faceted-search-facet--taxonomy--131 .item-list").slideToggle();
    });
};
Drupal.behaviors.taxonomyOpenSidebars133 = function (context) {
  $("#sidebar-left .faceted-search-facet--taxonomy--133 h3", context).click(function() {
    $("#sidebar-left .faceted-search-facet--taxonomy--133 .item-list").slideToggle();
    });
};
Drupal.behaviors.taxonomyOpenSidebars128 = function (context) {
  $("#sidebar-left .faceted-search-facet--taxonomy--128 h3", context).click(function() {
    $("#sidebar-left .faceted-search-facet--taxonomy--128 .item-list").slideToggle();
    });
};
Drupal.behaviors.taxonomyOpenSidebars116 = function (context) {
  $("#sidebar-left .faceted-search-facet--taxonomy--116 h3", context).click(function() {
    $("#sidebar-left .faceted-search-facet--taxonomy--116 .item-list").slideToggle();
    });
};
Drupal.behaviors.taxonomyOpenSidebars111 = function (context) {
  $("#sidebar-left .faceted-search-facet--taxonomy--111 h3", context).click(function() {
    $("#sidebar-left .faceted-search-facet--taxonomy--111 .item-list").slideToggle();
    });
};
Drupal.behaviors.taxonomyOpenSidebars90 = function (context) {
  $("#sidebar-left .faceted-search-facet--taxonomy--90 h3", context).click(function() {
    $("#sidebar-left .faceted-search-facet--taxonomy--90 .item-list").slideToggle();
    });
};
Drupal.behaviors.taxonomyOpenSidebars93 = function (context) {
  $("#sidebar-left .faceted-search-facet--taxonomy--93 h3", context).click(function() {
    $("#sidebar-left .faceted-search-facet--taxonomy--93 .item-list").slideToggle();
    });
};
Drupal.behaviors.taxonomyOpenSidebars110 = function (context) {
  $("#sidebar-left .faceted-search-facet--taxonomy--110 h3", context).click(function() {
    $("#sidebar-left .faceted-search-facet--taxonomy--110 .item-list").slideToggle();
    });
};


Drupal.behaviors.addGridListClass = function (context) {
  $('.gridlistview .view-content', context)
    .addClass('grid_view');
    };


Drupal.behaviors.gridlistFunction = function (context) {
   $('#block-block-19 button').click(function() {
       if ($(this).hasClass('list')) {
           $('.gridlistview .view-content').removeClass('grid_view').addClass('list_view');
       }
       else if($(this).hasClass('grid')) {
           $('.gridlistview .view-content').removeClass('list_view').addClass('grid_view');
       }
   });
};













/*

Drupal.behaviors.comments = function (context) {
  $('#comments', context)
    .addClass('slideBlocks-processed')

    .each(function () {
      $(this).children(".comment, .indented, .box").hide()
      $(this).children("#comments-title").toggle(
        

        function () { 
          $(this).siblings(".comment, .indented, .box").slideDown("slow");
        },
        function () {
          $(this).siblings(".comment, .indented, .box").slideUp("slow");
        });
    });
};



Drupal.behaviors.commentspost = function (context) {
  $('#comments .box-inner', context)
    .addClass('slideBlocks-processed')

    .each(function () {
      $(this).children(".box-content").hide()
      $(this).children("h2.box-title").toggle(
        

        function () { 
          $(this).siblings(".box-content").slideDown("slow");
        },
        function () {
          $(this).siblings(".box-content").slideUp("slow");
        });
    });
};


/**
Drupal.behaviors.subjectToggle = function() {
  $('#edit-tid-1126-wrapper, #edit-tid-1141-wrapper, #edit-tid-1195-wrapper')
    .addClass('bef-tree-child-new')

    .each(function () {
      $(".bef-tree-child").hide()
      $(this).toggle(
        

        function () { 
          $(this).siblings(".bef-tree-child").slideDown("slow");
        },
        function () {
          $(this).siblings(".bef-tree-child").slideUp("slow");

        });
      

       
    });
};

*/


// Source: http://stackoverflow.com/questions/23906956/show-loading-icon-until-the-page-is-load.
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('loading').style.visibility="hidden";
         document.getElementById('wrapper').style.visibility="visible";
      }, 2000);
  }
}

$(window).load(function() {
  /* Team Page | Source: http://jsfiddle.net/desandro/9pSyj/ | http://stackoverflow.com/questions/26538929/jquery-isotope-how-to-sort-alphabetically | http://stackoverflow.com/questions/10163699/jquery-isotope-option-for-auto-height-on-element */
  var $grid = $('#team-list .row').isotope({
    itemSelector: '.team-member'
  });
  $('#select-usertype, #select-userrole').on( 'change', function() {
    var filterValue = this.value;
    $grid.isotope({ filter: filterValue });
  });
});

$(document).ready(function() {

    /* Sidenav */
    $(".slider").click(function() {
      $("#sidenav").toggleClass("is-admin");
    });

    /* Project Page */
    $('.dash-toggle').click(function() {
      $('.dash-content').toggleClass('toggled');
    });
    $("input[name$='project']").click(function() {
        var test = $(this).val();
        $(".project-standard").hide();
        $(".project" + test).show();
    }); // Source: http://jsfiddle.net/VgAgu/3/
    $(".timeline").hide();
    $('.btn-team-listview').click(function(){
        $(".tbl-assigned-members").show();
        $(".tbl-assigned-members").siblings(".tablesaw-bar").show();
        $(".timeline").hide();
    });
    $('.btn-team-gridview').click(function(){
        $(".timeline").show();
        $(".tbl-assigned-members").hide();
        $(".tbl-assigned-members").siblings(".tablesaw-bar").hide();
    }); // Source: http://jsfiddle.net/j3PFE/

    /* Time Entry Page */
    $(".input-datepicker").datepicker({
      format: "dd MM, yyyy"
    });
    $(".input-startdate, .input-enddate, .input-startingdate, .input-endingdate, .input-closingdate").datepicker({
      format: "yyyy-mm-dd"
    });
    $("#fancytree, .all-tasks").fancytree();
    $('.fancytree-icon').each(function(){
        $(this).next('span').andSelf().wrapAll('<a class="fancytree-hover" data-toggle="popover" data-content="<div class=\'btn-group\'><button class=\'btn btn-default\'>Log Time</button><button class=\'btn btn-default\'>Start Timer</button><button class=\'btn btn-default\'>Details</button></div>">');
    });
    $('[data-toggle="popover"]').popover(
      {
        trigger: "click",
        html: true,
        container: "body"
      }
    );
    // Source: http://stackoverflow.com/questions/3475594/jquery-use-wrap-to-wrap-multiple-elements
    $("#view-one, #view-three, #headers-one, #headers-three").hide();
    $("#task-list .btn-group button").click(function () {
        $('.view').hide().eq($(this).index()).show();
        $('.headers').hide().eq($(this).index()).show();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    }); // Source: http://stackoverflow.com/questions/25365491/jquery-tab-like-effect-show-hide-div-on-click
    var $tasksListDropdown = $('#task-directory .btn-group').clone();
    var $tasksListContent = $('#task-directory .input, #task-directory #fancytree').clone();
    $('#tasks-list-modal .modal-header').append($tasksListDropdown);
    $('#tasks-list-modal .modal-body').append($tasksListContent);

    /* Dashboard Page */
    $(".tooltip-myteam").tooltip({
      placement: 'top'
    });
    // Task Details Modal
    $("#task-details-modal .nav-info").hide();
    $("#task-details-modal .modal-details").click(function () {
      $(this).find('i').toggleClass('fa-caret-up fa-caret-down');
      $(this).siblings(".nav-info").toggleClass("toggled");
      $(this).parents(".modal-body").find(".row").toggleClass("toggled");
      // $("#task-details-modal .nav-info").toggleClass("toggled");
    });
    // Notifications Toggle
    $(".feed-toggle").on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(".feed").toggleClass("active");
        $(document).one('click', function closeMenu(e) {
            if ($('.feed').has(e.target).length === 0) {
                $('.feed').removeClass('active');
            } else {
                $(document).one('click', closeMenu);
            }
        });
    });
    // Source: https://jsfiddle.net/q907731k/8/
    // Source: http://stackoverflow.com/questions/2868582/click-outside-menu-to-close-in-jquery

    // Sidebar Toggle
    $(".toggle a").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $(window).on("load resize", function() {
        var viewportWidth = $(window).width();
        if ($(this).width() < 992) {
            $("#wrapper").addClass("toggled");
        } else {
            $("#wrapper").removeClass("toggled");
        }
    });

    // Typeahead Snippets
    // Typehead for Time Entry dropdown
    var substringMatcher = function(strs) {
      return function findMatches(q, cb) {
        var matches, substringRegex;
        matches = [];
        substrRegex = new RegExp(q, 'i');
        $.each(strs, function(i, str) {
          if (substrRegex.test(str)) {
            matches.push(str);
          }
        });
        cb(matches);
      };
    };
    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
      'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
      'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
      'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
      'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
      'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
      'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
      'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
      'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    $('#input-time-entry, #input-collaborator, #input-tasks').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'states',
      source: substringMatcher(states)
    });
    // Typehead for Search in Primary Navigation.
    var nbaTeams = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: 'http://twitter.github.io/typeahead.js/data/nba.json'
    });
    var nhlTeams = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: 'http://twitter.github.io/typeahead.js/data/nhl.json'
    });
    $('.input-search.typeahead').typeahead({
        highlight: true
    }, {
        name: 'nba-teams',
        display: 'team',
        source: nbaTeams,
        templates: {
            header: '<h3 class="league-name">NBA Teams</h3>'
        }
    }, {
        name: 'nhl-teams',
        display: 'team',
        source: nhlTeams,
        templates: {
            header: '<h3 class="league-name">NHL Teams</h3>'
        }
    });

    // Drag and Drop Team Members
    // Source: http://jsfiddle.net/39khs/82/ && http://stackoverflow.com/questions/9279380/jquery-droppable-avoid-multiple-drops-of-the-same-object
    $(".draggable").draggable({
        cursor: "move",
        revert: "invalid",
        helper: "clone",
        opacity: 0.35,
        // snap: true
    });
    $(".droppable").droppable({
        tolerance: "intersect",
        accept: function(draggable) {
            return $(this).find("#member-" + draggable.attr("id")).length == 0;
        },
        drop: function(event, ui) {
            tag = ui.draggable;
            tag.clone().attr("id", "member-" + tag.attr("id")).prependTo(this);
            $(this).parent().removeClass("over");
        },
        over: function(event, elem) {
            $(this).parent().addClass("over");
        },
        out: function(event, elem) {
            $(this).parent().removeClass("over");
        }
    });
    // Widget Drag and Drop.
    var temp = $(".widgets > ul");
    temp.sortable({
        tolerance: 'pointer',
        revert: 'invalid',
        placeholder: 'placeholder tile',
        forceHelperSize: true,
        handle: ".panel-heading",
        cursor: "move"
    });
    // Source: https://jsfiddle.net/ramnathv/1064q7jm/.

    // Load More Tasks
    // Source: https://codepen.io/elmahdim/pen/sGkvH
    $("#my-tasks li").slice(0, 3).show('normal', function() {
        $(this).css('display', 'block');
    });
    $("#my-tasks .view-more").on('click', function(e) {
        e.preventDefault();
        $("#my-tasks li:hidden").slice(0, 3).slideDown('normal', function() {
            $(this).css('display', 'block');
        });
        if ($("#my-tasks li:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });

    // My ToDo Tasks
    // Source: https://codepen.io/elmahdim/pen/sGkvH
    $("#my-todo .tab-pane.active li").slice(0, 5).show('normal', function() {
        $(this).css('display', 'block');
    });
    $("#my-todo .view-more").on('click', function(e) {
        e.preventDefault();
        $("#my-todo .tab-pane.active li:hidden").slice(0, 5).slideDown('normal', function() {
            $(this).css('display', 'block');
        });
        if ($("#my-todo .tab-pane.active li:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });

    // HighCharts.js
    $('.projects-map').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Historic and Estimated Worldwide Population Growth by Region'
        },
        subtitle: {
            text: 'Source: Wikipedia.org'
        },
        xAxis: {
            categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Billions'
            },
            labels: {
                formatter: function() {
                    return this.value / 1000;
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' millions'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Asia',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Africa',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Europe',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'America',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: 'Oceania',
            data: [2, 2, 2, 6, 13, 30, 46]
        }]
    });
});

$(document).ready(function() {
				WireEvents();

		});

function WireEvents () {
    $(".navitem").mouseenter(function() {
        if (!$(this).hasClass("other-nonmetals")) {
            $(".group.other-nonmetals").addClass("not-selected");
        }
        if (!$(this).hasClass("noble-gases")) {
            $(".group.noble-gases").addClass("not-selected");
        }     
        if (!$(this).hasClass("halogens")) {
            $(".group.halogens").addClass("not-selected");
        }        
        if (!$(this).hasClass("metalloids")) {
            $(".group.metalloids").addClass("not-selected");
        }        
        if (!$(this).hasClass("alkaline-earth-metals")) {
            $(".group.alkaline-earth-metals").addClass("not-selected");
        }        
        if (!$(this).hasClass("alkali-metals")) {
            $(".group.alkali-metals").addClass("not-selected");
        }        
        if (!$(this).hasClass("transition-metals")) {
            $(".group.transition-metals").addClass("not-selected");
        }        
        if (!$(this).hasClass("post-transition-metals")) {
            $(".group.post-transition-metals").addClass("not-selected");
        }        
        if (!$(this).hasClass("lanthanoids")) {
            $(".group.lanthanoids").addClass("not-selected");
        }        
        if (!$(this).hasClass("actinoids")) {
            $(".group.actinoids").addClass("not-selected");
        }
    });
    
    $(".navitem").mouseleave(function() {
        $(".group").removeClass("not-selected");
    });
}

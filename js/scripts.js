$(document).ready(function() {
  $("#add-detail").click(function() {
    $("#new-details").append('<div class="new-detail">' +
                                 '<div class="form-group">' +
                                   '<label for="new-spot">Spot</label>' +
                                   '<input type="text" class="form-control new-spot">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-landmark">Landmark</label>' +
                                   '<input type="text" class="form-control new-landmark">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-season">Season</label>' +
                                   '<input type="text" class="form-control new-season">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-notes">Notes</label>' +
                                   '<input type="text" class="form-control new-notes">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-trip").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#new-place").val();

    var newTrip = { place: inputtedPlace, details: [] };

    $(".new-detail").each(function() {
      var inputtedSpot = $(this).find("input.new-spot").val();
      var inputtedLandmark = $(this).find("input.new-landmark").val();
      var inputtedSeason = $(this).find("input.new-season").val();
      var inputtedNotes = $(this).find("input.new-notes").val();

      var newDetail = { spot: inputtedSpot, landmark: inputtedLandmark, season: inputtedSeason, notes: inputtedNotes };
      newTrip.details.push(newDetail);
    });

    $("ul#trips").append("<li><span class='trip'>" + newTrip.place + "</span></li>");

    $(".trip").last().click(function() {
      $("#show-trip").show();

      $("#show-trip h2").text(newTrip.place);
      $(".place").text(newTrip.place);

      $("ul#details").text("");
      newTrip.details.forEach(function(detail) {
        $("ul#details").append("<li>spot: " + detail.spot + "</li><li>landmark: " + detail.landmark + "</li><li>season: " + detail.season + "</li><li>notes: " + detail.notes);
      });
    });

    $("input#new-place").val("");
    $("input.new-spot").val("");
    $("input.new-landmark").val("");
    $("input.new-season").val("");
    $("input.new-notes").val("");

  });
});

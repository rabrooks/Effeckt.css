var EffecktAlerts = {

  init: function() {

    this.bindUIActions();
  },

  bindUIActions: function() {
    var alertClose = $(".effeckt-alert-close"),
    self = this;
	    $(alertClose).on( Effeckt.buttonPressedEvent, function() {
	    	var el = this,
	    	transition = $(this).attr('data-effeckt-alert') ? $(this).attr('data-effeckt-alert') : null;
				self.alertsAnimation(el, transition);
	    });

  },
  
	alertsAnimation: function (el, transition) {
		var alertDiv = $(el).closest('.effeckt-alert');
		$(alertDiv).addClass('effeckt-alert-hide');
		if (transition !== null) {
			$(alertDiv).addClass(transition);
		}
	}

};

EffecktAlerts.init(); 
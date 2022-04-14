(function ( $ ) {
 
	$.fn.semanticTabs = function( options ) {

		var settings = $.extend({
			componentClass: 'semantic-tabs-component',
			head: 'h3',
			headsID: 'semantic-tabs-heads'
		}, options );

		this.prepend( `<ul id="${settings.headsID}"></ul>` );
		this.find( settings.head ).each(function( i ) {
			$( this ).hide().nextUntil( settings.head ).wrapAll( `<div class="${settings.componentClass}-${i} ${settings.componentClass}"></div>` );
			$( `#${settings.headsID}` ).append( `<li class="${settings.componentClass}-${i} ${settings.componentClass}">${$( this ).text()}</li>` );
		});
		this.find( `#${settings.headsID} li` ).on( 'click', function() {
			var component = $( this ).attr( 'class' ).split(' ')[0];

			$( `li.${settings.componentClass}` ).removeClass( 'active' );
			$( `li.${component}` ).addClass( 'active' );
			$( `div.${settings.componentClass}` ).hide();
			$( `div.${component}` ).show();
		});
		$( `li.${settings.componentClass}-0` ).addClass( 'active' );
		$( `div.${settings.componentClass}` ).hide();
		$( `div.${settings.componentClass}-0` ).show();
	
		return this;

	};
 
}( jQuery ));
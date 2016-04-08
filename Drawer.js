import $ from 'jquery';

export default class Drawer {

	constructor($el) {
		this.$el = $el;
		this.$container = $($el.data("drawer-container-selector"));
		this.$controller = $($el.data("drawer-controller-selector"));
		this.$container.addClass("drawer-container");
		this.on();

	}

	on() {
		this.$controller.on('click', this.toggle.bind(this));

		this.$el.on('click', this.close.bind(this));
		this.$el.children().on('click', function(event){
			event.stopPropagation();
		})
	}

	toggle(event) {
		event.preventDefault();
		if ( !this.$el.hasClass('is-drawer-open') ) {
			this.open();
		} else {
			this.close();
		}
	}

	open() {
		this.$el.addClass("is-drawer-open").addClass("is-open");
		this.$container.addClass("is-drawer-open");
		this.$controller.addClass("is-drawer-open").addClass("is-open");

	}

	close() {
		this.$el.removeClass("is-drawer-open").removeClass("is-open");
		this.$container.removeClass("is-drawer-open");
		this.$controller.removeClass("is-drawer-open").removeClass("is-open");

	}

	static init() {
		$("[data-drawer]").each(function(){
			new Drawer($(this));
		});
	}
}

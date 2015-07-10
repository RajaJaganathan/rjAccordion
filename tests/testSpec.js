describe('rjAccordion Test Suite', function () {

	it('should have rjAccordion methods on jquery prototype', function() {
		expect($.fn.rjAccordion).toBeDefined();
	});

	it('should be chainable rjAccordion', function() {
		expect($.fn.rjAccordion()).toBe($.fn);
	});

	it('should have rjAccordion defaults for options to override', function() {
		expect($.fn.rjAccordion.constructor.defaults).toBeDefined();
	});
})
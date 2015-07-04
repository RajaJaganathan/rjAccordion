/*!
 * rjAccordion jQuery Plugin v0.0
 * *
 * @author Raja Jaganathan 
 *  
 */
 (function($) {

     'use strict';

     function Accordion(element, options) {
         this.$element = $(element);
         this.options = $.extend({}, Accordion.defaults, options);
     }

     Accordion.prototype.constructor = Accordion;

     Accordion.defaults = {
         transition_delay: 300
     };

     Accordion.prototype.init = function() {
         var $this = this.$element;
         var options = this.options;

         function closeAccordionSection() {
             $this.find('.accordion-section-header').removeClass('active');
             $this.find('.accordion-section-content').slideUp(options.transition_delay).removeClass('open');
         }

         $this.find('.accordion-section-header').click(function(e) {             
             var currentAttrValue = $(this).data('target');

             if ($(e.target).is('.active')) {
                 closeAccordionSection();
             } else {
                 closeAccordionSection();
                 // Add active class to section header
                 $(this).addClass('active');
                 // Open up the hidden content panel                 
                 $this.find(currentAttrValue).slideDown(options.transition_delay).addClass('open');
             }

             e.preventDefault();
         });
     };

     var oldAccordion = $.fn.rjAccordion;

     $.fn.rjAccordion = function(options) {
         return this.each(function() {
             var data = new Accordion(this, options);
             data.init();
         });
     };

     $.fn.rjAccordion.constructor = Accordion;

     $.fn.rjAccordion.noConflict = function() {
         $.fn.rjAccordion = oldAccordion;
         return this;
     };

 })(window.jQuery);

console.log("I am special"),$(document).ready(function(){window.contacts=new ContactsCollection(data),contacts.each(function(a){new ListView({model:a})})});var data=[{name:"Joel Apple",phone:"654.345.4534",avatar:"http://www.californiabeat.org/wordpress/wp-content/uploads/2010/01/hipster2.jpg",bio:"Paleo tofu blog Carles skateboard, small batch keffiyeh dreamcatcher. VHS Thundercats hoodie, selfies ugh flannel readymade. Hella retro brunch, wayfarers locavore chia Portland Vice pour-over readymade occupy. Gastropub pork belly kale chips Terry Richardson chillwave. Cray biodiesel 3 wolf moon PBR bicycle rights hoodie, Brooklyn irony dreamcatcher jean shorts Pinterest Williamsburg flannel. Blue Bottle VHS pop-up, ennui hoodie try-hard ugh kitsch Portland fingerstache craft beer. Hashtag YOLO Cosby sweater, Carles synth squid artisan Truffaut meggings cardigan occupy gastropub skateboard."},{name:"Jake Please",phone:"233.456.5647",avatar:"http://31.media.tumblr.com/tumblr_m5frvvOMVm1rvpkxwo1_400.jpg",bio:"Odd Future gentrify meh biodiesel, Pitchfork polaroid Marfa Cosby sweater fingerstache meggings wolf +1 keffiyeh. Etsy YOLO Banksy, artisan flannel vegan organic. Pinterest Bushwick chia, Blue Bottle Neutra gastropub tousled single-origin coffee wayfarers. Banksy DIY readymade, vegan plaid umami mixtape Bushwick. Banjo forage Godard trust fund Shoreditch farm-to-table keytar meggings. You probably haven't heard of them cray tousled Odd Future. Gluten-free ethnic bicycle rights, squid street art slow-carb irony authentic tattooed gastropub locavore whatever 3 wolf moon shabby chic."},{name:"Cool Guy",phone:"453.478.0874",avatar:"http://rtbtaketwo.files.wordpress.com/2011/11/376693_280069778703713_100001020781015_939699_1101741616_n.jpg",bio:"Authentic kitsch keytar, mustache seitan gluten-free shabby chic butcher food truck velit pickled pop-up nisi. Nulla street art Tonx, master cleanse cillum DIY magna Terry Richardson flexitarian accusamus sriracha. High Life assumenda ex, sapiente next level nostrud post-ironic dolore cupidatat sartorial. Aesthetic ad reprehenderit street art, Cosby sweater readymade scenester swag small batch retro Banksy deserunt. 8-bit ex kale chips, Neutra gastropub Shoreditch stumptown dolore velit consequat Tumblr officia. Helvetica beard kogi chillwave selfies bitters. Reprehenderit keytar Truffaut, culpa veniam cillum gentrify sint 3 wolf moon vero ethical umami duis."}],Contact=Backbone.Model.extend({defaults:{name:"Matt",phone:"561.543.7466",avatar:"http://www.dadychery.org/wp-content/uploads/2012/02/Cool_guy_antiACTA.jpeg",bio:"Writing a personal bio can be a really fun way to put yourself out there, and there’s nothing like having a say in what people think about you. To write either a general bio or a bio for a college application, use the tips and sample text below."}}),ContactsCollection=Backbone.Collection.extend({model:Contact}),ListView=Backbone.View.extend({className:"list-item",createTemplate:_.template($("#list-item-template").text()),events:{"click .js-list-item-tainer":"toggleMainView"},initialize:function(){$(".js-contact-list").prepend(this.el),this.render()},render:function(){this.$el.html(this.createTemplate(this.model.attributes))},toggleMainView:function(){new MainView({model:this.model})}}),MainView=Backbone.View.extend({className:"main-item",createTemplate:_.template($("#main-item-template").text()),events:{"click .js-close":"closeMainView"},initialize:function(){$(".js-main-list").html(this.el),this.render()},render:function(){this.$el.html(this.createTemplate(this.model.attributes))},closeMainView:function(){this.remove()}});
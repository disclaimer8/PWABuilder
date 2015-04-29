import Ember from 'ember';

export default Ember.HTMLBars.makeBoundHelper(function(value, options) {
  console.log('Value',value,'Options',options);
  var escapedSrc = Ember.Handlebars.Utils.escapeExpression(options.src),
    escapedBase = Ember.Handlebars.Utils.escapeExpression(options.base);

    if(escapedBase.slice(-1) === '/'){
      escapedBase = escapedBase.substring(0, escapedBase.length - 1);
    }

    var url = escapedBase + '/'+ escapedSrc;

  return new Ember.Handlebars.SafeString('<img class=\'icon-preview\' src=\''+url+'\' />');
});

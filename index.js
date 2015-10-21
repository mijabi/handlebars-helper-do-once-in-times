module.exports.register = function (Handlebars, options)  {
  Handlebars.registerHelper("handlebars-helper-do-once-in-times", function(index_count, mod, block) {
    if(parseInt(index_count) % (mod) === 0 && index_count !== 0){
      return block.fn(this);
    }
  });
};

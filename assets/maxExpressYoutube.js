var hbs = require('express-handlebars');

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: __dirname + '/views/'
}));
app.set('views', path.join(__dirname, 'views'));

// block example
var ex =
  `
{{# if condition}}
condition is met
{{ else }}
condition is not met
{{/if}}

{{# each anyArray as |val key| }}

  {{ key }} : {{ this }}

{{/each}}




`;
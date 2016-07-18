/**
 * Created by sumitrag-david on 12/07/16.
 */

var example = {
  'verbosePlural': 'Examples',
  'verbose': 'Example',
  'entityName': 'example',
  'optional': false,
  'table_headers': ['Name', 'Phone', 'Main Street', 'Second Street','Type'],
  'actionFields': ['Edit', 'Delete'],
  'table': true,
  'tableActions': false,
  'haveMask': true,
  'typeMask': function(value) {
    var types = [{"type": "Home", "number": 1},
      {"type": "Office", "number": 2}
    ];
    for (var num in types) {
      if (value == types[num].number) {
        value = types[num].type;
      }
    }
    return value;
  }
};

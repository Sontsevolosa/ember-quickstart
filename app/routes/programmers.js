import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return ['Larry Page', 'Dennis Ritchie', 'Bill Gates'];
  }
});

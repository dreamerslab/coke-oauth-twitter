module.exports = function ( map ){
  map.resources( 'users' );
  map.get( '/','welcome#index' );

  map.get( 'login',         'sessions#new' );
  map.get( 'login/twitter', 'sessions#create' );
  map.get( 'logout',        'sessions#destroy' );
};

module.exports = {

  statics : {

    create : function ( args, next, created ){
      var twitter_id = args.twitter_id;
      var self       = this;

      this.findOne({
        twitter_id : twitter_id
      }, function ( err, user ){
        if( err )  return next( err );
        if( user ) return created( user );

        new self({
          twitter_id : twitter_id,
          name       : args.name,
          lang       : args.lang,
          avatar     : args.avatar
        }).
        save( function ( err, user, count ){
          if( err ) return next( err );

          created( user );
        });
      });
    },

    create_or_update : function ( user, props, callback ){
      user.name       = props.name;
      user.email      = props.email;
      user.twitter_id = 'x';
      user.lang       = 'en';
      user.avatar     = 'nothing';
      user.save( callback );
    }
  }
};

/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // mailgunDomain: 'transactional-mail.example.com',
  // mailgunSecret: 'key-testkeyb183848139913858e8abd9a3',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …
  BACKEND: {
    //Alwas SETTING URL = window.location.pathname to MATCH on frontend (main.js)
    ACTIVE: {
      ID: 'publish',
      URL: '?status=1'
    },
    DRAFT: {
      ID: 'draft',
      URL: '?status=0'
    },
    TRASH: {
      ID: 'trash',
      URL: '?status=3'
    },
  },
};

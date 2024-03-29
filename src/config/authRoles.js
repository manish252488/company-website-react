/**
 *
 *  [user role]: [role pages that can be accessed by this user]
 *
 * For Example:
 *  admin: [admin,superuser]               // admin and sales department can access the pages with the config sales.
 *  sales: [admin, sales,superuser]        // admin can access the pages with only admin config.
 *  superuser: [superuser]                 // superuser can access all pages.
 *  guest: [user,sales,admin,superuser]   //  guest pages can be access by all
 *
 *
 */

const authRoles = {
  user: ["user"], // the pages with user config can be accessed by roles: ["user"]
  user2: ["user2"],
  guest: ["guest", "user", "user2"], // the pages with guest config can be accessed by roles: [user,guest,admin]
};
export default authRoles;

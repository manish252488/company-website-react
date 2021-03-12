/**
 *
 *  [user role]: [role pages that can be accessed by this user]
 *
 * For Example:
 *  a user admin
 *  admin: [guest,sales,admin]
 *  sales: [guest, sales]
 *  can access the pages that have a config of guest, sales and admin,
 *  while the sales role can only access the pages with sale and guest config
 */

const authRoles = {
  user: ["user"],
  user2: ["user2"],
  guest: ["guest", "user", "user2"],
};
export default authRoles;

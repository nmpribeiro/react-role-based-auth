import { RBAuthRulesInterface } from '..';

/**
 * Example:
 */
export const rules: RBAuthRulesInterface<'admin' | 'visitor' | 'writer'> = {
  visitor: {
    static: [
      // visitor permissions
      // 'posts:list',
      'home-page:visit',
    ],
  },
  writer: {
    static: [
      // writer permissions
      // 'posts:list',
      // 'posts:create',
      'users:getSelf',
      'home-page:visit',
      'dashboard-page:visit',
    ],
    dynamic: {
      // 'posts:edit': ({ userId, postOwnerId }: { userId: string; postOwnerId: string }) => {
      //     if (!userId || !postOwnerId) return false;
      //     return userId === postOwnerId;
      // },
    },
  },
  admin: {
    static: [
      // admin permissions
      // 'posts:list',
      // 'posts:create',
      // 'posts:edit',
      // 'posts:delete',
      'users:get',
      'users:getSelf',
      'home-page:visit',
      'dashboard-page:visit',
    ],
  },
};

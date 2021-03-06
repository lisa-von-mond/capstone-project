export default {
  level: [
    {
      name: 'britney',
      id: '0',
      tracked: true,
      children: [
        {
          name: 'michael',
          id: '1',
          parent: 'britney',
          children: [
            {
              name: 'grace',
              id: '1.2',
              parent: 'britney',
              children: [
                {
                  name: 'leonardo',
                  id: '1.2.1',
                  parent: 'grace',
                  limit: true,
                  children: [],
                  angl: 90,
                  dist: 140,
                  ring: 0,
                },

                {
                  name: 'madonna',
                  id: '1.2.3',
                  parent: 'grace',
                  limit: true,
                  children: [],
                  angl: 350,
                  dist: 90,
                  ring: 0,
                },
              ],
              angl: 350,
              dist: 140,
              ring: 1,
            },
          ],
          angl: 350,
          dist: 160,
          ring: 1,
        },

        {
          name: 'marilyn',
          id: '2',
          parent: 'britney',
          children: [
            {
              name: 'christina',
              id: '2.1',
              parent: 'marilyn',
              limit: true,
              children: [],
              angl: 200,
              dist: 160,
              ring: 0,
            },
            {
              name: 'tom',
              id: '2.2',
              parent: 'marilyn',
              children: [
                {
                  name: 'taylor',
                  id: '2.2.1',
                  parent: 'tom',
                  limit: true,
                  focus: true,
                  children: [],
                  angl: 130,
                  dist: 140,
                  ring: 1,
                },
              ],
              tracked: true,
              active: true,
              angl: 80,
              dist: 140,
              ring: 0,
            },
          ],
          tracked: true,
          angl: 100,
          dist: 220,
          ring: 0,
        },

        {
          name: 'amy',
          id: '3',
          parent: 'britney',
          children: [
            {
              name: 'audrey',
              id: '3.1',
              parent: 'amy',
              limit: true,
              children: [],
              angl: 300,
              dist: 90,
              ring: 0,
            },

            {
              name: 'george',
              id: '3.2',
              parent: 'amy',
              limit: true,
              children: [],
              angl: 100,
              dist: 100,
              ring: 0,
            },
            {
              name: 'kurt',
              id: '3.3',
              parent: 'amy',
              children: [
                {
                  name: 'iggy',
                  id: '3.3.1',
                  parent: 'kurt',
                  limit: true,
                  children: [],
                  angl: 0,
                  dist: 90,
                  ring: 0,
                },

                {
                  name: 'marlene',
                  id: '3.3.2',
                  parent: 'kurt',
                  limit: true,
                  children: [],
                  angl: 190,
                  dist: 100,
                  ring: 1,
                },

                {
                  name: 'kate',
                  id: '3.3.3',
                  parent: 'kurt',
                  limit: true,
                  children: [],
                  angl: 300,
                  dist: 120,
                  ring: 0,
                },
              ],
              angl: 200,
              dist: 170,
              ring: 0,
            },
          ],
          angl: 260,
          dist: 180,
          ring: 0,
        },
      ],
    },
  ],

  max: 14,
  initialPosition: 'tom',
  initialId: '2.2.1',
  initialFocus: 'taylor',
  initialParent: 'marilyn',
  charge: 'kate',
  goal: 'christina',
  thisLevel: 5,
  nextLevel: false,
  atronautName: '',
  galaxyName: 'galaxy of fame',
};

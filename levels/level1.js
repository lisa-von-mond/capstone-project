export default {
  level: [
    {
      name: 'mars',
      id: '0',
      scope: 0,
      active: false,
      focus: false,
      tracked: true,
      limit: false,
      greens: false,
      goal: false,
      children: [
        {
          name: 'saturn',
          id: '1',
          scope: 1,
          active: false,
          focus: false,
          tracked: false,
          greens: true,
          goal: false,
          limit: true,
          flow: 1,
          children: [],
          angl: 50,
          dist: 200,
          ring: 0,
        },

        {
          name: 'jupiter',
          id: '2',
          scope: 1,
          active: false,
          focus: false,
          tracked: false,
          greens: false,
          goal: false,
          flow: 2,
          children: [
            {
              name: 'nuno',
              id: '2.1',
              scope: 2,
              active: false,
              focus: false,
              tracked: false,
              children: [],
              limit: true,
              greens: false,
              goal: true,
              flow: 1,
              angl: 210,
              dist: 100,
              ring: 0,
            },
          ],
          limit: false,
          angl: 170,
          dist: 130,
        },

        {
          name: 'neptun',
          id: '3',
          scope: 1,
          active: true,
          focus: false,
          tracked: true,
          greens: false,
          goal: false,
          flow: 3,
          children: [],
          limit: true,
          angl: 290,
          dist: 130,
          ring: 0,
        },
      ],
    },
  ],
  max: 8,
  initialId: 3,
  initialPosition: 'neptun',
  initialFocus: false,
  charge: 'saturn',
  goal: 'nuno',
  thislevel: 1,
  nextlevel: 'leveltwo',
};

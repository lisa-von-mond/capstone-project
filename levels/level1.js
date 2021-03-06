export default {
  level: [
    {
      name: 'zero',
      id: '0',
      tracked: true,
      children: [
        {
          name: 'una',
          id: '1',
          children: [
            {
              name: 'odin',
              id: '1.1',
              children: [],
              limit: true,
              parent: 'una',
              angl: 20,
              dist: 200,
              ring: 0,
            },

            {
              name: 'dva',
              id: '1.2',
              children: [],
              focus: true,
              limit: true,
              parent: 'una',
              angl: 220,
              dist: 100,
              ring: 2,
            },

            {
              name: 'tri',
              id: '1.3',
              children: [],
              limit: true,
              parent: 'una',
              angl: 320,
              dist: 100,
              ring: 0,
            },
          ],
          active: true,
          tracked: true,
          parent: 'zero',
          angl: 80,
          dist: 250,
          ring: 0,
        },
        {
          name: 'dos',
          id: '2',
          children: [
            {
              name: 'un',
              id: '2.1',
              children: [],
              limit: true,
              parent: 'dos',
              angl: 340,
              dist: 200,
              ring: 1,
            },

            {
              name: 'deux',
              id: '2.2',
              children: [],
              limit: true,
              parent: 'dos',
              angl: 20,
              dist: 130,
              ring: 0,
            },
          ],
          parent: 'zero',
          angl: 220,
          dist: 230,
          ring: 1,
        },
      ],
    },
  ],
  max: 8,
  initialId: '1',
  initialPosition: 'una',
  initialFocus: 'dva',
  initialParent: 'zero',
  charge: 'tri',
  goal: 'deux',
  thisLevel: 1,
  nextLevel: 'leveltwo',
  atronautName: '',
  galaxyName: 'abstract galaxy',
};

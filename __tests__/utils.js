jest.unmock('../src/utils');

import { getPropArrFromChildren } from '../src/utils';

describe('getPropArrFromChildren', () => {
  it('should extract an array of prop from and array of children components', () => {
    const children = [
      {
        props: {
          label: 'label 0',
          value: 0,
        },
      },
      {
        props: {
          label: 'label 1',
          value: 1,
        },
      },
    ];

    const expectedLabels = ['label 0', 'label 1'];
    const resultLabels = getPropArrFromChildren(children, 'label');

    expect(resultLabels).toBeTruthy();
    expect(resultLabels).toHaveLength(2);
    expect(JSON.stringify(resultLabels)).toBe(JSON.stringify(expectedLabels));

    const expectedValues = [0, 1];
    const resultValues = getPropArrFromChildren(children, 'value');

    expect(resultValues).toBeTruthy();
    expect(resultValues).toHaveLength(2);
    expect(JSON.stringify(resultValues)).toBe(JSON.stringify(expectedValues));
  });
});

/* eslint-disable import/prefer-default-export */

export const getPropArrFromChildren = (children, prop) => (
  children.map(({ props }) => props[prop])
);

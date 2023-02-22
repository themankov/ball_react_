import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={600}
    height={800}
    viewBox="0 0 600 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="50" y="0" rx="18" ry="18" width="280" height="320" />
    <rect x="83" y="341" rx="0" ry="0" width="211" height="45" />
    <rect x="85" y="400" rx="0" ry="0" width="208" height="22" />
  </ContentLoader>
);

export default Skeleton;

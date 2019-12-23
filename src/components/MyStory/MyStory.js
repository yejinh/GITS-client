import React, { useEffect } from 'react';

export default function MyStory({ fetchMyStories }) {
  useEffect(() => {
    fetchMyStories();
  }, [ fetchMyStories ]);

  return (
    <div>MY STORY</div>
  );
}

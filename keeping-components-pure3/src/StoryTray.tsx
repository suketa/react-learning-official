export default function StoryTray({ stories }) {
  const id = stories.length + 1;
  const newStory = { id: id, label: "New Story" };
  const newStories = [...stories, newStory];

  return (
    <ul>
      {newStories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}


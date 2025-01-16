function Drink({ name }) {
  let part;
  let content;
  let age;
  if (name === 'tea') {
    part = 'leaf';
    content = '15–70 mg/cup';
    age = '4,000+ years';
  } else {
    part = 'bean';
    content = '80–185 mg/cup';
    age = '1,000+ years';
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{content}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

const drinks = {
  tea: {
    part: 'leaf',
    content: '15–70 mg/cup',
    age: '4,000+ years',
  },
  coffee: {
    part: 'bean',
    content: '80–185 mg/cup',
    age: '1,000+ years',
  },
}

function Drink2({ name }) {
  const { part, content, age } = drinks[name];
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{content}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
      <hr />
      <Drink2 name="tea" />
      <Drink2 name="coffee" />
    </div>
  );
}


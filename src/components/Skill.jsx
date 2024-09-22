import Badge from './Badge';

const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'PHP',
    'Bootstrap',
    'ReactJS',
    'Laravel',
    'Sass',
    'Pemecahan Masalah',
    'Berpikir Kritis',
    'Manajemen Waktu',
    'Public Speaking'
  ];

  return (
    <div className="pb-4">
      {skills.map((skill, index) => (
        <Badge key={index} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;

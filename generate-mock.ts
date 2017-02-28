const faker = require('faker');
const rimraf = require('rimraf');
const fs = require('fs');

const sections = [
  'primary',
  'promotions',
  'social',
  'starred',
  'important',
  'sent',
  'drafts',
  'trash'
];

const directory = __dirname + '/src/app/mocks/json';

const createEmail = () => {
  return {
    id: faker.random.uuid(),
    from: {
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    },
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(),
    date: faker.date.recent(),
    read: faker.random.boolean()
  };
};

const createEmails = (count) => {
  const emails = [];
  while (count > 0) {
    emails.push(createEmail());
    count--;
  }
  return JSON.stringify(emails.sort((a,b) => b.date - a.date));
}

const createSections = (section) => {
  fs.writeFileSync(`${directory}/${section}.json`, createEmails(20), { flag: 'w' });
};


// delete all mock data
rimraf(`${directory}/*`, [], () => sections.forEach(createSections));

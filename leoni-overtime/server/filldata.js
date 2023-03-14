const faker = require('faker');

const database = {
  reports: []
};

for (let i = 1; i <= 150; i++) {
  database.reports.push({
    ID: i,
    Requestor_ID: faker.datatype.string(5),
    Requestor_WO: faker.datatype.string(5),
    Requestor_FullName: faker.name.findName(),
    Requestor_WO_Manager: faker.datatype.string(5),
    Requestor_Manager: faker.name.findName(),
    Requestor_Department: faker.datatype.string(5),
    Requestor_For_WO: faker.datatype.string(5),
    Requestor_For_Project: faker.datatype.string(5),
    Reason: faker.lorem.sentences(),
    Start_Time: faker.date.past(),
    End_Time: faker.date.past(),
    Minutes: faker.datatype.number({ max: 50 }),
    Status: faker.datatype.number({ max: 3 }),
    ResponseDate: faker.date.past(),
    CreateDate: faker.date.past()
  });
}

console.log(JSON.stringify(database));

let finalObject = {};
const nestedToPlain = (object, prefix) => {
  for (let [key, value] of Object.entries(object)) {
    key = `${prefix}_${key}`;
    typeof(value) == 'object'? nestedToPlain(value, key) : finalObject[key] = value;
  }
}

let user = {
  name: 'Vignesh',
  address: {
    personal: {
      city: 'Chennai',
      area: 'TN'
    },
    office: {
      city: 'Remote',
      area: {
        landmark: 'MyRoom'
      }
    }
  }
}

nestedToPlain(user, 'user');
console.log(finalObject);
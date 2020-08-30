import { isArray } from "util";

const json = {
  a: {
    b: {
      c: [
        { d: 'test' },
        true
      ]
    },
    f: 'test'
  }
}
//  [a.b.c[0].d, a.b.c[1]. a.f]

const resultantNodes = [];

const findNodes = (json, resultNode = '') => {
  for(let [node, value] of Object.entries(json)) {

    if(typeof(value) == 'Object') {
      resultNode = `${resultNode}.${node}`
      findNodes(value, resultNode);
    } else if(isArray(value)) {
      value.forEach((val, index) => {
        resultNode = `${resultNode}[${index}]`;
        findNodes(value, resultNode);
      });
    } else {
      resultantNodes.push(`${node}.${value}`);
    }
  }
}

findNodes(json);
let world = 'hello world';

interface User {
  username: string;
  id: number;
}

const user: User = {
  username: 'Ali',
  id: 0,
};

type MyBool = true | false;

type rang = 'kalla' | 'chita';

//generics

type myArray = Array<string>;

function getLength(obj: string | string[]) {
  return obj.length;
}

getLength('hello');

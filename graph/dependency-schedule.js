
// Complete the function runTasks which runs the tasks once their dependencies are resolved.

// some of these can be completed immediately 
// var tasks = {
//     'a': {
//       job: function (finish) {
//         setTimeout(function () {
//           console.log('a done');
//           finish();
//         }, 1000);
//       },
//       dependencies: ['d']
//     },
//     'b': {
//       job: function (finish) {
//         setTimeout(function () {
//           console.log('b done');
//           finish();
//         }, 1000);
//       },
//       dependencies: ['e']
//     },
//     'c': {
//       job: function (finish) {
//         setTimeout(function () {
//           console.log('c done');
//           finish();
//         }, 1000);
//       },
//       dependencies: ['a']
//     },
//     'd': {
//       job: function (finish) {
//         setTimeout(function () {
//        console.log('d done');
//           finish();
//         }, 1000);
//       },
//       dependencies: ['b']
//     },
//     'e': {
//       job: function (finish) {
//         setTimeout(function () {
//           console.log('e done');
//           finish();
//         }, 2000);
//       },
//       dependencies: ['c']
//     }
//    };
//    const runTasks = async (taskObject, callback) => {
//    

//     }
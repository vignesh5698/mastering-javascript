// Heading: How to create your own Stream.
// Pardon this is not a memory efficient stream. 
// Think of streaming data from database to your browser for a better example.

const { Readable, Transform } = require('stream');
const _ = require('lodash');

const inputStream = new Readable({ objectMode: true }); //  encoding: 'UTF-8'
const inputs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nDonec vestibulum eros vitae nisl pulvinar eleifend.\nSuspendisse id augue leo.\nUt ullamcorper dolor sapien, ut auctor ex tempor id.\nCras facilisis euismod sem, sit amet commodo purus hendrerit et.\nAenean eleifend rutrum justo sed semper.\nDonec tortor nunc, mollis ut porta in, suscipit nec dui. Nulla ultrices orci sed laoreet porttitor. Sed ornare congue ipsum, et congue sapien. Nulla luctus eu risus vitae tempor. Curabitur viverra, libero eget sollicitudin laoreet, diam libero aliquam lectus, eu facilisis eros enim non massa.\nPellentesque nunc ante, sollicitudin at consectetur ac, hendrerit id erat. Pellentesque euismod eros in accumsan ultricies. Vivamus et lorem ultrices metus ullamcorper egestas. Curabitur aliquam mi quis vulputate accumsan.\n',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nDonec vestibulum eros vitae nisl pulvinar eleifend.\nSuspendisse id augue leo.\nUt ullamcorper dolor sapien, ut auctor ex tempor id.\nCras facilisis euismod sem, sit amet commodo purus hendrerit et.\nAenean eleifend rutrum justo sed semper.\nDonec tortor nunc, mollis ut porta in, suscipit nec dui. Nulla ultrices orci sed laoreet porttitor. Sed ornare congue ipsum, et congue sapien. Nulla luctus eu risus vitae tempor. Curabitur viverra, libero eget sollicitudin laoreet, diam libero aliquam lectus, eu facilisis eros enim non massa.\nPellentesque nunc ante, sollicitudin at consectetur ac, hendrerit id erat. Pellentesque euismod eros in accumsan ultricies. Vivamus et lorem ultrices metus ullamcorper egestas. Curabitur aliquam mi quis vulputate accumsan.\n',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nDonec vestibulum eros vitae nisl pulvinar eleifend.\nSuspendisse id augue leo.\nUt ullamcorper dolor sapien, ut auctor ex tempor id.\nCras facilisis euismod sem, sit amet commodo purus hendrerit et.\nAenean eleifend rutrum justo sed semper.\nDonec tortor nunc, mollis ut porta in, suscipit nec dui. Nulla ultrices orci sed laoreet porttitor. Sed ornare congue ipsum, et congue sapien. Nulla luctus eu risus vitae tempor. Curabitur viverra, libero eget sollicitudin laoreet, diam libero aliquam lectus, eu facilisis eros enim non massa.\nPellentesque nunc ante, sollicitudin at consectetur ac, hendrerit id erat. Pellentesque euismod eros in accumsan ultricies. Vivamus et lorem ultrices metus ullamcorper egestas. Curabitur aliquam mi quis vulputate accumsan.\n',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nDonec vestibulum eros vitae nisl pulvinar eleifend.\nSuspendisse id augue leo.\nUt ullamcorper dolor sapien, ut auctor ex tempor id.\nCras facilisis euismod sem, sit amet commodo purus hendrerit et.\nAenean eleifend rutrum justo sed semper.\nDonec tortor nunc, mollis ut porta in, suscipit nec dui. Nulla ultrices orci sed laoreet porttitor. Sed ornare congue ipsum, et congue sapien. Nulla luctus eu risus vitae tempor. Curabitur viverra, libero eget sollicitudin laoreet, diam libero aliquam lectus, eu facilisis eros enim non massa.\nPellentesque nunc ante, sollicitudin at consectetur ac, hendrerit id erat. Pellentesque euismod eros in accumsan ultricies. Vivamus et lorem ultrices metus ullamcorper egestas. Curabitur aliquam mi quis vulputate accumsan.\n',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nDonec vestibulum eros vitae nisl pulvinar eleifend.\nSuspendisse id augue leo.\nUt ullamcorper dolor sapien, ut auctor ex tempor id.\nCras facilisis euismod sem, sit amet commodo purus hendrerit et.\nAenean eleifend rutrum justo sed semper.\nDonec tortor nunc, mollis ut porta in, suscipit nec dui. Nulla ultrices orci sed laoreet porttitor. Sed ornare congue ipsum, et congue sapien. Nulla luctus eu risus vitae tempor. Curabitur viverra, libero eget sollicitudin laoreet, diam libero aliquam lectus, eu facilisis eros enim non massa.\nPellentesque nunc ante, sollicitudin at consectetur ac, hendrerit id erat. Pellentesque euismod eros in accumsan ultricies. Vivamus et lorem ultrices metus ullamcorper egestas. Curabitur aliquam mi quis vulputate accumsan.\n',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nDonec vestibulum eros vitae nisl pulvinar eleifend.\nSuspendisse id augue leo.\nUt ullamcorper dolor sapien, ut auctor ex tempor id.\nCras facilisis euismod sem, sit amet commodo purus hendrerit et.\nAenean eleifend rutrum justo sed semper.\nDonec tortor nunc, mollis ut porta in, suscipit nec dui. Nulla ultrices orci sed laoreet porttitor. Sed ornare congue ipsum, et congue sapien. Nulla luctus eu risus vitae tempor. Curabitur viverra, libero eget sollicitudin laoreet, diam libero aliquam lectus, eu facilisis eros enim non massa.\nPellentesque nunc ante, sollicitudin at consectetur ac, hendrerit id erat. Pellentesque euismod eros in accumsan ultricies. Vivamus et lorem ultrices metus ullamcorper egestas. Curabitur aliquam mi quis vulputate accumsan.\n',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nDonec vestibulum eros vitae nisl pulvinar eleifend.\nSuspendisse id augue leo.\nUt ullamcorper dolor sapien, ut auctor ex tempor id.\nCras facilisis euismod sem, sit amet commodo purus hendrerit et.\nAenean eleifend rutrum justo sed semper.\nDonec tortor nunc, mollis ut porta in, suscipit nec dui. Nulla ultrices orci sed laoreet porttitor. Sed ornare congue ipsum, et congue sapien. Nulla luctus eu risus vitae tempor. Curabitur viverra, libero eget sollicitudin laoreet, diam libero aliquam lectus, eu facilisis eros enim non massa.\nPellentesque nunc ante, sollicitudin at consectetur ac, hendrerit id erat. Pellentesque euismod eros in accumsan ultricies. Vivamus et lorem ultrices metus ullamcorper egestas. Curabitur aliquam mi quis vulputate accumsan.\n'
];

_.each(inputs, (input) => {
  inputStream.push(input);
});
inputStream.push(null);

const modifyStream = new Transform({
  transform : (chunk, encoding, done) => {
    const modifiedString = `${chunk}`.toUpperCase();
    done(null, modifiedString);
  }
});
   
inputStream.
  pipe(modifyStream).
  pipe(process.stdout).
  on('error', (error) => {
    console.log(error);
  });




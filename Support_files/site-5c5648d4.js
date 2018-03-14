var logoAnimation = (function() {

  var logoEl = document.querySelector('.logo-animation');
  var logoTimeline = anime.timeline({ autoplay: false, loop: true });
// var CSStransforms = anime({
//   targets: '#CSStransforms .el',
//   translateX: 250,
//   scale: 2,
//   rotate: '1turn'
// });


// {
//       targets: '.dot-e',
//       translateX: [
//         { value: -600, duration: 520, delay: 200, easing: 'easeInQuart' },
//         { value: [-100, 0], duration: 500, delay: 1000, easing: 'easeOutQuart' }
//       ],
//       scale: [
//         { value: [0, 1], duration: 200, easing: 'easeOutBack' },
//         { value: 0, duration: 20, delay: 500, easing: 'easeInQuart' },
//         { value: 1, duration: 200, delay: 1000, easing: 'easeOutQuart' },
//         { value: 0, duration: 400, delay: 500, easing: 'easeInBack' }
//       ],
//       offset: 0
//     }
  logoTimeline
    .add([{
      targets: '#icon-group',
      offset: 0,
    },{
      targets: '#icon-group .logo1',
      translateX: 50,
      translateY: 50,
      scale: [0,2],
      offset: 0,
    },{
      targets: '#icon-group .logo2',
      translateX: 50,
      translateY: -50,
      scale: [0,2],
      offset: 0
    },{
      targets: '#icon-group .logo3',
      translateX: -50,
      translateY: 50,
      scale: [0,2],
      offset: 0
    },{
      targets: '#icon-group .logo4',
      translateX: -50,
      translateY: -50,
      scale: [0,2],
      offset: 0
    },{
      targets: '#icon-group .logo5',
      scale: [0,2],
      offset: 0,
    },{
      targets: '.title.into',
      opacity: [{value: 1, duration: 520, delay: 0, easing: 'easeInQuart' }, { value: 0, duration: 520, delay: 2000, easing: 'easeInQuart' } ],
      offset: 0,
      duration: 4000
    }
    ])
    .add([{
      targets: '#icon-group .logo1',
      translateX: 0,
      translateY: 200,
      easing: 'easeOutExpo',
    },{
      targets: '#icon-group .logo2',
      translateX: 0,
      translateY: 200,
      easing: 'easeOutExpo',
      offset: '-=600',
    },{
      targets: '#icon-group .logo3',
      easing: 'easeOutExpo',
      translateX: 0,
      translateY: 200,
          offset: '-=600',
    },{
      targets: '#icon-group .logo4',
      easing: 'easeOutExpo',
      translateX: 0,
      translateY: 200,
          offset: '-=600',

    },{
      targets: '#icon-group .logo5',
      easing: 'easeOutExpo',
      translateY: 200,
      offset: '-=600',
    }, {
      targets: '.title.secure-container',
      opacity: [{value: 1, duration: 520, delay: 0, easing: 'easeInQuart' }, { value: 0, duration: 520, delay: 2000, easing: 'easeInQuart' } ],
      offset: '-=2000',
      duration: 4000
    }])
    .add([{
      targets: '.title.unified-view',
      opacity: [{value: 1, duration: 520, delay: 200, easing: 'easeInQuart' }, { value: 0, duration: 520, delay: 2000, easing: 'easeInQuart' } ],
      duration: 4000
    },
      {
      targets: '.devices',
      easing: 'easeOutExpo',
      opacity: 1,
      scale: 2,
      translateY: 80,
      offset: '-=3000',
    }])
    .add([{
      targets: '.title.multiple-sources ',
      opacity: [{value: 1, duration: 520, delay: 200, easing: 'easeInQuart' }, { value: 0, duration: 520, delay: 2000, easing: 'easeInQuart' } ],
      duration: 4000  
    },{
      targets: ['.sources,.bullet'],
      scale: [0,1],
      duration: 1000,
      offset: '-=4000',
    }])
    .add([{
      targets: '.bullet.upper',
      easing: 'easeOutExpo',
      translateY: 100,
      duration: 500,
      delay: function(target, index) {
        // 100ms delay multiplied by every div index, in ascending order
        return index * 150;
      },
    }]) 
    .add([{
      targets: '.bullet.upper',
      translateY: 100,
      easing: 'easeOutExpo',
      translateX: function(target) {
        // Duration based on every div 'data-duration' attribute
        return target.getAttribute('translate-left');
      },
      delay: function(target, index) {
        // 100ms delay multiplied by every div index, in ascending order
        return index * 150;
      },
      duration: 500
    }])
    .add([{
    targets: '.bullet.upper',
      translateY: 220,
      easing: 'easeOutExpo',
      delay: function(target, index) {
        // 100ms delay multiplied by every div index, in ascending order
        return index * 150;
      },
      translateX: function(target) {
        // Duration based on every div 'data-duration' attribute
        return target.getAttribute('translate-left');
      },
      duration: 500
    },    {
      targets: '.devices',
      backgroundColor: [
      {value: '#FFF'}, // Or #FFFFFF
      {value: 'rgb(255, 0, 0)'},
      ],
      duration: 500,
      offset: '-=500'
    }])
    .add([{
      targets: '.bullet.lower',
      easing: 'easeOutExpo',
      translateY: -100,
      duration: 500,
      delay: function(target, index) {
        return index * 150;
      },
    }])  
    .add([{
      targets: '.bullet.lower',
      translateY: -100,
      easing: 'easeOutExpo',
      translateX: function(target) {
        return target.getAttribute('translate-left');
      },
      delay: function(target, index) {
        return index * 150;
      },
      duration: 500
    }
    ])
    .add([{
    targets: '.bullet.lower',
      translateY: 50,
      easing: 'easeOutExpo',
      delay: function(target, index) {
        // 100ms delay multiplied by every div index, in ascending order
        return index * 150;
      },
      translateX: function(target) {
        // Duration based on every div 'data-duration' attribute
        return target.getAttribute('translate-left');
      },
      duration: 500
    },    {
      targets: '.devices',
      backgroundColor: [
      {value: 'rgb(255, 0, 0)'}, // Or #FFFFFF
      {value: 'rgb(0, 150, 136)'},
      ],
      duration: 500,
      offset: '-=500'
    }])
    .add({
      targets: '.dot',
      opacity: [ { value: 1 }, { value: 1 }],
      translateX: [ { value: 0 }, { value: 700 }],
      translateY: [ { value: -110 }, { value: -110 } ],
      opacity:[{value: 1}, {value: 1}, {value: 0}],
      duration: 3000,
      easing: 'easeOutExpo',
    })
    .add([{
      targets: '.title.analyze',
      opacity: [{value: 1, duration: 520, delay: 200, easing: 'easeInQuart' }, { value: 0, duration: 520, delay: 2000, easing: 'easeInQuart' } ],
      duration: 4000,
      offset: '-=3000'
    }])
  function init() {
    document.body.classList.add('ready');
    setInterval(function(){ logoTimeline.play(); }, 3000);
  }

  return {
    init: init
  }

})();

window.onload = function() {
  logoAnimation.init();
}
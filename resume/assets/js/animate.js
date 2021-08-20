const heroTimeline = anime.timeline({
  easing: 'easeInOutSine',
  duration: 800,
});

heroTimeline
  .add({
    targets: '.fade-in-stagger',
    opacity: [0, 1],
    delay: anime.stagger(400, { start: 400 }),
  })
  .add(
    {
      targets: '.fade-up-stagger',
      opacity: [0, 1],
      translateY: [25, 0],
      delay: anime.stagger(350),
    },
    '-=600'
  );

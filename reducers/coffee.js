const initialState = [
  {
    title: 'Ristretto',
    icon: require('../assets/icons/RistrettoIcon.png'),
    detail: require('../assets/details/Ristretto.png'),
    detailText: 'A ristretto is an espresso shot that is extracted with the same amount of coffee but half the amount of water. The end result is a more concentrated and darker espresso extraction. It is made as follows: Extract a standard espresso shot with half the amount of water. Alternatively turn off a normal espresso extraction before the espresso starts to blonde.'
  },
  {
    title: 'Espresso',
    icon: require('../assets/icons/EspressoIcon.png'),
    detail: require('../assets/details/Espresso.png'),
    detailText: 'To make an espresso, shoot boiling water under high pressure through finely ground up coffee beans and then pour into a tiny mug. Sounds simple right? Well, it’s surprisingly difficult to master. Espressos are the purest coffee experience you can get, and while they’re not for everyone, it can be a truly singular drinking experience when you find a good brew.'
  },
  {
    title: 'Doppio',
    icon: require('../assets/icons/DoppioIcon.png'),
    detail: require('../assets/details/Doppio.png'),
    detailText: 'A double espresso (aka “Doppio”) is just that, two espresso shots in one cup. Therefore a double espresso consists of: 2 shots of espresso in an espresso cup'
  },
  {
    title: 'Lungo',
    icon: require('../assets/icons/LungoIcon.png'),
    detail: require('../assets/details/Lungo.png'),
    detailText: 'Lungo is another method of preparing coffee using an espresso machine. It is based, again, on changing the amount of water used in the typical espresso recipe. This time, we use double the normal amount of water per 7 grams of coffee. By using double the water, more caffeine will be extracted, as will more "deeper" notes of the coffee. Most, if not all, of the high notes of the coffee will be complete dissolved away through the longer extraction.'
  },
  {
    title: 'Americano',
    icon: require('../assets/icons/AmericanoIcon.png'),
    detail: require('../assets/details/Americano.png'),
    detailText: 'You can make this type of coffee quite simply by adding hot water to a shot of espresso coffee. It has been said that American soldiers during the Second World War would make this type of coffee to make their beverages last longer. It was then (apparently) adopted by American baristas after the war.'
  },
  {
    title: 'Mocha',
    icon: require('../assets/icons/MochaIcon.png'),
    detail: require('../assets/details/Mocha.png'),
    detailText: 'A mocha is a mix between a cappuccino and a hot chocolate. It is made by putting mixing chocolate powder with an espresso shot and then adding steamed milk and micro-foam into the beverage. The steps are as follows: Extract 1 shot of espresso into a cup• Add one spoon of chocolate powder into the espresso shot and mix• Add steamed milk• Add 2-3cm of micro-foam• Sprinkle chocolate powder on top'
  },
  {
    title: 'Cappucino',
    icon: require('../assets/icons/CappucinoIcon.png'),
    detail: require('../assets/details/Cappucino.png'),
    detailText: 'Possibly the most popular type of coffee in the world, a cappuccino consists of three layers (kind of like a cake). The first is a shot of espresso, then a shot of steamed milk, and finally the barista adds a layer of frothed, foamy milk. This final layer can also be topped with chocolate shavings or powder. Traditionally, Italians would consume this type of coffee at breakfast.'
  },
  {
    title: 'Latte',
    icon: require('../assets/icons/LatteIcon.png'),
    detail: require('../assets/details/Latte.png'),
    detailText: 'A café latte, or “latte” for short, is an espresso based drink with steamed milk and micro-foam added to the coffee. This coffee is much sweeter compared to an espresso due to the steamed milk. It is made as follows: Extract 1 shot of espresso into a tumbler glass. Add steamed milk, 1cm of micro-foam on top of the steamed milk'
  },
]

export default (state = initialState, { type, payload }) => {
  switch(type) {
    default: 
      return state
  }
}
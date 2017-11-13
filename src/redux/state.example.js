let state = {
  user: {
    id: 1,
    name: {
      first: 'Stephen',
      middle: 'Alexander',
      last: 'Orr'
    }
  },
  products: [
    {
      id: 1,
      name: 'Blueberry Kush',
      desc: 'A very blueberry-esk kush, airy, light. Heavy Indica or Sativia probably, not sure which one',
      image: {
        alt: 'Blueberry Kush',
        thumnail: 'http://lorempixel/200/200',
        small: 'http://lorempixel/400/400',
        medium: 'http://lorempixel/800/800',
        large: 'http://lorempixel/1200/1200'
      },
      price: [
        {
          quantity: 1,
          unit: 'gram',
          cost: 12
        },
        {
          quantity: 1,
          unit: 'ounce',
          cost: 225
        }
      ],
      stock: {
        quantity: 100,
        unit: 'kilograms'
      }
    }
  ],
  cart: [
    {
      productId: 1,
      quantity: 10,
      unit: 'grams'
    }
  ]
}